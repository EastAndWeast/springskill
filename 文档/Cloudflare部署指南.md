# 如何在 Cloudflare Pages 免费部署《春节续命指南》

本项目是基于纯前端构建的 React (Vite) 应用，没有任何后端包袱（状态管理是通过 `localStorage` 存放于你的手机端），这使得它非常**适合**通过 **Cloudflare Pages** 进行完全免费且全球极速的部署。

既然你已经将代码成功推送到 GitHub 仓库 [EastAndWeast/springskill](https://github.com/EastAndWeast/springskill)，接下来的部署将会极其简单（连终端命令都不需要敲）。

## 🚀 部署步骤 (无需代码)

### 第一步：登录 Cloudflare
1. 打开 [cloudflare.com](https://dash.cloudflare.com/) 并登录你的账号（如果没有可免费注册）。

### 第二步：创建 Pages
1. 在左侧菜单栏中，找到并点击 **"Workers & Pages"**（或者 Workers 和 Pages）。
2. 在这个页面的中间或右上角，点击蓝色的 **"Create application" (创建应用程序)** 按钮。
3. 在上方有 3 个选项卡，点击 **"Pages"**。
4. 然后点击 **"Connect to Git" (连接到 Git)**。

### 第三步：连接你的 GitHub
1. 点击后，Cloudflare 会要求绑定 GitHub。授权并选择你对应的 GitHub 账号。
2. 在仓库列表中，选中刚刚推送的：`EastAndWeast/springskill`。
3. 点击 **"Begin setup" (开始设置)**。

### 第四步：设置构建命令（🔥 关键步骤）
请在设置配置页，确认/填写以下信息（极其重要）：
- **Project name (项目名称)**: `springskill` (可自定义，它会成为你最终域名的前缀)。
- **Production branch (生产分支)**: `main`
- **Framework preset (框架预设)**: `Create React App` 或 `Vite` (这里选 Vite，如果没有直接留空也行)。
- **Build command (构建命令)**: **`npm run build`** (请务必确保填的是这句话)。
- **Build output directory (构建输出目录)**: **`dist`** (Vite 默认输出到这里，绝不能错)。

### 第五步：点击保存并部署
1. 确认上述构建命令 (`npm run build`) 和目录 (`dist`) 无误后。
2. 直接点击最下方的 **"Save and Deploy" (保存并部署)**。

---

## 🎉 等待与上线

这个时候，Cloudflare 会自动启动容器去下载你的 GitHub 代码并执行打包，平均用时 **30 - 60 秒**。当你看到绿色的 "Success" 提示时，你的网站就上天了！

Cloudflare 会自动送你一个永久免费的域名，类似这样：
👉 `https://springskill.pages.dev`

用手机浏览器直接访问这个地址，把它“添加到主屏幕”，它就会变成一个极简的春节保命小应用了！
之后你只要在本地改代码 `git push` 到 GitHub，Cloudflare **检测到后会自动更新网站**，完全免维护。
