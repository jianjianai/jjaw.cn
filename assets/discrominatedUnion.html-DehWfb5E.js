import{_ as c,r as a,o as l,c as i,b as n,e as s,d as t,w as k,a as p}from"./app-1nNPxjeW.js";const r={},u=n("h1",{id:"辨析联合类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#辨析联合类型"},[n("span",null,"辨析联合类型")])],-1),d=p(`<p>作为一个例子，考虑 <code>Square</code> 和 <code>Rectangle</code> 的联合类型 <code>Shape</code>。<code>Square</code> 和 <code>Rectangle</code>有共同成员 <code>kind</code>，因此 <code>kind</code> 存在于 <code>Shape</code> 中。</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span></span>
<span class="line">  kind<span class="token operator">:</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span></span>
<span class="line">  kind<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Shape</span> <span class="token operator">=</span> Square <span class="token operator">|</span> Rectangle<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>如果你使用类型保护风格的检查（<code>==</code>、<code>===</code>、<code>!=</code>、<code>!==</code>）或者使用具有判断性的属性（在这里是 <code>kind</code>），TypeScript 将会认为你会使用的对象类型一定是拥有特殊字面量的，并且它会为你自动把类型范围变小：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 现在 TypeScript 知道 s 的类型是 Square</span></span>
<span class="line">    <span class="token comment">// 所以你现在能安全使用它</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 不是一个 square ？因此 TypeScript 将会推算出 s 一定是 Rectangle</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="详细的检查" tabindex="-1"><a class="header-anchor" href="#详细的检查"><span>详细的检查</span></a></h2><p>通常，联合类型的成员有一些自己的行为（代码）：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span></span>
<span class="line">  kind<span class="token operator">:</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span></span>
<span class="line">  kind<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 有人仅仅是添加了 \`Circle\` 类型</span></span>
<span class="line"><span class="token comment">// 我们可能希望 TypeScript 能在任何被需要的地方抛出错误</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span></span>
<span class="line">  kind<span class="token operator">:</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">;</span></span>
<span class="line">  radius<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Shape</span> <span class="token operator">=</span> Square <span class="token operator">|</span> Rectangle <span class="token operator">|</span> Circle<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre></div><p>一个可能会让你的代码变差的例子：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 如果你能让 TypeScript 给你一个错误，这是不是很棒？</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>你可以通过一个简单的向下思想，来确保块中的类型被推断为与 <code>never</code> 类型兼容的类型。例如，你可以添加一个更详细的检查来捕获错误：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Error: &#39;Circle&#39; 不能被赋值给 &#39;never&#39;</span></span>
<span class="line">    <span class="token keyword">const</span> _exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> s<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p>它将强制你添加一种新的条件：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind <span class="token operator">===</span> <span class="token string">&#39;circle&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>radius <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ok</span></span>
<span class="line">    <span class="token keyword">const</span> _exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> s<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你可以通过 <code>switch</code> 来实现以上例子。</p></div><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;square&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;rectangle&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;circle&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>radius <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">const</span> _exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> s<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="strictnullchecks" tabindex="-1"><a class="header-anchor" href="#strictnullchecks"><span>strictNullChecks</span></a></h2><p>如果你使用 <code>strictNullChecks</code> 选项来做详细的检查，你应该返回 <code>_exhaustiveCheck</code> 变量（类型是 <code>never</code>），否则 TypeScript 可能会推断返回值为 <code>undefined</code>：</p><div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>s<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>kind<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;square&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> s<span class="token punctuation">.</span>size <span class="token operator">*</span> s<span class="token punctuation">.</span>size<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;rectangle&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> s<span class="token punctuation">.</span>width <span class="token operator">*</span> s<span class="token punctuation">.</span>height<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;circle&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> s<span class="token punctuation">.</span>radius <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">const</span> _exhaustiveCheck<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> s<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span> _exhaustiveCheck<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><h2 id="redux" tabindex="-1"><a class="header-anchor" href="#redux"><span>Redux</span></a></h2><p>Redux 库正是使用的上述例子。</p>`,21),h={href:"https://github.com/reduxjs/redux#the-gist",target:"_blank",rel:"noopener noreferrer"},g=p(`<div class="language-typescript" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Action</span> <span class="token operator">=</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">|</span> <span class="token punctuation">{</span></span>
<span class="line">      type<span class="token operator">:</span> <span class="token string">&#39;DECREMENT&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line"> * This is a reducer, a pure function with (state, action) =&gt; state signature.</span>
<span class="line"> * It describes how an action transforms the state into the next state.</span>
<span class="line"> *</span>
<span class="line"> * The shape of the state is up to you: it can be a primitive, an array, an object,</span>
<span class="line"> * or even an Immutable.js data structure. The only important part is that you should</span>
<span class="line"> * not mutate the state object, but return a new object if the state changes.</span>
<span class="line"> *</span>
<span class="line"> * In this example, we use a \`switch\` statement and strings, but you can use a helper that</span>
<span class="line"> * follows a different convention (such as function maps) if it makes sense for your</span>
<span class="line"> * project.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">counter</span><span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action<span class="token operator">:</span> Action<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;INCREMENT&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">&#39;DECREMENT&#39;</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create a Redux store holding the state of your app.</span></span>
<span class="line"><span class="token comment">// Its API is { subscribe, dispatch, getState }.</span></span>
<span class="line"><span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>counter<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// You can use subscribe() to update the UI in response to state changes.</span></span>
<span class="line"><span class="token comment">// Normally you&#39;d use a view binding library (e.g. React Redux) rather than subscribe() directly.</span></span>
<span class="line"><span class="token comment">// However it can also be handy to persist the current state in the localStorage.</span></span>
<span class="line"></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// The only way to mutate the internal state is to dispatch an action.</span></span>
<span class="line"><span class="token comment">// The actions can be serialized, logged or stored and later replayed.</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 1</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;INCREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 2</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;DECREMENT&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 1</span></span>
<span class="line"></span></code></pre></div><p>与 TypeScript 一起使用可以有效的防止拼写错误，并且能提高重构和书写文档化代码的能力。</p>`,2);function m(y,b){const e=a("RouteLink"),o=a("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[s("当类中含有"),t(e,{to:"/git/ts-book/docs/typings/literals.html"},{default:k(()=>[s("字面量成员")]),_:1}),s("时，我们可以用该类的属性来辨析联合类型。")]),d,n("p",null,[s("以下是添加了 TypeScript 类型注解的"),n("a",h,[s("redux 要点"),t(o)]),s("。")]),g])}const f=c(r,[["render",m],["__file","discrominatedUnion.html.vue"]]),S=JSON.parse('{"path":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型","lang":"zh-CN","frontmatter":{"description":"辨析联合类型 当类中含有时，我们可以用该类的属性来辨析联合类型。 作为一个例子，考虑 Square 和 Rectangle 的联合类型 Shape。Square 和 Rectangle有共同成员 kind，因此 kind 存在于 Shape 中。 如果你使用类型保护风格的检查（==、===、!=、!==）或者使用具有判断性的属性（在这里是 kind），...","head":[["meta",{"property":"og:url","content":"https://jjaw.cn/git/ts-book/docs/typings/discrominatedUnion.html"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"辨析联合类型"}],["meta",{"property":"og:description","content":"辨析联合类型 当类中含有时，我们可以用该类的属性来辨析联合类型。 作为一个例子，考虑 Square 和 Rectangle 的联合类型 Shape。Square 和 Rectangle有共同成员 kind，因此 kind 存在于 Shape 中。 如果你使用类型保护风格的检查（==、===、!=、!==）或者使用具有判断性的属性（在这里是 kind），..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2020-07-01T09:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2020-07-01T09:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"辨析联合类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2020-07-01T09:35:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"详细的检查","slug":"详细的检查","link":"#详细的检查","children":[]},{"level":2,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":2,"title":"strictNullChecks","slug":"strictnullchecks","link":"#strictnullchecks","children":[]},{"level":2,"title":"Redux","slug":"redux","link":"#redux","children":[]}],"git":{"createdTime":1534847172000,"updatedTime":1593596100000,"contributors":[{"name":"jkchao","email":"jkchaom@gmail.com","commits":8},{"name":"Charlie An","email":"1481988258@qq.com","commits":1},{"name":"lxvc","email":"403381161@qq.com","commits":1},{"name":"阿卡琳","email":"hufan.akarin@Gmail.com","commits":1}]},"excerpt":"\\n<p>当类中含有<a href=\\"/git/ts-book/docs/typings/literals.html\\" target=\\"_blank\\">字面量成员</a>时，我们可以用该类的属性来辨析联合类型。</p>\\n<p>作为一个例子，考虑 <code>Square</code> 和 <code>Rectangle</code> 的联合类型 <code>Shape</code>。<code>Square</code> 和 <code>Rectangle</code>有共同成员 <code>kind</code>，因此 <code>kind</code> 存在于 <code>Shape</code> 中。</p>","autoDesc":true,"navPage":[{"title":"写在前面","items":[{"link":"/git/ts-book/docs/","title":"深入理解 TypeScript"}]},{"title":"TypeScript 项目","items":[{"link":"/git/ts-book/docs/project/compilationContext.html","title":"编译上下文"},{"link":"/git/ts-book/docs/project/declarationspaces.html","title":"声明空间"},{"link":"/git/ts-book/docs/project/modules.html","title":"模块"},{"link":"/git/ts-book/docs/project/namespaces.html","title":"命名空间"},{"link":"/git/ts-book/docs/project/dynamicImportExpressions.html","title":"动态导入表达式"}]},{"title":"TypeScript 类型系统","items":[{"link":"/git/ts-book/docs/typings/overview.html","title":"概览"},{"link":"/git/ts-book/docs/typings/migrating.html","title":"从 JavaScript 迁移"},{"link":"/git/ts-book/docs/typings/types.html","title":"@types"},{"link":"/git/ts-book/docs/typings/ambient.html","title":"环境声明"},{"link":"/git/ts-book/docs/typings/interfaces.html","title":"接口"},{"link":"/git/ts-book/docs/typings/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/typings/lib.html","title":"lib.d.ts"},{"link":"/git/ts-book/docs/typings/functions.html","title":"函数"},{"link":"/git/ts-book/docs/typings/callable.html","title":"可调用的"},{"link":"/git/ts-book/docs/typings/typeAssertion.html","title":"类型断言"},{"link":"/git/ts-book/docs/typings/freshness.html","title":"Freshness"},{"link":"/git/ts-book/docs/typings/typeGuard.html","title":"类型保护"},{"link":"/git/ts-book/docs/typings/literals.html","title":"字面量类型"},{"link":"/git/ts-book/docs/typings/readonly.html","title":"readonly"},{"link":"/git/ts-book/docs/typings/generices.html","title":"泛型"},{"link":"/git/ts-book/docs/typings/typeInference.html","title":"类型推断"},{"link":"/git/ts-book/docs/typings/typeCompatibility.html","title":"类型兼容性"},{"link":"/git/ts-book/docs/typings/neverType.html","title":"Never"},{"link":"/git/ts-book/docs/typings/discrominatedUnion.html","title":"辨析联合类型"},{"link":"/git/ts-book/docs/typings/indexSignatures.html","title":"索引签名"},{"link":"/git/ts-book/docs/typings/movingTypes.html","title":"流动的类型"},{"link":"/git/ts-book/docs/typings/exceptionsHanding.html","title":"异常处理"},{"link":"/git/ts-book/docs/typings/mixins.html","title":"混合"},{"link":"/git/ts-book/docs/typings/thisType.html","title":"ThisType"}]},{"title":"JSX","items":[{"link":"/git/ts-book/docs/jsx/support.html","title":"支持 JSX"},{"link":"/git/ts-book/docs/jsx/reactJSX.html","title":"React JSX"},{"link":"/git/ts-book/docs/jsx/nonReactJSX.html","title":"非 React JSX"}]},{"title":"TypeScript 错误提示","items":[{"link":"/git/ts-book/docs/error/interpreting.html","title":"解读 Errors"},{"link":"/git/ts-book/docs/error/common.html","title":"常见的 Error"}]},{"title":"TIPs","items":[{"link":"/git/ts-book/docs/tips/stringBasedEmuns.html","title":"基于字符串的枚举"},{"link":"/git/ts-book/docs/tips/nominalTyping.html","title":"名义化类型"},{"link":"/git/ts-book/docs/tips/statefulFunctions.html","title":"状态函数"},{"link":"/git/ts-book/docs/tips/bind.html","title":"Bind 是有害的"},{"link":"/git/ts-book/docs/tips/curry.html","title":"柯里化"},{"link":"/git/ts-book/docs/tips/typeInstantiation.html","title":"泛型的实例化类型"},{"link":"/git/ts-book/docs/tips/lazyObjectLiteralInitialization.html","title":"对象字面量的惰性初始化"},{"link":"/git/ts-book/docs/tips/classAreUseful.html","title":"类是有用的"},{"link":"/git/ts-book/docs/tips/avoidExportDefault.html","title":"export default 被认为是有害的"},{"link":"/git/ts-book/docs/tips/limitPropertySetters.html","title":"减少 setter 属性的使用"},{"link":"/git/ts-book/docs/tips/createArrays.html","title":"创建数组"},{"link":"/git/ts-book/docs/tips/outFileCaution.html","title":"谨慎使用 --outFile"},{"link":"/git/ts-book/docs/tips/staticConstructors.html","title":"TypeScript 中的静态构造函数"},{"link":"/git/ts-book/docs/tips/singletonPatern.html","title":"单例模式"},{"link":"/git/ts-book/docs/tips/functionParameters.html","title":"函数参数"},{"link":"/git/ts-book/docs/tips/truthy.html","title":"Truthy"},{"link":"/git/ts-book/docs/tips/buildToggles.html","title":"构建切换"},{"link":"/git/ts-book/docs/tips/typesafeEventEmitter.html","title":"类型安全的 Event Emitter"},{"link":"/git/ts-book/docs/tips/metadata.html","title":"Reflect Metadata"},{"link":"/git/ts-book/docs/tips/covarianceAndContravariance.html","title":"协变与逆变"},{"link":"/git/ts-book/docs/tips/infer.html","title":"infer"}]},{"title":"TypeScript 编译原理","items":[{"link":"/git/ts-book/docs/compiler/overview.html","title":"概览"},{"link":"/git/ts-book/docs/compiler/program.html","title":"程序"},{"link":"/git/ts-book/docs/compiler/ast.html","title":"抽象语法树"},{"link":"/git/ts-book/docs/compiler/scanner.html","title":"扫描器"},{"link":"/git/ts-book/docs/compiler/parser.html","title":"解析器"},{"link":"/git/ts-book/docs/compiler/binder.html","title":"绑定器"},{"link":"/git/ts-book/docs/compiler/checker.html","title":"检查器"},{"link":"/git/ts-book/docs/compiler/emitter.html","title":"发射器"}]},{"title":"TypeScript FAQs","items":[{"link":"/git/ts-book/docs/faqs/common-bug-not-bugs.html","title":"一些常见的「bug」并不是 bug"},{"link":"/git/ts-book/docs/faqs/common-feature-request.html","title":"一些常见的 Feature 需求"},{"link":"/git/ts-book/docs/faqs/type-system-behavior.html","title":"类型系统的行为"},{"link":"/git/ts-book/docs/faqs/function.html","title":"函数"},{"link":"/git/ts-book/docs/faqs/class.html","title":"类"},{"link":"/git/ts-book/docs/faqs/generics.html","title":"泛型"},{"link":"/git/ts-book/docs/faqs/modules.html","title":"模块"},{"link":"/git/ts-book/docs/faqs/enums.html","title":"枚举"},{"link":"/git/ts-book/docs/faqs/type-guards.html","title":"类型守卫"},{"link":"/git/ts-book/docs/faqs/jsx-and-react.html","title":"JSX 和 React"},{"link":"/git/ts-book/docs/faqs/thing-that-dont-work.html","title":"一些不能按预期工作的代码"},{"link":"/git/ts-book/docs/faqs/commandline-behavior.html","title":"命令行的行为"},{"link":"/git/ts-book/docs/faqs/tsconfig-behavior.html","title":"tsconfig.json 的行为"}]},{"title":"TypeScript 更新","items":[{"link":"/git/ts-book/docs/new/typescript-3.9.html","title":"TypeScript 3.9"},{"link":"/git/ts-book/docs/new/typescript-3.8.html","title":"TypeScript 3.8"},{"link":"/git/ts-book/docs/new/typescript-3.7.html","title":"TypeScript 3.7"}]}]}');export{f as comp,S as data};