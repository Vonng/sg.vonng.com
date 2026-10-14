# B06 入学：作者原文、适用范围与核心未闭项

作者为 coverage_audit；真实查阅日 2026-10-14（Asia/Singapore）。唯一正文为 `content/book/people/school/admission.md`；承接旧identity未独审的B02稿，初态108行/14785B/full `fe7068688b4c82cf9625f377d17c80b6782b3f920005af0ed16920daf244a1fa` / body `d371e9d68f8fd629471b2588587b55fba671f6ab01bc3f4cc2372320028f975c`，完整副本先存incoming-admission.md。旧证据、地图、交接只用于定位，本文不继承其独立事实通过。

当前正式作者首冻为 166 行 / 28726 B，full `2ec419cb1c01143f00142528511ebc9dc4439615c5636f7e5545b1d8ccce8422` / body `212f41509f5f08900e4af252f429b747ac48c6d2c408b9fdff4531363021deb0`；仍 written / draft:true / verified与reviewed_by空。末次完整通读及正式冻结见文末真实记录；这里不签独立事实、第三编辑或工程。

## 原件取得与本人阅读的区别

正文40个独立外部URL中35组采用、5个仅为定位或服务入口。15个MOE FAQ URL分类对应同一份旧的正常公开原HTML及其公开问答数据，不能写成15次本人联网取得；其中P1 117题612行、国际学生18题84行已本人真实完整读，另回流18题和小学转校19题的完整必要段亦已读。原HTML由 daily_history 于2026-10-13普通HTTPS200取得，1,308,012 B / SHA `83b4f60d45647c45da0321d5e11ec32b9481a6ecb612ef3827bc2d92770f4ae7`；取得者/日按B04原证据，不用本人14日读日替代。分类URL来自该真实公开分类id，查阅的是原件中对应FAQ，而非声称14日每个分类链接成功。

本人另从同HTML静态解码122个公开JSON push片段，117+18个完整原答均与公开原件相符；没有执行JS、请求后端或绕验证。校原件记录 moe-public-faq-original-alignment.json，只作配平，不替代阅读。公开JSON原引用及原答、question id和更新时间保留；新source-adoptions.json可按每组找到对应原件。回流/转校缓存同出该公开原件，原数据不被本作者改。

18个采用web组为本人14日本轮实际工具返回的主管详细原文，截断源已补完整采用段；两个正文引用PDF为本日普通200取得的实体，唯一物理1页文字和原页图均真读。另外AEIS-Secondary同类PDF也取得并完整读1页文字/真图，作为辅助复核，不计正文独立URL。合计3个实体、3个完整文字页、3张实际原图；未冒称AEIS-primary旧失败原件已读。

## 实质采用矩阵

| ID / 原文 / 真实URL | 实际阅读与支持 | 身份、时期及边界 |
| --- | --- | --- |
| AD01 [小一全国问答总分类](https://www.moe.gov.sg/faq?categoryid=76037F9F568F46A7AA80EFDCE9AB23CD) | P1全117题／612行本人完整读；正文只采用相关条件；不采用Q115旧O-Level关联升学表述；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:02:17.947Z', '2026-09-30T06:58:31.163Z']；孩子SC/PR/非SC非PR、阶段、出生、住址、监护与受阻 |
| AD02 [国际学生全国问答](https://www.moe.gov.sg/faq?categoryid=D1FDE07370F74F04B63B4592E161CBA1) | 18题／84行完整读；重点Q3/5—9/11—17，PR父母/DP孩子仍需AEIS，重报、CEQ、录取、外国原学生再入学；原件 `moe-international-faq-resolved.json` | FAQ逐题更新时间 ['2025-11-25T04:15:57.429Z', '2025-11-25T04:15:57.580Z']；外国孩子；不以父母PR或DP豁免考试 |
| AD03 [回流公民及PR全国问答](https://www.moe.gov.sg/faq?categoryid=F8ACA3ABB7DD42799138FD6D8D34D9AA) | 18题完整读；Q1/3/4/7/9/10/14/18；无LOA、拟居区、安置与指定学校、评估不同；本页不采用RS年龄表来推AEIS；原件 `.cache/research/b04-education/moe-school-faq-returning-school-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:16:58.008Z', '2026-08-20T00:24:20.469Z']；SC/PR海外生活学习回流；ASP完整个案资格不新增 |
| AD04 [小学转校全国问答](https://www.moe.gov.sg/faq?categoryid=FFCA2C16536A4CC1AE64080BA2917D31) | 19题完整读（早先显示缩略Q10—15已分别完整补读）；Q1/7、地址/报到/监护与后果；转校细节调用school-life主文；原件 `.cache/research/b04-education/moe-school-faq-primary-transfer-resolved.json` | FAQ逐题更新时间 ['2025-11-24T10:12:21.948Z', '2026-05-20T06:03:55.507Z']；在读P1—P5 SC/PR且搬家；不推国际学生 |
| AD05 [小一报名事项](https://www.moe.gov.sg/faq?categoryid=2662B55F532E40368F35394CD97CD2E5) | P1 Q59—72；年龄≥入学年1月1日6岁/Jan2,2021须2028、单校、在线受阻9—16:30、共同监护/失联/法院建议至少3月；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-27T09:19:37.340Z', '2026-07-27T08:36:24.039Z']；2026注册2027入学；法院帮助只选路 |
| AD06 [小一出生边界、SEN及其他问答](https://www.moe.gov.sg/faq?categoryid=17EF23F543444142955C9817E6C53B25) | P1 Q113—117完整读；2020Jan2—2021Jan1双包含、SC/PR Jan1延期不同、漏报不能自主跨年、mild认知/大组／SPED；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:02:18.813Z', '2026-05-19T00:55:04.928Z']；SC居新义务；PR不套CEU授权；SEN不推所有学校必收外国人 |
| AD07 [小一延期与义务教育问答](https://www.moe.gov.sg/faq?categoryid=99F9F9282C3049E38838F410F292357B) | P1 Q110—112完整读；CEU批准有位回原已获校且禁重新注册、无位次年注册；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2026-04-28T04:54:04.599Z', '2026-04-29T02:00:27.190Z']；公民延期及已批准状态；不假装每种理由必批准 |
| AD08 [小一阶段问答](https://www.moe.gov.sg/faq?categoryid=65AF36CE05034FB99C2705FDFAB78E5E) | P1 Q1—7完整读；Phase1不是距离资格、父母旧生2A不保证、义工各校需求、2CS仅剩位；其他2A/2B完整资格仍缺主管详表；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:02:17.947Z', '2026-04-29T02:00:25.135Z']；2026框架已核范围；不把Gongshang单校表补全国 |
| AD09 [外国孩子小一问答](https://www.moe.gov.sg/faq?categoryid=A7B0B51A79FC4652A9EE81E77A17C09E) | P1 Q36—51完整读；意向并非注册／不得择校、确认修改撤回、身份申请及活动中/后转SC/PR、endOct、指定校、无上诉/临时到校；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:02:18.316Z', '2026-06-24T03:46:01.270Z']；2026意向及2027入学；实际统一起止日未由此FAQ取得 |
| AD10 [小一名额分配问答](https://www.moe.gov.sg/faq?categoryid=2F9980DC0E2D4217ACA58B28672A4D04) | P1 Q92—97完整读；仅用对有无学校关联均开放及非先到先得，旧20/40及1/3/2/3不当2027新框架；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:02:18.640Z', '2026-07-08T04:00:01.000Z']；名额政策仅2026历史说明；正文未填2027保留名额 |
| AD11 [小一电脑抽签问答](https://www.moe.gov.sg/faq?categoryid=1139BF5BD5BE498ABBF8082B3467901A) | P1 Q88—91完整读；同类别超额、MOE中央电脑抽签、未中下一阶段及2CS后安排/SMS；六组精确优先排序尚无主管主表；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:02:18.561Z', '2026-04-29T03:02:02.373Z']；SC/PR；同身份同父母/监护/住所兄弟姐妹分组未在本稿展开 |
| AD12 [PR名额限制全国问答](https://www.moe.gov.sg/faq?categoryid=71DE17DF588D46E6A86204485C67CF9B) | P1 Q98—106完整读；SC先PR、限制仅2C/2CS、学校/名额逐届、Phase1兄弟姐妹不套限制；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:02:18.674Z', '2026-04-29T07:26:53.988Z']；PR具体学校及名额仍须当届名单；非各校统一25%硬上限 |
| AD13 [住址、距离与30月问答](https://www.moe.gov.sg/faq?categoryid=E3E39C0FD0F04504A444B1F600CC8430) | P1 Q8—25完整读；NRIC/真实住所、普通2026起点Jun30、租期、同HSD搬家例外/转校、OneMap边界算法、VPD/DPD≤Dec31,2028／不收预计竣工、转售购房证明；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2026-09-30T06:56:50.919Z', '2026-09-30T06:58:31.163Z']；home组Sep30更新；未交房/转售特例30月起点未从普通规则推定 |
| AD14 [替代照护地址全国问答](https://www.moe.gov.sg/faq?categoryid=FC5BB3094F074536AEBBCA4303234A4D) | P1 Q26—35完整读；双方全职、grandparent/parent’s sibling、继续平日照护、审批在注册前、原申报家长、≤2km归同身份1—2km、同址无需另声明；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-25T05:02:18.195Z', '2026-04-29T04:18:37.963Z']；不是任意亲属/干亲地址；声明期限早于2C，2027精确窗口不推 |
| AD15 [小一门户公开问答](https://www.moe.gov.sg/faq?categoryid=F61369DB2D624A40ACA9C73104E3F213) | P1 Q73—87完整读；Singpass/2FA、双方有custody可看/一方提交、May31地址、在线异常表、同阶段重交/跨阶段先撤/多人同时删除；原件 `moe-p1-resolved.json` | FAQ逐题更新时间 ['2025-11-27T09:19:37.464Z', '2026-04-29T03:28:13.824Z']；本稿没有登录或提交任何真实孩子资料 |
| AD16 [AEIS范围与应考入境](https://www.seab.gov.sg/aeis/about-aeis/) | open-05.json turn638view0 L21—31；原件 `open-05.json turn638view0 L21—31` | 2026-04-08；IS P2—5/Sec1—3次年；准考证明非入境许可；国家主管 |
| AD17 [S-AEIS范围](https://www.seab.gov.sg/s-aeis/about-s-aeis/) | open-05.json turn638view1 L21—32；原件 `open-05.json turn638view1 L21—32` | 2026-04-08；IS P2—4/Sec1—2同年；只作由学年关系推2026/2027/2028的透明算例，不推日期 |
| AD18 [AEIS申请全文](https://www.seab.gov.sg/aeis/application-procedures/) | open-05.json turn638view2 L21—66；原件 `open-05.json turn638view2 L21—66` | 2026-07-01；CP/出生英译/护照≥6mo/成绩单非证书、2026CEQ从July2025、卡PayNow、不退费、Pending/≥4w/Remarks/email/拒绝ineligible |
| AD19 [S-AEIS申请全文](https://www.seab.gov.sg/s-aeis/application-procedures/) | open-05.json turn638view3 L21—65；原件 `open-05.json turn638view3 L21—65` | 2026-06-29；同前程序；Jan2025仅2026S-AEIS，不从其旧链接safe.menlosecurity跳查MOE |
| AD20 [AEIS测试详文](https://www.seab.gov.sg/aeis/test-details/) | open-03.json turn627view1 L21—95；原件 `open-03.json turn627view1 L21—95` | 2026-07-01；实际必要全文已读：前一级课程、数学无计算器/步骤、45/15min、两复印件；各段时长题数未全搬正文 |
| AD21 [S-AEIS测试详文](https://www.seab.gov.sg/s-aeis/test-details/) | open-08.json turn642view0 L21—105；原件 `open-08.json turn642view0 L21—105` | 2026-07-06；前一级课程、小学数学/中学英数，无计算器、45/15和材料 |
| AD22 [AEIS录取系统](https://www.seab.gov.sg/aeis/release-of-school-offers/) | open-07.json turn641view3 L21—27；原件 `open-07.json turn641view3 L21—27` | 2026-04-08；AEIS-IS而非CP；不推S-AEIS使用同一系统 |
| AD23 [S-AEIS录取系统](https://www.seab.gov.sg/s-aeis/release-of-school-offers/) | open-16.json turn652view1 L21—27；原件 `open-16.json turn652view1 L21—27` | 2026-04-08；S-AEIS-IS而非CP |
| AD24 [CEQ提交及月份有效期](https://ask.gov.sg/seab/questions/cmcvbp7tf002d13wyb0mcqpvn) | open-07.json turn641view0 L13—20；原件 `open-07.json turn641view0 L13—20` | 页面只显示1y ago，不换成精确发布日期；申请时交CEQ成绩，不可后补；考试在提交月份前12个月。此当前主管详问答与MOE Q1/17月口径一致，优先于Q16/date泛述 |
| AD25 [按前一级准备](https://ask.gov.sg/seab/questions/cm79ro0nx00dgzvz0byxy4xvu) | open-07.json turn641view1 L13—40；原件 `open-07.json turn641view1 L13—40` | 页面1y ago；不冒称今日政策发布；申请小三读P2数学；中二读Sec1英数；SPERS旁支不复制 |
| AD26 [不接受逾期](https://ask.gov.sg/seab/questions/cm5f0cx4v008f13bz7wxujhsm) | open-07.json turn641view2 L13—21；原件 `open-07.json turn641view2 L13—21` | 页面2y ago；当前独立读；AEIS/S-AEIS窗口内申请、不收late；不能从GCE迟报费推可补报名 |
| AD27 [SEAB实际受阻入口](https://www.seab.gov.sg/contact-us/) | open-18.json turn654view0 L21—119；原件 `open-18.json turn654view0 L21—119` | 2026-05-11；AEIS专技术表与一般表区别、电话69706255/通常MonFri9—17/关闭、仅特定服务预约至少2business days；仅公开读未发送联络 |
| AD28 [全日制学习、准证豁免与疫苗](https://www.ica.gov.sg/reside/STP) | open-08.json turn642view2 L31—57；原件 `open-08.json turn642view2 L31—57` | 2025-12-23；外国本人有效DP/LTVP/IEO可非宗教全日制，到期取消须STP；STVP短课≤有效期/30days短者＋独立模块＋其他条件；foreignborn≤12y0d提交CDA |
| AD29 [政府/政府辅助/独立学校STP](https://www.ica.gov.sg/reside/STP/apply/gov) | open-08.json turn642view3 L31—81；原件 `open-08.json turn642view3 L31—81` | 2026-03-13；宗教DP/LTVP须STP，IEO豁免；RegistrationAck、官方翻译三类、21SC/PR担保/SCPr父母继父母须担保、新续前2—3月、近3月照/疫苗、境外处理。45仅申请费且正文未重列全费用 |
| AD30 [外国学制/私人资助学校STP](https://www.ica.gov.sg/reside/STP/apply/fss) | open-13.json原普通显示截断后 open-14.json turn650view0 L31—75完整补读；原件 `open-13.json原普通显示截断后 open-14.json turn650view0 L31—75完整补读` | 2026-07-21；对应学校类别/EduTrust、材料/2—3月、境外/申请不延长停留；没有21岁本地担保条款，绝不从gov段移植 |
| AD31 [SWDA私立教育注册/认可](https://www.tpgateway.gov.sg/faq/private-education-institutions) | open-13.json及 open-14.json turn650view1 L115—207全文；原件 `open-13.json及 open-14.json turn650view1 L115—207全文` | 正文现SWDA；页脚2022不能替正文时期；ERF范围国际课程primary/sec及全日制备考等、注册不认证/资格接受由接收方、EduTrust何时须；只有原文范围，不把注册质量保证 |
| AD32 [当前PEI/课程筛选公开入口](https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-(peis)/pei-listing) | open-14.json turn650view2 L81—140；从真实现行保护页id37链接来；原件 `open-14.json turn650view2 L81—140；从真实现行保护页id37链接来` | 页面2026-10-12；PEI/EduTrust与课程类型公开选项及查询说明；未输入任何真实学校、未后台查数据，不保证个校已查证。旧pei-listing-file404不重试 |
| AD33 [停办费用保护](https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-(peis)/protection-of-course-fees) | open-13.json turn649view3 L105—127全部；原件 `open-13.json turn649view3 L105—127全部` | 正文SWDA；旧页脚2024与事实查阅区分；停办/无法运营时unconsumed课程费、IWC/FPS与本人检查；正文未搬全部费用collection caps，也不承诺一般退学全退 |
| AD34 [S-AEIS小学公开一页流程](https://file.go.gov.sg/s-aeis-pri-key-activities-and-milestones.pdf) | 唯一物理1页完整文字和真实页图均本人实际读；原件 `s-aeis-pri-key-activities-and-milestones.pdf / .txt / -p1.png` | 当前SEAB 2026-05-12目录实际链接；PDF未明示发行版号；曾offer不能直接online、年龄CEQ、前轮P5失败可S-P4/B1成绩及有效期差异；页面末写secondary school为明显模板残留不采用 |
| AD35 [S-AEIS中学公开一页流程](https://file.go.gov.sg/s-aeis-sec-key-activities-and-milestones.pdf) | 唯一物理1页完整文字和真实页图均本人实际读；原件 `s-aeis-sec-key-activities-and-milestones.pdf / .txt / -p1.png` | 当前SEAB 2026-05-12目录实际链接；PDF未明示发行版号；Sec1/2同年、满额可关闭、原offer在线限制、申请处理与考场动作；不从流程推具体年龄或日期 |

## 仅定位的入口

| ID / 入口 | 真实边界 |
| --- | --- |
| AD36 [阶段/当届日期入口](https://www.moe.gov.sg/primary/p1-registration/registration-phases-key-dates) | 由原MOE FAQ链接定位；此前P1主站受阻不重探，此处没有真实2027全国完整资格/日期表 |
| AD37 [下一届P1框架入口](https://www.moe.gov.sg/primary/p1-registration) | 此前JS验证和placement正常+唯一8888仍失败；不以Sept10媒体摘要或单校填2027规则 |
| AD38 [OneMap SchoolQuery入口](https://www.onemap.gov.sg/school) | 由已实际读的MOE Q18/19/20原href定位；只由MOE说明支持算法及当年核，未本人输入地址或称验过UI |
| AD39 [AEIS DOB/CEQ核心入口](https://www.moe.gov.sg/international-students/aeis/eligibility-criteria) | 本轮web仅3行robot challenge；外部交接2026-04-23壳仅locator；没有读生日交互必要字段 |
| AD40 [当届国际学生日期入口](https://www.moe.gov.sg/international-students) | 本轮web3行robot challenge；外部2026-07-17更新/2026closed与2027tentative时段只定位，本正文不声称当期已实际确认 |

## 当前核心条件仍未完成

| 未闭项 | 影响及本稿处理 | 可解除的新原件条件 |
| --- | --- | --- |
| G01 AEIS/S-AEIS逐出生日期与CEQ类型/最低CES表 | P2—5/Sec1—3、S的P2—4/Sec1—2只核了提供年级；各级精确出生上下限、年龄基准和CEQ最低档没有主管实表。没有填80/100/120等记忆数，也没有拿RS年龄或DSA单校表移植。本稿让家庭在付费前按DOB/入学年核。 | 新可读MOE当届完整资格页、实际公共交互全部字段或主管正式附件/逐档FAQ；同旧验证URL无版本/外部变化不重探。 |
| G02 2026 AEIS及S-AEIS实际报名/考试日与已结束状态 | SEAB当期申请页只链接MOE、未写日历。外部15:00交接所述international总页Jul17、2026closed/Sept1—3只作定位；本稿没有声称当前开放或已独立确认关闭。 | 新成功的主管公告/当届日历实体或官网详文，能核报名、考试和结果时期。 |
| G03 S-AEIS2027与AEIS2027窗口 | 两者入学年关系已核，具体Jan/Feb/Mar tentative来自外部壳没有自己读到；未写具体下一轮开放日、也未宣称尚未公布。 | 当前/下一轮主管详公告及必要表；未来确未发布与已经发布但本线未取得分开。 |
| G04 2027P1报名/2028入学的框架 | Sep10主管公告旧验证，FAQ Q92—97仍Apr/Jul2026的20/40旧份额；本稿不据此填写新60/12校等，也不称框架未公布。 | 2026-09-10正式公告可读新原件/主管发布原附件或新的官方全国FAQ更新，核全部适用学校/批次/过渡。 |
| G05 全国Phase2A/2B完整资格 | 父母旧生2A、在读兄弟姐妹1、认可社区领袖地址等已全国FAQ核；校务/职员/MK、兄姐旧生、义工加入与完成小时/截止、教会会馆等没有全国详表。Gongshang虽本日读完仍不补国家条件，单校招募亦不概括。 | 全国phase checker实际必要条件或主管完整附件/FAQ，而非学校自己的招募、DSA或费用页。 |
| G06 距离完整六组排序及新批次细节 | 已核SC先PR、类别内超额电脑抽签及照护地址≤2km归1—2km；完整六组先后表没从国家原表取得，正文不臆造次序。 | 当届主管完整balloting/distance详表及PR名额名单；不得从旧Rosyth2025局部替代。 |
| G07 未交房/转售替代地址30月起点及个案材料 | 普通2026地址Jun30起算和同HSD搬家例外已核；VPD/DPD≤Dec31,2028、不能用预计竣工及购房证明已核。未交房具体迁入与起点不套普通住所；表中给核问动作。 | 主管替代地址完整正式说明/当期表单必要字段与批准条件。 |
| G08 外国P1当届意向具体起止和下一届窗口 | 全国FAQ支持先意向/晚报无Phase3/10月底结果/不得择校，但不含统一2026May19—25日期。Corporation此日期只在该校通知，不拿单校填国家窗口；新稿未沿抄，下一窗也未猜。 | 主管当届P1国际学生正式日历或统一通知原件；若国家原件有同数再补。 |

以上询问动作与大量已核流程不能替代核心资格闭合；本稿冻结供独立facts继续已写范围及补源，不代表admission领域、住房或全书已经完成。G01/G02是现行核心，不能只以未来日期尚未发布解释。

## 冲突、失败与未执行范围

- MOE原FAQ Q16使用CEQ preceding application date泛述，Q1/17与本日SEAB详FAQ明确按submission month；正文采用更直接的当前SEAB月份口径。S-primary一页例外B1承接段有submission date措辞，故正文给成绩/日期核问，未推广成所有年份的受理截止。
- MOE国际Q3允许未接受旧offer者符合年龄时再申，SEAB当前S两个PDF同时禁止曾获offer者再直接online；正文分别写资格和操作，要求先找SEAB原记录，不宣称必须/一定新账号重开。S-primary页末Report to School写secondary是模板残留，不移植成小学生被派中学。
- 旧MOE P1 placement普通＋唯一正常8888 HTTP202/0B、AEIS/user-guide/eligibility/P1国际/Sept10等JS失败均保留不重探。本文本轮仅两现行international/eligibility web返回3行robot，未执行挑战。新增FAQ分类14日18:16:43的唯一urllib请求实际沿用环境8888代理，HTTP202/0B已存meta并止损，没有额外直连或第二次代理；13日公开原件本人正常读不等于14日该分类已联网成功。
- SEAB S两流程go短链web500后，其工具给出的实际file.go.gov.sg新URL本日首次普通urllib请求取得200实体；AEIS-sec也200。Requests库缺失的一次本地准备失败未发送任何HTTP，随后用标准urllib正常下载成功；urllib沿用当前HTTP/HTTPS的本机8888环境代理，未设置ProxyHandler({})禁用代理；原meta称direct/no proxy不准确，已真实更正为环境代理唯一请求。无TLS关闭、伪造客户端或登录，不重新取得成功原件。AEIS-pri旧失败没有重探。
- SEAB错误猜/contact/不可访问，从当前真实页面的Contact链接取得/contact-us/155行，本人完整读21—119采用范围。技术短链两个web500没有反复点击，联络主文已明确区分通道；公开CP登录页403，未登录、未执行挑战或提交孩子资料。AskGov新问题页只看14—16公开文字，未发消息，不是资格原文且未计采用。
- TPG旧pei-listing-file本日实际404；从当前费用保护页的真实链接取得新/pei-listing公开详入口，成功读81—140。只查公开入口，没有核任何具体学校结果、费用个案或私人合同。旧master learning链接变化已通知root，本人未改该已集成页。
- 外部15:00交接与搜索都只找路。未用民间、媒体、CEQ培训机构、单校DSA年龄或GCE私人考生Singpass/迟报规则补主管核心。错误抽出的ASEAN奖学金53题仅1—127部分读，已明确unused缓存；不计18题国际FAQ或任何稿内资格采用。

## 作者检查与审阅交接

工作稿166行已真读1—84及85—166；自审12个完整改段及全diff全部读，逆替精确回working-1，包含Phase2C防缩窄及宗教IEO明确补正，不冒称全部只是措辞。最终同版全读、证据/地图、八目标元数据及正式冻结由文末真实完成记录绑定。

机器源码检查：九字段/written-drafttrue-空核验、正文无H1、UTF8/无CR/单EOF、中文加粗空格、工具标记、标题和page_id唯一、79外链40URL与索引一致；11内部引用8个实际源码目标均integrated/draftfalse。最初辅助脚本把relref .md加成.md.md，已在本人私有副本修复路径解析并重跑；旧static-1误报保留历史，static-2才是正确源码结果。没有共享build、网页渲染、私有表单、事实异审或自签通过。

后续由root安排不同事实审阅者真实全部采用原文及必要PDF页/图；任何改稿只反馈唯一作者coverage_audit，再由第三人编辑和主控工程决定接收。核心仍未闭不得据35URL、166行或源码PASS签全书完成。

## 2026-10-14T18:46:16.389307+08:00 正式作者首冻

最终166行已实际分1—84及85—166完整通读；首工作稿也全读，自审12个完整旧新改段/全diff已真读并逆替准确回working-1。证据1—48及49—96、地图全部、八内部目标全部元数据和必要学校调用段均真读，末次支持新增记录随后也限定复读。正式保存author-frozen.md、author-final-readable-trace.json及author-check.json；九字段仍written/draft:true/空核验，正文full `2ec419cb1c01143f00142528511ebc9dc4439615c5636f7e5545b1d8ccce8422` / body `212f41509f5f08900e4af252f429b747ac48c6d2c408b9fdff4531363021deb0`。35采用URL、5locator、八核心G01—08仍开放，作者冻结可交异人审核已写范围及继续补源；未签全篇独立事实或编辑工程。无作者剩余自主修改，后续按精确事实/编辑反馈才改正文。
