# B02 出生与入学：独立事实审

审稿人：daily_history（非作者）。实际回源日期：2026-10-13，Asia/Singapore。正文只读；未修改他人正文或 frontmatter，未构建、提交或提升状态。先读正文，逐一打开主管与官方学校细源，再对照作者 `ops/evidence/b02-family-school.md` 的访问边界；作者证据表没有代替本人的原文阅读。

## 结论与版本

- **birth.md：通过本稿范围内的事实审与全篇办事链可用性审。** 可交第三人编辑静态审；不等于已集成，也不代替临床诊断、实际个案审批或所有孕产福利专题。
- **admission.md：仅下列已回源范围部分通过，全篇不通过，维持 written / draft:true、核验字段空。** 逐年级年龄／CEQ、下一轮小一改革等核心缺口仍在，抽签段已收紧为历史说明，但当前适用细则仍待补核。不得把23项已读细源的局部通过写成整页核验完成。

版本均在本报告签发前重读全文并重算：

| 文件 | 完整 SHA256 | 正文 SHA256 |
| --- | --- | --- |
| `content/book/people/family/birth.md` | `f89c865e693d407f75f2341e8784f289457047fc1b286bebfcfd9366f50bed8a` | `aabdd90a1d2dd642d99ee65bcddca0597636a11b43a87af35729e21d2e20a0d1` |
| `content/book/people/school/admission.md` | `fe7068688b4c82cf9625f377d17c80b6782b3f920005af0ed16920daf244a1fa` | `d371e9d68f8fd629471b2588587b55fba671f6ab01bc3f4cc2372320028f975c` |

本报告正文算法为 UTF-8 文本 `split('---', 2)[2]`，包含 frontmatter 结束后的换行。作者使用 `bytes.split(b'---\n',2)[2]`，会少一个换行；完整文件 SHA 与作者交付一致，正文 SHA 差异仅此，不代表审错文件。

## 出生：逐项已读来源、适用边界与结果

| 关键断言 | 本人实际回读的详细原文 | 审核结果与边界 |
| --- | --- | --- |
| 首次产检、长期用药／病史、费用咨询与22周急诊分流 | [KKH About your pregnancy](https://www.kkh.com.sg/ward-stay/giving-birth/about-your-pregnancy)，实际293–404行 | 通过。polyclinic／family clinic／KKH 首约；Admissions Office 在 Women's Tower L1；22周或以上 Delivery Suite L2，未满22周 Urgent O&G B1。文中明确是KKH安排；没有将症状当诊断或给出用药处方。 |
| 公立补贴与私人病人分类 | [KKH Outpatient Charges Women](https://www.kkh.com.sg/clinic-visit/charges-and-payments/outpatient-charges-women)，实际290–326行 | 通过。SC／PR与合条件转介分别判断；同病既有私人病人、普通私人转介、指定医生等不能直接保证补贴。正文用“符合条件”“由医院确认”且未复制SC价给外国人。 |
| 来新加坡生产的访客申请 | [ICA Visitor seeking permission to give birth](https://www.ica.gov.sg/reside/LTVP/apply/visitor-seeking-permission-to-give-birth-in-singapore)，实际31–75行，页2026-03-13 | 通过。需要本地SC／PR担保、医生预产期等材料。原文细项还包括担保21岁起与使馆国籍／旅行证件信；正文是简要入口而非完整申请表。医院预约不等于移民许可。 |
| 本地出生42日登记、无论父母身份婚姻、2022起医院不代办、电子证明及90日下载 | [ICA Register Birth](https://www.ica.gov.sg/documents/birth/birth_registration)，实际31–124行，2026-03-13 | 通过。截止从出生日起计；文件需正式译本，复杂个案可能较久，作者没有把处理时长写成保证。证件下载保存与提交确认都有完成标准。 |
| S$18、双方确认、SC／PR／FIN用Singpass、双方均无则网页邮箱、不能网上付费时线下 | [LifeSG Birth registration](https://www.life.gov.sg/services-tools/birth-registration)，实际全业务正文 | 通过。该页明示亲生父母线上入口，不套收养；邮箱分支不能用App。LifeSG写卡，ICA同时列PayNow，正文未排除ICA渠道。 |
| 本地出生公民身份的一般情形 | [ICA newborn citizenship FAQ](https://ask.gov.sg/ica/questions/clos83ft400715k0wteus9vb3)，实际全文 | 通过其明确限定：本地出生、合法婚姻、出生时至少一方SC。未婚及特殊亲子关系留ICA个案核定，未把简单条件外推。 |
| PR与LTVP孩子担保、出生登记不等于PR、男性子女NS | [ICA PR Apply](https://www.ica.gov.sg/reside/PR/apply)，实际资格与NS段；[ICA LTVP Apply](https://www.ica.gov.sg/reside/LTVP/apply)，实际资格表及审批，2026-04-08 | 通过。未婚未满21、合法婚姻所生或合法收养；合资格只是可申请。父母担保男性子女NS范围与现有NS正文链接相符。 |
| 非SC新生儿42日Special Pass与延期、护照 | [ICA Register Birth](https://www.ica.gov.sg/documents/birth/birth_registration)，89、118–124行 | 通过。登记与合法停留是两个期限，均非提交其他申请即自动延长。Advisory Note提供到期日，MOM家属权限另走其流程。 |
| 新生儿DP、护照未妥先提交受理证明、7日申请窗口、MOM后续SpecialPass28日 | [MOM Newborn DP](https://www.mom.gov.sg/passes-and-permits/dependants-pass/getting-a-pass-for-a-newborn)，实际34–74行 | 最终版通过。护照未妥且ICA Note在7日内到期；MOM已签新生儿SpecialPass、DP仍未妥才自动延28日并在到期前一天SMS。DP失败时不能指望MOM继续延，须离境或ICA。原页旧14日出生登记与ICA现行42日冲突，正文采登记主管ICA正确。 |
| 海外出生登记及公民申请 | [ICA Child Born Overseas](https://www.ica.gov.sg/enter-depart/for-singapore-citizens/child-born-overseas)，实际全文，2024-08-05 | 通过。出生地登记，新加坡不重复登记；SC父母可另申公民，不自动当作护照完成。 |
| GPML16周、孩子SC、同雇主3月、母亲国籍、自雇与不足3月情形 | [MOM eligibility](https://www.mom.gov.sg/employment-practices/leave/maternity-leave/eligibility-and-entitlement)，实际全文；[MSF GPML](https://www.profamilyleave.msf.gov.sg/schemes/maternity-leave)，实际全文172行；[MSF PR／foreign parents](https://www.profamilyleave.msf.gov.sg/entitlements-in-other-situations/parents-pr-foreigners)，实际全文 | 通过。孩子生后12月内取得SC须取得后、一岁前用；母亲PR／外籍不被单独排除；自雇须连续从业及损失收入，政府部分不等于所有16周都政府直接支付。MOM2026-08-24公告未来政府报销扩展尚无实施细则，正文没有提前实施。 |
| EA12周与前8周薪资条件、通知与灵活安排 | [MOM eligibility](https://www.mom.gov.sg/employment-practices/leave/maternity-leave/eligibility-and-entitlement)；[MOM Planning maternity leave](https://www.mom.gov.sg/employment-practices/leave/maternity-leave/planning-your-leave)，实际43–87行 | 通过稿内限定。前8周有薪另看服务、存活本人子女人数、通知；末4周可合同改善；3月不足者未断言一概无假。GPML4周、EA1周通知，灵活用须双方同意、首8周连续。 |
| 不当解雇且未付产假福利的争议入口与时限 | [MOM Maternity disputes](https://www.mom.gov.sg/employment-practices/leave/maternity-leave/maternity-leave-disputes)，实际34–45行 | 通过。解雇后且孩子出生2个月内，适用EA或CDCA；不是所有劳动争议的统一时限。 |

出生页总计15个不同已读细源。就医→费用咨询→登记→证件停留→产假及争议路径连贯；身份和特殊情况均有下一动作。无Singpass、无法付款、个案迟批与证件赶不及均有替代路径。临床治疗、Baby Bonus细额、收养及完整育儿假不在这篇范围，未以本文替代。

## 入学：部分通过的实际回源范围

| 关键断言 | 本人实际回读的详细原文 | 通过范围与例外 |
| --- | --- | --- |
| 国际学生定义、2026 P1出生日期、国际生意向日期及Phase3限制 | [Corporation Primary Admission](https://www.corporationpri.moe.edu.sg/for-parents/admissionandschooltransfer/)，正文2026-06-23，全文 | 非SC非PR为IS；2020-01-02至2021-01-01；2026-05-19 09:00至05-25 16:30意向、10月底邮件；非SC／PR不走Phase1。正文已标过期窗口。 |
| 2026报名为2027入学、06-30至08-18、portal与求助 | [Tao Nan P1](https://www.taonan.moe.edu.sg/partners/for-parents/p1-registration/permalink/)，此次显示2026-10-13，全文；[First Toa Payoh P1](https://www.firsttoapayohpri.moe.edu.sg/connect-with-us/school-admission/primary-1-registration/)，2026-08-09，全文 | 窗口与当年系统步骤有明文；Singpass、结果SMS及学校求助支持。没有读FTTP日期图片，不拿alt猜值，日期用道南正文。 |
| 2026阶段与PV、提前招募且不保录取 | [Gongshang P1](https://www.gongshangpri.moe.edu.sg/about/admission/p1-registration/)，2026-08-27，全文；[Anderson P1](https://www.andersonpri.moe.edu.sg/our-partnerships/potential-parents/p1-registration/)，2026-07-13，全文 | Phase1／2A／2B／2C／2CS条件有明文；PV前一年7月1日不晚于、当年6月30日前40小时。Anderson自己的服务期限更早，只作为校内更早的例子。并非未来2027全国框架完整确认。 |
| 候补、回流SC／PR、LOA／SPERS等 | [Rosyth admissions](https://www.rosyth.moe.edu.sg/for-parents/admission-matters/)，2026-09-21，全文；[Kranji returning SC／IS](https://www.kranjisec.moe.edu.sg/admissions/returning-sc-is/)，2026-06-29，全文 | 候补只是校例，学额不保证；回流SC与PR定义、LOA回原校和各中学入口相符。Kranji把IS简写nonSC不严谨，正文用Corporation正确定义，没有复制错误。Rosyth的2025抽签与旧June意向日期另列下方。 |
| AEIS／S-AEIS年级、学年、Entry Proof非入境许可 | [SEAB About AEIS](https://www.seab.gov.sg/aeis/about-aeis/)；[About S-AEIS](https://www.seab.gov.sg/s-aeis/about-s-aeis/)，均2026-04-08，全文 | AEIS次年P2–5／Sec1–3；S当年P2–4／Sec1–2。考试报名与入境许可清楚分离。 |
| 年龄计算基准与概括范围 | [Kranji](https://www.kranjisec.moe.edu.sg/admissions/returning-sc-is/)；[SEAB AEIS milestones](https://www.seab.gov.sg/aeis/key-activities-and-milestones/)，2026-05-12，全文 | 入学年1月1日基准及SEAB导航7–12+／12–16+确有原文；**不能替代逐年级资格及CEQ细表**。 |
| 申请材料、支付、Pending／Registered／ineligible、补资料与技术受阻 | [SEAB AEIS procedures](https://www.seab.gov.sg/aeis/application-procedures/)，2026-07-01；[S-AEIS procedures](https://www.seab.gov.sg/s-aeis/application-procedures/)，2026-06-29；均业务正文完整读 | CP、出生证英文译本、护照≥6月、CEQ、付款与Remarks；至少4周处理未被写成保证。原页CEQ2025起点只给2026，正文改为该届核对，没有无限沿用。 |
| CEQ须当期提交、12月有效、备考科目与前一级课程 | [SEAB CEQ FAQ](https://ask.gov.sg/seab/questions/cmcvbp7tf002d13wyb0mcqpvn)；[SEAB Prepare FAQ](https://ask.gov.sg/seab/questions/cm79ro0nx00dgzvz0byxy4xvu)，均全文 | 不能报名后补交；可用下轮须考试距申请月份在12月内；小学数学、中学英语数学、申请级别前一级。分数／种类仍未闭。 |
| 迟报、录取结果、学额 | [SEAB Late FAQ](https://ask.gov.sg/seab/questions/cm5f0cx4v008f13bz7wxujhsm)；[Release of School Offers](https://www.seab.gov.sg/aeis/release-of-school-offers/)，2026-04-08；[Kranji](https://www.kranjisec.moe.edu.sg/admissions/returning-sc-is/) | 不收迟报；AEIS结果在AEIS-IS、不在CP；表现与学额、尽量考虑住区不保证指定学校。 |
| 2026 FAS资格与申请 | [Bartley Financial Assistance](https://www.bartleysec.moe.edu.sg/parents/financial-assistance/)，2026-07-05，全文 | GGAS全日SC、GHI≤4000或PCI≤1000，另有在学和不重复援助要求；PG／e-FAS入口。正文未套PR／IS，未把该校中学餐食金额套小学。 |
| PEI与SWDA、注册不等于质量认可、目录、FPS | [TPGateway PEI FAQ](https://www.tpgateway.gov.sg/faq/private-education-institutions)，实际115–207行；[PEI directory](https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-%28peis%29/pei-listing-file)，实际80–86行；[Fee protection](https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-%28peis%29/protection-of-course-fees)，实际109–127行 | 国际中小学全日课程在范围；注册与资质认可分开；EduTrust／FPS限未用课费、可问校或保险方，不保证所有退款。目录只核入口，未核任何单独学校。TP旧页脚不当现行日期，以正文和ICA2026 FSS交叉确认主管称谓。 |
| STP豁免、学校类型、担保、2–3月、疫苗与停留 | [ICA STP overview](https://www.ica.gov.sg/reside/STP)，2025-12-23；[Gov schools](https://www.ica.gov.sg/reside/STP/apply/gov)，2026-03-13；[FSS](https://www.ica.gov.sg/reside/STP/apply/fss)，2026-07-21；均全文业务段 | 有效DP／LTVP／IEO的非宗教全日制豁免；原证失效另申；GGAS／independent的21岁SC／PR担保与父母优先、学校ackletter；开学前2–3月，外国出生≤12岁整疫苗；FSS EduTrust与境外等候。申请不延长停留。 |

入学页本人实际回读23个不同细源。该页已经能够解释多条路径及操作状态，但仍无法让家庭可靠完成“按目标学年和出生日期确认可报哪一级／CEQ／窗口”的核心判断。学校建议、预算清单与要求确认支持服务属于操作建议，不能补足资格原文缺口。

## 问题及未闭事项

- **B-01 已关闭：** 预读初版曾写“距到期不足7天”且未写护照未妥。作者在交付最终SHA之前已自行修为“护照未办妥、将在7天内到期”，并补MOM已签SpecialPass／DP未妥的28日规则。本审已重新读最终整篇及MOM原文，未要求重复修改。
- **S-01 未闭：** AEIS／S-AEIS逐年级年龄、CEQ类型及最低分、当前／下一轮精确报名与考试窗口未实际回读主管细表。文章虽不编造矩阵，仍有办事链核心缺口。
- **S-02 文本错误关闭、当前细则仍未闭：** 初审稿抽签段断言“在2026年所用规则下”，所引Rosyth文字却在“2025 PRIMARY1 REGISTRATION EXERCISE／2025 Registration Results”之下；2026更新日期不足以证明该条为2026适用依据。作者已在最终版收紧为Rosyth的2025年旧结果背景，本审对照原文与修订复核通过该历史表述。2026及未来轮次适用细则仍须新可读原文，历史说明不替代当前规则。
- **S-03 未闭：** 作者记录定位到2026-09-10发布的2027报名／2028入学改革，但主管新闻稿受验证页阻挡，未得可读原件；本审没有从媒体或搜索摘要核验细节。当前稿只限定2026，对当下准备下一届的家庭覆盖不足。
- **S-04 后续：** 精确学费与GST表仍缺。现稿只要求取得校方书面表，没有错误报价；这项本身不必阻断通用入学入口，但不能声称已经完成预算数值核验。

上述入学问题已发送作者并通知主控；作者也在证据／地图中明确要求留稿。本审按PROMPT不重复探测作者已止损的MOE主站验证页、一次8888空体及404旧PDF；**这些URL没有被计入本人已读细源**。取得新可读URL／版本后，应只补未闭事实并重审相关段落与最终全篇，不以旧通过范围自动覆盖新稿。

本次未登录真实报案、出生、移民、学校或税务系统，未递交个人申请；未进行浏览器渲染、Hugo或链接自动检查。报告是独立来源与全篇内容审，工程门禁及第三人静态审留主控。

最终复核补记：admission 抽签段修订为明确2025旧规则后，重读该段与相邻未来年度提醒，核对其余正文 SHA 变化来自此处，完整版本 fe706868… 已替换上表；全篇留稿结论不变。
