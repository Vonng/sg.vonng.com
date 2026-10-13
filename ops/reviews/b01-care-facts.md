# B01 医疗与 CPF 独立事实审

审稿者：daily_history；作者：care_finance。实际回源日期：2026-10-13（Asia/Singapore）。本记录只作独立事实审核，不替代第三人编辑静态审、主控构建或渲染检查。审稿期间正文由原作者修订，审稿者未修改正文、未提升元数据状态。

## 审核方法与范围

通读三篇初稿及修订稿，按每节的规则、金额、资格、时间和行动入口查阅主管详细页；作者证据仅用于定位。下列链接均由本审稿者实际打开并阅读相关正文；CPF 2026 雇员与自雇 PDF 读取结构化表格正文。未用搜索摘要替代原文，未进入个人账户、拨打电话、提交预约或实际运行保单理赔。

全文审核覆盖 `getting-care.md` 的普通就医、专科登记、急救与照护求助；`healthcare-payments.md` 的身份矩阵、补贴、储蓄、保险、外籍雇佣分支与账单困难；`cpf-basics.md` 的身份、雇员费率、PR 阶段、自雇、平台工作、账户用途、退休与缴款核对。操作建议如准备药物清单、书面询问和保存材料按建议理解，不视为主管强制规定。

## 发现、处理与复核

1. **CHAS 转介必要条件缺漏：已修。** SGH 原页除不指定医生外，还要求病症在 CHAS 涵盖范围，且不能直接转介 specialised investigations 或 Allied Health。已通知作者与 root；修订稿补全两项，并保留 SGH 个案范围。本审稿者重新对照源文及修订段，条件吻合。
2. **Work Permit 医保购买例外：已修并复核。** MOM 原页明确：同时持 DP，且已有符合最低要求、覆盖 WP 全有效期的保单时，无须另买 MI。最终段落已补齐，范围限 WP，没有扩展为 S Pass 通例。
3. **证据生效日：已修并复核。** 作者证据把公立急性住院补贴表生效日记为 2025-01-01；MOH 表实际写 2024-10-01。作者已更正证据；正文未写该日期，故不影响正文断言。
4. **顺带静态发现：已修并复核源码。** 一轮加粗修改在 `NurseFirst`、`AIC Link`、CPF 生效日与 S$750 的分隔符内加入空格，会妨碍 CommonMark 加粗。作者已逐处修正，最终源码内侧无空格；本记录不将此视作完成渲染检查。

## 就医与医疗支付回源

| 断言与审核条件 | 实际读取原文及结论 |
| --- | --- |
| 普通初诊、慢病和预防服务由 GP／polyclinic 开始，需要时转介 | [MOH Primary care](https://www.moh.gov.sg/seeking-healthcare/find-a-facility-or-service/types-of-medical-facilities-and-services/primary-care-services/) 的基层服务、GP 和 polyclinic 段支持。正文未抄页面可能过时的机构数量。 |
| SingHealth 预约、电话与无名额替代入口 | [SingHealth Before Your Visit](https://polyclinic.singhealth.com.sg/clinic-visit/before-your-visit) 的预约方式与无预约安排；[HealthHub 无预约名额问答](https://support.healthhub.sg/hc/en-us/articles/15754273034649-What-should-I-do-if-I-am-unable-to-secure-a-Doctor-Consultation-appointment-at-a-polyclinic) 全文。6643 6969 限 SingHealth；无名额可找 GP、联系中心或现场询问，正文未承诺当日一定能完成诊疗。 |
| 外籍收费类别、看诊材料与指定医生 | [SingHealth Charges and Payment](https://polyclinic.singhealth.com.sg/clinic-visit/charges-and-payment) 实有 Non-Resident 列；[SGH Planning for Your Visit](https://www.sgh.com.sg/clinic-visit/planning-for-your-visit) 的 Patient Classification 与 What do I bring 支持证件、转介、药物、检查记录和指定医生私人类别。正文未使用该院通用页“私人 GP 均私人”的笼统表述覆盖 CHAS 例外。 |
| 补贴 SOC 转介资格与 CHAS 例外 | [MOH SOC subsidies](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/subsidies-for-specialist-outpatient-care-at-public-healthcare-institutions/) 与 [SGH GP Referrals](https://www.sgh.com.sg/community-care/community-health-services/for-general-practitioners/gp-referrals) 的 CHAS referrals 段。合资格来源、指定医生影响、CHAS 覆盖病症及不能直接转介检查／辅助医疗均已核对。 |
| 995 急症、电话资料、NurseFirst 与 1777 时序 | [SCDF EMS](https://www.scdf.gov.sg/home/about-scdf/emergency-medical-services) 紧急症状、来电信息和非急症运输段。呼吸困难、失去意识、严重出血、疑似中风属所列紧急情况；6262 6262 与私人救护车名单入口有明文。1777 停用日为 2027-01-01，正文明确未来生效，未当作已经停用。 |
| AIC Link 与中文电话照护咨询 | [AIC Contact Us](https://www.aic.sg/contact-us) 的 Visit Us、Call Us：线下咨询和 1800-650-6060；服务语言含 Chinese。未因此推导照护服务或补贴自动资格。 |
| 公立补贴按身份、服务与经济状况区分 | [MOH Acute Inpatient subsidies](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/subsidies-for-acute-inpatient-care-at-public-healthcare-institutions/) 的身份、PCHI／AV 和病房表；[MOH SOC subsidies](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/subsidies-for-specialist-outpatient-care-at-public-healthcare-institutions/) 的 2025-01-01 表。SOC 公民 30%—70%、PR 25% 与零收入家庭 AV 条件吻合；正文未把旧 AV 估值年度沿用为 2026，未把一项比例套全账单。 |
| CHAS 公民资格、申请制和纸本替代 | [CHAS Eligibility](https://www.chas.sg/Applying-for-CHAS/Eligibility)、[CHAS FAQ](https://www.chas.sg/FAQ) 的 General、Applying、Usage：公民申请、21 岁主申请人、Singpass、纸本、PA 及 PG／MG 卡待遇、按诊所费用减补贴。1800-275-2427 吻合。未把家庭中的 PR／FIN 成员当成受益卡持有人。 |
| LTVP+ 与一般 LTVP／DP 区分 | [ICA LTVP+ 原始说明及医疗 FAQ](https://www.ica.gov.sg/news-and-publications/newsroom/media-release/351) 明确住院、接近 PR，未含日间手术／SOC／polyclinic；[MOH 2025-03-07 COS speech 第 30 段](https://www.moh.gov.sg/newsroom/speech-by-mdm-rahayu-mahzam--minister-of-state--at-the-ministry-of-health-committee-of-supply-debate-2025--on-friday-7-march-2025/) 为较新交叉证据，支持与公民父亲结婚的 PR／LTVP+ 母亲分娩住院按公民水平。未用 2012 页的旧工作许可流程。 |
| MediSave 项目、机构、亲属与授权 | [MOH MediSave](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medisave/)（2026-04-16）的用途、家属和 MCAF 段。配偶／父母／子女可为外籍，祖父母／兄弟姐妹须 SC 或 PR；家属付款用 MCAF(S)，具体治疗、限额与余额另核。正文没有把普通门诊一律列入可支付范围。 |
| MediShield Life 自动纳入、PR 折算和 IP 流程 | [MOH 自动纳入问答](https://ask.gov.sg/moh/questions/cm2vqpvig001snhmpx9wcmvgi)；[MOH Claims](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medishield-life/how-to-make-a-medishield-life-claim/)（2026-06-01）的申请步骤、B2／C 设计、PR／私人账单折算、deductible／co-insurance。当前理赔页表旁残留 2021 适用日期，正文只解释机制，未依赖疑似混用时期的金额表。 |
| 商业保险、自付、LOG 与离职后保障 | [MoneySense Health insurance terms](https://www.moneysense.gov.sg/health-insurance-terms-know-what-you-re-paying-for/)（2026-09-28）的自付、限制、除外、更新与就医前提问段支持。正文未沿用其 rider 段一般表述，不将 LOG 当无条件全额理赔。 |
| EP 无普遍强制购买要求；S Pass／WP 的雇主义务 | [MOM EP FAQ](https://www.mom.gov.sg/faq/employment-pass/are-employers-required-to-buy-medical-insurance-for-employment-pass-holders) 全文；[S Pass MI](https://www.mom.gov.sg/passes-and-permits/s-pass/medical-insurance)、[WP MI](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/medical-insurance) 的保障及 enhanced MI 段。S$60,000、住院／日间手术、保费不得转嫁、S$15,000 以上 75%／25% 为保险人与雇主安排吻合；工人共付另受薪资 10%、期限与合约／同意等条件约束，正文指回该条件并未擅作工人固定 25%。WP 同持 DP 已合规投保例外见上方修订项。 |
| PCP 的宿舍／行业与人员边界 | [MOM What is PCP](https://www.mom.gov.sg/primary-care-plan/what-is-pcp)：可容 7 人以上宿舍或 CMP，WP（不含 MDW）／S Pass；2027-04-01 的预告为将来变更。正文所述为 2026 当前范围，没有泛化全部工作准证或家政人员。 |
| MediFund 与其他困难求助 | [MOH MediFund](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medifund/) 的四项资格及 MSW 申请；[MOH LTVP／DP appeals 答复](https://www.moh.gov.sg/newsroom/appeals-for-medical-subsidy-for-long-term-visit-pass-and-dependant-pass-holders/)（2021-02-01）的院方慈善资金和分期。正文明确公民资格，不给 PR／外籍 MediFund 权利；对其他路径只建议提出困难、由社工评估，没有承诺结果。 |

## CPF 回源

| 断言与审核条件 | 实际读取原文及结论 |
| --- | --- |
| CPF 对象、雇佣形式与豁免 | [Who should receive contributions](https://www.cpf.gov.sg/employer/employer-obligations/who-should-receive-cpf-contributions) 的定义与豁免；[Saving as an employee](https://www.cpf.gov.sg/member/growing-your-savings/cpf-contributions/saving-as-an-employee)（2026-10-06）的 rights。公民／PR、月工资超过 S$50、兼职／临时／合同、特定学生和 UN 机构例外吻合；外籍非 PR 不套雇员规则。 |
| 2026 五档雇员费率 | [2026 contribution rates PDF](https://www.cpf.gov.sg/content/dam/web/employer/employer-obligations/documents/CPFcontributionratesfrom1Jan2026.pdf) 第 1 页和 [How much contributions to pay](https://www.cpf.gov.sg/employer/employer-obligations/how-much-cpf-contributions-to-pay)。逐格复核雇主／雇员／合计五行，均正确；限定私营及非退休金制公营、SC／PR 第三年起、月工资超过 S$750。生日次月改档、低工资员工零／渐进条件已核。 |
| 工资示例与计算器 | 虚构 30 岁／S$4,000 示例独立重算：800、680、1,480、3,200，算术一致；未将雇主份额扣雇员。实际打开 [官方计算器](https://www.cpf.gov.sg/employer/tools-and-services/calculators/cpf-contribution-calculator/) 的适用范围、2026 说明和身份／日期／OW／AW 字段；没有声称实际提交或通过真实账户验证。 |
| OW／AW 上限与当前年份 | [OW ceiling FAQ](https://www.cpf.gov.sg/service/article/what-is-the-ordinary-wage-ow-ceiling-mbr)（2026-08-14）；[What constitutes wages](https://www.cpf.gov.sg/employer/employer-obligations/what-constitutes-wages-for-cpf-contributions)（2026-10-06）定义及公式。2026 OW 月 S$8,000、年 S$102,000、AW 按须缴 OW 扣减吻合。2027 年长费率预告在 How much 页有明文，正文未放入 2026 表。 |
| PR 阶段、较高费率、换雇主 | [CPF 新 REP 后保留 PR 的阶段说明](https://www.cpf.gov.sg/service/article/i-have-successfully-applied-for-a-new-re-entry-permit-and-retained-my-singapore-permanent-resident-status-how-will-this-impact-my-cpf-contributions) 的 Entry Permit 日期与三阶段表；[较高费率](https://www.cpf.gov.sg/employer/employer-obligations/how-much-cpf-contributions-to-pay)；[换雇主 FAQ](https://www.cpf.gov.sg/service/article/my-singapore-permanent-resident-employee-contributed-cpf-at-a-higher-rate-than-stipulated-ones-in-his-previous-employment-am-i-required-to-pay-cpf-at-the-higher-rate)。各周年月末、F/F 或 F/G、共同申请与新雇主重新申请符合原文。 |
| 自雇 NTI 与强制门槛 | [Saving as self-employed](https://www.cpf.gov.sg/member/growing-your-savings/cpf-contributions/saving-as-a-self-employed-person)（2026-06-05）；[MediSave 门槛 FAQ](https://www.cpf.gov.sg/service/article/why-do-i-need-to-make-medisave-contributions-as-a-self-employed-person)。NTI 扣准许费用／资本津贴／营业亏损，超过 S$6,000；不能按发票总额判断。 |
| 自雇 2026 年龄、费率与办理 | [2026 SEP MediSave rates PDF](https://www.cpf.gov.sg/service/sfc/servlet.shepherd/document/download/069IW00000G4S1QYAV) 两页：非退休金者按年初年龄四档，NTI 超过 S$18,000 时 8%／9%／10%／10.5%，各有上限；低段公式与 pensioner 另表存在。自雇主文的 IRAS 评税后通知、通知日起 30 天、分期入口均核实。 |
| 多种劳动收入并存 | [SEP and employee/platform FAQ](https://www.cpf.gov.sg/service/article/do-i-still-have-to-contribute-to-my-medisave-if-i-am-a-self-employed-person-and-an-employee-and-or-a-platform-worker)（2026-02-04）：雇员已有 CPF 不免掉其他 NTI 义务；工作年 2025 起剔除平台已申报净收入。正文只写基础分支，没有承诺高收入限额个案计算。 |
| 平台工定义、出生年份、opt-in、FEDA | [Saving as a platform worker](https://www.cpf.gov.sg/member/growing-your-savings/cpf-contributions/saving-as-a-platform-worker)（2026-05-26）的 Definition、How much、Other income；[Which platform workers should receive CPF](https://www.cpf.gov.sg/employer/platform-operators/obligations/which-platform-workers-should-receive-cpf-contributions)（2025-08-01）。载客／配送且受平台管理，1995-01-01 分界、较早出生不可撤回 opt-in、不 opt-in 仅 MediSave 且无平台份额、按交通工具 FEDA 和每月提交一致。正文不把任意自由职业平台都套入，不使用普通雇员 37% 估平台工。 |
| OA／SA／MA 与 55 岁 RA | [CPF overview](https://www.cpf.gov.sg/member/cpf-overview) 的 Accounts 与 Uses；[Reaching 55](https://www.cpf.gov.sg/member/retirement-income/milestones/reaching-age-55) 的 creation/closure、SA 再 OA 向 RA 转入 FRS 规则。正文概念解释正确，没有推导 55 岁全额自由提款。 |
| 房屋用途与售房退 CPF | [Using CPF to buy a home](https://www.cpf.gov.sg/member/home-ownership/using-your-cpf-to-buy-a-home) 的用途及限额；[Sales proceeds](https://www.cpf.gov.sg/member/infohub/educational-resources/sales-proceeds-after-selling-your-home) 的 refund、market value 条件。本金与应计利息、扣未清房贷后不足且按市价出售时不现金补差吻合；正文没有把较旧文章的其他 SA 细节带入 2026。 |
| CPF LIFE、65—70 与离境身份 | [Who can join LIFE](https://www.cpf.gov.sg/service/article/who-can-join-cpf-life)（2026-07-09）、[Reaching 65](https://www.cpf.gov.sg/member/retirement-income/milestones/reaching-age-65)：1958 年或以后、开始月领时 S$60,000，自动纳入与自愿参加分开，65—70 月领。全篇既已限定 SC／PR，未误给非居民身份权利。[On leaving Singapore](https://www.cpf.gov.sg/member/account-services/cpf-asset-management/on-leaving-singapore) 的关闭资格明确看是否仍为 SC／PR，正文仅作进一步手续入口。 |
| 缴款期限、核对和举报 | [Unable to pay CPF on time](https://www.cpf.gov.sg/service/article/what-should-i-do-if-i-am-unable-to-pay-my-employees-their-cpf-contributions-on-time)（2026-03-18）明确月末到期、次月 14 日执法及非工作日顺延；[Saving as employee](https://www.cpf.gov.sg/member/growing-your-savings/cpf-contributions/saving-as-an-employee) 的 Verify、Facing issues 支持工资单对照、先询雇主、保存材料和举报。 |

## 版本、可用性与边界

结论：以下最终版本三篇均通过本次独立事实审；已发现的两处必要资格／例外缺漏均关闭。作者仍保留 `written / draft:true / verified:"" / reviewed_by:""`，由主控在第三人静态审与集成检查之后决定提升状态。审稿者已在最后修订后读取实际文件，重新核对修改段及计算哈希。正文 SHA-256 按 UTF-8 字节中第二个 `---` 后全部内容计算，包含正文前的换行，不包含 frontmatter。

| 文件 | 完整文件 SHA-256 | 正文 SHA-256 |
| --- | --- | --- |
| `content/book/people/healthcare/getting-care.md` | `33c1ab0a88ab67f29704ea4a840f6889c9a2e36d2bf12d3363a31b4257b5ea34` | `b5bb781c2fc6aeb13e019bd93db531fe3763eecb8d19cd2ace793bc4efb850db` |
| `content/book/people/healthcare/healthcare-payments.md` | `a0c2291e66e44d34814181f6ca78281c56a526fd4b9e80ce6f066221b92e1bee` | `3e86edad298db597fb2f5fe7f6bef120fa0fd48e5702f38c58ef005a227e38a8` |
| `content/book/work/finance/cpf-basics.md` | `0d3ee17d1a08807a33436178474b17505ab8af0fef64dec6350faf72ddf8dc7f` | `a02f942c16e6f1bea943646ec62c36555d998b504d552d07d2879b5dcb6966e0` |

三页首段能说明入口和判断顺序；资格、操作、受阻后的求助有具体指向。所有四个站内链接目标正文实际存在。金额用新元标识，当前／未来日期分开；两处教学情境明确虚构。未发现医疗诊断或用药越界建议。本文是三篇基础主题的事实通过范围，不等同医疗、保险、养老或 CPF 整个领域已经完成。

本审未测试真实预约、保险公司预批准、账户计算与提交、热线可达性，也未运行 Hugo 或进行浏览器视觉检查。MediShield 金额表时期标记疑点仍须留在后续专文研究队列。2027-01-01 重核 1777、年长雇员／平台费率和自雇年度表；2027-04-01 重核 PCP 范围与操作。前述事项不以本次查阅日期代替将来政策生效日。
