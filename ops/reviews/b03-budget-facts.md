# B03 家庭预算独立事实审

审稿人：care_finance；作者：root。实际查阅及全文复读：2026-10-13（Asia/Singapore）。本记录是异人回源事实审，正文只读，不替代第三人编辑、主控构建与实际渲染。

## 结论与锁版

**通过正文所写范围的事实与全篇可用性核验。** 未发现需要作者修改的事实问题。文章让读者从到手收入、费用时间和家庭分工做出一份预算，能处理收入波动、年度账单、一次支出、应急储备和已发生的现金缺口。所给两组数字均明确标注教学虚构，没有冒充新加坡平均开销、最低生活费、产品收益或统一资格。

锁定文件 `content/book/work/finance/household-budget.md`：

- 完整文件 SHA256：`5323b90bfa02ff23a60695b6afaf93546a47eb4bbdadbf99753283685d0a3eed`
- 统一正文 SHA256（UTF-8 文本 `split("---", 2)[2]`，保留闭分隔符后的换行）：`dc4146d2f62c6a5bad41b1c450b24ef9fec90b064d000e08f3b24914c0c9a19c`

实际重算与作者交付相同；核验字段仍由主控在接收流程中提升。本篇作者为 root，第三人编辑应由 identity 完成。

## 实际回源范围

作者证据仅用于定位；以下七组原文均由本审稿人重新打开并阅读正文相关章节。没有以搜索摘要替代原文。

| 编号 | 独立实读详细原文 | 核验结论与边界 |
| --- | --- | --- |
| R01 | [MoneySense：Managing your money](https://www.moneysense.gov.sg/managing-your-money/)，页面日期 2026-09-28，实读全文，特别是 Setting a budget、Checklist L66–87 | 收入只纳入可靠金额，不预用尚不确定的奖金佣金；月度支出包含税、债务、日常项目和受供养者。正文的四组时间分类是合理教学组织，没有把 MoneySense 的储蓄比例写成普遍强制目标。 |
| R02 | [MoneySense：Basic Financial Planning Guide](https://www.moneysense.gov.sg/planning-your-finances-well/)，2026-09-29，实读全文及现行 FAQ 入口 | L34 明确为 rules of thumb；L56 为三至六个月 expenses。正文采用开销口径及经验起点性质，没有混成收入倍数。 |
| R03 | [Consumer FAQs on Basic Financial Planning Guide](https://isomer-user-content.by.gov.sg/309/3521b80b-3319-45e0-b8b5-a293c39604be/FAQs_for_consumers_on_Basic_Financial_Planning__finalised_.pdf)，7 页 PDF，独立读取解析正文，重点印刷页 1–2 / PDF P0–1 | 第 1 页说明非监管要求、个人需要不同；第 2 页明确收入不稳定的 freelancer 可需要更多储备，储备须容易取用，不建议放股票，CPF 受专门条件限制。正文“第 2 页”定位正确。这里使用文字结论，没有声称图表或逐页图像审查。 |
| R04 | [CPF overview](https://www.cpf.gov.sg/member/cpf-overview)，实读 How CPF works、Using your CPF、Retiring well 等正文 | 雇主与雇员份额分列；CPF 有住房、获准医疗及退休用途。正文说不能把总余额等同今日可任意支付的现金，成立；未否认符合条件时可提款，也没有在本篇重新推广某一档费率。身份、年龄、PR 阶段及自雇细则链接至已集成 CPF 主文。 |
| R05 | [MoneySense：Managing debt—What can you do?](https://www.moneysense.gov.sg/managing-debt-what-can-you-do/)，2026-09-28，实读全部债务处理段 | L56–69 支持尽早联系原金融机构，L78 支持追加借款前比较利息和费用。正文没有保证重组成功，没有把 DCP 的公民/PR、资产、收入及债务门槛泛化到所有读者。 |
| R06 | [Credit Counselling Singapore：Consumer Debt Management](https://ccs.org.sg/consumer/debt-management/)，实读 Information Talks、Arranging for a Credit Counselling session 和联系段 | L68 说明会免费；L129–133 要在说明会后按指引取得、填写和递交 Counselling Request Form 及所需材料，再安排辅导。正文顺序与条件吻合；没有把说明会登记写成获批 DMP、债务减免或保证重组。CCS 全称清楚，未与竞争及消费者监管机构混淆。 |
| R07 | [SupportGoWhere](https://supportgowhere.life.gov.sg/)，先 web 实开获得 JavaScript 壳，再用本机 Chrome + Playwright 正常加载原 URL、独立读取实际 `body` | HTTP 200；实际可见 Financial support and benefits、照护、住房、工作等分类及 ComCare、SCFA 入口，页脚为 2026-10-05。同时出现 No internet connection 提示，与作者记录相符。正文仅使用已看到的分类名称，并要求逐项目核对条件；没有保证申请、筛选、聊天等交互可用，也没有采用未核验金额或资格。 |

## 演算与全文边界

- 独立计算年度例 `(2400 - 600) / 6 = 300`；若只存六次 S$200，加既有 S$600 合计 S$1,800，确实不足 S$2,400。
- 独立计算表内 `2200 + 1000 + 250 + 400 + 150 + 300 + 600 + 500 + 300 + 300 = 6000`。税款与年度保费已说明在年度预留中计算，例子没有明显重复。
- 固定工资、波动收入、学生汇款、退休月领、跨境费用分别有可用入口；先按可靠到手金额记账，不凭雇佣或居留身份推定援助资格。
- 押金占用现金、年度预留与应急储备分别计数、信用卡消费与付款避免重复，是本文明确提出的记账方法，不是新增法律规则。
- 租赁、医保、个人税、IR21 及离职后身份问题只链接到现存正文，并未在预算页添加新的法定期限或待遇判断。本次不冒充再次对所有目标页做完整政策审查。
- 没有登录、提交求助、实际协商、开户或产品购买；没有核验 MSF 援助额，也不需用受阻的 MSF 页面来证明本文未作出的资格或金额断言。

可交 identity 第三人编辑；正文在此 SHA 下冻结。第三关及主控的构建、渲染检查尚待其各自记录。
