# B01 第三人编辑静态审与主控接收

审阅者root，2026-10-13（Asia/Singapore）。root未撰写九篇主题，事实审阅人与作者也各不相同。本人通读九篇，接收三份逐源独立事实审，核对最终完整文件SHA；三份事实审使用不同正文空白口径，统一以文件SHA识别，再按split('---',2)[2]记正文hash用于元数据提升后的校验。

## 编辑结论

- 身份三篇：资格概念、准证选路与NS任务边界清楚，采用全岛身份模型，主要类别未被EP取代。学生、ICA/MOM家属、NS的PTS/学生/父母担保/旧身份均有分支。REP与查询薪资范围修订符合独审要求；标题、description和首段用途一致。
- 医疗/CPF：入口、支付及账户解释分别维护；LTVP+、外籍MediSave亲属、WP+DP保险例外、低工资/PR阶段/自雇/平台工均有明确对象。虚构预约句已加标签，无用App对比删除；CHAS关键限制已补齐。构建曾发现四处加粗空格错误，作者人工修正，需最终HTML再查。
- 交通/历史/语言：办事步骤和史论、文化情境写法有别；优惠/无障碍不预设公民，历史含马来世界、劳工和多群体战争经验。无来源中文人名改回Goh Sin Tub；语言页删除空泛总结并正面表达本地词汇。
- 近邻来源、内部链接、英文长词、表格和日期均已检查。公开内容没有任务号/本地路径/工具编号。此静态审不声称再次替代事实审，也不代表浏览器验收。
- 当前九篇通过内容门禁，先记verified并进入生产审查构建；仅在实际渲染和public同步后改integrated。root编写的26个编辑导航页为编辑审阅，不填写政策核验日。

## 接收版本

| 文件 | 作者 | 事实审 | 内容SHA |
|---|---|---|---|
| `content/book/life/documents/status-and-eligibility.md` | identity | care_finance | `a936377f7278d2a245752cb1aeb58987216d0c5aee25a286022ddcb073b94d7e` |
| `content/book/life/documents/work-passes.md` | identity | care_finance | `5a1730c03cc45b06d5bd5e6dec795f6b4d180c966eff0b3fe31db46b57391d47` |
| `content/book/life/documents/national-service.md` | identity | care_finance | `0c98c58eaf16b42ac09ac69f7cb0b3fdb301238557193bfb742535114aeac5fe` |
| `content/book/people/healthcare/getting-care.md` | care_finance | daily_history | `b5bb781c2fc6aeb13e019bd93db531fe3763eecb8d19cd2ace793bc4efb850db` |
| `content/book/people/healthcare/healthcare-payments.md` | care_finance | daily_history | `3e86edad298db597fb2f5fe7f6bef120fa0fd48e5702f38c58ef005a227e38a8` |
| `content/book/work/finance/cpf-basics.md` | care_finance | daily_history | `a02f942c16e6f1bea943646ec62c36555d998b504d552d07d2879b5dcb6966e0` |
| `content/book/life/transport/public-transport.md` | daily_history | identity | `b49ae3a7932164bc72cdc9327a84df591a12df7198113db64a30f09b336d1062` |
| `content/book/foundations/history/port-city-to-nation.md` | daily_history | identity | `4a980a8a43b6b8b6842bd65fe1b5b66d476da60ef30191a2b8b9539b04e6bc44` |
| `content/book/people/language/everyday-language.md` | daily_history | identity | `243efe369597e0260d2d4cf47bbb58550f2dd875ad81b3f80e1b69f721b50270` |

## 集成补记

2026-10-13：正文未变。最终桌面/手机交互、代表截图与暗色转纸面表格复核通过；Hugo、源码/内部链接及草稿隐藏夹具通过，125个本地public文件与审查产物路径/大小/SHA一致。九篇提升为integrated/draft:false。具体实际范围与限制见ops/ENGINEERING.md及ops/checks/b01-acceptance.json；不代表全书完成。

提交前仅清理everyday-language末尾多余空行，逐字正文相同，事实审锁定文件SHA仍保留；accepted正文SHA记格式后的版本。此项不改变核验日期或事实结论。
