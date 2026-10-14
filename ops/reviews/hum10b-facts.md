# HUM10-B：25篇维护差分限定事实审

审阅者 review_state_audit；维护作者为此前root，修订作者为本轮root；审阅日期2026-10-14（Asia/Singapore）。审阅者未参与正文改写，独占本报告及同名JSON；没有改正文、accepted、元数据或共享台账，没有构建、stage或提交。

**结论：25篇最终维护版本通过限定差分事实审；三处反馈均已由作者修正并复核，无剩余事实阻断。** 本结论仍须另一位第三编辑与主控工程接收，不代表已公开集成。

基准4da4c93的25篇统一正文SHA全部与当时accepted相符。首冻结a7f1ffda24ebc858338f7d653c56f87dd8564fdc；最终只有injury两处、debt-disputes一处反馈修订。本人逐篇实际对读所有旧/新改变段及完整差分上下文，逐条判断资格、例外、禁止、流程、期限、费用和风险；未变段以严格版本比对和原独立事实记录限定继承，未重新签发整页政策核验或刷新原verified。

## 版本与逐篇语义结论

完整旧/首冻/最终SHA、原接收记录、原事实报告、全部变更行范围、机器辅助结果和回源组均在[hum10b-facts.json](hum10b-facts.json)。下表只用短SHA便于阅读，接收必须采用JSON完整值。

| 页面（content/book/） | 基准正文SHA | 最终正文SHA | 语义结论 |
| --- | --- | --- | --- |
| life/transport/public-transport.md | `ea39157484fc` | `5072d90f88a4` | 删去短程票价概括全岛、两站距离替代刷卡时间的反面尾句；起终点查价、换乘计时和指定15分钟例外仍在。 |
| life/transport/taxis-phv.md | `0383e0045787` | `b761b24e0b51` | 删起步价、轮椅大车容量和取消风险复述；公司/车型/订单费用条件、轮椅固定与承载确认、人数与行李容量、下单前确认均保留。 |
| people/accessibility/disability.md | `baa6a1622c9b` | `1364e02504c0` | 13组差分保留ATF公民/PR及永久残障、4800及经济评估、先批后买不追付、60岁分流、SMF附加条件、SAVH外国自费/一般登记、JPJS/H2W条件、ODP雇主计划及DAC2025费表时期。删2026重复年份和重复禁误推，不删实际金额或年份条件。 |
| people/accessibility/mental-health.md | `190b3a1f4cd6` | `5246ab6d4c26` | SOS表仍标WhatsApp英语文字且不接语音图片视频；webCHAT暂停、IMH尽力安排语言、身份费率、诊费组成、2026/2027支付分期及家政工服务限定均保留。表格仅删除单元格尾句，列数不变。 |
| people/family/childcare.md | `59d75d5547f2` | `fbe5a1c0aa5e` | 删选择园方的元说明及KCare套数字提醒；记录具体约定的行动保留，2027ECDA/KiFAS门槛和KCare另按MOE公布均保留，未扩大未来补贴。 |
| people/family/domestic-workers.md | `4ec7dae302a1` | `bb01a6980bd2` | 删未明确列出不等于全准/全禁的复述；前表仍逐类区分准证，未知类别明确未解决且必须向MOM提供实际资料确认。 |
| people/family/separation-safety.md | `3437f001435f` | `1e2b66baf551` | 删外国居民不可套一般LAB资格的重复尾句；一般SC/PR资格、海牙特定例外、经济/案情审、未21岁代申请均完整。 |
| people/healthcare/getting-care.md | `b5bb781c2fc6` | `c95e23934d9c` | 仅删到院登记与预期不同的结果说明；GP/综合诊疗所转介、紧急症状995和本人身份/网络/支付确认动作不变。 |
| people/healthcare/medical-records.md | `c38c9b0f8132` | `421ef41ede5d` | 仅删这是报告申请条件的尾句；开头医院申请同意表、NUHS Form A对此项minor的21岁/服役/婚姻例外及正确分支动作明确，未写成一般法定成年定义。 |
| people/language/everyday-language.md | `487a9a832051` | `bc3985690c03` | 删并非所有工作场合禁Singlish的免责声明；正文仍称建议用完整简短句留档，未升级为法定或全职场禁止。 |
| people/learning/tuition-grant.md | `a62d60bb4472` | `0e77d67c0bcd` | 9组差分保留指定全日制课程、本人身份、两担保人严格年龄/财力、准证例外、身份变更的三年义务、三月/一年冲突、正式延期批准与八周取得批准、未批升学追偿、BG和discharge程序；删重述性警告不解除任一条件。 |
| people/school/learning.md | `2654d1f5e394` | `a710466c6d06` | 16组差分保留各校类别、2026身份费表及GST、FAS公民条件/项目、Edusave禁用、AL6—8、学校评估与资源、PSLE复核5工作日和升中截止、SPED转介及外国学额例外、IEP/ITP、义务教育/MOE批准、国际校合同费用和FPS边界。表格只删单元格尾句，未改结构。 |
| people/school/school-life.md | `fc044bc26adc` | `4174d82e656d` | 删CCA缺席和搬家服务泛用的尾句；CCA是指导时数及先商量、公民/PR在读P1—5且搬家、不能自选/不保证及未获安排继续原校均保留。 |
| work/business/starting-business.md | `4e8f99eef6c9` | `880879035efc` | 8组差分保留准证权限及DP配偶分支、EP第二董事批准/无关联评估、外国CSP要求与Singpass步骤页冲突、本地任职条件、股本和营运预算、成功通知/UEN/牌照。ACRA原件支持不能仅凭登录自行递交；这是先核资格的具体操作边界，未改成所有外国人永不可自办。 |
| work/employment/injury.md | `ded294aee91c` | `1e76a24351da` | 16组维护差分中的两处规则强化已由root按反馈修正；最终保留员工或代表通知雇主、按ACOP核平台热措施。AME/工作日/轻工作、PI上下限乘百分比、职业病双期限、平台ADE/AME、多平台取高、14/28日转换、MDW保险、WBGT和2026-12-01未来措施均保留。数字及加粗序列差异来自重复116000/12月工资基数/14与28等提示删除和明确通知对象，不能称全部数字或加粗不变。 |
| work/employment/leaving-job.md | `ec71de55198a` | `a8359d19444b` | 删只看到账总数和移工欠薪/雇主中介争议不可混同的尾句；结算逐项清单、佣金合同、IR21暂扣、MDW合同通知、TADM不受理MDW和MOM渠道完整。 |
| work/finance/banking.md | `5653a945cadf` | `025136e9df72` | 删重复支付的结果警告；失败后查记录、补缴、确认是否重扣并保留凭据仍在，GIRO未获批继续缴费和停止授权动作不变。 |
| work/finance/cpf-basics.md | `a02f942c16e6` | `d97936b93e8c` | 删学生二字不可判断的尾句；特定学生/机构豁免及核本人的学校和工作安排明确，SC/PR月总工资50门槛不变。 |
| work/finance/debt-disputes.md | `56c13a38c8b5` | `2f7a6567f626` | 13组差分保留SC/PR规则范围、DBS指定外籍准证/45000/有效期、逾期与新审查、持牌借贷费用法院例外、2026-09-15冷静期、DCP/DMP/MDMP条件及收费；新增还款历史留存断言已移除，最终按CCS原文写更新DMP状态及逐步重建信用。 |
| work/finance/household-budget.md | `dc4146d2f62c` | `3e28c8ebd257` | 仅删预算表不能增加收入的尾句；教学虚构数字、现金缺口处理、必要照护医疗不可随意压缩及时间安排不变。 |
| work/finance/insurance.md | `6a2652686167` | `09c3a9811a00` | 6组差分保留MSL身份、认可外国准证及实际核保、医生网络、2026rider最低自付/5%/6000不含自付、最终合同批注、14/21日例外退款、所选旅行保单与活动风险；新以所选保单为准是原有产品范围的简写，未设统一排除。 |
| work/finance/saving-investing.md | `4e77083b14a2` | `7fa57b733d4e` | 5组差分保留CDP/DCS两通知、SSB柜台不受理/ATM、公司行动通知、一般个人投资免税及贷款利息/合伙例外、资料变更及FIDReC期限；未把投资亏损改成可获赔。 |
| work/finance/srs.md | `0e1044105ab9` | `efff60da58ba` | 4组差分保留5000收入减免不等退税的教学例、逐银行证件、DBS分行提款与海外安排、PR预扣和税务居民最终计税；删除尾句不把PR写为税务居民。 |
| work/tax/cross-border.md | `34f41a148d60` | `470a9fd5652d` | 仅删个人不可误作自行报CRS报表的尾句；金融机构收集/向IRAS报送与个人所得申报用途仍明确，2027生效/2028交换及个人资料更新责任保留。 |
| work/tax/personal-tax.md | `51d4abf45e73` | `4679b77f7ea6` | 仅删重复2026年份截止不可当未来通知的尾句；正文仍明确以2026报税季为实例并要求届时另查2027真实通知，日期未预测或顺延。 |

## 三处反馈及最终闭合

1. injury第65行首冻“员工仍须自己报告、交材料并跟进”易扩大为必须本人另向MOM报告。I10实际原文允许员工或代表通知雇主，并说明无需另向MOM提出索偿。作者改为“员工或其代表仍须通知雇主、提供材料并跟进。”；完整最终段已复读，通知对象与代表路径精确。
2. injury第204行首冻“平台配送不适用上述雇员休息工资安排”把条件性边界强化为一律排除。I28只说户外新措施对平台工人未必可直接适用，并列另按平台ACOP；I32还区分平台协议与雇佣合同。作者改为“平台工作者的防热措施另按平台服务ACOP核对。”；完整最终段已复读，未新增一律无薪的断言。
3. debt-disputes第119行首冻新增“还款历史仍会按规则保留一段时间”，现有近邻CCS只支持DMP状态及结清更新，不能签成纯表达变更。作者改为“还清后通知CCS更新DMP状态，并逐步重建信用。”，与CCS L79直接相符；完整最终段已复读。没有重探失败CBS页面。

审阅者独立按三组新旧字符串逐项逆替，严格恢复a7f1ffd首冻全部字节；其余23篇当前全部字节等于首冻。injury最终正文SHA为`1e76a24351dabfd145383c46f2e0e6e3d5e9d34ee6fea7e9cb5e394c2e103ab8`，debt-disputes为`2f7a6567f626b20a300925a6561f09db63db3c3f8ba88e42c78c377cb22b271d`。

## 本人实际回源范围

以下均为本人2026-10-14独立读2026-10-13成功取得的主管/提供者真实原缓存；不是作者摘要，不冒称本人再次联网。源文件及精确行段见JSON。主控另取得的新联网原件属于作者复读，未冒称本审联网。

| 原件 | 本人缓存与实际范围 | 支持与限制 |
| --- | --- | --- |
| [WICA-I01](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/who-is-covered) | `.cache/research/b05-injury/source-corpus.json`；该URL lines34—53 | 本外籍雇员范围、离职/准证取消不自动消灭既有索偿 |
| [WICA-I10](https://www.mom.gov.sg/faq/work-injury-compensation/do-employees-or-representatives-still-need-to-file-claim-for-wica-with-mom) | `.cache/research/b05-injury/source-corpus.json`；该URL lines34—47 | 员工或代表不必另向MOM提出索偿，但仍须尽快通知雇主 |
| [WICA-I28](https://www.mom.gov.sg/newsroom/parliament-questions-and-replies/2026/1007-written-answer-to-pq-on-heat-stress-protections-for-platform-delivery-workers) | `.cache/research/b05-injury/source-corpus.json`；该URL lines32—46 | 新户外措施对平台工人未必可直接适用；平台服务另按ACOP提醒/防热措施 |
| [WICA-I32](https://www.mom.gov.sg/employment-practices/platform-workers-act/platform-worker) | `.cache/research/b05-injury/source-corpus.json`；该URL lines34—63 | 平台协议/控制与雇佣合同分支，不能把所有配送者均判为PWA平台工人 |
| [CCS-D06](https://ccs.org.sg/consumer/dmp/) | `.cache/research/b05-debt-facts/src-debt-open4-00.txt`；L54—90 | 债权人批准、额度取消、DMP标记、结清通知后更新/移除标记及逐步重建信用 |
| [MoneySense-D02](https://www.moneysense.gov.sg/credit-reports-and-creditworthiness/) | `.cache/research/b05-debt-facts/src-debt-open1-01.txt`；L17—93 | 信用历史/还款记录及信用重建；未提供DMP结清后具体留存规则，因此不用于新增留存断言 |
| [ACRA-B01](https://www.acra.gov.sg/register/business/requirements-eligibility/) | `.cache/research/b05-business-facts/source-008.txt`；L37—112 | 外国CSP、本地居民任职和准证签发机构先核权限 |
| [ACRA-B19](https://www.acra.gov.sg/resources/guides-forms/troubleshooting-guide-name-application-business-registration/) | `.cache/research/b05-business-facts/source-114.txt`；L45—154 | 外国职务持有人由CSP、提交人必需任职条件及同账户付款/成功通知 |
| [ACRA-B02-sole](https://www.acra.gov.sg/register/business/registering-different-business-structures/sole-proprietorship-or-partnership/) | `.cache/research/b05-business-facts/source-045.txt`；L41—77及L97—207 | 有Singpass的外国人步骤说明、本人预留名称/所有者或代表条件，与总则差异不能仅凭登录消解 |

ACRA三组原文合读后，starting-business“不能只因能登录就自行递交”可通过：前文仍写真实CSP要求与有Singpass的步骤页差异，明确先向ACRA确认；这是核实资格后办理的条件，不是新增所有外国人不得自行申请的法律结论。

B02离职/个人税原事实报告采用`bytes.split(b'---\n',2)[2]`旧口径，统一SHA与报告表中的旧算法SHA不同。本人独立重算基准旧口径，分别为`42ff50c721cb1705de38013d98c78ffe669b9404bedee090a52b96bfa143d1ae`、`c0301bdc53dc1db3d13f300ce60e8251dab6da100e04f53003f63b51e4a88edc`，均与原报告相符；不是未审正文漂移。统一接收仍用保留frontmatter关闭线后全部空白的UTF-8 split口径。

## 机器辅助、继承与未覆盖

25篇frontmatter、H2、链接目标及显示文本均保持。部分表格行只删尾句，表格列数和结构不变；disability、injury、personal-tax的数字序列因重复数字/年份或提醒删除不相等，injury的加粗文字因通知对象改写不相等，均已对实际语义逐条复核，不声称所有保护项零变化。机器配平不代替上述阅读。

保留各原事实报告的采用范围及未知：金额/期限附近仍有原主管引用，身份分支不能从相邻制度推定；未改变生效时期、教学虚构标注、法定规则或确需保留的例外。未变规则不重新回源；本轮没有重新提取或目视PDF，没有全书正文全文阅读、全书覆盖签发、Hugo/浏览器/打印验收或实际私人办理。全文版事实核验仍是原作者和原独立审阅者的历史记录，本次只签25篇维护差分。

第三编辑与主控接收时须逐篇核JSON最终正文SHA；任何后续正文变动，按涉及的语义重新限定复核。
