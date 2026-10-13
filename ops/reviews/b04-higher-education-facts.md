# B04 higher-education 独立事实审

审者 identity；作者 daily_history。2026-10-13，Asia/Singapore。结论：**事实审通过，可交 root 第三人编辑审**。没有改作者正文、元数据、导航或共享总账，没有运行构建、浏览器或打印检查。

## 最终绑定版本

| 文件 | 大小 | 完整 SHA256 | 正文 SHA256 |
| --- | ---: | --- | --- |
| `content/book/people/learning/higher-education.md` | 26,251 B | `4bfeffcbf39bf75639137dd192f198da2f2cc5524719bddd3deb9fa9e62b842f` | `37c662a2e83b67d7578f6d1cb9ec64751b07e0b6f77ef79097fc256dd0a6ec3c` |

正文算法为 UTF-8 `text.split('---', 2)[2]`，保留 frontmatter 后原始空白。初稿26,083B／full `147715ad9b9ec1b68dba75b540bc61d08ece3287811c65b5489b867132bb971f`／body `af67b4446a616853829e8bbe7f95dad2ed36c58e2ab26aca38a967016529508e` 已完整逐段阅读；修后重读还款段，并独立逆向替换限定句和新增引用，严格恢复初稿完整 SHA，确认无其他漂移。

## 唯一问题及关闭

原文把“毕业后最迟一年内开始还款”用于一般 HESL。审者实际读到 [NUS HESL](https://nus.edu.sg/oam/financial-aid/schemes-for-tuition-fees-and-or-living-costs) L242 有该期限，但 [StudentLoanSG FAQ](https://studentloansg.moe.gov.sg/faq/) 第24问只要求毕业后及时安排，MOE及DBS采用段也未给全国统一一年期限。作者已限定为“NUS 要求毕业后最迟一年内开始还款；其他院校按本人协议和承办银行通知安排”，并补 NUS 近邻引用。最长十年、每月最低100元、未毕业离校原则立即全额偿还等原有规则均有各自主管原文。本项关闭。

## 实际回源范围

以下均为本审者亲自阅读的主管原文；新工具返回、同日保存的官方原HTML／PDF和原工具正文分开记录。作者证据用于定位，不以作者摘要作事实结论。

| 主管原件 | 实际核对、条件与结论 |
| --- | --- |
| [MOE PSEI](https://www.moe.gov.sg/post-secondary/overview?toggle-id=polytechnics)、[六所自治大学](https://www.moe.gov.sg/post-secondary/overview/autonomous-universities) | 从当日官方原HTML重新静态解析返回内容，读六AU及PSEI records28／32—36、2028提示原字段。五理工、ITE三年Higher Nitec过渡、艺术院校与UAS政府支持私人大学分类、2027年中更新2028招生信息均相符；未把通道名称推广为各身份均合格。 |
| [SP Admissions Criteria](https://www.sp.edu.sg/admissions/guides/admissions-criteria)、[DAE](https://www.sp.edu.sg/admissions/guides/direct-admissions-exercise) | 新回源读资格表L371—433、DAE采用L370—448及590—734。国际学历／返新公民／居家教育下一窗口2026-10-19—30，材料、英文翻译、测试／择优／学额、补件及6775 1133均核。未称所有国别最低分相同；没有把其他类别Jan／Mar2027窗口混入。 |
| [ITE其他学历](https://www.ite.edu.sg/secondary-school-students/admissions/entry-qualifications/other-qualifications/) | 新回源L16—47：2026届返新SC／PR携非GCE原学历、完整成绩及译本到访；外国／私立学历IS不获录取full-time ITE。正文明确已过2026入学期限、下一届另查，不用IS费表倒推招生资格。 |
| [NUS申请](https://nus.edu.sg/oam/admissions/application-overview) | 新回源L154—249实际分段读：同人一申请、确认邮件／材料／付款、一般10元和国际学生国际学历20元及音乐例外、不退费、截止日前修改、录取接受期限和full-fee／TG状态。只作NUS本科流程。 |
| [MOE费用](https://www.moe.gov.sg/financial-matters/fees) | 独立解析官方1,925,544B原HTML，读poly对象540／537／535与SC对象533所指同原件record146；2026新cohort年度3100／6400／12400／13600、SC未40岁例子、SC／PR GST政府吸收、IS含GST、补充费另计均相符。旧TFL链接不用于判断新HESL。 |
| [ITE2026费表](https://isomer-user-content.by.gov.sg/145/2153c21b-6d76-4af2-86b5-39fb04723ef4/Fees-AY2026-for-2026-Intake.pdf) | 从实际两页PDF独立提取全部文字，并实际目视物理第1页表格与全部脚注；283／3791／10561.17每六个月、全年566／7582／21122.34逐格核，非护理、2／3／4年HN、保险年审／护理分支、身份通知和加速路径限制相符。第2页已读文字，未宣称本审者目视。 |
| [NUS2026/27本科费表](https://www.nus.edu.sg/registrar/docs/default-source/administrative-policies-procedures/ugtuitioncurrent.pdf) | 新工具实际PDF文字物理第2页及第14页L441—489：Computing有TG8300／11600／18050／21400，无TG39700；年度两学期、Special Term另计、GST及40+MCES脚注均核。未取得本地实体PDF或目视图像，不宣称15页全文核验。 |
| [MOE HESL](https://www.moe.gov.sg/financial-matters/government-loan-scheme/higher-education-student-loan)、[StudentLoanSG FAQ](https://studentloansg.moe.gov.sg/faq/) | 前者从实际原HTML独立解析records28—2c并逐字比对作者抽取原HTML片段一致；后者从原HTML内公开faq-json-data独立提取43问，全部阅读。逐核ITE仅合格diploma SC／PR、poly三身份、arts SC／PR、AU课程与全／兼读限制；各身份基础比例、PCI3500／1875、SC余10%、生活3200／4100、海外一次12000；担保21—60及不同课程国籍、海外无Singpass仅担保者、双方签协议、停借仍还、旧TFL／SL／OSPL衔接均相符。 |
| [NUS HESL](https://nus.edu.sg/oam/financial-aid/schemes-for-tuition-fees-and-or-living-costs)、[DBS HESL](https://www.dbs.com.sg/personal/loans/education-loans/hesl-loan) | NUS新回源采用L143—317分段读，区别拒绝／未获TG与既有TG耗尽例外，means先校方申请接受后SLSG、FIN须在EduRec、资助不重复入账、21—60担保及还款。DBS实际L730—823与MOE交叉核3MSORA+1.5／+4.5、半年调整、10年／100元及未毕业退出。没有复制银行汇款账号或当前页面未显的实际利率。 |
| [NUS Community Bursary](https://nus.edu.sg/oam/financial-aid/schemes-for-tuition-fees-and-or-living-costs/higher-education-community-bursary)、[Higher Education Bursary](https://nus.edu.sg/oam/financial-aid/schemes-for-tuition-fees-and-or-living-costs/higher-education-bursary) | 新回源分别L143—200／144—207：2026/27普通全日制SC本科四档6300／5100／3250／1350、最高PCI3000或GHI12000、医牙另额、逐年申请及不可两项并持，均相符；不是PR／IS普遍资助。 |
| [NUS PSEA](https://nus.edu.sg/oam/financial-aid/schemes-for-tuition-fees-and-or-living-costs/post-secondary-education-account) | 新回源L143—229：SFS查余额、全日制本科SO／Ad-hoc、未21由父母监护、tag NUS、余额不足扣可用额、错过SO另查单次提取、指定住宿项目。正文没有用旧Sem2时间表规定当前截止日。 |
| [CPF申请](https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/apply-for-cpf-education-loan)、[NUS CPF](https://nus.edu.sg/oam/financial-aid/schemes-for-tuition-fees-and-or-living-costs/cpf-education-loan-scheme) | 新回源CPF245—268及NUS145—186：本人／配偶／父母OA、扣款即计息、毕业或离校一年后开始／12年内还、现金还且不能用自己CPF、学期开始前申请；NUS合格全日制SC／PR，学费不能杂费宿舍，均相符。 |
| [MOE TG根页](https://www.moe.gov.sg/financial-matters/tuition-grant-scheme) | 独立读同日官方原HTML可见正文：指定full-time diploma／UG、合格三身份、PR／IS三年服务及申请／担保／延期／课程变化赔偿的分流。本文只作基本选路，完整TG合约专题仍由作者研究；未把根页当完整合同。 |
| [ICA学习](https://www.ica.gov.sg/reside/STP/apply)、[MOM学生工作](https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students) | 新回源ICA31—55、MOM34—163（含两张不同院校名单）：DP／LTVP／IEO有效期内非宗教学习豁免、访客独立短课期限和内容限制、非全日制不合STP；假期14+、学期16h或计入毕业实习、LOA额外实习及交换生排除。未由学习资格推DP／LTVP工作许可。 |
| [NUS Code，2025-12-15](https://studentconduct.nus.edu.sg/wp-content/uploads/NUS-Code-of-Student-Conduct.pdf)、[Acceptance Record](https://www.nus.edu.sg/registrar/administrative-policies-procedures/acceptance-record/) | Code新工具6页全文L0—208，采用作弊／AI misuse／尊严／迎新／骚扰；Acceptance新回源274—336采用引用与第三方保密329—330。正文没有声称全校禁止所有AI，也未把校规当全国法律。 |
| [DERC](https://nus.edu.sg/research/irb/derc)、[考试评估](https://www.nus.edu.sg/registrar/administrative-policies-procedures/undergraduate/academic-assessment-feedback) | 新回源DERC45—94，实际学生／faculty分类、DREAM与iRIMS不同；正文只要求先确认路径，不推课堂作业自动免审。评估278—298完整采用：UHC前EduRec、外医Part3、可能IC／延修、复核漏评／分数传送而非重新评分。内部VPN／学生目录未登录。 |
| [无障碍](https://osa.nus.edu.sg/services-support/accessibility-support/)、[UCS](https://www.nus.edu.sg/hwb/ucs/) | 无障碍同日成功原工具L175—268独立实读；本轮未重复已失败URL。UCS新回源45—168：邮箱／预约、walk-in短风险评估、保密例外、6516 7777服务本校学生员工、999／995均核。旧SOS号码未采用。 |
| [NCU联系](https://care.nus.edu.sg/)、[FAQ](https://care.nus.edu.sg/faqs/) | 新回源根12—98及FAQ44—94：ncu_help、表单、免费、匿名限制、不入学业记录且保密例外、不调查裁决、学生CES／员工whistleblow分流。正文未承诺24小时人工接听或求助自动立案。 |
| [Regulation10](https://www.nus.edu.sg/registrar/docs/info/administrative-policies-procedures/Regn10.pdf) | 本轮新web Internal Error后停止；独立实际读同日已成功原工具L66—414。clauses8—29的通知／答辩／书面口头程序、Head上诉14日及150元、BoD上诉14日及1000元、grounds收到21日补全、退押金条件及非自动暂缓逐条相符。Code当前原件列独立Reg10A，正文没有用一般Reg10覆盖性不当行为专项。只核已列部分，不宣称全11页或目视。 |

## 原件与限制留存

审者新工具原样保存在忽略目录 `.cache/research/b04-higher-facts/reviewer-tool-1-3.json`、`reviewer-tool-4-10.json`，含失败返回；本次实际读取而未重抓的原件在 `.cache/research/b04-education/`。独立解析文件与原件比对记录在审者目录，未修改作者原件。HTML静态提取没有执行挑战脚本、调用私有接口或登录真实账户。

| 同日主管原件 | 大小／SHA256及本次实际处理 |
| --- | --- |
| `studentloansg-faq-direct.html` | 328,552B／`a05ffcdf1abbc9a21fc0e9b30a2a626f58fdde4423cf4934e97ce92622d6bd69`；独立43问提取。以原始bytes取SHA，文本换行正规化的中间SHA不作原件标识。 |
| `moe-hesl-detail-direct.html` | 117,603B／`3505fb0442bc8a2b7a8ef4855bd7c64576b3754593a425f907af426686ef98d3`；五原record独立解析与原HTML字段比对。 |
| `ite-fees-2026-direct.pdf` | 147,278B／`0f344b49a2bdd15506721e3e50c944ab7e72899597d16f67861eb150f415bccd`；两页独立提取，第一页实际目视。 |
| `education-source-18-regn10.txt` | 30,322B／`6438f5fa7e14e241bcfd443ad3dfaa1d3232aedf4a83100296dec3496913e31b`；主管PDF同日原工具文字，不是作者摘要，采用范围如上。 |
| `education-source-17-0.txt` | 31,255B／`804381a6d5edb6af2b4f5816f7ddd344f81c1df27e509cdbf7c5cdd03ae3ddcb`；无障碍采用原文175—268，其他内容不合并宣称全读。 |

已知MOE挑战、NUS费用／Code实体返回212B HTML、无障碍超时等没有无变化重探；NUS费用及Code的本次web PDF文字读取成功与实体下载失败是不同事实。Reg10本轮错误和缓存采用明记，不将错误页作为更新。未知的下一招生年度安排、个人录取／TG合约、校内受限具体期限和贷款最终审批不在本审批准范围。

独立机器复核最终文件大小、full／body SHA、唯一差分及中文加粗外侧空格通过。正文保持 written／draft:true／核验字段空；第三编辑、共享生产门禁及实际渲染仍由 root 接续。
