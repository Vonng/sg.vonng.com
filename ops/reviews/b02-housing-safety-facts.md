# B02 租房与紧急求助：独立事实审

- 审核者：identity（未参与两稿写作）；作者：daily_history。
- 查阅及最终复核日期：2026-10-13，新加坡。
- 结论：两稿事实审通过。发现一项适用范围问题，作者修改后已独立回源复核；无未解决的实质事实错误。本文不是作者自审或第三静态审，不改正文及元数据。
- 逐篇阅读全部正文和作者证据表，另行实际打开主管详细页面、PDF 原文及图片；搜索摘要不作为通过依据。

## 最终版本

完整 SHA 锁定全部文件。正文 SHA 用 `bytes.split(b'---\n', 2)[2]`，保留 frontmatter 关闭行后的原始空白；与作者 `split('---',2)` 算法不同，因此以完整 SHA 对齐。

| 页面 | 完整 SHA-256 | 正文 SHA-256 |
| --- | --- | --- |
| `content/book/life/housing/renting.md` | `d82886a58f0ad486f51e9cfe74b60a3673310e408fa71bc0a3c4b0eb1daec047` | `7691a0797532b1e612c0b2d21cff36190cbfcb8ef16ae6b6399829f06363784a` |
| `content/book/rights/safety/emergencies.md` | `a2b458318e20125435ac65b3bb4b079d3ea74c31c99f6a42d53fa7f6462415df` | `8bd36934a45528db68ef9cb407c93f34483c5b076250687168ae115b2e144bc7` |

## 租房逐项回源

1. [MOM 住宅类型](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/housing/various-types-of-housing)：实际读 HDB 与 private residential premises 全部业务段。确认 HDB 房型人数、房间出租数量、业主同住计算、非马来西亚籍制造业仅卧室，以及非马来西亚籍建筑／海事船厂／加工行业不在 HDB 允许分支内；HDB 入住前登记、核验批准文件、私宅 FWTES 及地址登记各有不同责任，正文未混成 URA 逐人登记。
2. [URA 私宅出租](https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renting-property/)及[临时人数 FAQ](https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renting-property/temp-faqs/)：实际读完整业务内容，页面均标 2026-06-15 更新。核对三个月、六名无亲属关系人士、90 平方米及以上临时八名、先授权、授权邮件而非付款凭据、租客无法查他人房产登记、至 2028-12-31 的期限。私宅家庭与非家庭混住规则由 MOM 原文交叉核对，正文保持提醒而未发明统一算法。
3. [gov.sg HDB 出租说明](https://www.gov.sg/explainers/renting-out-your-hdb-flat/)全文：核对六个月最短租期、外籍合资格准证至少六个月有效期、PR 业主不能整套出租、Plus／Prime、房间业主与获准居住者同住、非马来西亚非公民（含 PR）整套配额、房间豁免、已有 HDB／EC 关系的限制。该页人数临时措施仍写旧的 2026 年终日期，审稿明确以 MOM／URA 当前 2028 年期限为准，未把旧日期沿用进正文。
4. [URA 短租](https://www.ura.gov.sg/guidelines/property-and-business-owners/property/short-term-accommodation/)完整业务段：普通住宅不得短于连续三个月；酒店与符合条件服务公寓是访客可选项。正文没有把三个月租约误当成三个月居留权。
5. [CEA 租赁防骗](https://www.cea.gov.sg/consumers/rental-scams/)全文：确认按广告电话号码查 Public Register、现场看房、不付预约看房费、直接核对业主付款及 1799。该号码是咨询诈骗入口，已经被骗另行报案，正文区分正确。
6. [CEA 委托代理注意事项](https://www.cea.gov.sg/consumers/engaging-a-property-agent/what-to-take-note-of-when-engaging-a-property-agent/)全文及[租赁服务](https://www.cea.gov.sg/consumers/engaging-a-property-agent/renting-or-renting-out/)全文：核对单方代理及收佣、公司收佣、佣金可议、GST 公司条件、物业管理不自动属于普通代理服务。禁止经手交易款项表的 HDB 租赁适用范围见下方闭环修订。
7. CEA [HDB 租客清单](https://isomer-user-content.by.gov.sg/71/1e36878a-360d-4648-8464-19653e60d477/Checklist%20for%20Tenant%20or%20Property%20Agent%20of%20Tenant%20for%20Renting%20of%20HDB%20Flat.pdf)、[私宅租客清单](https://isomer-user-content.by.gov.sg/71/f886abea-03b1-45d9-a81c-8026cad97507/Checklist%20for%20Tenant%20or%20Property%20Agent%20of%20Tenant%20for%20Renting%20of%20Private%20Residential%20Property.pdf)两份 PDF 全文，另读官网现链 HDB 业主清单：产权、身份、公司持有及批准用途确有各自核验。旧业主清单对制造业的旧条件不覆盖 MOM 当前细分，正文采用后者。
8. CEA 官网现链[HDB 租约模板 v1.3（2024）](https://isomer-user-content.by.gov.sg/71/e53bfeea-8a5e-4f0e-ac46-9b20ba12c71e/Tenancy%20Agreement%20Template%20for%20HDB%20Flats.pdf)：读使用说明、Schedule 与附件说明。模板可协商非强制，押金、维修额度与外交／调离条款有留空，附家具及状况清单；正文的谈判检查项是实际操作建议，不声称所有租客都有提前解约权。
9. IRAS [租赁印花税](https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property)、[由谁承担](https://www.iras.gov.sg/taxes/stamp-duty/for-property/basics-of-stamp-duty-for-property/who-should-pay-stamp-duty)、[签署期限 FAQ](https://ask.gov.sg/iras/questions/cm5nfk8ki002j48aoydvnxvn8?from=relatedquestions)的业务正文与算例：核对默认租客、14／30 天、首签日期、合同与市场租金取高、AAR 不超过 1,000 豁免、四年分支、0.4%、家具维护计入而 GST 排除、向下整元最低一元。独立重算 3,000 × 24 × 0.004 = 288，与教学算例吻合。
10. IRAS [盖印渠道](https://www.iras.gov.sg/taxes/stamp-duty/for-property/basics-of-stamp-duty-for-property/e-stamping-and-where-to-e-stamp-documents)完整业务段和[租约盖印指南](https://www.iras.gov.sg/docs/default-source/stamp-duty/pdf-guide---stamp-lease-and-tenancy.pdf?sfvrsn=fedb104e_23) PDF 全部文字：核对 SFA、本地代表、服务中心、文件编号与缴款后证书。正文给出准备、提交、缴款、成功凭证及失败时继续核对的完整流程。

### 已闭环修订

原稿将“代理不得经手租金和押金”直接覆盖所有房型。CEA 具体禁止款项表列的是 HDB 租赁，不能据此扩大为所有私宅租赁的相同法定禁止。已向作者及主控发回；作者改为“HDB 租赁中，代理不得经手租金和押金；代理佣金支付给其所属地产代理公司。”2026-10-13 回读官方表及最终稿，范围正确；向业主支付并留凭据仍作为普遍防骗建议保留。

## 紧急求助逐项回源

1. [SPF SMS 70999](https://www.police.gov.sg/SMS-70999)完整业务段：面向无法／不安全语音报警者，紧急情况及地点、确认及追问、普通短信费；可安全通话优先 999。正文没有把 70999 限定为预登记残障用户。
2. [SCDF Emergency Medical Services](https://www.scdf.gov.sg/home/about-scdf/emergency-medical-services)完整业务段，包括 995 分流、急症例子、地址地标、不能自行挂断、引路、医院选择、NurseFirst、1777、70995 FAQ：数字及条件吻合；1777 是 **2027-01-01 起停用**，正文采用未来时，未误称当前停用。70995 仅聋人、听障及言语障碍人士，正文未承诺给所有不方便讲话者。原文提 registered users 而无可核实注册步骤，稿件未捏造登记操作或无限定免登记承诺。
3. SCDF [2026 Emergency Handbook](https://www.scdf.gov.sg/docs/default-source/comm.---volunteers-%28docs%29/2026-scdf-emergency-handbook%28eng%29_final.pdf?sfvrsn=52538979_3)：独立阅读下载的主管原始 PDF `/tmp/b02-scdf-handbook.pdf`。原件排版有隐藏重复文本，未只依赖 pdftotext；实际目视 PDF 第 18、22、26 页图片（纸面 32—33、40—41、48—49）。分别核对起火层加上方两层撤离、其余层通常留单位关门窗并服从指挥、无法离开时远离火源关门堵缝及定位、行动障碍者安全可达才去电梯厅、不可达就在有窗房等救援，以及锂电设备火灾不得自行扑灭。正文未把电梯厅待救援写成自行乘梯逃生。
4. [SCDF 高层建筑火灾](https://www.scdf.gov.sg/home/community-volunteers/fire-emergency-guides/fire-outbreak-in-a-high-rise-building)：网页工具首次失败后只作一次普通 HTTPS 获取，200，实际读超高层及避难层业务段。确认走楼梯不用电梯；正文未将超过 40 层的避难层配置推广给所有 HDB。
5. [SPF 正式报案](https://www.police.gov.sg/E-Services/Lodge-Police-Report)完整业务段：非即刻危险的盗窃诈骗、附件与序列号、失踪者 999／NPC、技术问题 Feedback 截图均正确。正文区别正式 Police Report 与 I-Witness 线索，并有线下替代路径。
6. [MHA 2026-04-07 议会答复](https://www.mha.gov.sg/media-room/newsroom/retention-of-face-to-face-services-at-neighbourhood-police-centres-and-inclusive-accessibility-of-online-police-services-for-elderly-and-non-english-speakers/)全文及[SPF Contact Us](https://www.police.gov.sg/Contact-Us)站点与电话号码业务段：支持 NPC／NPP 对老人、非英语及线上有困难者的协助，部分自助站点视频联系警员。正文没有承诺所有 NPP 全天有人值守。
7. [SCDF Post Fire Guide](https://www.scdf.gov.sg/docs/default-source/media-room-(publications)/posters--leaflets--booklets/publications-(docs)/post-fire-guide.pdf?sfvrsn=a06dabb5_1)两页 PDF 文字全文：核对调查、安全许可、业主／管理处／保险方、清理前勘查、恢复水电气前专业检查。文件标注资料日期 2016-01-26，正文仅采用这些处置步骤，不沿用该旧文件的电话与机构地址。

## 完整性与边界

- 租房页具有筛选资格、查验主体、约定责任、盖印、入住成功凭证与异常处理；身份、房型、国籍、行业、租期、时点限制均留在对应步骤。
- 应急页具有入口选择、语言示例、非语音渠道、不同火场位置／行动能力分支、危险过去后的报案和住处处理。虚构教学例子均明确标识，没有冒充真人经历。
- HDB 若干详细页已有访问受阻记录，本次未重复撞同一地址。已有住房／公共租赁住户特殊条件尚缺直接原文，正文仅要求 HDB 个案核对，不宣称一律准许；属于明确范围边界，不影响已写流程事实通过。
- 未进行真实租约提交、付款、报警或短信，也未运行站点构建。本报告仅事实审；第三静态及主控元数据、导航、渲染验收另行执行。
