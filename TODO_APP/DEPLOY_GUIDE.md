---
description: How to deploy the One Piece Todo application
---

# 🚀 Deployment Guide: Setting Sail to the Web

Since your **Grand Line Log** is a static web application (HTML, CSS, JS), you can deploy it for free in minutes! Here are the best ways to get your pirate logbook online.

## 🐙 Option 1: GitHub Pages (Recommended)

This is the most professional way to host your code.

1.  **Create a Repository**: Go to [GitHub](https://github.com/) and create a new public repository (e.g., `one-piece-todo`).
2.  **Upload Code**:
    - If you have Git installed:
      ```bash
      git init
      git add .
      git commit -m "Initial commit: Pirate King Edition"
      git remote add origin YOUR_REPO_URL
      git push -u origin main
      ```
    - **No Git?** No problem! Just click "upload an existing file" on GitHub and drag all files from your `TODO_APP` folder.
3.  **Enable Pages**:
    - Go to your repository **Settings**.
    - Click **Pages** in the left sidebar.
    - Under **Build and deployment**, set the source to `Deploy from a branch` and select `main` (or `master`).
    - Click **Save**.
4.  **Live!**: Your site will be live at `https://your-username.github.io/one-piece-todo/` in about 1-2 minutes.

## 💎 Option 2: Netlify (Fastest & Easiest)

Perfect if you just want to see it live immediately.

1.  Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2.  **Drag and Drop**: Simply drag your entire `TODO_APP` folder onto the page.
3.  **Instant Deploy**: Netlify will give you a random URL (like `pirate-log-123.netlify.app`) immediately.
4.  **Custom URL**: You can change the "Site name" in the settings to something cooler like `one-piece-todo.netlify.app`.

## ⚡ Option 3: Vercel

Very similar to Netlify, great for future expansion.

1.  Go to [vercel.com/new](https://vercel.com/new).
2.  Connect your GitHub account or drag and drop your project.
3.  Click **Deploy**.

---

### ⚓ Tips for a Smooth Voyage
- Ensure `todo.html` is the **main entry point** (you can rename it to `index.html` if the host doesn't detect it automatically).
- Check that the `bg.jpg` (or your custom background) path is relative (e.g., `./bg.jpg`) in your CSS.

Now go show the world who the true Pirate King is! 👒🏴‍☠️
