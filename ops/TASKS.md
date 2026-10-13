# 任务总账

更新：2026-10-13（Asia/Singapore）。用户更换订阅号后明确续跑，目标 active；整书尚未完成。当前代理已重新建立，旧暂停现场作为历史依据保留在ops/HANDOFF-2026-10-13.md。

| 任务 | 所有者 | 状态 | 依赖与完成标准 |
|---|---|---|---|
| BOOT 工程/五部分28领域地图 | root | complete | 版本锁定、可构建、无占位、可恢复记录 |
| B01-I 身份/工作准证/NS | identity | integrated | 3篇完整稿+来源证据→异人事实→第三静态 |
| B01-C 就医/支付/CPF | care_finance | integrated | 3篇完整稿+关键资格矩阵→异人事实→第三静态 |
| B01-D 交通/历史/多语 | daily_history | integrated | 3篇完整稿+原文→异人事实→第三静态 |
| B01-R 轮换独立审阅 | 三作者轮换，root接收 | passed | I由C事实审；C由D事实审；D由I事实审；第三静态root |
| B02 租房/应急/离职/个人税/出生/入学 | 三作者共7稿 | integrated 6 / draft 1 | 身份等主概念已稳定，逐篇写审集成 |
| B03A 政府/地理/家庭日常/预算 | identity政府3；daily_history地理3；care_finance日常4；root预算1 | integrated | 11篇事实/第三编辑/生产构建与渲染通过；预算由care事实、identity第三编辑 |
| B03B 社群/历史文化/世界与不平等 | identity社群3；daily_history历史文化4；care_finance世界与不平等4 | integrated | 11篇两轮审核、生产/25路径双视口/搜索/打印通过；版本见accepted和b03bc-acceptance |
| B03C 身份住房交通数字社区余项 | root数字与社区；identity证件；daily住房；care交通 | writing / reviewing | 数字3、PR/文书2、社区3、出租车/主动出行2及租约1已集成；居留/准证管理作者自审，邻里稿identity事实审；驾驶/机场与HDB/私宅/EC/成本持续研究写作。root接第三编辑及工程；7—12领域缺口不按篇数认定完成 |
| B04 家庭教育照护 | identity家庭；care医疗/心理残障/照护/老年；daily教育高教成人学习；root多语 | assigned / researching | 执行者B03C完整写审后直接接本人B04；root communication/multilingual-family已研究。13—19全部种子、身份与生命周期分支逐条闭合；所分路径独占，必要拆页先登记 |
| B05 财务经营法律安全 | 待分派 | planned | BOOKMAP领域20—28余项逐条闭合 |
| B06 全书覆盖与情境走查 | root+独立审阅者 | planned | 全28领域种子/身份/生命周期/弱势处境逐条证明 |
| HUM 全书说人话校对 | root | planned | 按 ops/HUMANIZE.md 逐文件清理 content/ 全部94源；删说教/免责/无信息量否定，负向对冲改正面直陈；事实层零变动（diff+grep机检）；○在途draft稿待集成后补；闭环后主控 make check 与渲染验收 |

## 日期触发与来源缺口

| 触发日 | 重核对象 | 来源与受影响正文 |
|---|---|---|
| 2026-11-30 | 出租车临时附加费用结束/延期核查 | CDG current fare FAQ；taxis-phv已集成，见b03c-transport证据 |
| 2026-11-01 | BCRS小型零售商及非营利组织旧货宽限结束 | NEA2026-09-29公告；food-shopping |
| 2027-01-01 | NRIC验证滥用加强执法（private organisations须2026-12-31前停用，MDDI2026-02-03）；EP/S新申请门槛；CPF老年雇员/平台/自雇年度表；1777停用；SCFA 2027门槛待后续托管页核 | MOM eligibility；CPF缴款；SCDF EMS；work-passes/cpf-basics/getting-care |
| 2027-02-28 | 泰国Apostille公约EIF及两国适用关系 | HCCH现行状态表；documents通用出具地/目的地查询入口，正文不提前写生效 |
| 2029-01-01 | 全部mobility scooter注册阶段 | LTA PMA详页；active-mobility已集成，2027中既有设备开放也需回源 |
| 2027-01-28 | ONE Pass AI/Tech是否开放及细则 | MOM ONE Pass eligibility；work-passes |
| 2027-04-01 | PCP范围及流程变化 | MOM What is PCP；healthcare-payments |
| 2027-10 | NS医学分级与入伍批次 | CMPB FAQ；NS未来体检细页，现主文未用PES等级 |
| 2028-01-01 | EP/S准证当日起到期续签门槛 | MOM eligibility；work-passes及未来续签页 |

待研究：MediShield具体限额表的旧时期标注、MediSave门诊制度更名细节；没有把尚未取得完整新规的内容写成现行规则。HDB租客资格三短路径挑战，root一次代理也403；B02只尝试新官方URL/原件，不重复失败路径。SSO153A与MOE语言旧页也已止损，当前语言概述由其他可读主管原文支持。
来源失败无新条件不重复请求。实际源访问受限不阻塞其他章节。

## 本地与外部状态

本地提交已授权；推送、发布、DNS、机构联络和代办未授权。所有现阶段“集成”只指本地站点。

B02入学未闭：AEIS/S-AEIS逐年级年龄与CEQ、当期/下一届关键窗口、2027 P1框架主管原文和适用抽签规则。作者与独立审已明确留稿；root新官方范围定位未找到新增核心原文，见evidence/school-access-followup.md。无新URL或版本不重试。学校费用精确表留后续预算专题；不会把旧学校页更新时间当规则年度。

巴士维护已闭：LTA 2026-09-23行为规例已由daily写入公共交通、identity限定回源事实审及root第三编辑通过并随首恢复批集成；版本与旧审核继承范围见accepted.json，不重复研究未变正文。

RTS维护：care_finance实际读到LTA2026-10-02公告，载客目标改为2027年2月，仍待独立安全认证和最终监管批准；常驻项目页旧写2026年底。由B03B regional-ties承接新公告，交通余项同步交叉检查：https://www.lta.gov.sg/content/ltagov/en/newsroom/2026/10/news-releases/grantors-informed-rts-link-service-targeted-feb-2027.html 。

数字隐私权利待研究：PDPC当前概述/投诉/2022指南PDF及SSO PDPA原文挑战，普通8888已各止损，详细URL在b03c-digital证据。已有防骗稿仅采用实际MDDI原文的NRIC验证/保留限制/公私框架；查阅更正撤回同意及投诉另列privacy-data候选，不把部分覆盖记全。
