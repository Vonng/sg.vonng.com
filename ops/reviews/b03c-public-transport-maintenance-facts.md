# B03C 公共交通2026巴士行为规例独立事实复核

作者 daily_history；审阅人 identity；查阅及复核日期 2026-10-13（Asia/Singapore）。结论：新增“车内饮食、音量与车长提醒”小节及前后乘车上下文通过独立事实复核，没有待修的事实问题。第三编辑、构建与实际渲染由主控接收。

| 当前正文 | 完整SHA256 | 统一正文SHA256 |
| --- | --- | --- |
| `content/book/life/transport/public-transport.md`，9,692 bytes | `83ae3bfee3bf13b5d3ef434077dc0f90b419c63dffedee21eb7b077570be33ef` | `ea39157484fc03e113703da88fedbcdf55d5bfabf55de80aa34a4815a351f56e` |

正文算法为UTF-8 `text.split("---", 2)[2]`，保留frontmatter后原始空白。实算与作者交付一致。本次未改正文或元数据。

## 实际回源与结论

独立重新打开 [LTA：New Regulations on Public Buses and at Bus Interchanges/Terminals](https://www.lta.gov.sg/content/ltagov/en/newsroom/2026/9/news-releases/-new-regulations-on-public-buses-and-at-bus-interchanges-termina.html)，正文L5—16全部实质公告实际阅读，另核发布及更新日期为2026-09-21。未以作者摘要或搜索结果签发。完整工具原文返回保存于已忽略的 `.cache/b03c-public-transport-independent-source.txt`，不是原始HTML。

- L8—11支持2026-09-23生效、公共巴士及转换站/终点站的范围、车内饮食、乱丢垃圾和把脚放座位或大音量造成滋扰。本文小节聚焦公共巴士，与主文scope一致；使用耳机为减少滋扰的建议，没有声称任何声音都构成违法。
- L12—14明确获授权票检及转换站人员可发Administrative NOO，LTA随后调查；车长没有同等签发权，仍可按Conditions of Carriage劝止并要求拒不配合者下车。正文没有写成车长自行开罚单。
- L15支持身体或心理健康相关情形的酌情、公平处理。向工作人员说明需要是沟通建议，没有把该声明扩为当然豁免。
- 500及5,000最高处罚在原文属于不同类别。正文没有引入罚额，不产生罚款范围或首次/重复违规的误配。

## 版本与复核范围

全文阅读现行主文，重点检查新段之前的上下车刷卡、之后的换乘及后面的无障碍帮助。实际 `git diff` 证明本轮仅增加该小节，旧正文和元数据未改变；新段不改变既有付款、优惠、换乘和申诉规则。旧正文复用 `ops/reviews/b01-daily-facts.md` 已完成审查，本次没有重开这些原件或宣称重新核验全部公共交通规则。

当前原有integrated/draft:false元数据只反映上一版接收历史，不能独立证明此次新增段已通过主控工程门禁。请主控依上述最终SHA完成第三编辑、生产构建及有风险范围的实际渲染后记本轮接收。本报告没有构建、实际乘车测试或浏览器检查。
