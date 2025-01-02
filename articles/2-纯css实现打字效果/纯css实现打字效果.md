---
title: 纯css实现打字效果详解,任意字符排列排列组合。
description: 纯css实现拼音打字效果详解。全网最简单,10分钟不到秒懂! 任意字符排列排列组合。
head: 
    - [meta, { name: keywords , content: css动画 前端技术 ::before 伪元素 }]
tags: ["前端","css"]
permalinkPattern: 2023/11/25/csswriting/
comment: true
star: true
---


# 纯css实现打字效果详解

## 效果展示

<Demo>
    <div class="p">
        <div class="shwoWorld">|</div>
    </div>
</Demo>

<div v-pre><style>
.shwoWorld::before {
    animation: 5s linear 0s infinite running shwoWorld;
    content: "";
}
@keyframes shwoWorld {
    0% {content: "";}
    2% {content: "j";}
    4% {content: "ji";}
    6% {content: "jin"}
    8% {content: "jin"}
    10% {content: "jint"}
    12% {content: "jinti"}
    14% {content: "jintia"}
    16% {content: "jintian"}
    18% {content: "今天x"}
    20% {content: "今天xi"}
    22% {content: "今天xie"}
    24% {content: "今天写"}
    28% {content: "今天写d"}
    30% {content: "今天写di"}
    32% {content: "今天写dia"}
    34% {content: "今天写dian"}
    36% {content: "今天写点s"}
    38% {content: "今天写点sh"}
    40% {content: "今天写点she"}
    42% {content: "今天写点shen"}
    44% {content: "今天写点shenm"}
    46% {content: "今天写点shenme"}
    48% {content: "今天写点什么"}
    50% {content: "今天写点什么h"}
    52% {content: "今天写点什么ha"}
    54% {content: "今天写点什么hao"}
    56% {content: "今天写点什么好"}
    58% {content: "今天写点什么好n"}
    60% {content: "今天写点什么好ne"}
    62% {content: "今天写点什么好呢"}
    64% {content: "今天写点什么好呢?"}
    76% {content: "今天写点什么好呢"}
    78% {content: "今天写点什么好"}
    79% {content: "今天写点什么"}
    80% {content: "今天写点什"}
    82% {content: "今天写点"}
    84% {content: "今天写"}
    86% {content: "今天"}
    88% {content: "今"}
    90% {content: ""}
}
</style></div>

## 实现方法


### 了解::before伪元素的content属性

使用::before伪元素的content属性可以通过css在元素前面添加任何文字

<Demo>
<p id="add-text" style="margin: 0;">你好</p>
</Demo>

<div v-pre><style>
#add-text::before {
    content: "hello:";
}
</style></div>

``` html
<p id="add-text">你好</p>
```
``` css
#add-text::before {
    content: "hello:";
}
```



### 在css动画中使用

给add-text1添加css动画，并在动画中改变::before伪元素的content属性，这样就很巧妙的实现了打字动画。

<Demo>
<p id="add-text1" style="margin: 0;">你好</p>
</Demo>

<div v-pre><style>
#add-text1::before {
    animation: 3s linear 0s infinite running add-text1-animation;
    content: "";
}
@keyframes add-text1-animation {
    0% {content: "";}
    10% {content: "h";}
    20% {content: "he";}
    30% {content: "hel"}
    40% {content: "hell"}
    50% {content: "hello"}
    60% {content: "hell"}
    70% {content: "hel"}
    80% {content: "he"}
    90% {content: "h"}
}
</style></div>

``` html
<p id="add-text1">你好</p>
```
``` css
#add-text1::before {
    animation: 3s linear 0s infinite running add-text1-animation;
    content: "";
}

@keyframes add-text1-animation {
    0% {content: "";}
    10% {content: "h";}
    20% {content: "he";}
    30% {content: "hel"}
    40% {content: "hell"}
    50% {content: "hello"}
    60% {content: "hell"}
    70% {content: "hel"}
    80% {content: "he"}
    90% {content: "h"}
}
```


### 主页打字效果代码

最后看看主页打字动画的代码吧！

<Demo>
    <div class="p">
        <div class="shwoWorld">|</div>
    </div>
</Demo>

``` html
<div class="p">
    <div class="shwoWorld">|</div>
</div>
```
``` css
.shwoWorld::before {
    animation: 5s linear 0s infinite running shwoWorld;
    content: "";
}

@keyframes shwoWorld {
    0% {content: "";}
    2% {content: "j";}
    4% {content: "ji";}
    6% {content: "jin"}
    8% {content: "jin"}
    10% {content: "jint"}
    12% {content: "jinti"}
    14% {content: "jintia"}
    16% {content: "jintian"}
    18% {content: "今天x"}
    20% {content: "今天xi"}
    22% {content: "今天xie"}
    24% {content: "今天写"}
    28% {content: "今天写d"}
    30% {content: "今天写di"}
    32% {content: "今天写dia"}
    34% {content: "今天写dian"}
    36% {content: "今天写点s"}
    38% {content: "今天写点sh"}
    40% {content: "今天写点she"}
    42% {content: "今天写点shen"}
    44% {content: "今天写点shenm"}
    46% {content: "今天写点shenme"}
    48% {content: "今天写点什么"}
    50% {content: "今天写点什么h"}
    52% {content: "今天写点什么ha"}
    54% {content: "今天写点什么hao"}
    56% {content: "今天写点什么好"}
    58% {content: "今天写点什么好n"}
    60% {content: "今天写点什么好ne"}
    62% {content: "今天写点什么好呢"}
    64% {content: "今天写点什么好呢?"}
    76% {content: "今天写点什么好呢"}
    78% {content: "今天写点什么好"}
    79% {content: "今天写点什么"}
    80% {content: "今天写点什"}
    82% {content: "今天写点"}
    84% {content: "今天写"}
    86% {content: "今天"}
    88% {content: "今"}
    90% {content: ""}
}
```
