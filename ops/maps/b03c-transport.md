# B03C 交通来源与任务地图

作者：care_finance；研究起点：2026-10-13，Asia/Singapore。已复读 PROMPT 第 10 领域种子、总地图与既有 public-transport 正文。本文件先于新正文建立；下表为研究与覆盖分配，不表示已核验事实。

| 拟写正文 | 具体问题与必需分支 | 优先详细原文 |
| --- | --- | --- |
| `content/book/life/transport/driving.md` | 访客／长期居留／公民 PR 的外国驾照与转换、工作驾驶；首次学车；租借与买车的资格和合同；COE／注册税／路税／ERP／停车／保险的成本；事故救援、警方及保险报告不同程序；申请或费用受阻 | SPF Singapore Driving Licence、学车与事故；LTA OneMotoring 买卖／COE／税／ERP；HDB／URA 停车；GIA Motor Claims Framework |
| `content/book/life/transport/taxis-phv.md` | 路招／站点／预订，计价与附加费；幼童、轮椅、行李；无 App 的入口；取消、遗失物与争议；跨境用车权限 | LTA Getting a Ride／持牌平台与营运者／儿童安全；机场官网；营运者实际电话与无障碍细页 |
| `content/book/life/transport/active-mobility.md` | 步行、自行车、PAB、PMD、PMA 分清可行道路与路径、限速、年龄／测试／注册和设备标准；2026 PMA 新规；夜间与共享空间安全；租车停车、上公交、事故和投诉 | LTA Rules & Code of Conduct、2026 年设备图和 PMA 细页；OneMotoring PAB；SPF 道路规则；NParks 指定路线 |
| `content/book/life/transport/airport-checkpoints.md` | 机场到离开、末班后及航站楼间转换；柔佛公路／巴士／火车、渡轮出境；逐人护照签证准证／SGAC 与货物清关；自驾车辆授权／VEP／保险／燃料；队列与错过班次；RTS 尚未开通 | CAG 官方路线；ICA 入境及关卡细页；Customs 旅客；LTA cross-border／VEP；KTM／渡轮营运者；LTA 2026-10-02 RTS 最新公告 |

拆分理由：原 driving 同时要求“自己驾驶与长期车辆责任”和“作为乘客叫车”，读者行动目标与资格不同。增加 taxis-phv，原 driving 保留完整驾照、购租和事故链；机场页只链接已经落盘的乘车正文。其余三条总地图路径不变；不生成 consumer-style 混合占位页，也不以页数作为覆盖标准。

既有 public-transport 已覆盖 MRT／LRT／巴士、支付换乘优惠与无障碍，本批不擅改冻结正文。LTA 2026-09-23 巴士行为新规须实际回源后给主控维护建议；RTS 新公告与旧项目页年份冲突必须按宣布日期与审批条件明确记录。主动出行设备携带公交只采用本次可读详源。

方法：先读官方当前入口，再读支持条件的详细原文，近邻引用；来源失败仅普通 HTTPS 与一次正常 8888 代理止损，不绕挑战。具体外地入境资格由目的地主管来源决定；新加坡准证与可跨境载客车辆牌照分别核对。实际采用、时间与分支见 `ops/evidence/b03c-transport.md`。

## 2026-10-13 恢复状态

- `taxis-phv.md` 已成完整稿，作者全文自审及轻量静态检查通过，9,496 bytes，完整 SHA `215eabebd8a4ad24c6b33408fd09090f614cbedab2a1a1ad088eed5bd5074fbf`；daily_history独立事实及全篇可用性通过，冻结交root第三编辑／集成。无App叫车和客服、特殊乘客、失败分支与跨境许可入口已闭合。
- `active-mobility.md` 完整稿已作者全文自审和轻量静态检查后冻结，15,274 bytes，完整 SHA `005539825c605484920a51a1853a1a4f30c082d5d44c6425849b60a1474237d8`；daily_history独立事实及全篇可用性通过，交root第三编辑／集成。路径图本人再次目视、PMA／PAB／理论测试／未16监督细则均实际补读。
- `driving.md` 已正式 `integrated / draft:false`。作者交审原版25,268 bytes、完整SHA `ab6012ac0019ba7b51555a32fcd1c731e55e8579a128a964f3fa8969229a7b11` 保留于证据；daily_history独立事实通过，报告 `ops/reviews/b03c-driving-facts.md`，正文SHA `cedec6e48c11a3e872a8fb68c9d9dbcde0585f7b316c8f75c34d4ca3171ddc51` 未变。root于2026-10-13完成第三编辑、生产构建、实际桌面／手机及148页打印样本并接收，本人未构建或改核验日期。首次学车、COE/PARF/买卖/保险事故、ERP/停车/路税及身份和工作驾驶完整，未来2027—28变化分开。
- `airport-checkpoints.md` 已完整写成、作者全文通读自审和轻量静态核对后冻结，29,190 bytes；完整SHA `ec821cce64783ca5af42174c3eef903e98a7bfe846c2d8fc1d3c5ae269f2ad01`，正文SHA `9772d1022f9bca2a5542537d7237fcba09d391a0761c3bf90b9c8b1067acd90c`。仍为written/draft:true/核验空，交daily_history独立事实、root第三编辑。覆盖樟宜各航站/公共及转机区/深夜与无App；逐人护照/返新准证/SGAC及MY签证MDAC；Woodlands与Tuas公共巴士、2026CW单程票App条件、KTM网页和两站不同柜台/闸门；两国注册车辆VEP、身份、RFID/Autopass、油箱/路税/保险/收费与2027未来变更；Customs购物/旧物/酒烟；HarbourFront迁址/TMFT与渡轮/无障碍/印尼普通及PR家属STP特别免签/All Indonesia；中断与事故、2026-10-02 RTS新目标。T38—T56及实际缓存/图/PDF采用边界已记证据，不缩跨境自驾/外籍分支。
- LTA 9月23日巴士行为新规已读并已向root报告旧公交维护建议，本人未改冻结 public-transport。

本次机场作者交审时，taxis-phv/active-mobility/driving实际正文元数据已为root正式integrated；上列出租车/主动出行交审信息保留原作者锁版记录，未重设核验日期。机场只已完成作者轮，不表示异人审核或工程接收完成。

T44独审反馈后已更正完整FAQ缓存定位及马籍柜台付款对象，最新机场锁版以上表为准；其他国籍柜台支付未由马籍项推定，网页购票/客服电话保留。事实审仍由daily_history继续，未自标通过。

daily_history随后完成ops/reviews/b03c-airport-checkpoints-facts.md，29,190bytes/ec821cce/9772d102最终锁版已独立全文及回源事实通过，无其他正文漂移；图/PDF采用页真实再次目视。root已完成第三编辑、生产构建、实际浏览器与打印检查，并于2026-10-13接收为integrated/draft:false；当前完整SHA为145ebcb7496c9c34f77b5b8a56aff74d99a9cbf3f3b93e301f4f0ea6ceaa3e1b，正文SHA仍9772d1022f9bca2a5542537d7237fcba09d391a0761c3bf90b9c8b1067acd90c。最终生产门禁、public同步及本地提交由root执行；本作者只按root接收通知更新地图，不代称亲自构建或浏览。上段保留作者与事实阶段的历史进度。
