---
# 页面路径
permalinkPattern: 2024/8/3/flist-config-mount-hugging-face-fatasets/

title: FList - 挂载 Hugging Face Datasets
star: false

# 启用评论评论
comment: true
---
# 挂载 Hugging Face Datasets
将 Hugging Face 的 Datasets 挂载到 FList 上


## 配置方法
例如：将 `Open-Orca/OpenOrca` 的 `main` 分支挂载到 `/huggingface测试`

文件：`mounts/huggingface测试/index.json`

```json
{
  "analysis": {
    "type": "huggingFaceDatasetsAnalysis",
    "options": {
      "userName": "Open-Orca",
      "datasetsName": "OpenOrca",
      "branchName": "main",
      "maxDeep": 3
    }
  },
  "downProxy": {
    "type": "cloudflarePagesDownProxy"
  }
}
```

如果只想挂载数据集的某个子目录，可增加 `path`。

## 参数说明
`analysis.type = huggingFaceDatasetsAnalysis`

- `userName`：用户名或组织名（必填）
- `datasetsName`：数据集名（必填）
- `branchName`：分支名（必填）
- `path`：起始目录（可选）
- `maxDeep`：最大递归深度（可选，默认 10）
- `hideReadme`：是否隐藏 README 文件（可选）

## huggingFaceDatasetsAnalysis 特性

### 将文件夹中的 README.MD 文件显示在文件夹的简介区
如果当前文件夹中有 README.MD 文件，则会将 README.MD 文件 显示在文件夹的简介区。

![文件夹简介区](./imgs/1-文件夹简介区.png)

## 最佳实践

### 关于下载代理
Hugging Face 在国内的已被墙，必须配置下载代理才能使用。
Hugging Face 许跨域，所以，PDF，TXT，这些文件也都可以预览，如果只在国外访问，则无需配置下载代理。


## 下一步
- [-> 配置下载代理](../3-代理.md)
- [-> 部署到自己喜欢的平台](../../6-部署到自己喜欢的平台.md)
