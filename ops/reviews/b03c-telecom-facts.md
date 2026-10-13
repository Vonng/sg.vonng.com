# B03C 电信与订阅独立事实审

审阅人 daily_history；作者 root；实际回源及全文复读日期 2026-10-13（Asia/Singapore）。正文只读，没有修改元数据、共享导航或运行构建。

结论：**所写范围通过独立事实审**。逐项回读下列 13 组原始来源，并复读全篇的开通、使用、迁移、取消与受阻路径；未发现须作者修订的事实错误。通过只绑定本表版本，不覆盖运营商所有套餐、所有外国证件或所有争议，也不替代第三人编辑与主控工程验收。

| 文件 | 完整 SHA256 | 正文 SHA256 |
| --- | --- | --- |
| `content/book/life/digital/telecom.md` | `58210354e20ff72889ea53ccef088ddca9675cc9fff4fc29ba33eff0026cf8fe` | `42543e4f45b1d209900195df870d946329160cf794435f3c01fa36c4b28ab80a` |

正文算法为 UTF-8 文本 `split("---", 2)[2]` 后重新编码 SHA256，保留闭分隔符后的换行；与作者交付一致。

## 实际原文核对

| 项 | 独立实读原件及位置 | 断言、条件与结果 |
| --- | --- | --- |
| T01 | [MDDI anti-scam efforts](https://www.mddi.gov.sg/other-pages/anti-scam-efforts/)，2026-08-18 更新，SIM 段 L72–80 | 预付费跨运营商三张；2026-02-28 后付费改为跨运营商十张；没有把此前每家十张的旧规则沿用。通过。 |
| T02 | [SPF Annual Scam and Cybercrime Brief 2025](https://www.police.gov.sg/-/media/SPF/Media-Room/Statistics/Annual-Scams-and-Cybercrime-Brief-2025/Annual-Scam-and-Cybercrime-Brief-2025.pdf)，实读第 38 页第 22–25 段（解析 L1248–1273） | CIS、data-only 不计后付费上限；SIMCardHowMany、Singpass 与发现可疑登记向运营商及 ScamShield 报告均明确。报告统计年为 2025，措施实施年为 2026，两者区分正确。此页关键内容为连续文字；图像请求 403，未宣称图像审。 |
| T03 | [M1 prepaid FAQ](https://www.m1.com.sg/support/faq/all-topics/mobile-phones-plans/prepaid)，General / Self Registration，L440–539 | 护照 30 天、31 天终止、不可取回、及时更新有效本地证件；明确仅为 M1 产品例。NRIC、WP、EP、S Pass、学生与家属准证有原件列举支持。失败或国籍缺失时可人工登记，正文导向实际指定门店而未承诺所有店均可办。通过。 |
| T04 | [Singtel hi! FAQ](https://www.singtel.com/personal/products-services/mobile/hi/faq)，L2–50 及 eSIM 默认线路部分 | 至少 16 岁、申请证件；转入须本人 NRIC/FIN 的现有后付费号码、有效且无欠款；临时号码与完成后的切换。未把这组规则当作所有运营商共同资格。先转入、保留旧号至按指引结束，使用默认通话与数据线路的建议合理。通过。 |
| T05 | [M1 fibre broadband FAQ](https://www.m1.com.sg/support/faq/all-topics/home-broadband/fibre-broadband)，L448–457、489–584 | 地址/线路条件、安装视 NetLink 时段、前住户端口占用及材料协调、搬迁提前 2–3 周且视可约时段。没有把可能耗时或建议提前期写成保证完成期限。通过。 |
| T06 | [Singtel 新居宽带指南](https://www.singtel.com/personal/singtel-blog/home-broadband-singtel)，L99–138、165–207 | 入户宽带与室内 Wi-Fi、墙壁/金属/距离、开放中央位置、视情况采用 mesh；NetLink 与运营商可能分开预约。正文未引用该品牌带营销性质的速度推荐作为普遍必需标准。通过。 |
| T07 | [GOMO 终止宽带原页](https://www.gomo.sg/personal/support/account-billing/change-terminate-broadband-plan)，本轮独立解析作者同日正常取得的原始 HTML `.cache/gomo-terminate.html` 全部实质正文 | App/web chat 取消、剩余合约月份计提前终止费、归还 ONT 均直接支持。缓存 96,343 bytes，SHA256 `27747adefe88f396ffa0dd8fa9bb13f4d928b43fa25917d1076863f906be2596`；本轮是原件缓存阅读，不冒充新抓取。通过。 |
| T08 | [Apple 取消订阅](https://support.apple.com/en-sg/118428)，iPhone、找不到订阅及 More about cancelling 段 | 设置→姓名→订阅、已取消状态、至少提前 24 小时取消试用；收据查账号/计费者。正文为新加坡服务背景，未套特殊国家例外。通过。 |
| T09 | [Google Play 取消及停止续订](https://support.google.com/googleplay/answer/7018481?hl=EN)，L17–85 | 正确账号、删除 App 不取消、已付款期间仍可使用、付款计划已有余额责任不消失。未承诺取消自动退款。通过。 |
| T10 | [DBS recurring card bill payment](https://www.dbs.com.sg/personal/cards/card-services/recurring-bill-payment)，FAQ L775–799 | 商户订阅及银行卡 recurring 付款须找收费机构；即使由 digibank 设置也不由银行代取消。通过。 |
| T11 | [POSB 终止 GIRO](https://www.posb.com.sg/personal/support/bank-payment-terminate-giro-arrangement.html)，mobile 步骤及 More information | 菜单、Recurring、Delete biller、指定终止日期；身在海外而无网上银行可邮寄表格。区分终止扣款安排与终止合同/清偿欠款。通过。 |
| T12 | [SMC FAQ](https://mediation.com.sg/resources/faqs/)，只采用 IMDA ADR 第 1–7 节 | 个人用户、过去一年、≤S$10,000、合同与服务/金钱或实物补偿；OTT 与代收费（PRS 例外）等排除、法院/SCT 既有程序限制。正文用“一般代收费”等举例并近邻连完整排除清单，没有将 PRS 一律排除。14 个日历日、10/225/375 个人费用、10 押金及退款条件均相符。通过。 |
| T13 | [SMC Scheme Rules 18 April 2022](https://mediation.com.sg/wp-content/uploads/2023/10/IMDA-SMC-ADR-Scheme-Rules-18April2022.pdf)，实读 4.1.1、6.1、7.1.4–5、7.2.4 与 Annex A/B；第 13 页另实际渲染看图 | 无法线上者可办公时间交纸本；纸本对应当面调解安排；调解是协议，裁定最终有约束力。Annex A 线上/当面均由个人负担 S$10，Annex B 后续/直接裁定 225/375，与现行 FAQ 一致。通过。 |

## 全篇可用性与访问边界

全篇包含本人实名和证件不匹配、人工登记、总费用与合约检查、号码转入成功后的实际测试、端口占用、搬家衔接、设备归还及账单核对、无法线上申请争议等受阻路径。运营商例子持续标明适用公司/产品；没有把游客预付费、月费产品、后付费上限与银行 GIRO 混为同一制度。S$250 算例重新计算正确，已标教学虚构。一般检查建议没有伪装成法定义务。

作者证据仅用于定位，本轮已直接读取其对应原文。没有重试作者已止损的 IMDA、NetLink、StarHub 页。GOMO 使用保存的真实原始 HTML，未再探测失败网址。SMC PDF 在 web 中可读全文，截图工具只返引用而未提供可见图像；普通 HTTPS 下载 403 后仅一次正常 8888 代理成功，取得 116,296 bytes/13 页 PDF，SHA256 `22e1284f931a1c698fdac98ad056ee2d0aec633eac5c17caccce9f8ce4dfc837`，实际查看 `.cache/daily-telecom-smc-fees.png`。SPF PDF 文本可读，截图请求 403 后止损，其采用内容全部直接见连续正文。

未闭事实问题：无。没有执行真实注册、转网、扣款或 ADR 申请；未作全页面渲染/设备测试。交第三人编辑与主控工程接收，正文与元数据保持原样。
