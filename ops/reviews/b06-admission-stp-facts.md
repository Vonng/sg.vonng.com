# B06 入学稿：私校、Student’s Pass 与两份流程 PDF 的限定独立事实审

审阅者：`/root/admission_stp_review`，未参与正文写作。作者为 care_writer（C）；原稿作者 A。本次为 B（review_state_audit）完整事实审的明确并行分工，主控 root 承担第三编辑及工程。

审阅结论：**PASS（AD28–35限定独立事实审）**，2026-10-14 21:04（Asia/Singapore）。六网页必要原文和两份实体 PDF 已独立读完；C 修订的两处必要条件已再次对照原文、完整旧新及实际最终段落核准。本报告供 B 合并完整事实审，不代 AD01–27 独立回源、全篇第三编辑或构建与实际渲染。

## 对象、日期与实际范围

- 新加坡日期于本次恢复实际核为 **2026-10-14**（20:51:02 `Asia/Singapore`）；原文、PDF 文字及两页图的本次独立阅读为当日 20:51–20:55。完整阅读项目 AGENTS/PROMPT，按 BOOKMAP→TASKS→CHECKPOINT 恢复后核 Git 与实际文件；未恢复整书研究，也未运行共享构建。
- 审阅正文最终冻结版：`content/book/people/school/admission.md`，180 行／29,940 B；body SHA-256 `748afb6a6afd3efd249a4bbf21ba69cbf817f86f619ccf370f6bd48d357148b4`，full SHA-256 `ebad83914dc406eb57e9cc5766c3e1aff80c180910039956fe6f9e302b448aa5`。body 按项目 `text.split('---', 2)[2]` 含原换行计算。
- 支持文件最终版：`ops/evidence/b06-admission.md`，84 行／13,463 B，SHA-256 `9d89745a53a7ca5e0f1426b4b58a7aef6271530ae137280ca09d9d1b14a77c18`；`ops/maps/b06-admission.md`，23 行／3,436 B，SHA-256 `0e26d89442287ae60d33fb2b44c68493083d27d46b7756d9cc476da1ba1b2cb3`。读证据的对象/来源取得说明、AD28–35、PDF冲突及限定边界，读完整原地图和最终支持全部差分；不签证据 AD01–27。
- 本报告核准的正文范围为第122、124行的 S-AEIS 重报与满额段，以及第151–180行完整私校、STP、材料和报到段；第161行及170–176行两完整修订块在21:02–21:04再次实际读并回到ICA对应原段。报价、合同检查和报到沟通为行动建议，未冒充学校统一收费或登录后表单规则。

## 本人真正阅读的主管原文

来源由 C 于 **2026-10-14** 本轮取得；初始 `source-adoptions.json` 的作者记录时间为 20:31:41。本人从已存在的本轮主管原件独立读取，并核下列原件 SHA；未继承 C 的“已读”旗标，未新联网、重试失败源、重建旧已删包或联系机构。取得日期、此人阅读日期、来源页更新时间与规则生效日期分别判断。

| 证据 | 真实主管 URL 与本人阅读范围 | 对应结论与时期判断 |
| --- | --- | --- |
| AD28 | [ICA Student’s Pass 概述](https://www.ica.gov.sg/reside/STP)：`ica-STP-proxy-main.txt` 完整公开主体；其正常 8888 单次成功 HTML 原件仍在 | 获准全日制课程、本人有效 DP/LTVP/IEO、非宗教课程豁免及现证到期/取消后重新申请；短访课程取有效期与30天较短值、独立完整课程及实训条件。主体无明确本次更新日；疫苗条件标2019-02-01起。 |
| AD29 | [ICA 政府／政府辅助／独立学校](https://www.ica.gov.sg/reside/STP/apply/gov)：`admissionFreshSources1.txt` 所存直接原文 L31–81 全段及更新行 | 该类别注册确认信、≥21岁SC/PR本地担保、公司/组织不可担保及SC/PR父母/继父母必须担保；宗教学校DP/LTVP须STP、有效IEO仍豁免；翻译、材料、2–3个月和待决停留规则。页更新2026-03-13，不充作所有规则生效日。 |
| AD30 | [ICA 外国学制／私人资助学校](https://www.ica.gov.sg/reside/STP/apply/fss)：同原件 L31–75 全段及更新行 | 外国学制学校SWDA注册/EduTrust与STP考虑条件、有效DP/LTVP/IEO、本类别注册信、材料和翻译、2–3个月及待决不延停；没有自行套Gov担保条件。页更新2026-07-21。 |
| AD31 | [TPGateway 私立教育机构 FAQ](https://www.tpgateway.gov.sg/faq/private-education-institutions)：`admissionFreshSources4.txt` 所存直接原文 L115–207 完整及footer | 现主体明确SWDA；适用私立国际中小学及课程的注册、注册不等于教学质量认证、学历认可由未来院校/雇主决定、STP招生所需EduTrust。footer仍2022-10-04，不据此否定已读现主体，也不推机构改组生效日。 |
| AD32 | [TPGateway 当前 PEI／课程名录](https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-(peis)/pei-listing)：同原件 L81–140 完整及footer | 公开PEI/Courses选路、三种EduTrust筛选与获准课程查询方法；仅核真实公开入口，未操作筛选或查某校个案。footer2026-10-12；旧`pei-listing-file`未采用。 |
| AD33 | [TPGateway 课程费保护](https://www.tpgateway.gov.sg/resources/information-for-private-education-institutions-(peis)/protection-of-course-fees)：同原件 L105–127 完整及footer | IWC/FPS保护停办时未使用的已付课程费；不同认证适用安排与一次收费上限、学生可找学校/保险方核FPS。正文没有推定任何退学全退；footer2024-06-28，不作为现主体核验日。 |
| AD34 | [SEAB S-AEIS 小学流程 PDF](https://file.go.gov.sg/s-aeis-pri-key-activities-and-milestones.pdf)：实体物理第1页完整文字及真实原页图 | 同学年P2–4、已获offer不能再直接online、上轮P5不成功转P4的B1承接、满额关闭、申请/准考/报到流程。未据此签全国生日/CES最低分或2027日历。 |
| AD35 | [SEAB S-AEIS 中学流程 PDF](https://file.go.gov.sg/s-aeis-sec-key-activities-and-milestones.pdf)：实体物理第1页完整文字及真实原页图 | 同学年Sec1–2、已获offer不能再直接online、满额关闭、申请/准考/报到流程。无出生档及日期表，不自行补出。 |

原件校验：ICA HTML `96558deda5c28fa8455206aebb942097c7e4d2bfc3c85ebc1e9186259fa70b64`；完整主体文本 `270bba9872c36fdab291c621ce120230b26cdf72c3a0f92776f8433c89844f57`；Sources1 `29dcef21dc0e1b535022e346fc9e498ffbddc26e49022ba2fa23ed7b57bfb69c`；Sources4 `c960b672833ee9203725f6bfa386812608e04f5ccb13eeef8b2022f6a51d1c6b`。全部位于忽略目录 `.cache/research/b06-admission-closeout/`；不是作者摘要替代主管原文。

## 两份 PDF 的文字、图及冲突

已读 PDF 技能。本人以 Poppler `pdfinfo` 确认每份真实实体都是1物理页，逐份实际运行 `pdftotext -layout -f 1 -l 1 … -` 并读其完整返回；另逐份运行 `pdftoppm -f 1 -l 1 -singlefile -scale-to 1700 -png`，生成已核忽略路径 `stp-review-pri.png`、`stp-review-sec.png`，以 `view_image` 实际看完整原页。合计 **2 实体／2 完整文字／2 实际原页图**；未借用 C 的页图读取记录，也未核任何旧第三 PDF。

小学实体109,161 B，SHA-256 `b89adcfe0eedf773739964e155ef321a2ad8a1547cd10739fdc27a4c5c0d8e73`；中学174,653 B，SHA-256 `9bc7b43e72eb1cc9d1775298cc88c58daa836d2d936d3bd5d34606faed1f5645`。两份PDF元数据记录2026-07-07生成/修改，页面未列明确发布日期或政策版本；不把元数据日期变成招生年度或生效日。

本人在小学原页真实看到第5阶段的AEIS-IS和最后的secondary school，确认是与该页S-AEIS-Primary标题不一致的模板字样；本报告不据该字样签结果系统。B另行独立读取 AD22/23 更直接正式结果页，合并事实报告应由其承接正确的AEIS-IS／S-AEIS-IS。两个PDF均确有已获offer无法再直接online及满额关闭；正文将此作为先找SEAB处理原申请记录的行动，不从操作限制推永久失去重报资格。B负责MOE资格侧原文；本分工不重复核AD01–27。

## 已闭合的两处必要事实修订

1. 原174行稿第161行写“在准证有效期或30天内完成”，遗漏 AD28 的两者取较短值。C最终版现明确“在短期探访准证有效期与30天两者中较短的期限内完成”；本人再次实际读取概述原件对应完整条件并对照最终完整段，条件准确。
2. 原174行稿第170行“使领馆、合资格公证人……经所列使领馆认证／公证”遗漏 AD29 L43–45／AD30 L44–46 的辖地和执行主体。最终第170–176行完整列清三种英文译本安排：文件出具国/地区使馆提供；新加坡或文件出具国/地区公证人翻译；私人译文由文件出具国/地区使馆认证，或由新加坡/出具国地区公证人公证。本人再次实际读取Gov/FSS各完整译文原段并对照三项，条件和主体准确。

本人实际读 `author-facts-feedback-STP-1.json` 的两完整旧新块、对应完整正文diff及 `author-STP-facts-{evidence,map}.diff` 两完整支持差分，随后读live最终第151–180行。另以独立脚本逐完整新块逆替为旧块，唯一匹配均为1，得到的完整正文逐字节等于 `author-before-STP-facts-body.md`，full SHA精确恢复为 `ff386f83087885c7cc4b3e14881264058e4192ef715f041a07a0d877f14a2a2d`；旧body为 `455316f6481a7e36524e7a430bc3c10d546e2aad60d0b0541ae498d94f9aa382`。这项机器核对仅说明本次两块变化的界限，事实结论仍来自本人原文与最终段落阅读。live正文/证据/地图均与作者最终副本字节一致，末核SHA如上。

两处必要修订已闭合，本分工没有剩余事实问题。原先已正确完成的六网页与两PDF核查按相同原件及未变段落保留，未虚构全源重读。限定 **PASS** 仅绑定上述最终body；B合并其AD01–27及整篇可用性判断后，root仍须完成真正第三和工程。本报告不声称完整招生资格、日历或教育领域已经核完；未操作私人报名、表单、STP申请，也未构建、stage或提交。
