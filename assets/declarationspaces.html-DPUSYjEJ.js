import{_ as t,o as s,c as n,a as e}from"./app-C48C3RRu.js";const a={},o=e(`<h1 id="声明空间" tabindex="-1"><a class="header-anchor" href="#声明空间"><span>声明空间</span></a></h1><p>在 TypeScript 里存在两种声明空间：类型声明空间与变量声明空间。下文将分别讨论这两个概念。</p><h2 id="类型声明空间" tabindex="-1"><a class="header-anchor" href="#类型声明空间"><span>类型声明空间</span></a></h2><p>类型声明空间包含用来当做类型注解的内容，例如下面的类型声明：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Bas</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>你可以将 <code>Foo</code>, <code>Bar</code>, <code>Bas</code> 作为类型注解使用，示例如下：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">let</span> foo<span class="token operator">:</span> Foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> bar<span class="token operator">:</span> Bar<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> bas<span class="token operator">:</span> Bas<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>注意，尽管你定义了 <code>interface Bar</code>，却并不能够把它作为一个变量来使用，因为它没有定义在变量声明空间中。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> bar <span class="token operator">=</span> Bar<span class="token punctuation">;</span> <span class="token comment">// Error: &quot;cannot find name &#39;Bar&#39;&quot;</span></span>
<span class="line"></span></code></pre></div><p>出现错误提示： <code>cannot find name &#39;Bar&#39;</code> 的原因是名称 <code>Bar</code> 并未定义在变量声明空间。这将带领我们进入下一个主题 -- 变量声明空间。</p><h2 id="变量声明空间" tabindex="-1"><a class="header-anchor" href="#变量声明空间"><span>变量声明空间</span></a></h2><p>变量声明空间包含可用作变量的内容，在上文中 <code>Class Foo</code> 提供了一个类型 <code>Foo</code> 到类型声明空间，此外它同样提供了一个变量 <code>Foo</code> 到变量声明空间，如下所示：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> someVar <span class="token operator">=</span> Foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> someOtherVar <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>这很棒，尤其是当你想把一个类来当做变量传递时。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我们并不能把一些如 <code>interface</code> 定义的内容当作变量使用。</p></div><p>与此相似，一些用 <code>var</code> 声明的变量，也只能在变量声明空间使用，不能用作类型注解。</p><div class="language-javascript" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> foo<span class="token punctuation">;</span> <span class="token comment">// ERROR: &quot;cannot find name &#39;foo&#39;&quot;</span></span>
<span class="line"></span></code></pre></div><p>提示 <code>ERROR: &quot;cannot find name &#39;foo&#39;&quot;</code> 原因是，名称 foo 没有定义在类型声明空间里。</p>`,18),i=[o];function l(p,c){return s(),n("div",null,i)}const k=t(a,[["render",l],["__file","declarationspaces.html.vue"]]),d=JSON.parse('{"path":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间","lang":"zh-CN","frontmatter":{"description":"声明空间 在 TypeScript 里存在两种声明空间：类型声明空间与变量声明空间。下文将分别讨论这两个概念。 类型声明空间 类型声明空间包含用来当做类型注解的内容，例如下面的类型声明： 你可以将 Foo, Bar, Bas 作为类型注解使用，示例如下： 注意，尽管你定义了 interface Bar，却并不能够把它作为一个变量来使用，因为它没有定义在...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/project/declarationspaces.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"声明空间"}],["meta",{"property":"og:description","content":"声明空间 在 TypeScript 里存在两种声明空间：类型声明空间与变量声明空间。下文将分别讨论这两个概念。 类型声明空间 类型声明空间包含用来当做类型注解的内容，例如下面的类型声明： 你可以将 Foo, Bar, Bas 作为类型注解使用，示例如下： 注意，尽管你定义了 interface Bar，却并不能够把它作为一个变量来使用，因为它没有定义在..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2021-06-21T13:23:24.000Z"}],["meta",{"property":"article:modified_time","content":"2021-06-21T13:23:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"声明空间\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2021-06-21T13:23:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"类型声明空间","slug":"类型声明空间","link":"#类型声明空间","children":[]},{"level":2,"title":"变量声明空间","slug":"变量声明空间","link":"#变量声明空间","children":[]}],"git":{"externalRepo":{"url":"https://github.com/jianjianai/typescript-book-chinese","branch":"master"},"createdTime":1533711742000,"updatedTime":1624281804000,"contributors":[{"name":"jkchao","email":"jkchaom@gmail.com","commits":10},{"name":"Charlie An","email":"1481988258@qq.com","commits":1},{"name":"black","email":"33344293+losidk@users.noreply.github.com","commits":1},{"name":"xfields","email":"xiefei890721@gmail.com","commits":1},{"name":"阿卡琳","email":"hufan.akarin@Gmail.com","commits":1}]},"excerpt":"\\n<p>在 TypeScript 里存在两种声明空间：类型声明空间与变量声明空间。下文将分别讨论这两个概念。</p>\\n<h2>类型声明空间</h2>\\n<p>类型声明空间包含用来当做类型注解的内容，例如下面的类型声明：</p>\\n<div class=\\"language-typescript\\" data-highlighter=\\"prismjs\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"line\\"><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Foo</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Bar</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">Bas</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"github_edit":{"fileGitUrl":"https://github.com/jianjianai/typescript-book-chinese/edit/master/docs/project/declarationspaces.md"},"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}');export{k as comp,d as data};
