import{a as b,b as C,c as I,e as _,f as pe,g as fe,h as ve,i as we,j as ge,k as ye,l as be,m as J}from"./chunk-6H4IYY4Q.js";import{$ as Ce,A as T,B as K,C as h,D as Ee,E,F as U,G as j,H as Ae,I as X,K as G,L as Le,M as ke,P as xe,Q as Te,R as Se,S as Re,T as He,U as qe,V as Me,W as Oe,X as Ne,Y as Pe,Z as Ie,_ as Ue,a as je,aa as Xe,b as d,ba as ze,ca as Be,d as Q,f as S,g as De,l as z,m as A,n as $e,o as m,p as V,q as R,r as B,s as We,t as Ye,u as Z,v as D,w as Fe,x as H,y as w,z as ee}from"./chunk-D2C5I5KB.js";import"./chunk-PMT4A7EC.js";import{c as p}from"./chunk-K7QPVK44.js";p(),p(),p(),$e();var q=(e,t)=>{h.hasClass("on")?(h.removeClass("on"),T.removeClass("close"),t?h.style="":b(h,"slideRightOut")):t?h.style="":b(h,"slideRightIn",()=>{h.addClass("on"),T.addClass("close")})},_e=()=>{let e=A(h,".inner");h.child(".tab")&&e.removeChild(h.child(".tab"));let t=document.createElement("ul"),s="active";t.className="tab",["contents","related","overview"].forEach(a=>{let i=h.child(".panel."+a);if(i.innerHTML.trim().length<1){a==="contents"&&z(X,"none");return}a==="contents"&&z(X,"");let n=document.createElement("li"),r=document.createElement("span"),o=document.createTextNode(i.getAttribute("data-title"));r.appendChild(o),n.appendChild(r),n.addClass(a+" item"),s?(i.addClass(s),n.addClass(s)):i.removeClass("active"),n.addEventListener("click",l=>{let c=l.currentTarget;c.hasClass("active")||(h.find(".tab .item").forEach(u=>{u.removeClass("active")}),h.find(".panel").forEach(u=>{u.removeClass("active")}),h.child(".panel."+c.className.replace(" item","")).addClass("active"),c.addClass("active"))}),t.appendChild(n),s=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),h.child(".panels").style.paddingTop=""):h.child(".panels").style.paddingTop=".625rem"},Je=()=>{let e=r=>{let o=t[r];if(!o||o.hasClass("current"))return;d.each(".toc .active",c=>{c&&c.removeClass("active current")}),s.forEach(c=>{c&&c.removeClass("active")}),o.addClass("active current"),s[r]&&s[r].addClass("active");let l=o.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let c=d(l.child("a.toc-link").getAttribute("href"));c&&c.addClass("active")}l=l.parentNode}getComputedStyle(h).display!=="none"&&i.hasClass("active")&&C(i,o.offsetTop-i.offsetHeight/4)},t=d.all(".contents li");if(t.length<1)return;let s=[...t],a=null;s=s.map((r,o)=>{let l=r.child("a.toc-link"),c=d(decodeURI(l.getAttribute("href")));if(!c)return null;let u=c.child("a.anchor"),x=f=>{f.preventDefault();let P=d(decodeURI(f.currentTarget.getAttribute("href")));a=o,C(P,null,()=>{e(o),a=null})};return l.addEventListener("click",x),u&&u.addEventListener("click",f=>{x(f),fe(m.hostname+"/"+LOCAL.path+f.currentTarget.getAttribute("href"))}),c});let i=h.child(".contents.panel"),n=r=>{let o=0,l=r[o];if(l.boundingClientRect.top>0)return o=s.indexOf(l.target),o===0?0:o-1;for(;o<r.length;o++)if(r[o].boundingClientRect.top<=0)l=r[o];else return s.indexOf(l.target);return s.indexOf(l.target)};(()=>{let r=new IntersectionObserver(o=>{let l=n(o)+(B<0?1:0);a===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});s.forEach(o=>{o&&r.observe(o)})})()},te=()=>{C(0)},Ke=()=>{C(parseInt(String(S(Fe))))},Ge=()=>{C(d("#comments"))},Qe=()=>{d.each(".menu .item:not(.title)",e=>{let t=e.child("a[href]"),s=e.parentNode.parentNode;if(!t)return;let a=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),i=!m.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),n=!t.onclick&&t.hostname===location.hostname&&(a||i);e.toggleClass("active",n),e.parentNode.child(".active")&&s.hasClass("dropdown")?s.removeClass("active").addClass("expand"):s.removeClass("expand")})};p();var g={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),H.setAttribute("style","display:block"),g.lock=!1},hide(e){m.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){g.lock||(m.loader.start&&b(H,0),document.body.addClass("loaded"),g.lock=!0)}};function Ve(){d.each(".overview .menu > .item",e=>{A(w,".menu").appendChild(e.cloneNode(!0))}),H.addEventListener("click",g.vanish),T.addEventListener("click",q),d(".dimmer").addEventListener("click",q),A(K,".down").addEventListener("click",Ke),A(K,".up").addEventListener("click",te),E||Be(Q(ee,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),Ue(E.child(".player")),Ce(E.child(".back-to-top")),Xe(E.child(".chat")),ze(E.child(".contents")),j.addEventListener("click",te),Ae.addEventListener("click",Ge),X.addEventListener("click",q),we(U),d("main").addEventListener("click",()=>{U.player.mini()}),new IntersectionObserver(([e])=>{e.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([e])=>{e.isIntersecting?document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))}p(),p();var Ze=()=>{if(!d(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(s=>{s.target.hasClass("show")?e.unobserve(s.target):(s.isIntersecting||s.intersectionRatio>0)&&(s.target.addClass("show"),e.unobserve(s.target))})},{root:null,threshold:[.3]});d.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),d(".index.wrap .item:first-child").addClass("show"),d.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(s=>{t.addEventListener(s,()=>{d(".cards .item.active")&&d(".cards .item.active").removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(s=>{t.addEventListener(s,()=>{t.removeClass("active")},{passive:!0})})})};p(),p();var v=e=>{let t=d(".theme .ic");e==="dark"?(D.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(D.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},et=()=>{m.auto_dark.enable&&(new Date().getHours()>=m.auto_dark.start||new Date().getHours()<=m.auto_dark.end?v("dark"):v())},se=e=>{D.getAttribute("data-theme")==="dark"&&(e="#222"),d('meta[name="theme-color"]').setAttribute("content",e)},tt=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?v("dark"):v()});let e=I.get("theme");e?v(e):m.darkmode&&v("dark")},ae=()=>{xe(S(w)),Te(S(ee)),Se(G+S(d("#waves"))),ke!==window.innerWidth&&q(null,1),Re(window.innerHeight),He(window.innerWidth)},st=()=>{let e=window.innerHeight,t=je(),s=t>e?t-e:document.body.scrollHeight-e,a=window.scrollY>G,i=window.scrollY>0;se(a?"#FFF":"#222"),w.toggleClass("show",a),E.toggleClass("affix",i),Ee.toggleClass("affix",i),h.toggleClass("affix",window.scrollY>Le&&document.body.offsetWidth>991),typeof R.y>"u"&&(R.y=window.scrollY),qe(R.y-window.scrollY),B<0?(w.removeClass("up"),w.toggleClass("down",a)):B>0&&(w.removeClass("down"),w.toggleClass("up",a)),R.y=window.scrollY;let n=Math.round(Math.min(100*window.scrollY/s,100))+"%";j.child("span").innerText!==n&&(j.child("span").innerText=n),(d("#sidebar").hasClass("affix")||d("#sidebar").hasClass("on"))&&De(d(".percent"),n)},at=()=>{let e=d('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",V+m.favicon.hidden),document.title=LOCAL.favicon.hide,m.loader.switch&&g.show(),clearTimeout(Ye);break;case"visible":e.setAttribute("href",V+m.favicon.normal),document.title=LOCAL.favicon.show,m.loader.switch&&g.hide(1e3),Me(setTimeout(()=>{document.title=We},2e3));break}},{passive:!0})};p(),p(),p(),p();var oe=typeof window>"u",ot=!oe&&"loading"in HTMLImageElement.prototype,it=!oe&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function nt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function rt(e,t){let s;return function(...a){s&&clearTimeout(s),s=setTimeout(()=>{s=void 0,e(...a)},t)}}var lt=32,ct="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",dt=Math.PI,qt=dt*2;function ht(e='img[loading="lazy"]',{hash:t=!0,hashType:s="blurhash",placeholderSize:a=lt,updateSizesOnResize:i=!1,onImageLoad:n}={}){let r=new Set;for(let o of nt(e)){let l=$(o,{updateOnResize:i});if(i&&l&&r.add(l),!o.dataset.src&&!o.dataset.srcset)continue;if(it||!ot){ne(o),Y(o),W(o);continue}if(o.src||(o.src=ct),o.complete&&o.naturalWidth>0){ie(o,n);continue}let c=()=>ie(o,n);o.addEventListener("load",c,{once:!0}),r.add(()=>o.removeEventListener("load",c))}return()=>{for(let o of r)o();r.clear()}}function ie(e,t){let s=new Image,{srcset:a,src:i,sizes:n}=e.dataset;if(n==="auto"){let r=re(e);r&&(s.sizes=`${r}px`)}else e.sizes&&(s.sizes=e.sizes);a&&(s.srcset=a),i&&(s.src=i),s.addEventListener("load",()=>{ne(e),Y(e),W(e),t?.(e)})}var M=new WeakMap;function $(e,t){if(e.dataset.sizes!=="auto")return;let s=re(e);if(s&&(e.sizes=`${s}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(a=>$(a,{skipChildren:!0})),t?.updateOnResize){if(!M.has(e)){let a=rt(()=>$(e),500),i=new ResizeObserver(a);M.set(e,i),i.observe(e)}return()=>{let a=M.get(e);a&&(a.disconnect(),M.delete(e))}}}function W(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function Y(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function ne(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(Y),[...t.querySelectorAll("source[data-src]")].forEach(W))}function re(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var ut=()=>{_(),h.hasClass("on")&&b(h,0,()=>{h.removeClass("on"),T.removeClass("close")});let e=d("#main");e.innerHTML="",e.appendChild(H.lastChild.cloneNode(!0)),C(0)},le=e=>{Oe(0),Ne(window.location.href),J("katex"),be("copy_tex"),J("mermaid");let t=new IntersectionObserver(function(s,a){s.forEach(i=>{if(i.isIntersecting){let n=i.target;n.style.backgroundImage=`url("${n.getAttribute("data-background-image")}")`,n.removeAttribute("data-background-image"),a.unobserve(n)}})},{root:null,threshold:.2});if(document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&d.each("script[data-pjax]",ye),Ie(document.title),ae(),Qe(),_e(),Je(),LOCAL.ispost){import("./post-K3R7EKKB.js").then(({postBeauty:a})=>{a()});let s=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(import("./comments-DJVMSCAY.js").then(({walinePageview:n,walineComment:r})=>{n(),r()}),s.disconnect())})},{root:null,threshold:.2});s.observe(d("#copyright"))}ht(),import("./comments-DJVMSCAY.js").then(async({walinePageview:s,walineRecentComments:a})=>{await a()}),ve(),U.player.load(LOCAL.audio||m.audio||{}),g.hide(500),setTimeout(()=>{pe()},500),Ze()};p();function y(e,t,s){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,s):t.call(s,e,0,[e])}var ce=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function F(e,t,s,a){ce(t,i=>{y(e,n=>{n.addEventListener(i,s,a)})})}function L(e,t,s={}){ce(t,a=>{let i=new CustomEvent(a,{bubbles:!0,cancelable:!0,...s});y(e,n=>{n.dispatchEvent(i)})})}function de(e){let t=e.text||e.textContent||e.innerHTML||"",s=e.src||"",a=e.parentNode||document.querySelector("head")||document.documentElement,i=document.createElement("script");return t.match("document.write")?!1:(i.type="text/javascript",i.id=e.id,s!==""&&(i.src=s,i.async=!1),t!==""&&i.appendChild(document.createTextNode(t)),a.appendChild(i),(a instanceof HTMLHeadElement||a instanceof HTMLBodyElement)&&a.contains(i)&&a.removeChild(i),!0)}function mt(e){e.tagName.toLowerCase()==="script"&&de(e),y(e.querySelectorAll("script"),t=>{let s=t;(!s.type||s.type.toLowerCase()==="text/javascript")&&(s.parentNode&&s.parentNode.removeChild(s),de(s))})}function pt(e,t,s,a=document){e.forEach(i=>{y(a.querySelectorAll(i),t,s)})}var O=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function he(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function ft(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function ue(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let s=t.attributes;for(let a=0;a<s.length;a++)e.attributes.setNamedItem(s[a].cloneNode())}this.onSwitch()}function vt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:s={},switchesOptions:a={},history:i=!0,scrollTo:n=0,scrollRestoration:r=!0,cacheBust:o=!0,timeout:l=0,currentUrlFullReload:c=!1}={}){let u={elements:e,selectors:t,switches:s,switchesOptions:a,history:i,scrollTo:n,scrollRestoration:r,cacheBust:o,timeout:l,currentUrlFullReload:c};return u.switches.head||(u.switches.head=ue),u.switches.body||(u.switches.body=ue),u}var N="data-pjax-state";function me(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let s={...this.options},a=wt(e,t);if(a){e.setAttribute(N,a);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(N,"reload"),this.reload();return}e.setAttribute(N,"load"),s.triggerElement=e,this.loadUrl(e.href,s)}function wt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function gt(e){e.setAttribute(N,""),F(e,"click",t=>me.call(this,e,t)),F(e,"keyup",t=>{let s=t;s.keyCode===13&&me.call(this,e,s)})}function yt(e,t,s,a){if(a={...a||this.options},a.request=t,e===!1){L(document,"pjax:complete pjax:error",a);return}let i=window.history.state||{};window.history.replaceState({url:i.url||window.location.href,title:i.title||document.title,uid:i.uid||O(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let n=s;t.responseURL?s!==t.responseURL&&(s=t.responseURL):t.getResponseHeader("X-PJAX-URL")?s=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(s=t.getResponseHeader("X-XHR-Redirected-To"));let r=document.createElement("a");r.href=n;let o=r.hash;r.href=s,o&&!r.hash&&(r.hash=o,s=r.href),this.state.href=s,this.state.options=a;try{this.loadContent(e,a)}catch(l){return L(document,"pjax:error",a),console.error("Pjax switch fail: ",l),this.latestChance(s)}}function bt(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Ct(e,t,s){let a=new RegExp("([?&])"+t+"=.*?(&|$)","i"),i=e.indexOf("?")!==-1?"&":"?";return e.match(a)?e.replace(a,"$1"+t+"="+s+"$2"):e+i+t+"="+s}function Et(e,t={},s){let a=t.requestOptions||{},i=(a.requestMethod||"GET").toUpperCase(),n=a.requestParams||null,r=null,o=new XMLHttpRequest,l=t.timeout;if(o.onreadystatechange=()=>{o.readyState===4&&(o.status===200?s(o.responseText,o,e,t):o.status!==0&&s(null,o,e,t))},o.onerror=c=>{console.error(c),s(null,o,e,t)},o.ontimeout=()=>{s(null,o,e,t)},n&&n.length){let c=n.map(u=>u.name+"="+u.value).join("&");switch(i){case"GET":e=e.split("?")[0],e+="?"+c;break;case"POST":r=c;break}}return t.cacheBust&&(e=Ct(e,"t",Date.now())),o.open(i,e,!0),o.timeout=l,o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("X-PJAX","true"),o.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),o.send(r),o}function At(e,t,s,a,i,n){let r=[];s.forEach(o=>{let l=a.querySelectorAll(o),c=i.querySelectorAll(o);if(l.length!==c.length)throw new Error(`DOM doesn't look the same on new loaded page: '${o}' - new ${l.length}, old ${c.length}`);y(l,(u,x)=>{let f=c[x],P=e[o]?e[o].bind(this,f,u,n,t[o]):he.bind(this,f,u,n);r.push(P)},this)},this),this.state.numPendingSwitches=r.length,r.forEach(o=>{o()})}function Lt(e,t,s){for(let a of t){let i=e.querySelectorAll(a);for(let n=0;n<i.length;n++)if(i[n].contains(s))return!0}return!1}var k=class{constructor(e){this.state={numPendingSwitches:0,href:null,options:null},this.options=vt(e),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=O(),this.parseDOM(document),F(window,"popstate",t=>{let s=t;if(s.state){let a={...this.options};a.url=s.state.url,a.title=s.state.title,a.history=!1,a.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?a.backward=!0:a.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,a)}})}getElements(e){return e.querySelectorAll(this.options.elements)}parseDOM(e){y(this.getElements(e),bt,this)}refresh(e){this.parseDOM(e||document)}reload(){window.location.reload()}forEachSelectors(e,t,s){return pt.bind(this)(this.options.selectors,e,t,s)}switchSelectors(e,t,s,a){return At.bind(this)(this.options.switches,this.options.switchesOptions,e,t,s,a)}latestChance(e){window.location=e}onSwitch(){L(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(e,t){if(typeof e!="string"){L(document,"pjax:complete pjax:error",t);return}let s=document.implementation.createHTMLDocument("pjax"),a=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,n=e.match(a);if(n&&n.length&&(n=n[0].match(i),n.length&&(n.shift(),n.forEach(r=>{let o=r.trim().split("=");o.length===1?s.documentElement.setAttribute(o[0],"true"):s.documentElement.setAttribute(o[0],o[1].slice(1,-1))}))),s.documentElement.innerHTML=e,document.activeElement&&Lt(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,t)}loadUrl(e,t){t=typeof t=="object"?{...this.options,...t}:{...this.options},this.abortRequest(this.request),L(document,"pjax:send",t),this.request=this.doRequest(e,t,this.handleResponse.bind(this))}afterAllSwitches(){var e,t,s;this.options.selectors.forEach(i=>{y(document.querySelectorAll(i),n=>{mt(n)})});let a=this.state;if(!((e=a.options)===null||e===void 0)&&e.history&&(window.history.state||(this.lastUid=this.maxUid=O(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=O(),window.history.pushState({url:a.href,title:a.options.title,uid:this.maxUid,scrollPos:[0,0]},a.options.title,a.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),L(document,"pjax:complete pjax:success",a.options),!((t=a.options)===null||t===void 0)&&t.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let n=i.hash.slice(1);n=decodeURIComponent(n);let r=0,o=document.getElementById(n)||document.getElementsByName(n)[0];if(o&&o.offsetParent)do r+=o.offsetTop,o=o.offsetParent;while(o);window.scrollTo(0,r)}else a.options.scrollTo!==!1&&(Array.isArray(a.options.scrollTo)?window.scrollTo(a.options.scrollTo[0],a.options.scrollTo[1]):window.scrollTo(0,a.options.scrollTo))}else!((s=a.options)===null||s===void 0)&&s.scrollRestoration&&a.options.scrollPos&&window.scrollTo(a.options.scrollPos[0],a.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(e){e&&e.readyState<4&&(e.onreadystatechange=()=>{},e.abort())}};k.prototype.attachLink=gt,k.prototype.doRequest=Et,k.prototype.handleResponse=yt,k.switches={innerHTML:ft,outerHTML:he},p();function kt(){function e(){let t,s=A(d(".theme"),".ic"),a=Q(Z,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),i=()=>{b(a,{delay:2500,opacity:0},()=>{Z.removeChild(a)})};s.hasClass("i-sun")?t=()=>{a.addClass("dark"),v("dark"),I.set("theme","dark"),i()}:(a.addClass("dark"),t=()=>{a.removeClass("dark"),v(),I.set("theme","light"),i()}),b(a,1,()=>{setTimeout(t,210)},()=>{z(a,"block")})}A(d("#rightNav"),".theme .ic").addEventListener("click",e)}var xt=()=>{kt(),Ve(),Pe(new k({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),m.quicklink.ignores=LOCAL.ignores,import("./quicklink-5Z4BXNW4.js").then(({listen:e})=>{e(m.quicklink)}),et(),at(),tt(),import("./index.esm-ULJZJ5UM.js").then(e=>{e.default(m.fireworks)}),window.addEventListener("scroll",st,{passive:!0}),window.addEventListener("resize",ae,{passive:!0}),window.addEventListener("pjax:send",ut,{passive:!0}),window.addEventListener("pjax:success",le,{passive:!0}),window.addEventListener("beforeunload",()=>{_()}),le(1)};ge(),window.addEventListener("DOMContentLoaded",xt,{passive:!0}),console.log("%c Theme.ShokaX v"+m.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");/*! For license information please see siteInit.js.LEGAL.txt */
