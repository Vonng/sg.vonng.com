# B03C 身份行政与文书：独立事实审

审阅者：care_finance；作者：identity；实际审阅日期：2026-10-13（Asia/Singapore，恢复时系统实查）。本记录由异于作者的审阅者独占。各页成熟后分别接收，不以一篇通过代表本批全部通过。

## permanent-residence：通过所写范围的独立事实审

已全文阅读 `content/book/life/documents/permanent-residence.md`，逐项核对 PR／公民资格、担保与声明、文件／费用／草稿、待审更新、批准后手续、ORAL、REP、新旧规则、拒绝和线上困难。所写范围有可执行入口，关键分支完整；未发现需要作者修正的事实问题，可以交第三人编辑静态审。未修改正文或核验字段，未构建或检查实际渲染。

本次从实际文件重算并锁定：

| 项目 | 值 |
| --- | --- |
| 大小 | 17,021 bytes |
| 完整 SHA256 | `592bb7c402bafdc91d856342c7e1d7abff12886631a5d59fb9de3f86cc1e10fd` |
| 统一正文 SHA256 | `d4aae3d940406cdf565c5ec4a0192615674180fd3386213e8f113be80cba4c3b` |

正文 SHA 算法：UTF-8 文本 `text.split("---", 2)[2]`，保留关闭 frontmatter 后全部空白。后续只变元数据时须对照正文 SHA；正文发生变化须说明受影响事实范围。

### 实际回源方式

本次新打开并实际读到 ICA 的 [申请／续 REP](https://www.ica.gov.sg/reside/PR/apply-REP) 主体 L31—85、[REP 有效性](https://www.ica.gov.sg/enter-depart/for-PR/check-REP-validity) L31—42、[PR／公民／LTVP 上诉](https://www.ica.gov.sg/reside/reside-appeals) L31—49，以及 [PR 获批后手续问答](https://ask.gov.sg/ica/questions/clxwhkiyr00iodsot84hjn0ce) 的完整答复 L21—24。新返回保存在已忽略的 `.cache/b03c-documents-review-new-sources.json`。

其余支持原文采用本次研究已经取得的完整原件缓存，由本审阅者实际逐段阅读，并非采用作者证据摘要：

- `.cache/b03c-pr-apply.html` 是 PR 主入口的完整 HTML；本次用 Python 标准库 HTMLParser 提取正文并全文阅读，保存 `.cache/b03c-pr-apply-review.txt`。旧 web 403 后正常代理已取得该原件，不为计数重复探测旧失败页。
- `.cache/b03c-identity-source-state.json` 的完整 SHA256 为 `68a3d75e8fc244a4cc38e9c85d33b58eb73c8ea25eef43c401c8a7e2a57fa669`。实际阅读其中公民页主体 L31—106、ORAL 页 L31—76、PR／公民材料清单各两页全文、2025-11-12 REP FAQ 全五页 L0—164，以及下表各 AskGov 完整问题和完整答复。未把该 JSON 中 SAL 搜索或旧 REP 失败返回作为事实原文。
- 上述缓存实际取得及本次独立阅读均在 2026-10-13；没有将本次读缓存写成重新联网抓取。表件矩阵采用完整文本核对，未声称看过 PDF 图片，正文也没有据未看的勾选列逐格承诺必交文件。

### 核查结果与依据

| 事实组与实际主管原文 | 核查结论 |
| --- | --- |
| [ICA PR](https://www.ica.gov.sg/reside/PR/apply)，完整 HTML | 六种类别、配偶／父母担保、EP／S 本人、学生考试或 IP、15 岁分流和 GIP 均一致；年长父母类别的子女须为 21 岁起公民。正文没有把工作类别延伸到其他准证，也没有把类别或居住年数当作批准保证。PR 原则批准与完成手续后正式身份已区分。 |
| [ICA 公民](https://www.ica.gov.sg/reside/citizenship/apply)，缓存 `b03csc` | 五种路径、成年 PR 两年和 21 岁、公民配偶 PR／婚姻各两年、符合关系的未满 21 岁未婚子女、学生超过三年且其中一年 PR、PR 年长父母的成年公民担保均一致。成年申请人可随同的配偶须为 PR，正文未增加配偶两年门槛。 |
| [PR 清单](https://www.ica.gov.sg/docs/default-source/ica/ipses/pr-document-checklist.pdf)；[公民清单](https://www.ica.gov.sg/docs/default-source/ica/ipses/sc-document-checklist)，各两页 | 表件明确 where applicable，分别有申请人／不申请配偶／担保人；雇主信不超过申请日前三个月、职业／入职日／基本及总月薪、最近六个月工资单，及自雇材料有据。正文要求逐栏查看原表，未把全表项目都套给所有人。ICA 申请页三类正式英文翻译支持“普通自行翻译不能直接当合格文件”。 |
| PR／公民申请页费用表和办理时间 | PR 每项 S$100，Entry Permit S$20、五年 REP S$50、适用 IC S$50；公民每项 S$100／特定海外出生子女 S$18 含证书、其他证书 S$70／15 岁起 IC S$10。S$18 父母关系条件按原表准确写明。费用不退、后续其他费用、PR 六个月／公民十二个月／公民海外子女一个月及可能更久均有原文。 |
| [草稿时限](https://ask.gov.sg/ica/questions/clxwhkixw0082dsotcvrw6oe8)；[提交确认](https://ask.gov.sg/ica/questions/clxwhkixw007wdsot13sf0s53)，缓存 `b03cdraftwindow`／`b03csubmit` | 自启动草稿起 7+7 日，14 日内未提交并付款会移除；成功确认页、下载申请和确认邮件均核对。共同申请人各自复核与 Singpass／ICA 特殊凭据由 PR、公民主页支持。 |
| [工作薪资](https://ask.gov.sg/ica/questions/clyp2nbbw005qcbf7bakvjtds)；[地址婚姻学历](https://ask.gov.sg/ica/questions/clxwhkiyq00i2dsotrrxx41ta)；[错误字段](https://ask.gov.sg/ica/questions/clxwhkiyk00g0dsotumyybo6k)，缓存 `b03cpr_job`／`b03cpr_change`／`b03cpr_fix` | Singpass 经 MyICA、非 Singpass 凭 Reference ID、案件内 Update information 等入口准确。原准证地址向其签发机构更新，不能仅更改 PR 申请；无字段时查询表入口明确。 |
| [待审离境](https://ask.gov.sg/ica/questions/clxwhkiyo00hidsot82wg5pn4)；[获批手续](https://ask.gov.sg/ica/questions/clxwhkiyr00iodsot84hjn0ce)；[延期](https://ask.gov.sg/ica/questions/clxwhkiyn00h4dsots9zbaefd) | 可离境但获批须回新完成；申请人与担保人依 IPA 到场、准备条件与材料。2024-06-26 前后延期入口和需 ICA 考虑均核对。正文未虚构个人 IPA 的统一期限，也未把提出延期视为批准。 |
| [SCJ 后批准信](https://ask.gov.sg/ica/questions/clxwhkixo004sdsotdlvbqax2)；[退籍先后](https://ask.gov.sg/ica/questions/clxwrieja001bq3htzcsmfx75)；[上传退籍](https://ask.gov.sg/ica/questions/clxwriejb001lq3htufgg8up4)；[最终指示](https://ask.gov.sg/ica/questions/clxwriejb001pq3htlhj0423t)；[公民证书](https://ask.gov.sg/ica/questions/clxwriej7000bq3ht5v2536fc)，对应五组完整缓存 | ICA 公民页规定 16—60 岁 SCJ；完成后的通知、下载信、按信向原国籍主管退籍、取得文件后登记和最终指示均有据。退籍 FAQ 用 above 21，正文采用“批准信要求退出外国国籍的成年申请人”，没有凭模糊措辞制造生日当天的豁免或替他国主管判断退籍。证书另按仪式邮件领取，未把登记即写为领到全部原件。 |
| [ORAL](https://www.ica.gov.sg/reside/citizenship/minor-oath-taking)；[材料](https://ask.gov.sg/ica/questions/clxwriej9000tq3htl53ommt4)；[免预约](https://ask.gov.sg/ica/questions/clxwriej8000jq3htss9d6kst) | 适用未成年通过 descent／registration 取得公民身份者；21 岁后、22 岁生日之前，逾期自动失身份。身份证、公民证书原件和退籍证明原副本、ISC 排队号／无需预约、海外使团均回源一致。正文没有推广至所有本地出生公民；未承诺个案退籍延期可以自行推迟 ORAL。 |
| [REP 办理](https://www.ica.gov.sg/reside/PR/apply-REP)，本次新读取 | PR、旅行证件至少三个月、到期前三个月在线、海外无 Singpass 至少提前两个月找使团、一般一周不含提交日，全部一致。获批每年或不足一年 S$10、批准 14 日内付款、新许可从付款后签发起算、同国籍新护照 transfer REP 已核对。 |
| [REP 有效性](https://www.ica.gov.sg/enter-depart/for-PR/check-REP-validity)；[2025-11-12 FAQ](https://www.ica.gov.sg/files/faqs_revisions-to-permanent-resident-re-entry-permit-application-process-from-1-december-2025)，完整五页 | 主页一般概括句与详细新制须合读；正文正确采用 2025-12-01 起规则，并保留旧情形另询 ICA。境内过期保留 PR、无有效 REP 离境／境外过期两种起算、180 日内申请待决保 PR、拒绝翌日／不申请窗口结束翌日失 PR、返回仍须申请均一致。 |
| 同 REP FAQ 第 3—5 页 | PRSEP 可获准但受入境／公共卫生条件；仅指定日单次入境。超期没有恢复上诉、REP 被拒须重申 PR；境内失 PR 发 Visit Pass，正文明确检查新的停留和工作条件，没有假定工作权仍持续。 |
| [离婚与 PR](https://ask.gov.sg/ica/questions/clxwhkiyt00iydsotpvw2gww8)，完整缓存 `b03cpr_divorce` | 已有 PR 不因离婚自动撤销；最终离婚及适用 care/control 文件，REP 按本人情况审，表述准确。 |
| [上诉](https://www.ica.gov.sg/reside/reside-appeals)；[必须线上](https://ask.gov.sg/ica/questions/clxwhkixv007kdsot6lpg069q)；[系统错误](https://ask.gov.sg/ica/questions/clxwhkixl003ydsot3wi396mk)；[状态](https://ask.gov.sg/ica/questions/clxwhkixw007sdsotpvir28dv) | 普通被拒 PR／公民／ICA LTVP、原担保人或主申请人、原无 Singpass 同邮箱、仅在线不收邮件／邮寄／面交均一致；未把一般上诉套 REP 丧失身份。截图查询是真实求助入口，可靠设备／账号保护是编辑建议。没有捏造柜台纸本替代或登录后办理结果。 |

### 全篇可用性与未覆盖范围

读者可以从两张资格表进入相应申请，按原清单准备人员和材料，识别草稿与成功提交，处理变化／获批条件，并在 PR 出境前检查 REP。数字账户、CPF 与 NS 均有实际存在的正文链接。普通初次申请与 REP 失去身份后的程序已分清；国籍转换的个案材料按批准信与原国籍主管确认，未给未知申请结果保证。

本次没有进入私人账户、观看申请演示视频、检查个人 IPA、评估某个申请人的国籍退出可行性，也未目视 PDF 勾选矩阵。上述未覆盖项未被用来支持正文中不存在的操作承诺。事实审不能替代第三人编辑、主控版本接收、构建和桌面／手机实际渲染。

## documents：修订后通过所写范围的独立事实审

2026-10-13 实际全文阅读 `content/book/life/documents/documents.md`，独立核对 ICA／MOM 收件、外国来新／新加坡出境、政府／私人／商业／法院／ACRA、纸本／电子、本人／代理、付款及核验失败。初审发现 SAL 政府文件的英文或含英文双语条件遗漏，已反馈原作者；作者只补入该条件，审阅者再次阅读修订段并核对与 SAL 19 页 FAQ 物理第 3 页一致。此项关闭。最终稿通过所写范围及全篇可用性，可以交第三人编辑，未由本审阅者修改正文或核验字段。

| 项目 | 最终锁定值 |
| --- | --- |
| 大小 | 14,257 bytes |
| 完整 SHA256 | `1f00bdafc394b9e47ef11828ae462462f95d9b89227ee9de6e56c0be86e3e562` |
| 统一正文 SHA256 | `bbf92e4a9f4824112679bfe84c09c985e7ff5df1a495c36c795a7158e4c334d9` |

初审完整 SHA `fdd6d2ca2933d7a8facb83c8602499b077e258f9ee8f3b63bc56062b322193df`、正文 `ae17a25b0b7afeb53c424367d3c14cec6e991306a3903a5e5facc1f51e93a1f6` 仅留作发现版本，不再代表通过对象。

### 原件实读与核查

本次采用当日作者抓取的原文缓存 `.cache/b03c-sal-source-state.json`（完整 SHA `eac25678fe482ef9c7c15acbfa882f6cf1d974b3e39732028af0d025f9f05881`）实际逐段回源阅读，未将作者 D01—D10 摘要当成原文，也未把缓存当成审阅者本次新抓。

- SAL OurServices L30—75、网页 FAQ L19—381 全部实质答复、Directory／BookNowTerm 公开入口均实际读完。采用的 ICA 公民页与 PR 清单，在本报告上节 PR 核查已实际读完整相关原文。
- 19 页 [SAL 2025-10-15 FAQ 原件](https://legalisation.sal.sg/App/Templates/LEG_FAQ_v1.4_15Oct2025.pdf)，本次从 PDF 用 `pdftotext -layout` 提取后全文读完；PDF SHA `a1b9876a5122c8e1a0ad9a9159a56eafbb91e10409fb5c8756a86d337fb2fc1a`。自行用 `pdftoppm` 渲染物理第 13 页后实际 `view_image` 目视费用矩阵，核对 S$10.70／S$11.77、复印 S$1.07 按每份而非每页、自印数字多份免 SAL 复印费。未声称目视其余 18 页。
- MOM EP Documents required L43—140、上海总领馆 Notarial Services L24—80、HCCH 公约完整正文第 1—15 条、法院记录 L229—298、ACO L53—115 和 HCCH 状态表前段与表头均在完整工具原文缓存中实际阅读。
- 本次另新打开 [SAL 简略认证页](https://legalisation.sal.sg/Legalisation/LegalisationInfo) L18—53、[HCCH 状态表](https://www.hcch.net/en/instruments/conventions/status-table/?cid=41) 后段至 L165 和 [ACO](https://www.judiciary.gov.sg/services/e-platforms/authentic-court-orders-(aco)) 全主体至 L119，补上缓存只有元数据／未完整返回的范围。新返回保存 `.cache/b03c-documents-review-extra-sources.json`。没有重试已失败 SSO。

| 主管详细原文 | 核查结论 |
| --- | --- |
| [ICA 公民页](https://www.ica.gov.sg/reside/citizenship/apply)；[PR 清单](https://www.ica.gov.sg/docs/default-source/ica/ipses/pr-document-checklist.pdf)；[MOM EP 材料](https://www.mom.gov.sg/passes-and-permits/employment-pass/documents-required) | ICA 三种可接受正式翻译、未申请配偶／担保人清单准确；MOM EP 原件与译文合一上传，可由翻译服务商完成，姓名不一致解释及支持文件，学历 verification proof 不接受普通证书／公证文件均核对。正文明确这是 EP 例子，未套 S／WP。 |
| [HCCH 公约完整原文](https://www.hcch.net/en/instruments/conventions/full-text/?cid=41)；[状态表](https://www.hcch.net/en/instruments/conventions/status-table/?cid=41) | 第 1 条公共文件、外交／领事及直接商业海关行政文件排除，第 2／3／5 条签名职务资格与印章认证，第 6 条出具国指定主管、第 12 条两国关系异议、第 13 条领土范围均有据。“不证明内容或移民资格”是该认证范围的限定，并非另作资格判断。表内 EIF 与加入日不同；新加坡 2021-09-16、中国 2023-11-07，泰国 2027-02-28 在本日尚未来到，正文没有把列在名单当已生效。 |
| [驻上海总领馆](https://shanghai.mfa.gov.sg/consular-services/notarial-services/) | 中国内地自 2023-11-07 的授权公证／相关机关、中国外交部／获授权地方外事机关 Apostille、来新免驻华使领馆认证、接收方先确认均一致。不向港澳或其他国家推广，也不抹去翻译和具体收件要求。 |
| [SAL OurServices](https://legalisation.sal.sg/OurServices)；[FAQ](https://legalisation.sal.sg/Faq)；19 页政府文件 FAQ | SAL 是出境认证主管、接收者决定需不需要、可核验政府文件直接／私人先公证／商业经列明商会／ACRA 专用服务，均符合各自来源范围。SAL 自 2021-09-16 affix Apostille，非公约适用目的地仍继续外国使团认证。没有保证未知接收方必然接受。 |
| SAL 政府 FAQ 第 3—8、10—12 页 | 最终补齐英文／含英文双语且清晰；原件、完整数字打印、QR 版本一致和可用、不得多盖 CTC、本人门户／原始邮件、每页实体背书、机构邮件确认后一个月、SAL 不代联络、过胶副本或 extract、手写姓名核验与 CTC／CTD／CTS 条件均与原件一致。 |
| [法院记录](https://www.judiciary.gov.sg/services/civil-family-court-records)；[ACO](https://www.judiciary.gov.sg/services/e-platforms/authentic-court-orders-(aco)) | eLitigation 与无律师者 Service Bureau、iFAMS／Youth、其他案件按原记录路径、用途和 Registrar 批准准确；ACO 需 QR 或 access code 加案号，免费验证且接收者仍可要求 CTC。未把所有旧案或所有法院文件都套 ACO，未把免费核验当 SAL 境外认证已完成。 |
| [SAL 公证／电子 FAQ](https://legalisation.sal.sg/Faq) | 公证证书须认证才有效、纸本正确装订、在公证办公室付公证及 SAL S$87.20 含 GST、不向柜台重复付；e-Notarial／e-Apostille 在公证办公室发起并付款、数字有效／打印仅参考、需纸本另提出，全部核对。没有把 19 页政府柜台通则强加到电子公证。 |
| SAL FAQ 第 13—19 页；[BookNowTerm](https://legalisation.sal.sg/BookNowTerm)；[Directory](https://legalisation.sal.sg/Directory) | 在线 Visa／Mastercard、发票 QR、政府每份 10.70／复印 1.07合 11.77、费用不退、柜台地址时间电话、无预约／无打印、代理无需信但能现场说明、本人账号核验须本人、不能邮寄、无卡亲友可协助付款均有原文。 |
| SAL ACRA FAQ | 只适用 Business Profile／Business Certificate，2023-03-04 起 Open Attestation、每份 S$10.70、在线上传且不用柜台；正文先确认接收方接受，不向所有数字文书推广。 |

文件遗失、更正、版本留存与安全保存是依已读入口提出的办理或保存建议，未承诺 SAL 会替签发机关补发或电话批准。全篇能让读者先确定收件方，再按法域、文件种类和格式选择路线；线下、无卡、无打印、代理与数字核验受阻均有实际动作。

本次没有提交请求、付款、公证、登录私人账户、联系机构或检查私人法院案件；只核公开规则、原件及实际展示的公开入口。没有完成网站构建、打印或桌面／手机渲染，不能以本事实通过代替这些后续验收。

## arrival-renewal

尚未接收作者冻结版本；本报告不对该页作通过结论。
