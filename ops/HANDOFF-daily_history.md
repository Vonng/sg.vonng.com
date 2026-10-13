# daily_history 当前交接

保存于2026-10-13，Asia/Singapore。本轮最近实查日期18:02 +08，root确认整书goal为active；旧暂停已经解除，旧代理不存在。**全书任务继续，不是等待新用户指令。** 本文件替代旧暂停断点；旧各批审稿历史仍在ops/reviews和相应evidence。

## 权限与已读要求

本轮先完整读PROMPT、AGENTS、BOOKMAP→TASKS→CHECKPOINT及旧handoff，并核Git实际文件。执行者不动共享总账、配置、模板、导航，不运行共享构建，不stage/commit。root负责第三编辑、工程、public同步与提交。本轮未启动自有后台任务或服务器，未操作真实学校／医疗／贷款账户或外部联系。

本人独占住房尚余 buying-hdb／buying-ec，教育 school/admission／learning／school-life 和 learning/higher-education／tuition-grant／adult-learning，ops/maps和evidence的b04-education。本轮root明确将admission从care转给本人，care已确认当前没有编辑；旧地图只读分派已更正。身份制度不可由相邻政策推定。作者written/draft:true/核验空→identity异人事实→root第三编辑工程，完整稿不积压。

## 已交主控／继续冻结

- purchase-costs：root第三编辑要求仅“教学假设”改“教学虚构”，本人精确只改该标签；identity逆差分严格恢复原通过SHA并更新正式事实报告。最终作者28,103B，full `afa5e9e4ea33639d9cc7fa71333f37a3c6a3131e30ab8bf71ca1a4e79907e2a4`，body `7eea21348ebcd9e704f784048b60d4566f9ab108c223ae10a42d9be1d613a60c`。root已接收并实际构建／浏览器／打印；当前元数据快照28,169B/full `d30b3be93e4f04dafc145bf9b6913357f465c5a2e9b33e96da6f50908db78e94`，body不变。
- buying-private：最终作者21,137B/full `dfeef8872a550c16ae5e13b640db327db3bc1d7ae148a5309042063eb3b79982`，body `07eaf4b852ee114b1bc9d0cb16c8adb2d246fb1bcab54ecc726c4ebee8a9e751`。identity最终事实已过；root已编辑工程接收，当前元数据快照21,203B/full `3892d3946af0b810cbcf9cec04a17e56d61abe2957148536eeb0b96b8105c1e4`，body不变。
- root要求两住房专题地图标integrated，本人已同步 `ops/maps/b03c-housing.md` 和 `ops/evidence/b03c-housing.md`，稳定快照已告root。final gate／public同步／本地提交由root执行，不能冒称本人做了这些。
- airport、banking 既有正式事实报告root复用，本轮没有重审。banking最后日期修订原报告已签；已接收冻结。更早tenancy／neighbours、交通、语言、world、privacy-fraud等报告均已有，不按旧handoff重新开始。

## 医疗记录独立事实审已完成

care稿 `content/book/people/healthcare/medical-records.md`：24,344B，full `7088f1d1b988e7b4a9df03427f6f911d98afdaa259bd8d5424e7e54f9aa8c6c7`／body `c38c9b0f8132571bc5506c992c718553e16b6ee45351bc986481b8a18f6d71c7`。正式通过报告 `ops/reviews/b04-medical-records-facts.md` 已写并交care/root。

本人全文首稿→实际独立读RMC01—30原工具和六PDF→提出14/60全职与兼职小时、SMC彩色扫描两反馈→care修订并补RMC31→本人最终全文再读并签SHA。31源范围、六PDF SHA及真实目视边界均在报告。目视只有NEHR物理1页、NUHS A物理1／3页；不冒称全PDF。新MOM兼职详源实际web读，忽略原件 `daily-medical-parttime-original.json`；care另独立读同页。没有剩余事实阻断。下一care成熟稿 medicines 正研究，会交本人独审；收到后按完整节点接，不阻塞教育写作。

## 首篇高教完整稿已交审

`content/book/people/learning/higher-education.md`：首冻26,083B已经完成异人事实反馈修订。唯一改动是 HESL 毕业后一年还款上限限定 NUS 并加 E13 引用，不推全校；当前26,251B/full `4bfeffcbf39bf75639137dd192f198da2f2cc5524719bddd3deb9fa9e62b842f`／body `37c662a2e83b67d7578f6d1cb9ec64751b07e0b6f77ef79097fc256dd0a6ec3c`。identity正式通过报告 `ops/reviews/b04-higher-education-facts.md`，逆差分严格回首冻；root实际完整读158行并第三编辑通过，待B04C工程接收。**正文继续冻结，不自签事实，不提前标integrated。** 作者机器旧首冻结果 `.cache/research/b04-education/higher-education-author-check.json` 是历史，当前外引新增1处。

覆盖院校与学历选路→SP／ITE／NUS申请→2026三费表示例→TG概述／助学金／PSEA／CPF／HESL新旧→担保申请签约和偿还→STP／DP／LTVP／访客及MOM实习工作→科研学术、考试受阻、无障碍心理、骚扰求助／正式报告、校纪申诉与离校。NUS／SP／ITE实例不推全岛；TG完整合约、成人培训与基础教育仍独立未闭。

证据 `ops/evidence/b04-education.md` 与地图已更新：E01/02、E06—33相应原文及新E36—39。来源缓存 `.cache/research/b04-education/`：

- 原工具01—20为txt，新21／22／23为JSON编码的真实web返回字符串，先json.loads再读；新24保存本轮Accessibility重开timeout（该页已有同日真实完整成功缓存，正文基于实际复读）。不重复失败探测。
- MOE普通直连原HTML成功，无挑战执行／接口调用。公开返回RSC record静态解析仍同一已返回原件。学费SC理工3100在同原件record146，不能拿未解引用的`$146`当内容。
- StudentLoanSG公开FAQ43项已完整实际读，HESL基础SC90／PR diploma75 degree65／IS poly55 AU45；ITE diploma与arts仅SC/PR，兼职AU本科仅SC；收入及living／OSP范围按制度。先校内aid后means loan，学生Singpass和外国担保无Singpass不同；approved仍双方签；离校即时全还与正常毕业最迟一年还款分开。
- E10 ITE实体PDF147278B，SHA `0f344b49a2bdd15506721e3e50c944ab7e72899597d16f67861eb150f415bccd`，两页文字已读；本轮再目视物理1页。护理不同保险、按term身份通知时点、国际费表不推外国学历IS可录取。
- E11 NUS本科费表工具真PDF文字物理2／14已读；实体普通／唯一8888皆212B HTML，停止，没有实体目视。E22当前Code为2025-12-15版完整工具文字已读，实体212BHTML停止；不冒称看图。E26 Reg10采用物理2—11部分L66—414，不称全11页／全部性不当行为程序。
- E36 SP资格表；E37 DAE真实2026-10-05更新，国际学历／返新SC／居家教育下一窗2026-10-19—30，其他学历窗口不同；E39 ITE2026 Other Qualifications明确外国／私立学历IS不录取fulltime，既有Jan/Apr窗口已过，下一年必须新公告。
- E27 Accessibility本轮最后一次web重开timeout，原成功同日缓存 `education-source-17-0.txt`实际175—268支持；没有再试同URL。E28 UCS现用ucs邮箱／Lifeline65167777，旧SOS1800不采用；NCU不是调查裁决，电话迁移／旧notice矛盾不用来许诺24小时接听。

## 下一动作：TG完整义务链，然后基础教育／成人

先从已成功MOE根页原HTML里的真实href定位新主管子页，逐项核 overview／application／employment-and-pass／deferment／liquidated-damages，完整读条件、身份、担保、各deadline、TG&S无账号／境外材料、就业更新、升学／NS／家庭变化延期、违约偿付与完成／受阻入口。不能只写三年bond摘要交完TG。根页 `.cache/research/b04-education/moe-tuition-grant-root-direct.html`／`.txt` 已实读，仅根页的overview段已闭；`-returned-content-text.txt`解析只取到导航banner，须用真正正文txt。根页原HTML97530B、SHA `877647f784e79be8febcc7ef2d2c251454e208ae9a67aaad647d5bc15d6ff2d8`。

根页 href 已用标准库 HTMLParser 提取，五个详情及其一次代理均失败止损（见下方新断点），不能重复此旧步骤。系统无bs4，不需要安装。无需再问root是否继续。

之后 school/learning：PSLE／Full SBB与2027SEC／2028招生分期、MTL评分／豁免、课程及SC/PR/IS费、SEN/SPED与申请支持；school-life：家校、缺课转学、霸凌保护、青少年转衔和NS；adult-learning：SC/PR／外籍权益、SkillsFuture／补贴津贴、培训质量／私校合同费用保护申诉、海外与职业认可。均完整行动链逐篇成熟就交异人审，不为减少难度删高影响分支。已有 `moe-fullsbb-microsite-direct.*` 真原件需实际读；E34 MK及E35KCare真原文已闭部分费用，但不因此关闭学习与特教。

## 不重探的真实缺口

- HDB／EC：`ops/evidence/b03c-housing.md`最后访问节已有详细失败。新旧sitecore家庭／seniors／singles及HFE Ask等403或JS导航；已各正常直连和规定一次8888。MND两真新200仅导航。核心家庭／单身／非公民配偶、PR年限／既有产权，以及EC旧5/10和新批次10/15资格与开放条件未闭；已有HFE／BTO／resale流程不能代替资格。无新URL／版本／外部变化不再请求。保持researching，不建不完整正文。
- admission：旧MOE P1、international-students、AEIS、S-AEIS、eligibility、user-guide、20260910新P1公告及旧MTL learning-in-school失败已止损；年龄／CEQ各年级、当期日期、2027报名入2028框架／抽签核心仍缺。真正新主管URL／版本才继续，不能缩成“学校类型简介”宣布入学完成。`ops/evidence/b02-family-school.md`、`school-access-followup.md`和本教育证据保留。
- 医疗SSO／PDPC／旧OPG等失败不为本轮通过篇重探；其他医疗专题若有真正新入口，由作者记录。

所有源码／轻原创／轻量证据可入Git；下载原件、JSON缓存、PDF、图像、机器结果都在ignore的.cache，本人未暂存。root并行改共享文件正常，不清理或回滚。


## 追加当前断点：TG补源保存，接medicines事实

TG根HTML真href已用标准库HTMLParser提取（系统没有bs4）；五个详情已各web挑战、普通202空、唯一8888仍202空，止损，不执行旧“再查五页”动作。教育证据已追加E40—44及失败原件。两成功实体PDF与指定图片：tg-application-guide.pdf 2,765,043B/SHA97274a68…，26页文字全读、物理4/26目视；tg-surety-criteria.pdf406,869B/SHA65511112…，2页文字全读、物理1目视。26/27/28工具JSON保留真实返回，搜索块只定位。

下一TG真正新来源：`https://go.gov.sg/imptnotefortgapplication`（26页指南真实嵌入链接）；RP当前页MOE coverletters links2/4/5；根FAQ queryweb挑战但尚未直接／代理。就业计入／更新、延期及担保保证金、赔偿和解除核心仍未闭，不写窄版替完整页。NTU实际正文2026申请／签约日期与搜索2027XX占位不同，按实际正文，不用摘要。

**medicines 完整事实已通过**：最终20,493B/full `bba7ee61803286553fc2190761bf14518076ed102d74c5ead556750ef4a4b495`／body `42367a166bcef5f283486bd6fd68858e7589a49893f10c782b8092a9f38463e3`。本人完整读首稿和MD01—26实际主管缓存，发现电子药房FAQ Q7应物理3页而不是4页，care精确修并逆差分回旧冻；报告 `ops/reviews/b04-medicines-facts.md` 正式交root，root已全文读116行第三编辑通过，待B04C工程。本人新正常取得电子药房PDF199107B/SHA8490b6fc…并真实目视物理3页，`daily-fact-epharmacy.*`，不是重试失败的HSA携药指南。后者仍仅6页工具文字、未目视、普通+唯一8888已403不重探。三HTML SHA核对一致；报告清楚同日缓存和新获取边界。正文冻结。

root通知B04B两篇已验收本地提交4625e25，累计62主题；后续B04C将组合高教、药品、MDW及SRS，主控工程尚未完成。**SRS事实和第三编辑均正式通过**：作者仅补医疗表独立精神障碍分支，最终23,087B/full `bf9b066e02b3b1847717dfe53aabd9c37155fd83a37e7ddb518512540487b80a`／body `0e1044105ab9d7dd48c8383ac3c8680d2c8ad04c9f9541c7e27f33f2157f0190`。本人新段全文复读并逆差分严格恢复初冻；`ops/reviews/b05-srs-facts.md` 已交identity/root，identity `ops/reviews/b05-srs-editorial.md` 当前通过，未改正文。S01—13实际同日缓存采用范围和四PDF SHA均在报告；目视医疗表1页、MOF2017手册4页、UOB费表2页，非全部PDF；两DOC未读不冒称，未另联网。正文冻结。

## 18:02之后TG当前研究断点

旧下方“47932进行”已作废；47932、13493下载会话均已完成，没有尚待poll进程。源29—32新原工具JSON在教育缓存，尚待追加E45起证据条目。

- MOE2026-01-12三coverletters全部文字实际读（SC1／PR2／IS2页）；普通200真实实体各232398／242906／244328B，tg-letter-{sc,pr,is}-2026.*。IS物理2页实际目视，above21 below65；RP专有窗口5/16—30已过。SC同/更高级已完成TG资格、PRIS三年当地实体、IS名额择优；实际材料不等于完整agreement。
- 新短链imptnotefortgapplication首次普通成功至file.go.gov.sg同名PDF，11页文字全部读，物理8页实际目视，**July2026**版（搜索Sep2025旧不采用）。1440165B/SHA6135233e19c272549320ddb229d4c362cb0d6d1a1683968af5a1fdc409ce72b0，tg-important-note-direct.*。身份／外国住址／English公证／独立个人邮箱、Singpass约2周与STPbiometric同步5工作日、5task100%仍submit、学生surety1surety2电子签等。Q7错误bond验证、Q8编辑既有task不删、签后download，完整行动已闭申请。
- 旧FAQ根query已首次普通及唯一8888均202空，`tg-faq-root-{direct,proxy-once}.*`，停止；不再执行旧handoff“尚未直连”。
- 真新MOE briefing FAQ `https://file.go.gov.sg/tg-application-faq.pdf` 7页工具全文L0—245及实体layout文字全部读，326574B/SHA03dfa28300756212c18643bad166a486c83d4685b03f9bffffab55aeaa3969c7。tg-briefing-faq.*。注意A11广义不允许担保其他TG，A20父母可担保兄弟姊妹，较E41／coverletter“其他已失约受资助者”更严格；不能隐去冲突。B6仅毕业后全职，B5一般求职约半年不是正式宽限，B9升学批准至少开课前8周取得。B8SingaporeNS不用延期，D1foreignNS要先批。D6LDgrant+10%年复利+逾期另算，已有新官方估算入口grantsense尚未读。
- MOE main recipient guide短链 `https://go.gov.sg/tgr-userguide` 首次普通成功至公开PDF `https://tgs.moe.gov.sg/protected/nr/dkSdF/TGR_User_Guide_Public_V0.6.pdf`；7179453B/SHAc25e7fe8901caf9c3eed1a930a5976ab6464e9b6c86f56bb2bd2eb5d240fc5a6，58页。**18:02后物理1—58全部文字已实际读完**。此前1—38，当前39—58逐页补读；不声称全部图像已目视。contact变更与换surety分程序；每6个月或就业变更即时更新；buyout经通知金额／截止／上传支付证据／两次确认；defer先申请→处理通知BG→填BG→批准结果→期满更新/回新加坡住址→取得并开始当地就业才请求返BG，须review/submit。新多项图片正在render；以实际view_image记录范围为准。
- 4页MOE就业指南 `https://go.gov.sg/tg-userguide-employmentupdates` 首次普通成功至file.go.gov.sg同名PDF；584281B/SHAda84c434ddc51e76da1ac04333dcee839b693dd57b07b4da0a6386c6e647329c，tg-employment-guide.*，全工具L0—17和实体文字实际读。图片doc字段下一目视，不用文字抽取空白推无材料。
- TGportal public `/res/p/tuition-grant/`及`/res/p/tg/`全部23／10行实读：新首次Singpass、既有email／reset、原records逐步迁移、资料改Pages→EditMyProfile，忘email官方enquiry。NTU bond management仅采用实际676—683：2026-04-01NTUSE/NTUST转MOEadmin，不拿其六年奖学金bond套TG。

下一：目视FAQ物理5／7及main recipient就业／延期BG截图，读原件真实href所指的新主管就业及延期详情／完整协议；grantsense新官方工具只公开说明，不提交虚构个人资料。核心就业计入、海外派遣／自雇、BG金额时期、LD计算和解除证据仍要补，现有58页只说明系统流程不可冒充全合约条款。若真正新来源耗尽则精确保存缺口并推进school/learning，不缩题交稿。完成E45起证据条目、map稳定快照时通知root。全程不重探旧TG五页、旧admission或HDB/EC失败。

## 最新断点：B04C已接收，教育证据快照已完整落盘

root已确认B04C高教／药品／MDW／SRS完成构建和实际浏览器／打印，66主题、286产物一致。higher-education当前integrated/draft:false，26391B/full09d27ad74c0c428611d8dd55bd70a775376a30bf54f9dee28fb27b8bade92e7e，原body37c662a2…不变；medicines20634B/fulla400461b…，原body42367a16…不变；SRS23113B/fulla58ceb3b…，原body0e104410…不变。本人的正式事实报告仍绑定各作者冻结正文，元数据变化不冒充正文重审。root正本地提交。

**教育evidence/map已追加E45—62完整本批新资料**，恢复优先读最后新节，旧“核心尚未闭／源29未入证据”的断点为历史。TG通过真正新PDF内链接首次普通取到六个MOE详页，全主体及相应折叠原record已读。新employment FAQ query正常200原HTML1308012B/SHA83b4f60d…包含250公开类别；同一已返回数据静态解出TG六类47问已逐题全文读，原objects+text保存在moe-tg-new-faq-employment-direct-{all-original-categories,tg-questions-resolved}.json及-tg-questions-text.txt，没有接口请求。其他教育类别未读，潜在可补旧入学但不重探旧URL。

当前TG完整写作信息已足以覆盖资格→担保签约→不同身份→就业计入／材料→延期BG→赔偿／身份变更→正式discharge，尚未创建正文（不建空页）。需如实处理原件冲突：E53毕业首次3月、E59Q19/Q24一年；E50每6月、E57同工每年；E55本地NS“do need”与E49B8“不需”相反，不能擅补not；E49升学至少8周前**取得批准**与E54两月处理／E59迟录取即申，不写保证；BG页5日银行3周与defer各页7日2周，不保证时限。可给较早准备动作而不伪称统一法律。surety正文用主管above21/below65，另担保他人限制说明E49A11较广、JuneFAQ Q8及coverletter只指已失约受资助者；父母为在读兄弟姊妹仍可。

47问新闭：LD总grant含GST＋10%每学年末复利；后补TG只余期仍3年；PR次term调层不免3年／SC立即告校次term最高层且释放；NS不抵免；就业正式毕业日期用成绩单而非毕业礼；终了更新后tg-enquiry求discharge并portal存PDF；LOD须整笔电子付款；若居留申请因缺12月更新受阻，提交本人FIN校名过去12月活动，不保证恢复。

新目视：E49物理5/7；E50物理40/48/51/53/55；E51物理3。E50全58页文字读完非全目视。BG原件只给估算LD及本人通知额，未采用论坛20%/100%。grantsense短链正常到官方所指lovable.app公开HTML，未填表／运行估算。个人完整TGA未登录取得，不称逐条读私人协议。MOM／ICA用已实读E32/E33；TG&S菜单提临时LOC／LTVP支持信但公开完整资格未闭，不能推普遍可工作。

**当前先接saving-investing第三编辑**：care最终事实正式通过并root安排，作者最终23192B/full `1bf7ff46edb391422c6e487f82f6f66688bba7d0db4a25aa536b5d6dab581a21`／body `cdf88da7b21302108c2e5d102fb2c495f49d3abf51549aa5dd967c6b6e8b1049`；`ops/reviews/b05-saving-investing-facts.md`已落盘。下一全文读稿及报告，编辑静态检查，不重做已独审事实；问题交root作者修，不代改正文。通过后写独占 `ops/reviews/b05-saving-investing-editorial.md` 交root。随后完成TG作者稿＋自审＋静态＋SHA交identity事实（root协调）。

所有下载会话已完成，无待poll后台进程。本人未构建／提交／登录账户或外部联系。旧TG五详情、旧FAQ根、旧HDB/EC/admission仍无条件不重探；新success原件复读可用但必须说明同日缓存。
