import{_ as t,o as e,c as a,Q as s}from"./chunks/framework.b637c96f.js";const b=JSON.parse('{"title":"StatusInfo","description":"","frontmatter":{},"headers":[],"relativePath":"core/statusinfo.md","filePath":"core/statusinfo.md","lastUpdated":1683446294000}'),o={name:"core/statusinfo.md"},i=s('<h1 id="statusinfo" tabindex="-1">StatusInfo <a class="header-anchor" href="#statusinfo" aria-label="Permalink to &quot;StatusInfo&quot;">​</a></h1><p>This page is about the <code>StatusInfo</code> class available in <a href="/core.html"><code>PeyrSharp.Core</code></a>. You can find here all of its methods.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>StatusInfo</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="statuscode" tabindex="-1">StatusCode <a class="header-anchor" href="#statuscode" aria-label="Permalink to &quot;StatusCode&quot;">​</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> int StatusCode { get; set; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> int StatusCode { get; set; }</span></span></code></pre></div><p>Gets or sets the status code that indicates the outcome of the request.</p><h3 id="statusdescription" tabindex="-1">StatusDescription <a class="header-anchor" href="#statusdescription" aria-label="Permalink to &quot;StatusDescription&quot;">​</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> string StatusDescription { get; set; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> string StatusDescription { get; set; }</span></span></code></pre></div><p>Gets or sets the status description that provides a human-readable message of the status code.</p><h3 id="statustype" tabindex="-1">StatusType <a class="header-anchor" href="#statustype" aria-label="Permalink to &quot;StatusType&quot;">​</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-label="Permalink to &quot;Definition&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> StatusCodes StatusType { get; set; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> StatusCodes StatusType { get; set; }</span></span></code></pre></div><p>Gets or sets the status type that categorizes the status code into informational, success, redirection, client error, or server error. The <a href="/enumerations.html#statuscodes"><code>StatusCodes</code></a> is an enumeration representing the type of HTTP status codes that can be returned.</p>',18),n=[i];function r(d,c,l,p,h,u){return e(),a("div",null,n)}const g=t(o,[["render",r]]);export{b as __pageData,g as default};
