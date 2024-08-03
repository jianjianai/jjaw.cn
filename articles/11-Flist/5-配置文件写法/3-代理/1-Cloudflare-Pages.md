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
如果你使用 ```Cloudflare Pages``` 部署则可以直接使用 ```cloudflarePagesDownProxy()``` 他会自动完成全部配置，
并且在开发阶段也有很好的预览体验。

- downProxy: 下载代理
``` typescript
{
  mountPath:....,
  analysis:....,
  downProxy:cloudflarePagesDownProxy(),
}
```

## 下一步
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)