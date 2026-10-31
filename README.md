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
