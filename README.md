# 新加坡生活指南

面向中文读者的新加坡社会与生活参考书。正文在 `content/book/`，事项、身份及术语入口在 `content/docs/`；内部研究和执行记录在 `ops/`。

本地工程：Hugo **0.166.0 Extended**，OINK **1.2.0**，固定提交 `f8f476e660cf053a2645b7b923ae8d08d5448fce`；Python3及`requirements.txt`。

```sh
git submodule update --init --recursive
python3 -m pip install -r requirements.txt
make check DESTINATION=.cache/production-review
make sync
make preview
```

预览端口1327。`public/`为本地阅读输出，源码构建与核验不代表已发布。目标域名配置为 https://sg.vonng.com/ ，尚未部署或设置远程站点。

恢复任务先读 `AGENTS.md`、`ops/BOOKMAP.md`、`ops/TASKS.md`、`ops/CHECKPOINT.md`。稿件须经过异人事实审和第三人编辑审；草稿不会出现在生产导航、搜索和打印中。
