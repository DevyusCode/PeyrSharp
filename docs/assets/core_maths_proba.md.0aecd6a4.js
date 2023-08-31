import{_ as a,o as s,c as o,Q as t}from"./chunks/framework.b637c96f.js";const b=JSON.parse('{"title":"Proba","description":"","frontmatter":{},"headers":[],"relativePath":"core/maths/proba.md","filePath":"core/maths/proba.md","lastUpdated":1675590267000}'),e={name:"core/maths/proba.md"},n=t(`<h1 id="proba" tabindex="-1">Proba <a class="header-anchor" href="#proba" aria-label="Permalink to &quot;Proba&quot;">​</a></h1><p>This page is about the <code>Proba</code> class available in <a href="/core/maths.html"><code>PeyrSharp.Core.Maths</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Proba</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getrandomvalue-probabilities" tabindex="-1">GetRandomValue(probabilities) <a class="header-anchor" href="#getrandomvalue-probabilities" aria-label="Permalink to &quot;GetRandomValue(probabilities)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets a random value based on the specified probabilities. Returns a randomly selected value.</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>T</code></td><td>-</td><td>The type of the values to select from.</td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Dictionary&lt;T, double&gt;</code></td><td><code>probabilities</code></td><td>A dictionary containing the probability of getting each value.</td></tr></tbody></table><h4 id="exceptions" tabindex="-1">Exceptions <a class="header-anchor" href="#exceptions" aria-label="Permalink to &quot;Exceptions&quot;">​</a></h4><ul><li><code>ArgumentException</code>: Thrown if the sum of probabilities is not equal to 1.</li><li><code>Exception</code>: Thrown if an unexpected error occurs while selecting a random value.</li></ul><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Dictionary</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#B392F0;">probabilities</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Dictionary</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#9ECBFF;">&quot;Heads&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#9ECBFF;">&quot;Tails&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Proba.</span><span style="color:#B392F0;">GetRandomValue</span><span style="color:#E1E4E8;">(probabilities);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Dictionary</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">double</span><span style="color:#24292E;">&gt; </span><span style="color:#6F42C1;">probabilities</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Dictionary</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">double</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#032F62;">&quot;Heads&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#032F62;">&quot;Tails&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Proba.</span><span style="color:#6F42C1;">GetRandomValue</span><span style="color:#24292E;">(probabilities);</span></span></code></pre></div>`,18),l=[n];function p(r,c,i,d,y,h){return s(),o("div",null,l)}const u=a(e,[["render",p]]);export{b as __pageData,u as default};
