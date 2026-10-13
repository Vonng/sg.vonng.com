# identity 暂停交接

保存时间：2026-10-13，Asia/Singapore。用户明确暂停目标以更换订阅号；本次只保存现场，没有继续研究、网络请求、正文写作、构建或提交。恢复工作须等用户明确恢复。

## 当前责任与状态

工作区 `/Users/vonng/www/sg.vonng.com`；代理 `/root/identity`，主控 `/root`，伙伴 `/root/care_finance` 与 `/root/daily_history`。加拿大只读，不启动 Claude。不得修改共享导航、索引、总账或工程，不自行构建或提交。作者正文首次交付须 `status: written`、`draft: true`、核验日期和 `reviewed_by` 为空，作者自审 → 异人事实审 → 第三人编辑 → 主控集成。旧冻结正文只读。

当前未完成作者任务为 B03C documents 三篇；未交事实审核，未宣称完成。原授权范围：抵达 SGAC/签证/入境停留与正式准证；领取 NRIC/FIN、地址更改与续期；PR/公民/REP 与跨境返回；翻译、公证、SAL 认证和材料保存。关键身份分支、失败和线下求助不能省略；参考已审 work-passes/NS 避免复制。

## B03C 实際落盘状态

| 文件 | 暂停时状态 |
| --- | --- |
| `content/book/life/documents/permanent-residence.md` | 已有完整首稿，15,563 bytes；尚未完成作者自审、没有最终交审 SHA、未交 care_finance。不能据此提升状态或发布。 |
| `content/book/life/documents/arrival-renewal.md` | 尚不存在，只有来源调查。 |
| `content/book/life/documents/documents.md` | 尚不存在；SAL 只完成定位搜索，详细原文尚未打开。 |
| `ops/maps/b03c-documents.md` | 已有三篇独立问题、分支、研究入口和后续边界；仍是初始来源图，表内“待逐页实读”尚未按已读 PR 更新，**不是完成地图**。 |
| `ops/evidence/b03c-documents.md` | 已写 P01—P27 的 PR/公民/REP 实读证据、A01—A04 抵达初步证据及失败限制；**尚不完整**，缺续期/地址/NRIC/FIN/SAL等、最终自审与三篇 SHA。 |

暂停快照 SHA-256（仅锁现场，不是交审完成声明）：

- permanent-residence 完整：`d7cc174c45e72fd7105d9372db80a9389975724f365b05faebd48c4e5f3e3a82`
- permanent-residence 正文：`e2a2ae53ac0d362c46c14e5578a33bcfd7c6095eb2542d651e5925b34d5dc8d2`
- 来源地图：`2e77102308cfd1460576bac569523d638f6d76311982d18e01c71f3496c440b4`
- 证据文件：`713d7a39bc5876eeb230c945120dcb763d9d64b6f358ec94c148ec3c73271dca`

统一正文算法为 UTF-8 文本 `text.split("---", 2)[2]`，保留关闭 frontmatter 后所有原始空白。完整 SHA 是版本锁定依据。

首稿已覆盖 PR 六种资格路径、SC 五种路径、申请人与担保人/不申请配偶材料、7+7日草稿窗口、申报与待审更新、批准后手续和延期、公民 SC Journey/退籍/登记/证书、特定未成年入籍者21—22岁ORAL、REP境内外办理与2025-12-01后180日新制、PRSEP/拒绝/丧失PR后果、一般申请上诉与线上失败入口。恢复后须通读首稿自审，尤其公民成年退籍年龄措辞、ORAL对象、新旧REP时间边界，不能只检查格式。

## 已实际阅读的来源与缓存

逐条 URL、事实、适用范围和时间已完整列在证据 P01—P27/A01—A04，可直接接续，不能把作者证据当成独立事实审。主要实读集合：

- ICA PR 主页、公民申请主页；PR/SC 材料清单各两页完整文本。
- ICA AskGov 的草稿时限、提交确认、PR工作/薪资/婚姻/学历/地址更新、更正、待审离境、批准手续与延期、公民SCJ后通知与退籍文件、最终登记、证书、ORAL材料与免预约、无网络/错误查询、状态查询等完整答复。
- 当前 REP 办理页 `https://www.ica.gov.sg/reside/PR/apply-REP`，REP 有效性页，以及2025-11-12的五页新制 FAQ 全文；ORAL当前页 `https://www.ica.gov.sg/reside/citizenship/minor-oath-taking`；2026-07-20的申请上诉页 `https://www.ica.gov.sg/reside/reside-appeals`。
- ICA Entering Singapore（页标2026-09-29）、SGAC、ICA延长Visit Pass详细页，以及Student's Pass IPA不等于停留准证的完整官方FAQ。

为更换账号保存了原有工具返回和临时原件，均为本次暂停时复制既有材料，没有新抓取：

| 缓存 | 内容和限制 |
| --- | --- |
| `.cache/b03c-identity-source-state.json` | 从当前会话 `store` 原样保存29组已有结果，161,744 bytes，SHA `68a3d75e8fc244a4cc38e9c85d33b58eb73c8ea25eef43c401c8a7e2a57fa669`。包含原文、失败返回和SAL搜索，不能一律当成功原文。 |
| `.cache/b03c-pr-apply.html` | 原 `/tmp/b03c-pr-apply.html` 副本，ICA PR主入口一次普通8888成功取得的完整HTML。 |
| `.cache/b03b-review-H7.html` | 原 `/tmp/b03b-review-H7.html` 副本，已闭合的历史文化审核Hasanah原始HTML，仅供追溯。 |
| `.cache/b03b-malay-regiment-web-result.txt` | daily_history当时成功web工具的完整原样提取，含89行原文及另页403。SHA `3d6d82f20f8b4c39ba8276526fd0d2478b66c4e160cb196338fc2cca88a013b3`。是作者当次获取原文的缓存，不能冒称本次重新取得HTML。 |

JSON 中 `b03csc`、`b03centry`、`b03csgac`、`b03cextend`、`b03cstpipa`、`b03cprcheck`、`b03crepfaq_sc_checklist`、`b03coral` 及各 AskGov 名称均为已读工具返回。`b03crep` 是旧猜测 URL 的失败返回；不要当成当前REP成功内容。当前REP、上诉、PR COF等已实际读但未单独存入这份JSON，其事实和精确URL在证据中。`b03cSALsearch` **只有搜索结果，尚未逐页读取**。`HEB_SMT_etiquette` 是已闭合社会审的实际礼节原文。

## 失败与不可循环重试事项

- PR主入口 `https://www.ica.gov.sg/reside/PR/apply`：web403；一次正常 `127.0.0.1:8888` 取得200完整HTML后停止，原件已缓存。无需重新抓取来“验证可达”。
- 初猜REP `/enter-depart/for-PR/apply-REP` 失败；已通过真实搜索找到当前 `/reside/PR/apply-REP` 并完整读完。旧猜测路径不重试。
- 初猜ORAL `/enter-depart/for-singapore-citizens/oath-taking-for-minors` 失败；已从ICA官方目录找到 `/reside/citizenship/minor-oath-taking` 并完整读完。旧路径不重试。
- PR/SC PDF 文本完整可读；截图调用只返回引用，没有可见图片。不能宣称目视矩阵，首稿也没有逐格复制造成列错位。
- 旧 B03B HEB `https://heb.org.sg/temple-etiquette/` 已遇挑战/403/超时，停止。实际另一个官方庙宇承载URL `https://smt.org.sg/HEB/Temple_Etiquette` 已由作者及 care_finance 各自完整读到，S01关闭；不要再查旧阻断页。
- 旧历史文化 Malay Regiment 页面独立web403与一次8888失败，两条实际官方替代PDF也403，均已止损；仅按保存的当次原文提取范围审结。Hasanah web超时但一次8888成功，已缓存。
- 不以搜索摘要补事实，不绕验证码、不伪装指纹、不关闭TLS验证、不反复尝试同一失败页；按项目已定止损规则换实际主管来源或收窄有据范围。

## 用户恢复后的明确入口

1. 先读本交接和现有三份B03C文件，恢复最新AGENTS/PROMPT约束；先确认主控分工，无须重做已完成的社会/历史文化/数字编辑审核。
2. 研究暂停时正要实际打开 SAL 四个定位到的原件（目前仅搜索，尚未实读）：`https://legalisation.sal.sg/OurServices`、`https://legalisation.sal.sg/Faq`、`https://legalisation.sal.sg/Legalisation/LegalisationInfo`、`https://legalisation.sal.sg/App/Templates/LEG_FAQ_v1.4_15Oct2025.pdf`。优先2025-10-15 FAQ原件核现行规则；旧信息页搜索露出的10.70/1.07等费额可能过时，**不能直接入稿**。先厘清新加坡出境文书与外国来新文书、政府与私人文书、公证与SAL Apostille、目的国接收边界、数字/法院文件特殊路由、失败及线下办理，再写documents正文。
3. 继续arrival-renewal缺口的实际主管细源：ICA NRIC/FIN取得、IC领取和改址；ICA Student/LTVP完成手续、续期和到期处理；MOM EP/S/WP（含MDW）/DP/LTVP等签发、地址和续期责任及期限；PEP/ONE Pass/EntrePass若路径不同，不能用EP概括。引用已审准证资格页，聚焦动作与失败分支。NRIC、FIN编号与准证本身概念须分清。
4. 按完整问题完成另外两篇，补证据与地图的真实状态；通读PR首稿并作三篇作者自审，元数据/链接/中文/粗体/条件/原件范围/时限年份核对。没有完成步骤前不交最终SHA、不将草稿提升。
5. 把三篇完整和统一正文SHA及证据路径交root与care_finance，待异人事实审后按意见修稿；不得自签事实审。仍不改共享导航、工程，不构建提交。

## 其他已完成交付与冻结

- B03B 社会三篇独立事实审已经 care_finance 通过，报告 `ops/reviews/b03b-society-facts.md`，HEB S01已关闭；已交root第三编辑。保持正文冻结，**本次暂停没有改正文**。
- B03B daily_history四篇事实审已通过并向root/daily报告，报告 `ops/reviews/b03b-history-culture-facts.md`。正文只读；Malay Regiment缓存限制在报告透明记录。
- root accounts 第三人编辑已通过，`ops/reviews/b03c-accounts-editorial.md`；锁完整SHA `279676ca4b7d24a85c1fac5a958e37731ce907ff78a3400903fb9f9227344a15`，正文 `b53f5c15d53a9e55240407d4b3c7f73aa2cdbe96df7a5b086cebda7191305732`。
- root telecom 第三人编辑已通过，`ops/reviews/b03c-telecom-editorial.md`；锁完整SHA `58210354e20ff72889ea53ccef088ddca9675cc9fff4fc29ba33eff0026cf8fe`，正文 `42543e4f45b1d209900195df870d946329160cf794435f3c01fa36c4b28ab80a`。未改作者正文，没有声称浏览器渲染或构建测试；accounts链接需主控共同集成。
- B01/B02、B03A政府作者稿、地理事实审、预算第三编辑等均已完成旧批次，按主控冻结处理。不要误把本交接当重开授权。

B03B社会最终作者交审SHA（完整 / 正文，旧冻结值保留；主控后续若只改元数据，以其集成记录对照）：

| 路径 | 完整SHA | 正文SHA |
| --- | --- | --- |
| `content/book/foundations/society/communities.md` | `6bf7680e4754f385386e57c0ae3c3cb94f36e54a2c19589a503182a171906e9f` | `2fae26eaf693b31091c9d856cd51ef6f0a6bea399390eb3d772e90c82db6da08` |
| `content/book/foundations/society/religion-festivals.md` | `38ab351270d7aa4c403fdebf0c549f5fce9ebb35ff4490f297e68d087f43aa65` | `ac34443905ba65fac3908e2b13e6bfa3449eccfa74ae23a495c591d0606f2629` |
| `content/book/foundations/society/migration.md` | `6a9a49740ad104581fb310eab1a7f4065712303a6a0eeb87cce638b963d76c03` | `d0a1562e24dce6df1721241c8f5a04b93f25a9d5d562c7a6ce80816b39e0e09f` |

B03B历史文化事实报告锁定的完整SHA依次：housing-industrialisation `d7ae7cdca09ec9e450085266142b846f104ac290996614a360b0e5375b28d73c`；memory `0079509c8a4633168d3ae6049289860a195f8e3abb392599732c271e526e1fdd`；everyday-etiquette `05362e9943c4f09f1389067a826f78a7e1548f932deb6073e3f4c26ad5c6d074`；hawker-social-life `7bad8754691a97ac8a39aa9f268375ce80ef3035560d4bf8b097caae3ef75fac`。

## 工具运行状态

暂停前最后一批工具（创建B03C证据、SAL定位搜索）均已同步完成并返回。没有待恢复的 `functions.wait` cell、没有持有未结束 `exec_command` session，没有本代理发起的后台研究任务或子代理。此次保存现场工具也均同步结束。可以停止会话，不需杀任务或等待网页。

保存此交接后只向root报告并停止，不追加研究、正文或网络工作。
