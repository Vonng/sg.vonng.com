# B03C airport-checkpoints 独立事实审

查阅：2026-10-13，Asia/Singapore；事实审 daily_history；作者 care_finance；第三人编辑及主控接收 root。只写本文事实记录，未改作者正文、地图证据或共享配置，没有共享构建、购票、申报、预约、联络或真实代办。

## 版本与当前结论

已对最终 `content/book/life/transport/airport-checkpoints.md` 再次完整通读，并实际锁定 **29,190 bytes**；完整 SHA256 `ec821cce64783ca5af42174c3eef903e98a7bfe846c2d8fc1d3c5ae269f2ad01`；正文 SHA256 `9772d1022f9bca2a5542537d7237fcba09d391a0761c3bf90b9c8b1067acd90c`。正文 SHA 按 UTF-8 `split("---",2)[2]` 保留全部空白。

**最终独立事实审通过所写范围与全篇办理可用性，可交 root 第三人编辑。** KTM FAQ 的 Woodlands Wallet / JB现金钱包卡段落 L82—83 在 L78“How to purchase ticket for Malaysian citizen”之下；首稿表格把该段推成全部国籍旅客的柜台规则。本审反馈后原作者已把表头与解释段限定马来西亚公民，其他旅客先核柜台方式，保留真实网页无App路径并撤除全体Woodlands不能现金断言；本审实际再次读该原文与最终全文核通过。没有替作者改正文。

作者也已更正T44证据中完整FAQ缓存定位：`b03c-airport-car-mdac-ktm.txt` 的FAQ只有元数据；实际完整采用原文在 `b03c-airport-routes-vehicles.txt` L19—95/130。独审据后者真实原文核对，未把元数据当已读事实。其余采用范围没有必须修订的事实问题。

首稿29,127 bytes、完整 `b6353fbea844b9b73527f548000f8965ca0af8fb265e3996014efd0e72557c7b` / 正文 `3da076047c539c4a9ea930ce5f930a1884b49f93acccdf71b6bcf913369bf545` 为审查历史。对最终文件逆向复原KTM三处实际措辞修订，所得完整SHA与首稿完全相同，证明此次正文差分只限该节引言、表头与办理段；记录在 `daily-history-airport-final-version.json`，没有另行扩大源或正文范围。

## 本审实际独立回读

先完整读作者 `ops/evidence/b03c-transport.md` 机场T38—T56、冲突/失败与交审节作索引，随后实际阅读以下主管与营运者 **工具原文、HTML原件提取及PDF**。缓存为 `.cache/research/b03c-transport/`。作者证据不是本次事实来源；搜索全文、旧图、错误返回和JS外壳不作规则依据。实际URL见T矩阵及正文近邻引用。

| 范围 | 本次实际独立原文 | 与正文逐项核对 |
|---|---|---|
| T38 | `transport-cag-body.txt` L33—131；`b03c-airport-cag.txt` 航站楼L32—189/接驳L29—46 | CAG公交站位/准确现金、MRT换乘和末班方向、出租/PHC深夜、24h柜台与具体楼层门号、Skytrain05—02/Jewel入境、T4日夜路线与上车点、联程转机区24h及TMFT09—19:45吻合。10月6日单日告示已过；T4下车Door4没有写成上车点，未许诺衔接时间或未读图中的票价班表。 |
| T39 | `b03c-airport-ica.txt` ICA入境L31—84、SGAC L31—95、QR L31—71（缺段另逐行补读） | 每人护照/非SG六个月、签证与停留、SGAC含当天三日/免费网页、陆路公民PR长期准证豁免但空海须交、IPA Foreign Visitor、QR首次外国/新护照例外及车/摩托/货车/巴士范围吻合。REP/准证管理互引真实既有主文，不以QR或到达卡代替旅行资格。 |
| T40 | 马方当前入境HTML/2页挂载PDF `b03c-airport-cw-entry-pdf.txt` L0—36；`b03c-airport-my-visa.txt` L331—420采用主体；`mdac-main-parsed.txt`及4张官方PNG实际目视 | 马方六个月护照、适用签证、返程资金、离柜台前核签入与MDAC吻合。三日前申报、新加坡公民/MY PR或长期准证豁免实际图有据；SG PR/MOM/ICA准证本身不能豁免。没有将旧国家整表或MDAC登记推通用免签/自动闸门。 |
| T41 | `b03c-airport-sbs-newterminal.txt` SBS160 L87—93、新首班公告主体与 `sbs-first-bus-2025.png` 实际目视；`sbs-faq-parsed.txt`公众公交采用主体及 `b03c-airport-sbs-fares-myentry.txt` SimplyGo L143—236 | 160自2023-11-26改Jurong Town Hall、当前160/170/170X运作与2025首班图吻合。SBS实体卡/现金路径有据；没有写所有方向同币种/免费换乘或用旧Covid图说停运。04:50只核图中JB向SG工作日非PH，不当各总站保证。 |
| T42 | `b03c-airport-routes-vehicles.txt` CW指南L109—132；独立从 `cw-current-service-list.html`、`cw7-route-detail.html` 原HTML解析可见正文；实读公开 `cw7-route-request.json` | CW1/2/5起点与两关下车行李流程吻合。原HTML16条线路实际再读，CW7真实经过Terminal Gelang Patah、CIQ、Tuas Checkpoint与Opp Tuas Link Station；正文保留站位方向核对，没有给实时班表余位、统一双币票价或未读的路线承诺。未重新调用公开数据请求，更未订票。 |
| T43 | 本次新正常web取回当前2026-09-28票条款 L16—122，存 `daily-history-airport-cw-fresh.txt`；另完整读缓存后段Clause12—17和原完整HTML提取 | 全销售渠道/纸票LUGO、现金仅柜台、LUGO购票含当日三日/其他渠道当日兑换、兑换后三小时登车、清关后同Service（含指定接续）、车不等/不保证座位及客服电话吻合。ManjaLink等明确另有条款，系统故障人工验证MAY不写保证。购买日期新旧不混。 |
| T44 | `b03c-airport-routes-vehicles.txt` KTM实际完整FAQ L19—95/130；`b03c-airport-mot-shuttle.txt`公开网页69行 | 门开/关JB30/10、Woodlands40/20、柜台售票20分钟、本人护照/不能改票、未满4免费仍登记、非马籍方向RM5/SGD5与马籍MyKad核验相符。30日票务有效期不代移民六个月。最终柜台付款已限定原文马籍对象并给其他旅客核对动作，复对通过；公开网页查询入口真实，没查询具体余票。 |
| T45 | `sg-vehicles-parsed.txt`正常官方完整主体；`b03c-airport-customs.txt` 三分之四油箱L33—58 | SG驾照/打印保险路税/卡余额/抬杆仍缴费/无关卡充值、汽车Woodlands出0.80入无/Tuas两向2.10及现金充值点吻合。Customs2026-10-12页明确所有SG注册陆路车燃料及汽油/CNG各3/4，未自行加旧摩托豁免或电车虚构油量。普通车不推商用APAD/JPJ许可。 |
| T46 | `b03c-airport-routes-vehicles.txt` JPJ L134—214；`b03c-airport-mot-shuttle.txt`2025MOT PDF全部3页L0—77 | 在线车主/代表、RFID/保险路税、私人外牌车RC20/次与TNG卡/钱包相符。旧2024无RFID宽限未采用，2025-07-01全面执法按后公告；注册不替代安装激活，不许临时通行保证。执法表只有文本阅读，没冒称逐表目视。 |
| T47 | `b03c-airport-car-mdac-ktm.txt` OneMotoring L261—449；原334—344缺段另实际补读 | 使用外牌车排除身份、境外居住MOM工作准证者ALL条件/登记车主/每天境外≥6h、两周前申请更新、激活专车卡/换车、保险全停留、插卡/余额与超过500安排吻合。车辆14日/五日前延长、人车期限分别、当前35/6.40/无IU5及豁免范围没有扩给摩托。11月2罚款限制明确未来。 |
| T48 | `sg-foreign-fees-2027-parsed.txt` LTA2026-02-06正常HTML完整采用主体 | 2027-01-01汽车50、工作日非SGPH、撤年度10日/免费小时、无OBU汽车ERP运行日10吻合；不是2026当前收费，非所有车强制OBU，不推其他费取消。 |
| T49—50 | `b03c-airport-customs.txt`GST/酒烟L35—213完整采用主体；`b03c-airport-ica-goods.txt`完整71行，ICA入境CBNI L75—77 | 新取得商品48h 500/未48h100、WP/EP/STP/DP/长期准证与crew无新购减免，与原有合理自用旧物制度分开；旅中新买二手仍新取得。酒18/48h/非MY/自用、烟无减免、许可/禁电子烟与现金>20k相符。未报未读税率、罚款或全部药物资格。网页/申报kiosk真实，不作了申报/缴税声明。 |
| T51—52 | `b03c-airport-sbs-newterminal.txt` SCC新码头L36—242；`harbourfront-old-relocation-parsed.txt`完整迁址原文；`b03c-airport-ferries.txt` SCC L28—76、BRF L132—244、BatamFast L10—174 | 新5HarbourFrontAve099549、MRT ExitB有盖步道/Tower1、62702228与TMFT50地址吻合；旧HarbourFrontCentre楼层不采用。BRF柜台现金/卡视座位、90min/40min、护照预约、GMT+7、轮椅到pontoon与陪同/预告相符，不将一般SCC安检时点推船公司截止，没给旧出租电话或清关时长保证。 |
| T53 | `b03c-airport-indonesia-manado.txt`L59—80；`b03c-airport-indonesia-voa.txt`L59—65含相邻国家名单；`b03c-airport-brf-visa-detail.txt`L132—193 | 印尼主管现挂名单包含Singapore、30日不可延与目的地护照/后续票吻合。普通护照与地区居留4日分开；VOA指定口岸资格/30日一次延长没推全部护照或营销旧国家总数，不写两种VOA费额统一。 |
| T54 | `b03c-airport-indonesia-circular-2025.txt`完整6页L0—210；实际原PDF176,627 bytes新独立提取及本审重新渲染物理4/5/6页目视 | 2025-01-31签发/生效、PR/配偶子女LTVP/STP三独立类、仅家属a(2)与PR同行、NRIC/准证/关系证明、柜台核验、指定区域口岸入出、CallingVisa排除、4日不延不改身份与正文相符。没有拿2024仅PR版本或旅游摘要作当前全部资格。正文没有把DP/EP/WP等推入三类或全国机场通用。 |
| T55 | `batam-all-indonesia-id-parsed.txt`主管2025-09-01实际完整声明；`b03c-airport-brf-arrival-visa.txt`BBT L134—141 | Batam国际海港包括公民/外国旅客与儿童、三日前、免费、移民海关健康检疫整合、网站或App，与BBT2025-10-01全旅客72h/邮件QR/非签证吻合。本审没有访问已止损的表单或evisa，没有声称看实际提交界面或已完成个人申报。 |
| T56 | 实际再读 `airport-rts-2026-10-02.txt` L5—11，与本人早先主管 `world-R02.txt` 同日成功缓存对应 | 2027年2月只是期待目标、独立安全认证/最终监管批准和2026-12-31测试后评估的条件吻合。截至10月13日未开放，不能按旧2026末目标给已营运路线；明确缓存再读，非新抓。 |

## 本次真正目视及版本

- MDAC：实际用 `view_image` 原尺寸看四张主管PNG（`mdac-infographic_1.png`、`_2.png`、`_popup.png`、`_popup2.png`）。登记三日与资格豁免图、起2024-01-01文字真实核；前两张实际SHA分别 `c02052fc6fdc8f81c07a3c31e02f1d55ea26451520fb8680f5ef55f86af41309` / `c2e7f81a42ac91d326f4646c223baa49b2de952417fe819d2f67a65fb72a854a`，对应作者保存的官方来源原件。
- SBS 2025-09-15新首班图实际目视全部文字及表：`sbs-first-bus-2025.png`，244,200 bytes，SHA `b47f5c9a95b719f7d5ed255b3b6977e50964716e4e32ec700a2f33e56c790d39`。图中JB Checkpoint46219向SG、周一至五非PH、160/170/170X 04:50有据，正文仅借它证明现行线路及入口。
- 印尼2025原PDF实际SHA `005c4eb61ae5f89370393e9206831b2361dbd4b7dfa6679fdf3d1cb1b6245f47`，176,627 bytes；本审自行 `pdftotext -layout`、重新渲染并实际 `view_image` 物理第4/5/6页（`daily-history-airport-indonesia-2025-page-*.png`），核a(2)同行、指定口岸、四日/CallingVisa及签发日/签名。完整工具6页及独立采用文本已读，没有冒称原件逐页全部目视或新联网下载。

全部HTML/PDF/提取/图片只在忽略缓存，不入Git。没有读未采用的CAG时刻价图、做现场路线或无障碍通行实测、查询当日票价余位或验证账户表单功能。历史失败边界、地方与时间条件均复用实际记录，没有切换URL参数/代理重复旧失败。独立新web取回仅CW当前成功条款，没有绕挑战、关闭TLS或真实联络。

## 后续

全篇覆盖六类新加坡身份、逐人护照/入境与返新、无App柜台/网页、儿童、车辆单独资格、外国车与新加坡车两边许可、购物/旧物及船方无障碍和受阻处理。跨境时限、目的地免签和新加坡准证不互相推定。最终全文、两项修订与新SHA已实际复核；轻量核written/draft:true/核验空、无正文H1、9处真实内部引用及驾驶事故H2锚点通过。第三人编辑、共享机器检查/浏览器及打印接收由 root，本文不代表已工程集成。
