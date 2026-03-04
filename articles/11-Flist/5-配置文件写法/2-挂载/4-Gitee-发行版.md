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

例如：将 `jianjianai/FList` 挂载到根目录 `/`

文件：`mounts/index.json`

```json
{
    "analysis": {
        "type": "giteeReleasesFilesAnalysis",
        "options": {
            "user": "jianjianai",
            "repository": "FList",
            "direction": "desc"
        }
    }
}
```

## 参数说明
`analysis.type = giteeReleasesFilesAnalysis`

- `user`：Gitee 用户名或组织名（必填）
- `repository`：仓库名（必填）
- `direction`：排序方向，`desc` / `asc`（可选）
- `access_token`：Gitee Token（可选）
- `page`：页码（可选）
- `per_page`：每页数量（可选）

参数详情可参考 Gitee API：
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
如果 tag 数量较多，可拆成多个挂载文件并显式设置同一个 `mountPath`，结果会合并。

`mounts/gitee/page-1.json`

```json
{
    "mountPath": "/gitee",
    "analysis": {
        "type": "giteeReleasesFilesAnalysis",
        "options": {
            "user": "jianjianai",
            "repository": "FList",
            "page": 1,
            "per_page": 100
        }
    }
}
```

`mounts/gitee/page-2.json`

```json
{
    "mountPath": "/gitee",
    "analysis": {
        "type": "giteeReleasesFilesAnalysis",
        "options": {
            "user": "jianjianai",
            "repository": "FList",
            "page": 2,
            "per_page": 100
        }
    }
}
```

### 关于下载代理
Gitee 在国内访问通常较快。

由于跨域的原因，PDF，TXT，这些文件无法预览，只能下载。（视频图片音频可以预览）。

**不建议配置下载代理，** 如果需要预览PDF这类问题则需要配置下载代理，但是下载代理会导致下载速度降低。


## 下一步
- [-> 配置下载代理](../3-代理.md)
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)