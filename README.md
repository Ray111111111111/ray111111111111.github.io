# 蔡宗睿 · Robotics & Reinforcement Learning

个人作品集：教育、ROOF / AMP / HoST 项目、真机演示、论文、研究与实习经历。仅公开本人提供的邮箱与 GitHub。

React 19.2.6、Tailwind CSS 4.2.1、Lucide，使用 Vite 构建。页面预渲染为静态 HTML，交互由 React 接管，无 AI 对话、后端或密钥要求。

## 本地运行

需要 Node.js 22.13 或更新版本。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

构建输出为 `dist-pages/`。媒体与论文使用相对路径，支持 GitHub 用户网站、项目网站及自定义域名。

## 发布

仓库 Settings → Pages → Source 选择 GitHub Actions。推送 main 后，由 `.github/workflows/pages.yml` 构建并部署。

## 内容维护

- `lib/portfolio.ts`：联系信息、实习与项目事实。
- `app/page.tsx`：页面结构、中英文、项目详情。
- `app/globals.css`：样式与响应式布局。
- `public/media/`：项目视频与封面。
- `public/paper/`：最终论文及论文图片。

ROOF 的定量结果以最终论文评测为准，万圣节 Demo 为团队项目展示。论文状态为在投；超维动力经历为 2026.11 即将入职。素材与论文版权归原作者及团队所有；仓库公开不代表授予研究素材再分发许可。

## 官方项目与学校标识

ROOF 项目主页：https://lu-yidan.github.io/ROOF/

学校标识仅用于如实说明教育经历，保留原始配色和比例。香港大学校徽来自 https://www.hku.hk/ 的官方图标；浙江大学校徽来自 https://www.zju.edu.cn/ 的学校标识页面。标识版权归各学校所有。

## 科幻生活版 /orbit/

新版本使用 Three.js（三维轨道）和 Motion（界面过渡），保留简洁版 /。两个页面分别构建和预渲染，共用现有研究资料。可切换研究项目、展开评测、拖动轨道、暂停磁带滚动、选择歌手和 Steam 游戏，以及切换低动态模式。

音乐磁带为原创 HTML/CSS 视觉设计。代表曲目及官方链接由 Apple Music / Spotify 核对；并非声称某首歌在所有平台均排名第一。尚未收到用户提供的 MP3，因此 audio 字段为空，页面明确显示音源待添加，仅提供官方收听入口，不自动请求不存在的音频。收到可用于公开播放的文件后，将文件放到 public/orbit/music/，并在 orbit/lifestyle.ts 的 audio 填写对应 URL。

游戏与 CS2 2000＋小时由本人提供，其他游戏不填写时长；游戏图片来自各自的 Steam 官方商店页面。Steam 应用 ID：730、105600、289070、413150。

开源来源：https://github.com/mrdoob/three.js ，https://github.com/motiondivision/motion 。许可全文位于 licenses/。游戏、学校和音乐名称及素材权利归各权利人。
