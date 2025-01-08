import{_ as t,o as s,c as e,a as n}from"./app-BfGR7eMa.js";const a={},i=n(`<h1 id="检查器" tabindex="-1"><a class="header-anchor" href="#检查器"><span>检查器</span></a></h1><p>如前所述，<em>检查器</em>使得 TypeScript 更独特，比<em>其它 JavaScript 转译器</em>更强大。检查器位于 <code>checker.ts</code> 中，当前有 23k 行以上的代码（编译器中最大的部分）</p><h3 id="程序对检查器的使用" tabindex="-1"><a class="header-anchor" href="#程序对检查器的使用"><span>程序对检查器的使用</span></a></h3><p>检查器是由程序初始化，下面是调用栈示意（绑定器一节也展示过）：</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">program.getTypeChecker -&gt;</span>
<span class="line">    ts.createTypeChecker（检查器中）-&gt;</span>
<span class="line">        initializeTypeChecker（检查器中） -&gt;</span>
<span class="line">            for each SourceFile \`ts.bindSourceFile\`（绑定器中）</span>
<span class="line">            // 接着</span>
<span class="line">            for each SourceFile \`ts.mergeSymbolTable\`（检查器中）</span>
<span class="line"></span></code></pre></div><h3 id="与发射器的联系" tabindex="-1"><a class="header-anchor" href="#与发射器的联系"><span>与发射器的联系</span></a></h3><p>真正的类型检查会在调用 <code>getDiagnostics</code> 时才发生。该函数被调用时（比如由 <code>Program.emit</code> 请求），检查器返回一个 <code>EmitResolver</code>（由程序调用检查器的 <code>getEmitResolver</code> 函数得到），<code>EmitResolver</code> 是 <code>createTypeChecker</code> 的一个本地函数的集合。介绍发射器时还会再次提到。</p><p>下面是该过程直到 <code>checkSourceFile</code> 的调用栈（<code>checkSourceFile</code> 是 <code>createTypeChecker</code> 的一个本地函数）：</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">program.emit -&gt;</span>
<span class="line">    emitWorker (program local) -&gt;</span>
<span class="line">        createTypeChecker.getEmitResolver -&gt;</span>
<span class="line">            // 第一次调用下面的几个 createTypeChecker 的本地函数</span>
<span class="line">            call getDiagnostics -&gt;</span>
<span class="line">                getDiagnosticsWorker -&gt;</span>
<span class="line">                    checkSourceFile</span>
<span class="line"></span>
<span class="line">            // 接着</span>
<span class="line">            return resolver</span>
<span class="line">            // 通过对本地函数 createResolver() 的调用，resolver 已在 createTypeChecker 中初始化。</span>
<span class="line"></span></code></pre></div><h2 id="全局命名空间合并" tabindex="-1"><a class="header-anchor" href="#全局命名空间合并"><span>全局命名空间合并</span></a></h2><p><code>initializeTypeChecker</code> 中存在以下代码：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// 初始化全局符号表（SymbolTable）。</span></span>
<span class="line"><span class="token function">forEach</span><span class="token punctuation">(</span>host<span class="token punctuation">.</span><span class="token function">getSourceFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> file <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isExternalModule</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">mergeSymbolTable</span><span class="token punctuation">(</span>globals<span class="token punctuation">,</span> file<span class="token punctuation">.</span>locals<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>基本上是将所有的 <code>global</code> 符号合并到 <code>let globals: SymbolTable = {}</code> 符号表中（位于 <code>createTypeChecker</code> 中）。 <code>mergeSymbolTable</code> 主要调用 <code>mergeSymbol</code> 函数。</p><h2 id="检查器错误报告" tabindex="-1"><a class="header-anchor" href="#检查器错误报告"><span>检查器错误报告</span></a></h2><p>检查器使用本地的 <code>error</code> 函数报告错误，如下所示：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>location<span class="token operator">:</span> Node<span class="token punctuation">,</span> message<span class="token operator">:</span> DiagnosticMessage<span class="token punctuation">,</span> arg0<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> arg1<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> arg2<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> diagnostic <span class="token operator">=</span> location</span>
<span class="line">    <span class="token operator">?</span> <span class="token function">createDiagnosticForNode</span><span class="token punctuation">(</span>location<span class="token punctuation">,</span> message<span class="token punctuation">,</span> arg0<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">:</span> <span class="token function">createCompilerDiagnostic</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> arg0<span class="token punctuation">,</span> arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  diagnostics<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>diagnostic<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,16),o=[i];function l(c,p){return s(),e("div",null,o)}const k=t(a,[["render",l],["__file","checker.html.vue"]]),d=JSON.parse('{"path":"/git/ts-book/docs/compiler/checker.html","title":"检查器","lang":"zh-CN","frontmatter":{"description":"检查器 如前所述，检查器使得 TypeScript 更独特，比其它 JavaScript 转译器更强大。检查器位于 checker.ts 中，当前有 23k 行以上的代码（编译器中最大的部分） 程序对检查器的使用 检查器是由程序初始化，下面是调用栈示意（绑定器一节也展示过）： 与发射器的联系 真正的类型检查会在调用 getDiagnostics 时才发...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/compiler/checker.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"检查器"}],["meta",{"property":"og:description","content":"检查器 如前所述，检查器使得 TypeScript 更独特，比其它 JavaScript 转译器更强大。检查器位于 checker.ts 中，当前有 23k 行以上的代码（编译器中最大的部分） 程序对检查器的使用 检查器是由程序初始化，下面是调用栈示意（绑定器一节也展示过）： 与发射器的联系 真正的类型检查会在调用 getDiagnostics 时才发..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2018-09-18T12:59:50.000Z"}],["meta",{"property":"article:modified_time","content":"2018-09-18T12:59:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"检查器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2018-09-18T12:59:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"程序对检查器的使用","slug":"程序对检查器的使用","link":"#程序对检查器的使用","children":[]},{"level":3,"title":"与发射器的联系","slug":"与发射器的联系","link":"#与发射器的联系","children":[]},{"level":2,"title":"全局命名空间合并","slug":"全局命名空间合并","link":"#全局命名空间合并","children":[]},{"level":2,"title":"检查器错误报告","slug":"检查器错误报告","link":"#检查器错误报告","children":[]}],"git":{"externalRepo":{"url":"https://github.com/jianjianai/typescript-book-chinese","branch":"master"},"createdTime":1537098059000,"updatedTime":1537275590000,"contributors":[{"name":"hopalay","email":"hopalay@qq.com","commits":4},{"name":"jkchao","email":"jkchaom@gmail.com","commits":1}]},"excerpt":"\\n<p>如前所述，<em>检查器</em>使得 TypeScript 更独特，比<em>其它 JavaScript 转译器</em>更强大。检查器位于 <code>checker.ts</code> 中，当前有 23k 行以上的代码（编译器中最大的部分）</p>\\n<h3>程序对检查器的使用</h3>\\n<p>检查器是由程序初始化，下面是调用栈示意（绑定器一节也展示过）：</p>\\n<div class=\\"language-text\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code><span class=\\"line\\">program.getTypeChecker -&gt;</span>\\n<span class=\\"line\\">    ts.createTypeChecker（检查器中）-&gt;</span>\\n<span class=\\"line\\">        initializeTypeChecker（检查器中） -&gt;</span>\\n<span class=\\"line\\">            for each SourceFile `ts.bindSourceFile`（绑定器中）</span>\\n<span class=\\"line\\">            // 接着</span>\\n<span class=\\"line\\">            for each SourceFile `ts.mergeSymbolTable`（检查器中）</span>\\n<span class=\\"line\\"></span></code></pre></div>","autoDesc":true,"github_edit":{"fileGitUrl":"https://github.com/jianjianai/typescript-book-chinese/edit/master/docs/compiler/checker.md"},"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}');export{k as comp,d as data};