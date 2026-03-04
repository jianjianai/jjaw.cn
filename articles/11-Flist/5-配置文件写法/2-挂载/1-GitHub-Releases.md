---
# 页面路径
permalinkPattern: 2024/8/3/flist-config-mount-git-hub-releases/

title: FList - 挂载 GitHub Releases
star: false

# 启用评论评论
comment: true
---
# 挂载 GitHub Releases
将 GitHub Releases 发行资产挂载到 FList。

## 配置方法
例如：将 `jianjianai/KnapsackToGo4` 挂载到 `/软件/KnapsackToGo4`

文件：`mounts/软件/KnapsackToGo4.json`

```json
{
  "analysis": {
    "type": "githubReleasesFilesAnalysis",
    "options": {
      "user": "jianjianai",
      "repository": "KnapsackToGo4"
    }
  },
  "downProxy": {
    "type": "cloudflarePagesDownProxy"
  }
}
```

路径会由文件名自动推导：

- `mounts/index.json` → `/`
- `mounts/软件/KnapsackToGo4.json` → `/软件/KnapsackToGo4`

如需覆盖默认路径，可显式添加 `mountPath`。

## 参数说明
`analysis.type = githubReleasesFilesAnalysis`

- `user`：GitHub 用户名或组织名（必填）
- `repository`：仓库名（必填）
- `authorizationToken`：GitHub Token（可选，建议配置以避免限流）

`authorizationToken` 支持从环境变量读取：

```json
{
  "analysis": {
    "type": "githubReleasesFilesAnalysis",
    "options": {
      "user": "nilaoda",
      "repository": "BBDown",
      "authorizationToken": {
        "$env": "GITHUB_TOKEN"
      }
    }
  }
}
```

## 特性
`githubReleasesFilesAnalysis` 会把每个 Release 标签解析为目录：

- `v1.0` → `/v1.0`
- `v1.1` → `/v1.1`

如果想要将文件放到```/```下可以将标签名称命名为 ```root```,在 ```root``` 标签下的文件会被放到 ```/``` 下。


如果想要将文件放到更深的目录下，则可以在标签中使用```/```。例如
- ```v1.0/test``` -> ```/v1.0/test```
- ```test/test2``` -> ```/test/test2```

## 最佳实践
如果直接从GitHub下载速度可能不佳。 

并且由于跨域的原因，PDF，TXT，这些文件无法预览，只能下载。（视频图片音频可以预览）。

**建议配置下载代理,** 可以加速下载和解决跨域问题。


## 下一步
- [-> 配置下载代理](../3-代理.md)
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)