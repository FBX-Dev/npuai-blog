---
title: 本站开通：NPU AI
published: 2026-09-20
description: 站点正式上线。基于 Astro 的 Mizuki 主题 + Sveltia CMS 后台，托管在 Cloudflare 全球边缘网络。
image: ''
tags:
  - 公告
category: 站点
draft: false
pinned: true
lang: zh_CN
---

这里记录算力、芯片与大模型的一些事。

## 关于这个站点

- **框架**：Astro（静态生成，构建时把文章编译成纯 HTML）
- **主题**：Mizuki
- **托管**：Cloudflare Workers 静态资源，全球边缘节点分发
- **后台**：Sveltia CMS，浏览器里直接写文章、传图片

## 怎么发文章

访问 [内容管理后台](/admin/)，用 GitHub 账号登录（或粘贴一个 GitHub Token），
新建文章 → 填写标题和正文 → 保存。

保存后会自动提交到 GitHub 仓库，并触发一次自动构建，大约两分钟后线上就能看到。

## 文章可以写什么格式

这个主题支持相当完整的 Markdown 扩展语法。右侧的几篇示例文章可以直接当速查表用：

- **Markdown 教程** —— 基础语法
- **扩展语法** —— 提示框、代码分组、图片画廊、GitHub 卡片等
- **Mermaid 图表**与**数学公式**

需要新功能的时候翻一翻示例，照着写就行。
