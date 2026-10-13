# 全书“说人话”校对任务与进度跟踪（2026-10-13 用户指令）

正文存在 AI 说教腔：品格训导句、撇责性免责、无信息量的否定/对比尾巴。本库量化（2026-10-13 grep）：`不要把/不能把/避免把` 式过度概括警告 **50 处、分布在 28 个文件**，是最大病灶；另有“不等于/并非”类对比 24 处、软对冲堆叠（“可以先……也可以……再确认”）集中于文化与社会类页面。本文件给出任务提示词、改写规则与全部 94 个内容文件的处理进度；每个文件都要过一遍。

## 一、任务提示词（投给执行会话，整段复制）

> 你是《新加坡生活指南》的“说人话”校对执行者，工作区 `/Users/vonng/www/sg.vonng.com`。任务：对 `content/` 下全部 Markdown 文件逐个做一轮全文表达清理——删说教、删废话、把负向对冲改成正面直陈。规则、本库真实例句、禁改清单和进度表在 `ops/HUMANIZE.md`，开始前完整读一遍。
>
> 唯一判据：每一处文字只问一个问题——**“删掉它，读者会做错什么？读者会漏掉什么重要信息？”**答不上来，就删掉，或把有用的部分并进正面句。
>
> 边界：只改表达，不动事实。数字、日期、金额、法条、机构名、URL、链接文本、H2 标题、表格结构、frontmatter、“教学虚构”标注、加粗标记、法定规则句一律保留；不新增事实断言；不提升 `verified`/`status`。进度表标 ○ 的在途 draft 文件跳过，等集成后再处理。
>
> 流程：每个文件先通读全文再动笔 → 逐段按判据处理 → 改完自读一遍 → `git diff` 确认事实层未动 → 更新 `ops/HUMANIZE.md` 进度表并记改动量。按优先队列推进；提交时只 add 本任务处理过的文件。构建与生产验收由主控执行。

## 二、唯一判据

每处文字只问：**删掉它，读者会做错什么？读者会漏掉什么重要信息？**答不上来就删。答得上来，才允许保留否定，并把否定写成具体规则，不写成对读者泛泛错误的警告。

## 三、默认删（无需犹豫的五类）

**1. 无信息量的否定/对比尾巴**：“A，而不是 B”“不等于”“是两回事”“不要把 X 套到 Y／推广到所有 Z”。B 不是读者正在犯的真实错误时，整个尾巴删；适用范围本来就该写在正面句里。

- `life/housing/renting.md`：「较大户型和合资格私宅的八人放宽措施目前延至 **2028 年 12 月 31 日** ；不要把“八人”套用到所有房源。」→ 删尾巴。适用范围（较大户型与合资格私宅）已在正面句中。
- `foundations/society/religion-festivals.md`：「出发前再检查当日是否有礼拜、特别活动、人数限制或预约要求；不要把一处场所的开放安排推广到所有同类场所。」→ 删尾巴，前半句已是完整行动指令。

**2. 道德说教与品格训导**：教读者做人而非办事的句子。整句删；确有场景信息时只留一句具体动作，不带训导框架。

- `foundations/culture/everyday-etiquette.md`：「接到这样的答复，尊重对方给出的范围。不要依据对方的姓名、外貌或族群，推断他一定吃什么、喝什么，或愿意谈什么。」→ 删。删掉后读者不会做错任何事。
- `foundations/culture/everyday-etiquette.md`：「避免把一次问题扩大成对一家人或一个群体的评价。」→ 删。
- `life/digital/privacy-fraud.md`：「谈论别人的受骗经历时，先隐去证件、联系方式和账户资料，让提醒本身也保护当事人。」→ 删。防骗页的读者需要止损与报案，不是谈论他人受骗的社交礼仪。

分寸：礼节页本身就是讲相处的，“拍别人前先征求同意”“送食物前问有无饮食限制”是页面主题内的实用信息，保留；删的是超出页面题目、对读者品格的一般训导。

**3. 撇责性免责与元话术**：“不应理解为”“不能据此”“本页不……”“不构成……”“以主管当日原件为准”。同类意思每页至多一处最短表述，多数直接删。例外：`docs/about.md` 的“独立非官方指南”说明与正文的“教学虚构”标注是项目规定，必须保留。

**4. 复述性总结**：前文已分别说明后的“分别确认／分别办理／各有条件／是三个阶段”式归纳，整句删。

**5. 跨题旁白与铺垫口水**：讲 X 时岔到“别处与此不同”的句子；开头的渲染式铺垫；对行动无影响的评论。

- `foundations/culture/everyday-etiquette.md` 开头：「在一个多语、不同信仰与生活节奏交叠的城市，同事、邻居和新认识的朋友可能有不同习惯；」→ 删，前后两句直接相连。
- `foundations/culture/hawker-social-life.md`：「谈到一餐是否“便宜”，也要看食客预算与分量；工薪家庭每天的餐费，和偶尔前来尝鲜的开支，承担的作用不同。」→ 删，与点餐行动无关。

## 四、保留否定的唯一理由：删掉会导致读者实际做错

此时保留，并写成具体规则＋真实后果：

- `life/digital/privacy-fraud.md`：「1799 提供防骗咨询，但不能替你报案。案件进度应联系确认信中列出的调查人员；被冻结银行账户的进度也不能从 1799 查询。」→ 保留。读者真会坐在 1799 等案件进度。
- `life/digital/privacy-fraud.md`：「证件号码可以用来区分个人，身份验证则是证明正在操作的人就是本人。」→ 保留。这个区分正是 MDDI 2026-12-31 禁令的适用边界。
- `life/documents/permanent-residence.md`：「不要把达到年数或与公民结婚理解为自动获批。」→ 保留事实但改正面句：「公民申请按完整材料综合评估；居住年数或与公民结婚都不自动获得批准。」

## 五、禁改清单（事实层）

数字、日期、金额、百分比；法条与政策名；机构名；URL 与链接显示文本；H2 标题文字；表格结构；frontmatter；` **加粗** ` 标记；`{{< relref >}}` 与 `[文字](URL)` 链接；“教学虚构”标注；法定规则本身（「房东不能收申请费」是规则，不是对比尾巴）。整段纯说教可删；删整个小节、合并小节属结构变更，记录建议交主控，不直接做。措辞清理不提升 `verified`，不改 `status`/`reviewed_by`；不新增事实——需要新事实走事实审。

## 六、每文件流程

1. 通读全文（含 frontmatter），再动笔；不按 grep 命中机械替换。
2. 逐段执行唯一判据；删句后重读上下文，句子接得上、不产生歧义。
3. 全页自读一遍。
4. `git diff -- <file>` 自查：只见句段删改，URL/H2/表格/frontmatter/数字无变化；`grep -nE "不要把|不能把|避免把|而不是|不等于|并非" <file>` 复查残留（残留须能通过判据）。
5. 进度表勾选，记一行改动量（删 N 处／改写 M 处）。

## 七、范围、优先队列与协调

范围：`content/` 全部 94 个 .md，含 `_index` 导读与 `docs/` 选路页。导航页处理其中的说教句，不删条目与链接。`ops/` 内部记录不在范围。

优先队列 P1（实测密度最高，先做）：`culture/everyday-etiquette`、`culture/hawker-social-life`、`society/religion-festivals`、`life/housing/renting`、`life/digital/telecom`、`life/community/neighbourhood`、`life/community/connections`、`life/documents/permanent-residence`、`life/documents/documents`、`work/finance/household-budget`。之后按目录顺序：life → people → work → rights → foundations → docs。

在途协调：标 ○ 的 8 个 draft 文件属 B03C 在途稿件，本任务跳过，待其 `integrated` 后补处理；各稿所有者在自审时直接套用本规则。

## 八、进度表（94 文件；○＝在途 draft，待集成后处理）

### foundations（25）

- [ ] `content/book/foundations/_index.md`
- [ ] `content/book/foundations/culture/_index.md`
- [ ] `content/book/foundations/culture/everyday-etiquette.md`
- [ ] `content/book/foundations/culture/hawker-social-life.md`
- [ ] `content/book/foundations/culture/inequality.md`
- [ ] `content/book/foundations/geography/_index.md`
- [ ] `content/book/foundations/geography/addresses-weather.md`
- [ ] `content/book/foundations/geography/island-neighbourhoods.md`
- [ ] `content/book/foundations/geography/resources.md`
- [ ] `content/book/foundations/government/_index.md`
- [ ] `content/book/foundations/government/institutions.md`
- [ ] `content/book/foundations/government/participation.md`
- [ ] `content/book/foundations/government/public-services.md`
- [ ] `content/book/foundations/history/_index.md`
- [ ] `content/book/foundations/history/housing-industrialisation.md`
- [ ] `content/book/foundations/history/memory.md`
- [ ] `content/book/foundations/history/port-city-to-nation.md`
- [ ] `content/book/foundations/society/_index.md`
- [ ] `content/book/foundations/society/communities.md`
- [ ] `content/book/foundations/society/migration.md`
- [ ] `content/book/foundations/society/religion-festivals.md`
- [ ] `content/book/foundations/world/_index.md`
- [ ] `content/book/foundations/world/perspectives.md`
- [ ] `content/book/foundations/world/regional-ties.md`
- [ ] `content/book/foundations/world/trade-migration.md`

### life（26）

- [ ] `content/book/life/_index.md`
- [○] `content/book/life/community/connections.md`
- [○] `content/book/life/community/neighbourhood.md`
- [○] `content/book/life/community/public-facilities.md`
- [ ] `content/book/life/digital/_index.md`
- [ ] `content/book/life/digital/accounts.md`
- [ ] `content/book/life/digital/privacy-fraud.md`
- [ ] `content/book/life/digital/telecom.md`
- [ ] `content/book/life/documents/_index.md`
- [○] `content/book/life/documents/documents.md`
- [ ] `content/book/life/documents/national-service.md`
- [ ] `content/book/life/documents/permanent-residence.md`
- [ ] `content/book/life/documents/status-and-eligibility.md`
- [ ] `content/book/life/documents/work-passes.md`
- [ ] `content/book/life/household/_index.md`
- [ ] `content/book/life/household/consumer-rights.md`
- [ ] `content/book/life/household/food-shopping.md`
- [ ] `content/book/life/household/home-maintenance.md`
- [ ] `content/book/life/household/keeping-pets.md`
- [ ] `content/book/life/housing/_index.md`
- [ ] `content/book/life/housing/renting.md`
- [○] `content/book/life/housing/tenancy.md`
- [ ] `content/book/life/transport/_index.md`
- [○] `content/book/life/transport/active-mobility.md`
- [ ] `content/book/life/transport/public-transport.md`
- [○] `content/book/life/transport/taxis-phv.md`

### people（9）

- [ ] `content/book/people/_index.md`
- [ ] `content/book/people/family/_index.md`
- [ ] `content/book/people/family/birth.md`
- [ ] `content/book/people/healthcare/_index.md`
- [ ] `content/book/people/healthcare/getting-care.md`
- [ ] `content/book/people/healthcare/healthcare-payments.md`
- [ ] `content/book/people/language/_index.md`
- [ ] `content/book/people/language/everyday-language.md`
- [○] `content/book/people/school/admission.md`

### rights（3）

- [ ] `content/book/rights/_index.md`
- [ ] `content/book/rights/safety/_index.md`
- [ ] `content/book/rights/safety/emergencies.md`

### work（9）

- [ ] `content/book/work/_index.md`
- [ ] `content/book/work/employment/_index.md`
- [ ] `content/book/work/employment/leaving-job.md`
- [ ] `content/book/work/finance/_index.md`
- [ ] `content/book/work/finance/cpf-basics.md`
- [ ] `content/book/work/finance/household-budget.md`
- [ ] `content/book/work/tax/_index.md`
- [ ] `content/book/work/tax/leaving-singapore.md`
- [ ] `content/book/work/tax/personal-tax.md`

### docs 与站点入口（22）

- [ ] `content/_index.md`
- [ ] `content/book/_index.md`
- [ ] `content/docs/_index.md`
- [ ] `content/docs/about.md`
- [ ] `content/docs/glossary/_index.md`
- [ ] `content/docs/profiles/_index.md`
- [ ] `content/docs/profiles/citizen.md`
- [ ] `content/docs/profiles/family.md`
- [ ] `content/docs/profiles/pr.md`
- [ ] `content/docs/profiles/student.md`
- [ ] `content/docs/profiles/visitor.md`
- [ ] `content/docs/profiles/worker.md`
- [ ] `content/docs/routes/_index.md`
- [ ] `content/docs/routes/digital-safety.md`
- [ ] `content/docs/routes/having-child.md`
- [ ] `content/docs/routes/illness.md`
- [ ] `content/docs/routes/leaving-job.md`
- [ ] `content/docs/routes/ns-family.md`
- [ ] `content/docs/routes/renting.md`
- [ ] `content/docs/routes/settling-in.md`
- [ ] `content/docs/routes/start-work.md`
- [ ] `content/docs/routes/urgent-help.md`
