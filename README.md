# 新加坡生活指南

[![Website](https://img.shields.io/badge/Website-sg.vonng.com-245b54?style=flat-square)](https://sg.vonng.com/)
[![Hugo Extended](https://img.shields.io/badge/Hugo-0.166.0_Extended-ff4088?style=flat-square&logo=hugo&logoColor=white)](https://gohugo.io/)
[![OINK](https://img.shields.io/badge/OINK-1.3.0-245b54?style=flat-square)](https://github.com/pgsty/oink)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?style=flat-square&logo=github)](https://github.com/Vonng/sg.vonng.com)

面向中文读者的新加坡社会与生活参考书，涵盖社会背景、日常生活、家庭健康、工作财务和法律风险。可以从头阅读，也可以按正在处理的事项和自身处境查找。

## 阅读入口

[网站首页](https://sg.vonng.com/) · [阅读全书](https://sg.vonng.com/book/) · [按事项查](https://sg.vonng.com/docs/routes/) · [按身份与处境查](https://sg.vonng.com/docs/profiles/) · [术语对照](https://sg.vonng.com/docs/glossary/) · [阅读说明](https://sg.vonng.com/docs/about/)

全书分为五部分：认识新加坡、建立日常生活、人生与家庭、工作与财务、法律与风险。正文统一维护在 `content/book/`，事项、身份与处境入口引用相应主题。

## 兄弟站点

| 指南 | 网站 | 源码 |
| --- | --- | --- |
| 加拿大生活指南 | [ca.vonng.com](https://ca.vonng.com/) | [Vonng/ca.vonng.com](https://github.com/Vonng/ca.vonng.com) |
| 新加坡生活指南 | [sg.vonng.com](https://sg.vonng.com/) | [Vonng/sg.vonng.com](https://github.com/Vonng/sg.vonng.com) |
| 美利坚生活指南 | [us.vonng.com](https://us.vonng.com/) | [Vonng/us.vonng.com](https://github.com/Vonng/us.vonng.com) |

## 本地运行

需要 Hugo Extended **0.166.0**、Git 和 Python 3。OINK 主题通过 Git 子模块固定为 **v1.3.0**，站点构建不依赖 Node.js。

```sh
git clone --recurse-submodules https://github.com/Vonng/sg.vonng.com.git
cd sg.vonng.com
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
make check DESTINATION=.cache/production-review
make preview
```

主题开发使用 `make dev`，读取 `~/pgsty/oink` 的当前工作树（Hugo Extended 0.166.0）。
可用 `make dev OINK_LOCAL=/path/to/oink PORT=1314` 覆盖主题目录和端口。
此入口通过 Hugo `themesDir` 选择本地主题，不修改 `themes/oink`；原有构建、检查和预览入口
继续使用仓库内固定的 OINK 版本，可离线构建。Go/Hugo workspace 和继承的模块替换均被禁用。

预览地址为 [localhost:1327](http://localhost:1327/)。已有检出目录先运行 `git submodule update --init --recursive`，使用仓库固定的主题提交。

## 构建与维护

`make check` 执行生产构建，并核查页面结构、站内链接、锚点和草稿过滤。上例将审查产物写入 `.cache/production-review/`。`make build` 默认生成 `public/`；`make sync` 将通过检查的 `.cache/production-review/` 同步到 `public/`。

项目目标见 [PROMPT.md](PROMPT.md)，编辑与审阅约定见 [AGENTS.md](AGENTS.md)，构建细节见 [工程说明](ops/ENGINEERING.md)，当前进度见 [CHECKPOINT.md](ops/CHECKPOINT.md)。

正式主题经过事实审阅、编辑审阅与构建检查后集成；修改措辞时保留事实、来源和核验日期。提交前运行生产检查，发布后核对托管构建结果及正式域名的页面与资源。

| 路径 | 用途 |
| --- | --- |
| `content/book/` | 全书正文、部分与章节导读 |
| `content/docs/` | 事项、身份与处境、术语与阅读说明 |
| `data/landing/home.yaml` | 首页目录与导航数据 |
| `data/footer.yaml` | 全站页脚、兄弟站点与项目链接 |
| `layouts/`、`assets/` | 页面模板与站点样式 |
| `scripts/` | 构建产物与内容检查 |

`public/`、`.cache/`、依赖环境和生成资源由 `.gitignore` 排除。问题与修正建议可通过 [GitHub Issues](https://github.com/Vonng/sg.vonng.com/issues) 提交。
