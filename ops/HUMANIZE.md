# 全书“说人话”校对任务与进度跟踪（2026-10-13 用户指令）

## 2026-10-14 当前接收范围

B06C三个主题（求职援助100行、生活困难100行、法律求助158行）已各由真正第三人按全文判据审，并闭合同版事实和实际工程，累计91公开正文。困难身份嵌套句拆开、FSC中文释义、临时补助重复否定删除，原事实审逐完整段回源重绑；JS末两表达段亦限定复核。root新增导航全文及全部导航实改完整段与差分实际通读。planning-ahead、rights-notices、admission及后续新稿继续按实际版本补审，全书HUM不提前记完成。

B06B四主题（退休136行、长期照护174行、劳动申索109行、法律体系104行）已各由真正第三人全文按判据审、同版事实及实际工程通过，累计88公开正文；root新导航全文通读。JS100行及新法律帮助/预先规划稿继续按作者→事实→第三编辑补登记，admission核心原文未闭，不能以旧136源或本批四篇宣称全书HUM完成。

HUM10将HUM02—09实际改变的50篇正文与4da4c93旧接收逐改段独立事实复核，再交换第三编辑全文/差分/静态审，最终SHA均闭合；B06A生产、70路径双视口和打印抽样通过。工伤主体与平台防热、DMP状态三处语义漂移由root回主管修正，复核后接收，不再称该三处仅纯表达。未变事实继承旧报告，verified不刷新；accepted保留previous_review。成人学习175行、照护者125行和房产税137行已全文第三编辑按唯一判据处理并集成。新增导航全文通读，新稿及admission继续追增，全书HUM不提前记完成。下方v2及HUM02—09计数为当时范围，不拿旧四draft继续跳过已集成三稿。

## 2026-10-13初始任务与历史量化

正文存在 AI 说教腔：品格训导句、撇责性免责、无信息量的否定/对比尾巴。2026-10-13 二次量化（B04 批次集成后，140 源）：`不要把/不能把/避免把` 式过度概括警告 **134 处、分布在 51 个文件**，较首轮 50 处/28 文件接近两倍，重灾区是新集成的工伤、驾驶、心理健康、债务与教育类稿件。本文件给出任务提示词（v2）、改写规则与全部内容文件的处理进度；每个文件都要过一遍，已完成 17 篇（HUM01 两篇＋HUM02 P1 十五篇）。

## 一、任务提示词（投给执行会话，整段复制）

> 你是《新加坡生活指南》的“说人话”校对执行者，工作区 `/Users/vonng/www/sg.vonng.com`。任务：对 `content/` 下全部 Markdown 文件（二核为 140 个，以 `find content -name '*.md'` 实际输出为准）逐个做一轮全文表达清理——删说教、删废话、把负向对冲改成正面直陈。开始前完整读一遍 `ops/HUMANIZE.md`：规则、本库真实例句、禁改清单、优先队列和进度表都在里面。进度表已勾选的 2 篇不要重做；标 ○ 的在途草稿（当前 4 篇：`people/school/admission`、`people/learning/adult-learning`、`people/accessibility/caregiver-support`、`work/tax/property-tax`）跳过，等集成后补。
>
> 唯一判据：每一处文字只问一个问题——**“删掉它，读者会做错什么？读者会漏掉什么重要信息？”**答不上来，就删掉，或把有用的部分并进正面句。
>
> 边界：只改表达，不动事实。数字、日期、金额、法条、机构名、URL、链接文本、H2 标题、表格结构、frontmatter、“教学虚构”标注、加粗标记、法定规则句一律保留；不新增事实断言；不提升 `verified`/`status`。
>
> 顺序：先做第七节 P1 队列（当前密度最高的工伤、驾驶、心理健康、债务争议、学费资助、分居安全、学校学习、保险等），再按目录顺序 life → people → work → rights → foundations → docs 清完其余。新稿作者自称已按规则自审的，仍逐篇全文过判据，以本次处理为准。
>
> 流程：每个文件先通读全文再动笔 → 逐段按判据处理 → 改完自读一遍 → `git diff -- <file>` 确认事实层未动 → 更新进度表并记一行改动量（删 N 处／改写 M 处）。提交只 add 本任务处理过的文件并注明 HUM 批次；不运行构建，构建与生产验收由主控执行。

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

范围：`content/` 全部 .md（2026-10-13 二核为 140 个），含 `_index` 导读与 `docs/` 选路页。导航页处理其中的说教句，不删条目与链接。`ops/` 内部记录不在范围。进度表＝初始 94＋两段追增＋补登；以 `find content -name '*.md'` 实际输出为准，发现缺登先补登再处理。

优先队列 P1（2026-10-13 二核密度，先做）：`work/employment/injury`（13）、`life/transport/driving`（10）、`people/accessibility/mental-health`（8）、`work/finance/debt-disputes`（7）、`people/school/learning`（7）、`people/learning/tuition-grant`（7）、`people/family/separation-safety`（7）、`work/finance/insurance`（6）、`work/finance/srs`（5）、`work/finance/saving-investing`（5）、`work/business/starting-business`（5）、`people/accessibility/disability`（5）、`life/housing/buying-private`（5）、`life/documents/permanent-residence`（5）、`foundations/society/religion-festivals`（5）。HUM02 已于 2026-10-13 完成全部 P1 十五篇：三核心模式 101→36，残留均逐句过判据（失权、违法、安全后果类保留为具体规则）。之后按目录顺序：life → people → work → rights → foundations → docs。HUM03—HUM05（2026-10-13）按目录顺序完成其余批次：对全部剩余 content 文件执行命中行逐条判据＋训导词／复述归纳模式全扫。HUM06—HUM08（2026-10-13，提交 3174037／6363811／e88a3a2）继而完成全部剩余文件的逐篇全文通读：life 31 篇（12 文件删 19 处）、people 22 篇（2 文件删 3 处）、work 15 篇（3 文件删 3 处）、rights 3＋foundations 23＋docs 22＋顶层导读 2 共 50 篇通读无新增改句——这些页面的否定均为统计口径、法定规则与文化解读边界，逐句通过唯一判据。至此全书 136 个非在途源全部完成全文通读处理；在途 draft（admission、adult-learning、caregiver-support、property-tax）待集成后补。

在途协调：当前 4 个 draft（`people/school/admission`、`people/learning/adult-learning`、`people/accessibility/caregiver-support`、`work/tax/property-tax`）本任务跳过，待集成后补处理；各稿作者自审时直接套用本规则。B04I 注记“学校生活/工伤/税务更正已处理”仅指各自第三编辑动过的句段，队列仍须逐篇全文过判据。

## 八、进度表（初始 94＋追增＋补登；○＝在途 draft，待集成后处理；总数以 `find` 实际输出为准）

### foundations（25）

- [x] `content/book/foundations/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/culture/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/culture/everyday-etiquette.md` — HUM01六处表达，独立差分与第三编辑通过，2026-10-13应用。
- [x] `content/book/foundations/culture/hawker-social-life.md` — HUM01三处表达，独立差分与第三编辑通过，2026-10-13应用。
- [x] `content/book/foundations/culture/inequality.md` — HUM05删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/foundations/geography/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/geography/addresses-weather.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/geography/island-neighbourhoods.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/geography/resources.md` — HUM05删2处，命中行逐条过判据，2026-10-13。
- [x] `content/book/foundations/government/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/government/institutions.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/government/participation.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/government/public-services.md` — HUM05删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/foundations/history/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/history/housing-industrialisation.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/history/memory.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/history/port-city-to-nation.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/society/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/society/communities.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/society/migration.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/society/religion-festivals.md` — HUM02删7处改写1处，2026-10-13全文过判据。
- [x] `content/book/foundations/world/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/world/perspectives.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/world/regional-ties.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/foundations/world/trade-migration.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。

### life（26）

- [x] `content/book/life/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/community/connections.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/community/neighbourhood.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/community/public-facilities.md` — HUM03删3处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/digital/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/digital/accounts.md` — HUM03删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/digital/privacy-fraud.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/digital/telecom.md` — HUM03删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/documents/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/documents/documents.md` — HUM03删3处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/documents/national-service.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/documents/permanent-residence.md` — HUM02删4处改写1处（含第四节示例句），2026-10-13全文过判据。
- [x] `content/book/life/documents/status-and-eligibility.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/documents/work-passes.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/household/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/household/consumer-rights.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/household/food-shopping.md` — HUM03删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/household/home-maintenance.md` — HUM03删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/household/keeping-pets.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/housing/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/housing/renting.md` — HUM03删3处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/housing/tenancy.md` — HUM03删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/transport/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/transport/active-mobility.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/transport/public-transport.md` — HUM03删2处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/transport/taxis-phv.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。

### people（9）

- [x] `content/book/people/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/family/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/family/birth.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/healthcare/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/healthcare/getting-care.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/healthcare/healthcare-payments.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/language/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/language/everyday-language.md` — HUM04删1处，命中行逐条过判据，2026-10-13。
- [○] `content/book/people/school/admission.md`

### rights（3）

- [x] `content/book/rights/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/rights/safety/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/rights/safety/emergencies.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。

### work（9）

- [x] `content/book/work/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/employment/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/employment/leaving-job.md` — HUM04删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/work/finance/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/finance/cpf-basics.md` — HUM04删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/work/finance/household-budget.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/tax/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/tax/leaving-singapore.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/tax/personal-tax.md` — HUM04删1处，命中行逐条过判据，2026-10-13。

### docs 与站点入口（22）

- [x] `content/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/about.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/glossary/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/profiles/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/profiles/citizen.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/profiles/family.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/profiles/pr.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/profiles/student.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/profiles/visitor.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/profiles/worker.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/digital-safety.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/having-child.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/illness.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/leaving-job.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/ns-family.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/renting.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/settling-in.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/start-work.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/urgent-help.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。

## 恢复追增（2026-10-13）

初始94文件是历史队列，范围始终包括实际全部content。HUM01已按固定版本应用，原事实日期及元数据保持；B04A生产、桌面手机和打印抽样验收已通过。下列为原队列之后的实际新增源，继续逐篇全文处理；在途草稿由作者先按本规范自审。

- [x] `content/book/life/community/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/documents/arrival-renewal.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/documents/pass-management.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/housing/buying-private.md` — HUM02删6处，2026-10-13全文过判据。
- [x] `content/book/life/housing/neighbours.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/housing/purchase-costs.md` — HUM03删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/life/transport/airport-checkpoints.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/life/transport/driving.md` — HUM02删5处改写2处，2026-10-13全文过判据。
- [x] `content/book/people/family/childcare.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/family/relationships.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/family/sexual-health.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/healthcare/medical-records.md` — HUM04删1处，命中行逐条过判据，2026-10-13。
- [x] `content/book/people/language/communication.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/language/multilingual-family.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/finance/banking.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/cross-border-trip.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/getting-married.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/family/domestic-workers.md` — HUM04删1处，命中行逐条过判据，2026-10-13。

## B04I实际源追增

2026-10-13：当前138个源文件。补齐下列未列入历史队列的实际路径；○仍为草稿。学校生活13处、工伤2处与税務更正2处表达在各自第三编辑中已处理并完成限定事实继承及B04I工程，具体SHA和范围见对应审稿报告；全书HUM队列仍未整体闭合。

- [x] `content/book/people/accessibility/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/accessibility/disability.md` — HUM02删13处，2026-10-13全文过判据。
- [x] `content/book/people/accessibility/mental-health.md` — HUM02删8处，2026-10-13全文过判据。
- [x] `content/book/people/family/separation-safety.md` — HUM02删1处（否定多绑定安全与失权后果，逐句保留），2026-10-13全文过判据。
- [x] `content/book/people/healthcare/medicines.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/healthcare/preventive-care.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/learning/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/learning/adult-learning.md` — 全文第三编辑按判据通读，独立事实及B06A工程通过，2026-10-14；不改原事实日期。
- [x] `content/book/people/learning/higher-education.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/learning/tuition-grant.md` — HUM02删8处改写1处，2026-10-13全文过判据。
- [x] `content/book/people/school/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/people/school/learning.md` — HUM02删16处，2026-10-13全文过判据。
- [x] `content/book/people/school/school-life.md` — HUM04删2处，命中行逐条过判据，2026-10-13。
- [x] `content/book/work/business/_index.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/business/starting-business.md` — HUM02删7处改写1处，2026-10-13全文过判据。
- [x] `content/book/work/employment/employment-rights.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/employment/injury.md` — HUM02删19处改写4处，2026-10-13全文过判据。
- [x] `content/book/work/finance/debt-disputes.md` — HUM02删12处改写1处，2026-10-13全文过判据。
- [x] `content/book/work/finance/insurance.md` — HUM02删5处改写1处，2026-10-13全文过判据。
- [x] `content/book/work/finance/saving-investing.md` — HUM02删5处，2026-10-13全文过判据。
- [x] `content/book/work/finance/srs.md` — HUM02删4处，2026-10-13全文过判据。
- [x] `content/book/work/tax/corrections-disputes.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/book/work/tax/cross-border.md` — HUM04删1处，命中行逐条过判据，2026-10-13。
- [x] `content/docs/routes/family-separation.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/higher-study.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。
- [x] `content/docs/routes/tax-problem.md` — HUM06—HUM08批次全文通读过判据，无新增改句，2026-10-13。

## 补登（2026-10-13 二核）

B04I 追增后新增、此前未入队的源，均为在途 draft：

- [x] `content/book/people/accessibility/caregiver-support.md` — 全文第三编辑按判据通读，独立事实及B06A工程通过，2026-10-14；不改原事实日期。
- [x] `content/book/work/tax/property-tax.md` — 全文第三编辑按判据通读，独立事实及B06A工程通过，2026-10-14；不改原事实日期。




### B06A新增源追登（2026-10-14）

- [x] `content/docs/routes/adult-learning.md` — root创建后全文表达通读；两新章导读仍私有draft，2026-10-14。
- [x] `content/docs/routes/caregiving.md` — root创建后全文表达通读；两新章导读仍私有draft，2026-10-14。
- [x] `content/docs/profiles/disability-care.md` — root创建后全文表达通读；两新章导读仍私有draft，2026-10-14。
- [x] `content/book/people/ageing/_index.md` — root创建后全文表达通读；两新章导读仍私有draft，2026-10-14。
- [x] `content/book/rights/legal/_index.md` — root创建后全文表达通读；两新章导读仍私有draft，2026-10-14。
- [x] `content/book/people/ageing/retirement.md` — root全文第三编辑136行、独立事实及B06B实际工程通过，2026-10-14。

### B06B新增源追登（2026-10-14）

- [x] `content/book/people/ageing/long-term-care.md` — root全文第三编辑174行，独立事实代理限制已补并复核，B06B工程通过。
- [x] `content/book/work/employment/employment-claims.md` — review_state_audit全文第三编辑109行，三项首次术语由作者补、异人事实再核，B06B工程通过。
- [x] `content/book/rights/legal/legal-system.md` — care_writer全文第三编辑104行，唯一AGC来源标签改段已事实重绑，B06B工程通过。
- [x] `content/docs/routes/retirement.md` — root完整新稿与选路引用通读，无重复规则库；B06B工程通过。
- [x] `content/docs/routes/legal-notice.md` — root完整新稿与选路引用通读；B06B工程通过。
- ○ `content/book/work/employment/jobseeker-support.md` — root100行完整作者自审，独立事实在途、第三编辑待签。
- ○ `content/book/rights/legal/getting-help.md` — review_state_audit158行完整作者冻结，待异人事实与第三编辑。
- ○ `content/book/people/ageing/planning-ahead.md` — care_writer完整作者稿自审/证据在途，未冻结。
