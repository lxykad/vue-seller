(function(window){var svgSprite='<svg><symbol id="icon-previewright" viewBox="0 0 1024 1024"><path d="M689.621 512l-328.832-328.832-60.331 60.331 268.501 268.501-268.501 268.501 60.331 60.331z"  ></path></symbol><symbol id="icon-arrow" viewBox="0 0 1152 1024"><path d="M624.576 0 544.128 80.512 976.192 512.032 544.128 943.488 624.576 1024 1136.096 512.032Z"  ></path></symbol><symbol id="icon-arrow1" viewBox="0 0 1024 1024"><path d="M758.982626 520.67252c-5.938246 0-11.876492-2.272763-16.422018-6.817266L277.710464 49.005111c-9.090029-9.089006-9.090029-23.814382 0-32.904411 9.089006-9.090029 23.814382-9.090029 32.904411 0l464.850144 464.850144c9.090029 9.090029 9.090029 23.815405 0 32.905434C770.920516 518.40078 764.951571 520.67252 758.982626 520.67252z"  ></path><path d="M265.106402 1014.594793c-5.953595 0-11.908214-2.302439-16.452717-6.846942-9.090029-9.090029-9.090029-23.814382 0-32.904411l493.907946-493.892597c9.090029-9.090029 23.814382-9.090029 32.904411 0s9.090029 23.815405 0 32.905434L281.558096 1007.747851C277.013593 1012.292354 271.058974 1014.594793 265.106402 1014.594793z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)