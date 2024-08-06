import{_ as a,r as t,o as e,c as p,b as n,d as o,w as i,a as l,e as c}from"./app-3iaonA-K.js";const u={},r=l(`<h1 id="配置文源基础" tabindex="-1"><a class="header-anchor" href="#配置文源基础"><span>配置文源基础</span></a></h1><p>所有的配置文件都在 <code>vuepress.config.ts</code> 文件中，你可以根据自己的需求进行修改。</p><p>所有有关网盘的配置都在 <code>FileList</code> 函数的参数中。<code>FileList</code> 接收一个文件数组，可以配置挂载多个文件源。</p><p><em><strong>注意，每个对象都要用<code>{}</code>包裹，每个对象之间用<code>,</code>隔开。</strong></em> 例：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span><span class="token punctuation">.</span></span>
<span class="line">    theme<span class="token operator">:</span> <span class="token function">FileList</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>`,6);function k(d,f){const s=t("RouteLink");return e(),p("div",null,[r,n("ul",null,[n("li",null,[o(s,{to:"/articles/11-Flist/5-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%86%99%E6%B3%95/2-%E6%8C%82%E8%BD%BD.html"},{default:i(()=>[c("-> 挂载文件")]),_:1})])])])}const m=a(u,[["render",k],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/2024/8/3/flist-config-base/","title":"FList - 配置文源基础","lang":"zh-CN","frontmatter":{"permalinkPattern":"2024/8/3/flist-config-base/","title":"FList - 配置文源基础","star":false,"comment":true,"description":"配置文源基础 所有的配置文件都在 vuepress.config.ts 文件中，你可以根据自己的需求进行修改。 所有有关网盘的配置都在 FileList 函数的参数中。FileList 接收一个文件数组，可以配置挂载多个文件源。 注意，每个对象都要用{}包裹，每个对象之间用,隔开。 例： 下一步","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/2024/8/3/flist-config-base/"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"FList - 配置文源基础"}],["meta",{"property":"og:description","content":"配置文源基础 所有的配置文件都在 vuepress.config.ts 文件中，你可以根据自己的需求进行修改。 所有有关网盘的配置都在 FileList 函数的参数中。FileList 接收一个文件数组，可以配置挂载多个文件源。 注意，每个对象都要用{}包裹，每个对象之间用,隔开。 例： 下一步"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-03T12:55:34.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-03T12:55:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FList - 配置文源基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-03T12:55:34.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"下一步","slug":"下一步","link":"#下一步","children":[]}],"git":{"isRoot":true,"createdTime":1722689734000,"updatedTime":1722689734000,"contributors":[{"name":"jjaw","email":"jjaw@jjaw.cn","commits":1}]},"excerpt":"\\n<p>所有的配置文件都在 <code>vuepress.config.ts</code> 文件中，你可以根据自己的需求进行修改。</p>\\n<p>所有有关网盘的配置都在 <code>FileList</code> 函数的参数中。<code>FileList</code> 接收一个文件数组，可以配置挂载多个文件源。</p>\\n<p><em><strong>注意，每个对象都要用<code>{}</code>包裹，每个对象之间用<code>,</code>隔开。</strong></em> 例：</p>\\n<div class=\\"language-typescript\\" data-highlighter=\\"prismjs\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token function\\">defineUserConfig</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">.</span></span>\\n<span class=\\"line\\">    theme<span class=\\"token operator\\">:</span> <span class=\\"token function\\">FileList</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">    <span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"github_edit":{"filePathRelative":"articles/11-Flist/5-配置文件写法/1-基础.md"},"navPage":[{"title":"介绍","link":"/2024/8/3/flist-introduce/"},{"title":"快速开始","link":"/2024/8/3/flist-fast-start/"},{"title":"使用趁手的工具编辑配置文件","link":"/2024/8/3/flist-edit-config/","items":[{"title":"直接在GitHub上修改","link":"/2024/8/3/flist-online-git-hub/"},{"title":"下载代码本地修改(不推荐)","link":"/2024/8/3/flist-loclhost/"},{"title":"在线IDE编辑器修改(推荐)","link":"/2024/8/3/flist-online-ide/","items":[{"title":"Gitpod","link":"/2024/8/3/flist-online-gitpod/"},{"title":"StackBlitz","link":"/2024/8/3/flist-online-stack-blitz/"}]}]},{"title":"了解配置文件的写法","link":"/2024/8/3/flist-config-wite/","items":[{"title":"基础","link":"/2024/8/3/flist-config-base/"},{"title":"挂载文件","link":"/2024/8/3/flist-config-mount/","items":[{"title":"GitHub Releases","link":"/2024/8/3/flist-config-mount-git-hub-releases/"},{"title":"Hugging Face Datasets","link":"/2024/8/3/flist-config-mount-hugging-face-fatasets/"},{"title":"URL 下载地址","link":"/2024/8/3/flist-config-mount-down-url/"}]},{"title":"配置代理","link":"/2024/8/3/flist-config-porxy/","items":[{"title":"Cloudflare Pages","link":"/2024/8/3/flist-config-porxy-git-hub-releases/"},{"title":"Vercel","link":"/2024/8/3/flist-config-porxy-vercel/"},{"title":"Netlify","link":"/2024/8/5/flist-config-porxy-netlify/"}]}]},{"title":"部署到自己喜欢的平台","link":"/2024/8/3/flist-deploy/","items":[{"title":"Cloudflare Pages (推荐！功能完整)","link":"/2024/8/3/flist-deploy-cloudflare-pages/"},{"title":"Vercel (推荐！功能完整)","link":"/2024/8/3/flist-deploy-vercel/"},{"title":"Netlify (推荐！功能完整)","link":"/2024/8/5/flist-deploy-netlify/"},{"title":"GitHub Pages","link":"/2024/8/3/flist-deploy-git-hub-pages/"}]}]}');export{m as comp,h as data};