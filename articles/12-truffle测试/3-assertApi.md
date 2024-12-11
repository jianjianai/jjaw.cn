---
# 页面路径
permalinkPattern: 2024/12/11/truffle-assert/

title: assertApi
description: 本文详细讲解了truffle中常用的 assertAPI
tags: ["后端"]
star: false

# 启用评论评论
comment: true
---

# assert Api

assert(断言)中的全部函数的用法整理。

assert模块是Node的内置模块，主要用于断言。如果表达式不符合预期，就抛出一个错误。

## `assert(value,msg)`
value必须为true
``` js
assert( expected === 3, 'expected必须等于3');
```

## `assert.ok(value)`
value必须为`true`
``` js
assert.ok(expected == 3, 'expected必须等于3');
```

## `assert.equal(value1,value2,msg)`
value1和value2必须相同
``` js
assert.equal(expected, 3, 'expected必须等于3');
```

## `assert.notEqual(value1,value2,msg)`
value1和value2必须不同
``` js
assert.notEqual(expected, 4, 'expected不可以等于4');
```

## `assert.deepEqual(obj1,obj2,msg)`
比较两个对象。只要它们的属性一一对应，且值都相等，就认为两个对象相等。

``` js
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
assert.deepEqual(list1, list2, '预期两个数组应该有相同的属性');

var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"john", "age":"21" };
assert.deepEqual(person1, person2, '预期两个对象应该有相同的属性');
```

## `assert.notDeepEqual(obj1,obj2,msg)`
和deepEqual相反，用来断言两个对象是否不相等。
``` js
var list1 = [1, 2, ,3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
assert.notDeepEqual(list1, list2, '预期两个对象不相等');

var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"jane", "age":"19" };
assert.notDeepEqual(person1, person2, '预期两个对象不相等');
```

## `assert.strictEqual(value1,value2,msg)`
strictEqual方法使用严格相等运算符（===），比较两个表达式。
``` js
assert.strictEqual(1, '1', '预期严格相等');
```

## `assert.notStrictEqual(value1,value2,msg)`
notStrictEqual方法使用严格不相等运算符（!==），比较两个表达式。
``` js
assert.notStrictEqual(1, true, '预期严格不相等');
```








