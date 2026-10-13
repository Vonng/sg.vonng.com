# B02 离职与个人税务独立事实审

审阅者：care_finance；作者：identity；实际回源日期：2026-10-13（Asia/Singapore）。结论：下列三个锁定版本通过本轮独立事实审。正文只读，未改元数据、未构建、未操作账户或联系机构；第三人静态审和主控实际渲染仍须另做。

## 锁定版本

正文 SHA 按 `bytes.split(b'---\n', 2)[2]` 计算，保留全部原始空白；本报告落盘前独立重算，与作者最后交付一致。

| 文件 | 完整 SHA-256 | 正文 SHA-256 |
| --- | --- | --- |
| content/book/work/employment/leaving-job.md | 996ea262ce3b3a1edb6d4a1005c2187a849ae1c2f095108e72ef293259c4486d | 42ff50c721cb1705de38013d98c78ffe669b9404bedee090a52b96bfa143d1ae |
| content/book/work/tax/personal-tax.md | 2f46f8e5be7e5822c6ff8e98b00e77e451b8c19c78ebb2484b5aca0d2f257385 | c0301bdc53dc1db3d13f300ce60e8251dab6da100e04f53003f63b51e4a88edc |
| content/book/work/tax/leaving-singapore.md | 583b52a5b4aaefea472e48e6fb115c13801fc84aea3c73c25d3bf7720821bb74 | 165f4a7d15392de3b24f4dcc5d935a2498153e8fe32ed6e3bb6bbd4a95c5bccd |

## 方法与发现

完整通读三稿。作者证据表只用于定位，独立打开 MOM/TADM/IRAS 共33个详细网页，实际阅读支持正文的规则、表格与FAQ，长IRAS页面越过导航后分段读取。现有B01特殊准证页仅作交叉引用，未把它列作本轮新回源。没有把搜索摘要或页面目录当作详细证据，没有运行宏计算器或声称核过每个个案。

未发现需要修改的规则、日期或资格事实。初审顺带发现个人税一处、税清五处加粗分隔符内部尾空格，已通知作者及主控；作者修复后，审阅者通读修改位置并重算SHA，六处问题关闭。上述修订只改标记空白，事实结论不变。

## 离职、工资与争议：独立读到的原文

| 实读来源 | 对照结果与边界 |
| --- | --- |
| [MOM 雇佣法覆盖](https://www.mom.gov.sg/employment-practices/employment-act/who-is-covered) | 本外籍、全兼职及一般排除相符；没有把Part IV工时薪资门槛扩成整部雇佣法的门槛。 |
| [终止雇佣](https://www.mom.gov.sg/employment-practices/termination-of-employment/what-is-termination)、[有通知期终止](https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-with-notice)、[无通知期终止](https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-without-notice) | 辞职权、书面通知、双方通知期、四档默认期限、月和日的计算、休年假与抵扣、misconduct未用假例外均吻合。额外合同赔偿没有被代通知金规则抹去。 |
| [支付工资](https://www.mom.gov.sg/employment-practices/salary/paying-salary) | 四行最终薪资期限及佣金合同边界准确。MOM税清暂扣30日概述不被写成无条件自动放款；具体税清动作另核IRAS。 |
| [不当行为调查](https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-due-to-misconduct)、[不当解雇](https://www.mom.gov.sg/employment-practices/termination-of-employment/wrongful-dismissal) | 调查与陈述机会、歧视/剥夺福利/惩罚行使权利及非自愿辞职路径有原文支撑。 |
| [负责任裁员](https://www.mom.gov.sg/employment-practices/retrenchment/responsible-retrenchment)、[补偿是否强制FAQ](https://www.mom.gov.sg/faq/retrenchment/can-my-company-terminate-my-employment-contract-without-paying-any-rb-and-if-employers-must-pay-rb) | 两年资格、较短酌情、每年两周至一月的常见基准，与“并非一律法定强制给付”一起写，保留合同和协商条件。 |
| [TADM雇员申索](https://www.tal.sg/tadm/eservices/employees-file-employment-claim) | 离职欠薪六个月、在职一年、追索期间、一般wrongful一个月、经理执行人员六个月及怀孕三个月服务/产后两个月分支相符；工会、家政排除、缴费及破产路径有区分。 |
| [MOM联系](https://www.mom.gov.sg/contact-us) | 实际页更新2026-08-19；6438 5122及工作日08:30—17:30相符。 |

## 准证取消和家属：独立读到的原文

| 实读来源 | 对照结果与边界 |
| --- | --- |
| [EP取消](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass)、[S Pass取消](https://www.mom.gov.sg/passes-and-permits/s-pass/cancel-a-pass) | 一周取消期限、最长90日/30日STVP、相关家属、停止工作和遣返费用书面例外准确；稿件要求看实际签发期限。 |
| [非家政WP取消](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/cancel-a-work-permit)、[家政WP取消](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/cancel-a-work-permit) | notice末日与家政最后工作日区别准确；14日/两周离境和Special Pass随登记航期，转聘另路，没有套EP停留天数。 |
| [EP换工作](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep)、[新批准不自动取消旧证](https://www.mom.gov.sg/faq/employment-pass/if-an-ep-or-s-pass-holder-changes-jobs-is-the-existing-pass-automatically-cancelled) | 新雇主申请、申请前无需先取消旧EP、新准证获批不自动取消旧准证，均吻合。 |
| [家政合同](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/employers-guide/contracts-and-safety-agreement)、[家政/中介争议](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/employers-guide/resolving-disputes) | 家政合同通知和代金不套EA默认表；移工本人欠薪与雇主—中介服务合同争议分开。 |

## 年度个人税：独立读到的原文

| 实读来源 | 对照结果与边界 |
| --- | --- |
| [IRAS居民认定](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency) | YA与收入年度、SC/PR通常居住、183日/连续三年/跨两年工作路径、准证一年初步处理及税清复核准确；两年规则须实际跨年工作。周末假期和临时出差计入，不能只数在境日来套60日免税。 |
| [个人税率](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individual-income-tax-rates)、[非居民专业人员定义](https://www.iras.gov.sg/taxes/withholding-tax/payments-to-non-resident-professional-(consultant-trainer-coach-etc-)/non-resident-professional) | YA2024起首20,000应课税收入0%、顶档24%、非居民雇佣15%或居民税较高者相符；独立专业服务不因EP职位名称而成立。 |
| [2026报税步骤](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/understanding-my-income-tax-filing/tax-season-2026---all-you-need-to-know)、[哪些个人须报税](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/understanding-my-income-tax-filing/individuals-required-to-file-tax) | 2026-03-01至04-18明确作已公布年度实例；22,000/6,000和非居民分支、通知优先、SFA、NFS/D-NOA、AIS与IR8A的3月1日时点及不重复填报准确。 |
| [2026税单](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/understanding-my-income-tax-filing/tax-season-2026---about-your-tax-bill) | 发单时段、30日更正、一个月缴款且异议仍付、最多12期或年度GIRO、PIP和80,000个人减免总上限有原文。页面更新2026-08-14，未套未来年度。 |
| [雇员信息与联系资料](https://www.iras.gov.sg/taxes/individual-income-tax/employers/information-to-share-with-employees)、[应税收入分类](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/what-is-taxable-what-is-not) | 联系方式更新和收入分类入口有效；正文没有推定所有境外付款或某类银行账户免税。 |

## IR21：独立读到的原文

| 实读来源 | 对照结果与边界 |
| --- | --- |
| [税清资格和FAQ](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees) | 非公民、PEP/ONE、PR留新LOU及失业例外、海外派驻另判、学生必修实习两条件、合并/集团转调通知、追加收入和禁止平时逐月积攒税款均准确。PR派驻FAQ复用workpass字句，正文未据此要求PR办工作准证。 |
| [四类免税清实例](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees/summary-of-scenarios-where-tax-clearance-is-not-required) | 60/183日、连续两年和三年、每年少于21,000、2007起两年规则及共同的离职当年/前一年无另一雇主条件完整保留。 |
| [税清六步](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/getting-tax-clearance-a-step-by-step-guide) | 提前一个月、Corppass授权、即时辞职解释不足通知、从知悉起扣全款、当年/前未报收入和申报后指令，有支撑。没有把获准停留期与税清期限合并。 |
| [非公民雇员税清](https://www.iras.gov.sg/taxes/individual-income-tax/employees/scenario-based-faqs-for-working-in-singapore-and-abroad/tax-clearance-for-non-singapore-citizen-employees) | 雇主未办通知IRAS；员工不足额结单起七日、GIRO终止、立即本地再就业的凭证请求、股票视同行权及延税到期、居民更正路径吻合。 |
| [处理时间](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/processing-time-for-tax-clearance)、[税清指令](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/clearance-directives) | 电子一般7工作日、纸本21日及补件延长，与员工概述“多数21日”并非冲突；雇主Directive起10日、旧税余额、修订后等待新Release指令准确。处理时间未冒充工资到账保证。 |

## 通过范围与剩余工作

本轮通过的是三稿实际写出的雇员离职、一般年度税和IR21入门办事链。未声称覆盖个案合同解释、全部WP转聘、完整ECT程序、所有自雇/跨境税及股票估值；稿件给出对应条件和后续入口。未发现须继续止损的来源失败。

未来2027申报日期、任何准证取消或TADM规则变动需再核；本轮没有用2026时点预测2027通知。核验字段仍由主控在第三静态、构建与实际页面检查后处理。
