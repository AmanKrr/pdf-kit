var __awaiter=this&&this.__awaiter||function(e,s,o,d){return new(o=o||Promise)(function(a,t){function i(e){try{r(d.next(e))}catch(e){t(e)}}function n(e){try{r(d.throw(e))}catch(e){t(e)}}function r(e){var t;e.done?a(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(i,n)}r((d=d.apply(e,s||[])).next())})};import{aPdfViewerClassNames,aPdfViewerIds}from"../constant/ElementIdClass";class WebUiUtils{static showLoading(){var e=document.createElement("div"),t=(e.classList.add("loading"),document.createElement("div")),t=(t.classList.add("spinner"),e.appendChild(t),document.createElement("div"));return t.setAttribute("id",aPdfViewerIds._LOADING_CONTAINER),t.appendChild(e),e}static hideLoading(e){var t=document.querySelector("."+aPdfViewerClassNames._A_PDF_VIEWER);t&&t.classList.remove(aPdfViewerClassNames._PDF_LOADING),e&&e.parentNode&&e.parentNode.removeChild(e)}static Observer(t){let a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e=e.target.id.split("-")[1],t(parseInt(e)))})},{threshold:.1});var e=document.getElementsByClassName(aPdfViewerClassNames._A_PAGE_VIEW);Array.from(e).forEach(e=>{a.observe(e)})}static parseQueryString(e){var t,a,i=new Map;for([t,a]of new URLSearchParams(e))i.set(t.toLowerCase(),a);return i}static getVisiblePages(t){var e=document.getElementById(aPdfViewerIds._MAIN_VIEWER_CONTAINER);if(!e)return[];var a=e.getBoundingClientRect(),i=[];for(let e=1;e<=t.numPages;e++){var n=document.getElementById("pageContainer-"+e);n&&(n=n.getBoundingClientRect()).bottom>a.top&&n.top<a.bottom&&i.push(e)}return i}static renderPage(n,r,s,o){return __awaiter(this,void 0,void 0,function*(){var e,t,a,i=document.getElementById("pageContainer-"+r);i&&(t=(e=yield n.getPage(r)).getViewport({scale:s}),i.style.width=t.width+"px",i.style.height=t.height+"px",i=i.querySelector("canvas"))&&(a=i.getContext("2d"))&&(i.width=t.width*o,i.height=t.height*o,i.style.width=t.width+"px",i.style.height=t.height+"px",a.scale(o,o),yield e.render({canvasContext:a,viewport:t,annotationMode:2}).promise)})}}export default WebUiUtils;