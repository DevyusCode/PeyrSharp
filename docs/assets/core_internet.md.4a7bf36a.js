import{_ as s,c as a,o as n,R as e}from"./chunks/framework.bdd825cc.js";const F=JSON.parse('{"title":"Internet","description":"","frontmatter":{},"headers":[],"relativePath":"core/internet.md","filePath":"core/internet.md","lastUpdated":1683446294000}'),t={name:"core/internet.md"},o=e(`<h1 id="internet" tabindex="-1">Internet <a class="header-anchor" href="#internet" aria-label="Permalink to &quot;Internet&quot;">​</a></h1><p>This page is about the <code>Internet</code> class available in <a href="/core.html"><code>PeyrSharp.Core</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Internet</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="isavailableasync" tabindex="-1">IsAvailableAsync() <a class="header-anchor" href="#isavailableasync" aria-label="Permalink to &quot;IsAvailableAsync()&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Checks if a connection to the Internet is available. Returns a <code>bool</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method is asynchronous and awaitable.</p></div><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><p>This method has no arguments</p><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">isConnected</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsAvailableAsync</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="isavailableasync-url" tabindex="-1">IsAvailableAsync(url) <a class="header-anchor" href="#isavailableasync-url" aria-label="Permalink to &quot;IsAvailableAsync(url)&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Checks if a connection to the Internet is available. Returns a <code>bool</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method is asynchronous and awaitable.</p></div><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>url</code></td><td>The page where to check if Internet is available.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">isConnected</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">IsAvailableAsync</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://google.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="getstatuscodeasync-url" tabindex="-1">GetStatusCodeAsync(url) <a class="header-anchor" href="#getstatuscodeasync-url" aria-label="Permalink to &quot;GetStatusCodeAsync(url)&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the status code of a specific page by making a request to it. Returns the status code as an <code>int</code> value.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method is asynchronous and awaitable.</p></div><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>url</code></td><td>The URL where to send the request.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetStatusCodeAsync</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://google.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// status should be 200 if everything is working</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="getstatusdescriptionasync-url" tabindex="-1">GetStatusDescriptionAsync(url) <a class="header-anchor" href="#getstatusdescriptionasync-url" aria-label="Permalink to &quot;GetStatusDescriptionAsync(url)&quot;">​</a></h3><h4 id="definition-3" tabindex="-1">Definition <a class="header-anchor" href="#definition-3" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the status description of a specific page by making a request to it. Returns the status description as a <code>string</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This method is asynchronous and awaitable.</p></div><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>url</code></td><td>The URL where to send the request.</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetStatusDescriptionAsync</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://google.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// status should be OK if everything is working</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="getstatusinfoasync-url" tabindex="-1">GetStatusInfoAsync(url) <a class="header-anchor" href="#getstatusinfoasync-url" aria-label="Permalink to &quot;GetStatusInfoAsync(url)&quot;">​</a></h3><h4 id="definition-4" tabindex="-1">Definition <a class="header-anchor" href="#definition-4" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>This method sends an HTTP GET request to a given URL and returns a <code>Task</code> of <a href="/core/statusinfo.html"><code>StatusInfo</code></a> object that contains the status code, description, and type of the URL. The HTTP request method used is <code>HttpClient.GetAsync()</code>.</p><h4 id="arguments-4" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-4" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>url</code></td><td>The URL to get the status info from.</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>A <code>Task</code> of <a href="/core/statusinfo.html"><code>StatusInfo</code></a> object containing the status code, description, and type of the URL.</p><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">StatusInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">statusInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetStatusInfoAsync</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.google.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="getstatuscodetype-statuscode" tabindex="-1">GetStatusCodeType(statusCode) <a class="header-anchor" href="#getstatuscodetype-statuscode" aria-label="Permalink to &quot;GetStatusCodeType(statusCode)&quot;">​</a></h3><h4 id="definition-5" tabindex="-1">Definition <a class="header-anchor" href="#definition-5" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the type of the status code. Returns a <a href="/enumerations.html#statuscodes"><code>StatusCodes</code></a> value.</p><h4 id="arguments-5" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-5" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>int</code></td><td><code>statusCode</code></td><td>The status code to analyze.</td></tr></tbody></table><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Enums</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">await</span><span style="color:#A6ACCD;"> Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetStatusCodeAsync</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://google.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">switch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetStatusCodeType</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> StatusCodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Informational</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">An information status code has been returned.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> StatusCodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Success</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">An successful status code has been returned.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> StatusCodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Redirection</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">An redirection status code has been returned.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> StatusCodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ClientError</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">An client error status code has been returned.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#A6ACCD;"> StatusCodes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ServerError</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            Console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">An server error status code has been returned.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="geturlprotocol-url" tabindex="-1">GetUrlProtocol(url) <a class="header-anchor" href="#geturlprotocol-url" aria-label="Permalink to &quot;GetUrlProtocol(url)&quot;">​</a></h3><h4 id="definition-6" tabindex="-1">Definition <a class="header-anchor" href="#definition-6" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Gets the protocol of a specified URL. Returns a <code>string</code>.</p><h4 id="arguments-6" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-6" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>url</code></td><td>The URL where to parse.</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you provide an invalid URL, the result might be wrong or be something unexpected. An <code>IndexOutOfRangeException</code> can also be thrown.</p></div><h4 id="usage-6" tabindex="-1">Usage <a class="header-anchor" href="#usage-6" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">protocol</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetUrlProtocol</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://leocorporation.dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// protocol = https</span></span></code></pre></div><h3 id="isurlvalid-url" tabindex="-1">IsUrlValid(url) <a class="header-anchor" href="#isurlvalid-url" aria-label="Permalink to &quot;IsUrlValid(url)&quot;">​</a></h3><h4 id="definition-7" tabindex="-1">Definition <a class="header-anchor" href="#definition-7" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><p>Checks if a URL is valid or not.. Returns a <code>bool</code>.</p><h4 id="arguments-7" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-7" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>url</code></td><td>The URL where to check.</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you haven&#39;t specified the protocol in the URL (ex: &quot;https://&quot;), the <code>&quot;https://&quot;</code> string will automatically be appended to the original URL. To avoid this behavior, please specify a full URL to preserve the original protocol.</p></div><h4 id="usage-7" tabindex="-1">Usage <a class="header-anchor" href="#usage-7" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c#"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Core</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">valid</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Internet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">GetUrlProtocol</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a/test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// valid = false</span></span></code></pre></div>`,71),l=[o];function p(r,c,i,d,y,D){return n(),a("div",null,l)}const u=s(t,[["render",p]]);export{F as __pageData,u as default};
