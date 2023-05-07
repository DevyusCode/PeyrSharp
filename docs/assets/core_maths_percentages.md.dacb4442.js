import{_ as e,c as a,o as t,R as s}from"./chunks/framework.bdd825cc.js";const g=JSON.parse('{"title":"Percentages","description":"","frontmatter":{},"headers":[],"relativePath":"core/maths/percentages.md","filePath":"core/maths/percentages.md","lastUpdated":1666371130000}'),o={name:"core/maths/percentages.md"},n=s(`<h1 id="percentages" tabindex="-1">Percentages <a class="header-anchor" href="#percentages" aria-label="Permalink to &quot;Percentages&quot;">​</a></h1><p>This page is about the <code>Percentages</code> class available in <a href="/core/maths.html"><code>PeyrSharp.Core.Maths</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Percentages</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="increaseby-value-increaserate" tabindex="-1">IncreaseBy(value, increaseRate) <a class="header-anchor" href="#increaseby-value-increaserate" aria-label="Permalink to &quot;IncreaseBy(value, increaseRate)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Returns the value after an increase of x% as a <code>double</code>.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The original value.</td></tr><tr><td><code>double</code></td><td><code>increaseRate</code></td><td>The increase percentage (as <code>x/100d</code>).</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">price</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Percentages</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IncreaseBy</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">100d</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Increase the price by 10%</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// price = 110</span></span></code></pre></div><h3 id="decreaseby-value-decreaserate" tabindex="-1">DecreaseBy(value, decreaseRate) <a class="header-anchor" href="#decreaseby-value-decreaserate" aria-label="Permalink to &quot;DecreaseBy(value, decreaseRate)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Returns the value after a decrease of x% as a <code>double</code>.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>value</code></td><td>The original value.</td></tr><tr><td><code>double</code></td><td><code>decreaseRate</code></td><td>The decrease percentage (as <code>x/100d</code>).</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">price</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Percentages</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DecreaseBy</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">100d</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Decrease the price by 10%</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// price = 90</span></span></code></pre></div><h3 id="getinvertedevolutionrate-evolutionrate" tabindex="-1">GetInvertedEvolutionRate(evolutionRate) <a class="header-anchor" href="#getinvertedevolutionrate-evolutionrate" aria-label="Permalink to &quot;GetInvertedEvolutionRate(evolutionRate)&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the coefficient to get back to the original value after a percentage increase/decrease. It returns a <code>double</code>.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>evolutionRate</code></td><td>The evolution rate to get the inverse of.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ev</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Percentages</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetInvertedEvolutionRate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1.1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ev = -0.09090909090909094</span></span></code></pre></div><h3 id="proportiontopercentagestring-proportion" tabindex="-1">ProportionToPercentageString(proportion) <a class="header-anchor" href="#proportiontopercentagestring-proportion" aria-label="Permalink to &quot;ProportionToPercentageString(proportion)&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Formats a proportion to a <code>string</code>.</p><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>proportion</code></td><td>The proportion to get the percentage of.</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">proportion</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Percentages</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ProportionToPercentageString</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// proportion = 50%</span></span></code></pre></div>`,35),r=[n];function l(c,p,i,d,h,u){return t(),a("div",null,r)}const b=e(o,[["render",l]]);export{g as __pageData,b as default};
