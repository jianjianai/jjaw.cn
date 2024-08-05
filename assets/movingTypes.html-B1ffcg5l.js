import{_ as e,r as o,o as p,c as l,b as t,e as s,d as i,w as c,a as n}from"./app-BYEsNBZB.js";const r={},k=n(`<h1 id="流动的类型" tabindex="-1"><a class="header-anchor" href="#流动的类型"><span>流动的类型</span></a></h1><p>TypeScript 类型系统非常强大，它支持其他任何单一语言无法实现的类型流动和类型片段。</p><p>这是因为 TypeScript 的设计目的之一是让你无缝与像 JavaScript 这类高动态的语言一起工作。在这里，我们介绍一些在 TypeScript 中使用移动类型的技巧。</p><p>关键的动机：当你改变了其中一个时，其他相关的会自动更新，并且当有事情变糟糕时，你会得到一个友好的提示，就好像一个被精心设计过的约束系统。</p><h2 id="复制类型和值" tabindex="-1"><a class="header-anchor" href="#复制类型和值"><span>复制类型和值</span></a></h2><p>如果你想移动一个类，你可能会想要做以下事情：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> Bar <span class="token operator">=</span> Foo<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> bar<span class="token operator">:</span> Bar<span class="token punctuation">;</span> <span class="token comment">// Error: 不能找到名称 &#39;Bar&#39;</span></span>
<span class="line"></span></code></pre></div><p>这会得到一个错误，因为 <code>const</code> 仅仅是复制了 <code>Foo</code> 到一个变量声明空间，因此你无法把 <code>Bar</code> 当作一个类型声明使用。正确的方式是使用 <code>import</code> 关键字，请注意，如果你在使用 <code>namespace</code> 或者 <code>modules</code>，使用 <code>import</code> 是你唯一能用的方式：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">namespace</span> importing <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> Bar <span class="token operator">=</span> importing<span class="token punctuation">.</span>Foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> bar<span class="token operator">:</span> Bar<span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line"></span></code></pre></div><p>这个 <code>import</code> 技巧，仅适合于类型和变量。</p><h2 id="捕获变量的类型" tabindex="-1"><a class="header-anchor" href="#捕获变量的类型"><span>捕获变量的类型</span></a></h2><p>你可以通过 <code>typeof</code> 操作符在类型注解中使用变量。这允许你告诉编译器，一个变量的类型与其他类型相同，如下所示：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> bar<span class="token operator">:</span> <span class="token keyword">typeof</span> foo<span class="token punctuation">;</span> <span class="token comment">// &#39;bar&#39; 类型与 &#39;foo&#39; 类型相同（在这里是： &#39;number&#39;）</span></span>
<span class="line"></span>
<span class="line">bar <span class="token operator">=</span> <span class="token number">456</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line">bar <span class="token operator">=</span> <span class="token string">&#39;789&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error: &#39;string&#39; 不能分配给 &#39;number&#39; 类型</span></span>
<span class="line"></span></code></pre></div><h2 id="捕获类成员的类型" tabindex="-1"><a class="header-anchor" href="#捕获类成员的类型"><span>捕获类成员的类型</span></a></h2><p>与捕获变量的类型相似，你仅仅是需要声明一个变量用来捕获到的类型：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span></span>
<span class="line">  foo<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 我们想要捕获的类型</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">let</span> _foo<span class="token operator">:</span> Foo<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 与之前做法相同</span></span>
<span class="line"><span class="token keyword">let</span> bar<span class="token operator">:</span> <span class="token keyword">typeof</span> _foo<span class="token punctuation">.</span>foo<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><h2 id="捕获字符串类型" tabindex="-1"><a class="header-anchor" href="#捕获字符串类型"><span>捕获字符串类型</span></a></h2><p>许多 JavaScript 库和框架都使用原始的 JavaScript 字符串，你可以使用 <code>const</code> 定义一个变量捕获它的类型：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 捕获字符串的类型与值</span></span>
<span class="line"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用一个捕获的类型</span></span>
<span class="line"><span class="token keyword">let</span> bar<span class="token operator">:</span> <span class="token keyword">typeof</span> foo<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// bar 仅能被赋值 &#39;Hello World&#39;</span></span>
<span class="line">bar <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line">bar <span class="token operator">=</span> <span class="token string">&#39;anything else&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error</span></span>
<span class="line"></span></code></pre></div>`,19),d=t("code",null,"bar",-1),m=t("code",null,"Hello World",-1),g=n(`<h2 id="捕获键的名称" tabindex="-1"><a class="header-anchor" href="#捕获键的名称"><span>捕获键的名称</span></a></h2><p><code>keyof</code> 操作符能让你捕获一个类型的键。例如，你可以使用它来捕获变量的键名称，在通过使用 <code>typeof</code> 来获取类型之后：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  red<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span></span>
<span class="line">  blue<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Colors</span> <span class="token operator">=</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> colors<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> color<span class="token operator">:</span> Colors<span class="token punctuation">;</span> <span class="token comment">// color 的类型是 &#39;red&#39; | &#39;blue&#39;</span></span>
<span class="line">color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line">color <span class="token operator">=</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ok</span></span>
<span class="line">color <span class="token operator">=</span> <span class="token string">&#39;anythingElse&#39;</span><span class="token punctuation">;</span> <span class="token comment">// Error</span></span>
<span class="line"></span></code></pre></div><p>这允许你很容易地拥有像字符串枚举+常量这样的类型，如上例所示。</p>`,4);function h(u,y){const a=o("RouteLink");return p(),l("div",null,[k,t("p",null,[s("在这个例子里，"),d,s(" 有字面量类型 "),m,s("，我们在"),i(a,{to:"/git/ts-book/docs/typings/literals.html"},{default:c(()=>[s("字面量类型")]),_:1}),s("章节已经深入讨论。")]),g])}const f=e(r,[["render",h],["__file","movingTypes.html.vue"]]),v=JSON.parse(`{"path":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型","lang":"zh-CN","frontmatter":{"description":"流动的类型 TypeScript 类型系统非常强大，它支持其他任何单一语言无法实现的类型流动和类型片段。 这是因为 TypeScript 的设计目的之一是让你无缝与像 JavaScript 这类高动态的语言一起工作。在这里，我们介绍一些在 TypeScript 中使用移动类型的技巧。 关键的动机：当你改变了其中一个时，其他相关的会自动更新，并且当有事情...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/typings/movingTypes.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"流动的类型"}],["meta",{"property":"og:description","content":"流动的类型 TypeScript 类型系统非常强大，它支持其他任何单一语言无法实现的类型流动和类型片段。 这是因为 TypeScript 的设计目的之一是让你无缝与像 JavaScript 这类高动态的语言一起工作。在这里，我们介绍一些在 TypeScript 中使用移动类型的技巧。 关键的动机：当你改变了其中一个时，其他相关的会自动更新，并且当有事情..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2019-04-22T11:12:58.000Z"}],["meta",{"property":"article:modified_time","content":"2019-04-22T11:12:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流动的类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2019-04-22T11:12:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"复制类型和值","slug":"复制类型和值","link":"#复制类型和值","children":[]},{"level":2,"title":"捕获变量的类型","slug":"捕获变量的类型","link":"#捕获变量的类型","children":[]},{"level":2,"title":"捕获类成员的类型","slug":"捕获类成员的类型","link":"#捕获类成员的类型","children":[]},{"level":2,"title":"捕获字符串类型","slug":"捕获字符串类型","link":"#捕获字符串类型","children":[]},{"level":2,"title":"捕获键的名称","slug":"捕获键的名称","link":"#捕获键的名称","children":[]}],"git":{"createdTime":1535017530000,"updatedTime":1555931578000,"contributors":[{"name":"jkchao","email":"jkchaom@gmail.com","commits":4},{"name":"masterZSH","email":"1044438932@qq.com","commits":1},{"name":"zhazheng","email":"512557403@qq.com","commits":1},{"name":"阿卡琳","email":"hufan.akarin@Gmail.com","commits":1}]},"excerpt":"\\n<p>TypeScript 类型系统非常强大，它支持其他任何单一语言无法实现的类型流动和类型片段。</p>\\n<p>这是因为 TypeScript 的设计目的之一是让你无缝与像 JavaScript 这类高动态的语言一起工作。在这里，我们介绍一些在 TypeScript 中使用移动类型的技巧。</p>\\n<p>关键的动机：当你改变了其中一个时，其他相关的会自动更新，并且当有事情变糟糕时，你会得到一个友好的提示，就好像一个被精心设计过的约束系统。</p>\\n<h2>复制类型和值</h2>\\n<p>如果你想移动一个类，你可能会想要做以下事情：</p>\\n<div class=\\"language-typescript\\" data-highlighter=\\"prismjs\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Foo</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">const</span> Bar <span class=\\"token operator\\">=</span> Foo<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">let</span> bar<span class=\\"token operator\\">:</span> Bar<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// Error: 不能找到名称 'Bar'</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}`);export{f as comp,v as data};