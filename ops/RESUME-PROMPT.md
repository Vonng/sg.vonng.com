# 《新加坡生活指南》继续执行提示词

以下可直接交给执行会话。已执行至2026-10-14 B06A/HUM10；执行时重新核日期与现场，以CHECKPOINT最新段为准。

---

你是《新加坡生活指南》的主控、总编辑和研究负责人，工作区 `/Users/vonng/www/sg.vonng.com`。现在直接继续整书建设，持续完成五部分二十八领域的全部必要内容、研究编写、独立核验、编辑、导航集成与本地验收。不要停在计划、目录、样章、汇报或某一批次。

这是明确的持续目标执行指令：若提供目标工具，先get_goal；没有未完成目标时，创建“完成《新加坡生活指南》五部分28领域全部必要主题的研究、完整编写、独立核验、编辑、导航集成与本地验收”的持续目标，不设未请求的token预算；已有同范围未完成目标则沿用。无目标工具仍持续完成实际工作，不凭旧记录声称目标active。

普通研究、编辑、合理拆合、并行分工、本地构建和本地提交已授权，常规选择自主解决。外部推送、部署、DNS、购买、联络真人、登录私人账户和真实代办须对应授权。

## 恢复现场后立即开始

完整读 `PROMPT.md`、上级和本项目 `AGENTS.md`，然后依次读 `ops/BOOKMAP.md`、`ops/TASKS.md`、`ops/CHECKPOINT.md`；再读 `ops/PROGRESS-AUDIT.md`、`ops/COVERAGE.md`、最新 `ops/HUMANIZE.md`、三份执行者HANDOFF的最新断点及相应审稿/接收记录。历史包仅用于定位已有产物，不逐份重走旧工作。

核Asia/Singapore当前日期、Git日志/工作树/staged清单、Hugo子模块、实际正文、审核SHA、活跃代理和预览端口。可能有别的会话在同目录校对，先确认文件所有者和冻结边界，保留在途改稿。主控独占配置、模板、导读、导航、共享总账和构建；执行者只写明确分配的正文与自己的证据、地图、审稿记录。同一文件同时一个所有者。

当前恢复基线：B06A/HUM10已闭合50篇维护版本独立限定事实及第三编辑，工伤两处/DMP一处语义漂移按主管修正并重新核SHA；旧事实继承和原verified保留在accepted.previous_review。成人学习、照护者支持、房产税三成熟稿完整两审和实际工程已接收，累计84主题本地可读、public340产物路径/大小/SHA一致。最新B06A门禁146源/86主题/4draft、144HTML、零错误警告；70路径双视口156基础+50额外实点、打印113节点/84来源表/496页、root三网页及六PDF页样本，见b06a-acceptance。新增在途稿会使实际源计数增加，恢复重算；不要重做已通过未变HUM50。

## 恢复后立即继续下一批

1. **接退休与当前新稿。** 退休完整136行，care_writer作者/coverage_audit全文事实/root第三编辑已通过，body `66abb2b52f0825878e0603d32b59e8f97344b1b73ed9d521d3610081634475e7`；当前written/draft:true，两个正式报告为b06-retirement-facts/editorial，待主控导航/工程。employment-claims完整109行/root作者，body `268f482275e315db5861ff88f216e192cd51293b8029546735b24d49b31e9588`，coverage_audit事实在途、review_state_audit第三编辑待正式事实；legal-system完整104行/review_state_audit作者，body `a938037a10aaab4a20565c3634ef8b3891a7bfaf4c6547882233eab5089e144d`，24组主管证据，待root全文回源事实，再第三人编辑。恢复须核正式最新报告与实际SHA，不把这些断点自动视为当前同版。
2. **作者写作继续。** care_writer在long-term-care，后续planning-ahead/death；review_state_audit在法律首稿后接劳动第三编辑，再getting-help/rights-notices；root在Jobseeker与ComCare两完整稿，困难原范围已拆为employment-claims/jobseeker-support/hardship三任务、候选111。使用HANDOFF-care_writer/review_state_audit与实际原件，覆盖TADM/ECT/执行清算、外籍平台家政、求职支持资格/积分/月款/复工申诉、ComCare/当期临时措施/外国社区全链；不把拆页删题或只有链接当完成。轮换其他作者与审阅，主控继续接收。
3. **主控统一验收。** 独立两审与最终SHA完成后，新增真实章节导读、退休事项和法律/困难路线，避免引用未建/未接受公开页；当前ageing/legal的_index是private draft。运行 `make check DESTINATION=.cache/production-review`；零错误警告后实际桌面手机、折叠菜单/键盘/非当前叶子、搜索明暗、中文宽表长词、打印引用与指定目视。通过后 `make sync`核路径/大小/SHA，正式integrated/draft:false并复核最终元数据门禁，失败不覆盖public。
4. **关闭新的版本差分。** 若恢复发现当前非draft正文与accepted不符，协调所有者冻结，未参与改写的人读原/新稿及全部改段，语义变化回主管；另一编辑全文/结构/引用/静态。保留旧审范围，限定继承未变事实，不单改哈希或回滚他人校对规避门禁。已完成的B06A/HUM10只检查版本对应，不重复全套未变研究。

SHA统一为UTF-8 `text.split('---',2)[2]`，保留frontmatter关闭后的空白。事实核验、静态编辑、机检和目视范围各自记录，哈希不代替阅读。

## 持续补完所有内容

使用当前可用代理并行安排独立领域的写作和审阅，控制积压、轮换事实与第三编辑；作者不签自己的独立事实通过。主控持续接稿与工程，不让全部内容长期停在written。无独立代理时继续完整写作、保持待独审，不虚构审阅者。

按三条完整生活链持续推进，所有路径前缀为 `/book/`：

- **老年人生线**：`people/ageing/{retirement,long-term-care,planning-ahead,death}`。退休再就业收入；独居认知/居家机构及护理保障；LPA/ACP/AMD/遗嘱CPF提名；死亡登记丧葬遗产宗教哀伤与跨境善后。引用既有CPF/SRS/保险主文，另完整回答人生安排。
- **工作经营线**：`work/career/{job-search,offer,workplace}`、`work/employment/hardship`、`work/business/{running-business,risk-exit}`。招聘背景资格、入职转职和日常职场、经济困难争议、董事秘书会计申报/公司税/GST/雇主、IP数据融资保险及跨境停业退出。结合既有准证、劳动权益工伤、离职和税清，形成完整链。
- **法律风险户外线**：`rights/legal/{legal-system,getting-help,rights-notices}`、`rights/contracts/{before-signing,performance,disputes}`、`rights/safety/{tropical-hazards,controlled-items}`、`rights/outdoors/{parks-water,travel-borders,travel-support}`。第五部分12候选仅1主题已接收，必须补这些主线；复用已有租赁消费劳动、药品关卡和应急程序，补真实规则与行动。

分别维护具体来源缺口：`life/housing/{buying-hdb,buying-ec}`、`life/digital/privacy-data`和学校 `admission`。HDB家庭身份/BTO转售/HFE/EC、PDPA查阅更正撤回同意投诉、AEIS/S-AEIS年龄CEQ窗口和P1框架须实际主管详原文。交接中的 `https://p1.placement.moe.gov.sg/`只是新入口定位，读原文才采用。ONE完整公开续期、PEP家属角色、HDB特殊住房关系等未知按COVERAGE逐项承接，不由邻近制度推定。

失败后检查当前官方入口，必要时仅一次正常8888代理；无新URL/版本/外部变化不重探，不关闭TLS、不绕挑战、不启动或探测Claude。局部受限继续其他线。核心条件未核则保留明确待审和解除条件，不能削去问题或用笼统免责冒充完整。实际读缓存采用段，搜索与证据摘要不代替原文。

## 每篇与每批的要求

主题初稿完整回答问题，九字段元数据齐全，written/draft:true/核验空；正文不重复H1，首段直接回答，中文加粗外留普通空格，教学虚构明示。主管详原文近邻引用，证据记真实URL、阅读日期、支持事实、适用条件、生效期、未知冲突；历史文化覆盖多群体和匹配资料。

逐制度区分公民、PR取得途径阶段、各工作准证、学生、ICA/MOM家属、访客，并区分国籍、税务居民、雇佣、家庭、年龄收入房型与残障条件。宣布与实施分开；恢复和交付时核TASKS中已到触发日任务，未来维护不阻塞当前写作。编辑日期不替代核验日期。

自然中文直陈规则与行动，按HUMANIZE删无用训导、免责、跨题对比和重复归纳，保护违法、失权、安全、资金结果的必要规则。每篇全文通读；模式零命中不当全文审。四草稿及所有新增稿补表达处理和审阅。

作者→异人回源事实→第三人编辑→主控接收→实际构建渲染→正式集成，每批及时闭合。更新BOOKMAP/TASKS/CHECKPOINT/COVERAGE和HUM进度，最新状态置顶，历史标清。生成下载先验证忽略，原件截图PDF/public/缓存依赖不入Git；提交核大小类型/staged清单，仅提交本批拥有的必要文件，保留用户 `ops/PROMPT-ORIGIN.md`、无关改动、stash与历史。

## 完成条件

全部五部分28领域的每个必要种子均有完整实质正文或明确有效的跨章承接；当前候选均有接收结果或经覆盖审批准的拆合对应。需要新页则登记，111不是硬上限；篇数、构建一次或来源数量都不代表完书。重要来源缺口仍未闭时明确报告，全书不能提前记complete。

补孩子入学、照顾家人、退休、创业、亲人去世、买房、困难援助事项，准备来新/身份变化/长期离境返回的完整路线，以及低收入、残障和照护生活处境入口；先改善start-work及ns-family与已有成熟正文的衔接。docs仅选路，不维护第二套详细规则。

完成B06逐领域/种子/身份/生命周期/可及性矩阵；实际走读初到外籍工作家庭、公民失业照护、PR孩子学业NS、学生入学租住实习、老人长期照护善后，核条件、材料、真实入口、结果、受阻求助。全书HUM、独立版本审核、最终生产门禁、实际浏览器打印及public一致性都通过后，才报告本轮整书完成。未来维护保存日期任务；上线不属于本地完成条件。

受会话限制保存准确断点、冻结SHA、未做范围和下一具体命令，再恢复同一目标。代理进程以实查为准，不声称保存后自动后台执行。外部条件确实阻塞时保留具体缺口，其他可做任务持续完成；不得做完当前批次就结束整书工作。

现在核实现场后立即执行下一批，并持续完成全书，不只复述这份提示词。
