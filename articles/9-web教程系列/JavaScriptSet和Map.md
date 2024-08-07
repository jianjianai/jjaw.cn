---
# 页面路径
permalinkPattern: 2024/5/29/js-set-map/

title: JavaScript Set 和 Map - 前端开发入门
description: Set 和 Map 是 JavaScript 中的两个重要数据结构。Set 允许存储任何类型的唯一值。此外，Set 的性能优于数组，尤其在添加、删除和查找元素方面。Map 是一种数据结构，用于存储键值对。与普通对象不同，Map 允许使用任何类型的键，而不仅限于字符串。此外，Map 在大量数据操作时，Map 的性能也优越于普通对象。
star: false

# 启用评论评论
comment: true
---

# JavaScript Set 和 Map

Set 和 Map 是 JavaScript 中的两个重要数据结构。理解 Set 和 Map 可以更好地处理数据，提高代码效率。
## Set
Set 允许存储任何类型的唯一值，无论是原始值还是对象引用。集合中的元素只会出现一次。此外，Set 的性能优于数组，尤其在添加、删除和查找元素方面。

### 创建
```javascript
//创建一个空的set
const mySet = new Set(); 

//创建一个，包含了整数 `10`、字符串 `'apple'` 和布尔值 `true`的set。
const mySet1 = new Set([10, 'apple', true]);
```

### 添加元素
```javascript
const mySet = new Set();
mySet.add(10);
mySet.add('apple');
mySet.add(true); 
// 现在 `mySet` 包含了整数 `10`、字符串 `'apple'` 和布尔值 `true`。
```

### 删除元素
```javascript
const mySet = new Set();
mySet.add(10);
mySet.delete(10); // 从 Set 中删除整数 10 
// 现在 `mySet` 中没有任何值了
```

### 去重
```javascript
const mySet = new Set();
mySet.add(1); 
mySet.add(5); 
mySet.add(5); // 重复元素不会被添加
```

### 判断元素是否存在
```javascript
const mySet = new Set();
mySet.add(1);
console.log(mySet.has(1)); // true
```

### 遍历

#### 使用 `for...of` 循环
```javascript
const mySet = new Set([10, 'apple', true]);
for (const item of mySet) {
  console.log(item); // 输出：10, 'apple', true
}
```

#### 使用 `.forEach()` 方法
```javascript
const mySet = new Set([10, 'apple', true]);
mySet.forEach((value) => {
  console.log(value); // 输出：10, 'apple', true
});
```



## Map
Map 是一种数据结构，用于存储键值对。与普通对象不同，Map 允许使用任何类型的键，而不仅限于字符串。Map 保持键值对的插入顺序，适用于需要按照插入顺序遍历的场景。此外，Map 的灵活性使其适用于处理更复杂的键值对结构。在大量数据操作时，Map 的性能也优越于普通对象。
### 创建 Map
```javascript
const myMap = new Map();//创建一个空map
```
### 添加元素
```javascript
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');
//现在 `myMap` 包含了三个键值对。
```


### 删除元素
```javascript
myMap.delete('key1'); // 删除键为 'key1' 的键值对
```
如果成功删除，返回 `true`；如果 Map 中不存在该键，返回 `false`。

### 遍历 Map

#### 使用 `.forEach()` 方法遍历
```javascript
myMap.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
});
```

#### 使用 `for...of` 循环遍历
```javascript
for (const [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}
```

#### 使用 `.keys()` 获取所有键
```javascript
for (const key of myMap.keys()) {
    console.log(key);
}
```

#### 使用 `.values()` 获取所有值
```javascript
for (const value of myMap.values()) {
    console.log(value);
}
```

#### 使用 `.entries()` 获取所有键值对
```javascript
for (const [key, value] of myMap.entries()) {
    console.log(`Key: ${key}, Value: ${value}`);
}
```



