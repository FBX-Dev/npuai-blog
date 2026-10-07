---
title: LPDDR6 与 SOCAMM2：内存正从手机走进服务器
published: 2026-10-07
description: 为省电而生的 LPDDR，成了 AI 推理时代的内存新选择。三星、SK 海力士、美光、长鑫都在推 LPDDR6 与 SOCAMM，但比容量之前先要看清是「单颗」还是「单根」。
image: ''
tags:
  - LPDDR6
  - SOCAMM
  - 存储
  - 推理
category: 上游供应链
draft: false
pinned: false
lang: zh_CN
---

过去谈 AI 内存，答案只有一个：HBM。带宽决定训练速度，HBM 就值钱。但 2026 年出现了一条新支线——为省电而生的低功耗内存 LPDDR，正在从手机渗透进数据中心。

## LPDDR6 的规格跃了一级

2026 年 4 月，JEDEC 预览了 LPDDR6 路线图。几个关键数字：单颗芯片容量有望达到 512GB 量级；带宽区间 10.6—14.4 Gbps，对比上一代 LPDDR5X 的 8.5—10.7 Gbps，提升约 1.5 倍。容量能跳这么多，主要靠新增的 x6 子通道模式——单个封装能塞进更多内存 die。

厂商动作也快。SK 海力士已开发出采用 1cnm 工艺的 16Gb LPDDR6 DRAM，运行速度 10.7 Gbps，较 LPDDR5X 提升 33%，并称完成全球首个相关认证。

## 容量这个数字，先看分母

「单颗 512GB」是个很抓眼球的说法，但直接拿来跟服务器内存比会出错。

这里的分母有两个：一是**单颗 die**，二是**单根模组**。主流服务器 DDR5 单根模组的容量普遍在 64GB—128GB，而 LPDDR6 说的是「单颗芯片」，靠更多 die 堆叠和先进制程的密度提升来实现。一颗 die、一根模组、一个封装，是三个不同层级的口径，混在一起比容量没有意义。

正确的读法是：LPDDR6 单封装能容纳的 die 数量显著增加，因此在同样物理空间里可以做到更大容量——这才是它对服务器的价值。

## SOCAMM：把 LPDDR 做成服务器模组

LPDDR 要进服务器，得先有能插、能维护的形态。这就是 SOCAMM（Small Outline Compression Attached Memory Module）的角色：把高密度 LPDDR 芯片集成到紧凑模块里，替代又厚又大的 DDR5 条。

基于 LPDDR6 的 SOCAMM2 标准已在同步开发。公开信息里几个可比的点：相较传统 RDIMM，SOCAMM 支持更高的单 CPU 内存容量，功耗约为 RDIMM 的三分之一，也更便于堆叠。美光已推出 256GB SOCAMM，采用 1-gamma DRAM 工艺和单片 32Gb 晶圆，定位就是把 KV Cache 从 HBM 上卸载下来，从而改善容量与能效、缩短首词元生成时间。

英伟达是这条线的重要推手：与 Vera CPU 配套的 SOCAMM2 模块，主打把低功耗、高密度的 LPDDR 带进服务器内存体系。三星也在把 LPDDR6 往服务器和内存计算方向延伸，其 SOCAMM2 与 LPDDR6 已在某旗舰移动平台完成行业首个验证；据 Omdia，三星 2026 年第一季度移动 DRAM 收入份额为 43%。

## 为什么推理时代需要它

这是「训练时代拼带宽、推理时代拼容量与 TCO」的直接结果。

训练要的是极高带宽，所以 HBM 无可替代。但推理要同时面对三样东西：模型参数、不断膨胀的 KV Cache、越来越长的上下文。如果全塞进昂贵的 HBM，成本和功耗都受不了。于是内存开始分层：HBM 放最热的数据，LPDDR/SOCAMM 承接容量压力，SSD 兜底。

这条路不止英伟达在走。高通 AI200/AI250、英特尔 Crescent Island 都选择从「低功耗＋低成本」出发，降低推理对 HBM 的依赖。再往前一步是 LPDDR6-PIM（存内计算）标准，目标是把部分处理任务从计算芯片卸载到内存侧；三星已展示过基于 LPDDR5X 的 PIM 方案。

## 国产这条线也在追

长鑫的 LPDDR6 被公开报道为「追平行业」。它出现的时点确实关键：全球内存巨头的产能主要砸向 HBM，手机厂商的 LPDDR 供应偏紧；如果 HBM 短期受良率和产能约束，那 LPDDR 这条路意味着中国 AI 产业不只有「等 HBM」一个选项，也可以先建一套自主的高速、低功耗、大容量内存体系。

## 一句提醒

看 LPDDR6，最容易被两句话带偏：一是「单颗 512GB」不写明是 die 还是模组；二是「功耗只有 RDIMM 的三分之一」不写明是什么负载条件。这两个数字都对，但都必须带上口径一起说。

## 参考来源

- X-TechCon，《从 MRAM 到 SOCAMM，各种 AI 存储器大盘点》，https://www.x-techcon.com/article/182466.html
- 网易新闻，《长鑫 LPDDR6 追平行业，真正的故事在小米与苹果之外》，https://c.m.163.com/news/a/L5MU765D05562QFT.html
- BigGo Finance，《Samsung Electronics First in Industry to Validate LPDDR6 on Qualcomm Snapdragon 8 Platform》，https://finance.biggo.com/news/2550b210-e1d3-44f9-be67-2c890bac867b
- 半导体产业纵横相关报道（经聚合转载）：《LPDDR6 单颗容量有望达 512GB、SOCAMM2 模块标准同步开发》；检索关键词「LPDDR6 路线图 JEDEC 2026」「SOCAMM2 LPDDR6 服务器」
- 检索关键词：「LPDDR6 SOCAMM 数据中心 2026」「美光 SOCAMM 256GB」「LPDDR6-PIM」
