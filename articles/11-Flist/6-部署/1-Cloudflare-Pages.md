---
# 页面路径
permalinkPattern: 2024/8/3/flist-deploy-cloudflare-pages/

title: FList - 部署到 Cloudflare Pages 
star: false

# 启用评论评论
comment: true
---
# 部署到 Cloudflare Pages 
- 🎉 部署简单，完全免费
- 🎉 Pages 限制每日 100000 次请求 (打开网页，切换页面和下载都不消耗次数，预览和下载使用 ```cloudflarePagesDownProxy``` 代理的文件才消耗次数。)
- 😞 晚高峰可能网站可能不太流畅

## 简单
懂得小伙伴都懂，看这两行就够了。

- Build command
``` shell
pnpm run build
```
- Build output directory
``` shell
.vuepress/dist
```

## 详细教学
到时候再补充吧，先写这么多。
