---
# 页面路径
permalinkPattern: 2024/8/3/flist-config-mount-down-url/

title: FList - 挂载 URL 下载地址
star: false

# 启用评论评论
comment: true
---
# 挂载 URL 下载地址
如果拥有某个文件的加载地址，也可以将其挂载到 FList 上。

## 配置方法
将 ```https://example.com/test.jpg``` 的文件挂载到 ```/example``` 下,有两种配置文件分析器的的方式。

1. 将挂载路径设置到```/example```下，之后配置 ```fileUrlTreeAnalysis``` ,将文件放到 ```/``` 下。
``` typescript
{
  mountPath:"/example",
  analysis:fileUrlTreeAnalysis({
    "/test.jpg":"https://example.com/test.jpg"
  }),
}
```

2. 将挂载路径设置到```/```下，之后配置 ```fileUrlTreeAnalysis``` ,将文件放到 ```/example``` 下。
``` typescript
{
  mountPath:"/",
  analysis:fileUrlTreeAnalysis({
    "/example/test.jpg":"https://example.com/test.jpg"
  }),
}
```

```fileUrlTreeAnalysis``` 可以一次分析多个文件。

``` typescript
{
  mountPath:"/",
  analysis:fileUrlTreeAnalysis({
    "/example/test.jpg":"https://example.com/test.jpg",
    "/test1.jpg":"https://example.com/test1.jpg",
    "/test/test2.jpg":"https://example.com/test2.jpg",
    "/example/test3.jpg":"https://example.com/test3.jpg",
    "/example/test/test4.jpg":"https://example.com/test4.jpg",
    .....
  }),
}
```

## 最佳实践

如果您的文件下载地址访问速度不佳。 或者由于跨域的原因，PDF，TXT，这些文件无法预览，可以配置代理。


如果只想代理部分文件，可以将文件分析器分为两个来配置
``` typescript
// 不需要代理的文件
{
  mountPath:"/",
  analysis:fileUrlTreeAnalysis({
    "/example/test.jpg":"https://example.com/test.jpg",
    ....
  }),
},
// 需要代理的文件
{
  mountPath:"/",
  analysis:fileUrlTreeAnalysis({
    "/example/test1.jpg":"https://example.com/test1.jpg",
    ....
  }),
  downProxy:cloudflarePagesDownProxy(),
}
```


## 下一步
- [-> 配置下载代理](../3-代理.md)
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)
