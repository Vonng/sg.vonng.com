# HUM10-B 第三人编辑静态审

审阅者：coverage_audit（/root/coverage_audit）；维护与修订作者为 root，限定事实审阅者为 review_state_audit。实际完整阅读及源码核对日期：2026-10-14，Asia/Singapore；最终静态检查时间 2026-10-14T08:17:37.616029+08:00。本审只读正文，独占本报告及对应 JSON。

结论： **25 篇最终正文通过第三人编辑静态审，无须作者修正。** 每篇最终正文 SHA 均与 [hum10b-facts.json](hum10b-facts.json) 的独立限定事实通过对象一致。完整 SHA、原事实报告、各篇阅读结论、静态检查及版本范围见 [hum10b-editorial.json](hum10b-editorial.json)。这次通过的是 25 篇表达维护的编辑版本，主控接收与生产验收仍待完成。

基准为 `4da4c936b79734580b842642286cf065d0027865`，首冻结为 `a7f1ffda24ebc858338f7d653c56f87dd8564fdc`。其余 23 篇正文仍与首冻结一致；injury 和 debt-disputes 使用作者在独立事实反馈后的最终稿，分别绑定 `1e76a24351dabfd145383c46f2e0e6e3d5e9d34ee6fea7e9cb5e394c2e103ab8` 与 `2f7a6567f626b20a300925a6561f09db63db3c3f8ba88e42c78c377cb22b271d`。SHA 采用 UTF-8 文本 `split('---', 2)[2]`，保留 frontmatter 关闭线之后全部空白。

## 实际阅读与判断

逐篇读完整当前正文与全部旧、新变更段。前两篇使用原始全文合并差分；其余以完整当前全文加完整基准差分对读，未变段同时对应旧稿。长篇展示仅用平衡括号解析缩短 HTTP(S) URL 目标，保留链接标签、所有正文和内部引用；实际版本及静态检查全部使用未改写的原始 Markdown。首次截断的 disability 尾段、mental-health 首段、debt 完整差分、预算全文和保险首段均已另读原文补全，未将缩略显示或机器统计当全文阅读。

结合 [humanizer 技能](/Users/vonng/.agents/skills/humanizer/SKILL.md) 检查空泛提醒、反复否定、跨题旁白、机械总结和不自然的指代；按本项目指南口吻保留实际限制和办理后果，不加入第一人称或为体现个性而加旁白。全文首段能直接给出任务起点；制度身份、金额期限、未来与当前阶段、教学虚构和具体机构实例仍在合适位置。原事实的独立签发属于 review_state_audit；本次编辑没有重新回源或刷新原 verified。

## 逐篇编辑结论

| 正文（content/book/） | 最终正文 SHA 前缀 | 全文与差分编辑结论 |
| --- | --- | --- |
| `life/transport/public-transport.md` | `5072d90f88a4` | 首段回答乘车与付款；换乘计时、票价查询及优惠资格分开，删尾句后步骤仍完整。 |
| `life/transport/taxis-phv.md` | `b761b24e0b51` | 公司、车型与订单报价限定清楚；轮椅固定、乘客容量和预约条件有具体动作，语气自然。 |
| `people/accessibility/disability.md` | `1364e02504c0` | 以实际需要选评估、辅具、学校、就业与社区服务；ATF/SMF年龄分流、身份和先批后买仍清楚，未留下指代断点。 |
| `people/accessibility/mental-health.md` | `5246ab6d4c26` | 先给危机入口，再分预约、语言与支付；SOS英语文字、webCHAT暂停、费率身份和移工范围保留，表格列数一致。 |
| `people/family/childcare.md` | `fbe5a1c0aa5e` | 年龄、所需时间、找位、费用、身份与补贴依办理顺序展开；2027调整与当期费表分段，教学算例及KCare单独条件清楚。 |
| `people/family/domestic-workers.md` | `bb01a6980bd2` | 雇主身份、费用、合同、日常责任及结束雇用结构清楚；未列准证的未知和向MOM取得具体答复动作保留。 |
| `people/family/separation-safety.md` | `1e2b66baf551` | 先安全后法院、孩子、住房和居留，求助入口近邻；LAB一般资格与海牙例外、两法院程序均有明确条件。 |
| `people/healthcare/getting-care.md` | `c95e23934d9c` | 首段直接分普通与急症就医；预约、转介、交通和看完后的下一步衔接，删目的句未造成跳读。 |
| `people/healthcare/medical-records.md` | `421ef41ede5d` | 文件类型与报告申请、治疗同意分别处理；未成年、无能力、已故及雇主申请有各自标题和近邻链接，删句后限定仍清楚。 |
| `people/language/everyday-language.md` | `bc3985690c03` | 建议用完整句子的语气保持为建议；多语与Singlish案例有具体背景和教学虚构标注，未留下机械尾总结。 |
| `people/learning/tuition-grant.md` | `0e77d67c0bcd` | 先资格与担保，再申请、服务、延期、BG和退出；冲突时限及年龄边界留在对应步骤，不把办事平台状态写成完结。 |
| `people/school/learning.md` | `a710466c6d06` | 学校类别、身份费表、课程考试及支持可顺序查找；2026/2027/2028批次清楚，PSLE/SPED条件和转衔仍具体。 |
| `people/school/school-life.md` | `4174d82e656d` | 日常交接、通知、托管、数字学习、伤害保护与转校分别展开；CCA指导语气及搬家转校资格保留。 |
| `work/business/starting-business.md` | `880879035efc` | 先经营权限再选主体注册，成功通知后还有开业清单；CSP与Singpass来源差异、DP配偶分支及本人预算清楚。 |
| `work/employment/injury.md` | `1e76a24351da` | 全文按就医报告、保障、赔付、异议及外籍/平台/家政分支展开；最终“员工或其代表”明确通知对象，“防热措施另按ACOP”保留条件性表达。 |
| `work/employment/leaving-job.md` | `a8359d19444b` | 通知、结算、裁员、准证与申索期限依行动展开；家政合同及MOM路径单列，删去后果提醒不影响资料清单。 |
| `work/finance/banking.md` | `025136e9df72` | 按开户、工资、支付、GIRO、错账及离境展开；补缴前查记录、确认重扣和留凭据仍完整，具体银行例子有名称限制。 |
| `work/finance/cpf-basics.md` | `d97936b93e8c` | 身份、PR阶段、年龄费率及雇员/自雇/平台分支清楚；计算教学例和实际入账核对帮助读者操作。 |
| `work/finance/debt-disputes.md` | `2f7a6567f626` | 产品资格、成本、报告、逾期、持牌贷款及DCP/DMP/MDMP/DRS分别展开；最终只写更新DMP状态及逐步重建信用，和近邻CCS链接衔接自然。 |
| `work/finance/household-budget.md` | `3e28c8ebd257` | 以实际收入和账单日期说明预算；虚构表与年度储备算例明确，删除不能增加收入的尾句后困难处理仍具体。 |
| `work/finance/insurance.md` | `09c3a9811a00` | 已有保障、损失、条款、投保与理赔顺序可用；2026 rider、冷静期例外、续保及本人身份变化各有具体条件。 |
| `work/finance/saving-investing.md` | `7fa57b733d4e` | 按用钱时间、账户、SSB、T-bills及证券基金展开；申请/赎回/交割与资金回到账户分别说明，删除尾句未扩大免税和退出范围。 |
| `work/finance/srs.md` | `efff60da58ba` | 缴款减免与后续提款分别计算；首次缴款退休年龄、外国人十年、PR预扣和最终税务居民判断清楚，例子不当现售保证。 |
| `work/tax/cross-border.md` | `470a9fd5652d` | 收入来源、工作地点、DTA/COR/FTC及银行声明各有用途；CRS由金融机构报送与个人所得申报分开，未来年份保留。 |
| `work/tax/personal-tax.md` | `4679b77f7ea6` | 以YA和2026报税季为明确例子，再解释居民、AIS/NFS/D-NOA及税单付款；未预测2027截止，删提醒后时间范围清楚。 |

工伤最终“员工或其代表仍须通知雇主、提供材料并跟进”明确了主体与通知对象；“平台工作者的防热措施另按平台服务ACOP核对”保留条件性分流。债务最终“还清后通知CCS更新DMP状态，并逐步重建信用”与同段行动及 CCS 引用衔接自然。这三处已按最终句段读取，本编辑没有另行签发事实结论。

## 源码静态核对

25/25 无静态问题。九项必需元数据齐全，正文非空且无重复 H1；加粗内侧修剪及外侧普通空格符合现有检查口径，没有工具编号、内部路径、TODO 或加拿大残留。当前这 25 页的 page_id 和标题在全源记录中唯一，draft 为 false，verified 仍为 2026-10-13，未改成编辑日期。

共核 112 个内部引用，均能在当前源码中映射到非 draft 页面；此范围没有内部片段锚点。1107 处 HTTP(S) 引用的目标语法完整，目标及显示标签与基准逐项相同；未联网逐个测试外链可达性。70 张表格列数一致，标题结构与 frontmatter 均保留。机器检查只说明上述源码条件，不能证明事实或实际渲染。

全部最终正文 SHA 与独立事实报告一致。报告写入前核对时 HEAD 为 `a7f1ffda24ebc858338f7d653c56f87dd8564fdc`，injury/debt 的最终修订在工作区；不能只用这个 HEAD 代替各篇正文 SHA。原 integrated 元数据为历史状态，不能替本轮主控接收。

## 未覆盖与接收要求

本审没有改正文、frontmatter、accepted、配置或共享总账，没有 stage、提交或运行共享构建；没有实际浏览器、桌面／手机、菜单、搜索、明暗或打印目视。主控须针对 JSON 中最终正文版本接收，更新相应角色记录并运行生产门禁与渲染验收。后续正文改变须按涉及段落重新审阅和绑定；仅更新 frontmatter 角色记录不改变正文 SHA。
