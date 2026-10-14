# B06 劳动申索：独立全文事实审

结论：通过。审阅者 coverage_audit；作者 root；实际独立阅读、回源核对与签发日期 2026-10-14，Asia/Singapore。本次是新稿全文事实审，不是对作者自审、既有篇数或机器检查的代签。第三编辑与主控工程接收尚须分别完成。

## 稿件及角色边界

- 正文：`content/book/work/employment/employment-claims.md`；独立实际阅读初版和最终版完整原始 Markdown，均为 109 行，最终 19666 B，含全部正文、表格和近邻引用。
- 作者初次冻结副本：`.cache/resume-2026-10-14/employment-claims-author-frozen.md`，19495 B；初审与该副本逐字节一致，正文 SHA `268f482275e315db5861ff88f216e192cd51293b8029546735b24d49b31e9588`，完整 SHA `713f0985df7cc1759f8ee432fda2fbb0f3d3f6498bd67f40e80a2606cec79767`。初审没有提出事实修稿，随后作者按第三编辑意见仅补三项首次术语释义，复核范围见下文。
- 最终通过版本正文 SHA-256：`27f947d9a5d4a6c9ed2dea860202e9b26c770a2079c3158e8df26e4a8f87bacc`。
- 最终完整文件 SHA-256：`f9691c2732b32b33080fddeab0827346dbbb809bfdcfee91fb89c89b25cad1d1`。
- 正文摘要按项目现有约定计算：UTF-8 文本 `split('---', 2)[2]` 的完整字节，保留前导换行和所有空白；完整摘要包含元数据。
- 初审现场 HEAD 为 `a7f1ffda24ebc858338f7d653c56f87dd8564fdc`；最终术语复核现场 HEAD 已为 `5a10a90c1d536efa1f3be7b1f9f3c95783f71577`。新增正文的通过结论以以上实际文件摘要绑定，不以期间其他批次提交表示本篇接收。
- 独立阅读 `ops/evidence/b06-employment-claims.md` 和 `ops/maps/b06-employment-claims.md` 后，逐项回到原文，不以这两份作者记录或下述机器配平代替事实阅读。本人没有修改作者正文、元数据、证据、地图、accepted 或共享总账，没有运行构建、stage 或 commit。

元数据目前仍为 written / draft:true / verified 空 / reviewed_by 空。通过结论限定本篇以上正文，不是 integrated、工程、浏览器渲染或全书事实通过。

## 原件、日期与真实阅读范围

采用证据 EC01—EC20 共 20 组、21 个实际主管或服务提供机构 URL，均实际独立读了采用原文。本次还读了上诉路线总入口及 MOM 清算工资保护答复两个辅助 URL，正文未采用后者的债权顺位。本次未只读搜索摘要、作者摘记或缓存清单标题。

主要原件是 2026-10-13 正常取得的工具返回。索引 `.cache/resume-2026-10-14/hardship-readable-sources.json` 保留真实 URL、原件文件名、原始行号与原文；独立确认采用索引中的实质行确实存在于对应 `.cache/research/b05-hardship/open*.json` 原始工具文本，再实际按采用范围读原文。2026-10-14 的复读日期不冒充旧原件的取得日期，也不把网页页脚年份、更新时间或答复发布日期当成新的制度生效日。

另外独立读了作者 2026-10-14 新取得的 `hardship-current-open.json` 中 TADM 员工申请和法院资格采用段；该文件中的 Jobseeker Support 页不用于本篇。本人 2026-10-14 另正常联网打开了法院提出与送达、和解登记、tribunal 上诉三个详情 URL，真实工具返回原件保存为 `.cache/research/b06-employment-claims-facts/fresh-1.txt`，采用段全部实际阅读；新旧可比采用段支持相同期限、费用和动作。没有声称全部 21 个 URL 均在本日重新下载。

下表的行号来自真实工具返回，是定位原文的辅助信息；每项链接指向实际来源。旧原件的完整文件摘要与各次阅读范围见本人独占缓存 `final-read-index.json`。

| 证据组及实际来源 | 实际独立阅读范围 | 核对结论与适用条件 |
| --- | --- | --- |
| EC01 [TADM 员工申请](https://www.tal.sg/tadm/eservices/employees-file-employment-claim) | 旧原件 L21—131；另读作者本日新取得的工资与费用段 | 代通知金与不当解雇的分流、证据、管理/执行人员和怀孕服务期、申请材料、三日付款、收到款项才成功及三个工作日通知吻合。本人破产须通知 OA 和案件人员的动作未漏。 |
| EC02 [TADM 详细调解指南](https://www.tal.sg/tadm/mediation-guide-3) | 旧原件 L21—349 的文字采用范围完整读；未把未读示意图当证据 | 普通雇员与非雇员分流、合同待遇依据、最低服务期表、四种期限、往前一年申索期间、八周概数、陪同/授权/改期/缺席、SA 与 CRC、付款状态及非雇员费用条件吻合。RRA 专属年龄/再雇申诉由退休篇承接，本文没有擅改为普通不当解雇期限。 |
| EC03 [TADM 联系](https://www.tal.sg/tadm/contact-us) | 正常 HTML 原件对应完整 207 行纯文，实际完整读 | 一般预约、Ask TADM、不到一周的例外处理、eService 协助、SC/PR 的 ServiceSG 与外籍服务中心渠道、系统错误截图日期时间均有依据。两中心不同服务未混写；技术错误报告不等于申索成功。 |
| EC04 [MOM 劳动争议](https://www.mom.gov.sg/employment-practices/managing-employment-disputes) | 旧原件 L32—101 | EA/RRA/CDCA 与合同项目、普通与认可工会/TMF 上限、放弃超额，以及雇主经营失败的本地低收入申索人短期援助资格吻合。援助须 TADM 评估，未许诺自动给付。 |
| EC05 [法院 ECT 概述](https://www.judiciary.gov.sg/civil/file-employment-claim) | 旧原件 L53—190；特别完整读 L168—185 的相关问答 | TADM/CRC 前置、ECT 无律师出庭代理、公职/家政/海员普通排除与少数法定例外均核清；contract of service 实习生和未满 18 岁须父母/监护人代表的分支有原文支持。 |
| EC06 [法院受理条件](https://www.judiciary.gov.sg/civil/cases-eligible-employment-claim) | 旧原件 L53—142 及 L143—215 的资源/相关问答；另读作者本日新原件资格主体 | 具体工资、合同、不当解雇项目及对方新加坡关联支持；CPF、工伤和自雇普通 ECT 排除没有误写。两上限、不得为上限拆同一争议、放弃部分不能在他处追回均吻合；pre-filing assessment 不代替实际管辖判断。 |
| EC07 [法院提出与送达](https://www.judiciary.gov.sg/civil/how-to-file-serve-employment-claim) | 旧原件 L53—176；本人本日新取得 L54—159 采用主体 | CRC 起四周、提出日起七日送达、DOS 四周或首 CMC 前较早者三起算点准确。30/60 每项费用、不能合并工资/解雇或多人、证件/ACRA/英文认证翻译/口译、送达地址和修改许可均核清。 |
| EC08 [法院和解登记](https://www.judiciary.gov.sg/civil/register-settlement-agreement) | 旧原件 L53—152；本人本日新取得同一主体 L54—152 | 可选择登记；所有人签署后四周、10 费、Notice 取得后立即送达 Notice 与 SA 副本、未登记先民事裁令、登记三年及期前申请再延长三年吻合。 |
| EC09 [法院 CMC](https://www.judiciary.gov.sg/civil/at-employment-claims-CMC) | 旧原件 L53—102 | registrar 管理与促和解、consent order、材料就绪后转 magistrate、强制出席、改期需批准吻合。通知/申请没有写成自动延期。 |
| EC10 [法院聆讯](https://www.judiciary.gov.sg/civil/at-employment-claims-hearing) | 旧原件 L53—96 | 听审出席、付款/驳回/适用复职或补偿/费用及 CJTS 取得裁令有据。未替具体个案计算赔偿或保证裁决结果。 |
| EC11 [法院裁令执行](https://www.judiciary.gov.sg/civil/enforce-employment-claims-order) | 旧原件 L53—67 | ECT 不自行启动；single enforcement application 可选一或多种方法；未知资产可申请 examination of enforcement respondent 的三个动作吻合。未声称保证收款。 |
| EC12 [法院缺席撤销](https://www.judiciary.gov.sg/civil/set-aside-employment-claims-order-made-in-absence) | 旧原件 L53—140 | 缺席裁令日起七日、30 费、申请日起七日送达两通知、参加撤销听审、获准才撤销，分别核过。没有与上诉混同。 |
| EC13 [registrar 裁令上诉](https://www.judiciary.gov.sg/civil/appeal-employment-claims-order-registrar) | 旧原件 L53—120 | CMC 裁令日起七日申请、100 费、申请日起七日送达 Notice of Appeal 与 Notice of Hearing、由 tribunal magistrate 处理有据。缺席解释另走 set aside 的选路有据。 |
| EC14 [tribunal 裁令上诉](https://www.judiciary.gov.sg/civil/appeal-employment-claims-order-tribunal) | 旧原件 L53—303；本人本日新取得 L106—259 采用主体 | 法律/管辖理由、District Court 许可七日/100/申请后七日送达、许可后七日 NOA/600、提取许可令 50、担保 500 等费用、记录通知后 21 日 appellant's case/600、其提出后 14 日 record of appeal 都核到各完整段。律师代表许可/High Court 阶段及 stay 须另申请获准没有扩大为 ECT 可律师代理或上诉自动暂停。 |
| EC15 [MOM 欠薪申索与遣返](https://www.mom.gov.sg/faq/employment-disputes/what-should-i-do-if-my-employer-attempts-or-threatens-to-send-me-home-when-i-have-outstanding-salary-claim) | 旧原件 L32—37 | 有效工资申索尽早 TADM、机场未付款向移民官员求助、找其他就业的机会有据；没有由该问答推定自动新准证、免费住所或无条件工作资格。 |
| EC16 [TADM 清算/JM/破产](https://www.tal.sg/tadm/faqs/advisory/liquidation-jm-bankruptcy) | 旧原件 L21—26，并回核 EC01 破产段 | 该类公司不在 TADM 的 ECA 程序提出，直接向 liquidator/JM/Insolvency Office 提债权有据；未补未经采用来源支持的顺位、截止日或获偿比例。 |
| EC17 [MOM 未付款执行协助答复](https://www.mom.gov.sg/newsroom/parliament-questions-and-replies/2026/0505-written-answer-to-pq-on-enforcement-support-for-defaulted-salary-payments) | 旧原件 L32—45；答复日 2026-05-05 | TADM 可联系雇主并指导法院执行申请有据。答复所说未来改革未被写成已经生效或替代当前流程。 |
| EC18 [MOM 各国籍财务援助答复](https://www.mom.gov.sg/newsroom/parliament-questions-and-replies/2026/0114-written-answer-to-pq-on-financial-support-without-means-testing-to-workers-of-all-nationalities) | 旧原件 L32—45；答复日 2026-01-14 | 各计划有经济条件/资格评估；外国人士可向 MWC 求助的范围有据。正文未把本地 Jobseeker/SSO 或现金援助推给所有国籍。 |
| EC19 [TADM 平台服务费问答](https://www.tal.sg/tadm/faqs/advisory/pw) | 旧原件 L21—30，并完整读 EC02 L309—338 | 先 operator、会员 NTUC、非会员 Ask TADM/按案核 SCT；完整指南的六个月会员条件与咨询后可能调解、按争议金额 40/60 费用均正确，未混成雇员 ECT 资格或按月薪计平台服务费。 |
| EC20 [MWC 联系](https://www.mwc.org.sg/contact-us)、[移工法律中心](https://www.mwc.org.sg/how-we-help/migrant-workers-law-centre-at-mwc) | 两旧原件分别 L8—52、L0—22 | 6536 2692、579 Serangoon Road、WP/S Pass 免费意见/指导/代表、预约与问题范围支持。未把法律中心免费范围泛化至所有外籍准证，未混用 Help Centre 与 Law Centre 的营业时段。 |

辅助阅读：法院上诉总入口 L54—55 用来确认分路；[MOM 清算工资保护答复](https://www.mom.gov.sg/newsroom/parliament-questions-and-replies/2026/0113-written-answer-to-pq-on-recovery-of-wages-n-protection-measures-for-workers) L34—52 作为边界交叉阅读，正文未采用其分配顺位，因此不以它代替清算个案法定顺位或申债期限研究。

## 高影响事实的逐项结论

1. 普通公民、PR、外籍雇员先核真实 contract of service 和具体项目；准证名本身不是每项劳动申索的资格结论。学生、家属或访客的实际工作权限与某项法定申索资格仍需分别核，正文提供合同/准证记录及身份篇入口，没有以移民类别推定一律可工作或一律不能索赔。家政、海员、公职/法定机构的普通路线排除，同时保留有实际法院问答支持的特定法定例外。
2. 管理/执行人员有通知、代通知金或非自愿辞职，至少六个月；无通知解雇和其他一般雇员不受同一六个月最低期。怀孕被解雇须另核至少三个月等条件。正文分别写明，不把两门槛合并，也不删去非自愿辞职。
3. 在职工资一年、离职六个月、实际可索期间从提交前一年、一般解雇一月、怀孕解雇分娩日起两月及另索工资六个月，均有完整 TADM 采用段支持。怀孕申索可在最后工作日后提出，未误写为必须等分娩。
4. TADM 费用每项 10/20，ECT 每项 30/60；两种申索分别提出/收费/限额。20k/30k 的资格条件与弃超额不可追回、不能拆同一争议完整保留。没有把提交未付款、发错误表或协商中当成已经守住期限。
5. 调解后的 SA 登记和 CRC 至 ECT 是不同动作；全签后四周和 CRC 签发后四周不是同一起点。登记 Notice 立即送达；ECT 七日送达和 DOS 四周/首 CMC 前较早者分别保留。亲送/挂号以及其他方式需主管指示的边界准确。
6. 默认裁令撤销、registrar 上诉、tribunal 许可至 High Court 三支没有混用起算点和费用。后续 21/14 日、许可与新案记录、律师代理阶段、另申请 stay 都与原文一致。正文以律师核完整预算和后续动作衔接，未声称列出全部诉讼收费。
7. 执行须本人决定并启动；TADM 协助不是自动执行。外籍有效欠薪申索、机场求助、转雇机会与居留准证个案指示分别写；MWC 法律中心限定 WP/S Pass。平台报酬争议与公司清算均有独立渠道，没有用雇员普通 ECT 流程覆盖。
8. 没有教学虚构金额/日期算例需要复算。“应收—实收＝差额”只是整理已付未付的计算格式；各实际费用逐项对主管费表核对，并未加总为固定总成本。

## 差异处理与未核边界

TADM 详细指南的 SA 段使用 must register，而法院详页明确说明可以选择不登记，未登记仍为有约束力的合同，执行前须另诉取得裁令。两个采用段都真实读过；正文按实际办理登记的法院规则表达为“可以登记”，保留全签后四周期限及未登记的执行后果，事实审认可这一处理。未把不一致来源藏成“全部主管措辞完全相同”。

TADM 员工申请页的工会号码同时出现 8008/8088，正文使用自己的工会渠道，未复制冲突电话。平台短问答未列会员六个月，完整指南明确列出；正文分别标示其出处与条件，没有声称短问答提供了同一细节。

只采用公开主管 HTML 详细原文与正常联系页。未打开私人 Singpass/CJTS 案件、实际申请/付款/上传、执行表件、清算申债表或全套费用；公开 HTML 引用的 PDF 手册/表格内容没有被冒充为已读。本文关于 PDF 仅采用公开 HTML 的材料格式要求，不采用未读 PDF 字段。没有重新探测既有失败的 SSO/WSG 路由，未完整逐条重读 ECA/EA/CDCA/IRA 法规；本结论明确是主管办理详页对本稿采用事实的核对，而不是所有法规和个案法律问题的完备意见。

对于未实际采用的清算分配顺位/申债截止、特定身份非法工作争议的最终认定、外籍每案具体停留/住所/转雇保障、执行方法全费表与结果，不作独立肯定。正文没有添加这些未核断言，并把实际动作接到主管/案件人员及相关主文。

## 第三编辑术语补充的限定复核与最终重绑

2026-10-14，作者 root 按第三编辑 review_state_audit 的意见，只改了第 15、33、48 行的三个完整段。本人实际阅读这三个完整原始改段、初稿/最终稿完整差分及作者 `.cache/resume-2026-10-14/employment-claims-editorial-terms.json`，再把最终 109 行完整原始 Markdown 通读。

- 首段补 Tripartite Alliance for Dispute Management（TADM，劳动争议调解机构）：独立回读 EC04 原文 L32、34，英文机构全名一致；中文是机构功能释义，没有声称是未见来源的正式中文名，未改申请或调解规则。
- 工资项目段补年度工资补贴（Annual Wage Supplement，AWS）：独立回读 EC02 原文 L78，英文全称与缩写一致；合同/集体协议依据的条件完整保留，没有把 AWS 改成强制普遍待遇。
- 材料段补关键雇佣条款（Key Employment Terms，KET）：独立回读 EC01 原文 L65、103，材料名称与范围一致；没有改变需要的证据、身份信息或提交方法。

逐处逆替这三个新增释义后，与作者初冻完整字节及正文摘要一致。原元数据、引用链接、数字、资格、期限、结构和其他正文未变。未变事实继承上文已经完成的本篇全文实读与独立采用原文核对，没有重复全部政策回源或替第三编辑签名；三个术语段的语义核对通过。限定复核和逆差分证明保存于本人缓存 `terms-rebind.json`。

## 签发与下一环节

没有需要作者应用的事实修正。全部原始 Markdown 与最终源文件实际通读并核对采用原文后，2026-10-14 签发以上正文 SHA 的独立事实通过。机器摘要和缓存行匹配仅用于确认版本与定位原件；它们不是阅读或语义通过依据。

第三编辑由另一人执行，随后由 root 独占接收、状态转换、共享账、生产门禁与实际渲染。若后续正文有实质改变，应回到改段和主管依据限定复核并绑定最终摘要；元数据接收更改不得被描述为本次已执行的工程步骤。
