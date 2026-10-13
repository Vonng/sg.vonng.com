# B03C driving 独立事实审

结论：通过，可交 root 第三人编辑静态审。daily_history 于 2026-10-13（Asia/Singapore）独立全文读取最终正文，并逐项回到主管／营运者原文缓存及原 PDF 采用段；没有改 care_finance 的正文。没有必须修订的事实问题。

## 审核版本

- 正文文件：`content/book/life/transport/driving.md`，25,268 bytes。
- 完整 SHA256：`ab6012ac0019ba7b51555a32fcd1c731e55e8579a128a964f3fa8969229a7b11`。
- 正文 SHA256：`cedec6e48c11a3e872a8fb68c9d9dbcde0585f7b316c8f75c34d4ca3171ddc51`。
- 正文散列统一用 UTF-8 `text.split("---",2)[2]`，保留全部空白；开审与出报告前实查一致。文章仍 written／draft:true／verified 与 reviewed_by 空值，事实报告不替代主控接收。

## 独立原文阅读范围

作者证据 T17—18／T22—37 只用于定位与检查未知，没有把作者摘要当作原文。此次实际通读的原文来自 `.cache/research/b03c-transport/driving-research.json`（各条原工具返回）、旧 `tool-results.json` 的详细页返回、`spf-licence.txt` 的真实 HTML 提取及 `spf-btt-2026.pdf/.txt`。缓存中的检索摘要与导航均不作为采用事实的证明。URA 住宅季票在本次另直接回源，完整采用主体 L41—119 保存于 `daily-history-driving-supplement.json`。

| 正文范围 | 本次实际阅读的原文与采用段 | 对照结论及条件 |
| --- | --- | --- |
| 境外驾照与身份时点 | [SPF Singapore Driving Licence](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence)，真实 HTML 提取 L1—204；[转换预约](https://www.police.gov.sg/E-Services/Book-Appointment-to-Convert-Foreign-Driving-Licence)，旧详细返回 L915—952 | 外国居住少于／超过12个月、公民／PR获身份后3个月、FIN转NRIC、WP／S工作驾驶6个月各有对应主体。有效境外驾照、IDP与ASEAN免IDP、访问翻译与转换翻译路线分开；国家材料含马来西亚JPJ与印度认可。境外6／12月证明按预约页的PR／首准证后取得驾照分支及公民分支，没有把一般清单扩大为所有人同一条件。18岁、预评估—预约—TPHQ、S$50及柜台方式吻合。 |
| 工作准证与车型 | [MOM 工作驾驶 FAQ](https://www.mom.gov.sg/faq/work-pass-general/are-work-pass-holders-allowed-to-drive-on-public-roads-for-work) L32—57；[NTS清单](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/sector-specific-rules/non-traditional-sources-occupation-list) L36—124；SPF主文 Class 3／3A／3C与Class4段 | 制造／服务／建造海事Process／S／EP等不同工作限制没有互推。NTS重型车按2025-09-01已有Class4／5且只准核准职业，不能套服务业一般Job Flexibility或驾驶Class3轻车。家属／学生／访客转至本人工作权限，未由驾照推工作许可。 |
| Class4前评估与后果 | [SPF 2026-03-13公告](https://www.police.gov.sg/Media-Hub/News/2026/03/20260313_revised_test_fees_and_mandatory_road_assessment_for_class_3c_3ca_license) L901—914全部采用主体 | Class3C／3CA升4／4P先雇主支持与road assessment；不合格撤原证、1年不能取得任何类别驾照，正文没有省后果。 |
| 职业执照 | [LTA Vocational Licence Application](https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/vocational_licence/vocational_licence_application.html) L262—388、L392—583 | 新TDVL／PDVL至少30岁、SC、SG Class3／3A超过1年，英文、记录、MediSave及医检培训条件；BDVL至少21岁、SC／PR／巴士职业WP，海外驾龄证明仅交LTA审核。申请材料中出现S Pass不能推翻新申请身份资格表，正文未据此给S Pass承诺。ODVL仅指向独立分支。2026 HMER纸本过渡到7月底不被写成现在仍普遍要求纸本。 |
| 首次学车与费用 | [SPF PDL](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Provisional-Driving-Licence) L913—974、[PDL申请](https://www.police.gov.sg/E-Services/Apply-for-Provisional-Driving-Licence) L914—954、[模拟器](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Simulator-Training-for-Learner-Motorists) L912—983、[QDL](https://www.police.gov.sg/E-Services/Apply-for-Qualified-Driving-Licence) L916—975 | 新学员18岁、BTT、有效PDL2年、至少5次实际课后3模拟模块、模块完成2年内实考、考过后申请QDL的顺序吻合。正文没有将中心账号输入成功当驾照签发，没有保证访客当然可领PDL。PDL25／QDL50及有效MOM／ICA Student、LTVP的网上路线有主体。 |
| 驾驶中心范围 | [CDC学校](https://www.cdc.com.sg/course/class-33a/) L170—211、L272—499；[CDC private账户](https://www.cdc.com.sg/course/theory-test-btt-ftt/) L169—243；[BBDC](https://info.bbdc.sg/course/class-3-3a-driving-course/) L8—159 | 学校课程与private路线真实存在，课数按进度而非保证；中心费含登记／模拟／行政／用车／热身，与政府测试费分开。BBDC当前BTT／FTT7.20、实考40及四语一致，不把理论测试语言与教学语言混为一谈。 |
| 2027—2028未来测试费与记分 | SPF3月公告上述主体；[SPF 2026-07-31 DIPS公告](https://www.police.gov.sg/Media-Hub/News/2026/07/20260731_tightening_of_the_driver_improvement_points) L901—935；BTT物理6页 | 政府2026测试费7.20／40，2027-03-13预约理论8／实操45、2028-03-13预约实操50，按预约日而非考试日。试用1年/P牌前后，2026仍13分；2027-01-01改12、非试用首次24月18分，正文明确未来及过渡，不采用教材旧24分作为2027规则。 |
| 续证、适驾与数字证件 | SPF主文上述L1—204及Digital FAQ L222—287；QDL L916—975 | 外国证件到期与到期前1个月网上续期，不推公民／PR长期有效给外国人。65+按TP通知，普通3系列通常每3年，残障医学与额外评估按情况；真实App、截图／录屏无效、须联网、海外实体与IDP核对吻合。 |
| 租借车 | [Avis Singapore](https://www.avis.com.sg/Rent-a-Car) L0—18、L186—263、L294—317；[GIA FAQ](https://gia.org.sg/motor-insurance/23-faq-on-motor-insurance-issues.html) L95—213；[LTA保险](https://onemotoring.lta.gov.sg/content/onemotoring/home/owning/ongoing-car-costs/insurance.html) L262—335 | 本地Avis预约电话67371668、材料随身份不同、商业标准可较严。正文只给核对行动，未借营运者规则推法律资格，未给所有租车公司同一年龄／押金／马来西亚许可。私人取酬出租通常不在普通保单内、用途变动须通知吻合。 |
| COE与当前咨询 | [OneMotoring COE](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/certificate-of-entitlement--coe-.html) L262—340采用主体；[LTA 2026-10-08咨询](https://www.lta.gov.sg/content/ltagov/en/newsroom/2026/10/news-releases/launch-of-public-consultation-on-coe-categorisation-for-cars.html) L5—24 | 初次通常10年、个人18岁／本人账号／FIN，A/B及E当前类别；8Oct至2Nov合并提案仍咨询，未写已施行。无使用当期价格当长期保证。 |
| RF／ARF／EV／PARF | [汽车税费结构](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/tax-structure.html)，旧原工具详情L300—394 | RF350、ARF分档、EV路税AFC及EEAI至2026年末。PARF三批次全表读：2026年2月第二次COE起cap30k、≤5年30%、>9且≤10年5%、>10无。正文的端点、批次、按actual ARF与旧批次区别正确。 |
| 续COE | [COE renewal](https://onemotoring.lta.gov.sg/content/onemotoring/home/owning/coe-renewal.html) 当前详细返回L264—314 | 5／10年与PQP，普通汽车A/B的5年仅一次，不能将商用C类可再5年推给汽车。正文未保证任何具体旧车都可续或仍有PARF。 |
| 二手车转移 | [Transfer ownership](https://onemotoring.lta.gov.sg/content/onemotoring/home/selling-deregistering/transfer-ownership.html) L262—397、L589—601 | 7日、清融资／欠税、A/B>3月与4—6月可能levy、买方本人保险覆盖有效路税全期、卖起买确与通知／dashboard有证。无Singpass资格外国车主两人预约到场／M01／25 NETS或SGQR及检验证明按需吻合；没有用交钥匙替转移成功。 |
| 路税与保险 | [Road Tax](https://onemotoring.lta.gov.sg/content/onemotoring/home/owning/ongoing-car-costs/road-tax.html) L262—414；LTA保险上述主体；GIA FAQ L95—213 | 普通汽车6／12月、至少1工作日前保险／验车／罚款、>10年附加最高50%，四付款渠道及检验中心2025-02起不收现金／支票吻合。最低保险仅第三者人伤／死亡，不推所有财产与租借用途。未纳入额外特殊车全年路税为普通车条件。 |
| ERP与OBU | [当前ERP详页](https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/ERP/ERP.html) L262—353；[ERP2](https://onemotoring.lta.gov.sg/content/onemotoring/home/driving/ERP/erp-2-0.html) L262—657；[2026-02-03过渡公告](https://www.lta.gov.sg/content/ltagov/en/newsroom/2026/2/news-releases/amendments-rta-facilitate-erp2-transition-enhance-penalties.html) L5—37 | 当前收费车型／时间、卡余额与补缴入口；5日从短信发送日起且期内无10行政费。OBU CEPAS不含旧chip CashCard、非全停车场支持后台、电话63772255。2027-01-01普通本地上路车OBU、特殊豁免、车主负责及逾期限制交易均明确未来；没有把安装推成里程计费。旧不含当前宽限的ERP路径未作为最终事实依据。 |
| 停车 | [URA Coupons](https://www.ura.gov.sg/car-parks/short-term-parking/parking-coupons/) L22—86；本次新直接读[住宅季票条款](https://www.ura.gov.sg/eservices-info/carparks/residentialtnc/) L41—119 | 明文覆盖URA/HDB票券停车、0.60／1.20半小时与允许夜停的5／22:30—07:00、SPC目前列点。季票有限、部分特定居民／租客、候补符合原文。HDB两个详情旧失败不重试；正文只提供核自己条件／月费／名额入口，不填未知费表。 |
| 上路安全 | [SPF BTT原件](https://www.police.gov.sg/-/media/SPF/Knowledge-Hub/Traffic/BT-ENG-24126.pdf)物理6／8／38／58／60／61页，分别对应印刷5／7／37／57／59／60页 | 靠左、雨湿减速、镜／盲点／打灯、乘客安全带及<1.35m认可约束、手持操作通讯设备须先安全停车均有文字主体。采用段含教材旧／新处罚有差异，正文没有抄处罚数字或用它盖过2027新公告。 |
| 事故三种程序 | [GIA MCF](https://gia.org.sg/motor-insurance/22-premium-renewal-of-policy/348-motor-claims-framework.html) L95—157；[GIA事故／GEARS](https://gia.org.sg/motor-insurance/22-premium-renewal-of-policy.html) L220—358；[SPF必须报事故](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Reporting-Traffic-Accidents-and-Offences) L912—956与[警方入口](https://www.police.gov.sg/E-Services/Lodge-Traffic-Accident-Report) L911—933 | 所有事故含私了／租车向保险方MCF，24小时或下工作日、严重受伤／境外原因先联系。警方六触发类别逐项核含现场救护送院／至少3天门诊病假、外国车辆、行人骑者等，未把MCF时限当警方统一时限。Singpass／邮箱与无Singpass外国护照自助机途径，GEARS仅通知仍需ARC final report、FIDReC按争议入口均吻合。 |

## 原件与未做范围

BTT 原件12,303,698 bytes，SHA256 `2f0c0a454c01b5a0023c9525206fb2c2f188e19640027d23adc3d89792b1a5b3`，本次实查与作者记录相同。实际独立读上述六页文字，不声明逐页读完90页、不声明本次目视全部图表；正文没有依赖车内安装位置或教材插图的额外结论。多页工具返回较长造成截断的采用范围已另分批补读，未以漏出段落判通过。

没有重开HDB季票／短停车同URL的旧403，也没有重探SPF已失败主URL；SPF采用原HTML主体和已成功详细返回。没有降低TLS、绕验证、操作账号、付费、预约、申报事故、租车／买车、联系营运者或真实驾驶。付款渠道和办理路线只是主管公开说明，未声称真人端到端完成。

轻量静态复查：九项元数据、draft核验空值、正文无H1与加粗外侧空格吻合；本篇使用实际站内链接，工程链接／渲染检查交root。本报告是异人独立事实审，不是第三人编辑、共享构建或实际网页目视报告。
