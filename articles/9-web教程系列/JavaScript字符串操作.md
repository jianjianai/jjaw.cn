---
# 页面路径
permalinkPattern: 2024/5/22/js-string-operation/

title: JavaScript字符串操作 - 前端开发入门
description: 深入了解JavaScript字符串的强大功能，从基本的创建和操作到复杂的查找、替换、编码和解码。本教程将带你一步步探索字符串处理的各个方面，包括实用的正则表达式技巧。无论你是编程新手还是希望巩固知识的开发者，这个教程都将为你提供清晰的指导和实践练习，帮助你提升在Web开发中处理文本数据的能力。
tags: ["前端"]
star: true

# 启用评论评论
comment: true
---

# JavaScript字符串操作
字符串操作对于web开发是至关重要的，在Web开发中，字符串是存储和处理文本数据的基本单位。无论是用户输入、文件读取还是网络请求，大部分数据都以字符串形式出现。只有掌握字符串操作才能效地处理这些数据。

用户与网站的交互很大程度上涉及到字符串数据的使用，例如填写表单、搜索查询和显示消息。也需要掌握字符串操作。

## 字符串的创建和基本操作
在JavaScript中，字符串是存储文本数据的一种基本数据类型，它们是不可变的，意味着字符串一旦创建，其内容就不能被改变。


字符串的基本操作包含创建字符串变量，连接字符串，获取字符串长度。

### 创建字符串变量
- 直接定义
可以通过简单地将文本放在引号中来创建字符串。可以使用单引号、双引号或反引号（模板字符串）。
``` js
let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello World`;
```

- 构造函数创建
``` js
let str4 = new String("Hello World");
```

### 连接字符串
- 使用加号（+）操作符
最简单的连接字符串的方法是使用加号 +。这个运算符可以将多个字符串值连接起来，形成一个新的字符串。
``` js
let firstName = '神奇';
let lastName = '小破站';
let fullName = firstName + lastName; 
console.log(fullName); // "神奇小破站"
```

- 使用模板字符串
ES6引入了模板字符串，这是一种新的字符串拼接方式，可以使用反引号 ` 来创建。
``` js
let firstName = '神奇';
let lastName = '小破站';
let greeting = `你好，${firstName}${lastName}！`; 
console.log(greeting); // "你好，神奇小破站！"
```

- 使用concat()方法
``` js
let firstName = '神奇';
let lastName = '小破站';
let fullName = firstName.concat(lastName); 
console.log(fullName); // "神奇小破站"
```


### 获取字符串长度
length 属性用于获取字符串的长度。
``` js
let length = greeting.length; 
console.log(length); // 11
```

## 字符串的查找和替换
在JavaScript中，字符串的查找和替换是处理文本数据时常用的操作。

### 查找子字符串
- indexOf()
indexOf() 返回子字符串首次出现的索引位置，如果没有找到则返回-1。
``` js
let str = 'Hello World';
let index = str.indexOf('World'); 
console.log(index); // 6
```

- lastIndexOf()
与 indexOf() 类似，但返回子字符串最后一次出现的索引位置。
``` js
let str = 'Hello World';
let lastIndex = str.lastIndexOf('o');
console.log(lastIndex); // 7
```

### 替换内容
- replace()
replace() 用于替换字符串中的内容。它可以接受一个子字符串或正则表达式作为搜索值，以及一个替换值。
``` js
let str = 'Hello World';
let replacedStr = str.replace('World', 'JavaScript'); 
console.log(replacedStr); // 'Hello JavaScript'
```

- replaceAll()
它可以替换字符串中所有匹配的子字符串，而不仅仅是第一个匹配项。
``` js
let repeatedStr = 'Hello Hello';
let replacedStr = repeatedStr.replaceAll('Hello', 'Hi'); 
console.log(replacedStr); // 'Hi Hi'
```

## 字符串的切割和组合
### 分割字符串
- split()
split() 方法可以根据指定的分隔符将字符串分割成一个数组。如果不提供分隔符，整个字符串会作为数组的唯一元素。
``` js
let str = 'apple,banana,cherry';
let fruits = str.split(','); 
console.log(fruits); // ['apple', 'banana', 'cherry']
```

- slice()
slice() 方法可以提取字符串的一部分，并返回一个新字符串，不会修改原字符串。
``` js
let str = 'apple,banana,cherry';
let slicedStr = str.slice(6, 12); 
console.log(slicedStr); // 'banana'
```

- substring()
substring() 方法类似于 slice()，但它不能接受负数索引。
``` js
let str = 'apple,banana,cherry';
let subStr = str.substring(0, 5); 
console.log(subStr); // 'apple'
```

### 合并数组为字符串
- join()
当你有一个字符串数组时，join() 方法可以将数组中的所有元素组合成一个字符串。
``` js
let words = ['Hello', 'world', '!'];
let sentence = words.join(' ');
console.log(sentence);  // 'Hello world !'
```

## 字符串的转换和处理
### 大小写转换
- toUpperCase()
使用 toUpperCase() 可以将字符串转换为全部大写。
``` js
let str = 'Hello World';
let upperStr = str.toUpperCase(); 
console.log(upperStr); // 'HELLO WORLD'
```

- toLowerCase()
使用 toLowerCase() 可以将字符串转换为全部小写。
``` js
let str = 'Hello World';
let lowerStr = str.toLowerCase(); 
console.log(lowerStr); // 'hello world'
```

### 字符串解析
- parseInt()
parseInt() 可以将字符串解析为整数
``` js
let intValue = parseInt('123');
console.log(intValue);  // 123
```

- parseFloat()
parseFloat() 可以将字符串解析为小数
``` js
let floatValue = parseFloat('123.45'); 
console.log(floatValue); // 123.45
``` 

### 去除空白
- trim()
trim() 方法可以去除字符串两端的空白字符
``` js
let paddedStr = '   Hello World   ';
let trimmedStr = paddedStr.trim(); 
console.log(trimmedStr); // Hello World
```

## 字符串编码和解码
字符串编码和解码是处理URI的重要操作。它们允许开发者在发送请求之前对URL进行编码，以及在接收响应后对其进行解码。
### encodeURI和encodeURIComponent
- encodeURI
encodeURI 用于编码整个URI，它不会对 URI 中本身属于合法部分的字符进行编码，如冒号、正斜杠、问号和井号。
``` js
let uri = 'https://lanqiao.com/搜索?query=测试';
let encodedURI = encodeURI(uri);
console.log(encodedURI); // "https://lanqiao.com/%E6%90%9C%E7%B4%A2?query=%E6%B5%8B%E8%AF%95"
```

- encodeURIComponent
encodeURIComponent 用于编码 URI 的组件或参数，它会对传递给它的所有字符进行编码，包括那些在URI中有特殊含义的字符。
``` js
let query = '搜索?query=测试';
let encodedQuery = encodeURIComponent(query);
console.log(encodedQuery); // "%E6%90%9C%E7%B4%A2%3Fquery%3D%E6%B5%8B%E8%AF%95"
```

### decodeURI和decodeURIComponent
- decodeURI
decodeURI 用于解码通过 encodeURI 方法编码的整个URI。
``` js
let encodedURI = "https://lanqiao.com/%E6%90%9C%E7%B4%A2?query=%E6%B5%8B%E8%AF%95";
let decodedURI = decodeURI(encodedURI);
console.log(decodedURI); // "https://example.com/搜索?query=测试"
```

- decodeURIComponent
decodeURIComponent 用于解码通过 encodeURIComponent 方法编码的URI。
``` js
let encodedQuery = "%E6%90%9C%E7%B4%A2%3Fquery%3D%E6%B5%8B%E8%AF%95"
let decodedQuery = decodeURIComponent(encodedQuery);
console.log(decodedQuery); // "搜索?query=测试"
```


## 总结
- 特性
    - 不可变性：JavaScript中的字符串在创建后其内容不能被改变。
- 基本操作
    - 创建
        - 直接定义：' " ` 符号定义字符串
        - 构造函数创建： new String() 构造函数创建字符串对象。
    - 拼接
        - +运算符：+将多个字符串连接成一个新字符串。
        - 模板字符串：反引号和 ${} 插入变量或表达式。
        - concat()：将字符串序列连接起来。
    - 长度
        - length属性：属性获取字符串的长度。
- 查找和替换
    - 查找
        - indexOf()：查找子字符串首次出现的位置。
        - lastIndexOf()： 查找子字符串最后一次出现的位置。
    - 替换
        - replace()：替换字符串中的内容。
        - replaceAll()：替换所有匹配的子字符串。
- 切割和组合
    - 分割
        - split()：根据分隔符将字符串分割成数组
        - substring()：提取字符串的一部分
    - 合并
        - join()：将数组中的元素组合成一个字符串
- 转换和处理
    - 大小写转换
        - toUpperCase()：部转化为大写
        - toLowerCase()：全部转换为小写
    - 字符串解析
        - parseInt()：解析成整数
        - parseFloat()：解析成小数
    - 去除空白
        - trim()：去除两端的空白
- 编码和解码
    - encodeURI和encodeURIComponent：将字符串进行URL编码。
    - decodeURI和decodeURIComponent：将URL解码的字符串进行解码。
