# daily_history 暂停交接

日期：2026-10-13（Asia/Singapore）。用户明确要求暂停目标准备更换订阅号；收到 root 暂停指令后已停止研究、正文写作与网络访问，只保存本文件和已有工具原文缓存。**不要自动续工，等用户恢复目标。** 本执行者没有运行构建、提交、外部发布或真实代办。

## 职责与约束

执行者 `/root/daily_history`。共享工程、导航、总账由 root 持有；他人正文只读，问题发原作者并抄 root；本执行者只改分派正文/证据/地图/审稿记录。PROMPT.md 已在前序完整读过，AGENTS.md 已读；恢复先按 AGENTS 读 BOOKMAP/TASKS/CHECKPOINT、实查文件与日期。加拿大只读，不启动 Claude。written/draft:true，核验字段空；必须异人事实审、第三编辑、root 工程接收后才能集成。

来源必须详细原文实读，不能用摘要补缺。已失败 URL 没有新入口/新版本/外部变化不重复探测；必要时最多一次正常 8888 代理，不关 TLS、不绕挑战。缓存都在已忽略的 `.cache`，不得提交原件、截图或下载依赖。

## 已完成、冻结的本执行者工作

- B01 自写公共交通、港口至独立历史、多语生活；B02 自写 renting/emergencies；B03A 地理三稿均已审且由 root 集成，禁止本轮顺手改动。
- 本执行者完成 B01 care/CPF、B02 birth/admission、B03A household 四篇事实审；报告见现有 `ops/reviews`。B02 admission 仍部分通过/留稿，有 MOE 核心未闭，不得提升。
- B03B 自写历史文化四稿，identity 已完成独立事实审，报告 `ops/reviews/b03b-history-culture-facts.md`；本轮 root 已另落第三编辑报告 `ops/reviews/b03b-editorial.md`（只看到存在，未读其结论）。四稿保持冻结，不改。
- root accounts 独立事实审已完成通过：`ops/reviews/b03c-accounts-facts.md`。A01/A02/A03/E01 均由 root 修复后复核；完整 SHA `279676ca4b7d24a85c1fac5a958e37731ce907ff78a3400903fb9f9227344a15`，统一正文 `b53f5c15d53a9e55240407d4b3c7f73aa2cdbe96df7a5b086cebda7191305732`。identity 已另有编辑报告，主控负责后续。
- root telecom 独立事实审已完成通过：`ops/reviews/b03c-telecom-facts.md`，已通知 root。13 组细源全部核完、全篇读完，无正文修订。完整 SHA `58210354e20ff72889ea53ccef088ddca9675cc9fff4fc29ba33eff0026cf8fe`，统一正文 `42543e4f45b1d209900195df870d946329160cf794435f3c01fa36c4b28ab80a`。第三编辑文件亦已存在，但本执行者未读其结论。

## B03B 自写历史文化冻结版本

证据/地图 `ops/evidence/b03b-history-culture.md`、`ops/maps/b03b-history-culture.md`。完整 SHA：

| 正文 | SHA256 |
| --- | --- |
| `content/book/foundations/history/housing-industrialisation.md` | `d7ae7cdca09ec9e450085266142b846f104ac290996614a360b0e5375b28d73c` |
| `content/book/foundations/history/memory.md` | `0079509c8a4633168d3ae6049289860a195f8e3abb392599732c271e526e1fdd` |
| `content/book/foundations/culture/everyday-etiquette.md` | `05362e9943c4f09f1389067a826f78a7e1548f932deb6073e3f4c26ad5c6d074` |
| `content/book/foundations/culture/hawker-social-life.md` | `7bad8754691a97ac8a39aa9f268375ce80ef3035560d4bf8b097caae3ef75fac` |

identity 审 memory 的 M6 Malay Regiment 展区时，web 和一次 8888 均 403；本执行者此前成功工具提取原件已经存到 `.cache/b03b-malay-regiment-web-result.txt` 并交 identity。它是完整工具响应的原样缓存，**不是原始 HTML**。identity 已独立逐行阅读 L10，确认展区装备、专门设计制服、战前照片与 Adnan Saidi 展示断言均获支持，M01 关闭，四稿通过。不可再重试这个失败 URL。

## 当前未完成：care_finance 世界与不平等四篇事实审

报告预定 `ops/reviews/b03b-world-inequality-facts.md`，**尚未创建、未签发通过**。作者证据/地图已读完：`ops/evidence/b03b-world-inequality.md`、`ops/maps/b03b-world-inequality.md`。四篇正文全部读完且逐项回源已进行到末尾，暂停前最后一次本地重算与作者完整/正文 SHA 一致。未改他人正文，未发送事实修订；目前没有发现阻断事实错误，但不能将这个过程状态当作正式通过。

| 正文 | 完整 SHA256 | 统一正文 SHA256 |
| --- | --- | --- |
| `content/book/foundations/world/regional-ties.md` | `066aea5f64ceb6a43518dca6f1b6d6f032f70e84efd7b0f81d57883f65b1f272` | `bfd062163cb527a14abae83b6ca1c77ce437463c672da88b9dd7fd2e8d7388a6` |
| `content/book/foundations/world/trade-migration.md` | `cf227a5d2765e85ce5288bbebffc56adcc18a18d559de51dde17b50073ccf3f8` | `0b3aeee8e539091b8a2079543680ce051dbe226f413f4e72f44fb072650e218a` |
| `content/book/foundations/world/perspectives.md` | `09ae630340d3ff87bffa3bc9deee266c9f3d4e186011193b31fef41dc5f0fa52` | `5a37f748295366d95d0cd8dac666d0236bdfacf612bda687f274a0c7075a811d` |
| `content/book/foundations/culture/inequality.md` | `4eb684781f7158b75915a844c9aec86ac7805e9eed065db83733ce77e9a8900b` | `efbcf7976ca27fbe311902440c39f8c9a93564b6427dfafc9eaa5bfe4703aed7` |

统一正文算法：UTF-8 文本 `split("---", 2)[2]` 重新编码求 SHA256，保留闭分隔符后的换行。

### 已实际读到的项目

下列编号与作者证据对应，真实 URL 均在证据和保存的工具响应头中；证据只用于定位，以下确为本执行者另读来源。为更换账号保存了本轮现有工具响应：`.cache/daily-history-handoff/world-*.txt`，共 29 份。它们是 web 工具返回的原样提取（部分长报告只含指定片段），不是完整原始 HTML/PDF，不能宣称因此已读整份长报告。成功读取的来源可以在确有需要时重新正常访问；失败原件限制另列。

- **R01** 新马 2025-12-04 联合声明，实读 L23–86 全部实质正文：JS-SEZ ratification、PayNow–DuitNow 实施、CIQ/RTS 旧目标、水质水量、1962 协议、跨境电力及未闭海界，稿件将合作阶段分开。
- **R02** LTA 2026-10-02 联合公告，实读 L5–11 四段：2027-02 载客目标，2026-12-31 最终测试预期，独立安全认证及最终监管批准。未把目标作已开通。
- **R03/R04** 新印 2026-07-06 新加坡 PMO 讲话及印尼内阁秘书处总统声明实读。BBK、能源 MOU、教育、防务、粮食供应链及海峡风险有支持。印尼声明主要说马六甲海峡；新加坡声明明确马六甲和新加坡海峡，正文近邻两源能支持整体叙述。
- **R05** 驻东盟使团现行页实读 L19–26：1967、11 成员包括东帝汶。另主动补读 MFA ASEAN 总页 `https://www.mfa.gov.sg/about-mfa/foreign-policy/international-organisations/association-of-southeast-asian-nations-asean/` L34 核 Singapore 为 1967 创始成员；该总页其他“近期”段实际仍旧，不用于当期成员/RCEP判断。缓存 `world-R05-extra.txt`。
- **R06** MFA 2026-02-27 外长讲话实读第 1–47 段相关全文（工具 L31–120，分批读，未读其余政务官全文），尤其规则、小国、美国投资技术防务、中国经济/多元身份、独立立场、东盟/邻国。与 regional/trade/perspectives 使用范围相符。
- **T01** MPA 2026-01-13 公告实读港口段至行业段：2025 年 44.66m TEU＝4,466 万标准箱，不是 GT/货值。
- **T02** SingStat merchandise 数据解释 L106–181：transhipment 排除、domestic exports、re-export 未转化、包装分批不算转化，及实际价格调整定义。
- **T03** MAS 5 页 PDF 可读文本：年末 2025、约 S$6.7 trillion、76% 来源境外、88% 投向境外；最后 About the Report 方法段亦读。未看图，88% 的 outside Singapore 标签在解析文字中明确，主文字也说 invested globally。未重新下载作者已失败的原件。
- **T04** METI CECA L37–106 实读：工作准证/入境条件仍适用，ICT 广告例外非免准证，9.1.2 无公民/PR承诺；正文未扩大 DP 规则。
- **T05** EU DTA 2026-02-02 公告实读正文：实际生效 2026-02-01，电子签名合同发票/消费者保护。
- **T06** NPTD population 完整采用段/脚注已读：2026-06 总人口 6.21m、SC3.68m、PR0.55m、NR1.98m；通常居住/海外连续12月排除；正文与旧图片 alt6.11m 冲突采用新正文，不冒称图核。
- **P01** ISEAS 原 PDF 方法印刷页2–3实读，国籍页7另由本地真实PDF重新 pdftotext 读；2,008/SG246、在线定向混合抽样、筛选、时间均核。印刷48–49的 Q30/Q31 已重新读原文并**实际看作者保存的原页 PNG**：1.6/19.5/35.8/43.1，66.3/33.7；主体ASEAN、强制二选一前提明确。
- **P02/P03** Pew 发布页实读标题、时间、研究介绍及所用比较角度；topline 第6页 Q3b 另重新 pdftotext，并**实际看 PNG**，SG2026 73/27，15+58=73。没有把跨国42,151作SG样本或作与ISEAS跨年差值。
- **P04** Pew报告方法页已读相关国际方法段，另正常 web 直接读公开API `https://www.pewresearch.org/wp-json/prc-api/v2/interactive?slug=international-methodology-database` 的SG2026完整行，另读取原JSON缓存核一致：Feb9–Apr1、1003、电话手机RDD、18+SC/PR、性别年龄教育地区选择概率权重。未新打开交互前端作实际筛选，但正文所用方法来自公开原始数据。
- **I01** SingStat Household Income Our Data Explained 主要解释/词汇 L119–242实读：市场/就业收入、雇主CPF及利息、转移、家庭参考人、median/Gini/decile变动等。
- **I02** MOF40页原报告文本实读定义、财富13–14、流动18–25所用段、Annex A与B方法。父亲收入理由脚注4/5实际已读；包含较早代母亲婚育退出就业带来的变异。未看图、不用基尼/收入/跨国排名数字。未新打开发布入口，不影响已读原报告主体；不要称全文40页逐页审。
- **I03/I04** MIS FAQ 实读参与者/定价/研究/家庭/健康/住房/补贴等方法段，2023年归档实质全文、MOF/MOM/MSF2023回应相应实质段。健康基本案例、研究非随机民调、两方对补贴/样本争论有据；未把2023金额当2026标准。未读39页报告全文，不需要为稿件当前范围硬补。
- **I05** IPS WP64原PDF解析实读摘要相关段、方法印刷12–18、3.7.1/3.7.2文字：2024、4000、18+SC/PR、住户及Malay/Indian booster、加权；嘲弄/负面评价/笑话/排斥的群体差异有连续原文支持。没有用图形比例，未看图，未读141页全文。保存 `world-I05-lived.txt` 中相关后续文字可在报告定稿时再对照。
- **I06** TAFEP Contact Us 独立读 workplace discrimination 段、表单所需截图/日期/公司/人员、可能联系企业及顾虑、电话68380969办公时间。不承诺绝对保密/赔偿。
- **I07** SupportGoWhere web 只得 JS 壳；随后本人以 `.cache/browser/node_modules/playwright` + 本机 Chrome 正常加载，HTTP200，实际 body 看见 Financial support and benefits、caregiving等分类及ComCare/SCFA，同时“No internet connection”提示；正文仅作分类入口，无未核资格或金额。浏览器已经 finally close，命令已退出0。

### 尚未完成的事项

23 组已回源到正文关键采用范围，没有留待阅读的核心断言组；**正式汇总报告、最后全篇可用性裁断及交付未做**。恢复后先比对 SHA 是否仍一致，读本交接与缓存，检查引用范围/群体/年份是否仍有遗漏，再撰写 `ops/reviews/b03b-world-inequality-facts.md`。不需要为了报告重新扩大到长报告所有图表，未读部分如上如实写明。若发现修订则发 care_finance 并抄 root，作者修改后再复核最终版本；不得自己修改正文或提升状态。

### 世界四篇关键缓存与失败边界

- `.cache/research/b03b/iseas.pdf` 7,196,961 bytes，SHA `0330240836c4cffdf8c113ac7c553ade1e8b1004f22a237a0f74d56c98d13643`；原页 PNG `iseas-page-50.png`、`iseas-page-51.png`，已实际查看。
- `.cache/research/b03b/pew-topline.pdf` 324,532 bytes，SHA `53cc976924d60f4de7e882e11deacd3db0f9584fecc719cfa984ede3f994ad27`；`pew-page-06.png` 已实际查看。
- `.cache/research/b03b/pew-method-data.json` 452,420 bytes，SHA `82a4ae22c3d617e2496cbd2caa9434098724257f2e518f64cd49e14f569d4cd9`。本轮也成功读公开API，同缓存SG行一致。
- MAS/MOF/IPS长报告 web 文本可读，本执行者未重试作者已失败的下载。作者已止损：MAS下载HTML，MOF普通/8888均403，IPS普通/8888为212bytes JS壳；不能再探测。
- SingStat2025家庭收入大PDF、2026贸易图PDF、ASEAN Charter、MSF directories等作者已失败并止损，原路径见 evidence。当前正文不采用受阻数字/资格；本轮均未重试。

## 下一审稿：root privacy-fraud，尚未开始

在世界四稿正式事实审完成后，**先审此篇，再写住房**。路径 `content/book/life/digital/privacy-fraud.md`，报告归本执行者 `ops/reviews/b03c-privacy-fraud-facts.md`。只收到 root 分派，**尚未读正文、证据或来源**。

root交付完整SHA `21287aa70affe1fb4fe2859b0e58f8959b8cb605599e29253124ba82f827ed49`；统一正文 `388356e812051a3020400a5945b5230b942c4188765f72ccfb350a191af260ea`，本执行者尚未本地实查。

证据 `ops/evidence/b03c-digital.md` 末尾15组ScamShield/CSA/NLB/MDDI实际原文。重点999/1799/银行分工、恶意app顺序、NRIC2026年底/2027执法、公私部门资料保留范围、NLB旧指南不能作为当期技术保证。**严格停止所有已记录 PDPC/SSO 失败请求**。PDPA查阅、更正、撤回同意、DPO投诉已另拆 `privacy-data` planned，属全书真实缺口，不得把它当privacy-fraud已完成范围。

## 下一作者批次：B03C 住房四篇，尚未开始

计划独占 `content/book/life/housing/{tenancy,buying-hdb,buying-private,neighbours}.md`，及 `ops/maps/b03c-housing.md` / `ops/evidence/b03c-housing.md`。**未创建地图、证据或正文，未启动本批研究。** 必须先完成世界四稿与privacy-fraud事实审。

覆盖PROMPT住房余项：租赁维修退押金与完成/受阻；HDB身份家庭/房型、HFE、贷款、CPF、购税分开；EC、有地、公寓差异；MCST与邻里。高影响购房可合理拆页但先告路径边界。恢复研究前回读 PROMPT住房种子、BOOKMAP及`ops/evidence/housing-access.md`旧失败清单，只找新的主管详源/原件，不凭经验推断资格，不重复HDB旧受阻路径。既有renting.md已集成冻结，不改。

## 其他访问缓存和后台状态

- telecom GOMO原HTML `.cache/gomo-terminate.html`，96,343 bytes，SHA `27747adefe88f396ffa0dd8fa9bb13f4d928b43fa25917d1076863f906be2596`，本轮独立解析阅读；不是新抓取。IMDA ADR/后付费公告、NetLink、StarHub已由root一次代理止损，不可重复。
- telecom SMC PDF本轮web文本成功，web截图只返引用；普通下载403后一次正常8888成功。`.cache/daily-telecom-smc-rules.pdf` 116,296 bytes/13页，SHA `22e1284f931a1c698fdac98ad056ee2d0aec633eac5c17caccce9f8ce4dfc837`；`.cache/daily-telecom-smc-fees.png`第13页实际看图，线上/当面均S$10，裁定225/375。SPF2025诈骗PDF文字成功、截图403后停止；没有伪称图像审。
- accounts PDF缓存`.cache/singpass-registration.pdf`和报告记录仍在；2026-06-30人工热线变化已核，不须重新扩审。
- 本执行者**无仍在运行的自有后台任务**。最后Playwright统一exec会话58924已poll获得exit0并关闭浏览器；其余exec均同步结束。未启动本地服务器；root的1328服务器归root管理，恢复实查，不盲停。
- 最后现场`git status --short`有root共享总账改动和多作者B03B/B03C未跟踪稿件，这是团队并行成果，不清理、不回滚。未做stage/commit。

下一明确动作：收到用户恢复后，先实查状态并完成世界四稿事实报告，再独立审privacy-fraud，最后才开启住房四稿；暂停期间不执行这些动作。
