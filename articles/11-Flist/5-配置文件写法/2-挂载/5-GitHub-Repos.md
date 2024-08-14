---
# 页面路径
permalinkPattern: 2024/8/14/flist-config-mount-git-hub-Repos/

title: FList - 挂载 GitHub Repos
star: false

# 启用评论评论
comment: true
---
# 挂载 GitHub Repos
将 GitHub Repos 挂载到 FList 上

## 配置方法
将 ```Aikoyori``` 的 ```ProgrammingVTuberLogos``` 仓库挂载到根目录 ```/``` 下

- mountPath: 挂载路径,就是将文件源中的文件放到什么路径下
- analysis: 文件源分析器，这里使用的是 ```githubReposAnalysis```，用于解析 GitHub Repos 中的文件
``` typescript
{
  mountPath: "/ProgrammingVTuberLogos",
  analysis: githubReposAnalysis({
    user: "Aikoyori",
    repository: "ProgrammingVTuberLogos",
    // rootPath: string, //根路径,挂载仓库的路径
    // authorizationToken: string, //github token
    // ref: string, //github分支
    // maxDeep: number, //最大深度,默认10
  }),
}
```

这样就把 ```Aikoyori``` 的 ```ProgrammingVTuberLogos``` 仓库挂载到了根目录 ```/``` 下了。



## 最佳实践
如果直接从GitHub下载速度可能不佳。 

并且由于跨域的原因，PDF，TXT，这些文件无法预览，只能下载。（视频图片音频可以预览）。

**建议配置下载代理,** 可以加速下载和解决跨域问题。


## 下一步
- [-> 配置下载代理](../3-代理.md)
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)