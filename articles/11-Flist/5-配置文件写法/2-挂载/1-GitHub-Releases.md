---
# 页面路径
permalinkPattern: 2024/8/3/flist-config-mount-git-hub-releases/

title: FList - 挂载 GitHub Releases
star: false

# 启用评论评论
comment: true
---
# 挂载 GitHub Releases
将 GitHub Releases 挂载到 FList 上

## 配置方法
将 ```jianjianai``` 的 ```FList``` 仓库挂载到根目录 ```/``` 下

- mountPath: 挂载路径,就是将文件源中的文件放到什么路径下
- analysis: 文件源分析器，这里使用的是 ```githubReleasesFilesAnalysis```，用于解析 GitHub Releases 中的文件
``` typescript
{
  mountPath:"/",
  analysis:githubReleasesFilesAnalysis({user:"jianjianai", repository:"FList"})
}
```
这样就把 ```jianjianai``` 的 ```FList``` 仓库挂载到了根目录 ```/``` 下了。

## githubReleasesFilesAnalysis 特性
```githubReleasesFilesAnalysis``` 会将  ```GitHub Releases```
中的每个标签解析为一个目录，标签下发行的文件放到这个目录中。例如:
- ```v1.0``` -> ```/v1.0```
- ```v1.1``` -> ```/v1.1```

如果想要将文件放到```/```下可以将标签名称命名为 ```root```,在 ```root``` 标签下的文件会被放到 ```/``` 下。


如果想要将文件放到更深的目录下，则可以在标签中使用```/```。例如
- ```v1.0/test``` -> ```/v1.0/test```
- ```test/test2``` -> ```/test/test2```

## 最佳实践
如果直接从GitHub下载速度可能不佳。 
并且由于跨域的原因，PDF，TXT，这些文件无法预览，只能下载。（视频图片音频可以预览）。
**建议配置下载代理。**


## 下一步
- [-> 配置下载代理](../3-代理.md)
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)