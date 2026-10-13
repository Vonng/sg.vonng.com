import { chromium } from '../.cache/browser/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=process.env.SG_PREVIEW_URL || 'http://127.0.0.1:1328';
const dest=process.env.SG_RENDER_DIR || '.cache/render-b01';
await fs.mkdir(dest,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const report={base,at:new Date().toISOString(),checks:[],errors:[],screenshots:[]};
const paths=process.env.SG_PATHS_FILE ? JSON.parse(await fs.readFile(process.env.SG_PATHS_FILE,'utf8')) : ['/','/book/','/book/life/documents/status-and-eligibility/','/book/life/documents/work-passes/','/book/life/documents/national-service/','/book/life/transport/public-transport/','/book/people/healthcare/getting-care/','/book/people/healthcare/healthcare-payments/','/book/work/finance/cpf-basics/','/book/foundations/history/port-city-to-nation/','/book/people/language/everyday-language/','/docs/routes/start-work/','/docs/profiles/student/','/docs/glossary/'];
const tablePath=process.env.SG_TABLE_PATH || '/book/work/finance/cpf-basics/';
try {
for (const [label,width,height] of [['desktop',1440,1000],['mobile',390,844]]) {
 const context=await browser.newContext({viewport:{width,height}});const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(String(e)));
 page.on('requestfailed',r=>{if(r.url().startsWith(base)&&r.failure()?.errorText!=='net::ERR_ABORTED')report.errors.push(`${r.failure()?.errorText} ${r.url()}`)});
 page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)report.errors.push(`${r.status()} ${r.url()}`)});
 for (const path of paths) {
  const r=await page.goto(base+path);assert.equal(r.status(),200);
  await page.waitForLoadState('networkidle');
  await page.evaluate(async()=>{await Promise.race([Promise.allSettled([...document.images].map(i=>i.decode())),new Promise(r=>setTimeout(r,2000))]);});
  const data=await page.evaluate(()=>({h1:document.querySelectorAll('main h1').length,width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,strong:document.querySelectorAll('main strong').length,tables:document.querySelectorAll('main table').length,brokenImages:[...document.images].filter(x=>x.complete&&!x.naturalWidth).map(x=>x.src)}));
  assert.equal(data.h1,1,`${label} ${path} H1`);assert(data.scroll<=data.width+1,`${label} ${path} overflow`);
  assert.equal(data.brokenImages.length,0,`${label} ${path} broken image ${data.brokenImages.join(', ')}`);report.checks.push({label,path,...data});
  if (['/',tablePath].includes(path)) {const shot=`${dest}/${label}-${path==='/'?'home':'topic'}.png`;await page.screenshot({path:shot,fullPage:path==='/'});report.screenshots.push(shot);}
  if(label==='mobile' && path===tablePath){
   const table=page.locator('main table').first();await table.scrollIntoViewIfNeeded();
   const shot=`${dest}/mobile-topic-table.png`;await page.screenshot({path:shot});report.screenshots.push(shot);
  }
 }
 await page.goto(base+'/');
 if(label==='desktop'){
  for(const name of ['阅读','事项','身份']){
   const parent=page.locator('.td-nav-menu__parent-link').filter({hasText:name});await parent.focus();
   const panel=page.locator('#'+await parent.getAttribute('aria-controls'));await panel.waitFor({state:'visible'});
   assert(await panel.locator('a').count()>0);report.checks.push({label,dropdown:name,children:await panel.locator('a').count()});await page.keyboard.press('Escape');
  }
 }else{
  await page.locator('[data-td-landing-menu-toggle]').click();const menu=page.locator('#td-landing-mobile-menu');await menu.waitFor({state:'visible'});
  assert(await menu.locator('a[href="/book/life/"]').isVisible());report.checks.push({label,homeMenu:true});await page.locator('[data-td-landing-menu-toggle]').click();
 }
 const card=page.locator('.sg-card').first();const target=await card.getAttribute('href');await card.focus();await page.keyboard.press('Enter');await page.waitForURL(base+target);report.checks.push({label,keyboardCard:target});
 await page.goto(base+'/book/life/documents/status-and-eligibility/');
 if(label==='mobile') await page.locator('[data-td-shell-drawer-open]:visible').first().click();
 // Expand a non-current transport branch, then verify the actual leaf is visible.
 const section=page.locator('#td-shell-sidebar a[href="/book/life/transport/"]').first();
 const row=section.locator('xpath=..');const toggle=row.locator('[data-td-shell-tree-toggle]');
 if(await toggle.getAttribute('aria-expanded')!=='true') await toggle.click();
 const leaf=page.locator('#td-shell-sidebar a[href="/book/life/transport/public-transport/"]').first();assert(await leaf.isVisible(),'non-current leaf remains hidden');
 await toggle.focus();await page.keyboard.press('Space');assert.equal(await toggle.getAttribute('aria-expanded'),'false');await page.keyboard.press('Enter');assert.equal(await toggle.getAttribute('aria-expanded'),'true');assert(await leaf.isVisible());
 await page.waitForTimeout(400);await leaf.scrollIntoViewIfNeeded();
 assert(await leaf.evaluate(e=>{const r=e.getBoundingClientRect();const hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return hit===e||e.contains(hit)}),'leaf is clipped or covered');
 const navshot=`${dest}/${label}-navigation.png`;await page.screenshot({path:navshot});report.screenshots.push(navshot);report.checks.push({label,nonCurrentBranch:true,keyboardFold:true});
 await page.goto(base+'/');
 for(const term of ['CPF','地铁','Singlish']){
  await page.locator('[data-td-shell-search-open]:visible').first().click();await page.locator('.td-shell-search__input').fill(term);
  // The theme debounces input by 80 ms; let it replace any previous result list.
  await page.waitForTimeout(200);
  await page.waitForFunction(()=>document.querySelectorAll('#td-shell-search-results [role=option]').length>0);
  const texts=await page.locator('#td-shell-search-results').innerText();assert(texts.length>0);report.checks.push({label,search:term,results:texts});await page.keyboard.press('Escape');
 }
 await page.locator('[data-td-appearance-trigger]:visible').first().click();
 await page.locator('dialog[open] label').filter({has:page.locator('[data-bs-theme-value="dark"]')}).click();
 await page.keyboard.press('Escape');
 assert.equal(await page.locator('html').getAttribute('data-bs-theme'),'dark');
 const cardColor=await page.locator('.sg-card').first().evaluate(e=>getComputedStyle(e).color);assert.notEqual(cardColor,'rgb(40, 39, 35)','dark card text uses light theme ink');
 const darkshot=`${dest}/${label}-dark.png`;await page.screenshot({path:darkshot});report.screenshots.push(darkshot);report.checks.push({label,darkMode:true});
 if(label==='desktop'){
  await page.goto(base+'/_print/book/');await page.emulateMedia({media:'print'});
  const print=await page.evaluate(()=>({pages:document.querySelectorAll('[data-td-book-page]').length,refs:document.querySelectorAll('a[href^="http"]').length,sourceLists:document.querySelectorAll('.sg-print-references').length,relative:[...document.querySelectorAll('main a[href^="/"]')].map(a=>a.getAttribute('href')),broken:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))).map(a=>a.getAttribute('href'))}));
  assert.equal(print.broken.length,0);assert.equal(print.relative.length,0);assert(print.sourceLists>=9);assert(print.pages>=9);await page.pdf({path:`${dest}/book.pdf`,format:'A4',printBackground:true});report.print=print;
 }
 await context.close();
}
assert.equal(report.errors.length,0);report.pass=true;
} catch(e){report.pass=false;report.failure=String(e);throw e;} finally {await fs.writeFile(`${dest}/report.json`,JSON.stringify(report,null,2));await browser.close();}
