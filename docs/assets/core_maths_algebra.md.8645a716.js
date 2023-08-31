import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.b637c96f.js";const u=JSON.parse('{"title":"Algebra","description":"","frontmatter":{},"headers":[],"relativePath":"core/maths/algebra.md","filePath":"core/maths/algebra.md","lastUpdated":1666370076000}'),o={name:"core/maths/algebra.md"},l=e(`<h1 id="algebra" tabindex="-1">Algebra <a class="header-anchor" href="#algebra" aria-label="Permalink to &quot;Algebra&quot;">​</a></h1><p>This page is about the <code>Algebra</code> class available in <a href="/core/maths.html"><code>PeyrSharp.Core.Maths</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Algebra</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="sum-numbers-double" tabindex="-1">Sum(numbers) (double) <a class="header-anchor" href="#sum-numbers-double" aria-label="Permalink to &quot;Sum(numbers) (double)&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Returns the sum of specified <code>double</code> numbers. It returns a <code>double</code> value.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>params double[]</code></td><td><code>numbers</code></td><td>The numbers to do the sum of.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Usage 1</span></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">Sum</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2.2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// sum = 60.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Usage 2</span></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">numbers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">double</span><span style="color:#E1E4E8;">[] { </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">Sum</span><span style="color:#E1E4E8;">(numbers);</span></span>
<span class="line"><span style="color:#6A737D;">// sum = 6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Usage 1</span></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">Sum</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2.2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// sum = 60.7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Usage 2</span></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">numbers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">double</span><span style="color:#24292E;">[] { </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">Sum</span><span style="color:#24292E;">(numbers);</span></span>
<span class="line"><span style="color:#6A737D;">// sum = 6</span></span></code></pre></div><h3 id="sum-numbers-int" tabindex="-1">Sum(numbers) (int) <a class="header-anchor" href="#sum-numbers-int" aria-label="Permalink to &quot;Sum(numbers) (int)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Returns the sum of specified <code>int</code> numbers. It returns a <code>int</code> value.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>params int[]</code></td><td><code>numbers</code></td><td>The numbers to do the sum of.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Usage 1</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">Sum</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// sum = 74</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Usage 2</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">numbers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">[] { </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">Sum</span><span style="color:#E1E4E8;">(numbers);</span></span>
<span class="line"><span style="color:#6A737D;">// sum = 6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Usage 1</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">Sum</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// sum = 74</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Usage 2</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">numbers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">int</span><span style="color:#24292E;">[] { </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">Sum</span><span style="color:#24292E;">(numbers);</span></span>
<span class="line"><span style="color:#6A737D;">// sum = 6</span></span></code></pre></div><h3 id="isint-number" tabindex="-1">IsInt(number) <a class="header-anchor" href="#isint-number" aria-label="Permalink to &quot;IsInt(number)&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Returns <code>true</code> if a specified <code>double</code> is an integer. It returns a <code>bool</code> value.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>number</code></td><td>The number to check.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isInt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">IsInt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">12.0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// isInt = true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isInt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">IsInt</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">12.0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// isInt = true</span></span></code></pre></div><h3 id="getopposite-number" tabindex="-1">GetOpposite(number) <a class="header-anchor" href="#getopposite-number" aria-label="Permalink to &quot;GetOpposite(number)&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the opposite of a <code>double</code> number. It returns a <code>double</code> value.</p><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>number</code></td><td>The number to get the opposite of.</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">opposite</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">Opposite</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// opposite = -7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">opposite</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">Opposite</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// opposite = -7</span></span></code></pre></div><h3 id="factorial-number" tabindex="-1">Factorial(number) <a class="header-anchor" href="#factorial-number" aria-label="Permalink to &quot;Factorial(number)&quot;">​</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the factorial of an <code>int</code> number. It returns an <code>int</code>.</p><h4 id="arguments-4" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-4" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>int</code></td><td><code>number</code></td><td>The number to get the factorial of.</td></tr></tbody></table><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">factorial</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">Factorial</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// factorial = 120</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">factorial</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">Factorial</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// factorial = 120</span></span></code></pre></div><h3 id="positiveof-number" tabindex="-1">PositiveOf(number) <a class="header-anchor" href="#positiveof-number" aria-label="Permalink to &quot;PositiveOf(number)&quot;">​</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the positive of a <code>double</code> number. It returns a <code>double</code> value.</p><h4 id="arguments-5" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-5" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>number</code></td><td>The number to get the positive of.</td></tr></tbody></table><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pos</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">PositiveOf</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// pos = 7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pos</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">PositiveOf</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// pos = 7</span></span></code></pre></div><h3 id="negativeof-number" tabindex="-1">NegativeOf(number) <a class="header-anchor" href="#negativeof-number" aria-label="Permalink to &quot;NegativeOf(number)&quot;">​</a></h3><h4 id="definition-6" tabindex="-1">Definition <a class="header-anchor" href="#definition-6" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the negative of a <code>double</code> number. It returns a <code>double</code> value.</p><h4 id="arguments-6" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-6" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>double</code></td><td><code>number</code></td><td>The number to get the negative of.</td></tr></tbody></table><h4 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">negative</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">NegativeOf</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// negative = -7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">negative</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">NegativeOf</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// negative = -7</span></span></code></pre></div><h3 id="getresultsof-function-numbers" tabindex="-1">GetResultsOf(function, numbers) <a class="header-anchor" href="#getresultsof-function-numbers" aria-label="Permalink to &quot;GetResultsOf(function, numbers)&quot;">​</a></h3><h4 id="definition-7" tabindex="-1">Definition <a class="header-anchor" href="#definition-7" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the results of a function applied to specific <code>double</code> numbers. It returns an array of <code>double[]</code>.</p><h4 id="arguments-7" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-7" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Func&lt;double, double&gt;</code></td><td><code>function</code></td><td>The function to apply to all numbers. It must return a double and take a double as an argument.</td></tr><tr><td><code>params double[]</code></td><td><code>numbers</code></td><td>The numbers to get the results of.</td></tr></tbody></table><h4 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Maths</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Algebra.</span><span style="color:#B392F0;">GetResultsOf</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> x, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// res = double[] { 1, 4, 9, 16 }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Maths</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Algebra.</span><span style="color:#6F42C1;">GetResultsOf</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> x, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// res = double[] { 1, 4, 9, 16 }</span></span></code></pre></div>`,63),p=[l];function t(r,c,i,y,d,E){return a(),n("div",null,p)}const b=s(o,[["render",t]]);export{u as __pageData,b as default};
