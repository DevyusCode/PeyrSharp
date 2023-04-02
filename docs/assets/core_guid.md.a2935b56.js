import{_ as a,c as e,o as s,Q as t}from"./chunks/framework.7addaa9c.js";const m=JSON.parse('{"title":"GuidGen","description":"","frontmatter":{},"headers":[],"relativePath":"core/guid.md","lastUpdated":1665311928000}'),n={name:"core/guid.md"},o=t(`<h1 id="guidgen" tabindex="-1">GuidGen <a class="header-anchor" href="#guidgen" aria-label="Permalink to &quot;GuidGen&quot;">​</a></h1><p>This page is about the <code>GuidGen</code> class available in PeyrSharp.Core. You can find here all of its methods and properties.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>GuidGen</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="generate" tabindex="-1">Generate() <a class="header-anchor" href="#generate" aria-label="Permalink to &quot;Generate()&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>The <code>Generate()</code> method generates a Guid and will return it as a <code>string</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method has different overloads.</p></div><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><p>This method has no arguments.</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">guid</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GuidGen</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Generate</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// guid = 7992acdd-1c9a-4985-92df-04599d560bbc (example)</span></span>
<span class="line"></span></code></pre></div><h3 id="generate-length" tabindex="-1">Generate(length) <a class="header-anchor" href="#generate-length" aria-label="Permalink to &quot;Generate(length)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>The <code>Generate()</code> method generates a Guid with a specific length and will return it as a <code>string</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method is an overload of <a href="#generate"><code>Generate()</code></a></p></div><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><p>This method has one argument:</p><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>int</code></td><td><code>length</code></td><td>The length of the Guid.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The <code>length</code> must be a number, otherwise, it will thrown a <a href="./../exceptions.html#invalidguidlengthexception"><code>InvalidGuidLengthException</code></a>.</p></div><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">guid</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GuidGen</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Generate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// guid = 5693ad99881e4f9 (example)</span></span>
<span class="line"></span></code></pre></div><h3 id="generate-fromstring" tabindex="-1">Generate(fromString) <a class="header-anchor" href="#generate-fromstring" aria-label="Permalink to &quot;Generate(fromString)&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>The <code>Generate()</code> method generates a Guid from a specific <code>string</code> and will return it as a <code>string</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method is an overload of <a href="#generate"><code>Generate()</code></a></p></div><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><p>This method has one argument:</p><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>fromString</code></td><td>The string which will be used to generate the Guid.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">guid</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GuidGen</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Generate</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// guid = 53991a8b-61c4-9612-a827-abf8c47804d7</span></span>
<span class="line"></span></code></pre></div><h3 id="generate-guidoptions" tabindex="-1">Generate(guidOptions) <a class="header-anchor" href="#generate-guidoptions" aria-label="Permalink to &quot;Generate(guidOptions)&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>The <code>Generate()</code> method generates a Guid with specific <a href="/core/guid-options.html"><code>GuidOptions</code></a> and will return it as a <code>string</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method is an overload of <a href="#generate"><code>Generate()</code></a></p></div><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><p>This method has one argument:</p><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><a href="/core/guid-options.html"><code>GuidOptions</code></a></td><td><code>guidOptions</code></td><td>The options of the Guid to generate.</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">guid</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Guid</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Generate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GuidOptions</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// guid = {35c3ab90-7636-4d34-a439-bc65eb3c} (example)</span></span>
<span class="line"></span></code></pre></div>`,43),l=[o];function r(i,c,p,d,h,u){return s(),e("div",null,l)}const y=a(n,[["render",r]]);export{m as __pageData,y as default};