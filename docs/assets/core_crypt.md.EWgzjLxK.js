import{_ as s,o as a,c as n,Q as e}from"./chunks/framework._KetfzzT.js";const u=JSON.parse('{"title":"Crypt","description":"","frontmatter":{},"headers":[],"relativePath":"core/crypt.md","filePath":"core/crypt.md","lastUpdated":1700306874000}'),t={name:"core/crypt.md"},o=e(`<h1 id="crypt" tabindex="-1">Crypt <a class="header-anchor" href="#crypt" aria-label="Permalink to &quot;Crypt&quot;">​</a></h1><p>This page is about the <code>Crypt</code> class available in <a href="/core.html"><code>PeyrSharp.Core</code></a>. You can find here all of its methods.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This class is <code>static</code>.</p></div><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-label="Permalink to &quot;Compatibility&quot;">​</a></h2><p>The <code>Crypt</code> class is part of the <code>PeyrSharp.Core</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td><td><strong>.NET 8</strong></td></tr><tr><td>Core</td><td>✅</td><td>✅</td><td>✅</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="encryptaes-str-key" tabindex="-1">EncryptAes(str, key) <a class="header-anchor" href="#encryptaes-str-key" aria-label="Permalink to &quot;EncryptAes(str, key)&quot;">​</a></h3><h4 id="definitions" tabindex="-1">Definitions <a class="header-anchor" href="#definitions" aria-label="Permalink to &quot;Definitions&quot;">​</a></h4><p>Encrypts a <code>string</code> using AES encryption. Returns the encrypted content as a <code>string</code> as well.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>str</code></td><td>The text to encrypt.</td></tr><tr><td><code>string</code></td><td><code>key</code></td><td>The encryption key. This is the same key that will be used to decrypt the text.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encrypted</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Crypt.</span><span style="color:#B392F0;">EncryptAes</span><span style="color:#E1E4E8;">(text, </span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// encrypted = 8U0HRr7pCIdbvBIquiJaLc00fyBjXDb9sLflk5anIi8=</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello, world!&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encrypted</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Crypt.</span><span style="color:#6F42C1;">EncryptAes</span><span style="color:#24292E;">(text, </span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// encrypted = 8U0HRr7pCIdbvBIquiJaLc00fyBjXDb9sLflk5anIi8=</span></span></code></pre></div><h3 id="encryptrsa-str-rsaparameters" tabindex="-1">EncryptRsa(str, rsaParameters) <a class="header-anchor" href="#encryptrsa-str-rsaparameters" aria-label="Permalink to &quot;EncryptRsa(str, rsaParameters)&quot;">​</a></h3><h4 id="definitions-1" tabindex="-1">Definitions <a class="header-anchor" href="#definitions-1" aria-label="Permalink to &quot;Definitions&quot;">​</a></h4><p>Encrypts a <code>string</code> using RSA encryption. Returns the encrypted content as an array of <code>byte</code> (<code>byte[]</code>).</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>str</code></td><td>The text to encrypt.</td></tr><tr><td><code>RSAParameters</code></td><td><code>rsaParameters</code></td><td>The RSA key.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Security</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Cryptography</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Create the RSA key</span></span>
<span class="line"><span style="color:#B392F0;">RSACryptoServiceProvider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cryptoServiceProvider</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RSACryptoServiceProvider</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Encrypt using RSA</span></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encrypted</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Crypt.</span><span style="color:#B392F0;">EncryptRsa</span><span style="color:#E1E4E8;">(text, cryptoServiceProvider.</span><span style="color:#B392F0;">ExportParameters</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Security</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Cryptography</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello, world!&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Create the RSA key</span></span>
<span class="line"><span style="color:#6F42C1;">RSACryptoServiceProvider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cryptoServiceProvider</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RSACryptoServiceProvider</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Encrypt using RSA</span></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encrypted</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Crypt.</span><span style="color:#6F42C1;">EncryptRsa</span><span style="color:#24292E;">(text, cryptoServiceProvider.</span><span style="color:#6F42C1;">ExportParameters</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">));</span></span></code></pre></div><h3 id="encrypt3des-source-key" tabindex="-1">Encrypt3Des(source, key) <a class="header-anchor" href="#encrypt3des-source-key" aria-label="Permalink to &quot;Encrypt3Des(source, key)&quot;">​</a></h3><h4 id="definitions-2" tabindex="-1">Definitions <a class="header-anchor" href="#definitions-2" aria-label="Permalink to &quot;Definitions&quot;">​</a></h4><p>Encrypts a <code>string</code> using AES encryption. Returns the encrypted content as a <code>string</code> as well.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>source</code></td><td>The text to encrypt.</td></tr><tr><td><code>string</code></td><td><code>key</code></td><td>The encryption key. This is the same key that will be used to decrypt the text.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encrypted</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Crypt.</span><span style="color:#B392F0;">Encrypt3Des</span><span style="color:#E1E4E8;">(text, </span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// encrypted = bxceEpCfRlbyYdPggAu+Cw==</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello, world!&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encrypted</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Crypt.</span><span style="color:#6F42C1;">Encrypt3Des</span><span style="color:#24292E;">(text, </span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// encrypted = bxceEpCfRlbyYdPggAu+Cw==</span></span></code></pre></div><h3 id="decryptaes-str-key" tabindex="-1">DecryptAes(str, key) <a class="header-anchor" href="#decryptaes-str-key" aria-label="Permalink to &quot;DecryptAes(str, key)&quot;">​</a></h3><h4 id="definitions-3" tabindex="-1">Definitions <a class="header-anchor" href="#definitions-3" aria-label="Permalink to &quot;Definitions&quot;">​</a></h4><p>Decrypts a <code>string</code> using AES encryption. Returns the decrypted content as a <code>string</code> as well.</p><h4 id="arguments-3" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-3" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>str</code></td><td>The text to decrypt.</td></tr><tr><td><code>string</code></td><td><code>key</code></td><td>The encryption key that was used during the encryption process.</td></tr></tbody></table><h4 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encrypted</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;6NvvTBntd2PdFxXzVbccLw==&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Crypt.</span><span style="color:#B392F0;">DecryptAes</span><span style="color:#E1E4E8;">(encrypted, </span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// text = Hello!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encrypted</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;6NvvTBntd2PdFxXzVbccLw==&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Crypt.</span><span style="color:#6F42C1;">DecryptAes</span><span style="color:#24292E;">(encrypted, </span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// text = Hello!</span></span></code></pre></div><h3 id="decryptrsa-encrypted-rsaparameters" tabindex="-1">DecryptRsa(encrypted, rsaParameters) <a class="header-anchor" href="#decryptrsa-encrypted-rsaparameters" aria-label="Permalink to &quot;DecryptRsa(encrypted, rsaParameters)&quot;">​</a></h3><h4 id="definitions-4" tabindex="-1">Definitions <a class="header-anchor" href="#definitions-4" aria-label="Permalink to &quot;Definitions&quot;">​</a></h4><p>Decrypts a <code>string</code> using AES encryption. Returns the decrypted content as a <code>string</code> as well.</p><h4 id="arguments-4" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-4" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>byte[]</code></td><td><code>encrypted</code></td><td>The text to decrypt.</td></tr><tr><td><code>RSAParameters</code></td><td><code>rsaParameters</code></td><td>The encryption key that was used during the encryption process.</td></tr></tbody></table><h4 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Security</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Cryptography</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">RSACryptoServiceProvider</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cryptoServiceProvider</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RSACryptoServiceProvider</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Crypt.</span><span style="color:#B392F0;">EncryptRsa</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello&quot;</span><span style="color:#E1E4E8;">, cryptoServiceProvider.</span><span style="color:#B392F0;">ExportParameters</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">decrypted</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Crypt.</span><span style="color:#B392F0;">DecryptRsa</span><span style="color:#E1E4E8;">(e, cryptoServiceProvider.</span><span style="color:#B392F0;">ExportParameters</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#6A737D;">// decrypted = Hello</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Security</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Cryptography</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">RSACryptoServiceProvider</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cryptoServiceProvider</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RSACryptoServiceProvider</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">byte</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Crypt.</span><span style="color:#6F42C1;">EncryptRsa</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Hello&quot;</span><span style="color:#24292E;">, cryptoServiceProvider.</span><span style="color:#6F42C1;">ExportParameters</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">decrypted</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Crypt.</span><span style="color:#6F42C1;">DecryptRsa</span><span style="color:#24292E;">(e, cryptoServiceProvider.</span><span style="color:#6F42C1;">ExportParameters</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#6A737D;">// decrypted = Hello</span></span></code></pre></div><h3 id="decrypt3des-str-key" tabindex="-1">Decrypt3Des(str, key) <a class="header-anchor" href="#decrypt3des-str-key" aria-label="Permalink to &quot;Decrypt3Des(str, key)&quot;">​</a></h3><h4 id="definitions-5" tabindex="-1">Definitions <a class="header-anchor" href="#definitions-5" aria-label="Permalink to &quot;Definitions&quot;">​</a></h4><p>Decrypts a <code>string</code> using 3-DES encryption. Returns the decrypted content as a <code>string</code> as well.</p><h4 id="arguments-5" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-5" aria-label="Permalink to &quot;Arguments&quot;">​</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>encrypt</code></td><td>The text to decrypt.</td></tr><tr><td><code>string</code></td><td><code>key</code></td><td>The encryption key that was used during the encryption process.</td></tr></tbody></table><h4 id="usage-5" tabindex="-1">Usage <a class="header-anchor" href="#usage-5" aria-label="Permalink to &quot;Usage&quot;">​</a></h4><div class="language-c# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeyrSharp</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Core</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">encrypted</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;AvuLd4LUxRU=&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Crypt.</span><span style="color:#B392F0;">Decrypt3Des</span><span style="color:#E1E4E8;">(encrypted, </span><span style="color:#9ECBFF;">&quot;123&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// text = Hello</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeyrSharp</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Core</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">encrypted</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;AvuLd4LUxRU=&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Crypt.</span><span style="color:#6F42C1;">Decrypt3Des</span><span style="color:#24292E;">(encrypted, </span><span style="color:#032F62;">&quot;123&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// text = Hello</span></span></code></pre></div>`,49),p=[o];function l(r,c,y,i,d,E){return a(),n("div",null,p)}const g=s(t,[["render",l]]);export{u as __pageData,g as default};