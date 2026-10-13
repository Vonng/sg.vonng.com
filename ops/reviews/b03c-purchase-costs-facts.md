# B03C 购房成本独立事实审

审阅者 identity；2026-10-13（Asia/Singapore）。作者 daily_history，第三编辑与工程接收交 root。本报告只审购房税、现金／CPF及融资预算，不签发 HDB 家庭购房、EC 或外国人产权资格的全领域通过。

## 版本与结论

实际逐段阅读初稿及作者修订后的完整正文，并独立核对全文和统一正文 SHA。最终所写范围及全篇可用性 **通过**，三项修订已关闭，没有剩余阻断事实问题。审阅者没有改正文、元数据、共享总账或运行构建。

| 版本 | 字节数 | 完整 SHA256 | 正文 SHA256 |
| --- | --- | --- | --- |
| 初稿，仅保留问题历史 | 27,805 | `7c1150ea048a4fcefe159291451ff0b8948d04e53adbd0f5135e0833a019e34f` | `8d256734fc26200bf334c3dcaf0df8ba676c17528ab4a0a781241f94270bf103` |
| 事实首轮通过，保留历史 | 28,103 | `21abfeb73449c3a6d6e7206717b34d1be114907c5989c96684618751938fb506` | `22a79ce7f89d294ab8e0ef15ee3a40d8fbe510e0a5b832c35577ecec97501585` |

文件：[purchase-costs.md](../../content/book/life/housing/purchase-costs.md)。正文 SHA 算法为 UTF-8 `text.split("---", 2)[2]`，保留分隔符后的全部空白。最终仍为 written／draft:true，verified、reviewed_by 空值；通过仅绑定上表最终版本，主控后续元数据接收应保持正文一致。

## 独立采用原文与阅读范围

作者证据 [b03c-housing.md](../evidence/b03c-housing.md) 的 HP 编号只作定位。本次亲自阅读实际主管详细原文；新取 HDB 两详页，其余采用同日成功取得的原件／原工具提取缓存，不以作者摘要或搜索结果代替。原文件目录为 `.cache/research/b03c-housing/`。

| 主管来源与采用范围 | 本人实际核查的结论及边界 |
| --- | --- |
| HP18 IRAS BSD，`purchase-costs-tool-results.json` 的 costs-primary-1，L898—965 | 住宅 2023-02-15 起六档、价与市值较高者、非现金优惠不可扣、现金优惠文件和时点条件。正文逐档表及教学 BSD 与原文吻合；不采用商住、工业或旧批次作本例依据 |
| HP12／13 IRAS ABSD、FTA；`buying-private-tool-results.json` 的 housingPrivate23orig、21orig，L898—1037及采用 FAQ L1068—1105；FTA L914—943 | 实际 ICA 身份、住宅权益计数、已订出售合同、最高共同买家税率作用于整价、境外住宅排除、继承／赠与／信托权益。SC／PR／外国个人当前表正确；四个欧洲国家含国民及PR、美国只含国民，不推住房产权或居留资格 |
| HP14 IRAS [夫妻减免](https://www.iras.gov.sg/taxes/stamp-duty/for-property/appeals-refunds-reliefs-and-remissions/common-stamp-duty-remissions-and-reliefs-for-property/remission-of-absd-for-a-married-couple)，housingPrivate26_0 L914—990 | 首次共同购买只夫妻两人、至少一SC、各无住宅；第二套先缴、各最多一套、婚姻／产权及不再购房条件。卖旧与申请退款两组六个月及现房／楼花起点正确；2023-07-02 后表件声明的自动处理没有变成所有换屋自动退款 |
| HP25 IRAS [单身SC长者减免](https://www.iras.gov.sg/taxes/stamp-duty/for-property/appeals-refunds-reliefs-and-remissions/common-stamp-duty-remissions-and-reliefs-for-property/absd-concession-for-single-singapore-citizen-(sc)-seniors)，costs-primary-7 L921—1005；HP26 HDB／开发商新EC L914—929 | 长者旧房持有方式、全体买家年龄／单身／SC、原业主参与、规定近亲、每套旧房价值、产权不变及两个期限已完整说明。HDB批准后的减免与二手EC区分正确；PR HDB 5%及SERS另有减免不用于推购房资格 |
| HP27 IRAS [ABSD（Trust）减免](https://www.iras.gov.sg/taxes/stamp-duty/for-property/appeals-refunds-reliefs-and-remissions/common-stamp-duty-remissions-and-reliefs-for-property/remission-of-absd-(trust))，costs-primary-9 L914—1005；HP28 加购产权 L914—965 | 65%先缴、文件执行起六个月、仅可识别个人、住宅转入时既得及不可撤销／变更／后续条件、remainder／reversion排除和最高受益人税率差额正确。加购同物业份额不是无条件免税，BSD另核 |
| HP19 IRAS SSD，costs-primary-1／2 L899—996及采用 FAQ、豁免段 | 2017-03-11至2025-07-03三年12／8／4；2025-07-04起四年16／12／8／4，无OTP过渡；不同份额原取得日、价／市值及MOP区别。正文没有将家庭转让或获准处分统一视为免SSD |
| HP20／21／31 MAS 五详页：LTV L24—77；MSR／TDSR L24—55；计算 L32—154；优惠扣除 L24—48；借款／抵押／担保 L24—55 | 贷款数与物业数不同、75／55、45／25、35／15档和现金5／10／25；25／30年及65岁低档、最长30／35年、共同收入加权年龄。MSR适用HDB／未届EC MOP，TDSR55%、收入折减／雇主CPF排除、4%评估利率、旧贷剔除文件、住宅借款人角色和担保转共同借款均准确 |
| HP01／16 HDB [购房指南](https://www.mynicehome.gov.sg/get-started/hdb-buying-guide/)、[贷款指南](https://www.mynicehome.gov.sg/get-started/hdb-loans-guide/) 本次新取全部采用主体 L14—86／14—145；HP04 Annex A物理第1页、HP05 Annex B全文文字 | HFE与贷款要约时点、至少一SC及独立审核、0.1百分点／75%／25年等限制、OA可保留20,000、放款前重评。签Lease 10%／20%与银行75／55档现金条件、第二次贷款保留25,000或50%较高者。2026-08-24 HFE新旧处理与收入评估期有原件支持；其他房型完整家庭资格不由这些成本段推定 |
| HP22／23 CPF住房主页 L299—396、限额FAQ L177—216及首套图；完整住房条款 L253—611按多个原工具块连续读取 | 住房可付／不可付项目、银行最低现金、转售价差、最年轻CPF业主95岁、20年或以下排除、按贷款种类决定上限、多物业BRS／FRS、卖掉覆盖95岁物业影响、六个月宽限及TOP／完成购买起算正确；法律／税／升级费用不占住房限额。私人律师申请、直接付受款方、退款本金利息／质押及市价出售不足例外、option款及贷款变化通知均有条款支持 |
| HP24 CPF售转退款 L177—195、55岁后供贷 L177—190、HPS L177—201 | 账户确数与2013前旧人条件保留；保留OA、后续缴款／分配率变化与严重既往病未获HPS仍可用CPF准确，没有把保险拒保写成失去CPF住房用途 |
| HP15 MoneySense `How home loans work`，housingPrivate27orig L32—215 | 贷款要约／factsheet、锁定及转贷费用、私宅不适用HDB贷、银行不能转回HDB、供款困难先联系贷款机构。未采用页面明显不一致的演示利率／EIR表作教学计算 |
| HP29 IRAS盖印期限 L897—920、电子文件详解 L901—1040；HP30三个正常200原HTML对应解析TXT主体 | 签前盖印及已签14／海外收到30天、线上签署与在新加坡查看／储存／带入的日期、myTax／SFA／本地代表／Revenue House e-kiosk、证书今年及前三年、普通抵押0.4%上限500均吻合。未进入真实登录、申请、支付或领取证书 |

新取 HDB 原始工具返回另存 `identity-purchase-costs-tool-results.json`。已实核三个 IRAS HTML SHA 与抓取元数据相同：eStamp `ee713c1c642e0526c08235b0664beada275a94c37238088ee9ab1e7bf6cf768f`；certificate `b5ea1a5d5ad8086314ad9fac9d77c8fccba29ef9430668536224ba68402d4145`；mortgage `c1c4b5703345f39947645495cd9679324b54a6ba7c74e2a1151687074ce451f4`。

## 发现与作者修订闭环

1. 长者减免初稿只限制新增买家为规定近亲，没有写出旧房原共有人也须为合资格近亲。本人核 HP25 L926(b)，作者补充旧房单独／规定近亲共持，最终句与L924—948一致。
2. 信托初稿的“符合规则的既定受益权益”未写全不可撤销、变更、后续条件及remainder／reversion排除，且“信托成立时”应为住宅转入信托时。本人核 HP27 L929—949、981—992，作者改为仅可识别个人及完整既得限制，最终时点与限制准确。
3. CPF换屋初稿只写“六个月宽限”起点，未交代期间免保留适用BRS／FRS的作用。本人核 HP23 L504—519，作者补明该作用并保留新房须成为唯一使用CPF物业的条件。

上述均由作者修改。本人收到最终SHA后重新读取整个文件、复对三处原文，确认其余段落、近邻引用及适用边界没有被修订放宽。

## 图件、计算与有限静态核查

实际通过 `view_image` 目视 `cpf-first-property-chart.png` 全图、表A所有行与脚注。原件为image/jpeg，530,329bytes，SHA `5ac8821a523ac02df26da5a7d40c2270dcfd4e7f8e34de620a7391a1c4b7b319`，没有因缓存扩展名而声称PNG原件。亦实际目视 `hdb-income-annex-a-page1.png` 两表及脚注；Annex A PDF SHA `cbe2a587bd28aa2e4a0eb165dcb2d79cd23119fd303e6998bac078b87da6b59f`，Annex B SHA `58557bb51aa953e2325c91ea0d307444ccf5cbb85bb361ba13be3ad8a0d0cdd0`。不声称Annex A第2页或整站网页逐屏目视。

本人用Decimal独立逐档复算教学条件下BSD24,600、贷款750,000、最低现金50,000、其他房差200,000；SC／PR／无减免外国个人总房差加税274,600／324,600／874,600。假设及未列费用明示，没有把监管上限写成实际银行承诺。

九项必备元数据、草稿状态、空核验字段、正文无H1、中文加粗外侧普通空格及54个近邻外部引用核查通过；没有计划页relref。机器与全文静态核查不代替事实回源，亦不声称生产、手机、桌面、打印或真实办理已验收。

HDB已失败的资格／贷款详页、挑战页及搜索定位结果没有用于通过结论，也没有重复请求。完整HDB家庭、EC三阶段和外国人产权批准仍由各自主题独立核查；本稿对SC、PR、工作／学生／家属准证和访客采用本制度的实际身份、贷款及CPF条件，所写成本范围可以交第三编辑。


## 第三编辑标签修订的限定复核（2026-10-13）

daily_history本人按root要求将唯一一处 `**教学假设**` 改为 `**教学虚构**`。identity读取当前文件并将该处在内存反向替换，完整与正文SHA严格恢复为上表事实首轮通过版本，确认没有其他字节、假设、数字、来源或适用条件变化。该标签准确表达此处为教学假设案例，不改变事实含义；原全文事实结论继续适用。本次限定差分复核通过，不重复网络获取／全域重审或冒称构建验收。

最终冻结：28,103 bytes；完整SHA256 `afa5e9e4ea33639d9cc7fa71333f37a3c6a3131e30ab8bf71ca1a4e79907e2a4`；正文SHA256 `7eea21348ebcd9e704f784048b60d4566f9ab108c223ae10a42d9be1d613a60c`。本段为当前接收绑定，前表保留历史。
