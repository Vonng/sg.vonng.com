# B03C Singpass / Myinfo 独立事实审

审阅者：daily_history；作者：root。查阅日期2026-10-13（Asia/Singapore）。正文只读；报告不代替identity第三编辑、工程检查或实际页面渲染。未提交账户申请、扫描本人脸部、拨打电话、修改账户或进入私人服务。

## 当前结论与版本

**最终结论：通过所写范围内的独立事实审与全篇可用性审。** 已独立阅读正文全文、26个AskGov详细答复、App官网及官方注册PDF。作者已修正A01/A02、采纳A03并纠正证据笔误E01；审阅者再次全文阅读最终稿，逐项确认修订与原文相符。

最终完整SHA256：`279676ca4b7d24a85c1fac5a958e37731ce907ff78a3400903fb9f9227344a15`。
最终正文SHA256（按作者 `text.split('---',2)[2]`）：`b53f5c15d53a9e55240407d4b3c7f73aa2cdbe96df7a5b086cebda7191305732`。最终完整文件与作者交付一致；下列初审版本仅保留修订可追溯记录。

初审完整SHA256：`1f6ead705746f1917885eb8f95b717bdb2a537865b904f19ebc7a739d700eb65`。
初审正文SHA256（按作者 `text.split('---',2)[2]`）：`89918e7f7372afde1ce1093079145d2e918bf2ec1f5bb915f470bab4e14d002f`。
另按 `bytes.split(b'---\n',2)[2]` 的初审正文SHA：`8c98ecf420964fec8ba38ce5c141e8c76c3ab8b088fe846083af5315b47f1982`。算法差异仅去掉分隔行后的换行方式，非版本差异。

## 发现与作者闭环

| 项目 | 原断言／问题 | 独立原文与修订方向 | 状态 |
| --- | --- | --- | --- |
| A01 | 注册步骤3“填写并验证手机号码和邮箱”把两项写成统一必需 | PDF物理11页实际图像与文本写 mobile number and/or email，并列本地地址手机号、海外登记地址邮箱的不同要求，还有Skip分支；改为按地址要求及实际提供的联系方式验证，明确本地/海外 | 已关闭：步骤按地址要求，后段明确本地手机号、海外邮箱，并留无合适号码的柜台支持 |
| A02 | 换机表“短信／人脸核验”容易被理解为本地用户任选其一 | App-to-App FAQ写SMS OTP + Face Verification；App设置FAQ本地用户也列两项，海外用户为FV。须把本地组合和海外分支说清 | 已关闭：本地短信加人脸；登记海外地址走海外FV；失败找Helpdesk/柜台 |
| A03 | 资格表“核对准证已签发”可能把所有FIN情形一概归入已签发 | 柜台原文仍有EntrePass AIP+护照例外。建议改“核对准证类型与FIN记录”，无需在普通概述扩写所有证件例外 | 已关闭：表格采用准证类型与FIN记录，无所有IPA均无效断言 |
| E01 | 作者证据的SMS2FA URL尾部误拼为`gs56owa4s` | 正文引用、实际可读正确URL尾部为`gjij1rmlm`；审阅没有请求该错链 | 已关闭：实际读取修正后的作者证据链接，与正文一致 |

## 逐组回源记录

以下全部独立打开和阅读原始支持段落；更新时间采用页面相对提示时，只作当前页面版本线索，不当法律生效日期。AskGov为Singpass官方答复。

| 编号与实际来源 | 已核对的关键断言、范围与例外 | 结论 |
| --- | --- | --- |
| 01 [Who is eligible for Singpass?](https://ask.gov.sg/singpass/questions/clul28lp4002t3b8g3hnggivy)，标2月前更新 | 最低15岁；公民PR、EP/PEP/ONEPass/EntrePass/S Pass、列明DP、LTVP/LTVP+、IEO、WP、Student Pass、TEP、WHP；名单非穷尽，未列类型询Helpdesk。正文节选主要类型并留确认路径 | 相符，A03另列 |
| 02 [How do I register for a Singpass account?](https://ask.gov.sg/singpass/questions/clul27aq60028yisxifw2l2w3) | 15岁、SC/PR/FIN；先核地址；官方入口；Face Verification即时注册；SFA另有指南 | 相符 |
| 03 [Singpass Registration Guide PDF](https://portal.singpass.gov.sg/home/ui/assets/pdf/Singpass_Registration_Guide.pdf) | 重新提取原件全部28页文本，实际看物理5、11页图。姓名、NRIC/FIN、签发/申请日期；FV→核资料→密码→设置→联系方式验证→完成；本地和海外字段差异；密码/OTP安全。PDF仍有已过时24小时人工支援段，正文按2026FAQ处理正确 | A01已关闭；相符 |
| 04 [Download and set up app](https://ask.gov.sg/singpass/questions/clul3027f003pu36b11cbz4mb) | App Store/Google Play/AppGallery，开发者Government Technology Agency；本地登记号码SMS后FV；海外FV；生物验证可选；SFA另走指引 | 相符，并支持A02 |
| 05 [Singpass app官网](https://app.singpass.gov.sg/) | 独立读L0–119：指纹/脸/六位App码；电脑扫描登录QR、手机点QR；办理后从浏览器退出具体服务，切回App不会退出 | 相符；未声称读完全部功能 |
| 06 [SFA registration](https://ask.gov.sg/singpass/questions/clul2ktnh003au36bgfvsdls3)，标4月前更新 | Corppass、GoBusiness、IRAS、MinLaw签发；机构核验预登记→邮件账号→App；收到ID90天内设置，逾期终止并重新找机构；foreign ID到期前更新资料 | 相符；“换证通知原机构”未许诺账户自动续期 |
| 07 [SFA available services](https://ask.gov.sg/singpass/questions/clv0r4159009a8u3akuanq878) | SFA仅相关机构服务；NRIC/FIN普通账户则可政府及部分私人服务 | 相符 |
| 08 [Reset password](https://ask.gov.sg/singpass/questions/clukze5iv000zufi2ybl5uje7)，标4月前更新 | 已设2FA可NRIC/FIN→FV或SMS→新密码；SFA无普通密码，直接App登录 | 相符；无法验证另有Helpdesk/柜台路径 |
| 09 [Update mobile number](https://ask.gov.sg/singpass/questions/clul08bsa00183b8gs56owa4s) | App Settings→Update Account Details→生物验证转门户，更新本人号码；门户可App或密码+FV/SMS登录；柜台原证件 | 相符 |
| 10 [Singpass help / counters](https://ask.gov.sg/singpass/questions/clul6fif3005nyisx00qt55cy)，标2月前更新 | 全文证件表独立阅读：SC/PR原件选择；不同FIN对应卡/驾照；电子LTVP与STP可ICA网站/App/FileSG/Singpass展示；EntrePass AIP+护照例外；IEO本地号条件；不可授权他人申请/重设 | 正文概述未编完整表；A03建议收紧。细页“签发后下周一”未被正文采用，不能以本文保证签发即刻可注册 |
| 11 [SMS 2FA](https://ask.gov.sg/singpass/questions/clul0f1h7001e3b8gjij1rmlm) | 新用户首次登录登记；已用账户Set Up 2FA→Register SMS→号码验证；只接受新加坡登记手机号；海外无本地号码更新海外地址并用FV；可带原件手机到柜台 | 相符，作者证据错链E01 |
| 12 [Multi-user SMS 2FA](https://ask.gov.sg/singpass/questions/clul1rn4q001yyisxppntogfh) | 双方NRIC/FIN、身份核验及同意；柜台或无法到访时视频；号码须+65；主用户最多6个次用户、每个次用户同时仅一主号码。正文未列数量，无超额承诺 | 相符；接OTP不扩成代签或全面授权 |
| 13 [Create passkey](https://ask.gov.sg/singpass/questions/cmq9bsezz00484e01gbunr8po)，标1月前更新 | App Create passkey→系统autofill设置；iOS/Android支持版本区别。正文明确支持设备并指向详页，无一概所有手机承诺 | 相符 |
| 14 [Use passkey](https://ask.gov.sg/singpass/questions/cmq9bu04r003l3001zmd1ldpz)，标1月前更新 | 先创建、蓝牙；登录页Use passkey；电脑QR由手机摄像头或App扫描，生物/6位App码验证 | 相符 |
| 15 [Suspend account](https://ask.gov.sg/singpass/questions/clul69my7006x3b8gjbanrgpb)，标3月前更新 | 自助24/7，仅本地/海外NRIC、FIN；+65 6335 3533→9→2→NRIC/FIN→SMS OTP；人工另一时段 | 相符；不误把暂停等同冻银行 |
| 16 [24/7 scam support change](https://ask.gov.sg/singpass/questions/cmr0098yc00bn4a01ccbdwo9t)，标3月前更新 | 明文Effective 30 June2026，24/7人工诈骗热线停止；自助全天保留；人工周一至五9–18、周末公假关；电话或feedback form | 相符；优先于旧PDF，日期为明确生效日 |
| 17 [Compromised account](https://ask.gov.sg/singpass/questions/clul62l4h0066o12tofxp6pfr) | 损失先联系银行、暂停Singpass、报案；疑盗用重置密码/换ID/查交易/可信设备重装；人工时段相同 | 相符；已留控账与无法验证两条路径 |
| 18 [Myinfo transaction history](https://ask.gov.sg/singpass/questions/clul661me006m3b8gqk5qyz6w) | Settings→Past transactions→Myinfo transaction history→身份验证→已分享组织 | 相符 |
| 19 [Self-suspension failure](https://ask.gov.sg/singpass/questions/clul69yzo005dyisx6u0td2uo) | 呼叫使用Singapore-registered mobile number；每日尝试上限存在，未给数值 | 相符，正文未编次数或要求人在本地 |
| 20 [SFA suspension](https://ask.gov.sg/singpass/questions/clul2ofse004a9ink92uq1wj4) | SFA无自助，人工Helpdesk工作时段协助 | 相符 |
| 21 [Unsuspend account](https://ask.gov.sg/singpass/questions/clul6an90006pufi218ecutg7) | 电话联系Helpdesk，由人工在周一至五9–18，非周末公假处理 | 相符 |
| 22 [What is Myinfo?](https://ask.gov.sg/singpass/questions/clul3eam0003yufi20xwi9z6i) | 管理资料、预填、政府来源；App可查看个人profile | 相符；没有承诺所有政府服务都免交文件 |
| 23 [Commercial retrieval](https://ask.gov.sg/singpass/questions/clul3s1ix003uyisxdkp6e7mw) | 限表单与交易所需字段，提取前always seek consent | 相符 |
| 24 [Only consented fields](https://ask.gov.sg/singpass/questions/clul3oysx0048o12tjhx007jo) | 只取交易在线表格所列所需字段，不额外分享 | 相符，交叉支持非全面开放 |
| 25 [Government retrieval](https://ask.gov.sg/singpass/questions/clul3qi7v003oyisxxjn9vl1t) | 全文两表实读：交易所需NRIC等基本资料认证后预填；收入、CPF等保密资料另同意；SC/PR/外国人字段不同 | 相符；正文没有让Myinfo通用短描述盖过具体政府分支 |
| 26 [Update profile data](https://ask.gov.sg/singpass/questions/clul3nxlb003jyisxth4vce2d) | 政府源数据找源机关，机关核验后通常1–3工作日；地址按SC/PR、ICA LTVP/STP、MOM准证分流 | 相符；没有承诺提交后立即改变 |
| 27 [App-to-App FAQ](https://ask.gov.sg/singpass/questions/cmgdwqeck01peqosee6f6l4c4) | 新旧近距蓝牙；原设备已激活App；成功后旧App自动停用；旧机缺失/蓝牙失败为SMS OTP + FV；无原号码或ICA照片可能无法走替代核验；柜台/Helpdesk支持 | A02已关闭；相符 |
| 28 [Face Verification failure](https://ask.gov.sg/singpass/questions/clul1jf7400243b8g88yn696p) | 光线/逆光、遮挡、移动、镜头等故障；清洁镜头稳定；多次失败联系支援附错误和设备型号 | 相符；不虚构全部失败都能自修 |

## 原件与访问边界

作者已记录PDF普通访问受阻、一次正常8888取得原件，因此审阅未重复探测失败地址。审阅直接读取忽略缓存中的完整官方PDF，而非作者摘录：`.cache/singpass-registration.pdf`，1,826,038 bytes，SHA256 `c111469ca105406d21a733fa42d61e5aff6a3c691f176b1af593ec9e2098a8d4`；重新运行pdftotext全28页，并实际查看物理5/11页图像确认表单字段。该方式独立阅读原件内容，但不是一次新的服务器版本抓取。

其余27组（26个AskGov与App官网）均本轮独立web打开成功。没有以搜索摘要核验，也没有请求证据中错拼的SMS链接；没有重复探测作者受阻的portal登录或IMDA页。注册流程核验范围为公开指南和官方答复，未进入私人账户实际完成注册。

## 全篇可用性结论

正文已覆盖普通/SFA对象、准备与入口、注册成功标志、App与非App、海外与照护、Myinfo资料同意、更新与历史记录、换机/改号/密码、账户泄露止损/暂停/恢复以及人工柜台。不会将数字账户等同实体服务资格，不把照护OTP接收扩成代办授权，服务本身错误交原机构。

四项问题已关闭，最终稿通过所写范围的事实与全篇可用性审。人工新时段已经单独明确；服务关闭期间不承诺真人协助，仍给银行/警方与自助暂停路径。柜台具体位置、动态开放情况、私人账户操作结果与页面渲染不在本次已执行验证之内。

仍由identity进行第三人编辑静态，root执行工程接收；审阅者没有修改正文或提升元数据状态。正式集成只适用于本报告锁定最终正文，之后如有事实变化须另行复核相关范围。
