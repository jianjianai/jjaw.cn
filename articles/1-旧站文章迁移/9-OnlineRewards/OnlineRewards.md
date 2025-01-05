---
permalinkPattern: 2024/2/25/OnlineRewards/
title: "OnlineRewards / 在线奖励"
description: 简单易用且强大的在线奖励插件，上手简单，规则高度自定义，支持多个服务器数据同步。
# 是否在首页展示
star: true
# 标签
tags: ["mc插件"]
comment: true
---

# OnlineRewards-在线奖励

# 介绍
一款基于bukkit的在线奖励插件。

上手简单，规则高度自定义，支持多个服务器数据同步。

## 为什么上手简单？
只需要会编辑reward.yml配置文件即可满足大多数奖励需求。
## 为什么规则高度自定义？
除了reward.yml配置文件之外，插件可以允许你自己设计数据库，自己编写SQL查询语句。编写的语句可以直接配置为规则，所以除了默认给出的规则外，还能自定义各种各样的高级规则。


## 功能
- 多奖励
- 多规则
- 分组权限
- 高度自定义规则

## 展示
![img.webp](./imgs/img.webp)
![img_1.webp](./imgs/img_1.webp)

# 进度
1. 完成数据库设计（完成）
2. 完成数据的查询和添加方法（完成）
3. 完成玩家在线数据记录（完成）
4. 完成玩家在线数据查询（完成）
5. 完成奖励自定义配置 (完成)
6. 完成命令方式的奖励领取 (完成)
8. 完成奖励领取和查询GUI （完成）

# 配置文件

## 基础
reward.yml  -奖励配置文件

language.yml  - 语言文件

## 进阶
SQLinitialization.yml  -数据库初始化文件

SQLOnlineDataQueryRule.yml  -在线时间查询规则文件 reward.yml中的OnlineRule规则来自此文件。

SQLrecord.yml  -在线时间，奖励领取记录规则文件

SQLRewardDataQueryRul.yml  -奖励领取情况查询规则文件 reward.yml中的RewardRule规则来自此文件。

## 默认配置文件奖励规则
- 每日奖励
- 每月奖励
- 每年奖励

## 如何配置
reward.yml的默认配置可以很其实的依次类推，但是有几个规则配置容易糊涂。下面重点介绍规则配置OnlineRule和RewardRule和OnlineTime

OnlineTime 是需要达到的在线时间，单位是秒

OnlineRule 是在线时间查询规则。默认的配置文件有四个规则toDay，thisMonth，thisYear，all(今天，本月，本年，全部)。

RewardRule 是领取情况查询规则。默认的配置文件有四个规则toDay，thisMonth，thisYear，all(今天，本月，本年，全部)。


### 例子1
``` yaml
OnlineTime:30
OnlineRule:toDay
RewardRule:toDay
```
今天的在线时间达到30秒才可以领取，今天只可以领取一次，明天达到30秒就可以再次领取。

### 例子2
``` yaml
OnlineTime:30
OnlineRule:toDay
RewardRule:thisMonth
```
今天的在线时间达到30秒才可以领取，但是本月只可以领取一次，下个月才可以再次领取。

### 例子3
``` yaml
OnlineTime:30
OnlineRule:thisMonth
RewardRule:toDay
```
本月的在线时间达到30秒就可以领取，只要本月的在线时间达到30秒，接下来每天都可以领取一次这个奖励。


## 下载
预览版本：[gitee](https://gitee.com/jja8/OnlineRewards/releases/) 

建议与反馈-插件实验室：[PlugClub / 插件实验室](https://jq.qq.com/?_wv=1027&k=LyeQlfSK) （群号:820131534）























