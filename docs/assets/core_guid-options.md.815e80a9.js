import{_ as s,c as e,o as a,a as n}from"./app.411d0108.js";const C=JSON.parse('{"title":"GuidOptions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"GuidOptions()","slug":"guidoptions-1","link":"#guidoptions-1","children":[]},{"level":3,"title":"GuidOptions(length, hyphens, braces, upperCaseOnly)","slug":"guidoptions-length-hyphens-braces-uppercaseonly","link":"#guidoptions-length-hyphens-braces-uppercaseonly","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"Length","slug":"length","link":"#length","children":[]},{"level":3,"title":"Hyphens","slug":"hyphens","link":"#hyphens","children":[]},{"level":3,"title":"Braces","slug":"braces","link":"#braces","children":[]},{"level":3,"title":"UpperCaseOnly","slug":"uppercaseonly","link":"#uppercaseonly","children":[]}]}],"relativePath":"core/guid-options.md","lastUpdated":1665313649000}'),t={name:"core/guid-options.md"},o=n(`<h1 id="guidoptions" tabindex="-1">GuidOptions <a class="header-anchor" href="#guidoptions" aria-hidden="true">#</a></h1><p>This page is about the <code>GuidOptions</code> class available in PeyrSharp.Core. You can find here all of its properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>The <code>GuidOptions</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h2><h3 id="guidoptions-1" tabindex="-1">GuidOptions() <a class="header-anchor" href="#guidoptions-1" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Initializes <code>GuidOptions</code> with default values for its properties.</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GuidOptions</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    options:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        - Length = 32</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        - Hyphens = true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        - Braces = false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        - UpperCaseOnly = false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><h3 id="guidoptions-length-hyphens-braces-uppercaseonly" tabindex="-1">GuidOptions(length, hyphens, braces, upperCaseOnly) <a class="header-anchor" href="#guidoptions-length-hyphens-braces-uppercaseonly" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><p>Initializes <code>GuidOptions</code> with specific values for its properties.</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GuidOptions</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    options:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        - Length = 32</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        - Hyphens = true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        - Braces = true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">        - UpperCaseOnly = true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="length" tabindex="-1">Length <a class="header-anchor" href="#length" aria-hidden="true">#</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> int Length </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> set</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>Length</code> property is an <code>int</code> representing the length of the Guid that will be generated if used with <code>GuidGen.Generate()</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This property can be initialized when using the <a href="#guidoptions-length-hyphens-braces-uppercaseonly"><code>GuidOptions(length, hyphens, braces, upperCaseOnly)</code></a> constructor.</p></div><p>You can <code>get</code> and <code>set</code> this property after initializing the class.</p><h3 id="hyphens" tabindex="-1">Hyphens <a class="header-anchor" href="#hyphens" aria-hidden="true">#</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> bool Hyphens </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> set</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>Hyphens</code> property is a <code>bool</code>, which will determine if you want hyphens in the Guid that will be generated if used with <code>GuidGen.Generate()</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This property can be initialized when using the <a href="#guidoptions-length-hyphens-braces-uppercaseonly"><code>GuidOptions(length, hyphens, braces, upperCaseOnly)</code></a> constructor.</p></div><p>You can <code>get</code> and <code>set</code> this property after initializing the class.</p><h3 id="braces" tabindex="-1">Braces <a class="header-anchor" href="#braces" aria-hidden="true">#</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> bool Braces </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> set</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>Braces</code> property is a <code>bool</code>, which will determine if you want braces in the Guid that will be generated if used with <code>GuidGen.Generate()</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This property can be initialized when using the <a href="#guidoptions-length-hyphens-braces-uppercaseonly"><code>GuidOptions(length, hyphens, braces, upperCaseOnly)</code></a> constructor.</p></div><p>You can <code>get</code> and <code>set</code> this property after initializing the class.</p><h3 id="uppercaseonly" tabindex="-1">UpperCaseOnly <a class="header-anchor" href="#uppercaseonly" aria-hidden="true">#</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> bool UpperCaseOnly </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> set</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>UpperCaseOnly</code> property is a <code>bool</code>, which will determine if you want to only have upper cases in the Guid that will be generated if used with <code>GuidGen.Generate()</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This property can be initialized when using the <a href="#guidoptions-length-hyphens-braces-uppercaseonly"><code>GuidOptions(length, hyphens, braces, upperCaseOnly)</code></a> constructor.</p></div><p>You can <code>get</code> and <code>set</code> this property after initializing the class.</p>`,41),l=[o];function p(i,c,r,d,h,y){return a(),e("div",null,l)}const g=s(t,[["render",p]]);export{C as __pageData,g as default};
