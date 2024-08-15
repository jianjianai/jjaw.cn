import{_ as t,o as i,c as e,a as l}from"./app-BnivRIq3.js";const o={},s=l('<h1 id="下载跨域限制级" tabindex="-1"><a class="header-anchor" href="#下载跨域限制级"><span>下载跨域限制级</span></a></h1><p>Flist 将下载跨域限制级分为 4 个等级，分别是：</p><ul><li>allow: 允许跨域，所有功能均可正常使用。</li><li>loose: 浏览器不阻止跨域的资源可以预览，例如视频音频图片等。</li><li>strict: 服务端会通过origin请求头或者其他方法严格限制跨域访问，无法预览。</li><li>verystrict: 就连从其他网站点击超链接下载也不行，非常严格的防盗链，需要复制下载链接在新标签页粘贴才能下载。</li></ul><p>总结：如果需要预览PDF,MD,TXT等文件则需要 allow 等级。如果需要预览视频图片音频等则至少需要 loose 等级。需要点击下载按钮自动开始下载则至少需要 strict 等级。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果配置了下载代理，无论是什么等级都会被提升到 allow 等级。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 Flist 页面按 F12 打开控制台可以看到当前文件限制级的日志输出哦。</p></div><h2 id="下载跨域限制级列表" tabindex="-1"><a class="header-anchor" href="#下载跨域限制级列表"><span>下载跨域限制级列表</span></a></h2><p>可挂载的平台在 Flist 下载跨域限制级列表</p><table><thead><tr><th>平台</th><th>限制级</th><th>描述</th></tr></thead><tbody><tr><td>GitHub Releases</td><td>loose</td><td></td></tr><tr><td>GitHub Repos</td><td>loose</td><td></td></tr><tr><td>Hugging Face Datasets</td><td>allow</td><td></td></tr><tr><td>URL 下载地址</td><td>allow</td><td>Flist 无从知晓您提供的链接的下载跨域等级，所以会直接给予 allow 等级，开放全部功能，能否使用取决于链接是否允许跨域。</td></tr><tr><td>Gitee 发行版</td><td>loose</td><td></td></tr><tr><td>Gitee 仓库</td><td>verystrict</td><td></td></tr></tbody></table>',9),n=[s];function r(a,c){return i(),e("div",null,n)}const p=t(o,[["render",r],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/2024/8/16/flist-thorough-cros/","title":"FList - 下载跨域限制级","lang":"zh-CN","frontmatter":{"permalinkPattern":"2024/8/16/flist-thorough-cros/","title":"FList - 下载跨域限制级","star":false,"comment":true,"description":"下载跨域限制级 Flist 将下载跨域限制级分为 4 个等级，分别是： allow: 允许跨域，所有功能均可正常使用。 loose: 浏览器不阻止跨域的资源可以预览，例如视频音频图片等。 strict: 服务端会通过origin请求头或者其他方法严格限制跨域访问，无法预览。 verystrict: 就连从其他网站点击超链接下载也不行，非常严格的防盗链，...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/2024/8/16/flist-thorough-cros/"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"FList - 下载跨域限制级"}],["meta",{"property":"og:description","content":"下载跨域限制级 Flist 将下载跨域限制级分为 4 个等级，分别是： allow: 允许跨域，所有功能均可正常使用。 loose: 浏览器不阻止跨域的资源可以预览，例如视频音频图片等。 strict: 服务端会通过origin请求头或者其他方法严格限制跨域访问，无法预览。 verystrict: 就连从其他网站点击超链接下载也不行，非常严格的防盗链，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-15T19:00:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-15T19:00:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FList - 下载跨域限制级\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-15T19:00:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"下载跨域限制级列表","slug":"下载跨域限制级列表","link":"#下载跨域限制级列表","children":[]}],"git":{"isRoot":true,"createdTime":1723747741000,"updatedTime":1723748425000,"contributors":[{"name":"jjaw","email":"jjaw@jjaw.cn","commits":2}]},"excerpt":"\\n<p>Flist 将下载跨域限制级分为 4 个等级，分别是：</p>\\n<ul>\\n<li>allow: 允许跨域，所有功能均可正常使用。</li>\\n<li>loose: 浏览器不阻止跨域的资源可以预览，例如视频音频图片等。</li>\\n<li>strict: 服务端会通过origin请求头或者其他方法严格限制跨域访问，无法预览。</li>\\n<li>verystrict: 就连从其他网站点击超链接下载也不行，非常严格的防盗链，需要复制下载链接在新标签页粘贴才能下载。</li>\\n</ul>\\n<p>总结：如果需要预览PDF,MD,TXT等文件则需要 allow 等级。如果需要预览视频图片音频等则至少需要 loose 等级。需要点击下载按钮自动开始下载则至少需要 strict 等级。</p>","autoDesc":true,"github_edit":{"filePathRelative":"articles/11-Flist/7-深入/1-下载跨域限制级.md"},"navPage":[{"title":"介绍","link":"/2024/8/3/flist-introduce/"},{"title":"快速开始","link":"/2024/8/3/flist-fast-start/"},{"title":"使用趁手的工具编辑配置文件","link":"/2024/8/3/flist-edit-config/","items":[{"title":"直接在GitHub上修改","link":"/2024/8/3/flist-online-git-hub/"},{"title":"下载代码本地修改(不推荐)","link":"/2024/8/3/flist-loclhost/"},{"title":"在线IDE编辑器修改(推荐)","link":"/2024/8/3/flist-online-ide/","items":[{"title":"Gitpod","link":"/2024/8/3/flist-online-gitpod/"},{"title":"StackBlitz","link":"/2024/8/3/flist-online-stack-blitz/"}]}]},{"title":"了解配置文件的写法","link":"/2024/8/3/flist-config-wite/","items":[{"title":"基础","link":"/2024/8/3/flist-config-base/"},{"title":"挂载文件","link":"/2024/8/3/flist-config-mount/","items":[{"title":"GitHub Releases","link":"/2024/8/3/flist-config-mount-git-hub-releases/"},{"title":"GitHub Repos","link":"/2024/8/14/flist-config-mount-git-hub-Repos/"},{"title":"Gitee 发行版","link":"/2024/8/6/flist-config-mount-gitee-releases/"},{"title":"Hugging Face Datasets","link":"/2024/8/3/flist-config-mount-hugging-face-fatasets/"},{"title":"URL 下载地址","link":"/2024/8/3/flist-config-mount-down-url/"}]},{"title":"配置代理","link":"/2024/8/3/flist-config-porxy/","items":[{"title":"Cloudflare Pages","link":"/2024/8/3/flist-config-porxy-git-hub-releases/"},{"title":"Vercel","link":"/2024/8/3/flist-config-porxy-vercel/"},{"title":"Netlify","link":"/2024/8/5/flist-config-porxy-netlify/"}]}]},{"title":"部署到自己喜欢的平台","link":"/2024/8/3/flist-deploy/","items":[{"title":"Cloudflare Pages (推荐！功能完整)","link":"/2024/8/3/flist-deploy-cloudflare-pages/"},{"title":"Vercel (推荐！功能完整)","link":"/2024/8/3/flist-deploy-vercel/"},{"title":"Netlify (推荐！功能完整)","link":"/2024/8/5/flist-deploy-netlify/"},{"title":"GitHub Pages","link":"/2024/8/3/flist-deploy-git-hub-pages/"}]},{"title":"深入","link":"/2024/8/16/flist-thorough/","items":[{"title":"下载跨域限制级","link":"/2024/8/16/flist-thorough-cros/"}]}]}');export{p as comp,f as data};
