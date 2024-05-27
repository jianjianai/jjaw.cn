---
# 页面路径
permalinkPattern: 2024/5/26/js-array-method/

title: JavaScript数组方法 - 前端开发入门
description: 深入了解JavaScript数组及其丰富的操作方法。本教程详细介绍了数组的创建、索引访问、元素修改、元素搜索以及数据转换。无论您是编程新手还是经验丰富的开发者，都能通过本教程快速提升在数据处理和Web开发中的数组操作技能。
tags: ["前端"]
star: true

# 启用评论评论
comment: true
---

# JavaScript数组方法
在JavaScript中，数组不仅是存储多个值的基础结构，更是前端开发的核心。它们通过一系列高效的数据处理、搜索和转换的方法。是每位前端开发者必要的基础技能。


## 创建和初始化数组
### `new Array()`
`new Array()` 是一个构造函数，用于创建一个新的数组对象。


创建一个长度为3的空数组:
``` javascript
let arr = new Array(3);
```


创建一个包含三个元素的数组:
``` javascript
let arr = new Array('神奇', '小', '破站');
```


### 语法 `[]`
语法 `[]` 是创建数组的另一种更简洁、更常用的方法。

创建一个空数组:
``` javascript
let arr = [];
```

创建一个包含三个元素的数组：
``` javascript
let arr = ['神奇', '小', '破站'];
```

::: tip
在实际开发中，推荐使用字面量语法 [] 来创建数组，因为它更简单、更直观。
:::
## 访问和遍历
### 索引访问 `array[index]`
通过索引访问数组元素是最基本的方法。每个数组元素都有一个索引，从0开始。
``` javascript
let sites = ['神奇', '小', '破站'];
let firstSite = sites[0]; // 访问第一个元素
let secondSite = sites[1]; // 访问第二个元素
console.log(firstSite); // 输出: '神奇'
console.log(secondSite); // 输出: '小'
```

### for循环
``` javascript
let sites = ['神奇', '小', '破站'];
for (let i = 0; i < sites.length; i++) {
  console.log(i + ' - ' + sites[i]);
}
// 输出:
// 0 - 神奇
// 1 - 小
// 2 - 破站
```

### 增强for
``` javascript
let sites = ['神奇', '小', '破站'];
for (let i = 0; i < sites.length; i++) {
  console.log(i + ' - ' + sites[i]);
}
// 输出:
// 0 - 神奇
// 1 - 小
// 2 - 破站
```

### `.forEach()`
.forEach() 方法会对数组的每个元素执行一次提供的函数。
``` javascript
let sites = ['神奇', '小', '破站'];
sites.forEach(function(element, index) {
  console.log(index + ' - ' + element);
});
// 输出:
// 0 - 神奇
// 1 - 小
// 2 - 破站
```

## 添加和删除元素

### `.push()`
`.push()` 方法用于将一个或多个元素添加到数组的末尾，并返回新的数组长度。
```javascript
let fruits = ['神奇', '小'];
fruits.push('破站');
console.log(fruits); // 输出: ['神奇', '小', '破站']
```

### `.pop()`
`.pop()` 方法用于删除数组的最后一个元素，并返回被删除的元素。
```javascript
let fruits = ['神奇', '小', '破站'];
let lastFruit = fruits.pop();
console.log(fruits); // 输出: ['神奇', '小']
console.log(lastFruit); // 输出: '破站'
```

### `.shift()`
`.shift()` 方法用于删除数组的第一个元素，并返回被删除的元素。
```javascript
let fruits = ['神奇', '小', '破站'];
let firstFruit = fruits.shift();
console.log(fruits); // 输出: ['小', '破站']
console.log(firstFruit); // 输出: '神奇'
```

### `.unshift()`
`.unshift()` 方法用于将一个或多个元素添加到数组的开头，并返回新的数组长度。
```javascript
let fruits = ['小', '破站'];
fruits.unshift('神奇');
console.log(fruits); // 输出: ['神奇', '小', '破站']
```

### `.splice()`
`.splice()` 方法可以删掉数组指定位置的指定个元素或添加元素。
```javascript
let fruits = ['神', '奇', '小', '站'];
// 从索引1开始删除2个元素，然后添加'奇的'和'小破'
fruits.splice(1, 2, '奇的', '小破');
console.log(fruits); // 输出: ['神', '奇的', '小破', '站']
```


还可以仅删除元素
``` javascript
let fruits = ['神', '奇', '小', '站'];
// 从索引1开始删除2个元素
fruits.splice(1, 2);
console.log(fruits); // 输出: ['神', '站']
```


还可以仅添加元素
``` javascript
let fruits = ['神', '破', '站'];
// 从索引1开始，删除0个元素，添加'奇'和'小'
fruits.splice(1, 0, '奇', '小');
console.log(fruits); // 输出: ['神', '奇', '小', '破', '站']
```



## 复制和合并
### `.slice()`
`.slice()` 方法返回数组的一个副本，从开始到结束（不包括结束），不会修改原数组。
```javascript
let sites = ['神奇', '小', '破站'];
let slicedSites = sites.slice(0, 2); // 从索引0开始到索引2之前
console.log(slicedSites); // 输出: ['神奇', '小']
```

### `.concat()`
`.concat()` 方法用于合并两个或多个数组，不会改变现有的数组，而是返回一个新数组。
```javascript
let sites = ['神奇', '小'];
let moreSites = ['破站'];
let allSites = sites.concat(moreSites); // 合并数组
console.log(allSites); // 输出: ['神奇', '小', '破站']
```

## 搜索元素
### `.indexOf()`
`.indexOf()` 方法用于搜索数组中某个元素的第一个索引，如果不存在则返回 `-1`。
```javascript
let sites = ['神奇', '小', '破站', '小'];
let index = sites.indexOf('小'); // 搜索'小'的第一个索引
console.log(index); // 输出: 1
```

### `.lastIndexOf()`
`.lastIndexOf()` 方法与 `.indexOf()` 类似，但它返回数组中某个元素的最后一个索引。
```javascript
let sites = ['神奇', '小', '破站', '小'];
let lastIndex = sites.lastIndexOf('小'); // 搜索'小'的最后一个索引
console.log(lastIndex); // 输出: 3
```

### `.find()`
`.find()` 方法返回数组中满足提供的测试函数的第一个元素的值，否则返回 `undefined`。
```javascript
let sites = ['神奇', '小', '破站'];
let found = sites.find(function(element) {
  return element.length > 1;
}); // 找到第一个长度大于1的元素
console.log(found); // 输出: '神奇'
```

### `.findIndex()`
`.findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引，否则返回 `-1`。
```javascript
let sites = ['神奇', '小', '破站'];
let foundIndex = sites.findIndex(function(element) {
  return element.length > 1;
}); // 找到第一个长度大于1的元素的索引
console.log(foundIndex); // 输出: 0
```

### `.includes()`
`.includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况返回 `true` 或 `false`。
```javascript
let sites = ['神奇', '小', '破站'];
let includesSite = sites.includes('小'); // 判断是否包含'小'
console.log(includesSite); // 输出: true
```

## 筛选和转换
### `.filter()`
`.filter()` 方法创建一个新数组，包含通过所提供函数实现的测试的所有元素。
```javascript
let numbers = [1, 2, 3, 4];
let evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // 输出: [2, 4]
```

### `.map()`
`.map()` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后的返回值。
```javascript
let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(num) {
  return num * num;
});
console.log(squares); // 输出: [1, 4, 9, 16]
```

## 排序和反转
### `.sort()`
`.sort()` 方法用于对数组的元素进行排序。如果没有指定比较函数，它将默认按照字符串Unicode码点进行排序。
```javascript
let numbers = [4, 2, 5, 11, 3];
numbers.sort();
console.log(numbers); // 输出: [11, 2, 3, 4, 5]
```
如果需要按照其他标准排序，比如数字大小，可以提供一个比较函数：
```javascript
let numbers = [4, 2, 5, 11, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // 输出: [2, 3, 4, 5, 11]
```

### `.reverse()`
`.reverse()` 方法用于反转数组中元素的顺序。
```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // 输出: [5, 4, 3, 2, 1]
```

## 其他常用方法
### `.join()`
`.join()` 方法将数组中的所有元素连接成一个字符串。你可以指定一个字符串来分隔数组中的每个元素。
```javascript
let elements = ['神奇', '小', '破站'];
let result = elements.join(' '); // 使用空格作为分隔符
console.log(result); // 输出: '神奇 小 破站'
```

### `.split()`
`.split()` 方法是字符串的方法，它根据提供的分隔符将一个字符串分割成一个字符串数组。
```javascript
let sentence = '神奇小破站';
let words = sentence.split('小'); // 使用'小'作为分隔符
console.log(words); // 输出: ['神奇', '破站']
```

### `.toString()`
`.toString()` 方法返回一个表示数组中的元素的字符串。数组中的元素将被逗号分隔。
```javascript
let elements = ['神奇', '小', '破站'];
let string = elements.toString();
console.log(string); // 输出: '神奇,小,破站'
```

### `.toLocaleString()`
`.toLocaleString()` 方法返回一个字符串表示数组中的元素。数组中的元素将被本地化的字符串（如日期或货币）分隔。
```javascript
let prices = [1000, 1999, 2999];
let localString = prices.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' });
console.log(localString); // 输出: '￥1,000.00,￥1,999.00,￥2,999.00'
```

