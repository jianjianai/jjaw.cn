---
# 页面路径
permalinkPattern: 2024/8/6/flist-config-mount-gitee-releases/

title: FList - 挂载 Gitee 发行版
star: false

# 启用评论评论
comment: true
---
# 挂载 Gitee 发行版
将 Gitee 发行版挂载到 FList 上

## 配置方法
将 ```jianjianai``` 的 ```FList``` 仓库挂载到根目录 ```/``` 下

- mountPath: 挂载路径,就是将文件源中的文件放到什么路径下
- analysis: 文件源分析器，这里使用的是 ```giteeReleasesFilesAnalysis```，用于解析 GitHub Releases 中的文件
``` typescript
{
  mountPath:"/",
  analysis:giteeReleasesFilesAnalysis({
    user:"jianjianai",
    repository:"FList",
    //direction: 'asc', //排序
    //access_token: 'xxxx', //用户token
    //page: 0, //第几页
    //per_page: 100 //一页显示多少个
  })
}
```
giteeReleasesFilesAnalysis的配置参数详细信息前往gitee api文档:
[https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoReleases](https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoReleases)


## giteeReleasesFilesAnalysis 特性
```giteeReleasesFilesAnalysis``` 会将  ```Gitee 发行版```
中的每个标签解析为一个目录，标签下发行的文件放到这个目录中。例如:
- ```v1.0``` -> ```/v1.0```
- ```v1.1``` -> ```/v1.1```

如果想要将文件放到```/```下可以将标签名称命名为 ```root```,在 ```root``` 标签下的文件会被放到 ```/``` 下。


如果想要将文件放到更深的目录下，则可以在标签中使用```/```。例如
- ```v1.0/test``` -> ```/v1.0/test```
- ```test/test2``` -> ```/test/test2```

## 最佳实践

### tag数量超过100个
如果tag数量超过100个则可以将每一页分开写成多个解析器挂载到相同的目录，文件会自动合并。
``` typescript
...
theme: FileList([
    ...
    {
        mountPath:"/gieee",
        analysis:giteeReleasesFilesAnalysis({
            user:"jianjianai",
            repository:"FList",
            page: 0, //第一页
            per_page: 100 //一页显示多少个
        })
    },
    {
        mountPath:"/gieee",
        analysis:giteeReleasesFilesAnalysis({
            user:"jianjianai",
            repository:"FList",
            page: 2, //第二页
            per_page: 100 //一页显示多少个
        })
    }
    ...
])
...
```

### 关于下载代理
gitee服务器在国内所以下载速度极快

由于跨域的原因，PDF，TXT，这些文件无法预览，只能下载。（视频图片音频可以预览）。

**不建议配置下载代理，** 如果需要预览PDF这类问题则需要配置下载代理，但是下载代理会导致下载速度降低。


## 下一步
- [-> 配置下载代理](../3-代理.md)
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)