import { chromium } from '../.cache/browser/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=process.env.SG_PREVIEW_URL || 'http://127.0.0.1:1328';
const dest=process.env.SG_RENDER_DIR || '.cache/render-b01';
await fs.mkdir(dest,{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const report={at:new Date().toISOString(),base};
try{
 const page=await browser.newPage({viewport:{width:390,height:844}});
 await page.goto(base+'/');await page.waitForLoadState('networkidle');
 const icons=await page.locator('.td-nav-menu-zone > a i,.td-nav-menu-zone > div > a i').evaluateAll(xs=>xs.map(x=>x.className));
 assert.equal(new Set(icons).size,4);report.menuIcons=icons;
 await page.locator('[data-td-landing-menu-toggle]').click();await page.locator('#td-landing-mobile-menu').waitFor({state:'visible'});
 await page.screenshot({path:`${dest}/mobile-home-menu.png`});
 await page.locator('[data-td-landing-menu-toggle]').click();
 await page.locator('[data-td-appearance-trigger]:visible').first().click();
 await page.locator('dialog[open] label').filter({has:page.locator('[data-bs-theme-value="dark"]')}).click();await page.keyboard.press('Escape');
 await page.goto(base+'/_print/book/');await page.waitForLoadState('networkidle');await page.emulateMedia({media:'print'});
 report.print=await page.evaluate(()=>({background:getComputedStyle(document.documentElement).backgroundColor,cells:[...new Set([...document.querySelectorAll('table th,table td')].map(x=>getComputedStyle(x).color))],sources:document.querySelectorAll('.sg-print-references').length,relative:[...document.querySelectorAll('main a[href^="/"]')].map(x=>x.getAttribute('href')),broken:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))).map(a=>a.getAttribute('href'))}));
 assert.equal(report.print.background,'rgb(255, 255, 255)');assert.deepEqual(report.print.cells,['rgb(17, 17, 17)']);assert.equal(report.print.relative.length,0);assert.equal(report.print.broken.length,0);
 await page.pdf({path:`${dest}/book.pdf`,format:'A4',printBackground:true});report.pass=true;
}catch(e){report.pass=false;report.failure=String(e);throw e;}finally{await fs.writeFile(`${dest}/print-report.json`,JSON.stringify(report,null,2));await browser.close();}
