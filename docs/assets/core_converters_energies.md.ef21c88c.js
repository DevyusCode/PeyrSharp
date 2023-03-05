import{_ as e,c as s,o as a,a as o}from"./app.14bef1c5.js";const C=JSON.parse('{"title":"Energies","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"CaloriesToJoules(calories)","slug":"caloriestojoules-calories","link":"#caloriestojoules-calories","children":[]},{"level":3,"title":"JoulesToCalories(joules)","slug":"joulestocalories-joules","link":"#joulestocalories-joules","children":[]}]}],"relativePath":"core/converters/energies.md","lastUpdated":1678016186000}'),t={name:"core/converters/energies.md"},n=o(`<h1 id="energies" tabindex="-1">Energies <a class="header-anchor" href="#energies" aria-hidden="true">#</a></h1><p>This page is about the <code>Energies</code> class available in <a href="/core/converters.html"><code>PeyrSharp.Core.Converters</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>The <code>Energies</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="caloriestojoules-calories" tabindex="-1">CaloriesToJoules(calories) <a class="header-anchor" href="#caloriestojoules-calories" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Converts calories to joules.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>calories</code></td><td>The amount of energy in calories to be converted.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p>The equivalent amount of energy in joules.</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">calories</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100.0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">joules</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Energies</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CaloriesToJoules</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">calories</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="joulestocalories-joules" tabindex="-1">JoulesToCalories(joules) <a class="header-anchor" href="#joulestocalories-joules" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><p>Converts joules to calories.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>joules</code></td><td>The amount of energy in joules.</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p>The equivalent amount of energy in calories.</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Converters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">joules</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000.0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">double</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">calories</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Energies</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">JoulesToCalories</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">joules</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,25),l=[n];function r(i,c,d,p,h,u){return a(),s("div",null,l)}const D=e(t,[["render",r]]);export{C as __pageData,D as default};
