import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.b637c96f.js";const g=JSON.parse('{"title":"Trigonometry","description":"","frontmatter":{},"headers":[],"relativePath":"core/maths/trigonometry.md","filePath":"core/maths/trigonometry.md","lastUpdated":1666370076000}'),o={name:"core/maths/trigonometry.md"},t=n(`<h1 id="trigonometry" tabindex="-1">Trigonometry <a class="header-anchor" href="#trigonometry" aria-label="Permalink to &quot;Trigonometry&quot;">​</a></h1><p>This page is about the <code>Trigonometry</code> class available in <a href="/core/maths.html"><code>PeyrSharp.Core.Maths</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Trigonometry</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getopposedsidefrom-triangleside-angle-value" tabindex="-1">GetOpposedSideFrom(triangleSide, angle, value) <a class="header-anchor" href="#getopposedsidefrom-triangleside-angle-value" aria-label="Permalink to &quot;GetOpposedSideFrom(triangleSide, angle, value)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the length of the opposed side of a specific angle, from the length of either the hypotenuse or the adjacent side of the angle.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><a href="/enumerations.html#trianglesides"><code>TriangleSides</code></a></td><td><code>triangleSide</code></td><td>The side of the triangle.</td></tr><tr><td><code>double</code></td><td><code>angle</code></td><td>The value of the angle.</td></tr><tr><td><code>double</code></td><td><code>value</code></td><td>The length of the chosen side.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>triangleSide</code> is equal to <code>TriangleSides.Opposed</code>, an <code>Exception</code> will be thrown.</p></div><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Enums</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">opposed</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Trigonometry.</span><span style="color:#B392F0;">GetOpposedSideFrom</span><span style="color:#E1E4E8;">(TriangleSides.Adjacent, </span><span style="color:#79B8FF;">1.05</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// opposed = 8.716576549915851</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Enums</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">opposed</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Trigonometry.</span><span style="color:#6F42C1;">GetOpposedSideFrom</span><span style="color:#24292E;">(TriangleSides.Adjacent, </span><span style="color:#005CC5;">1.05</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// opposed = 8.716576549915851</span></span></code></pre></div><h3 id="getadjacentsidefrom-triangleside-angle-value" tabindex="-1">GetAdjacentSideFrom(triangleSide, angle, value) <a class="header-anchor" href="#getadjacentsidefrom-triangleside-angle-value" aria-label="Permalink to &quot;GetAdjacentSideFrom(triangleSide, angle, value)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the length of the adjacent side of a specific angle, from the length of either the hypotenuse or the opposed side of the angle.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><a href="/enumerations.html#trianglesides"><code>TriangleSides</code></a></td><td><code>triangleSide</code></td><td>The side of the triangle.</td></tr><tr><td><code>double</code></td><td><code>angle</code></td><td>The value of the angle.</td></tr><tr><td><code>double</code></td><td><code>value</code></td><td>The length of the chosen side.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>triangleSide</code> is equal to <code>TriangleSides.Adjacent</code>, an <code>Exception</code> will be thrown.</p></div><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Enums</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">adjacent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Trigonometry.</span><span style="color:#B392F0;">GetAdjacentSideFrom</span><span style="color:#E1E4E8;">(TriangleSides.Opposed, </span><span style="color:#79B8FF;">1.05</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8.71</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// adjacent = 4.996227561429541</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Enums</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">adjacent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Trigonometry.</span><span style="color:#6F42C1;">GetAdjacentSideFrom</span><span style="color:#24292E;">(TriangleSides.Opposed, </span><span style="color:#005CC5;">1.05</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8.71</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// adjacent = 4.996227561429541</span></span></code></pre></div><h3 id="gethypotenusefrom-triangleside-angle-value" tabindex="-1">GetHypotenuseFrom(triangleSide, angle, value) <a class="header-anchor" href="#gethypotenusefrom-triangleside-angle-value" aria-label="Permalink to &quot;GetHypotenuseFrom(triangleSide, angle, value)&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the length of the hypotenuse, from the length of either the adjacent side or the opposed side of a specific angle.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><a href="/enumerations.html#trianglesides"><code>TriangleSides</code></a></td><td><code>triangleSide</code></td><td>The side of the triangle.</td></tr><tr><td><code>double</code></td><td><code>angle</code></td><td>The value of the angle.</td></tr><tr><td><code>double</code></td><td><code>value</code></td><td>The length of the chosen side.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If <code>triangleSide</code> is equal to <code>TriangleSides.Hypotenuse</code>, an <code>Exception</code> will be thrown.</p></div><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Enums</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">hypotenuse</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Trigonometry.</span><span style="color:#B392F0;">GetHypotenuseFrom</span><span style="color:#E1E4E8;">(TriangleSides.Opposed, </span><span style="color:#79B8FF;">1.05</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8.71</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// hypotenuse = 10.041234478169912</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Enums</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">hypotenuse</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Trigonometry.</span><span style="color:#6F42C1;">GetHypotenuseFrom</span><span style="color:#24292E;">(TriangleSides.Opposed, </span><span style="color:#005CC5;">1.05</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">8.71</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// hypotenuse = 10.041234478169912</span></span></code></pre></div>`,31),l=[t];function p(r,c,d,i,h,y){return e(),a("div",null,l)}const u=s(o,[["render",p]]);export{g as __pageData,u as default};
