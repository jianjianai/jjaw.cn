import{_ as t,r as p,o,c as e,b as s,e as n,d as l,a as c}from"./app-D0VI1FnG.js";const i={},r=s("h1",{id:"freshness",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#freshness"},[s("span",null,"Freshness")])],-1),k={href:"https://github.com/Microsoft/TypeScript/pull/3823",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>结构类型非常方便。考虑如下例子代码，它可以让你非常便利的从 JavaScript 迁移至 TypeScript，并且会提供类型安全：</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">logName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">something</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>something<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;matt&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token string">&#39;being awesome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> animal <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;cow&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">diet</span><span class="token operator">:</span> <span class="token string">&#39;vegan, but has milk of own specie&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> randow <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">note</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">I don&#39;t have a name property</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">logName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line"><span class="token function">logName</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line"><span class="token function">logName</span><span class="token punctuation">(</span>randow<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: 没有 \`name\` 属性</span></span>
<span class="line"></span></code></pre></div><p>但是，结构类型有一个缺点，它能误导你认为某些东西接收的数据比它实际的多。如下例，TypeScript 发出错误警告：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">logName</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>something<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">logName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;matt&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line"><span class="token function">logName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;matt&#39;</span><span class="token punctuation">,</span> job<span class="token operator">:</span> <span class="token string">&#39;being awesome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: 对象字面量只能指定已知属性，\`job\` 属性在这里并不存在。</span></span>
<span class="line"></span></code></pre></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请注意，这种错误提示，只会发生在对象字面量上。</p></div><p>如果没有这种错误提示，我们可能会去寻找函数的调用 <code>logName({ name: &#39;matt&#39;, job: &#39;being awesome&#39; })</code>，继而会认为 <code>logName</code> 可能会使用 <code>job</code> 属性做一些事情，然而实际上 <code>logName</code> 并没有使用它。</p><p>另外一个使用比较多的场景是与具有可选成员的接口一起使用，如果没有这样的对象字面量检查，当你输入错误单词的时候，并不会发出错误警告：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">logIfHasName</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>something<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>something<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;matt&#39;</span><span class="token punctuation">,</span> job<span class="token operator">:</span> <span class="token string">&#39;being awesome&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> animal <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;cow&#39;</span><span class="token punctuation">,</span> diet<span class="token operator">:</span> <span class="token string">&#39;vegan, but has milk of own species&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">logIfHasName</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// okay</span></span>
<span class="line"><span class="token function">logIfHasName</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// okay</span></span>
<span class="line"></span>
<span class="line"><span class="token function">logIfHasName</span><span class="token punctuation">(</span><span class="token punctuation">{</span> neme<span class="token operator">:</span> <span class="token string">&#39;I just misspelled name to neme&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: 对象字面量只能指定已知属性，\`neme\` 属性不存在。</span></span>
<span class="line"></span></code></pre></div><p>之所以只对对象字面量进行类型检查，因为在这种情况下，那些实际上并没有被使用到的属性有可能会拼写错误或者会被误用。</p><h2 id="允许额外的属性" tabindex="-1"><a class="header-anchor" href="#允许额外的属性"><span>允许额外的属性</span></a></h2><p>一个类型能够包含索引签名，以明确表明可以使用额外的属性：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> baz<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// ok, &#39;baz&#39; 属性匹配于索引签名</span></span>
<span class="line"></span></code></pre></div><h2 id="用例-react-state" tabindex="-1"><a class="header-anchor" href="#用例-react-state"><span>用例：React State</span></a></h2><p>Facebook ReactJS 为对象的 Freshness 提供了一个很好的用例，通常在组件中，你只使用少量属性，而不是传入所有，来调用 <code>setState</code>：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 假设</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span></span>
<span class="line">  foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  bar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 你可能想做：</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: 没有属性 &#39;bar&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 因为 state 包含 &#39;foo&#39; 与 &#39;bar&#39;，TypeScript 会强制你这么做：</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> bar<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>bar <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>如果你想使用 Freshness，你可能需要将所有成员标记为可选，这仍然会捕捉到拼写错误：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 假设</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span></span>
<span class="line">  foo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  bar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 你可能想做</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Yay works fine!</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 由于 Freshness，你也可以防止错别字</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foos<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Error: 对象只能指定已知属性</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 仍然会有类型检查</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: 无法将 number 类型赋值给 string 类型</span></span>
<span class="line"></span></code></pre></div>`,17);function m(g,d){const a=p("ExternalLinkIcon");return o(),e("div",null,[r,s("p",null,[n("为了能让检查对象字面量类型更容易，TypeScript 提供 「"),s("a",k,[n("Freshness"),l(a)]),n("」 的概念（它也被称为更严格的对象字面量检查）用来确保对象字面量在结构上类型兼容。")]),u])}const y=t(i,[["render",m],["__file","freshness.html.vue"]]),b=JSON.parse(`{"path":"/git/ts-book/docs/typings/freshness.html","title":"Freshness","lang":"zh-CN","frontmatter":{"description":"Freshness 为了能让检查对象字面量类型更容易，TypeScript 提供 「Freshness」 的概念（它也被称为更严格的对象字面量检查）用来确保对象字面量在结构上类型兼容。 结构类型非常方便。考虑如下例子代码，它可以让你非常便利的从 JavaScript 迁移至 TypeScript，并且会提供类型安全： 但是，结构类型有一个缺点，它能误导...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/typings/freshness.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"Freshness"}],["meta",{"property":"og:description","content":"Freshness 为了能让检查对象字面量类型更容易，TypeScript 提供 「Freshness」 的概念（它也被称为更严格的对象字面量检查）用来确保对象字面量在结构上类型兼容。 结构类型非常方便。考虑如下例子代码，它可以让你非常便利的从 JavaScript 迁移至 TypeScript，并且会提供类型安全： 但是，结构类型有一个缺点，它能误导..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-06-30T12:28:46.000Z"}],["meta",{"property":"article:modified_time","content":"2022-06-30T12:28:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Freshness\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-06-30T12:28:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"允许额外的属性","slug":"允许额外的属性","link":"#允许额外的属性","children":[]},{"level":2,"title":"用例：React State","slug":"用例-react-state","link":"#用例-react-state","children":[]}],"git":{"externalRepo":{"url":"https://github.com/jianjianai/typescript-book-chinese","branch":"master"},"createdTime":1534056357000,"updatedTime":1656592126000,"contributors":[{"name":"jkchao","email":"jkchaom@gmail.com","commits":8},{"name":"helloforrestworld","email":"dongweijia238@gmail.com","commits":2},{"name":"G","email":"249254832@qq.com","commits":1},{"name":"Steve Young","email":"2747745470@qq.com","commits":1},{"name":"畅畅","email":"78172670@qq.com","commits":1}]},"excerpt":"\\n<p>为了能让检查对象字面量类型更容易，TypeScript 提供 「<a href=\\"https://github.com/Microsoft/TypeScript/pull/3823\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Freshness</a>」 的概念（它也被称为更严格的对象字面量检查）用来确保对象字面量在结构上类型兼容。</p>\\n<p>结构类型非常方便。考虑如下例子代码，它可以让你非常便利的从 JavaScript 迁移至 TypeScript，并且会提供类型安全：</p>\\n<div class=\\"language-javascript\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">logName</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token literal-property property\\">something</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> string <span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>something<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> person <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'matt'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">job</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'being awesome'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> animal <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'cow'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">diet</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'vegan, but has milk of own specie'</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> randow <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token literal-property property\\">note</span><span class=\\"token operator\\">:</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token string\\">I don't have a name property</span><span class=\\"token template-punctuation string\\">\`</span></span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token function\\">logName</span><span class=\\"token punctuation\\">(</span>person<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// ok</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">logName</span><span class=\\"token punctuation\\">(</span>animal<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// ok</span></span>\\n<span class=\\"line\\"><span class=\\"token function\\">logName</span><span class=\\"token punctuation\\">(</span>randow<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Error: 没有 \`name\` 属性</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"github_edit":{"fileGitUrl":"https://github.com/jianjianai/typescript-book-chinese/edit/master/docs/typings/freshness.md"},"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}`);export{y as comp,b as data};