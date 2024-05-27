---
# 页面路径
permalinkPattern: 2024/5/26/js-regular-expression/

title: JavaScript正则表达式 - 前端开发入门
description: 深入了解JavaScript正则表达式及其强大的功能。本教程详细介绍了正则表达式的语法、模式匹配、字符串搜索、替换操作以及高级技巧。无论您是编程新手还是经验丰富的开发者，都能通过本教程快速提升在文本处理和Web开发中的正则表达式应用技能。
tags: ["前端"]
star: true

# 启用评论评论
comment: true
---

# JavaScript正则表达式
正则表达式是编程中的一种强大工具，它能够帮助我们以一种简洁而高效的方式处理字符串。无论是验证用户输入的数据，还是从大段文本中提取特定信息，它都能够轻松应对。

## 基本语法
### 字符
- `.`：匹配除换行符外的任意单个字符。
- `\d`：匹配任意一个数字（0-9）。
- `\w`：匹配任意一个字母、数字或下划线。
- `\s`：匹配任意一个空白字符（空格、制表符、换行符等）。

### 字符组
字符组用于匹配一组字符中的任意一个。
- `[aeiou]`：匹配任意一个元音字母。
- `[0-9]`：匹配任意一个数字。
- `[A-Za-z]`：匹配任意一个字母。

### 匹配次数
- `*`：匹配前面的元素零次或多次。
- `+`：匹配前面的元素一次或多次。
- `?`：匹配前面的元素零次或一次。
- `{n}`：匹配前面的元素恰好 **n** 次。
- `{n,}`：匹配前面的元素至少 **n** 次。
- `{n,m}`：匹配前面的元素至少 **n** 次，但不超过 **m** 次。

### 边界匹配
- `^`：匹配字符串的开头。
- `$`：匹配字符串的结尾。

### 模式
- `(ab)+`：匹配连续出现的“ab”字符串。

### 选择结构
- `a|b`：匹配字符 **a** 或字符 **b**。
- `(x|y|z)`：匹配 **x**、**y** 或 **z**。


## 高级特性
### 非贪婪匹配
在正则表达式中，默认的匹配方式是贪婪的，这意味着它会尽可能多地匹配字符。非贪婪匹配，也称为懒惰匹配，是通过在`匹配次数`后面加上一个问号 `?` 来实现的。这会告诉正则表达式引擎匹配尽可能少的字符。

- 贪婪匹配：`a.*b` 会匹配从第一个 `a` 到最后一个 `b` 之间的所有内容。
- 非贪婪匹配：`a.*?b` 会匹配从第一个 `a` 到最近的一个 `b` 之间的内容。

### 向前和向后查找
向前查找和向后查找允许我们在匹配一个`模式`的同时，检查前后是否存在另一个指定的`模式`。不会消耗字符（不会成为匹配的一部分），只是进行检查。

- 向前查找：`X(?=Y)` 会匹配 `X`，仅当 `X` 后面跟着 `Y`。
- 向后查找：`(?<=Y)X` 会匹配 `X`，仅当 `X` 前面是 `Y`。

### 子模式引用
子`模式`引用允许我们在正则表达式中引用之前匹配的一个分组。这在需要匹配重复出现的文本时非常有用。例如：

- `(\\w+) \\1` 会匹配两个连续且相同的单词，如 "hello hello"。

### 断言
断言用于在不消耗字符的情况下，检查一个匹配是否满足某些条件，分为正向断言和负向断言。

- 正向断言：`X(?=Y)` 表示 `X` 只有在后面紧跟着 `Y` 的情况下才会匹配。
- 负向断言：`X(?!Y)` 表示 `X` 只有在后面不紧跟着 `Y` 的情况下才会匹配。

## JavaScript中的应用

### 标志（flags）
正则表达式可以带有标志，用于修改匹配的行为。

- **`i`**：不区分大小写匹配。
- **`g`**：全局匹配，查找所有匹配项。
- **`m`**：多行匹配，使 `^` 和 `$` 匹配每一行的开头和结尾。


### `RegExp` 对象
`RegExp` 是 JavaScript 中的正则表达式对象。你可以使用它来创建和操作正则表达式。

```javascript
const pattern = /hello/i; // 不区分大小写匹配 "hello"
const regex = new RegExp("hello", "g"); // 全局匹配 "hello"
```

#### `test()`
测试字符串是否与模式匹配。如果字符串与模式匹配返回`true`，否则返回 `false`。
```javascript
const pattern = /小破站/;
const testString = "神奇破站";
const isMatch = pattern.test(testString);
console.log(isMatch); // false
```

#### `exec()`
返回一个 `MatchCollection` 对象，其中包含匹配模式的所有子串。如果找到匹配，返回一个数组，否则返回 `null`。
```javascript
const pattern = /\d+/g;
const testString = "2022:神奇小破站V1 2023:神奇小破站V2";
let match;
while ((match = pattern.exec(testString)) !== null) {
  console.log(match[0]); // 2022 , 1 , 2023 , 2
}
```

#### `replace()`
用替换字符串替换匹配的模式。

```javascript
const pattern = /神奇小?/g;
const testString = "神奇小破站真的很神奇";
const replacedString = testString.replace(pattern, "奇妙");
console.log(replacedString); // "奇妙破站真的很奇妙"
```


### `String` 方法
JavaScript 中的 `String` 对象提供了几个与正则表达式相关的方法。

#### `match(pattern)`
返回一个数组，包含与正则表达式模式匹配的所有子串。
```javascript
// match 示例
const text = "神奇小破站真的很神奇";
const pattern = /神奇小?/g;
console.log(text.match(pattern)); // 输出: ["神奇小", "神奇"]
```

#### `replace(pattern, replacement)`
用指定的字符串或函数替换与正则表达式模式匹配的子串。
```javascript
// replace 示例
const text = "神奇小破站真的很神奇";
const pattern = /神奇小?/g;
console.log(text.replace(pattern, "奇妙")); // 输出: "奇妙破站真的很奇妙"
```

#### `search(pattern)`
返回第一个与正则表达式模式匹配的子串的索引。如果没有匹配项，则返回 -1。
```javascript
// search 示例
const text = "神奇小破站真的很神奇";
const pattern = /小.站/;
console.log(text.search(pattern)); // 输出: 2
```

#### `split(pattern)`
将字符串分割成一个数组，根据正则表达式模式的匹配项作为分隔符。
```javascript
// split 示例
const text = "神奇小破站真的很神奇";
const pattern = /小破站/;
console.log(text.split(pattern)); // 输出: ["神奇", "真的很神奇"]
```








