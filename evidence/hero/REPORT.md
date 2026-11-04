# 桌面 Hero 调整

日期：2026-11-04。本次按作者要求只调整桌面 Hero，不做手机端专项适配；未推送或部署。

- 将根目录 `hero-soft-motion-v2-enhanced (1).svg` 接入 `public/hero-soft-motion.svg`，使用后删除根目录原文件。
- 保留提供的色块、渐变、波纹与点阵；漂移、呼吸效果只播放一次，最长 4.8 秒。删除 SMIL 渐变及路径循环，避免持续重绘；SVG 自身的 reduced-motion 样式让独立图片也能停用动画。
- 桌面 Hero 高度从 630px 收紧至 480px，图形完整等比呈现，文字占左侧最多 52%，不添加客户端脚本或依赖。
- 为图片声明 1600×900 原始尺寸，继续作为读屏忽略的装饰图。

## 本地检查

- `npm run build` 通过：Astro 检查 0 errors / warnings / hints，静态构建成功。
- `node tests/content.test.mjs`：现有 8 项测试通过。沙箱中 `npm test` 的隔离运行仅报告文件级失败；直接执行相同测试文件通过。
- Chromium 通过 Playwright 检查 1280、1440、1920px，以及 720px 有效视口（窄桌面窗口检查，不代表实际浏览器 200% 缩放）：无整页横向溢出，图片成功加载，单一 H1，首个作品入口位于首屏 900px 高度内。
- 检查跳到正文、Hero 链接键盘焦点、禁用 JS；页面未出现脚本异常。
- 单独打开 SVG 检查所有 9 个动画均只执行一次、时长小于 5 秒；开启 reduced-motion 后 SVG 和页面入口动画均停用。
- 实际检查数据见 `checks.json`；1440px 截图经人工查看。

## 截图

- `home-1440.png`：1440px 桌面完整首页，动效结束后的布局。
- `hero-link-focus.png`：Hero 链接的键盘焦点。
- `home-reduced-motion.png`：减少动态效果模式。

未检查手机端、其他浏览器、真实平台抓取、线上部署或新一轮 Lighthouse。此次没有重新验收文章、评论等无关功能。工作区原有 Header、关于页及旧 WebP 删除的改动保留，未纳入本次调整。
