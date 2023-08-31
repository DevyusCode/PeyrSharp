import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.b637c96f.js";const u=JSON.parse('{"title":"RGB","description":"","frontmatter":{},"headers":[],"relativePath":"core/converters/colors/rgb.md","filePath":"core/converters/colors/rgb.md","lastUpdated":1666628921000}'),e={name:"core/converters/colors/rgb.md"},l=n(`<h1 id="rgb" tabindex="-1">RGB <a class="header-anchor" href="#rgb" aria-label="Permalink to &quot;RGB&quot;">​</a></h1><p>This page is about the <code>RGB</code> class available in <a href="/core/converters.html"><code>PeyrSharp.Core.Converters</code></a>. You can find here all of its methods and properties.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>RGB</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="rgb-color" tabindex="-1">RGB(color) <a class="header-anchor" href="#rgb-color" aria-label="Permalink to &quot;RGB(color)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes a RGB class from a <a href="https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color?view=net-7.0" target="_blank" rel="noreferrer"><code>System.Drawing.Color</code></a>. Returns a <code>RGB</code> class.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Color</code></td><td><code>color</code></td><td>The RGB color.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Converters</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Drawing</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">RGB</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rgb</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(Color.</span><span style="color:#B392F0;">FromArgb</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Converters</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Drawing</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">RGB</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rgb</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">new</span><span style="color:#24292E;">(Color.</span><span style="color:#6F42C1;">FromArgb</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">120</span><span style="color:#24292E;">));</span></span></code></pre></div><h3 id="rgb-r-g-b" tabindex="-1">RGB(r, g, b) <a class="header-anchor" href="#rgb-r-g-b" aria-label="Permalink to &quot;RGB(r, g, b)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Initializes a RGB class from its <code>r</code>, <code>g</code> and <code>b</code> values. Returns a <code>RGB</code> class.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>int</code></td><td><code>r</code></td><td>Red.</td></tr><tr><td><code>int</code></td><td><code>g</code></td><td>Green.</td></tr><tr><td><code>int</code></td><td><code>b</code></td><td>Blue.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you specify a value that is not between 0 and 255, a <a href="/exceptions.html#rgbinvalidvalueexception"><code>RGBInvalidValueException</code></a> will be thrown.</p></div><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Converters</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">RGB</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rgb</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">new</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Converters</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">RGB</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rgb</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">new</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">120</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="tohex" tabindex="-1">ToHex() <a class="header-anchor" href="#tohex" aria-label="Permalink to &quot;ToHex()&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts the RGB color to hexadecimal (<a href="/core/converters/colors/hex.html"><code>HEX</code></a>). Returns a <a href="/core/converters/colors/hex.html"><code>HEX</code></a> class.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><p>This method has no arguments.</p><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Converters</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">HEX</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hex</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RGB</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">ToHex</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Converters</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">HEX</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hex</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RGB</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">ToHex</span><span style="color:#24292E;">();</span></span></code></pre></div><h3 id="tohsv" tabindex="-1">ToHsv() <a class="header-anchor" href="#tohsv" aria-label="Permalink to &quot;ToHsv()&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Converts the RGB color to <a href="/core/converters/colors/hsv.html"><code>HSV</code></a>. Returns a <a href="/core/converters/colors/hsv.html"><code>HSV</code></a> class.</p><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><p>This method has no arguments.</p><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Converters</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">HSV</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hsv</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RGB</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">ToHsv</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Converters</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">HSV</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hsv</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RGB</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">ToHsv</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="color" tabindex="-1">Color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;Color&quot;">​</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> Color Color { get; init; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> Color Color { get; init; }</span></span></code></pre></div><p>The <code>Color</code> property contains the RGB color as a <a href="https://learn.microsoft.com/en-us/dotnet/api/system.drawing.color?view=net-7.0" target="_blank" rel="noreferrer"><code>System.Drawing.Color</code></a>. You can only <code>get</code> this property.</p>`,41),t=[l];function r(p,c,i,d,y,h){return a(),o("div",null,t)}const g=s(e,[["render",r]]);export{u as __pageData,g as default};
