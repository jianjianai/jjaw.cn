---
# 页面路径
permalinkPattern: 2024/8/3/flist-config-porxy-git-hub-releases/

title: FList - Cloudflare Pages 下载代理
star: false

# 启用评论评论
comment: true
---
# Cloudflare Pages 下载代理

## 配置方法
如果你使用 `Cloudflare Pages` 部署，可在挂载配置中设置：

`downProxy.type = cloudflarePagesDownProxy`

示例（`mounts/软件/KnapsackToGo4.json`）：

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

不启用代理时可省略 `downProxy`，或写成 `{}`。

## 下一步
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)