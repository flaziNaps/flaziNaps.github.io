# 作品添加记录

> 最新调整：按作者反馈移除博客封面配置及发布资源，两个作品均为文字卡片。此目录内截图记录的是此前有封面的版本，不代表当前界面；根目录原图保留。

- 新增 `kv_v0`，排在个人博客之前，简介为「自己写一个 KV 存储项目，用来学习。」，技术栈为 C++ / CMake，仓库链接采用作者提供的 `https://github.com/flaziNaps/kv_v0`。
- 个人博客仓库更新为作者确认的 `https://github.com/flaziNaps/flaziNaps.github.io`。
- 根目录 `hero.png` 经检查为博客首页截图，原样复制至 `public/projects/personal-blog.png` 作为博客作品封面，记录真实尺寸 1902×933 和替代说明。原始文件保留。KV 作品保持无图。
- 使用现有作品组件及双列网格，没有新增布局、依赖或虚构内容。
- 构建发现本地新增文章 `2026_11_10.md` 的 slug 含空格，不符合已有校验；仅将 `cache lab summary` 改为 `cache-lab-summary`，保留其他文章内容与发布状态。

验证：`npm run build` 通过，Astro 零错误、零警告、零提示；Chromium 在 1024、1440、1920px 验证两件作品的顺序、仓库链接、双列展示、图片解码/尺寸/alt，以及无整页横向溢出；没有浏览器页面错误或失败资源请求。`checks.json` 记录实际浏览器版本。

截图：`project-cards.png` 为作品区域，`home-full-1440.png` 为完整首页，`kv-focus.png` 为 KV 仓库入口焦点。

未检查：手机、其他浏览器及仓库外站的在线可用性。本轮未提交、推送或部署。新增文章正文目前为空（源文件原有状态），构建会按其现有 `draft: false` 配置生成文章页。
