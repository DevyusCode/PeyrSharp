import{_ as s,c as a,o as e,R as n}from"./chunks/framework.bdd825cc.js";const D=JSON.parse('{"title":"Triangle","description":"","frontmatter":{},"headers":[],"relativePath":"core/maths/geometry/triangle.md","filePath":"core/maths/geometry/triangle.md","lastUpdated":1665755989000}'),l={name:"core/maths/geometry/triangle.md"},o=n(`<h1 id="triangle" tabindex="-1">Triangle <a class="header-anchor" href="#triangle" aria-label="Permalink to &quot;Triangle&quot;">​</a></h1><p>This page is about the <code>Triangle</code> class available in <a href="/core/maths/geometry.html"><code>PeyrSharp.Core.Maths.Geometry</code></a>. You can find here all of its constructors and properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Triangle</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="triangle-side1-side2-side3" tabindex="-1">Triangle(side1, side2, side3) <a class="header-anchor" href="#triangle-side1-side2-side3" aria-label="Permalink to &quot;Triangle(side1, side2, side3)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes a <code>Triangle</code> class from the length of its sides.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>side1</code></td><td>The length of the first side of the triangle.</td></tr><tr><td><code>double</code></td><td><code>side2</code></td><td>The length of the second side of the triangle.</td></tr><tr><td><code>double</code></td><td><code>side3</code></td><td>The length of the third side of the triangle.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>side1</code>, <code>side2</code>, or <code>side3</code> ≤ 0, a <code>DivideByZeroException</code> will be thrown.</p></div><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Creates a triangle</span></span></code></pre></div><h3 id="triangle-width-height" tabindex="-1">Triangle(width, height) <a class="header-anchor" href="#triangle-width-height" aria-label="Permalink to &quot;Triangle(width, height)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes a <code>Triangle</code> class from a width and height.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>width</code></td><td>The width of the triangle.</td></tr><tr><td><code>double</code></td><td><code>height</code></td><td>The height of the triangle.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Creates a triangle with a width of 10 and a height of 20</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="area" tabindex="-1">Area <a class="header-anchor" href="#area" aria-label="Permalink to &quot;Area&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Area </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>Area</code> property is a <code>double</code> which returns the area of the triangle. You can only <code>get</code> this property.</p><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">area</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Area</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// area = 100</span></span></code></pre></div><h3 id="perimeter" tabindex="-1">Perimeter <a class="header-anchor" href="#perimeter" aria-label="Permalink to &quot;Perimeter&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Perimeter </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>Perimeter</code> property is a <code>double</code> which returns the perimeter of the triangle. You can only <code>get</code> this property.</p><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">perimeter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Perimeter</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// perimeter = 40</span></span></code></pre></div><h3 id="hypotenuse" tabindex="-1">Hypotenuse <a class="header-anchor" href="#hypotenuse" aria-label="Permalink to &quot;Hypotenuse&quot;">​</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Hypotenuse </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>Hypotenuse</code> property is a <code>double</code> which returns the hypotenuse of the triangle. You can only <code>get</code> this property.</p><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Assuming the triangle is right</span></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">hypotenuse</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Hypotenuse</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// hypotenuse = 5</span></span></code></pre></div><h3 id="isright" tabindex="-1">IsRight <a class="header-anchor" href="#isright" aria-label="Permalink to &quot;IsRight&quot;">​</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> bool IsRight </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>IsRight</code> property is a <code>bool</code> which returns <code>true</code> if the triangle is right. You can only <code>get</code> this property.</p><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">IsRight</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// right = true</span></span></code></pre></div><h3 id="canbebuilt" tabindex="-1">CanBeBuilt <a class="header-anchor" href="#canbebuilt" aria-label="Permalink to &quot;CanBeBuilt&quot;">​</a></h3><h4 id="definition-6" tabindex="-1">Definition <a class="header-anchor" href="#definition-6" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> bool CanBeBuilt </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>CanBeBuilt</code> property is a <code>bool</code> which returns <code>true</code> if the triangle can be built. You can only <code>get</code> this property.</p><h4 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">canBeBuilt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CanBeBuilt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// canBeBuilt = false</span></span></code></pre></div><h3 id="width" tabindex="-1">Width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;Width&quot;">​</a></h3><h4 id="definition-7" tabindex="-1">Definition <a class="header-anchor" href="#definition-7" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Width </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> init</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>Width</code> property is a <code>double</code> which returns the width of the triangle, which was defined when initializing it. You can only <code>get</code> this property.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This property can be equal to <code>double.NaN</code> if the class was not initialized with the <a href="#triangle-width-height"><code>Triangle(width, height)</code></a> constructor.</p></div><h4 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">width</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Width</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// width = 10</span></span></code></pre></div><h3 id="height" tabindex="-1">Height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;Height&quot;">​</a></h3><h4 id="definition-8" tabindex="-1">Definition <a class="header-anchor" href="#definition-8" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Height </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> init</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>Height</code> property is a <code>double</code> which returns the height of the triangle, which was defined when initializing it. You can only <code>get</code> this property.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This property can be equal to <code>double.NaN</code> if the class was not initialized with the <a href="#triangle-width-height"><code>Triangle(width, height)</code></a> constructor.</p></div><h4 id="usage-8" tabindex="-1">Usage <a class="header-anchor" href="#usage-8" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">height</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Height</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// height = 20</span></span></code></pre></div><h3 id="side1" tabindex="-1">Side1 <a class="header-anchor" href="#side1" aria-label="Permalink to &quot;Side1&quot;">​</a></h3><h4 id="definition-9" tabindex="-1">Definition <a class="header-anchor" href="#definition-9" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Side1 </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> init</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>Side1</code> property is a <code>double</code> which returns the length of the first side of the triangle, which was defined when initializing it. You can only <code>get</code> this property.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This property can be equal to <code>double.NaN</code> if the class was not initialized with the <a href="#triangle-side1-side2-side3"><code>Triangle(side1, side2, side3)</code></a> constructor.</p></div><h4 id="usage-9" tabindex="-1">Usage <a class="header-anchor" href="#usage-9" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">side1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Side1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// side1 = 10</span></span></code></pre></div><h3 id="side2" tabindex="-1">Side2 <a class="header-anchor" href="#side2" aria-label="Permalink to &quot;Side2&quot;">​</a></h3><h4 id="definition-10" tabindex="-1">Definition <a class="header-anchor" href="#definition-10" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Side2 </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> init</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>Side2</code> property is a <code>double</code> which returns the length of the second side of the triangle, which was defined when initializing it. You can only <code>get</code> this property.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This property can be equal to <code>double.NaN</code> if the class was not initialized with the <a href="#triangle-side1-side2-side3"><code>Triangle(side1, side2, side3)</code></a> constructor.</p></div><h4 id="usage-10" tabindex="-1">Usage <a class="header-anchor" href="#usage-10" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">side2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Side2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// side2 = 20</span></span></code></pre></div><h3 id="side3" tabindex="-1">Side3 <a class="header-anchor" href="#side3" aria-label="Permalink to &quot;Side3&quot;">​</a></h3><h4 id="definition-11" tabindex="-1">Definition <a class="header-anchor" href="#definition-11" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> double Side3 </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> get</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> init</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>Side3</code> property is a <code>double</code> which returns the length of the third side of the triangle, which was defined when initializing it. You can only <code>get</code> this property.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This property can be equal to <code>double.NaN</code> if the class was not initialized with the <a href="#triangle-side1-side2-side3"><code>Triangle(side1, side2, side3)</code></a> constructor.</p></div><h4 id="usage-11" tabindex="-1">Usage <a class="header-anchor" href="#usage-11" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core.Maths.Geometry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">triangle</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">side3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> triangle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Side3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// side3 = 15</span></span></code></pre></div>`,87),t=[o];function p(r,c,i,d,h,y){return e(),a("div",null,t)}const F=s(l,[["render",p]]);export{D as __pageData,F as default};
