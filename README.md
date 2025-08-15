# 订阅管理系统

一个使用 Astro + Tailwind CSS 构建的静态订阅服务管理界面，帮助您管理和跟踪各种订阅服务的到期时间。

## 功能特点

- 📅 **到期提醒**: 自动计算并显示订阅服务的到期状态
- 🎯 **智能分类**: 按状态筛选（已过期、即将到期、正常）
- 📊 **统计概览**: 显示总订阅数、过期数量和月度支出
- 📱 **响应式设计**: 支持桌面和移动设备
- 🏷️ **标签系统**: 支持为订阅服务添加标签
- 💰 **多币种支持**: 支持人民币、美元、欧元等
- 📝 **Markdown 管理**: 使用 Markdown 文件管理订阅数据

## 项目结构

```
src/
├── content/
│   ├── config.ts          # 内容集合配置
│   └── subscriptions/     # 订阅服务 Markdown 文件
├── layouts/
│   └── Layout.astro       # 页面布局
├── pages/
│   └── index.astro        # 主页面
└── components/            # 组件目录（可扩展）
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

4. 预览生产版本：
```bash
npm run preview
```

## 添加新的订阅服务

在 `src/content/subscriptions/` 目录下创建新的 Markdown 文件，例如 `example.md`：

```markdown
---
title: 服务名称
service: 提供商
price: 价格数字
currency: CNY  # CNY, USD, EUR
billingCycle: monthly  # monthly, yearly, quarterly, weekly
nextBillingDate: 2025-12-31  # YYYY-MM-DD 格式
category: 分类名称
description: 服务描述
website: https://example.com
isActive: true
tags: ["标签1", "标签2"]
notes: 备注信息
---

# 详细描述

在这里可以添加关于订阅服务的详细信息。
```

## 订阅状态说明

- 🔴 **已过期**: 超过到期日期
- 🟡 **即将到期**: 3天内到期
- 🟠 **需要关注**: 7天内到期
- 🟢 **正常**: 7天以上到期

## 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- Markdown - 内容管理

## 自定义配置

### 修改货币汇率

在 `src/pages/index.astro` 中找到月度支出计算部分，可以修改汇率：

```javascript
// 当前美元汇率设置为 7.2
sub.data.currency === 'CNY' ? monthlyPrice : monthlyPrice * 7.2
```

### 修改到期提醒阈值

在 `getExpiryStatus` 函数中可以调整提醒时间：

```javascript
// 修改这些数值来调整提醒阈值
else if (diffDays <= 3) {  // 3天内显示警告
else if (diffDays <= 7) {  // 7天内显示注意
```

## 部署

这是一个纯静态网站，可以部署到任何静态托管服务：

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 许可证

MIT License
