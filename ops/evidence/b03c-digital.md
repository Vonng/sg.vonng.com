# B03C 数字生活原始来源与边界

作者 root；查阅日 2026-10-13（Asia/Singapore）。先建地图 `ops/maps/b03c-digital.md`。本记录为作者实际阅读，不代替异人事实审或第三人编辑。当前 accounts 已通过独立事实审，telecom 已写草稿；privacy-fraud 尚在研究。正文保持 written / draft:true / 核验字段空，等待各关及工程接收。

## Singpass / Myinfo：实际读到的主管详页

以下 AskGov 均为 Singpass 官方机构答复，实际打开并阅读支持段落；多数读到完整答复。更新时间只作版本线索，不当生效日期。未逐字搬运长段英文。

| 原文 | 所读内容、条件与正文取舍 |
|---|---|
| https://ask.gov.sg/singpass/questions/clul28lp4002t3b8g3hnggivy | 至少15岁，SC、PR及所列有效FIN类别；正文列主要类别并明确非穷尽，不把工作准证持有人之外一概排除 |
| https://ask.gov.sg/singpass/questions/clul27aq60028yisxifw2l2w3 | 注册条件、已登记地址、Face Verification；配合下列注册PDF看实际字段 |
| https://portal.singpass.gov.sg/home/ui/assets/pdf/Singpass_Registration_Guide.pdf | 普通web403后一次正常8888代理200，存忽略缓存；pdftotext完整读取28页，并实际查看物理第5、11页截图。NRIC/FIN、签发日或申请日、地址与联系方式验证；PDF仍写旧24小时人工热线，未采用该时段，以下2026年新FAQ优先 |
| https://ask.gov.sg/singpass/questions/clul3027f003pu36b11cbz4mb | 官方商店和开发者、首次设置、SMS/FV、本地与海外手机号分支；未据旧页排除新passkey功能 |
| https://app.singpass.gov.sg/ | 读首页L0—84的App身份验证、指纹/面部/6位密码和浏览器登出区别；不是宣称读完全站功能 |
| https://ask.gov.sg/singpass/questions/clul2ktnh003au36bgfvsdls3 | SFA仅经Corppass、GoBusiness、IRAS、MinLaw预登记；注册邮件90天、到期与护照有关；不是一般游客自助替代普通账户 |
| https://ask.gov.sg/singpass/questions/clv0r4159009a8u3akuanq878 | SFA可用服务受限；没有全政府及商业服务通用承诺 |
| https://ask.gov.sg/singpass/questions/clukze5iv000zufi2ybl5uje7 | 普通账户以2FA重设；SFA无密码，直接以App登录，不套普通重设路径 |
| https://ask.gov.sg/singpass/questions/clul08bsa00183b8gs56owa4s | 实读答复L21—50：App Settings→Update Account Details后进入门户修改已登记本人手机号；未把手机换卡等同账户资料已更新 |
| https://ask.gov.sg/singpass/questions/clul6fif3005nyisx00qt55cy | 完整答复与证件表：柜台原件、ICA/FileSG部分电子准证，不能代别人申请/重设。未采用“新工作准证下周一”的时间断言；该说法与其他现行工作准证注册说明可能不一致。未写“所有IPA均无效”，因有EntrePass AIP例外 |
| https://ask.gov.sg/singpass/questions/clul0f1h7001e3b8gjij1rmlm | SMS OTP只用新加坡手机号；已登记海外地址可走FV；柜台需本人身份文件与电话 |
| https://ask.gov.sg/singpass/questions/clul1rn4q001yyisxppntogfh | Multi-User SMS双方NRIC/FIN、同意、柜台或符合条件的视频安排；正文不把收OTP变成代签署、全面授权或可共享密码 |
| https://ask.gov.sg/singpass/questions/cmq9bsezz00484e01gbunr8po | Passkey创建：当前App、受支持设备与设置；没有硬抄可能快速变化的最低OS版本 |
| https://ask.gov.sg/singpass/questions/cmq9bu04r003l3001zmd1ldpz | Passkey登录与跨设备QR、蓝牙；账户恢复仍按实际页面核验 |
| https://ask.gov.sg/singpass/questions/clul69my7006x3b8gjbanrgpb | 24/7自助暂停，63353533→9→2，NRIC/FIN与OTP；登记+65手机号条件；人工协助时段单列 |
| https://ask.gov.sg/singpass/questions/cmr0098yc00bn4a01ccbdwo9t | **日期冲突处理：** 24小时人工诈骗支援自2026-06-30停止；人工周一至五9—18、公共假期除外，24/7自助暂停仍保留。优先于注册PDF旧时段 |
| https://ask.gov.sg/singpass/questions/clul62l4h0066o12tofxp6pfr | 账户疑似被盗：涉及银行先联络银行、暂停Singpass、警方、重设/记录/可信设备；没有暗示暂停Singpass会同时冻结银行或追回款 |
| https://ask.gov.sg/singpass/questions/clul661me006m3b8gqk5qyz6w | Myinfo历史交易入口与组织记录；不是每项现实交易均由Singpass完成 |
| https://ask.gov.sg/singpass/questions/clul69yzo005dyisx6u0td2uo | 暂停失败：本地已登记号码、每日尝试限制；正文没编次数 |
| https://ask.gov.sg/singpass/questions/clul2ofse004a9ink92uq1wj4 | SFA不能用自助暂停，联系helpdesk；不承诺同一电话菜单适用 |
| https://ask.gov.sg/singpass/questions/clul6an90006pufi218ecutg7 | 恢复已暂停账户由helpdesk处理，时段条件一致 |
| https://ask.gov.sg/singpass/questions/clul3eam0003yufi20xwi9z6i | Myinfo的资料来源与用途 |
| https://ask.gov.sg/singpass/questions/clul3s1ix003uyisxdkp6e7mw | 商业交易授权与必要字段；阅读请求组织和用途 |
| https://ask.gov.sg/singpass/questions/clul3oysx0048o12tjhx007jo | 只有获授权字段可取用，非全部档案自动共享；作为交叉支持 |
| https://ask.gov.sg/singpass/questions/clul3qi7v003oyisxxjn9vl1t | 政府基本资料可登录后预填，收入/CPF等敏感数据的同意另有要求；完整读答复及表格，不把商业与政府条件合成一句 |
| https://ask.gov.sg/singpass/questions/clul3nxlb003jyisxth4vce2d | 源机关更新经核验后通常1—3工作日反映；自行填资料与机关资料分开，不承诺每个机关即时更改 |
| https://ask.gov.sg/singpass/questions/cmgdwqeck01peqosee6f6l4c4 | App-to-App换机：新旧手机靠近、蓝牙、同一时间一部激活；旧机不可用另走SMS/FV/柜台；未抄最低版本 |
| https://ask.gov.sg/singpass/questions/clul1jf7400243b8g88yn696p | FV光线、遮挡、动作、镜头等问题；无法解决向支持提供错误与设备资料 |

## 已失败、仅检索或尚未采用的来源

| URL | 实际结果和后续边界 |
|---|---|
| https://portal.singpass.gov.sg/home/ui/login | web403；随后另一个真实原始PDF可读，不反复探登录页 |
| https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2026/tightening-of-limit-on-number-of-postpaid-sim-cards | 搜索可见2026-02-28后付费跨运营商总数上限，但详情web JS挑战，一次8888代理202空内容；未据搜索摘要写规则，需新官方原件 |
| https://www.imda.gov.sg/how-we-can-help/tech-connect | web挑战，一次8888代理202空内容；未写具体服务承诺 |
| https://www.digitalforlife.gov.sg/about/contact/sg-digital-community-hubs | 旧猜测路径不可读；后续转到真实搜索所得页面，未反复猜路径 |
| https://www.digitalforlife.gov.sg/be-inspired/stories/all-stories/what-does-a-digital-ambassador-do | 2025-06-11真实新页面，web挑战，一次8888代理202空内容；不把检索摘要当已读原文 |
| https://www.imda.gov.sg/how-we-can-help/mobile-access-for-seniors | 仅检索到，未读原始答复，未采用 |
| https://www.scamshield.gov.sg/i-have-been-scammed/ | 仅检索到；待privacy-fraud回源 |
| https://www.scamshield.gov.sg/check-for-scams/scamshield-helpline/ | 仅检索到；待privacy-fraud回源 |
| https://www.scamshield.gov.sg/about-scamshield/what-is-scamshield/ | 仅检索到；待privacy-fraud回源 |
| https://www.scamshield.gov.sg/i-want-protection-from-scams/learn-to-recognise-scams/government-officials-impersonation-scams/ | 仅检索到；待privacy-fraud回源 |

无新URL、原件版本或外部变化，不重试这些受阻路径；不关闭TLS、不绕过挑战。上述缓存均在忽略目录，不能作为公开内容或提交大文件。

## telecom 实际读到的原始资料

查阅日仍为2026-10-13。运营商资料只证明自己的产品，正文点名示例；未以单家资格推定全行业，也未推荐特定套餐、冻结促销月费或把商业宣传当作技术效果承诺。办卡/合约比较表、试通话、保存工单、比较全年费用与迁移清单是作者行动建议。

| URL | 实读位置、支持事实及条件 |
|---|---|
| https://www.mddi.gov.sg/other-pages/anti-scam-efforts/ | 完整页面，页内更新2026-08-18。预付费3张跨运营商；后付费2026-02-28起10张跨运营商；只引用数量及日期，不引用首页不同统计口径数字 |
| https://www.police.gov.sg/-/media/SPF/Media-Room/Statistics/Annual-Scams-and-Cybercrime-Brief-2025/Annual-Scam-and-Cybercrime-Brief-2025.pdf | 原始40页PDF。实读前部及后部约29—40物理页，本文核心第38页：CIS、data-only排除，Singpass自助查询和异常报告。未宣称全文逐图读；没有抄统计图或采用同页其他CPF制度细则 |
| https://www.m1.com.sg/support/faq/all-topics/mobile-phones-plans/prepaid | 实读General、自助登记及部分数据包答复（网页435—725行等），护照30天、第31天终止及不能追回、有效本地证件更新、跨运营商3张、人工注册入口。正文不冻结门店时段或把M1单家期限直接说成所有产品规则 |
| https://www.singtel.com/personal/products-services/mobile/hi/faq | 完整FAQ核心：至少16岁/接受证件；本人后付费号码、active、无欠款转入；临时号码；eSIM设置与计费；换出90天内费用存在但本文不抄金额，只提示核对。未采用“不限设备都同时2条线”类概括 |
| https://www.m1.com.sg/support/faq/all-topics/home-broadband/fibre-broadband | 实读安装、端口占用、搬迁、技术支持及网络答复（435—956行相关段）。前住户未取消端口、需材料/协调；搬迁建议提前2—3周且看预约。没有承诺14工作日必然完成、没有抄促销速度和营销效果 |
| https://www.singtel.com/personal/singtel-blog/home-broadband-singtel | 实读80—220行：室内Wi-Fi与入户带宽、墙壁/位置影响，NLT与运营商预约可能先后。只用技术/安排说明，不把该公司宣传的套餐升级当普遍需要 |
| https://www.gomo.sg/personal/support/account-billing/change-terminate-broadband-plan | web先有目录记录但取正文超时；一次正常8888代理200，96,343字节HTML缓存，BeautifulSoup取实际完整正文。App/web客服终止、剩余月份提前终止费、ONT归还；未将此例套所有运营商 |
| https://support.apple.com/en-sg/118428 | 原始完整答复，页内2026-09-29：iPhone取消步骤、从收据找账号/收费商、试用结束前至少24小时取消；没有替读者登录或取消 |
| https://support.google.com/googleplay/answer/7018481?hl=EN | 原始Android答复：删除App不取消，正确账号订阅入口、已付期间、payment plan剩余付款与停止renewal分开；不承诺普遍退款 |
| https://www.dbs.com.sg/personal/cards/card-services/recurring-bill-payment | 实读FAQ775—799行：商户取消，银行不能代消商户订阅，digibank设置也须联系收费商；未把银行卡付款与GIRO合并 |
| https://www.posb.com.sg/personal/support/bank-payment-terminate-giro-arrangement.html | 完整130行：mobile/online路径、Delete biller与指定日期；海外无网银可邮寄表格。停止GIRO不是解除商户合同，正文另要求清账 |
| https://mediation.com.sg/resources/faqs/ | 完整IMDA ADR部分，其他调解服务不用于本篇：个人/小企业、12个月/一万元、排除项目、14日历日NOI、调解10/调解后裁定225/直接375、10元押金、最终约束。本文范围个人，不从“all consumers”推每个争议都适用 |
| https://mediation.com.sg/wp-content/uploads/2023/10/IMDA-SMC-ADR-Scheme-Rules-18April2022.pdf | 13页原始规则，实读定义及4.1/4.5、6、7.1、7.2及附表提取文本；Days定义calendar days，实体申请仅无法线上时在营业时间纸本提交，裁定最终约束；与当前SMC FAQ一致。费用用FAQ文字交叉。曾请求web第13页截图但工具未返回可见图像，故不记为已目视PDF表格 |

### telecom 未取得正文、已止损的来源

| URL | 实际结果 |
|---|---|
| https://www.imda.gov.sg/infocomm-regulation-and-guides/infocomm-regulation/alternative-dispute-resolution | 普通web JS挑战；一次正常8888代理HTTP202、0字节。改用实际运营者SMC当前FAQ及原始规则，不再试大小写变体 |
| https://www.netlinktrust.com/faq/residential-connections/ | 初次web只有元信息，后续在同结果定位段落异常，未得到可读正文；一次正常8888代理200但212字节为挑战页。未采用搜索长摘要，端口事实改M1原文 |
| https://www.netlinktrust.com/images/pdf/Installation%20of%20Fibre%20Termination%20Point%20in%20Residential%20Premises.pdf | 新原件web失败，未再尝试；正文不使用其许可或精确收费 |
| https://www.starhub.com/personal/support/article/6YTxUndard3mGAao35Rzd9.html?version=87.0 | web重定向循环；一次正常8888代理200但962字节挑战页，未采用 |
| https://www.starhub.com/content/dam/starhub/legal-notices-and-terms/consumer/broadband.pdf | 新原件web失败，未代理，改实际GOMO退订说明 |
| https://www.singtel.com/personal/products-services/mobile/prepaid-plans/hi-sim-cards-id-registration | 实际web只显示视频标题及页脚，未得到搜索所示期限正文；改M1完整FAQ |
| https://www.singtel.com/personal/support/account/relocate-singtel-services-due-to-change-of-address | 只返回账户导航壳，未取得迁移细节；用新居宽带原文和M1FAQ |
| https://www.singtel.com/personal/support/broadband | 原始页面仅32行导航，搜索摘要不是已读正文；未作为核心引用 |

NetLink、StarHub挑战页HTTP200不等于成功。没有为这些URL运行挑战脚本或反复换代理。IMDA consumer-broadband、旧Singtel预付费PDF、旧DBS GIRO 2009 FAQ仅作定位，未用作现行细则依据。

## accounts 作者全文自审并交审

root已完整复读最终稿，2026-10-13：操作闭环、身份与SFA差异、无手机/照护/海外分支、现行人工支援时间与旧PDF冲突均已表述；没有提交真实申请。暂仅此篇交独立审，另两篇继续研究。完整SHA `1f6ead705746f1917885eb8f95b717bdb2a537865b904f19ebc7a739d700eb65`；正文SHA `89918e7f7372afde1ce1093079145d2e918bf2ec1f5bb915f470bab4e14d002f`（text.split("---",2)[2]）。

独立审修订（daily_history → root，2026-10-13）：A01注册联系方式按本地手机号必填/海外邮箱要求分开；A02旧手机不可用时，本地短信加人脸、海外地址人脸流程分开；A03资格表改核对准证类型与FIN记录，避免用签发一概排除EntrePass AIP；E01修正证据SMS2FA链接拼写。正文完整复读这几段后交复核，完整SHA `279676ca4b7d24a85c1fac5a958e37731ce907ff78a3400903fb9f9227344a15`，正文SHA `b53f5c15d53a9e55240407d4b3c7f73aa2cdbe96df7a5b086cebda7191305732`。

## telecom 作者交审

root已完整复读最终稿并自检元数据、H1、粗体、站内目标；年度虚构费用6×15+6×25+10=250。accounts站内目标现存在且通过事实/第三编辑，但仍待同批工程集成，不能独立公开telecom造成断链。完整SHA `58210354e20ff72889ea53ccef088ddca9675cc9fff4fc29ba33eff0026cf8fe`；正文SHA `42543e4f45b1d209900195df870d946329160cf794435f3c01fa36c4b28ab80a`（统一text算法）。所写范围无已知核心缺口，原始失败已使用其他实际提供者原文承接；不声称所有运营商完全同一流程。

## privacy-fraud：2026-10-13 实际原文与边界

root作者。下列均实际打开主管详细原文并阅读支持段落；页面底部全站更新时间不代替文章日。正文提供可疑请求核实、止损、报案/回执/跟进、无智能手机与海外路径、设备和密码保护、NRIC/保留限制及信息核实。尚不等于PDPA个人权利全部流程，另拆privacy-data候选处理查阅/更正/撤回同意/DPO投诉，缺口见下，不把部分覆盖标完整。

| 原始URL | 实读内容、版本和采用范围 |
|---|---|
| https://www.scamshield.gov.sg/i-have-been-scammed/ | 98行全文；正文2026-06-03。联系银行、网上/警局警岗报案、999、保护邮箱/社交账户及通知联系人、平台举报、重复受骗、追回困难和返款需调查。没有许诺追回或统一时长 |
| https://www.scamshield.gov.sg/check-for-scams/scamshield-helpline/ | 120行全文；2026-05-25。1799全天、海外+6568691799、7家银行转接；不能代报案、查冻结账户；案件找IO/IBCC。正文不列易变工作时间或推断拨打即完成报案 |
| https://www.scamshield.gov.sg/installed-a-malicious-app/ | 80行全文；2026-05-20。飞行/Wi-Fi关、防病毒扫描、另干净设备或亲到银行查账户、异常报告、之后仍疑感染可考虑恢复出厂与重要密码。留证用可信设备、不重开恶意链接为作者操作建议 |
| https://www.scamshield.gov.sg/important-information-for-police-report/ | 97行全文；2026-04-08。时间/接触/全号码国家码/平台/网址、截图单据交易、其他机构编号和已采取动作，纸上记经过可线下报案 |
| https://www.scamshield.gov.sg/i-want-protection-from-scams/learn-to-recognise-scams/government-officials-impersonation-scams/ | 167行详页主体38—128；2026-06-24。电话四不、冒充执法/身份资料不能自证、safe account、视频证件。未将gov.sg发送号写成无例外规则；页内NS/应急例外已读但正文不扩展 |
| https://www.scamshield.gov.sg/about-scamshield/what-is-scamshield/ | 115行全文；2026-05-21。可查来电网站SMS/Telegram/WhatsApp，阻挡/过滤、官方应用商店和设置入口；只用功能说明，无100%拦截或数据完全不可见承诺 |
| https://www.csa.gov.sg/our-programmes/cybersecurity-outreach/cybersecurity-campaigns/better-cyber-safe-than-sorry-campaign/spot-signs-of-phishing/ | 全文正文35—69；2025-01-20。相似域名、诱迫、奖励、意外邮件附件、不要用邮件附的联系方式、泄露改密码/银行/监控/报案。不采用“语言完美即可信”推断 |
| https://www.csa.gov.sg/our-programmes/cybersecurity-outreach/cybersecurity-campaigns/better-cyber-safe-than-sorry-campaign/use-strong-passwords-and-enable-2fa/ | 主体36—75；2025-01-21。至少12字符、长随机、不同账户、2FA、避免名字NRIC生日，OTP不交人；未要求不必要的定期改密 |
| https://www.csa.gov.sg/alerts-and-advisories/advisories/ad-2026-011/ | 157行全文；2026-08-26发，09-18更新。passkeys/FIDO2抗钓鱼，push/magiclink/SMS仍可诱骗，设备会话和恢复风险，兼容性及恢复选型；未扩为万能防骗 |
| https://www.csa.gov.sg/resources/infographics-and-posters/how-to-go-safe-online/ | 实读正文32—44；2025-01-20。四项基本习惯，安全更新、防病毒。没有下载海报或验证所有产品 |
| https://www.mddi.gov.sg/newsroom/responsible-use-of-nric-numbers-across-public-and-private-sectors/ | 71行全文；2026-02-03。完整/部分号码作默认密码及加生日也包括，私人2026-12-31停止、2027-01-01加强执法；识别vs验证、公部门部分号码逐步弃用不等于所有情境都收完整。正文仅采用验证时间线 |
| https://www.mddi.gov.sg/newsroom/pq-on-provision-for-deletion-of-personal-data-upon-request/ | 62行全文；2024-04-03主管答复。保留须收集/其他正当业务/法律目的；无目的应停止或处置，PDPC可指令。没有编造一概删除权；作者建议问机构理由 |
| https://www.mddi.gov.sg/other-pages/personal-data-protection-laws-and-policies/ | 主文32—54；2025-05-13。公共PSGA与IM、私人PDPA分别管理。没有扩大为PDPA所有刑事条款均不适用公共场景、也未把2026修法提案自动视生效 |
| https://www.nlb.gov.sg/main/site/-/media/NLBMedia/Images/SURE/Resources-for-Children/SURE-Research-Guide-2019-Single.pdf | 实际原始26页PDF文本；读物理3—9页的四步、时效/权威/准确/覆盖/目的，22—24页可见核实/反向图像/不转发与更正段落。未声称全26页逐页目视，旧图书馆账号/产品流程不用。正文五步为作者具体化，不逐字引文 |
| https://exhibitions.nlb.gov.sg/newsgallery/virtual-gallery/fact-or-fake/ | 116行全文；页面2026-07-17但案例2016/2018/2020明确旧事。榜鹅拍摄角度、反向搜索、影像声音可改。旧“目前无法模仿表情”“错字识别”等不是可靠当前充分条件，正文未用 |

另外实读 https://www.scamshield.gov.sg/kill-switch/ ：页内混合具体银行产品名称/范围，未把全账户/ATM/柜台一律冻结推广到所有银行；正文要求找自己银行确认影响。银行热线目录只定位未完整阅读，未复制电话号码。关于隐私和银行操作的一般性建议明确为作者建议，不伪装成法定义务或真实代办。

### privacy-fraud / privacy-data 来源失败与后续缺口

- https://www.pdpc.gov.sg/individuals/overview ：旧入口web挑战；搜索找到真实现行概述，未对旧入口代理。
- https://www.pdpc.gov.sg/overview-of-pdpa/data-protection/individual/individuals-overview ：web挑战；一次正常8888 HTTP202/0字节（.cache/pdpc-individuals.html）。搜索完整摘要不算已读原文，不据此写查阅/更正/撤回同意的现行细流程。
- https://www.pdpc.gov.sg/complaints-and-reviews ：web挑战；一次8888 HTTP202/0字节（.cache/pdpc-complaints.html）。表单字段、投诉等待期限及线下替代尚未取得。
- https://eservice.pdpc.gov.sg/ ：web0行；一次普通curl HTTP200/286字节，仅meta refresh回上述投诉入口，并含挑战脚本。没有执行脚本或绕过，不算表单已读。
- https://www.pdpc.gov.sg/news-and-events/press-room/2026/01/organisations-to-cease-the-use-of-nric-numbers-for-authentication-by-31--december-2026 ：web挑战，改MDDI真实全文同项公告；未再代理。
- https://www.pdpc.gov.sg/guidelines-and-consultation/2020/03/advisory-guidelines-on-key-concepts-in-the-personal-data-protection-act ：web挑战；找到真实2022原件而非猜URL。
- https://www.pdpc.gov.sg/-/media/files/pdpc/pdf-files/advisory-guidelines/ag-on-key-concepts/advisory-guidelines-on-key-concepts-in-the-pdpa-17-may-2022.pdf ：web挑战，一次8888 HTTP202/0字节（.cache/pdpc-key-concepts.pdf不是有效PDF）。不重复大小写或其他别名。
- https://sso.agc.gov.sg/Act/PDPA2012 ：web内部错误（汇总输出被截断后曾误重开一次，已止损）；一次普通8888 HTTP403/919字节（.cache/sso-pdpa.html）。未读取法条正文。
- 搜索定位PDPC2019通知、2021影响评估/旧2015同意范本，未继续下载旧文件冒作当前个人权利程序。MDDI2026PSGA二读讲话只搜索定位，未采用新修法生效断言。

独立审请核正文采用的15组可读原文，不重复上述失败请求。privacy-data候选须另找可读当前原件，保留查阅/更正/撤回同意、DPO投诉等全书缺口，不影响本文完整防骗行动范围。

root已完整复读privacy-fraud全文，自检H1/元数据/粗体/站内目标。完整SHA `21287aa70affe1fb4fe2859b0e58f8959b8cb605599e29253124ba82f827ed49`；正文SHA `388356e812051a3020400a5945b5230b942c4188765f72ccfb350a191af260ea`。written/draft，尚无异人审，accounts和telecom须先或同批公开。
