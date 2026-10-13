# B01 身份、工作准证与国民服役：独立事实审

- 作者：`identity`；事实审阅者：`care_finance`，与作者不同。
- 回源日期：2026-10-13（Asia/Singapore；本机时区核验 10:05）。
- 结论：下列最终版本通过本轮事实审。两处需收紧的适用边界已由作者修正，并逐段复核；无未关闭的正文事实问题。
- 本人对三稿只读，未修改其核验字段、未运行共享构建、未提交。该结论不替代第三人编辑静态审与主控实际渲染接收。

## 版本锁定

正文摘要算法：读取原始字节，以 `b'---\n'` 分隔两次，取关闭 frontmatter 行之后的字节，保留其原始空白，再算 SHA-256。作者先前提供过按其他空白口径计算的正文摘要；本轮以完整文件 SHA 为交接主键，以下正文算法供主控一致复算。

| 文件 | 完整文件 SHA-256 | 正文 SHA-256 |
| --- | --- | --- |
| `content/book/life/documents/status-and-eligibility.md` | `b56bb4519c7a425dc766885b08636fd7d8e692f1d3db2c5ad6b4058e90339109` | `2790845e80227c392db1fa24df061d07dd2ca0361ba50b90c4d599057f671e34` |
| `content/book/life/documents/work-passes.md` | `2123d6398d15d3d47d101878aa16f8390809f0ae4b576b464df5bc5ca9b387ec` | `e4da3edf325721a3efc0b04fe2611589c4ad8d9fb9fbc1776f5891b32ff4fce5` |
| `content/book/life/documents/national-service.md` | `1490370520b2464689866275a008a286c2df148b4af9e1019ff9a6eabdd3fcf8` | `36956190ba3a575a662f0836fe57aaff44c962a4f16d2d23fce3bc9dd68a6ead` |

## 发现、作者修订与复核

| 编号 | 原稿问题 | 主管详细原文 | 作者处理与最终复核 |
| --- | --- | --- | --- |
| F01 | REP 段的“之后回到新加坡”可能只被理解为拒绝后返回，没有准确突出拒绝时已经在境内仍失去 PR | [ICA：Check Re-Entry Permit Validity](https://www.ica.gov.sg/enter-depart/for-PR/check-REP-validity)，新制表格明确拒绝时已在新加坡也适用 | 已改为即使已经返回、REP 被拒时人在新加坡，仍失去 PR；最终版通过 |
| F02 | 工作准证概览的统一查询段没有明示薪资查询仅适用于 WP，可能使 EP/S Pass 读者误解网页功能 | [MOM：Check work pass and application status](https://www.mom.gov.sg/eservices/services/check-work-pass-and-application-status)，薪资 FAQ 明示 only Work Permit holders | 作者在工作页与身份页均加 WP 限定；出生日期＋FIN/护照、免登录、中文和 PDF 功能保留；最终版通过 |

## 实际回源范围

以下均为审阅者本轮实际打开和阅读的主管原文，查阅日统一为 2026-10-13；作者证据表只用于核对导航和交接边界，没有作为事实的替代依据。金额单位为 SGD；正文未列 ONE Pass 公司规模的 USD 数值。下表只记录支撑稿件所用的结论，不声称审核了这些机构所有制度。

### 身份、家属、学生和查询

| 已读来源 | 核对的事实与条件 | 结论 |
| --- | --- | --- |
| [ICA：PR 是否需要工作准证](https://ask.gov.sg/ica/questions/clxwhkiyj00fkdsotb37zlufh) | PR 就业无须工作准证；受监管职业仍须注册或满足执业条件 | 通过；未将 PR 等同免除执照 |
| [ICA：签证要求](https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements)；[延长 Visit Pass](https://www.ica.gov.sg/enter-transit-depart/extend-stay) | 签证与实际 Visit Pass 停留期、SG Arrival Card、e-Pass 查询入口；STVP 就业受限，ICA/MOM 签发的 STVP 服务分流 | 通过；正文只讲身份选路，未承诺延期或工作权限 |
| [MOM：普通 DP 工作](https://www.mom.gov.sg/passes-and-permits/dependants-pass/working-in-singapore) | EP/S Pass/DP-WP 三路；前两类签发前取消 DP，独立工作及居留；DP-WP 依托 DP；经营另有 LOC 入口 | 通过；已留 ONE Pass 配偶例外，不把所有 DP 一概称 LOC |
| [MOM：MOM LTVP 工作](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/working-in-singapore-for-ltvp-holders) | 本地 offer，雇主申请合资格 EP/S Pass/WP | 通过；与 ICA 路径分开 |
| [MOM：ICA LTVP 工作](https://www.mom.gov.sg/passes-and-permits/work-passes-for-holders-of-long-term-visit-passes-issued-by-ica) | 配偶/子女 LOC/PLOC；公民/PR 父母 WP；陪读家长首年不得工作、满一年后 WP；PLOC 职业限制 | 通过；未推定陪读祖父母同样适用；未把父母写成配偶 LOC |
| [MOM：ICA 家属 LOC 资格](https://www.mom.gov.sg/passes-and-permits/loc-for-ica-issued-ltvp-holders/eligibility) | 公民/PR 配偶或未满 21 岁未婚子女；LTVP 至少三个月、本地 offer、雇主/EA 申请、收到后开工，失效条件 | 通过；年龄、未婚及先授权均保留 |
| [MOM：PLOC 资格](https://www.mom.gov.sg/passes-and-permits/pre-approved-letter-of-consent/eligibility)；[PLOC 开始工作](https://www.mom.gov.sg/passes-and-permits/pre-approved-letter-of-consent/taking-up-employment) | 可无 offer 申请、LTVP 初申/续期时选择；依托居留准证；入职前雇主通知、离职七日内通知 | 通过；目录与细页补申请差异见下节；正文不写唯一路径 |
| [MOM：ONE Pass 家属](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families) | 合法配偶 DP、获本国/地区法律承认的事实婚姻伴侣 LTVP 的 LOC 例外 | 通过；未扩至 ONE Pass 子女或父母 |
| [ICA：Student’s Pass](https://www.ica.gov.sg/reside/STP/apply) | 外国全日制生通常需 STP；有效 DP/LTVP/IEO 的非宗教全日制学习例外；原准证失效须申 STP | 通过；未把学生工作权限从居留豁免推导出来 |
| [MOM：外国学生工作豁免](https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students) | 全日制、STP、名单院校；学期内每周最多 16 小时或计入毕业实习；假期另表且至少 14 岁；交换生不适用；毕业 STP 到期需工作准证 | 通过；两份名单及额外实习分支已实际阅读，正文让读者回名单 |
| [IRAS：税务居民](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency) | 已读 Tax residents、183 日、连续三年及跨两年行政宽免、初步认定与清税复核；外籍人士可以是税务居民 | 通过；正文仅作概念分流，未将 PR/公民或准证直接等同某 YA 税务身份 |
| [ICA：申请 PR](https://www.ica.gov.sg/reside/PR/apply)；[REP 有效性](https://www.ica.gov.sg/enter-depart/for-PR/check-REP-validity) | PR 申请类别及综合评估；2025-12-01 起无有效 REP 离境/境外失效分别起算 180 日；不申请或被拒的后果 | 通过；F01 已修；PR 申请不是资格保证，REP 与 NS Exit Permit 区分 |
| [MOM：准证查询](https://www.mom.gov.sg/eservices/services/check-work-pass-and-application-status) | 无须登录、生日及 FIN/护照、MOM 全部准证、中文、带时间 PDF、SGWorkPass；WP 才有薪资信息；资料不符更正渠道 | 通过；F02 已修；没有实测真实身份或声称提供全部历史记录 |

### 工作准证与开工衔接

| 已读来源 | 核对的事实与条件 | 结论 |
| --- | --- | --- |
| [MOM：工作准证目录](https://www.mom.gov.sg/passes-and-permits) | 主要类别、培训/工作假期/月嫂另类；performing artiste WP 计划停止新申请 | 通过；目录仅作类别说明，数值和资格另回细页 |
| [MOM：EP 资格详细表](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) | 2026 当前 23 岁及以下非金融 5,600/金融 6,200，45 岁及以上 10,700/11,800；2027 新申 6,000/6,600、现证 2028-01-01 起到期的续签；COMPASS 40 分及 22,500/合资格内部调派/不超一月职位三类豁免 | 通过；已读年龄表、双阶段与豁免，未以年轻起点概括所有申请人 |
| [MOM：固定月薪](https://www.mom.gov.sg/faq/employment-pass/what-is-a-fixed-monthly-salary)；[EP 基本事项](https://www.mom.gov.sg/passes-and-permits/employment-pass/key-facts) | 基本月薪＋固定津贴，奖金/加班/佣金不计；雇主/EA 申请、首申两年/续签三年、符合条件科技人才更长期限 | 通过 |
| [MOM：S Pass 资格](https://www.mom.gov.sg/passes-and-permits/s-pass/eligibility)；[配额及 levy](https://www.mom.gov.sg/passes-and-permits/s-pass/quota-and-levy/levy-and-quota-requirements) | 当前 3,300/3,800 起并随年龄增加；2027 新申 3,600/4,000；现证 2028 起到期续签；雇主另需配额并缴 levy | 通过；未把薪资达到门槛当成自动获批 |
| [MOM：行业 WP 规则](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules)；[WP 条件](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/work-permit-conditions) | 五行业、来源地与配额等条件；指定雇主/职业/行业、不得创业；申报薪资、医疗住宿、保险及遣返责任 | 通过；概览不宣称某一国籍适用于所有行业，也没有抄入笼统 PCP 句 |
| [MOM：WP 婚育规则](https://www.mom.gov.sg/faq/work-permit-for-foreign-worker/what-are-the-marriage-and-pregnancy-regulations-for-wp-holders-in-singapore) | 当前/最后准证为 WP、结婚及生育条件、旧准证结束后规则、现有或最后 EP/S Pass/SC/PR 等例外 | 通过；正文只提示完整个案核对，不把所有曾持 WP 者一概限制 |
| [MOM：家政人员资格](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/eligibility-and-requirements/fdw-eligibility)；[家政雇用规则](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/employers-guide/employment-rules) | 新申女性、23 至未满 50、来源地及至少八年正规教育；指定住所家务、不可另兼工；亲属家照顾雇主子女/父母须书面同意、工作量/住宿条件及先通知 | 通过；将新申请与既有人员续签分开 |
| [MOM：PEP 资格](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/eligibility)；[PEP 基本事项](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/key-facts) | 当前申请 22,500、海外最近六个月；失业不超连续六个月；当前申请年薪 270,000，不折算月数；不得自由职业创业；三年仅一次不可续，换雇主不重申 | 通过；旧 2023-09-01 前申请的 144,000 规定已读，正文限定当前申请标准 |
| [MOM：ONE Pass 资格](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/eligibility)；[ONE Pass 基本事项](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/key-facts) | 连续十二个月 30,000 或未来合资格新工作；公司/本地工作经历及杰出成就分支；五年、多家公司经营工作；AI/Tech 从 2027-01-28 接受申请 | 通过；没有把未来 AI/Tech 收入组成写成 2026 已开放路径 |
| [MOM：EntrePass 资格](https://www.mom.gov.sg/passes-and-permits/entrepass/eligibility) | ACRA 私人有限公司、至少 30% 持股、venture-backed/创新技术及至少一项具体资格；注册超过十二个月按续期评估 | 通过；没有沿用旧六个月说法 |
| [MOM：EP 申请流程](https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass) | 雇主/EA 申请、IPA 后签发、通知信可开工、需要时登记，家属申请衔接 | 通过；没有把 IPA 当成已签发工作权限 |
| [MOM：EP 换工作](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep)；[EP 注销](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) | 新雇主新申请前不用先取消旧 EP；离职最后通知期日后一周内取消；关联家属取消、不能工作、可申请最多 90 日 STVP | 通过；只写 EP 场景，不套用 WP 转雇主规则或保证实际停留天数 |

### 国民服役

| 已读来源 | 核对的事实与条件 | 结论 |
| --- | --- | --- |
| [MINDEF：NS 适用对象](https://ask.gov.sg/mindef/questions/cmh4fdaqu014huk1bimpsj8c1)；[ICA：PR 与 NS](https://ask.gov.sg/ica/questions/clxwhkiyp00hsdsoty0spmyv2) | 男性 SC/PR、PTS 行政豁免、外国学生/父母担保 PR、旧 SC/PR 再取得 PR 不因新途径豁免；16.5 登记/18 入伍 | 通过；以具体途径替代“第一代都豁免”的误导分类；女性/仅外籍准证分清 |
| [CMPB：海外待入伍者](https://www.cmpb.gov.sg/before-ns/overseas-pre-enlistees/) | 海外或双重国籍仍有 NS 义务；海外注册地址通知、学业延期和体检 | 通过；与有行政豁免者的资格分支结合阅读 |
| [CMPB：Discover NS](https://www.cmpb.gov.sg/about-us/discover-ns/)；[服役阶段](https://www.cmpb.gov.sg/parents-guide/your-sons-ns-commitments/) | 通常两年全职、SAF/SCDF/SPF、之后 NSman；军官及高级军事专才 50 岁、其他 40 岁 | 通过；没有把年龄上限当逃避全职义务的方法 |
| [CMPB：登记与资料](https://www.cmpb.gov.sg/before-ns/pre-enlistment-process/registration-and-documentation/)；[体检及心理测验](https://www.cmpb.gov.sg/before-ns/pre-enlistment-process/medical-screening-and-psychometric-test/) | 16.5 后收到通知、在读同时申请延期；Singpass/个人家庭教育银行信息、家长确认医疗问卷、预约；首次体检至少三天前改期 | 通过；未声称已登录 OneNS 测试 |
| [CMPB：学业延缓](https://www.cmpb.gov.sg/before-ns/pre-enlistment-process/deferment-for-studies/)；[FAQ](https://www.cmpb.gov.sg/faq/) | 已取得同级资格不再延缓；degree 不批；政府/私校/海外差异、2023 起课程表、海外开课年 1 月 1 日的 19/20 门槛、学校证明、分阶段与换课事前同意 | 通过；正文已用“已经取得资格”限定，不把考试失败重读与重复已取得资格混为一类 |
| [CMPB：Exit Permit 与担保](https://www.cmpb.gov.sg/before-ns/pre-enlistment-process/exit-permit-and-bond/)；[FAQ 的 Exit Permit 表](https://www.cmpb.gov.sg/faq/) | 13–16.5 岁三个月/两年分支，超过 16.5 岁至入伍三个月起许可＋担保；75,000 或父母上年合计总收入 50% 较高者、银行担保、材料与先完成担保 | 通过；以两张详细表核对合并单元格含义；未将此入伍前表套给 NSman |
| [ICA：申请 PR 的 NS 段](https://www.ica.gov.sg/reside/PR/apply) | 大学中取得会产生义务的身份可能须中断；未完成 NS 放弃/失去 PR 对本人和家人长期移民事务有影响；未尽义务放弃公民申请可被暂缓 | 通过；已对照详细后果，未弱化为一般“不利因素” |
| [CMPB：Offences](https://www.cmpb.gov.sg/before-ns/offences/)；[ICA 的 CMPB 联系方式](https://ask.gov.sg/ica/questions/clxwhkiyp00hsdsoty0spmyv2) | 已违法者在新本人报到、海外先邮件联系、身份证明及支持材料；本地/境外电话和邮箱 | 通过；查询受阻者有可执行的后续入口 |

## 边界、来源差异与后续触发

- 本轮通读三篇正文及其上述主管细页；公开页面内容足以核对当前稿件事实，未遇必须留下的关键不可达证据缺口。较长页面先定位后阅读对应段落；没有用搜索摘要替代正文，也没有登录账户、提交个案、致电机构或核实某个人的资格。
- PLOC 准证目录仍写只可在初申/续 LTVP 时申请，资格细页已有拿卡两日后补申请入口。正文只说初申/续期可选，没有误写“只能”，故不构成阻断；家属细页应以后者细流程再查补申请。
- CMPB FAQ 含 MCS/PES 过渡，2026 年 6 月底体检与 2027 年 10 月入伍有不同节点。当前 NS 稿未写分级或训练时长细节，不需要为过渡增加未经展开的承诺。
- 工作准证页是类别与开工前选路；未审核完整行业 WP 国籍清单、配额计算个案、各准证材料费用和后台字段。身份页未完成全套 PR/公民/家属/REP 手续，NS 页限资格及入伍前安排。相应后续任务已经作者地图登记，不能将本轮三稿通过写成整个身份领域完成。
- 未来重核节点：2027-01-01 EP/S Pass 新申请门槛；2027-01-28 ONE Pass AI/Tech；2027-10 NS 医学分级；2028-01-01 起到期 EP/S Pass 续签门槛。以届时主管详细原文为准，不将本次日期长期沿用。
- 本轮仅事实审与修改回核；元数据、中文排版、断链机器检查、实际 HTML/手机/桌面呈现及生产门禁由后续独立步骤记录。本报告未把这些未做事项称为通过。
