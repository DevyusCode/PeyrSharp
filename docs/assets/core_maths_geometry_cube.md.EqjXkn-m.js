import{_ as s,o as a,c as n,Q as e}from"./chunks/framework._KetfzzT.js";const u=JSON.parse('{"title":"Cube","description":"","frontmatter":{},"headers":[],"relativePath":"core/maths/geometry/cube.md","filePath":"core/maths/geometry/cube.md","lastUpdated":1700306874000}'),o={name:"core/maths/geometry/cube.md"},l=e(`<h1 id="cube" tabindex="-1">Cube <a class="header-anchor" href="#cube" aria-label="Permalink to &quot;Cube&quot;">​</a></h1><p>This page is about the <code>Cube</code> class available in <a href="/core/maths/geometry.html"><code>PeyrSharp.Core.Maths.Geometry</code></a>. You can find here all of its constructors and properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Cube</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td><td><strong>.NET 8</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="cube-side" tabindex="-1">Cube(side) <a class="header-anchor" href="#cube-side" aria-label="Permalink to &quot;Cube(side)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes a <code>Cube</code> class from the length of the side of the cube.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>side</code></td><td>The length of the side of the cube.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>side</code> ≤ 0, a <code>DivideByZeroException</code> will be thrown.</p></div><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// Creates a 10x10x10 cube</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// Creates a 10x10x10 cube</span></span></code></pre></div><h3 id="cube-width-length-height" tabindex="-1">Cube(width, length, height) <a class="header-anchor" href="#cube-width-length-height" aria-label="Permalink to &quot;Cube(width, length, height)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes a <code>Cube</code> class from the width, the length and the height of the cuboidal.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>width</code></td><td>The width of the cuboidal.</td></tr><tr><td><code>double</code></td><td><code>length</code></td><td>The length of the cuboidal.</td></tr><tr><td><code>double</code></td><td><code>height</code></td><td>The height of the cuboidal.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>width</code>, <code>length</code> or <code>height</code> ≤ 0, a <code>DivideByZeroException</code> will be thrown.</p></div><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">// Creates a 10x20x10 cuboidal</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">// Creates a 10x20x10 cuboidal</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="area" tabindex="-1">Area <a class="header-anchor" href="#area" aria-label="Permalink to &quot;Area&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Area { get; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Area { get; }</span></span></code></pre></div><p>The <code>Area</code> property is a <code>double</code> which returns the area of the cube. You can only <code>get</code> this property.</p><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">area</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cube.Area;</span></span>
<span class="line"><span style="color:#6A737D;">// area = 100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">area</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cube.Area;</span></span>
<span class="line"><span style="color:#6A737D;">// area = 100</span></span></code></pre></div><h3 id="edge" tabindex="-1">Edge <a class="header-anchor" href="#edge" aria-label="Permalink to &quot;Edge&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Edge { get; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Edge { get; }</span></span></code></pre></div><p>The <code>Edge</code> property is a <code>double</code> which returns the edge of the cube. You can only <code>get</code> this property.</p><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">edge</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cube.Edge;</span></span>
<span class="line"><span style="color:#6A737D;">// edge = 7.0710678118654755</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">edge</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cube.Edge;</span></span>
<span class="line"><span style="color:#6A737D;">// edge = 7.0710678118654755</span></span></code></pre></div><h3 id="length" tabindex="-1">Length <a class="header-anchor" href="#length" aria-label="Permalink to &quot;Length&quot;">​</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Length { get; init; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Length { get; init; }</span></span></code></pre></div><p>The <code>Length</code> property is a <code>double</code> which returns the length of the cube. You can only <code>get</code> this property.</p><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cube.Length;</span></span>
<span class="line"><span style="color:#6A737D;">// length = 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cube.Length;</span></span>
<span class="line"><span style="color:#6A737D;">// length = 10</span></span></code></pre></div><h3 id="height" tabindex="-1">Height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;Height&quot;">​</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Height { get; init; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Height { get; init; }</span></span></code></pre></div><p>The <code>Height</code> property is a <code>double</code> which returns the height of the cube. You can only <code>get</code> this property.</p><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cube.Height;</span></span>
<span class="line"><span style="color:#6A737D;">// height = 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cube.Height;</span></span>
<span class="line"><span style="color:#6A737D;">// height = 10</span></span></code></pre></div><h3 id="side" tabindex="-1">Side <a class="header-anchor" href="#side" aria-label="Permalink to &quot;Side&quot;">​</a></h3><h4 id="definition-6" tabindex="-1">Definition <a class="header-anchor" href="#definition-6" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double?</span><span style="color:#E1E4E8;"> Side { get; init; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double?</span><span style="color:#24292E;"> Side { get; init; }</span></span></code></pre></div><p>The <code>Side</code> property is a <code>double?</code> which returns the length of the side of the cube. You can only <code>get</code> this property.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This property can be <code>null</code> if not initialized with <a href="#cube-side"><code>Cube(side)</code></a>.</p></div><h4 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">side</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cube.Side </span><span style="color:#F97583;">??</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// side = 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">side</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cube.Side </span><span style="color:#D73A49;">??</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// side = 10</span></span></code></pre></div><h3 id="volume" tabindex="-1">Volume <a class="header-anchor" href="#volume" aria-label="Permalink to &quot;Volume&quot;">​</a></h3><h4 id="definition-7" tabindex="-1">Definition <a class="header-anchor" href="#definition-7" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Volume { get; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Volume { get; }</span></span></code></pre></div><p>The <code>Volume</code> property is a <code>double</code> which returns the volume of the cube. You can only <code>get</code> this property.</p><h4 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cube.Volume; </span><span style="color:#6A737D;">// 10^3</span></span>
<span class="line"><span style="color:#6A737D;">// volume = 1000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">volume</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cube.Volume; </span><span style="color:#6A737D;">// 10^3</span></span>
<span class="line"><span style="color:#6A737D;">// volume = 1000</span></span></code></pre></div><h3 id="width" tabindex="-1">Width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;Width&quot;">​</a></h3><h4 id="definition-8" tabindex="-1">Definition <a class="header-anchor" href="#definition-8" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> Width { get; init; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;"> Width { get; init; }</span></span></code></pre></div><p>The <code>Width</code> property is a <code>double</code> which returns the width of the cube. You can only <code>get</code> this property.</p><h4 id="usage-8" tabindex="-1">Usage <a class="header-anchor" href="#usage-8" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Geometry</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Cube</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cube</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cube.Width;</span></span>
<span class="line"><span style="color:#6A737D;">// width = 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Geometry</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Cube</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cube</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cube.Width;</span></span>
<span class="line"><span style="color:#6A737D;">// width = 10</span></span></code></pre></div>`,66),p=[l];function t(c,r,i,y,d,E){return a(),n("div",null,p)}const b=s(o,[["render",t]]);export{u as __pageData,b as default};