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
`analysis.type = fileUrlTreeAnalysis`，其 `options` 本身就是“路径 → URL”映射对象。

下面两种写法都可以把 `https://example.com/test.jpg` 挂载到 `/example/test.jpg`。

### 写法 1：通过文件路径推导挂载目录
文件：`mounts/example/index.json`（推导为 `/example`）

```json
{
  "analysis": {
    "type": "fileUrlTreeAnalysis",
    "options": {
      "test.jpg": "https://example.com/test.jpg"
    }
  }
}
```

### 写法 2：挂到根目录，在 options 里写完整路径
文件：`mounts/index.json`（推导为 `/`）

```json
{
  "analysis": {
    "type": "fileUrlTreeAnalysis",
    "options": {
      "example/test.jpg": "https://example.com/test.jpg"
    }
  }
}
```

`fileUrlTreeAnalysis` 支持一次配置多个文件：

```json
{
  "analysis": {
    "type": "fileUrlTreeAnalysis",
    "options": {
      "example/test.jpg": "https://example.com/test.jpg",
      "test1.jpg": "https://example.com/test1.jpg",
      "test/test2.jpg": "https://example.com/test2.jpg",
      "example/test3.jpg": "https://example.com/test3.jpg",
      "example/test/test4.jpg": "https://example.com/test4.jpg"
    }
  }
}
```

## 最佳实践

如果您的文件下载地址访问速度不佳。 或者由于跨域的原因，PDF，TXT，这些文件无法预览，可以配置代理。


如果只想代理部分文件，建议拆成两个挂载文件，可以置相同的 `mountPath` 进行合并：

```json
{
  "mountPath": "/",
  "analysis": {
    "type": "fileUrlTreeAnalysis",
    "options": {
      "example/no-proxy.txt": "https://example.com/no-proxy.txt"
    }
  }
}
```

```json
{
  "mountPath": "/",
  "analysis": {
    "type": "fileUrlTreeAnalysis",
    "options": {
      "example/need-proxy.txt": "https://example.com/need-proxy.txt"
    }
  },
  "downProxy": {
    "type": "cloudflarePagesDownProxy"
  }
}
```


## 下一步
- [-> 配置下载代理](../3-代理.md)
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)
