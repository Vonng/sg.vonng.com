# B06 法律体系：作者研究证据

2026-10-14 B06B主控接收：本篇已完整两审及实际工程集成，body `0c45b213625e115fc2e454cce80c725dae108e66b509384bbed90cd643e522f9`；最新元数据和完整SHA见accepted，验收见checks/b06b-acceptance.json。下方是作者冻结与取得/阅读时的记录，其written/draft叙述是当时状态，不改原证据日期与采用范围。

作者：review_state_audit（/root/review_state_audit）。实际查阅、正文成文与作者通读日期：2026-10-14，Asia/Singapore。本稿为体系识别指南，`written / draft:true / verified:"" / reviewed_by:""`；作者研究及静态自查不等于异人事实、第三编辑或工程通过。

首稿冻结：`content/book/rights/legal/legal-system.md`，104行、15,544 B；正文SHA `a938037a10aaab4a20565c3634ef8b3891a7bfaf4c6547882233eab5089e144d`，完整文件SHA `82e6e30394025b217c109d450c920eecc62585cd026802ac60e791ced5099fa2`。正文采用 `sha256(text.split('---',2)[2].encode('utf-8'))`，包括结束frontmatter之后的空白。原文冻结副本和记录清单位于已忽略 `.cache/research/b06-legal-system/`。

## 实际阅读与采用矩阵

以下24组主管主文均在2026-10-14通过正常web取得并实际读取所列完整范围；没有采用搜索摘要。`open-NN`指同目录 `source-open-NN.json` 中对应URL的真实工具解析返回，不是网页原始HTML。首轮多页返回未显示完整主文的Family Courts、AGC职能、调解、刑事人员、ROC过渡部分，均另打开补读；只有补读实际完整范围计入下表。

| 编号、真实URL及机构 | 实际读取范围、来源版本 | 支持事实及适用边界 |
| --- | --- | --- |
| LS01 [Singapore Courts：About the legal system](https://www.judiciary.gov.sg/who-we-are/about-legal-system) | open-01，L53—73；页标2026-08-05 | 三机构、宪法最高、法令／附属法规、普通法不能抵触宪法或国会法令、法院中立且不作个案法律意见；另实读L52法院不会电话索款或银行登录资料。未从公民平等句泛推所有宪法权利对外国人适用，具体权利留rights-notices。 |
| LS02 [MinLaw：Our Legal System](https://www.mlaw.gov.sg/about-us/our-legal-system/) | open-09，L19—31；主体标2018-06-21，页脚2026不是主体核验日 | 法律来源、Rules／Regulations名称、三机构框架；法院现行内部结构另用LS06—08，不采用本页旧链接或从其旧日期保证后续全部法条。 |
| LS03 [AGC：The Legislative Process](https://www.agc.gov.sg/our-roles/drafter-of-laws/the-legislative-process/) | open-01，L32—45；主体2025-11-19 | 一读至三读、PCMR与例外、总统assent及commencement；正文只采用法案经国会通过及总统批准、实际生效另核，不公布未读的特定法令日期。 |
| LS04 [AGC：Drafter of laws—Overview of functions](https://www.agc.gov.sg/our-roles/drafter-of-laws/overview-of-functions/) | open-04，L22—105；主体2026-01-22 | 草拟法案、实施法令的附属法规、免费SSO公开文本及数据库；SSO为真实查询入口，本次未取得SSO法条完整正文。 |
| LS05 [MAS：Supervisory Approach and Regulatory Instruments](https://www.mas.gov.sg/regulation/mas-supervisory-approach-and-regulatory-instruments) | open-05，L63—113全文分类；2024-12-10 | 附属法规依据Act且有法律效力；Directions／Notices约束指定机构或人员，Guidelines违反本身非刑事或民事罚款、可影响监管风险评估。正文明确这是MAS自身文件分类，不向其他机关无条件推广。Codes、Practice Notes、Circulars已读但未逐类扩写。 |
| LS06 [Courts：Role of Supreme Court](https://www.judiciary.gov.sg/who-we-are/role-structure-supreme-court/role) | open-02，L58—102及L228—236；2026-10-01 | General Division、Appellate Division与Court of Appeal；民事分配、Appellate Division无刑事管辖、GD初审刑事上诉、破产／清盘等及public-law／judicial-review专门名单。不写法官现任名单、SICC详细管辖或未读的上诉法条分配表。 |
| LS07 [Courts：Role of State Courts](https://www.judiciary.gov.sg/who-we-are/role-structure-state-courts/role) | open-02，L57—131完整主文；2026-01-14 | District／Magistrates／Coroner及SCT、CDRT、ECT，民刑职责与指定法院。金额和专门期限不在本稿抄第二套，交已集成专题及详细法院指南。 |
| LS08 [Courts：Role of Family Justice Courts](https://www.judiciary.gov.sg/who-we-are/role-structure-family-justice-courts) | open-04，L57—127完整主文；2026-03-17 | Family／Youth／High Court Family Division、其权限内离婚、遗产、赡养、保护及少年事项；不把全部穆斯林家事纳入同一普通家事程序。未采用资产金额、少年具体处罚或特别程序。 |
| LS09 [Courts：Mediation](https://www.judiciary.gov.sg/alternatives-to-trial/mediation) | open-06，L60—224完整调解主体，另读页末适用提示；2026-01-06 | 中立帮助协商、当事人决定和解；普通民事CDRC／Supreme Court安排、法院可能给时间或延期指示、适用ROC2021的说明。没有把所有领域调解概括为无需遵从出席指示；邻里Mediation Direction交neighbours主文。未公布本页费用、具体表件或其正文沿用Writ／Originating Summons词语的办理模板。 |
| LS10 [Courts：What is a civil case](https://www.judiciary.gov.sg/who-we-are/what-is-civil-case) | open-10，L53—163完整主文；2023-06-15 | 个人／机构权利义务、诉因、须证明请求、金钱或其他命令、事项及金额选法院、当事人与司法人员；正文没有采用总表对ECT等的统一时间栏，实际期限交主管详细专题。也未采用总览的summary-judgment简写作默认判决指南。 |
| LS11 [Courts：What is a criminal case](https://www.judiciary.gov.sg/who-we-are/what-is-criminal-case) | open-09，L53—140完整主文（open-08先返回至68，后补齐）；2022-02-09 | 刑事／交通监管违法、出席、控方提出证据、辩护方及法官；检控可来自AGC／警方／执法机关，Magistrate’s Complaint另有例外。正文只列“可来自”，未声称所有刑事均由AGC检控或私人均不能起诉；未公布刑罚权限／拘留等具体数字。 |
| LS12 [Courts：Charged with a crime](https://www.judiciary.gov.sg/criminal/charged-with-crime) | open-07，L53—104完整办理主体；2026-09-16 | 首次提讯、认罪／claim trial、可能即时定罪量刑及准备／律师入口；调查由警方或其他执法机关完成。正文不采用48小时概括、不展开保释或口供权利。 |
| LS13 [Justice Vincent Hoong：司法审查与基本权利讲话](https://www.judiciary.gov.sg/news-and-resources/news/news-details/justice-vincent-hoong-speech-delivered-at-the-governing-global-health-in-times-of-pandemic-conference) | open-05，完整讲话第1—24段及注释实读；采用第10—17段（L79—97）；公布2023-03-14 | permission、事项可审查、足够利害关系、可争辩法律理由，以及合法性／合宪性与决策过程区别于重作政策选择。作为法院解释的法律原则使用，不把2023讲话当2026 filing手册；未写司法审查统一期限、指定表件或个案是否有standing结论。 |
| LS14 [Syariah Court：Divorce and Related Matters](https://cm.syariahcourt.gov.sg/Who-We-Are/Jurisdiction/Divorce-and-Related-Matters) | open-01，L21—49完整主体及主管引述AMLA s35；2026-02-13 | 列明婚姻等争议；各方穆斯林或依穆斯林法结婚，并且婚姻一方domicile或紧接起诉前至少三年habitual residence；公民domicile可反证推定。作者复读将“起诉前至少三年”收紧为“起诉前连续至少三年”。PR／准证不由持证年数推适用，domicile个案不作判定。 |
| LS15 [Syariah Court：Appeals](https://cm.syariahcourt.gov.sg/Divorce/Appeals) | open-06，L88—107完整两类上诉主体；2026-02-13 | Registrar指示／命令→President，法院决定→Appeal Board；实际读14日／30日、各自3日送达和地点，但本稿仅解释专用选路并近邻链接，未复制程序。 |
| LS16 [Syariah Court：Inheritance Overview](https://cm.syariahcourt.gov.sg/Inheritance/Overview) | open-06，L21—30完整主体；2026-02-13 | 依据申报事实证faraid受益人及份额，不听证／不作事实裁定，可用于Public Trustee或FJC probate／letters of administration；不把证书当遗产管理授权或通篇继承裁判。未读所链接7729KB Faraidh书，不扩写份额和遗嘱。 |
| LS17 [MUIS：Roles & functions](https://www.muis.gov.sg/about-us/roles-and-functions/) | open-07，L19—29完整职责；主体2025-02-21，页脚2026-10-12 | AMLA法定机构、Zakat／Wakaf／Halal／mosques／education／religious guidance；主体不同于Syariah案件裁判。未读取fatwa、捐产细法或从职责说明推每个服务资格。 |
| LS18 [Courts：Authentic Court Orders](https://www.judiciary.gov.sg/services/e-platforms/authentic-court-orders-%28aco%29) | open-08，L53—120主体、流程及全部FAQ；2026-04-01 | ACO仅指定命令、码＋案号、官方网站courtorders.gov.sg、可取附件、没有码可能仍真／可问法院或取CTC。已读启用批次但正文不逐年列；未进入ACO、不查询任何私人命令或跨验证码。 |
| LS19 [Courts：Respond to a civil claim—ROC2021](https://www.judiciary.gov.sg/civil/civil-claims-%28from-1-april-2022%29/respond-to-a-civil-claim-%28from-1-april-2022%29) | open-08，L54—78完整主体；2022-04-05 | OC／OA为原诉起始文件、按文件／事项／金额选普通或simplified程序；只作为辨认应诉入口，不从总页推精确回应／送达期限。 |
| LS20 [Courts：Applicable Rules of Court](https://www.judiciary.gov.sg/civil/new-rules-of-court-2021/the-applicable-rules-of-court-for-matters-before-the-courts) | open-11，L54—92全部三个适用分节（open-10先至68，后补齐）；2026-06-26 | ROC2021通常适用2022-04-01起普通民事、旧案及转移／上诉过渡、SICC另用专用规则；正文保持“通常”及旧案／SICC边界，不当所有刑事家事统一规则。 |
| LS21 [MinLaw FAQ：境外遗产文件resealing及律师查询](https://ask.gov.sg/mlaw/questions/cmo84bgx6004s4a018drfozfp) | open-07，L21—22完整答复；显示MLAW更新“2mo ago”，不转成臆定绝对日期 | 现行官方FAQ确认LSRA查询律师／律所真实入口，并说明资料基于律所／律师提供。只用于目录入口支持，不扩写resealing；没有以搜索抓取的目录正文充当实际打开或查询成功。 |
| LS22 [MinLaw：Types of Individual Registration](https://www.mlaw.gov.sg/law-practice-entities-and-lawyers/registration-of-individuals/types-of-individual-registration/) | open-09，L18—24全部主体；2018-06-07 | 不同注册类型有对应requirements／privileges／conditions，进一步看有关法令／规例；本稿将确认承办范围作为委托建议。未打开267KB类别表或SSO LPA／规则，不公布该表里的具体执业权限或资格。 |
| LS23 [Courts：Legal help and support](https://www.judiciary.gov.sg/legal-help-support) | open-11，L54—63全部实质目录；2024-04-08 | 民刑家事及tribunal／simplified POHA帮助类别，行政情绪支持与律师帮助有不同用途；仅提供可继续查询入口，不从目录签发LAB／PDO／CLAS或其他援助资格与申请流程。 |
| LS24 [CCS：Consumer Protection FAQ](https://www.ccs.gov.sg/resources/faqs/consumer-protection/) | open-12，L27—165全部FAQ；采用Q4／Q6／Q7的L54—109；主体2026-10-01 | 持续不公平交易商家调查、禁令申请及遵守；CASE协商调解、SCT民事索偿与消费者退款救济。未把CCS监管等同个人索偿，也未抄范围／限额／费用／联系或将其规则推到商业与雇佣合同。 |

## 身份、法域与程序边界

本页面向公民、PR、工作准证、学生、家属及访客。规则须按该法令、事件及请求判断，未写“某身份自动适用所有服务”。可决定结果的具体事实在本稿保留：法院事项／金额、刑事指控及通知、行政制度及救济、婚姻宗教及domicile／habitual residence。援助收入、年龄、国籍／准证等详细条件尚由getting-help承接；隐私、平等、表达集会与具体送达期限仍由rights-notices承接。

已经集成的政府、消费、租约、邻里、劳动、离职、税务、紧急求助及家庭页仅作为主题选路，未在本稿复制其第二套数表或申报链。12个relref出现对应实际非草稿文件（public-services出现两次）。法院目录只是找到下一篇主管详细程序的入口，不等于本作者已逐项阅读所有表件或所有案件规则。

## 访问失败、冲突与未读范围

1. SSO宪法 `https://sso.agc.gov.sg/Act/CONS1963` 在既有b03-government证据中web403＋唯一8888仍403，无新URL／版本，本轮未重探。其他既有SSO失败同样未请求；本稿没有对现行SSO整部法令、条号重编号或2023后全部宪法修法作核验声明。基础法律地位及法院架构由可读主管主文支持。
2. 新LSRA目录 `https://eservices.mlaw.gov.sg/lsra/search-lawyer-or-law-firm/?searchType=1` 正常web403；旧 `https://www.mlaw.gov.sg/eservices/lsra/search-lawyer-or-law-firm/` 也不能通过工具取得。检查LS21现行官方FAQ确认基址后，对其真实 `https://eservices.mlaw.gov.sg/lsra/search-lawyer-or-law-firm/` 仅一次普通8888请求，HTTP403、919B，SHA `6e0c99eb64835b9f6968e6c6fa323a1b0965008b85187c3fa2617ac6d2739908`；原错误HTML及请求记录为 `lsra-proxy.html/.json`，已止损。不关闭TLS、不解验证码、不绕挑战、不探测Claude。正文只保留FAQ支持的官方入口、登记范围确认及受阻时向LSRA核实的建议，未声称实际查获姓名／执照／结果字段。
3. 另实际读取 [MinLaw Queries under other law-related agencies](https://www.mlaw.gov.sg/about-us/our-legal-system/queries-under-other-law-related-agencies/) open-10 L19—71，主体标2024-12-27、页脚2026-10-12；仍写SCT S$10,000和Subordinate Courts旧组织表，与LS07现行法院说明不相符。没有采用该旧权限／金额表，也没有用页脚更新日覆盖主体冲突。法律帮助程序将从当前专门来源继续核。
4. 未读LS22的类别PDF、LS16的Faraidh书、刑事PDF指南、SSO完整法条、myTax／SYC／eLitigation／CJTS登录后表单或私人案件。没有取得PDF并无PDF文字／图片审阅声明；全部采用段均为HTML可读主文。未实际办理、联络机构或传送个人资料。

## 作者自审、冻结与下一步

正文成文后完整通读原始Markdown，修正后再全篇复读；作者补准包括普通法遵循宪法／法令、法案国会通过及总统批准、监管民事选路措辞、Syariah紧接起诉的连续三年及首次术语解释，均由上列已读完整采用段支持。冻结前最终104行已完整读取，未用缩略链接或仅grep代替全文。

源码自查：九字段齐全、written／draft:true／核验空；唯一title／page_id；无正文H1、工具或本地路径标记、加拿大残留；加粗内外空格正常；29个外链出现／25个完整URL（含LSRA真实入口），括号配对且HTTPS；12个站内引用目标存在且非草稿；两张表逐行读过。机器检查未代替事实阅读；无共享构建、浏览器、手机／桌面／打印、stage或commit。

**待异人事实审：** 对此冻结SHA完整通读，独立读LS01—24实际采用主管原文；特别核MAS效力分类、上诉分配、CCS／CASE／SCT分工、行政司法审查非政策重选、Syariah三年紧接条件及公民推定、继承证书不裁事实、ACO未有二维码仍可能真、LSRA可读依据与访问缺口。若需修正，由作者应用后重新冻结及复核。第三编辑与主控接收、生产构建及实际渲染均尚未完成，不能把作者证据当独立通过。
