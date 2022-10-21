import{_ as s,c as n,o as a,a as o}from"./app.d958ad35.js";const D=JSON.parse('{"title":"WinForms","description":"","frontmatter":{},"headers":[{"level":2,"title":"Compatibility","slug":"compatibility","link":"#compatibility","children":[]},{"level":2,"title":"Methods","slug":"methods","link":"#methods","children":[{"level":3,"title":"CenterControl(control, form)","slug":"centercontrol-control-form","link":"#centercontrol-control-form","children":[]},{"level":3,"title":"CenterControl(control, form, controlAlignment)","slug":"centercontrol-control-form-controlalignment","link":"#centercontrol-control-form-controlalignment","children":[]},{"level":3,"title":"CenterForm(form)","slug":"centerform-form","link":"#centerform-form","children":[]}]}],"relativePath":"ui-helpers/winforms.md","lastUpdated":1666359224000}'),e={name:"ui-helpers/winforms.md"},l=o(`<h1 id="winforms" tabindex="-1">WinForms <a class="header-anchor" href="#winforms" aria-hidden="true">#</a></h1><p>This page is about the <code>ScreenHelpers</code> class available in <a href="./../ui-helpers.html"><code>PeyrSharp.UiHelpers</code></a>. This page is about all of its methods.</p><h2 id="compatibility" tabindex="-1">Compatibility <a class="header-anchor" href="#compatibility" aria-hidden="true">#</a></h2><p>WinFormsHelpers are part of the <code>PeyrSharp.UiHelpers</code> module, which is compatible with all of these frameworks and platforms:</p><table><thead><tr><th>Package/Platform</th><th>Windows</th><th>macOS</th><th>Linux + others</th></tr></thead><tbody><tr><td>UiHelpers</td><td>\u2705</td><td>\u274C</td><td>\u274C</td></tr><tr><td><strong>Framework</strong></td><td><strong>.NET 5</strong></td><td><strong>.NET 6</strong></td><td><strong>.NET 7</strong></td></tr><tr><td>UiHelpers</td><td>\u2705</td><td>\u274C</td><td>\u274C</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="centercontrol-control-form" tabindex="-1">CenterControl(control, form) <a class="header-anchor" href="#centercontrol-control-form" aria-hidden="true">#</a></h3><h4 id="definition" tabindex="-1">Definition <a class="header-anchor" href="#definition" aria-hidden="true">#</a></h4><p>Centers horizontally and vertically a <code>Control</code> on a <code>Form</code>.</p><h4 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Control</code></td><td><code>control</code></td><td>The control to center.</td></tr><tr><td><code>Form</code></td><td><code>form</code></td><td>The form where the control needs to be centered.</td></tr></tbody></table><h4 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h4><div class="language-c#"><button class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.UiHelpers</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Windows.Forms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">partial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyForm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Form</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HandleButton</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">sender</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        WinFormsHelpers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CenterControl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="centercontrol-control-form-controlalignment" tabindex="-1">CenterControl(control, form, controlAlignment) <a class="header-anchor" href="#centercontrol-control-form-controlalignment" aria-hidden="true">#</a></h3><h4 id="definition-1" tabindex="-1">Definition <a class="header-anchor" href="#definition-1" aria-hidden="true">#</a></h4><p>Centers a <code>Control</code> on a <code>Form</code>, with a specific <a href="/enumerations.html#controlalignment"><code>ControlAlignment</code></a>.</p><h4 id="arguments-1" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-1" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Control</code></td><td><code>control</code></td><td>The control to center.</td></tr><tr><td><code>Form</code></td><td><code>form</code></td><td>The form where the control needs to be centered.</td></tr><tr><td><code>ControlAlignment</code></td><td><code>controlAlignment</code></td><td>The alignment of the control.</td></tr></tbody></table><h4 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h4><div class="language-c#"><button class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.Enums</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.UiHelpers</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Windows.Forms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">partial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyForm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Form</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HandleButton</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Button</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">sender</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// Center the button vertically</span></span>
<span class="line"><span style="color:#A6ACCD;">        WinFormsHelpers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CenterControl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ControlAlignment</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Vertical</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="centerform-form" tabindex="-1">CenterForm(form) <a class="header-anchor" href="#centerform-form" aria-hidden="true">#</a></h3><h4 id="definition-2" tabindex="-1">Definition <a class="header-anchor" href="#definition-2" aria-hidden="true">#</a></h4><p>Centers horizontally and vertically a <code>Form</code> on the screen.</p><h4 id="arguments-2" tabindex="-1">Arguments <a class="header-anchor" href="#arguments-2" aria-hidden="true">#</a></h4><table><thead><tr><th>Type</th><th>Name</th><th>Meaning</th></tr></thead><tbody><tr><td><code>Form</code></td><td><code>form</code></td><td>The form to center.</td></tr></tbody></table><h4 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h4><div class="language-c#"><button class="copy"></button><span class="lang">c#</span><pre><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> PeyrSharp.UiHelpers</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> System.Windows.Forms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">partial</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyForm</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Form</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HandleButton</span><span style="color:#89DDFF;">(object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// Put the current form in the middle of the screen</span></span>
<span class="line"><span style="color:#A6ACCD;">        WinFormsHelpers</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">CenterForm</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,27),t=[l];function r(p,c,i,d,C,y){return a(),n("div",null,t)}const h=s(e,[["render",r]]);export{D as __pageData,h as default};
