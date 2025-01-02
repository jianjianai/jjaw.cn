import{_ as s,o as n,c as a,a as t}from"./app-uQXfyAzg.js";const p={},o=t(`<h1 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型"><span>字面量类型</span></a></h1><p>字面量是 JavaScript 本身提供的一个准确变量。</p><h2 id="字符串字面量" tabindex="-1"><a class="header-anchor" href="#字符串字面量"><span>字符串字面量</span></a></h2><p>你可以使用一个字符串字面量作为一个类型：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>在这里，我们创建了一个被称为 <code>foo</code> 变量，它仅接收一个字面量值为 <code>Hello</code> 的变量：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span></span>
<span class="line">foo <span class="token operator">=</span> <span class="token string">&#39;Bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;bar&#39; 不能赋值给类型 &#39;Hello&#39;</span></span>
<span class="line"></span></code></pre></div><p>它们本身并不是很实用，但是可以在一个联合类型中组合创建一个强大的（实用的）抽象：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">CardinalDirection</span> <span class="token operator">=</span> <span class="token string">&#39;North&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;East&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;South&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;West&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> direction<span class="token operator">:</span> CardinalDirection<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;North&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line"><span class="token function">move</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Nurth&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span></span>
<span class="line"></span></code></pre></div><h2 id="其他字面量类型" tabindex="-1"><a class="header-anchor" href="#其他字面量类型"><span>其他字面量类型</span></a></h2><p>TypeScript 同样也提供 <code>boolean</code> 和 <code>number</code> 的字面量类型：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">OneToFive</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Bools</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h2 id="推断" tabindex="-1"><a class="header-anchor" href="#推断"><span>推断</span></a></h2><p>通常，你会得到一个类似于 <code>Type string is not assignable to type &#39;foo&#39;</code> 的错误，如下：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">iTakeFoo</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  someProp<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">iTakeFoo</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>someProp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: Argument of type string is not assignable to parameter of type &#39;foo&#39;</span></span>
<span class="line"></span></code></pre></div><p>这是由于 <code>test</code> 被推断为 <code>{ someProp: string }</code>，我们可以采用一个简单的类型断言来告诉 TypeScript 你想推断的字面量：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">iTakeFoo</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  someProp<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span> <span class="token keyword">as</span> <span class="token string">&#39;foo&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">iTakeFoo</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>someProp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line"></span></code></pre></div><p>或者使用类型注解的方式，来帮助 TypeScript 推断正确的类型：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">iTakeFoo</span><span class="token punctuation">(</span>foo<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Test</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  someProp<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> test<span class="token operator">:</span> Test <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 推断 \`someProp\` 永远是 &#39;foo&#39;</span></span>
<span class="line">  someProp<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">iTakeFoo</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>someProp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line"></span></code></pre></div><h2 id="使用用例" tabindex="-1"><a class="header-anchor" href="#使用用例"><span>使用用例</span></a></h2><p>TypeScript 枚举类型是基于数字的，你可以使用带字符串字面量的联合类型，来模拟一个基于字符串的枚举类型，就好像上文中提出的 <code>CardinalDirection</code>。你甚至可以使用下面的函数来生成 <code>key: value</code> 的结构：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 用于创建字符串列表映射至 \`K: V\` 的函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">strEnum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">K</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> o<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>然后，你就可以使用 <code>keyof</code>、<code>typeof</code> 来生成字符串的联合类型。下面是一个完全的例子：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 用于创建字符串列表映射至 \`K: V\` 的函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">strEnum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">K</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> o<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建 K: V</span></span>
<span class="line"><span class="token keyword">const</span> Direction <span class="token operator">=</span> <span class="token function">strEnum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;North&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;South&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;East&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;West&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建一个类型</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> Direction<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 简单的使用</span></span>
<span class="line"><span class="token keyword">let</span> sample<span class="token operator">:</span> Direction<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">sample <span class="token operator">=</span> Direction<span class="token punctuation">.</span>North<span class="token punctuation">;</span> <span class="token comment">// Okay</span></span>
<span class="line">sample <span class="token operator">=</span> <span class="token string">&#39;North&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Okay</span></span>
<span class="line">sample <span class="token operator">=</span> <span class="token string">&#39;AnythingElse&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ERROR!</span></span>
<span class="line"></span></code></pre></div><h2 id="辨析联合类型" tabindex="-1"><a class="header-anchor" href="#辨析联合类型"><span>辨析联合类型</span></a></h2><p>我们将会在此书的稍后章节讲解它。</p>`,26),e=[o];function l(c,i){return n(),a("div",null,e)}const r=s(p,[["render",l],["__file","literals.html.vue"]]),u=JSON.parse(`{"path":"/git/ts-book/docs/typings/literals.html","title":"字面量类型","lang":"zh-CN","frontmatter":{"description":"字面量类型 字面量是 JavaScript 本身提供的一个准确变量。 字符串字面量 你可以使用一个字符串字面量作为一个类型： 在这里，我们创建了一个被称为 foo 变量，它仅接收一个字面量值为 Hello 的变量： 它们本身并不是很实用，但是可以在一个联合类型中组合创建一个强大的（实用的）抽象： 其他字面量类型 TypeScript 同样也提供 boo...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/typings/literals.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"字面量类型"}],["meta",{"property":"og:description","content":"字面量类型 字面量是 JavaScript 本身提供的一个准确变量。 字符串字面量 你可以使用一个字符串字面量作为一个类型： 在这里，我们创建了一个被称为 foo 变量，它仅接收一个字面量值为 Hello 的变量： 它们本身并不是很实用，但是可以在一个联合类型中组合创建一个强大的（实用的）抽象： 其他字面量类型 TypeScript 同样也提供 boo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2020-07-01T09:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2020-07-01T09:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字面量类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2020-07-01T09:35:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"字符串字面量","slug":"字符串字面量","link":"#字符串字面量","children":[]},{"level":2,"title":"其他字面量类型","slug":"其他字面量类型","link":"#其他字面量类型","children":[]},{"level":2,"title":"推断","slug":"推断","link":"#推断","children":[]},{"level":2,"title":"使用用例","slug":"使用用例","link":"#使用用例","children":[]},{"level":2,"title":"辨析联合类型","slug":"辨析联合类型","link":"#辨析联合类型","children":[]}],"git":{"externalRepo":{"url":"https://github.com/jianjianai/typescript-book-chinese","branch":"master"},"createdTime":1534470230000,"updatedTime":1593596100000,"contributors":[{"name":"jkchao","email":"jkchaom@gmail.com","commits":6},{"name":"Charlie An","email":"1481988258@qq.com","commits":1},{"name":"Moorez","email":"szk726664809@gmail.com","commits":1},{"name":"阿卡琳","email":"hufan.akarin@Gmail.com","commits":1}]},"excerpt":"\\n<p>字面量是 JavaScript 本身提供的一个准确变量。</p>\\n<h2>字符串字面量</h2>\\n<p>你可以使用一个字符串字面量作为一个类型：</p>\\n<div class=\\"language-typescript\\" data-highlighter=\\"prismjs\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">let</span> foo<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'Hello'</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"github_edit":{"fileGitUrl":"https://github.com/jianjianai/typescript-book-chinese/edit/master/docs/typings/literals.md"},"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}`);export{r as comp,u as data};