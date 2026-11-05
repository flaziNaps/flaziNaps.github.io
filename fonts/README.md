NotoSansCJK-Regular.ttc 源自 Noto CJK / Debian fonts-noto-cjk，SIL Open Font License 1.1，见 LICENSE.txt。
上游：https://github.com/notofonts/noto-cjk 。仅构建分享卡片时加载，不作为网页字体发送。

## 网页字体

采用 Anthropic 公开品牌指南推荐的 Poppins 标题、Lora 正文组合，不宣称是 Claude 网页专用字体的复刻：
https://github.com/anthropics/skills/blob/main/skills/brand-guidelines/SKILL.md

- Poppins：Fontsource `@fontsource/poppins@5.3.0`，Latin 子集，400 / 500 / 600 字重，许可证见 `poppins-OFL.txt`。
- Lora：Fontsource `@fontsource-variable/lora@5.3.0`，Latin 子集，400–700 可变字重及真实斜体，许可证见 `lora-OFL.txt`。
- 字体文件保存在 `src/assets/fonts/`，通过 `src/styles/fonts.css` 引用，由构建工具生成遵循 base 的资源路径；使用 `font-display: swap`，没有浏览器端 Google Fonts 请求，也没有新增 npm 依赖。
- 中文正文使用系统的 Noto Serif CJK SC / 思源宋体 / 宋体，导航与标题使用系统中文无衬线字体。中文实际外观随设备可用字体变化；英文与代码分别使用相应字体。
