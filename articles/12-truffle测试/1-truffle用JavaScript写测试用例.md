---
# 页面路径
permalinkPattern: 2024/12/11/truffle-test-start/

title: truffle 测试用例简单讲解
description: 本文简单讲解了truffle测试的使用方法，帮助对于有Mocha经验的您快速入门。
tags: ["后端"]
star: false

# 启用评论评论
comment: true
---


# 用 JavaScript 写测试用例
Truffle使用Mocha测试框架和Chai进行断言，为您提供了一个坚实的框架，以便编写JavaScript测试。让我们深入了解一下Truffle如何在Mocha的基础上进行构建，使得您的合约测试变得轻而易举。

注意：如果您不熟悉使用Mocha编写单元测试，请在继续之前查看[Mocha的文档](https://mochajs.bootcss.com/)。

## 使用contract()代替describe()
结构上，您的测试应该与Mocha的测试基本保持不变：您的测试应该存在于`./test`目录中，它们应该以.js扩展名结尾，并且它们应该包含Mocha将识别为自动化测试的代码。使Truffle测试与Mocha不同的是`contract()`函数：此函数的工作方式与`describe()`完全相同，但它启用了Truffle的迁移功能。它的工作方式如下：

在运行每个`contract()`函数之前，您的合约会重新部署到正在运行的以太坊客户端，以便其中的测试在干净的状态下运行。

`contract()`函数提供了一个由您的以太坊客户端提供的帐户列表，您可以使用这些帐户来编写测试。

由于Truffle在底层使用Mocha，因此您仍然可以使用`describe()`来运行普通的Mocha测试，而无需使用Truffle的迁移功能。

## 在您的测试中使用合约类。
合约类是使JavaScript能够与合约进行交互的基础（它们基本上就一个合约的映射）。由于Truffle无法检测出您在测试中需要与哪些合约进行交互，您需要明确要求这些合约。您可以通过使用`artifacts.require()`方法来实现这一点，这是Truffle提供的一种方法，允许您请求特定Solidity合约的可用合约类。如下面的示例所示，您可以使用这个类来确保您的合约正常工作。

有关使用合约类的更多信息，请参阅“与您的合约交互”部分。


## 使用 artifacts.require()
在您的测试中使用`artifacts.require()`的方式与在迁移中使用它的方式相同；您只需传递合约的名称即可。有关详细用法，请参阅迁移部分中的`artifacts.require()`文档。

## 使用 web3
在每个测试文件中，都有一个已配置到正确提供程序的web3实例。因此，调用`web3.eth.getBalance`就可以正常工作！

## 相关内容
[truffleApi简介](./0-truffleApi简介.md)
[truffle初步入门](./2-truffle初步入门.md)


