import{aPdfViewerClassNames,aPdfViewerIds}from"../../constant/ElementIdClass";class PageElement{static createPageContainerDiv(e,t,a){var d=document.createElement("div");return d.style.position="absolute",d.style.top=a.get(e)+"px",d.id="pageContainer-"+e,d.classList.add(aPdfViewerClassNames._A_PAGE_VIEW),d.style.height=t.height+"px",d.style.width=t.width+"px",d}static createCanvas(e){var t=document.createElement("canvas"),a=t.getContext("2d"),d=window.devicePixelRatio||1;return t.width=e.width*d,t.height=e.height*d,t.style.width=e.width+"px",t.style.height=e.height+"px",a.scale(d,d),[t,a]}static containerCreation(e,t){var a=document.createElement("div"),d=(a.setAttribute("class",aPdfViewerClassNames._A_PDF_VIEWER+" pdf-loading"),document.createElement("div")),s=(d.classList.add(aPdfViewerClassNames._A_TOOLBAR_ITEMS),d.setAttribute("id",aPdfViewerIds._TOOLBAR_CONTAINER),document.createElement("div")),s=(s.setAttribute("id",aPdfViewerIds._TOOLBAR_GROUP_1),s.classList.add(aPdfViewerClassNames._TOOLBAR_GROUP),d.appendChild(s),document.createElement("div")),s=(s.setAttribute("id",aPdfViewerIds._TOOLBAR_GROUP_2),s.classList.add(aPdfViewerClassNames._TOOLBAR_GROUP),d.appendChild(s),document.createElement("div")),i=(s.classList.add(aPdfViewerClassNames._A_VIEWER_CONTAINER),s.setAttribute("id",aPdfViewerIds._MAIN_VIEWER_CONTAINER),document.createElement("div")),t=(i.classList.add(aPdfViewerClassNames._A_PAGE_CONTAINER),i.setAttribute("id",aPdfViewerIds._MAIN_PAGE_VIEWER_CONTAINER),i.style.setProperty("--scale-factor",String(t)),s.appendChild(i),a.appendChild(d),document.createElement("div"));return t.classList.add(aPdfViewerClassNames._A_VIEWER_WRAPPER),t.appendChild(s),a.appendChild(t),document.getElementById(e).appendChild(a),{parent:a,injectElementId:aPdfViewerIds._MAIN_PAGE_VIEWER_CONTAINER}}static createLayers(e,t,a){var d=document.createElement("div");return d.className=e,d.setAttribute("id",t),d.style.width=a.width+"px",d.style.height=a.height+"px",d}}PageElement.gap=15;export default PageElement;