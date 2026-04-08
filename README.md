# Vue on GitHub Pages

[![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com/)
[![Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Jeremias0618/Vue-Deployment-on-GitHub-Pages)

**Repository:** [github.com/Jeremias0618/Vue-Deployment-on-GitHub-Pages](https://github.com/Jeremias0618/Vue-Deployment-on-GitHub-Pages)  
**Live site (after Pages is configured):** [jeremias0618.github.io/Vue-Deployment-on-GitHub-Pages](https://jeremias0618.github.io/Vue-Deployment-on-GitHub-Pages/)

![Visitor count](https://visitor-badge.laobi.icu/badge?page_id=Jeremias0618.Vue-Deployment-on-GitHub-Pages)

> [!NOTE]
> Use the same `page_id` (`Jeremias0618.Vue-Deployment-on-GitHub-Pages`) if you add an invisible visitor counter on the deployed site.

Single Page Application built with **Vue 3**, **Vite**, and **TypeScript**, intended for **GitHub Pages** hosting. Components use Vue 3 [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html) Single-File Components.

---

## Tech stack

| Layer        | Technology | Role |
| ------------ | ---------- | ---- |
| UI framework | Vue 3      | Reactive UI and composition API |
| Build tool   | Vite 7     | Dev server, HMR, production bundling |
| Language     | TypeScript | Typed components and tooling |
| Tooling      | vue-tsc    | Type-checking for `.vue` and TS files |

**Runtime dependency:** `vue`  
**Dev dependencies:** `@vitejs/plugin-vue`, `@vue/tsconfig`, `@types/node`, `typescript`, `vite`, `vue-tsc`

---

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node)

---

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

| Script      | Description |
| ----------- | ----------- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Run `vue-tsc` then production build to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Deploying to GitHub Pages

GitHub Pages serves static files. After `npm run build`, publish the contents of **`dist/`**.

This repository targets `https://jeremias0618.github.io/Vue-Deployment-on-GitHub-Pages/`. In **`vite.config.ts`**, production builds use [`base`](https://vite.dev/config/shared-options.html#base) `/Vue-Deployment-on-GitHub-Pages/`; the dev server uses `/` so local URLs stay at the root (`npm run dev`).

> [!TIP]
> Run `npm run build && npm run preview` and open the preview URL including the subpath to verify assets before deploying.

Typical options:

- **GitHub Actions**: workflow that runs `npm ci`, `npm run build`, and uploads `dist/` with [`actions/upload-pages-artifact`](https://github.com/actions/upload-pages-artifact) / Pages deployment.
- **Branch `gh-pages`**: push only the `dist/` output to that branch (or use a tool such as `gh-pages` npm package).

Configure the Pages source in the repository **Settings → Pages**.

---

## Project structure

```
├── public/          # Static assets copied as-is
├── src/
│   ├── assets/      # Images and assets processed by Vite
│   ├── components/  # Vue components
│   ├── App.vue      # Root component
│   ├── main.ts      # Application entry
│   └── style.css    # Global styles
├── index.html       # HTML shell
├── vite.config.ts   # Vite configuration
├── tsconfig*.json   # TypeScript project references
└── package.json
```

---

## Documentation

- [Vue 3](https://vuejs.org/)
- [Vite](https://vite.dev/guide/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [GitHub Pages](https://docs.github.com/pages)

---

## License

This project is **private** (`"private": true` in `package.json`). Add a `LICENSE` file if you intend to publish under an open-source license.
