---
# 页面路径
permalinkPattern: 2024/12/11/truffle-beginner/

title: truffle 详细快速入门
description: 本文详细讲解了truffle测试的各种概念，帮你快速掌握并熟练使用truffle进行自能合约测试，相比于官方文档更容易理解。
tags: ["后端"]
star: true

# 启用评论评论
comment: true
---

# truffle初步入门

## 基础概念

### 合约
每个合约都是一个合约,例如`Test`合约就是一个合约。
``` solidity
contract Test{
}
```

### 合约实例

一个合约可以有很多合约实例，每个合约实例都有一个地址，一个合约每被部署一次就会产生一个新的合约实例，例如下面的例子中创建了两个合约实例`oneTest`和`towTest`变量中分别存储了两个`Test`合约的实例。
``` solidity
contract Test1 {
    constructor() public {
        Test oneTest = new Test();
        Test towTest = new Test();
    }
}
```

## `artifacts.require(name)` 引入合约
在truffle中，任何地方都可以通过 `artifacts.require(name)` 引入合约。

例如`Test`变量就代表`Test`合约。
``` js
const Test = artifacts.require("Test");
```


## migrations 迁移部署
migrations中的脚本用于在测试开始之前部署合约，确保每一次测试都是干净的合约，有点像是初始化。

### `module.exports = async function(deployer)` 迁移函数
每个迁移脚本中都需要导出一个`async function(deployer)`异步函数，这个函数接收一个`deployer`对象。`deployer`中有一个`deploy(class)`函数，这个函数的功能就是部署合约。

下面是一个简单例子：
``` solidity
contract Test{
}
```
``` js
//获取合约
const Test = artifacts.require("Test");
module.exports = async (deployer)=>{
    //部署合约
    deployer.deploy(Test);
}
```


### 带有构造参数的合约
``` solidity
contract Test{
    constructor(uint a,string memory b) public{
    }
}
```
``` js
const Test = artifacts.require("Test");
module.exports = async (deployer)=>{
    deployer.deploy(Test,10,"qwe");
}
```

### 需要另一个合约作为构造参数
``` solidity
contract Test{
}
contract Test1{
    constructor(Test1 test) public{
    }
}
```
``` js
const Test = artifacts.require("Test");
const Test1 = artifacts.require("Test1");
module.exports = async (deployer)=>{
    await deployer.deploy(Test);
    deployer.deploy(Test1,Test.address);
}
```

## test测试

### `contract(name,function(accounts))` 函数
在测试脚本中，用`contract(name,function(accounts))`函数注册一个测试项，第一个参数是测试名称，第二个参数是一个回调函数。回调函数接受一个测试账户地址列表。

例如，这样就可以注册一个名词为`a test`的测试项。并输出全部的测试地址。
``` js
contract("a test",(accounts)=>{
    console.log(accounts); // ['0x8aEd75bb70e8f399e2eA2E30d01a671D6E8617bb',....]
});
```
### `it(name,async function())` 函数

`it(name,async function())`函数用来注册，测试的子项，每个测试项可以包含多个子项。第一个参数是子项的名称，第二个项目可以是一个异步的回调函数，如果这个函数正常执行完成则代表测试成功。

例如这样就可以在`a test`中创建一个`hello function test`的子项。
``` js
contract("contract Test test",(accounts)=>{
    it("hello function test",async ()=>{
    });
});
```
直接执行控制台会这样输出。
```
  Contract: contract Test test
    ✔ hello function test


  1 passing (62ms)
```


如果测试中有一个异常代表测试失败，下面这个例子会永远都是测试失败。
``` js
contract("contract Test test",(accounts)=>{
    it("hello function test",async ()=>{
        throw new Error("错误啊啊啊!");
    });
});
```
```
  Contract: contract Test test
    1) hello function test
    > No events were emitted


  0 passing (92ms)
  1 failing

  1) Contract: contract Test test
       hello function test:
     Error: 错误啊啊啊!
      at Context.<anonymous> (test/1_test1.js:8:15)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
```

当然不建议你直接用`throw`来抛出异常，而是用`assert`来断言。更多关于`assert`的api可以参考：[assertApi](./3-assertApi.md)
``` js
contract("contract Test test",(accounts)=>{
    it("hello function test",async ()=>{
        let len = ...;
        assert.equal(len ,10,"长度必须为10。");
    });
});
```

### 调用solidty合约

#### API `deployed()`
使用合约中的`deployed()`方法可以获得之前在`migrations`中部署的合约对象。
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        console.log(test.address); // 0x....
    });
});
```

#### 实例函数
实例对象中的函数与solidity合约中的函数是一一对应的关系。

下面例子调用了，Test合约中的hello函数。
``` solidity
contract Test{
    function hello() public pure{
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        await test.hello();
    });
});
```

#### 带参函数

带参函数中的参数在js中也是一一对应的。
``` solidity
contract Test{
    function hello(string memory name,uint count) public pure{
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        await test.hello("jianjian",10);
    });
});
```

#### pure或view函数(calls调用)
pure或view函数都三calls调用，calls调调用会执行合约上的代码并立即返回，calls调用只会读取数据，不会更改合约上的数据。执行calls调用是免费的，不会消耗gas。

- 免费(不花费gas)
- 不改变链上的状态
- 立即执行
- 有返回值

##### 返回单个值
如果是返回单个值，则直接返回函数的返回值。
``` solidity
contract Test{
    function hello() public view returns(string memory){
        return "are you ok";
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        let returns = await test.hello();
        console.log(returns); // are you ok
    });
});
```

##### 返回多个值
如果是返回多个值，则返回一个`Result`对象，用法似数组。
``` solidity
contract Test{
    function hello() public view returns(string memory,string memory){
        return ("hello","world");
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        let returns = await test.hello();
        console.log(returns[0]); // hello
        console.log(returns[1]); // world
    });
});
```

##### 返回值型对应

solidty中的部分对象在js中是不存在的，因此solidty返回值需要转换转换为js对象。
|solidty|->|js||
|-|-|-|-|
|address|->|string|十六进制表示|
|byte|->|string|十六进制表示|
|string|->|string||
|uint|->|BN (BigNum)|一个特殊的对象|
|int|->|BN (BigNum)|一个特殊的对象|
|string[]|->|string[]|
|uint[]|->|BN[]|
|int[]|->|BN[]|


###### address,byte
``` solidity 
contract Test{
    function getHi() pure public returns(address,byte){
        return (address(0),yte(0));
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        const returns = await test.getHi();
        console.log(returns[0]);//0x0000000000000000000000000000000000000000
        console.log(returns[1]);//0x00
    });
});
```
###### string
``` solidity
contract Test{
    function getHi() pure public returns(string memory){
        return "hello";
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        const returns = await test.getHi();
        console.log(returns);// hello
    });
});
```

###### uint,int

uint和int会返回一个特殊的`BN`对象,可以使用`.toNumber()`方法来转换成number对象，solidty中的uint表示访问远大于js中的nubner表示范围，可能会遇到错误或无法预期的行为。

更多关于BN对象的方法可以查看[bn.js](https://github.com/indutny/bn.js/)文档。

``` solidity
contract Test{
    function getHi() pure public returns(uint,int){
        return (10,-5);
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        const returns = await test.getHi();
        console.log(returns[0].toNumber());//10
        console.log(returns[1].toNumber());//-5
    });
});
```

###### 数组
``` solidity
pragma experimental ABIEncoderV2;
contract Test{
    uint[] arr1 = [1,2,3];
    string[] arr2 = ["qwe","asd"];
    function getHi() view public returns(uint[] memory,string[] memory){
        return (arr1,arr2);
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        const returns = await test.getHi();
        console.log(returns[0]); // [ BN{...} , BN{...} ]
        console.log(returns[1]); // [ 'qwe', 'asd' ]
    });
});
```




#### 函数调用(Transactions交易)
交易会改变合约的状态，因此需要花费gas，当我们通过交易执行合约的函数时，我们无法接收该函数的返回值，因为交易不会立即处理。通过交易执行的函数不会返回值，而是返回一个交易的ID。

- 消耗Gas
- 会更改网络状态
- 不会立即执行（需要等待网络矿工打包）
- 没有执行返回值（只是一个交易ID）。

##### 得到交易的回执

调用交易不会有返回值,只能得到交易的回执。

***solidty函数中就算返回了值，也是拿不到的，只能得到交易回执。***

``` solidity
contract Test{
    string world;
    function setWorld(string memory _world) public returns(string memory){
        world = _world;
        return "hello";
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        let returns = await test.setWorld("hi");
        console.log(returns);
    });
});
```
`console.log(returns);`输出：
``` js
{
  tx: '0xXXX',
  receipt: {
    transactionHash: '0xXXX',
    transactionIndex: 0,
    blockNumber: 5,
    blockHash: '0xXXX',
    from: '0xXXX',
    to: '0xXXX',
    cumulativeGasUsed: 21496,
    gasUsed: 21496,
    contractAddress: null,
    logs: [],
    logsBloom: '0xXXX',
    status: true,
    effectiveGasPrice: 3036981786,
    type: '0x2',
    rawLogs: []
  },
  logs: []
}
```


##### 使用`call`调用来得到返回值
在函数对象上使用`call`来调用可以和pure或view函数一样拿到函数的返回值。`call`调用不会改变合约的状态，也不会花费gas，因为这种调用不会作为交易发送给矿工打包。

- 免费(不花费gas)
- 不改变链上的状态
- 立即执行
- 有返回值

``` solidity
contract Test{
    string world;
    function setWorld(string memory _world) public returns(string memory){
        world = _world;
        return "hello";
    }
}

```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        let returns = await test.setWorld.call("hi");
        console.log(returns);// hello
    });
});
```

#### 调用参数

##### 指定调用账户
在函数的最后一个参数的后面一个参数，传入一个对象，`from`项为账户地址。

参考下方表格以此推。
|solidity|js|
|-|-|
|`function h()`|`xxx.h({from:accounts[0]})`|
|`function h(uint a)`|`xxx.h(1,{from:accounts[0]})`|
|`function h(uint a,uint b)`|`xxx.h(1,2,{from:accounts[0]})`|


``` solidity
contract Test{
    function hello(uint count) public view returns(address){
        return msg.sender;
    }
}

```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        let returns = await test.hello(10,{from:accounts[0]});
        console.log(accounts[0]); // 0x...
        console.log(returns); // 这个打印一定和上一个相同
    });
});
```

##### 转账，payable函数

``` solidity
contract Test{
    uint saves = 0;
    function save() public payable{
        saves += msg.value;
    }
    function qury() view public returns(uint){
        return saves;
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        await test.save({value:10});
        const returns = await test.qury();
        console.log(returns.toNumber()); // 10
    });
});
```

使用from参数，可以指定用户转账
``` js
await test.save({value:10,from:accounts[0]});
```

#### 直接发起交易，触发Fallback或receive函数。

##### 使用`sendTransaction()`

使用sendTransaction()函数可以直接向合约发起交易。

``` solidity
contract Test{
    fallback() external payable{
    }
    function qury() view public returns(uint){
        return address(this).balance;
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        await test.sendTransaction({value:10});
        const returns = await test.qury();
        console.log(returns.toNumber()); // 10
    });
});
```


##### 使用`send()`


``` solidity
contract Test{
    fallback() external payable{
    }
    function qury() view public returns(uint){
        return address(this).balance;
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.deployed();
        await test.send(10);
        const returns = await test.qury();
        console.log(returns.toNumber()); // 10
    });
});
```


### 获得合约实例

#### new 部署新的合约实例
使用合约上的`new()`函数可以创建一个新的合约实例。
``` solidity
contract Test{
    string hi;
    constructor(string memory _hi) public{
        hi = _hi;
    }
    function getHi() view public returns(string memory){
        return hi;
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.new("hello world")
        const returns = await test.getHi();
        console.log(returns); // hello world
    });
});
```

在创建时指定账户和转账
``` solidity
contract Test{
    address hi;
    constructor() public payable{
        hi=msg.sender;
    }
    function getHi() view public returns(address){
        return hi;
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.new({from:accounts[2],value:10})
        const returns = await test.getHi();
        console.log(accounts[2]); // 0xXXX
        console.log(returns); // 一定和上一个相同
    });
});
```



#### at 在已有地址上创建实例
如果已有合约的地址，则可以在该地址上创建实例

下面例子中，test和test1表示同一个合约的实例。
``` solidity
contract Test{
    string hi;
    constructor(string memory _hi) public{
        hi = _hi;
    }
    function getHi() view public returns(string memory){
        return hi;
    }
}
```
``` js
const Test = artifacts.require("Test");
contract("contract Test test",(accounts)=>{
    it("hello",async ()=>{
        const test = await Test.new("hello world")
        const returns = await test.getHi();
        console.log(returns); // hello world

        const test1 = await Test.at(test.address);
        const returns1 = await test.getHi();
        console.log(returns1); // hello world
    });
});
```

## 完结

以上就是全部tuffle常用的内容了，还有更多深入的内容.
- [web3.js - 以太坊 JavaScript API](https://learnblockchain.cn/docs/web3.js/)
- [assert Api  - nodejs 断言](./3-assertApi.md)
- [truffleApi简介](./0-truffleApi简介.md)
- [bn.js - BigNumber js的大数库](https://github.com/indutny/bn.js/)
- [用JavaScript写测试用例](./1-truffle用JavaScript写测试用例.md)


## 常见问题解答

### 报错 `hit an invalid opcode while deploying`
```
"Test" hit an invalid opcode while deploying. Try:
   * Verifying that your constructor params satisfy all assert conditions.
   * Verifying your constructor code doesn't access an array out of bounds.
   * Adding reason strings to your assert statements.
```
``` solidity
pragma solidity ^0.8.21;
contract Test{
    function hello() pure public returns(string memory){
        return "hello";
    }
}
```
``` js
const Test = artifacts.require("Test");
module.exports = function (deployer){
     deployer.deploy(Test);
}
```

原因可能是`0.8.21`版本和truffle不兼容，更换编译器版本为`0.8.19`即可。




