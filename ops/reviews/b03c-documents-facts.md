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

## arrival-renewal：通过所写范围的独立事实审

2026-10-13 全文读完 `content/book/life/documents/arrival-renewal.md`，逐项独立核查入境与实际停留、STVP 延期、身份证登记／领取／遗失／更改、各学校 Student's Pass 窗口、ICA 数字准证、ICA LTVP 新旧签发与续期。未发现阻断事实问题，所写范围与全篇可用性通过，可交第三人编辑静态审。MOM 准证另页另审；两页互引须同批公开。

| 项目 | 本次实际重算的锁定值 |
| --- | --- |
| 大小 | 18,580 bytes |
| 完整 SHA256 | `7293ef056af8030c66ded10d677cae4e86c3b139e74cb9ecd1a228764a72be4b` |
| 统一正文 SHA256 | `fbbbd2b84fbed8ae5716c27e59a87c6d27b4f35aa90fde62040319f510af1562` |

### 独立实读的原文与采用范围

此次新获取且实际阅读的 [ICA 入境要求](https://www.ica.gov.sg/enter-transit-depart/entering-singapore) L31—84、[SG Arrival Card](https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card) L31—95 保存在 `.cache/research/b03c-transport/airport-research.json` 的 `b03c-airport-ica`。这是审阅者自身交通研究中取得的主管正文，支持相同的 A01／A02 事实；没有把另一题作者笔记当原文。

其余采用当日成功取得的主管原件缓存，审阅者重新逐段实际读取，不计作本次新联网抓取：

- `.cache/b03c-identity-source-state.json` 中 `b03cextend` 的 ICA 延期主体 L31—119、`b03cstpipa` 完整问答 L20—23；已分别提取为本审阅缓存 `.cache/research/b03c-documents-facts/b03cextend.txt` 和 `b03cstpipa.txt`。
- `.cache/b03c-arrival-source-state.json`、`-extra.json`、`-final.json`、`-renew-final.json` 的公开页面返回按 URL 和原 L 行号去重保留，索引在 `.cache/research/b03c-documents-facts/arrival-index.json`；本篇实读 `arrival-source-00.txt`、`02.txt`、`04.txt`—`08.txt`、`10.txt`—`23.txt` 的全部相关实质段，不采用其中 MOM 页、搜索摘要或网页未返回的内容作为本篇核查。四份原始缓存 SHA 依次为 `a280fae02ea996fcdb7efc08d9fe7caeba57c84eab44e1b4e6fe438a4dcd291d`、`9896293134def80c5c72af2b2313a3a88204578975d4d905fa59ad13840a2ca5`、`d5255ef65cf6639bf40d605ec7578c6c01900001de704fac84c148eaab500c0e`、`1593a94a1b5065c7e7633132e8129a0786ab5d02544eed71753e6e77e92d2cf0`。
- [IC 资料更改](https://www.ica.gov.sg/documents/ic/update_particulars) 的完整 HTML `.cache/b03c-ic-update-particulars.html`，SHA `74dc75c7e4a54def76db5437e23c2a30c27e23f5f2c2461edb7da1a56b88d2ad`，本审阅者独立用标准库 HTMLParser 提取并实际读完，保存 `ic-update-particulars-review.txt`。沿用已成功原件，没有重试该页旧 Internal Error 路径。
- [中文 FileSG 指南](https://www.ica.gov.sg/docs/default-source/ica/files/docs/steps_to_retrieve_digital_pass_chinese-(ica-22-jan)-v2.pdf) 五页完整工具提取文本，及 [STP 条件](https://www.ica.gov.sg/docs/default-source/ica/files/docs/terms_-_conditions_stp.pdf?sfvrsn=964f6531_38) 两页完整工具提取文本，均独立读完；分别保存 `b03cArrivalFileSGONEFamilyOnboard-pdf-1.txt`、`b03cArrivalICReregisterLostTerms-pdf-0.txt`。本篇采用下载途径及个人资料更新条款，未声称目视 PDF 图片或登录私人 FileSG。

| 原文与实际实读范围 | 核查结论 |
| --- | --- |
| [入境](https://www.ica.gov.sg/enter-transit-depart/entering-singapore) L31—84；[SGAC](https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card) L31—95 | 每人含儿童独立旅行证件、非新加坡护照六个月、国籍决定签证、短期访问 e-Pass 与实际到期日均有据。抵达日算内前三日、居民仅陆路豁免、航空／海路仍提交、只有 IPA 按 Foreign Visitors、免费网页无须 Singpass、健康变化 Update SGAC 均一致。黄热近期六日与风险地机场转机超过十二小时未扩大适用。 |
| [延长 Visit Pass](https://www.ica.gov.sg/enter-transit-depart/extend-stay) L31—119；[学生 IPA](https://ask.gov.sg/ica/questions/clos83fvk01fl5k0w5ulrg8rv) 完整问答 | 剩余十四日或少、一般五个工作日、必须持续有效停留、指定关系／国籍担保人及 21 岁起 SC／PR、D/E／护照／适用 V75 均一致。S$40 达九十日及后续各九十日块、需签证再 S$30、付款后延期生效、MOM STVP 找 MOM、没有通用 walk-in 均核对。工作限制保留有效工作准证／Work Pass Exempt Activities 例外；IPA 不等于居留，学生完成正式手续才开课。 |
| [15 岁 IC](https://www.ica.gov.sg/documents/identity-cards) L31—102；[领取](https://www.ica.gov.sg/documents/ic/collect) L31—70 | 15 岁登记并在 16 岁前完成、学校与其他情况分流、SC S$10／PR S$50 有据。登记页三个月从登记起、领取页三个月从批准起，正文保留差异并要求按本人通知；本人领取及 SingPost 四日窗口没有混为代领。未采用登记页被删除线标记的旧邮局时效。 |
| [改资料／损坏](https://www.ica.gov.sg/documents/ic/update_particulars) 完整 HTML；[遗失](https://www.ica.gov.sg/documents/ic/loss) L31—87 | 损坏十四日替换、S$60、PR 改名先改护照、未成年姓名双方父母／法院命令均准确。遗失立即报 ICA、报失后十四日替换、首次 S$100／之后 S$300、无需一般警方报告、医疗和境外特殊申请路径均有据；未套用至护照或其他准证。 |
| [NRIC／FIN](https://ask.gov.sg/ica/questions/clqety23q00433k36gpo1tijn) 完整问答；[IC 重登记](https://www.ica.gov.sg/documents/ic/re-registration) L31—85 | 九位号码及不同前缀有据；30／55 岁、近十年未换卡、31／56 岁前、境外回国一年内一致。原文费用程序另有收到通知起一年内字段，正文按基本年龄规则与本人通知安排，没有虚构通知提前多久发出。 |
| [IC 改址](https://www.ica.gov.sg/documents/ic/update_residential_address) L31—68 | 持 IC 的公民／PR 含境外者二十八日内、没有 IC 儿童豁免、本人加最多四名附属、五日短信同意、邮寄 PIN 与贴纸、同时换卡六位 PIN、免费、海外公民 Local Contact Address 均准确。 |
| [STP 总览](https://www.ica.gov.sg/reside/STP/apply) L31—57；[政府学校](https://www.ica.gov.sg/reside/STP/apply/gov) L31—81；[ITE](https://www.ica.gov.sg/reside/STP/apply/ite) L31—78；[FSS](https://www.ica.gov.sg/reside/STP/apply/fss) L31—75 | 非宗教全日制教育有效 DP／LTVP／IEO 豁免范围准确，失效后须另申 STP。政府／ITE／FSS 的新申请与续期均为开课前二至三个月；需要担保的类别按该页 21 岁起 SC／PR 条件，不向其他学校推定。申请费 S$45、待审不自动延长停留均有据。 |
| [PEI](https://www.ica.gov.sg/reside/STP/apply/pei) L31—93；[MSF 托儿／幼儿园](https://www.ica.gov.sg/reside/STP/apply/msf) L31—82；[IHL](https://www.ica.gov.sg/reside/STP/apply/ihl) L31—95 | PEI 同校同课且现 STP 有效才走续期、转课／转校至少四周新申请；MSF 新申请二至三个月、续期／转校至少四周正确。IHL 原文只给新申请二至三个月，正文不捏造通用续期窗口，要求学校核登记与期限。 |
| [STP 完成手续](https://www.ica.gov.sg/reside/STP/collect) L31—90；中文 FileSG 全五页 | 须在新且有效停留、IPA／体检条件、校方 offsite 或 ICA 预约、S$60 与适用 MJV S$30、2023-02-27 起数字准证一致。PDF／OA、三个工作日 Singpass、交易编号／FIN／生日／手机或邮箱 OTP 的无 Singpass 下载路线均核对，未承诺必须有智能手机。 |
| [STP 改资料](https://www.ica.gov.sg/reside/STP/change-address) L31—43；两页 STP 条件第 8 条；[取消](https://www.ica.gov.sg/reside/STP/cancel) L31—37 | 护照／地址十四日、姓名／性别等第 8 条个人资料、本人 Singpass 与 ICA 求助均准确。结束学习七日内取消、至少到期前三工作日提交、学校或本人操作，没有把取消写成自动获得 STVP。 |
| [ICA LTVP 申请与续期](https://www.ica.gov.sg/reside/LTVP/apply) L31—81 | S$45／60／适用 MJV30、各自类别担保和声明、至少三个月前续期、常规六周／SC 外籍配偶最多六个月／婚前 PMLA 后六周均有据。新有效期从付款签发日起、余日不结转；正文把 MOM 同名 LTVP 分至独立页。 |
| [2024-06-26 起完成手续](https://www.ica.gov.sg/reside/LTVP/cof-and-issue-new) L31—48；[此前](https://www.ica.gov.sg/reside/LTVP/cof-and-issue) L31—69 | 按提交批次分流，新 IPA 任务期限、核件后十四日付款、有无到场、下一工作日 FileSG／三个工作日 Singpass、毕业求职／分娩仅 FileSG 均准确。旧版批准后三十日上传、缴费通知三十日付款、现场 IPA 三个月保留，未倒套新制。 |
| [ICA LTVP 改资料](https://www.ica.gov.sg/reside/LTVP/update-particulars) L31—48；[ICA 联系](https://www.ica.gov.sg/contact-us) L26—62 | 护照／地址十四日、本人账号、英文表单及技术支持、63916100 工作日 08:00—17:30 均一致。身份改变时带材料确认衔接属于行动建议，没有保证准证自动取消或转籍。 |

### 可用性与审阅边界

读者可核实际停留日并选择延期、按 IC 事件和学校类别分流、完成获批手续、取得数字准证和更新资料；无 Singpass、下载失败、遗失／损坏、海外住址与人工求助都有真实路径。机器复核完整元数据、无正文 H1、站内链接目标实际存在；仍保持 `written / draft:true / verified:"" / reviewed_by:""`。未改正文或核验字段，没有进行登录、真实申请、付款、机构联络、构建及屏幕／打印渲染，不能据本事实审替代第三人编辑和主控工程接收。

## pass-management：通过所写范围的独立事实审

2026-10-13 全文读完 `content/book/life/documents/pass-management.md`，逐项独立核查 EP、S Pass、产业 WP、MDW、PEP、ONE、EntrePass 及普通／ONE 家属的签发人、截止日、前置体检保险、通知信、登记地点、领卡、续期、地址／护照／工资／就业及年度申报。没有发现阻断事实问题，所写范围和全篇可用性通过，可交第三人编辑。未改正文或核验字段；与 arrival-renewal 互引须同批公开。

| 项目 | 本次实际重算的锁定值 |
| --- | --- |
| 大小 | 28,618 bytes |
| 完整 SHA256 | `fcb495ceb85c7d4862f29354e0f64faca4ad9c1bc523f5f77c6a96156e767700` |
| 统一正文 SHA256 | `530685ce84bab54d1acd365493ddd6a1b58d50213040e616345632c9e9ab03b5` |

### 独立回源方式及具体限制

本审阅者从上节四份当日公开原文缓存中独立重读 MOM 主管详细页，按实际 URL 和 L 行号检查正文并合并返回段，索引与原行文本保存在 `.cache/research/b03c-documents-facts/arrival-index.json`、`arrival-source-24.txt`—`64.txt`。采用的是原网页文字，不是作者 M01—M15 的事实摘要。下面分别列出实际读到且支持本页的范围；未以一份 EP 原文替其他准证的原文。

其中 WP 工资段第一次范围未覆盖，随后实际补读该页 L104—127，确认工资改变前书面同意及 WP Online 申报；另以官方定位搜索检查当前完整同页及关联薪资指南入口，搜索原返回保存 `mom-salary-search.txt`，不把这次搜索写成已读关联 PDF 或新的独立详页。其他表件、视频、登录后页面、真实预约与个人申请均未进入。ONE 未列目录的旧失败续期 URL 没有重试，没有推定未知个人续期权限。

| 类别与主管详页 | 本次实际实读范围及核查结论 |
| --- | --- |
| EP：[申请／签发](https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass)、[续期](https://www.mom.gov.sg/passes-and-permits/employment-pass/renew-a-pass)、[通知变更](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) | `30` 实质段 L50—259，`32` L32—95，`31` L32—210。雇主／EA、首次 IPA 六个月／S$225、通知信一个月工作和出入境、EPSC 两周、配送五工作日／二次失败三个工作日及雇主授权均准确。体检 STVP 七至十四日；普通六个月／赞助三个月、十个工作日处理或更新／赞助六周、续 IPA 三个月及先到截止有据。住址五日、护照即时及自动通关四工作日、降薪至少一月与新雇主新申请均核对。 |
| S Pass：[申请／签发](https://www.mom.gov.sg/passes-and-permits/s-pass/apply-for-a-pass)、[续期](https://www.mom.gov.sg/passes-and-permits/s-pass/renew-a-pass)、[通知变更](https://www.mom.gov.sg/passes-and-permits/s-pass/notify-mom-of-changes) | `55` L50—220，`57` L32—98，`56` L32—213。首次六十日 IPA、S$100、七月护照、保险与适用 PCP、Hall C 一周准确。PCP 对象是容量至少七名工人的宿舍或 CMP，未从居住身份推定。六个月／180 日续期、十工作日处理或更新、续 IPA 六十日、地址五日、护照同步与工资变更均有据。 |
| 产业 WP：[申请／签发](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/apply-for-work-permit)、[续期](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/renew-a-work-permit)、[通知变更](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/notify-mom-of-changes) | `61` L44—238，`63` L32—110，`62` L32—127。非马来西亚籍入境前担保生效／新 FIN 三工作日、十四日签发及 Special Pass／IPA 自动延长、马来西亚及转雇主分别按 IPA／原准证、S$35／Hall C 一周、BCA 与体检路径均一致。续期七至十二周、OFWAS 至少一小时前、两年护照二十五月／担保二十六月、五日改址与 WP Online 更新有据。工资改变先书面同意并由雇主申报，不把未签发 WP 当可改已核工资。 |
| [Onboard Centre](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/onboard-centre) | `64` L32—176，并合读 WP 页 L85—113。男性、非马来西亚、WP IPA、CMP 四项同时满足；先住宿批准、至少四日前预约、再机票、抵达直接到中心。自 2025-08-01 起两年从上次准证取消起算，返新两日／首次或超过两年三日，手机与免费 SIM、2026-05-04 医方直接上传结果、抵达十四日签发均准确。未把该流程套女性、制造业或所有 WP。 |
| MDW：[申请／签发](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/apply-for-work-permit)、[续期](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/renew-a-work-permit)、[通知变更](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/notify-mom-of-changes) | `58` L32—231，`60` L32—100，`59` L32—207。雇主／EA签发、首次 SIP 七日排除周日与假日、全体十四日体检／两周签发、S$35、一月 Temporary WP、一周 Hall C 及雇主授权补领均有据。约八周续信、保险／年龄、护照过期仍可续但旅行有效护照均准确，未套产业 WP 二十五个月条件。麻疹要求限家有未满七岁且未完全接种孩子。雇主迁居两周、ICA／MOM／ICA LTVP 雇主分别更新、合格亲属自己的 Singpass 和限定交易均核对。 |
| 普通 DP：[申请／签发](https://www.mom.gov.sg/passes-and-permits/dependants-pass/apply-for-a-pass)、[续期](https://www.mom.gov.sg/passes-and-permits/dependants-pass/renew-a-pass)、[变更](https://www.mom.gov.sg/passes-and-permits/dependants-pass/notify-mom-of-changes) | `27` L32—292，`29` L32—90，`28` L32—91。EP／S 雇主或 EA、PEP／Entre 主本人、赞助本地担保人申请而主本人签发准确。EP 六月／S 两月／PEP 与 Entre 六月、S$225、体检延期七至十四日、两周 EPSC／一周 Hall C、配送与雇主授权均一致。续期一般 180 日／赞助及 Entre 三月与专表八周、续 IPA／旧卡条件准确。住址可家属本人，护照指定公司或主本人；未以地址权限推个人续期权限。 |
| 普通 LTVP：[申请／签发](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/apply-for-a-pass)、[续期](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/renew-a-pass)、[变更](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/notify-mom-of-changes) | `36` L34—71、L96—152、L161—292，`38` L32—93，`37` L32—90，独立读本类别并核所有采用分支。签发主体、期限、费用、体检／登记／补领、续期、五日地址及个人资料角色均有据；ICA LTVP 明确在 ICA 续，不以同名相推。待审家属申请不会自动延长 Visit Pass。 |
| PEP：[申请／签发](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/apply-for-a-pass)、[Key facts](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/key-facts)、[通知](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/notify-mom-of-changes) | `52` L32—224，`53` L32—55，`54` L32—140。本人与 EA、六个月 IPA／S$225、无 Singpass EPSC、两周登记、本人授权补领正确。一次最长三年不可续，雇主申 EP／S 不需先取消 PEP；两周地址／七天联系人／一周就业、年度 1 月 31 日及 2025 起签发者首次 2027 均有据。正文保留当次个人通知，未将年度薪资申报套 ONE。 |
| ONE：[申请／签发](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/apply-for-a-pass)、[资格及续期](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/eligibility)、[通知](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/notify-mom)、[目录](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/eservices-and-forms) | `39` L32—255，`40` 实际返回的续期 L99—105，`42` L32—104，`41` L32—57。本人签发、六个月 IPA、S$225、EPSC 替代、两周登记、本人授权领卡准确。每次续五年、提前六月、过去五年平均固定月薪三万元或经营公司五本地员工且各 gross 薪资达当期 EP 门槛均有据。两周地址、只有需要者收年度通知邮件；公开目录未明确完整续期操作，正文指出具体未知和人工入口，没有自造按钮。 |
| EntrePass：[申请／签发](https://www.mom.gov.sg/passes-and-permits/entrepass/apply-for-a-pass)、[续期](https://www.mom.gov.sg/passes-and-permits/entrepass/renew-a-pass)、[通知](https://www.mom.gov.sg/passes-and-permits/entrepass/notify-mom-of-changes) | `33` L32—58、L83—232，`35` L32—163，`34` L32—149。本人／公司代表／EA签发、六个月 IPA／S$225／EPSC／本人授权补领有据。持有人提前三月、八周、首续一年／后续两年、实际经营／ACRA／财务／银行／SSN／轮次 TBS-LWF、新计划及续 IPA 三月先到截止均准确；五日地址与护照即时／四工作日同步核对。 |
| ONE 家属 DP：[申请／签发](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/dependants-pass-for-overseas-networks-expertise-pass/apply-for-a-pass)、[变更](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/dependants-pass-for-overseas-networks-expertise-pass/notify-mom-of-changes)、[Key facts](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/dependants-pass-for-overseas-networks-expertise-pass/key-facts) | `45` L32—203，`47` L32—90，`46` L32—39。申请主体与家属本人到 EPSC 签发分清，六个月 IPA／S$225、体检延期为到期前一周、两周登记、本人授权补领、五日地址及护照主本人／家属本人准确。续期以主 ONE 成功续为条件，有效期受主准证限制；未套普通 DP 的体检窗口和护照角色。 |
| ONE 家属 LTVP：[申请／签发](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/long-term-visit-pass-for-overseas-networks-expertise-pass/apply-for-a-pass)、[变更](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/long-term-visit-pass-for-overseas-networks-expertise-pass/notify-mom-of-changes)、[Key facts](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/long-term-visit-pass-for-overseas-networks-expertise-pass/key-facts) | `49` L32—171，`51` L32—91，`50` L32—39。逐页独立核同类的申请／签发、六个月、费用、通知、体检一周、登记两周、补领授权、五日地址／护照角色及续主成功前提；未以相邻 DP 代核，也未推到普通或 ICA LTVP。 |
| [EP eService](https://www.mom.gov.sg/eservices/services/employment-pass-eservice) | `26` L32—207。公司 Corppass 和 EP eService 两重权限、个人护照／联系资料、MDW 无 Singpass 申请替代及亲属本人账号均符合各自原文。服务总览不能单独证明 PEP／ONE 家属个人续期权限，稿件明确具体不确定并找 MOM。 |
| [公开查询](https://www.mom.gov.sg/eservices/services/check-work-pass-and-application-status)；[MOM 联系](https://www.mom.gov.sg/contact-us) | `25` L32—128，`24` L33—93。DOB 加 FIN／护照、全部 MOM 长期准证、当前及近六月记录、五语言、多个 FIN 错误、保存／打印含时点、雇主／EA纠错均有据。64385122 周一至五 08:30—17:30、公共假期休、在线表和不同中心真实入口，未虚构免本人验证或免预约万能柜台。 |

### 全篇可用性与后续验收

读者能依自身准证和国籍找到负责者、从抵达前准备到签发领卡、区分申请获批与完成签发，再按类别续期和更新资料。无 App 的公开查验、无 Singpass 的特定签发／MDW 申请、授权亲属及流程公开未明时的人工路径具体可执行。高影响的 Onboard 对象与两年起算、MDW 护照、家属工作权、普通／ONE 家属更新角色和 PEP 年度申报都分别回源。

机器复核完整元数据、站内目标实际存在、正文无 H1、full／body SHA 与作者交审一致，元数据仍为 `written / draft:true / verified:"" / reviewed_by:""`。本审阅者没有编辑作者稿、构建、检查实际桌面／手机／打印渲染或办理任何私人事务；这些仍由第三人编辑和主控工程接收承担。
