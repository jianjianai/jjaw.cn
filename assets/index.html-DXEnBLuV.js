import{_ as i,r as l,o as c,c as o,b as t,d as a,w as n,a as p,e as s}from"./app-C8EGmajL.js";const g={},r=p(`<h1 id="挂载-hugging-face-datasets" tabindex="-1"><a class="header-anchor" href="#挂载-hugging-face-datasets"><span>挂载 Hugging Face Datasets</span></a></h1><p>将 Hugging Face 的 Datasets 挂载到 FList 上</p><h2 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法"><span>配置方法</span></a></h2><p>将用户 <code>Open-Orca</code> 的 <code>OpenOrca</code> 数据集的 <code>main</code> 分支挂载到 <code>/huggingface测试</code> 下</p><p>huggingFaceDatasetsAnalysis参数</p><ul><li>userName 用户名</li><li>datasetsName 数据集名称</li><li>branchName 分支名称</li><li>maxDeep 最大深度,如果文件夹有很多层最大递归解析多少层，默认10</li></ul><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  mountPath<span class="token operator">:</span><span class="token string">&quot;/huggingface测试&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  analysis<span class="token operator">:</span><span class="token function">huggingFaceDatasetsAnalysis</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    userName<span class="token operator">:</span><span class="token string">&quot;Open-Orca&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    datasetsName<span class="token operator">:</span><span class="token string">&quot;OpenOrca&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    branchName<span class="token operator">:</span><span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">//最大深度,如果文件夹有很多层最大递归解析多少层，默认10</span></span>
<span class="line">    maxDeep<span class="token operator">:</span><span class="token number">3</span></span>
<span class="line">    <span class="token comment">//path:&quot;/test&quot; //数据集的某文件夹，只挂载这个文件夹</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><p>Hugging Face 在国内的访问速度是比较快的，所以无需配置代理就可以有很好的下载速度。 Hugging Face 还允许跨域，所以，PDF，TXT，这些文件也都可以预览。</p><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>`,10);function u(d,f){const e=l("RouteLink");return c(),o("div",null,[r,t("ul",null,[t("li",null,[a(e,{to:"/articles/11-Flist/5-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%86%99%E6%B3%95/3-%E4%BB%A3%E7%90%86.html"},{default:n(()=>[s("-> 配置下载代理")]),_:1})]),t("li",null,[a(e,{to:"/articles/11-Flist/6-%E9%83%A8%E7%BD%B2%E5%88%B0%E8%87%AA%E5%B7%B1%E5%96%9C%E6%AC%A2%E7%9A%84%E5%B9%B3%E5%8F%B0.html"},{default:n(()=>[s("-> 部署到自己喜欢的平台")]),_:1})])])])}const h=i(g,[["render",u],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/2024/8/3/flist-config-mount-hugging-face-fatasets/","title":"FList - 挂载 Hugging Face Datasets","lang":"zh-CN","frontmatter":{"permalinkPattern":"2024/8/3/flist-config-mount-hugging-face-fatasets/","title":"FList - 挂载 Hugging Face Datasets","star":false,"comment":true,"description":"挂载 Hugging Face Datasets 将 Hugging Face 的 Datasets 挂载到 FList 上 配置方法 将用户 Open-Orca 的 OpenOrca 数据集的 main 分支挂载到 /huggingface测试 下 huggingFaceDatasetsAnalysis参数 userName 用户名 datasets...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/2024/8/3/flist-config-mount-hugging-face-fatasets/"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"FList - 挂载 Hugging Face Datasets"}],["meta",{"property":"og:description","content":"挂载 Hugging Face Datasets 将 Hugging Face 的 Datasets 挂载到 FList 上 配置方法 将用户 Open-Orca 的 OpenOrca 数据集的 main 分支挂载到 /huggingface测试 下 huggingFaceDatasetsAnalysis参数 userName 用户名 datasets..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T12:55:34.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-03T12:55:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FList - 挂载 Hugging Face Datasets\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T12:55:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置方法","slug":"配置方法","link":"#配置方法","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"下一步","slug":"下一步","link":"#下一步","children":[]}],"git":{"isRoot":true,"createdTime":1722689734000,"updatedTime":1722689734000,"contributors":[{"name":"jjaw","email":"jjaw@jjaw.cn","commits":1}]},"excerpt":"\\n<p>将 Hugging Face 的 Datasets 挂载到 FList 上</p>\\n<h2>配置方法</h2>\\n<p>将用户 <code>Open-Orca</code> 的 <code>OpenOrca</code> 数据集的 <code>main</code> 分支挂载到 <code>/huggingface测试</code> 下</p>\\n<p>huggingFaceDatasetsAnalysis参数</p>\\n<ul>\\n<li>userName 用户名</li>\\n<li>datasetsName 数据集名称</li>\\n<li>branchName 分支名称</li>\\n<li>maxDeep 最大深度,如果文件夹有很多层最大递归解析多少层，默认10</li>\\n</ul>","autoDesc":true,"github_edit":{"filePathRelative":"articles/11-Flist/5-配置文件写法/2-挂载/2-Hugging-Face-Datasets.md"},"navPage":[{"title":"介绍","link":"/2024/8/3/flist-introduce/"},{"title":"快速开始","link":"/2024/8/3/flist-fast-start/"},{"title":"使用趁手的工具编辑配置文件","link":"/2024/8/3/flist-edit-config/","items":[{"title":"直接在GitHub上修改","link":"/2024/8/3/flist-online-git-hub/"},{"title":"下载代码本地修改(不推荐)","link":"/2024/8/3/flist-loclhost/"},{"title":"在线IDE编辑器修改(推荐)","link":"/2024/8/3/flist-online-ide/","items":[{"title":"Gitpod","link":"/2024/8/3/flist-online-gitpod/"},{"title":"StackBlitz","link":"/2024/8/3/flist-online-stack-blitz/"}]}]},{"title":"了解配置文件的写法","link":"/2024/8/3/flist-config-wite/","items":[{"title":"基础","link":"/2024/8/3/flist-config-base/"},{"title":"挂载文件","link":"/2024/8/3/flist-config-mount/","items":[{"title":"GitHub Releases","link":"/2024/8/3/flist-config-mount-git-hub-releases/"},{"title":"GitHub Repos","link":"/2024/8/14/flist-config-mount-git-hub-Repos/"},{"title":"Gitee 发行版","link":"/2024/8/6/flist-config-mount-gitee-releases/"},{"title":"Hugging Face Datasets","link":"/2024/8/3/flist-config-mount-hugging-face-fatasets/"},{"title":"URL 下载地址","link":"/2024/8/3/flist-config-mount-down-url/"}]},{"title":"配置代理","link":"/2024/8/3/flist-config-porxy/","items":[{"title":"Cloudflare Pages","link":"/2024/8/3/flist-config-porxy-git-hub-releases/"},{"title":"Vercel","link":"/2024/8/3/flist-config-porxy-vercel/"},{"title":"Netlify","link":"/2024/8/5/flist-config-porxy-netlify/"}]}]},{"title":"部署到自己喜欢的平台","link":"/2024/8/3/flist-deploy/","items":[{"title":"Cloudflare Pages (推荐！功能完整)","link":"/2024/8/3/flist-deploy-cloudflare-pages/"},{"title":"Vercel (推荐！功能完整)","link":"/2024/8/3/flist-deploy-vercel/"},{"title":"Netlify (推荐！功能完整)","link":"/2024/8/5/flist-deploy-netlify/"},{"title":"GitHub Pages","link":"/2024/8/3/flist-deploy-git-hub-pages/"}]}]}');export{h as comp,k as data};