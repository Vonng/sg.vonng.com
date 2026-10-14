# HUM10-A 第三人编辑与静态审阅

审阅者：review_state_audit（/root/review_state_audit）；表达维护作者 root；限定事实审阅者 coverage_audit。实际审阅日期：2026-10-14T08:15:43+08:00，Asia/Singapore。

**结论：25 篇同版正文通过第三人编辑与源码静态审，未发现须作者修正的问题。** 通过对象是 `a7f1ffda24ebc858338f7d653c56f87dd8564fdc` 对应正文，逐篇当前正文 SHA、原事实报告、字节及具体编辑结论见 [hum10a-editorial.json](hum10a-editorial.json)。已实际读取 [hum10a-facts.md](hum10a-facts.md) 及 JSON；其 25 条通过 SHA 与当前正文逐篇一致。

逐篇读取现稿全文，并读 `4da4c93..a7f1ffd` 的全部旧、新改段；长篇按段读取，差分输出截断的 buying-private 至 active-mobility 范围已单独补读。首段直接回答，标题按事项或办理次序分节，身份、资格、费用、期限及例外能从相应段落或表格找到；删除重复提醒后，动作和主体仍完整。引用保留在相关事实附近，外链顺序与基准相同。

阅读修正：早期为缩短链接而使用的显示正则误吞了相邻链接间的部分文字，产生“公民费用缺链接”和“寺院指代缺前文”两项误判。本审已补读所有 35 个受影响原始行，确认 PR 第 66 行同时有两费用链接，节庆第 41 行有光明山名称及节庆介绍；已撤回两项意见，未要求作者改稿。缩略显示未作为签发全文证据。

## 逐篇编辑结论

| 正文 | 阅读结论 |
| --- | --- |
| `content/book/foundations/culture/inequality.md` | 首段直接区分差异与个人遭遇；居民统计分母、研究与政府立场、歧视自报和求助动作均可找到，删去的复述未影响段间承接。 |
| `content/book/foundations/geography/resources.md` | 水、电、食品按具体供应及家庭账单分节，年份与主管引用近邻；删除估算告诫后仍直接说明核账户、合同和账单分摊。 |
| `content/book/foundations/government/public-services.md` | 机构职责与提交、补件、反馈分开，表格按事项可选路；删除同部委尾句后HDB、URA的实际负责事项仍明确。 |
| `content/book/foundations/society/religion-festivals.md` | 自报信仰、节庆、宗教场所和到访分别成节，涵盖主要与较小社群；光明山节庆介绍与后文寺院指代实际存在，访客衣着和设备条件易查。 |
| `content/book/life/community/connections.md` | 参与渠道、志愿报名、具体互助分段，建议用可以、先问表达，参与确认与有酬工作权限仍明确；没有空泛网络总结。 |
| `content/book/life/community/neighbourhood.md` | 到街区先找管理和日常设施，OneService提交与跟进动作连贯；删目的尾句后仍保存旧号并记新日期。 |
| `content/book/life/community/public-facilities.md` | 图书馆会员、活动设施及文化抵用额按各自资格表述，身份和有效日期可查；删除重复否定不影响预订和付款步骤。 |
| `content/book/life/digital/accounts.md` | Singpass与SFA、Myinfo字段、丢失和诈骗支援可分别找到，人工与自助时段仍清楚；原始多链接行已补读，引用没有丢失。 |
| `content/book/life/digital/privacy-fraud.md` | 第一步止损、可疑信息与资料权利分节，公共与私人资料主体有明确分流；删除最后泛化提醒后仍有记录和更正动作。 |
| `content/book/life/digital/telecom.md` | 开户、转号、订阅、宽带和争议依使用流程排布，产品示例注明实际运营商；取消四项确认及ADR条件可找到。 |
| `content/book/life/documents/documents.md` | 原件出具地、使用地、翻译、公证和Apostille各按实际用途说明，清单及代付渠道具体；删跨题对比后仍未混合外国与新加坡原件路线。 |
| `content/book/life/documents/national-service.md` | 性别、取得PR途径及年龄节点先说明，延期、Exit Permit与担保另分节；家庭日历是可以采取的行动，正式通知期限另明示。 |
| `content/book/life/documents/permanent-residence.md` | PR、公民与REP各按人群和办理阶段组织，材料和费用表完整；原第66行同时链接PR及公民费用，恢复该原始行后撤回缺引误判。 |
| `content/book/life/household/consumer-rights.md` | 合同和购买凭证先列，产品问题、CASE与SCT分流清楚，费用、范围、送达和无Singpass路径近邻引用；删目的句后正文仍连贯。 |
| `content/book/life/household/food-shopping.md` | 采购、标签、外食、过敏清真和容器回收顺序合理，教学算例明确，日期与费用条件近邻；净含量用同单位单价表达简洁。 |
| `content/book/life/household/home-maintenance.md` | 水电开户、危险处理、持牌人员、清洁与废弃物分别选路，责任和联系方式具体；大型家电清单及预约收费分支仍可找到。 |
| `content/book/life/household/keeping-pets.md` | 养前住房许可、数量与执照、照顾、旅行及走失分节，租客与指定犬种条件清楚；预约领取和费用没有因删告诫而隐去。 |
| `content/book/life/housing/buying-private.md` | 房型、外国买家批准、Sentosa、查产权、开发商及转售各有标题，OTP与S&PA说明具体；删除广告和调解尾句后主体和合同动作完整。 |
| `content/book/life/housing/neighbours.md` | HDB、MCST、CMC、CDRT与STB各有适用事项、提交和跟进说明，新增全国调解日期明确；STB列明事项与超范围后果仍可找到。 |
| `content/book/life/housing/purchase-costs.md` | BSD、ABSD、贷款、CPF和换屋按预算环节组织，表格与虚构教学预算有明确前提；本人退款数入口和旧批次例外仍完整。 |
| `content/book/life/housing/renting.md` | 先核住房类别及准证，再核代理、合同、盖印和登记入住；房型表、WP国籍行业分支与出租证明直接可查，删概括提醒没有令八人条件失去限定。 |
| `content/book/life/housing/tenancy.md` | 维修、续租、退房押金按居住流程组织，合同模板与法定程序界线清楚；SCT范围、费用、七日送达及其他渠道仍能找到。 |
| `content/book/life/transport/active-mobility.md` | 路径许可先用表格定位，再解释设备、年龄、PMA及公交尺寸，现行与未来注册分开；删编辑标签不影响近邻LTA指引或建议语气。 |
| `content/book/life/transport/airport-checkpoints.md` | 机场、返新、马方、巴士火车、自驾、携物与渡轮分节，逐人和逐车条件清楚；当前与2027收费、未开放RTS目标均明确写日期。 |
| `content/book/life/transport/driving.md` | 境外驾照、工作驾驶、学车、租买及事故依行动排序；政府测试费与另收费用、预约日、外国续期、现行COE咨询及未来ERP日期可查。 |

## 实际静态范围与后续

源码核对通过：25 篇九项必需元数据完整，frontmatter 与基准未改、状态及核验日期有效，page_id 和标题在全部源码中唯一；无正文 H1、内部工具标记或加粗空格错误。645 个外链出现保持基准顺序，69 个内链目标在源码存在且非草稿，实际使用的内链片段与目标标题对应；50 张表的分隔行与基准一致，表格正文在全文阅读中逐张检查。机器检查只支持这些静态结论，没有代替文章阅读。

本审没有重新回源全页事实；同版差分事实采用 coverage_audit 的正式通过报告，未变事实沿用各页原独立事实审的限定范围，未提高旧 verified。没有修改正文、accepted、配置或共享总账，没有 stage、提交、共享构建、浏览器实渲染、桌面/手机目视或打印目视。

**待主控：** 按这 25 条最终正文 SHA 接收本次表达维护，执行生产门禁并实际检查渲染及选定桌面、手机、菜单、搜索、明暗和打印范围；工程接收不由本报告代签。
