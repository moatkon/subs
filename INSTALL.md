# 安装指南

## 解决 npm 权限问题

如果遇到 npm 权限错误，请按以下步骤操作：

### 方法 1: 修复 npm 权限（推荐）

```bash
sudo chown -R $(whoami) ~/.npm
```

然后重新运行：
```bash
npm install
npm run dev
```

### 方法 2: 使用 yarn

如果 npm 仍有问题，可以使用 yarn：

```bash
# 安装 yarn（如果没有）
npm install -g yarn

# 使用 yarn 安装依赖
yarn install

# 启动开发服务器
yarn dev
```

### 方法 3: 使用 pnpm

```bash
# 安装 pnpm（如果没有）
npm install -g pnpm

# 使用 pnpm 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 验证安装

安装成功后，访问以下地址验证：
- 主页面: http://localhost:4321
- 样式测试页面: http://localhost:4321/test

## 常见问题

### Q: 页面显示空白或报错
A: 确保所有依赖都已正确安装，特别是 `astro` 和 `@astrojs/tailwind`

### Q: 样式没有加载或显示不正确
A:
1. 检查 `tailwind.config.mjs` 文件是否存在
2. 确保 `src/styles/global.css` 文件包含了 Tailwind 指令
3. 验证 `astro.config.mjs` 中包含了 tailwind 集成
4. 访问 `/test` 页面查看样式是否正常加载
5. 清除浏览器缓存并重新启动开发服务器

### Q: 订阅数据没有显示
A: 检查 `src/content/subscriptions/` 目录下是否有 Markdown 文件，并且格式正确

### Q: TypeScript 类型错误
A: 这些错误不会影响运行，但如果需要修复，可以在 `tsconfig.json` 中添加 `"noImplicitAny": false`

## 下一步

1. 根据需要修改 `src/content/subscriptions/` 中的示例数据
2. 添加您自己的订阅服务
3. 自定义样式和功能
4. 部署到您喜欢的静态托管服务
