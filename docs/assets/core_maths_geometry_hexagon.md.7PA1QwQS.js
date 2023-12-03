import{_ as s,o as a,c as n,Q as e}from"./chunks/framework._KetfzzT.js";const g=JSON.parse('{"title":"Hexagon","description":"","frontmatter":{},"headers":[],"relativePath":"core/maths/geometry/hexagon.md","filePath":"core/maths/geometry/hexagon.md","lastUpdated":1700306874000}'),o={name:"core/maths/geometry/hexagon.md"},l=e(`<h1 id="hexagon" tabindex="-1">Hexagon <a class="header-anchor" href="#hexagon" aria-label="Permalink to &quot;Hexagon&quot;">​</a></h1><p>This page is about the <code>Hexagon</code> class available in <a href="/core/maths/geometry.html"><code>PeyrSharp.Core.Maths.Geometry</code></a>. You can find here all of its constructors and properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Hexagon</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td><td><strong>.NET 8</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="hexagon-side" tabindex="-1">Hexagon(side) <a class="header-anchor" href="#hexagon-side" aria-label="Permalink to &quot;Hexagon(side)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes a <code>Hexagon</code> class from the length of its side.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>side</code></td><td>The length of the side of the hexagon.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>side</code> ≤ 0, a <code>DivideByZeroException</code> will be thrown.</p></div><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Hexagon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hexagon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// Creates a hexagon with a length of 12</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Hexagon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hexagon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// Creates a hexagon with a length of 12</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="area" tabindex="-1">Area <a class="header-anchor" href="#area" aria-label="Permalink to &quot;Area&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Area { get; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Area { get; }</span></span></code></pre></div><p>The <code>Area</code> property is a <code>double</code> which returns the area of the hexagon. You can only <code>get</code> this property.</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Hexagon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hexagon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">area</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> hexagon.Area;</span></span>
<span class="line"><span style="color:#6A737D;">// area = 374.1229744348775</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Hexagon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hexagon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">area</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> hexagon.Area;</span></span>
<span class="line"><span style="color:#6A737D;">// area = 374.1229744348775</span></span></code></pre></div><h3 id="perimeter" tabindex="-1">Perimeter <a class="header-anchor" href="#perimeter" aria-label="Permalink to &quot;Perimeter&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Perimeter { get; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Perimeter { get; }</span></span></code></pre></div><p>The <code>Perimeter</code> property is a <code>double</code> which returns the perimeter of the hexagon. You can only <code>get</code> this property.</p><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Hexagon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hexagon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">perimeter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> hexagon.Perimeter;</span></span>
<span class="line"><span style="color:#6A737D;">// perimeter = 72</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Hexagon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hexagon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">perimeter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> hexagon.Perimeter;</span></span>
<span class="line"><span style="color:#6A737D;">// perimeter = 72</span></span></code></pre></div><h3 id="side" tabindex="-1">Side <a class="header-anchor" href="#side" aria-label="Permalink to &quot;Side&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Side { get; init; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Side { get; init; }</span></span></code></pre></div><p>The <code>Side</code> property is a <code>double</code> which returns the length of the side of the hexagon. You can only <code>get</code> this property</p><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Hexagon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hexagon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">side</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> hexagon.Side; </span><span style="color:#6A737D;">// side = 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Hexagon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hexagon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">side</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> hexagon.Side; </span><span style="color:#6A737D;">// side = 10</span></span></code></pre></div>`,33),p=[l];function t(r,c,i,y,d,h){return a(),n("div",null,p)}const u=s(o,[["render",t]]);export{g as __pageData,u as default};