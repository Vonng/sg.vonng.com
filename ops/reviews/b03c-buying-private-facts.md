# B03C 私人住宅购买独立事实审

审阅者 identity；查阅及最终复核日期为 2026-10-13（Asia/Singapore）。作者 daily_history，第三编辑与工程接收交 root。审阅者仅写本报告，没有修改正文、元数据或共享总账，没有运行构建或真实交易。

## 版本与结论

已逐段读初稿及两项作者修订后的完整最终正文，独立核对实际字节数、全文与正文 SHA。最终所写范围及全篇办事可用性 **通过**；两项事实问题均已由作者修正并回源关闭，没有剩余阻断。

| 版本 | 字节数 | 完整 SHA256 | 正文 SHA256 |
| --- | --- | --- | --- |
| 初稿，保留问题历史 | 20,956 | `1ab15d06bc7121d437e756a38732e772d295850d6098fbb21bb329e9102407b9` | `bc782b0a4e7e76a80399b068b03db844936c9c6a7a91f75337e906b2cf8e4b54` |
| Notice 修订中间版，仅历史 | 21,139 | `77cb087d57ebc614ea59ea75b85a49af364ea0278efd54b06d98934e3fc17dfd` | `ec741e034c61df6dfd3cc856b2661496c9a11c24e7aa2b29c76eab68e4169418` |
| 最终待第三编辑稿 | 21,137 | `dfeef8872a550c16ae5e13b640db327db3bc1d7ae148a5309042063eb3b79982` | `07eaf4b852ee114b1bc9d0cb16c8adb2d246fb1bcab54ecc726c4ebee8a9e751` |

文件：[buying-private.md](../../content/book/life/housing/buying-private.md)。正文 SHA 算法为 UTF-8 `text.split("---", 2)[2]`，保留分隔符后的全部空白。正文仍为 written／draft:true，verified、reviewed_by 空值。此通过绑定最终版本；主控接收变更元数据时应保持正文一致。

## 独立回源与实际阅读范围

作者证据 [b03c-housing.md](../evidence/b03c-housing.md) 的 HP 编号只用于定位。本次亲自阅读主管详细原文及原件，复用同日成功取得的完整原工具提取缓存，不把作者摘要、检索结果或目录导航当事实依据。原件均在忽略目录 `.cache/research/b03c-housing/`。

| 主管原文及本次实际范围 | 核查结论及适用边界 |
| --- | --- |
| HP06 [SLA Foreign ownership](https://www.sla.gov.sg/regulatory/foreign-ownership-of-property/)，原始工具块 L23—129；HP07 [LDAU FAQ](https://app.sla.gov.sg/ldau1/Application/FAQs.aspx)，采用 L15—96、变更 L119—132 | 非SC自然人含PR为 foreign person；普通flat／condominium、获批准condominium中的strata landed与受限landed／Sentosa不同。PR五年与特殊经济贡献为逐案考量，不是自动获准；原则批准一年无延长、完整材料起约30工作日、先批准再行使OTP及6478 3444准确。共同买家、FTA税待遇与居留身份没有代替产权审批。 |
| 同一 HP07 普通与Sentosa分支、换购及变更条件 | 普通15,000平方英尺／非GCB、本人家庭自住、不出租全部或部分、五年不处分、空地三年建设；五年及旧房处置现房／楼花／TOP无独立产权的起算分别正确。Sentosa只采用其1,800平方米、自住／禁租及新购法律完成前处分旧房的专门分支，没有套普通五年或PR考量保证。 |
| HP08 [URA Buying property](https://www.ura.gov.sg/guidelines/property-and-business-owners/property/buying-property/)，`buying-resumed-tool-results.json` 的 housingPrivate16，L22—106 | 批准图则、未获批准改建买后责任、MOP、律师／代理／融资及新售文件流程吻合。页面旧SSD三年句不作为当前税率依据；税与CPF细项交成本稿。 |
| HP09 [URA Home Buyers’ Guide](https://file.go.gov.sg/home-buyers-guide-full.pdf)，14页原件全部文字亲自通读，最终两处再读物理第2、11及13页采用段 | 超过四单位开发商销售许可及建造图则、标准OTP／S&PA修改须批准；de-licensed仅剩余未售单位新售免强制标准合同。四单位或以下项目的合同及项目账户分支独立。必备单位资料、strata area、share value、规格和CDD与原件吻合。 |
| 同一HP09物理第7—11页交易与交接 | 5%—10% booking、14天交文件、交付后三周行使、补足20%及经同意延至OTP日起八周；不能转OTP。未行使没收booking的25%与逾期解除可能没收房价20%分开。工程QP证明、到期逾14天、TOP／空置交付／法律完成不同；DLP12月及两起点较早、通知后一个月整改／按合同自行修及SAL扣款程序正确。Notice期限、收到后14天完成与合同约定赔偿已补全。 |
| HP10 [CEA私人住宅自行交易](https://www.cea.gov.sg/consumers/transacting-on-your-own/buying-or-selling-a-private-residential-property/)，同 housingPrivate16 L17—63；[completed buyer checklist](https://isomer-user-content.by.gov.sg/71/3e471684-fbdd-4134-b8ff-087984cf47e0/Checklist%20for%20Buyer%20for%20Sale%20of%20Completed%20Private%20Residential%20Property.pdf)，4页全部文字 | 卖家／POA权限、产权及负担、批准用途／工程、租客交接、税／管理费、融资／CPF和律师安排均有原件支持。没有把旧表URL推成当前服务可用，查询用SLA当前详页。 |
| HP11 [CEA OTP](https://isomer-user-content.by.gov.sg/71/3dd19d9d-6017-4cf0-b07f-1e3aff65c7ff/Option%20to%20Purchase%20for%20Private%20Residential%20Property.pdf)，11页全部文字；[CEA S&PA](https://isomer-user-content.by.gov.sg/71/673ef193-daad-489f-b44b-82d4c53ae291/Agreement%20for%20the%20Sale%20and%20Purchase%20of%20Private%20Residential%20Property.pdf)，10页全部文字 | 两件Version1.2／2021-02-10由当前主管入口提供；自愿模板、可填写款项和期限、签接受书／送达律师／deposit、条件下没收与附加条款正确。旧模板外国批准栏不用于推翻SLA当前先批准后exercise；1%＋4%／两周未写成普遍法定规则。空置或带租约、费用／通知／调解依真实合同。 |
| HP32 [HDB MyNiceHome房型及分类](https://www.mynicehome.gov.sg/get-started/hdb-flat-types-classification-guide/)，`buying-latest-tool-results.json` 的 new-purchases-primary-2，本次读L14—174，采用MOP L91—114 | MOP从钥匙起、扣非居住／整屋出租／违租约期、未届MOP不得购私宅正确。没有由分类页推完整家庭保留／出租资格，也未采用未读尾段。 |
| HP17 [2013联合主管Annex III](https://isomer-user-content.by.gov.sg/153/2a8162af-c693-457b-a246-f6dd63c6feb3/annex-iii.pdf)，`buying-private-tool-results.json` 的 housingPrivate24orig，完整两页 L0—68实际读，正文采用L40—68 | 2013-01-12起PR组屋家庭新购本地私宅，现房完成购买／楼花TOP或CSC较早起六个月处分HDB、转售楼花仍须处分正确。正文明示原政策及请HDB确认分类／通知时点，不宣称当前完整家庭资格已核。第1页旧贷款规则未采用；未外推海外购房。 |
| HP34 [SLA Land Titles Search](https://www.sla.gov.sg/regulatory/property-ownership/land-titles-search/)，`buying-latest-tool-results.json` 的 private-actions-primary-1，L23—78；[Land Titles Registry](https://www.sla.gov.sg/regulatory/property-ownership/sla-land-titles-registry/)，private-actions-primary-2，L23—65 | Lot／Survey District／Title Number及地址关联、线上与人工记录分流正确。登记使权益转移生效明确限定Land Titles System，没有把Common Law deeds登记也说成一律强制。INLIS动态登录／费用／额度未读不采用。 |
| HP35 [CEA核代理](https://www.cea.gov.sg/consumers/engaging-a-property-agent/check-if-your-property-agent-is-registered/)，private-actions-primary-1，L17—65；HP36 [CEA CDD／UCPDD](https://www.cea.gov.sg/regulatory-matters/preventing-money-laundering-proliferation-financing-and-terrorism-financing/)，同组 L17—100 | 以真实联系电话查登记而非只看姓名、匹配注册／公司；购买协议前对客户及无代理另一方查核身份／国籍／职业等，必要资金／财富来源、正式提供／PDPA及拒绝法定材料后果正确。HDB住宅出租例外不套买房；不采用公开register未实际核到的记录年数。 |

本次独立完整读 `private-sla-adopted-original-blocks.txt` 原始工具块（383行），不是作者摘要，31,189bytes，SHA `79fe9cf5d483c54b432084679746127ea2680efb876626e970ef6461b3e19e54`。SLA FAQ后段实体、继承／QC亦已读，但正文和通过范围不扩至法人／遗产的全面规则。

## 原件、实际目视与修订闭环

亲自从本地原件读全部文字，并实核以下SHA：URA14页438,048bytes，`702fbcb7bd520a3833f26adcb57fb82d6eff88e282460d0e29c32fdd830285d6`；CEA买家表4页197,959bytes，`fe15107eeef9a01231147b4a257aebd572fc37aef53f5f1eee70c8daa8c2f07a`；CEA OTP11页194,877bytes，`0de4c4e70a1f2ebc3f640b2271cc4e5677a02c14f536037011b13b3f0366e245`；CEA S&PA10页187,980bytes，`caab7512f0f5e7947a121f0cc40c3386319de47c17399ccb5a1f23e365079341`。本次没有声称CEA三个PDF或Annex III逐页目视。

本审者从URA原PDF另渲染并通过 `view_image` 实际目视 **物理第7、11页的完整正文及页脚**，缓存为 `identity-private-booking-page7.png`、`identity-private-completion-page11.png`。第7页booking／OTP日期与百分比、第11页DLP／Notice／产权／赔偿均与文字吻合；没有声称14页全部目视。

两项问题均由原作者修改：

1. 初稿只写买家收到Notice后14天完成，遗漏开发商最迟发出Notice的条件。本人核URA物理第11页，作者补S&PA日期与实际空置交付后三年的较早者，以及依合同公式申索约定赔偿；没有以TOP替代空置交付。最终再次核L512—537及完整段落。
2. 初稿把项目解除许可管理的标准合同变化，与不强制项目账户并为同一分支。本人核URA物理第2及13页，作者限定de-licensed后剩余未售单位的新售，项目账户规则只保留四单位或以下项目。最终再次核L24—35及L577—612；没有新增“旧已签合同失效”等推论。

收到最终锁版后，本审者再次全文通读，两个段落、近邻引文与上下文均吻合，其余原已核事实没有被修订放宽。

## 可用性与静态范围

正文按公民／PR／工作／学生／家属准证／访客的实际国籍、物业类别和制度条件分流；普通受限地屋与Sentosa、持牌新售／四单位以下／解除许可后剩余新售、私人二手合同均分开。无完整线上渠道、原则批失效、违约通知、缺陷未修、原房身份及MOP不明有具体下一行动；没有从税优惠、房产所有权或模板栏目推定另一制度资格。

九项元数据、written／draft:true／空核验字段、无正文H1、7个H2、40个近邻外部引用及5处relref（4个不同实际文件）存在、中文加粗外侧普通空格、无内部审稿残留和单一EOF换行核查通过。购房成本稿与本篇互链，须在目标可用的同批工程接收中处理；本报告没有替代主控构建、桌面／手机／打印验收。

HDB当前完整家庭保留／出租／通知细则、EC全部三阶段资格和新旧批次仍由其他主题继续研究，本稿只提供实际入口及明确标注的已读原政策，不把失败页面／检索的新10／15年写成规则。无新URL或版本的失败来源未重复请求；未登录、买查询记录、申请批准、付款、联络或代办。本稿普通私人住宅购买所写范围可以交第三编辑。
