---
# 页面路径
permalinkPattern: 2024/12/11/truffle-api/

title: truffleApi 使用简介
description: 本文简单讲解了truffleApi的使用方法，帮助对于有JavaScript经验的您快速入门。
tags: ["后端"]
star: false

# 启用评论评论
comment: true
---

# truffleApi简介

更多资料
- [truffle初步入门](./2-truffle初步入门.md)
- [用JavaScript写测试用例](./1-truffle用JavaScript写测试用例.md)


**Truffle** 为与智能合约进行交互提供了**合约**。如果你想了解合约的方法列表，请直接跳转到 API 部分。

## 使用方法

要获取合约，你可以使用 **artifacts** 对象的require函数通过合约名称来引入它。在控制台之外，这迁移文件、测试和执行脚本中的一个对象。你可以按照以下方式引入你的合约：

``` javascript
const MyContract = artifacts.require("MyContract");
```

控制台中或测试脚本中获取合约。你只需使用 **at**、**deployed** 或 **new** 方法即可：

``` javascript
const myContract = await MyContract.deployed();
```

现在你可以访问 **MyContract** 上的以下函数，以及其他许多函数：

- **at(address)**：创建一个表示特定地址上的合约的 **MyContract** 实例。
- **deployed()**：创建一个表示由 **MyContract** 管理的默认地址的合约实例。
- **new()**：部署此合约的新版本到网络，并获取一个表示新部署实例的 **MyContract** 实例。

每个实例与以太坊网络上的特定地址相关联，且每个实例的 JavaScript 函数与合约函数具有 1 对 1 的映射关系。例如，如果你的 Solidity 合约中定义了一个函数 `someFunction(uint value) {}`，你可以在网络上执行该函数，如下所示：

``` javascript
let deployed;
MyContract.deployed()
  .then((instance) => {
    deployed = instance;
    return deployed.someFunction(5);
  }).then((result) => {
    // 处理结果或继续执行更多交易。
  });
```

你还可以使用更简洁的 **async/await** 语法：

``` javascript
const deployed = await MyContract.deployed();
const result = await deployed.someFunction(5);
// 处理结果或继续执行更多交易。
```

有关结果对象的详细信息，请参阅“[处理交易结果](#处理交易结果)”部分。

合约方法和事件具有 EventEmitter 接口，因此你可以设置如下的处理程序：

``` javascript
const example = await artifacts.require("Example").deployed();
example
  .setValue(45)
  .on("transactionHash", (hash) => {})
  .on("receipt", (receipt) => {})
  .on("error", (error) => {})
  .on("confirmation", (num, receipt) => {})
  .then((receipt) => {});

example
  .ExampleEvent()
  .on('data', event => ... etc ... )

example
  .ExampleEvent()
  .once('data', event => ... etc ... )
```


## API

常用的API有两个。一个是**合约API**，另一个是**实例API**。**合约API** 是一组适用于所有合约对象的函数，这些函数存在于对象本身上（例如，`MyContract.at()`）。相比之下，**实例 API** 是可用于合约实例的API，即表示网络上特定合约的实例，该API是基于Solidity源文件中可用的函数动态创建的。

### 合约API
每个合约对象（例如上面的 MyContract）都具有以下可用的函数：

#### `MyContract.new([arg1, arg2, ...], [tx params])`
此函数接受你的合约所需的全部构造函数参数，并在网络上部署一个新的合约实例。在最后还有一个可选的参数，你可以用它来传递交易参数，包括交易发起地址、gas限制和价格。此函数返回一个 Promise，解析为新部署地址处的合约实例。

#### `MyContract.at(address)`
此函数在指定的地址创建一个表示合约的新合约实例。返回一个“thenable”对象（出于向后兼容性考虑，尚不是实际的 Promise）。在确保代码存在于指定地址后，解析为合约实例。

#### `MyContract.deployed()`
创建一个表示合约在其部署地址处的合约实例。部署地址是 truffle-contract 分配的特殊值，当设置后，会在内部保存该地址，以便从所使用的以太坊网络中推断出部署地址。这使你可以编写代码，引用特定部署的合约，而无需自行管理这些地址。与 at() 合约似，deployed() 也是 thenable，并将解析为表示已部署合约的合约实例，前提是代码存在于该位置并且该地址在所使用的网络上存在。

#### `MyContract.link(instance)`
将由合约实例表示的库链接到 MyContract。该库必须首先部署并设置其部署地址。名称和部署地址将从合约实例中推断出来。当使用此形式的 `MyContract.link()` 时，MyContract 将消耗所有链接库的事件，并能够报告这些事件发生在交易结果中。

可以多次链接库，将覆盖其先前的链接。

注意：此方法还有其他两种形式，但建议使用此形式。

#### `MyContract.link(name, address)`
将具有特定名称和地址的库链接到 MyContract。不会使用此形式消耗库的事件。

#### `MyContract.link(object)`
将由对象表示的多个库链接到 MyContract。键必须是表示库名称的字符串，值必须是表示地址的字符串。与上述合约似，不会使用此形式消耗库的事件。

#### `MyContract.networks()`
查看此合约实例已设置的网络 ID 列表。

#### `MyContract.setProvider(provider)`
设置此合约实例将用于执行交易的 web3 提供程序。

#### `MyContract.hasNetwork(network_id)`
设置 MyContract 当前表示的网络。

#### `MyContract.hasNetwork(network_id)`
返回一个布尔值，表示此合约实例是否已设置为表示特定网络。


以下是对你提供的英文文本的中文翻译：

### `MyContract.defaults([new_defaults])`
获取并可选择为从此合约创建的所有实例设置交易默认值。如果没有传递任何参数，它将简单地返回一个表示当前默认值的对象。如果传递了一个对象，它将设置新的默认值。可以设置的示例默认交易值包括：
``` javascript
MyContract.defaults({
  from: ...,
  gas: ...,
  gasPrice: ...,
  value: ...
})
```
例如，设置默认的调用者地址在你有一个合约用于表示一个用户（即一个地址）时非常有用。

### `MyContract.clone(network_id)`
克隆一个合约，以获取另一个管理相同合约构件的对象，但使用不同的 network_id。如果你想在不同的网络上管理相同的合约，这将非常有用。在使用此函数时，请不要忘记之后设置正确的提供程序。
``` javascript
const MyOtherContract = MyContract.clone(1337);
```

### `MyContract.numberFormat = number_type`
你可以设置此属性来选择合约方法返回的数字格式。默认行为是返回 BN。
``` javascript
// 可选值为：["BigNumber", "BN", "String"]。
const Example = artifacts.require('Example');
Example.numberFormat = 'BigNumber';
```

### `MyContract.timeout(block_timeout)`
此方法允许你设置交易的区块超时时间。从此合约创建的合约实例将具有指定的交易区块超时时间。这意味着如果交易不立即被挖掘，它将在指定的区块数内重试。

### `MyContract.autoGas = <boolean>`
如果设置为 true，从此合约创建的实例将使用 web3.eth.estimateGas，然后应用gas乘数来确定要包含在交易中的gas量。默认值为 true。请参阅 gasMultiplier。

###  `MyContract.gasMultiplier(gas_multiplier)`
在启用 `autoGas` 时用于确定要包含在交易中的gas量的值。gas量的计算是通过使用 `web3.eth.estimateGas` 并将其乘以gas乘数来完成的。默认值为 1.25。



## 实例API
根据 Solidity 合约的源代码，每个合约实例都是不同的，并且 API 是动态创建的。为了本文档的目的，让我们使用下面的 Solidity 源代码：
``` solidity
contract MyContract {
  uint public value;
  event ValueSet(uint val);
  function setValue(uint val) {
    value = val;
    emit ValueSet(value);
  }
  function getValue() constant returns (uint) {
    return value;
  }
}
```

从 JavaScript 的角度来看，这个合约有三个函数：`setValue`、`getValue` 和 `value`。这是因为 `value` 是公共的，并且会自动创建一个 getter 函数。 

这个合约允许你设置和获取一个名为 `value` 的整数值，并且在设置值时触发一个事件 `ValueSet`。

### 通过交易调用合约函数
当我们调用 `setValue()` 时，这会创建一个交易。

JavaScript 的例子：
``` javascript
const result = await instance.setValue(5);
// result 对象包含有关交易的重要信息
console.log("Value was set to", result.logs[0].args.val);
```
返回的结果对象如下所示：
``` javascript
{
  tx: "0x6cb0bbb6466b342ed7bc4a9816f1da8b92db1ccf197c3f91914fc2c721072ebd",
  receipt: {
    // The return value from web3.eth.getTransactionReceipt(hash)
    // See https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgettransactionreceipt
  },
  logs: [
    { logIndex: 0,
      transactionIndex: 0,
      transactionHash: '0x728b4d1983cd00d93ae00b7adf76f78c1b32d922de636ead42e93f70cf58cdc9',
      blockHash: '0xdce5e6c580267c9bf1d82bf0a167fa60509ef9fc520b8619d8183a8373a42035',
      blockNumber: 19,
      address: '0x035b8A9e427d93D178E2D22d600B779717696831',
      type: 'mined',
      id: 'log_70be22b0',
      event: 'Transfer',
      args:
        Result {
          '0': '0x7FEb9FAA5aED0FD547Ccc70f00C19dDe95ea54d4',
          '1': '0x7FEb9FAA5aED0FD547Ccc70f00C19dDe95ea54d4',
          '2': <BN: 1>,
          __length__: 3,
          _from: '0x7FEb9FAA5aED0FD547Ccc70f00C19dDe95ea54d4',
          _to: '0x7FEb9FAA5aED0FD547Ccc70f00C19dDe95ea54d4',
          _value: <BN: 1>
        }
    }
  ],
}
```

请注意，如果在交易中执行的函数具有返回值，你将无法在此结果中获取该返回值。你必须使用事件（例如 `ValueSet`）并在日志数组中查找结果。

### 在不创建交易的情况下调用
我们可以通过显式使用 `.call` 来调用 `setValue()`：
``` javascript
const value = await instance.setValue.call(5);
```

然而，在这种情况下，这并不是很有用，因为 `setValue()` 会修改状态，而我们传递的值不会被保存，因为我们没有创建交易。

### 调用getters
我们可以使用 `getValue()` 并使用 `.call()`。调用是免费的，不需要消耗任何以太币，因此适用于读取区块链数据的函数：
``` javascript
const value = await instance.getValue.call();
// value 表示 Solidity 合约中的 `value` 存储对象
// 因为合约返回了该值。
```

更有帮助的是，当一个函数被标记为 `constant` 时，我们甚至不需要使用 `.call`，因为 truffle-contract 会自动知道该函数只能通过调用进行交互：
``` javascript
const value = await instance.getValue();
// val 表示 Solidity 合约中的 `value` 存储对象
// 因为合约返回了该值。
```


### 处理交易结果
当你执行一个交易时，会得到一个`result`对象，其中包含有关交易的丰富信息。你将获得交易哈希（`result.tx`）、解码的事件（也称为日志；`result.logs`）以及交易收据（`result.receipt`）。在下面的示例中，你将收到 `ValueSet()` 事件，因为你使用 `setValue()` 函数触发了该事件：
```javascript
const result = await instance.setValue(5);
// result.tx => 交易哈希，字符串
// result.logs => 触发事件的数组（在此情况下为 1 个项目）
// result.receipt => 收据对象
```

### 发送以太币 / 触发回退函数
你可以通过向此函数发送交易来触发回退函数：

``` javascript
const result = instance.sendTransaction({...});
// 与上面的结果对象相同。
```

这是一个合约似于所有可用合约实例函数的 promise 化版本，并且具有与 `web3.eth.sendTransaction` 相同的 API，但没有回调。`to` 值将自动填充。

如果你只想向合约发送以太币，还有一种简写方式：

``` javascript
const result = await instance.send(web3.toWei(1, "ether"));
// 与上面的结果对象相同。
```

### 预测gas用量
你可以运行以下函数来预测gas使用量：
```javascript
const result = instance.setValue.estimateGas(5);
// result => 预测的gas量
```
