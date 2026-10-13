# 工程与验收

## 锁定基线

2026-10-13实际：Hugo v0.166.0+extended+withdeploy darwin/arm64（Homebrew）；OINK v1.2.0，Git子模块固定 f8f476e660cf053a2645b7b923ae8d08d5448fce，远程 https://github.com/pgsty/oink.git。初次从加拿大本地主题只读克隆并改为公开上游URL，未改加拿大源码。Python PyYAML 6.0.1；浏览器检查依赖Playwright 1.62.1置于忽略.cache/browser，Chrome采用本机独立headless实例。

配置：title新加坡生活指南、baseURL https://sg.vonng.com/、zh/zh-CN、hasCJKLanguage、Asia/Singapore，无统计ID/部署凭据/站点Git远程。OINK compact:false保留折叠。正文book、查询docs；日期/适用范围通过editorial-meta展示。章节和首页目录读取真实页面，不另存重复目录标题。

复用加拿大当前的editorial-meta钩子、print锚点重写、隐藏页搜索过滤和递归目录，目录CSS名称已适配。没有复用加拿大正文、来源、旧审核状态或部署授权。首页为本项目手写模板与原创轻量SVG，不需要图片生成；来源见evidence/site-artwork.md。

## 可复现命令

```sh
make check DESTINATION=.cache/production-review
# 浏览器检查依赖一次安装于忽略目录：
npm install --prefix .cache/browser playwright@1.62.1 --ignore-scripts --no-audit --no-fund
# 在自有空闲端口启动，只停止自己启动的会话
python3 scripts/serve_review.py
SG_PREVIEW_URL=http://127.0.0.1:1328 node scripts/check_browser.mjs
make sync
make preview
```

共享构建只有主控执行。check_site 检查必填元数据、状态/核验日期/独立角色与已接收正文SHA、重复标题/ID、草稿过滤、内部资源与锚点、来源标记泄漏、加粗字面残留和加拿大痕迹；跳过外网HTTP检查。它不判断事实真假，accepted.json只绑定人工已审对象。导航/搜索/打印/读者体验由实际浏览器和人工读图补充。

## B01 当前工程证据

首次草稿构建因默认landing Markdown模板要求landing配置失败；本项目首页已自定义HTML，增加对应Markdown模板后解决。首次草稿机检发现医疗/CPF四处加粗内空格，作者修正。最终九篇通过事实与编辑审后生产构建exit0：35源、9主题、37HTML、2635内部引用、0错误；360外部引用只跳过，不称可达性通过。该中间状态已由下列最终验收取代。

原件、报告、截图和打印稿都存.cache。最终实际结果与可阅读输出同步记录待下节补齐；这段中间状态不是对整书的验收。

## B01 最终本地验收（2026-10-13）

9篇主题 integrated，26个编辑入口；同时存在B02的7篇草稿，生产不输出。最终make check：42源/16主题/7草稿，37HTML，2636内部引用，488外部引用仅跳过HTTP检查，0错误。make sync的125文件相对路径、大小与SHA全部一致，公开产物只在本地public。sync另核审查输出目录与完整输出清单，防止同步未检查的改动版本。轻量记录见checks/b01-acceptance.json，原始报告和截图在.cache/render-b01。

实际浏览器遍历9正文与5编辑路径的1440×1000、390×844视口；确认单H1、无页面横溢、图片加载、全卡键盘、非当前侧栏叶子可点击位置、Enter/Space折叠、桌面三个下拉、手机首页菜单、CPF/地铁/Singlish检索、明暗模式。搜索等待主题80ms防抖后读结果，避免拿旧列表当通过。JS错误与本地请求失败0。随后仅针对图标及打印修改补跑check_print.mjs，最终4个菜单图标互异，手机菜单实点通过。

人工看过桌面首页、手机首页、侧栏展开、暗色卡片、手机CPF长表、首页全菜单；PDF只抽看页6来源与页44跨页CPF表等代表段落，不称逐页目视。打印保留书内锚点，未收录的站内入口指向正式域名，每篇去重来源网址可纸面查找；9份来源表、无失效书内锚点、无相对站内链接。PDF由暗色页面导出，检查白底和表格黑字，解决过暗色页边距、白字表格两个实际问题。草稿/隐藏页夹具再运行通过，隐藏页可单独访问但不进搜索、书目和打印。

实测发现并修复：首页自定义模板须显式设置hasLanding才能加载手机菜单脚本；主题默认图标需本项目明确区分；主页section默认大padding、暗色卡片文本颜色需局部覆盖。普通Python预览服务出现并发连接重置，独立复现到logo和搜索库，改为loopback/HTTP1.1/128请求队列的serve_review.py后请求失败归零。这是本地检查服务问题，不曾用重试隐藏故障或改主题上游。

复核打印与顶部导航可用：`SG_RENDER_DIR=.cache/render-b01 node scripts/check_print.mjs`。检查脚本与独立事实审的职责分开；无外部部署、远程push、真实申请或交易。

## B02本地验收（2026-10-13）

新增租房、应急、离职、年度税、IR21、出生6主题，五部分都已有可读入口；补6个章节/部分导读、4个事项、身份入口与术语。机检时54源/18主题/3草稿（入学与当时已落盘B03稿），生产15主题、53HTML、4674内部引用、0错误。822外部引用未作自动HTTP探测。157文件同步public路径/大小/SHA一致。

浏览器按.cache/b02-browser-paths.json查13条变动路径的桌面/手机，42组结果与菜单/侧栏/搜索/暗色交互通过；修改后的check_browser支持SG_PATHS_FILE与SG_TABLE_PATH选择本批页面，不要求无关页重复截屏。打印32个聚合节点、15份来源表、0相对站内链接和0断锚；暗色转纸面背景及全部表格色检查通过。人工看手机租房三列表，PDF页57跨页准证表与77应急页，版式正常。PDF80物理页仅是本批输出规模，不作为内容完成证据。详情checks/b02-acceptance.json，图像/PDF留.cache/render-b02。

复现本批：SG_PATHS_FILE=.cache/b02-browser-paths.json SG_RENDER_DIR=.cache/render-b02 SG_TABLE_PATH=/book/life/housing/renting/ node scripts/check_browser.mjs；路径清单也保存在轻量验收JSON中，缓存删除后可重建。
