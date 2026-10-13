# B04 学校课程、考试、费用与支持：独立事实审

审核者 identity；作者 daily_history；2026-10-13（Asia/Singapore）。结论：最终完整稿独立事实通过，交 root 第三人编辑及工程接收。本人没有修改作者正文、运行共享构建或代签实际网页验收。

## 绑定版本及复核方法

对象为 `content/book/people/school/learning.md`。首冻 35,995 B，全文 SHA-256 `29a5353ab1c520ac52f6935085d60f15ee73c12fc080db234e42c423a1fe68c4`，正文 SHA-256 `2e5c4b88857f93083587e3ede9635dffe448eb3d665fe308dc7856e5a60a5b2d`。最终 36,190 B、187 行，全文 SHA-256 `e118ac109e5e7eb2867824110dd0aace4115b68292b1ae71885caed0ee04387f`，正文 SHA-256 `2654d1f5e394aa88ba5d0d8a2044c9be09f623278e0a71c2e27042e8c37472e5`。正文以第二条 YAML 分隔线之后的 UTF-8 字节计算。

首稿全文读完后逐采用事实核主管原文；修后重新读完整 187 行。来源范围对应作者证据 E01、E33—34、E63—91 共 32 组。以作者当日取得的官方原 HTML、其中预置原始记录、官方工具返回及 PDF 为独立回读材料，另新联网 ICA 一页及 SEAB 五页。本报告明确区分重新联网、同日原缓存回读、机器匹配、PDF 实际目视，没有把作者摘要或其目视记录当作本人独立阅读。

本人缓存为 `.cache/research/b04-school-learning-facts/`：首末冻稿、`author-revision.diff`、`final-check.json`、两批新联网 `fact-web-1/2.txt`、独立解码的三份 MOE 原 HTML 预置数据、FAQ 原答案匹配结果、PDF 新提取文字与两张本人新渲染图。作者源缓存保留在 `.cache/research/b04-education/`，母语源在 `b04-language/`，MK 费用在 `b04-childcare/`。

## 本轮反馈及闭合

1. ICA 详页疫苗资料年龄是外国出生申请人“12 years 0 day or below”。作者将“12岁及以下”精确为“12岁0天或以下”，与本轮新联网原文第57行一致。[ICA FSS](https://www.ica.gov.sg/reside/STP/apply/fss)
2. GIRO 首季合并收费须区分阶段。费用 FAQ Q9、Q13、Q40 明确小学及中一至中四的一二月合并二月，中五及 JC／MI 的一至三月合并三月。作者已在原段写全，未改变每月26日或非工作日顺延的规则。[MOE 费用问答](https://www.moe.gov.sg/faq?categoryid=16209AFB5BEB4959AE8F5ADD6007566A)
3. PSE 六日申请期从成绩发放当日起算，作者已精确起点并补上真正载有六日规则的 Full SBB FAQ 近邻链接；PSE 分类16问支持十二志愿及排序，但本身不载六日规则。[MOE Full SBB FAQ](https://www.moe.gov.sg/psle-fsbb/full-subject-based-banding/faq)

本人以首末稿逐行生成差分：恰好三个原有段落变化。将最终三个完整段落逆替为首冻对应段落，严格恢复首冻的全部字节及全文 SHA，不存在其余正文或元数据漂移；具体新旧字符串及检验结果保存于 `final-check.json`。作者中间仅年龄修订版 35,999 B／全文 `a5f2be5fae2777adac01d8f4c44359795f49a7caf3c2584bf9e31333a546a9e3` 是历史版本，最终审结以上述 36,190 B 为准。

## MOE 实体与原始记录

对普通成功返回的原 HTML，本人重新解码 `self.__next_f.push` 中的 JSON 字符串；仅读取页面已公开返回的静态数据，不执行挑战或查询内部接口。

| 原实体 | 字节及 SHA-256 | 本人核查 |
| --- | --- | --- |
| `moe-school-fees-direct.html` | 1,925,544 B；`e4f5954181c872dadab810c15b5db7ba130ffd4e97ba93e70b30088715d1d2bd` | 独立解码451个字符串片段；2026年采用的24条政府／政府辅助、三阶段、四身份原记录，逐条匹配学费与杂费，再重算12个表格金额。另读四条 residencyData 身份映射及缴费原文 |
| `moe-school-fullsbb-experience-direct.html` | 109,610 B；`0a2fe5ade39534b6aac890578a04278e445d5a36fa5292dcbe8452c7afd9b837` | 独立解码21个片段，8条提取 HTML 均精确回原数据。完整读当前 record26；record27 用于历史队列，不用其旧路径推定当前制度 |
| `moe-school-fullsbb-faq-direct.html` | 216,130 B；`36788392b5078778672e92fccc11b847ff1f8b82db2ec67ed17ec0f7e3f14398` | 75条提取 HTML 均精确回原数据；实际阅读所采用的共同课程、调整限制、PFP／ITE、record31申请期、更新的JC／MI、DPP终止及艺术路径段，不冒称75条全文均逐字审过 |
| `moe-tg-new-faq-employment-direct.html` | 1,308,012 B；`83b4f60d45647c45da0321d5e11ec32b9481a6ecb612ef3827bc2d92770f4ae7` | 独立解码122个片段；本人完整读 SEN46、PSE16、MTL19、MK SEN4、费用49、FAS13、Edusave11、CE5、MK课程13及小学课程48问。全部分类原答案均可按明文或 JSON 转义精确回原 HTML 数据；不同分类会有重复问答，不能相加声称互不重叠的来源数量 |

上述匹配是来源完整性检查；事实判断来自实际读到的原文。解析记录编号只作为缓存定位，不作为公开网页链接。字段标题、旧记录或页脚更新时间不替代规则本身的适用学年。

## 逐项事实核查范围

| 证据组与实际材料 | 已核采用事实与边界 |
| --- | --- |
| E01、E73：[MOE费用](https://www.moe.gov.sg/financial-matters/fees)及[费用FAQ](https://www.moe.gov.sg/faq?categoryid=16209AFB5BEB4959AE8F5ADD6007566A) | 小学13／343／609.17／1049.17，中学25／700／1111.80／2211.80，JC／MI33／787／1319.43／2569.43；是每月学费加杂费。公民PR的GST获补贴、国际学生含GST；自主费上限18／19.62。全年12月、GIRO26日及首季例外、有效扣款失败结转与重复付款、纸本／eGIRO账户、非GIRO合并月份、CDA限制；身份15日截点、系统至多两月、超付抵后月及不按日比例计。MOE自动更新身份规则不等于申请新收费优惠资格 |
| E33：[ICA Student's Pass总览](https://www.ica.gov.sg/reside/STP/apply)，`education-source-20-0.txt` 原文31—57行 | 按孩子本人证件核；全日制、DP／LTVP／IEO及短期课程例外有独立条件，不能用父母工作准证替代。正文互引既有准证管理稿，不把短期访问许可普遍当作长期学校准入 |
| E34：[MK费用](https://www.moe.gov.sg/preschool/moe-kindergarten/fees)，`b04-childcare/mk-fees-direct.txt` 全文 | 2026公民160／PR320，每月六月十二月仍缴；KCare另计，正文不将KiFAS扩大到KCare。原HTML99,377 B，SHA `e94c6669f03ef9433b90ee48ed3ff48cb3bb4fb5dce4b0309038afc42e8c9de5` |
| E63：[PSLE评分](https://www.moe.gov.sg/psle-fsbb/psle/psle-scoring-system)，`moe-school-psle-scoring-direct.txt` 全部可见内容 | 四科AL总分4—32，Standard八档、Foundation A／B／C映射6／7／8，母语豁免和获准替代语言仍赋6—8；HMTL与第三语言不是同一制度。逐项核正文分档及上下界 |
| E64：[中一分配](https://www.moe.gov.sg/psle-fsbb/posting-to-secondary-school/changes-to-s1-posting)与[选校](https://www.moe.gov.sg/psle-fsbb/posting-to-secondary-school/choosing-sec-schools)，两份direct.txt全部可见内容 | 六个志愿、至少两三所优于旧COP、公民／PR／IS与志愿／抽签顺序；两个PG可选时先选一个用于全部志愿。往年COP非保证 |
| E65—66：[中学经历](https://www.moe.gov.sg/psle-fsbb/full-subject-based-banding/secondary-school-experience)、[Full SBB概述](https://www.moe.gov.sg/psle-fsbb/full-subject-based-banding/about-full-sbb)、[Full SBB FAQ](https://www.moe.gov.sg/psle-fsbb/full-subject-based-banding/faq) | 2024起中一、PG表中英语数学AL7条件、相关科目AL5／AL6／Foundation A升层、六共同科及学校整体评估；2026旧N/O毕业、2027 SEC、2028一月统一放榜。当前record26明确JC G3原始L1R4≤16、MI≤20、奖励分≤3，poly四G3加一G2等值B／净22及护理24，PFP≤12、ITE两年≤19及三年G1、NAFA／LASALLE四科21和英语G3 C6、NFP≤15与作品考核。第五年两资格分支、逐科至少G2 Grade5以及全G3的19条件分开；PFP2026群组、2028扩大与DPP停止未混写 |
| E69：[PSE 2028 FAQ](https://www.moe.gov.sg/faq?categoryid=D0231E8A8E14458BA58D26C58B8BC4BB)，16问全文 | 学校SEC考生所有国籍／私人考生SC、PR边界；最多两年成绩组合、本人Singpass及无资格者待公布协助；十二选择及同净分后身份、选择、原始分、抽签次序；无余位时不保证另获安置。六日起点另据E66 record31，现已近邻引。Q3题目ELMAB2与正文答案ELMAB3矛盾，稿采用正式答案和当前详页ELMAB3 |
| E67：[SEN FAQ](https://www.moe.gov.sg/faq?categoryid=34EAA566E17245A0B500E4B0482F4831)，46问全文 | 认知、适应及功能需要，评估不是单次IQ决定；KKH／NUH／EI及合资格心理师；主流LSP／SDR P3P4／TRANSIT及治疗转介的边界。听障口语与手语、视障点字与科技；设备评估及普通磨损／不当使用不同。SPED国家／定制课程、IEP／ITP、13岁转衔；提前一年准备、三志愿、主流校长转介、SPED原校转校、P1/J1候补须先在同主要诊断的政府与社区资助SPED安置、MAAP新资料评估。不是所有学校都开放所有身份或年级 |
| E68、E79：[母语FAQ](https://www.moe.gov.sg/faq?categoryid=362B49B3AEA747488A34710F5455CEAF)、[母语详页](https://www.moe.gov.sg/primary/curriculum/mother-tongue-languages)、[豁免](https://www.moe.gov.sg/primary/curriculum/mother-tongue-languages/exemption)、[海外学习](https://www.moe.gov.sg/primary/curriculum/mother-tongue-languages/learning-overseas) | FAQ19问及三份direct.txt全文实读；海外持续无学习机会／严重整体学习困难分支，尝试一学期不妨碍申请，原文确为第一季度之前；小学豁免升中一承接，大学SC／PR条件录取与正式豁免须核自身记录；获准外国语／亚洲语言、家庭私下准备及无PSLE对应试卷；2026 S1 HMTL门槛不再依总PSLE。旧Express／N(A)／MTLB只作历史资料，不推到2024后S1 |
| E70—71：[义务教育FAQ](https://www.moe.gov.sg/faq?categoryid=E4D97A22CC4543C89E836670C852D835)、[MK SEN FAQ](https://www.moe.gov.sg/faq?categoryid=6DD34BBC749F4736B639DE38F351F1C6) | 分别5问、4问全文读；本地公民儿童须处理正式学校或经准许安排，没有声称审完CEA法定年龄与所有例外。MK20人组、无普遍专属助手，医学评估与实际园所支持须配合 |
| E72：[ETS](https://www.enablingguide.sg/im-looking-for-disability-support/transport/enabling-transport-subsidy)，工具44原文49—81行 | 2026-07-01提高至SC／PR PCHI≤4800；无收入AV≤21000、SSA／SPED安排交通、最高80%依实际条件、不能与Taxi Subsidy并领、经机构means test且另看运力 |
| E74—76：[FAS FAQ](https://www.moe.gov.sg/faq?categoryid=85B0516024DB47B8B38087911E1BAE6C)、[Edusave FAQ](https://www.moe.gov.sg/faq?categoryid=9162ED3B73DE4FE8A8413006209AD0C5)、[Greendale 2026执行表](https://www.greendalesec.moe.edu.sg/student-and-admin-service/administration/financial-assistance-bursary/) | 前两分类13／11问全文，工具49 Greendale56—111行；2026公民4000／1000门槛、学杂费／教材／制服与中学10餐及公共交通21为分项目，不是自由现金；年内可申、通常批准后次月、无追溯买书制服报销、到12月续申、小六原校申请、未达门槛校本帮助。Edusave不能买普通制服鞋或付私人补习，不套PR／IS |
| E77：[Pathlight费用](https://pathlight.org.sg/admissions/fees-and-subsidies)与[Maitri](https://maitrischool.edu.sg/fees-and-financial-assistance/)，工具51原文0—47／31—94行 | 公民60／85／90与Maitri80；Maitri PR2026为250、2027为280、公民FAS4000／1000。PR／IS不套公民表；Maitri旧ETS数额未用于本稿，采用SG Enable当期详页 |
| E78：[Eden申请](https://www.edenschool.edu.sg/admissions/application-process)、[Eden费用](https://www.edenschool.edu.sg/admissions/fees-and-subsidies)、[ACS Academy](https://acsacademy.edu.sg/)，工具47／49采用段 | Eden2027窗是2026-02-02至05-22且本次已过；医疗一年、心理两年、认知适应与ASD诊断、SC→PR→IS余位，不能推广全部SPED。ACS首页本人实际读89—200行的申请分流、三个志愿、出生年／年级窗口；不把页面费表扩展为当前每阶段均有学额。Eden费用页非本稿数值主依据；无登录或读取个人申请表 |
| E80、E88：[小学课程FAQ](https://www.moe.gov.sg/faq?categoryid=8F1D64C10EA64E77A836A87C22C97ED8)、[MK课程FAQ](https://www.moe.gov.sg/faq?categoryid=985238FD86C349768B75DDA1B642DA18)、[Valour科学](https://www.valourpri.moe.edu.sg/subjects/science/) | 48／13问全文及Valour采用段8—103行；STELLAR故事与文章而非统一传统课本；P3正式科学与P1P2体验区分。MK5／6岁、双语、游戏互动、观察作品记录、无拼写测验／汉语拼音／独立书面作业，未将MK推广到所有私立园 |
| E81：[Victoria IP](https://www.victoria.moe.edu.sg/our-curriculum/academic-development/integrated-programme/)与[MGS IP](https://www.mgs.moe.edu.sg/secondary/academic/ip/ip-1/)，工具58原文19—63／8—114行采用段 | VS／CGSS前四年→VJC两年A-Level，MGS六年制最后两年ACS(I) IB；仅作为不同终点示例，不保证中途转换或成绩条件 |
| E82—84：[UWC公民](https://www.uwcsea.edu.sg/admissions/eligibility/residency-and-citizenship/information-for-singapore-citizens)、[G9/10](https://www.uwcsea.edu.sg/grade9-and-10-programme)、[2026/27费用](https://www.uwcsea.edu.sg/admissions/fees-and-scholarships/fees) | 本人回读工具55公民650—713、58课程680—705、57费用642—740及58费用采用附加成本段、59支付段；公民先有适用条件及余位、学校提交MOE、个案且不转校自动承接；G9/10本校课程，G11/12 IB或所选IB科及本校文凭要求。G2—5年40743、首年发展9537、注册4992、单校区日校申请627，不退申请／注册；GST及具体退学计算留给实际合同，不伪造一个普遍退款规则 |
| E85—86：[TPGateway FAQ](https://www.tpgateway.gov.sg/faq/private-education-institutions)、[机构名录入口](https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-(peis)/pei-listing-file)、[费用保护](https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-(peis)/protection-of-course-fees) | 工具61原文115—207、62原文80—86／105—127；SWDA当前名称、全日制国际课程注册、注册不代表质量认证／统一学历认可、Student's Pass相关EduTrust；费用保护针对不能继续经营时未用课程费用，不覆盖一切主动退学。只核名录页面入口，未声称读完目录附件或查询任一学校当前牌照 |
| E87：[ICA FSS](https://www.ica.gov.sg/reside/STP/apply/fss) | 新联网完整实读采用段31—75，2026-07-21更新；STP、有效DP／LTVP／IEO、SWDA／EduTrust及精确疫苗年龄，申请、IPA与正式准证不混同 |
| E89：[Bukit View科目编班](https://www.bukitviewpri.moe.edu.sg/parents-and-partners/subject-based-banding/)及其[MOE PDF](https://isomer-user-content.by.gov.sg/557/a68448af-2030-4895-ad6c-f54dabafdd34/MOE_Subject-based%20Banding_English.pdf) | 学校当前页链接仍在；PDF实际2017-12，独立提取、重渲染、目视两页。采用P4学校建议／家长意向、P5观察、P6学校决定组合的流程，配2025/2026 FAQ；未采用旧册的过科数量推荐表作2026自动门槛 |
| E90：[SEAB AA](https://www.seab.gov.sg/access-arrangements/)及[2026-03-04说明](https://www.seab.gov.sg/newsroom/access-arrangement-timelines-and-streamlining-of-information-sharing/) | 两页新联网：主详页21—170与说明23—36行实际读；AA需按需要审批、同阅卷标准、读题员不可直接推广语言科；特定复杂安排三年内报告，2025起同情况已批诊断承接，常规期限与临考伤病例外、符号不披露诊断、撤回提前五工作日且不可恢复。正文未把GCE期限当2027SEC正式公布期限 |
| E91：[复核期限](https://ask.gov.sg/seab/questions/cm1ugigkc009nux9s27p6y78j?from=topics)、[复核内容](https://ask.gov.sg/seab/questions/cm8mionof00cu6vqh4n3c2jhh?from=topics)、[等待期间选校](https://ask.gov.sg/seab/questions/cm1ugigk90089ux9swzx3xlsi?from=topics) | 三页新联网，实读主管完整答案20／21／21行；五工作日向学校提交并付款、另一名资深阅卷员重阅及记录核查、原成绩继续升中一选择。未虚构费用金额或保证复核升分 |

## PDF 实际目视及未知

小学 SBB PDF 实体 978,255 B，SHA-256 `50cb326a91b198105d63eea6b74fc39aa787df194f28f4627da3936e5e0909c1`。本人重新 `pdftotext -layout` 提取两页，再用 `pdftoppm` 渲染两页，并通过图像工具实际看完物理第1、2页，看到第二页右下“December 2017”及P4→P5→P6流程。此目视仅证明该两页内容及版次，非本书打印稿验收。没有把 MOE 页面内未打开的配图、UWC翻页册或SPED未成功下载的PDF算作已目视。

已有失败源未重探，没有8888新增尝试、关闭TLS、绕挑战或真实提交。MOE几处目录／SPED详页与旧PDF未读到的内容不用于填补规则；已用当日真正返回的主管FAQ、学校执行页与SG Enable详页闭合正文采用分支。SEN FAQ旧FAS3000／750、Maitri旧ETS门槛、Full SBB旧JC L1R5、旧MTLB与新队列规则已辨明；正文未沿用旧值。2028具体课程代码和日期、2027SEC AA公告、学校即时余位、家庭个案评估、个人STP及退费合同均未声称已知。

事实层面没有剩余阻断。正文继续由作者冻结；第三人编辑、机器生产门禁及实际桌面／手机／打印验收由root接续，不能以本报告替代。
