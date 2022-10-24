import{_ as s,c as a,o as e,a as n}from"./app.0c9be26e.js";const D=JSON.parse('{"title":"Cylinder","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Constructors","slug":"constructors","link":"#constructors","children":[{"level":3,"title":"Cylinder(radius, height)","slug":"cylinder-radius-height","link":"#cylinder-radius-height","children":[]}]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[{"level":3,"title":"Volume","slug":"volume","link":"#volume","children":[]},{"level":3,"title":"BaseArea","slug":"basearea","link":"#basearea","children":[]},{"level":3,"title":"Radius","slug":"radius","link":"#radius","children":[]},{"level":3,"title":"Height","slug":"height","link":"#height","children":[]}]}],"relativePath":"core/maths/geometry/cylinder.md","lastUpdated":1665652653000}'),l={name:"core/maths/geometry/cylinder.md"},o=n(`<h1 id="cylinder" tabindex="-1">Cylinder <a class="header-anchor" href="#cylinder" aria-hidden="true">#</a></h1><p>This page is about the <code>Cylinder</code> class available in <a href="/core/maths/geometry.html"><code>PeyrSharp.Core.Maths.Geometry</code></a>. You can find here all of its constructors and properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>The <code>Cylinder</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>\u2705</td><td>\u2705</td><td>\u2705</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h2><h3 id="cylinder-radius-height" tabindex="-1">Cylinder(radius, height) <a class="header-anchor" href="#cylinder-radius-height" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Initializes a <code>Cylinder</code> class from a specific radius and height.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>radius</code></td><td>The radius of the cylinder.</td></tr><tr><td><code>double</code></td><td><code>height</code></td><td>The height of the cylinder.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>radius</code> or <code>height</code> \u2264 0, a <code>DivideByZeroException</code> will be thrown.</p></div><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Creates a cylinder with a radius of 20, and a height of 10</span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="volume" tabindex="-1">Volume <a class="header-anchor" href="#volume" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Volume </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>Volume</code> property is a <code>double</code> which returns the volume of the cylinder. You can only <code>get</code> this property.</p><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">volume</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> cylinder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Volume</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// volume = 6283.185307179587</span></span>
<span class="line"></span></code></pre></div><h3 id="basearea" tabindex="-1">BaseArea <a class="header-anchor" href="#basearea" aria-hidden="true">#</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double BaseArea </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>BaseArea</code> property is a <code>double</code> which returns the area of the circle, which is the base of the cylinder. You can only <code>get</code> this property.</p><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">baseArea</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> cylinder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BaseArea</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// baseArea = 314.1592653589793</span></span>
<span class="line"></span></code></pre></div><h3 id="radius" tabindex="-1">Radius <a class="header-anchor" href="#radius" aria-hidden="true">#</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Radius </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> init</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>Radius</code> property is a <code>double</code> which returns the radius of the cylinder, which was defined when initializing it. You can only <code>get</code> this property.</p><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">radius</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> cylinder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Radius</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// radius = 15</span></span>
<span class="line"></span></code></pre></div><h3 id="height" tabindex="-1">Height <a class="header-anchor" href="#height" aria-hidden="true">#</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Height </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> init</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>The <code>Height</code> property is a <code>double</code> which returns the height of the cylinder, which was defined when initializing it. You can only <code>get</code> this property.</p><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">cylinder</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">height</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> cylinder</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Height</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// height = 40</span></span>
<span class="line"></span></code></pre></div>`,39),t=[o];function p(r,c,i,d,h,y){return e(),a("div",null,t)}const F=s(l,[["render",p]]);export{D as __pageData,F as default};