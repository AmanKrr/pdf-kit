var __awaiter=this&&this.__awaiter||function(e,s,o,c){return new(o=o||Promise)(function(a,t){function n(e){try{i(c.next(e))}catch(e){t(e)}}function r(e){try{i(c.throw(e))}catch(e){t(e)}}function i(e){var t;e.done?a(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(n,r)}i((c=c.apply(e,s||[])).next())})};import*as pdfjsLib from"pdfjs-dist/webpack.mjs";import PageElement from"./PageElement";import{aPdfViewerClassNames,aPdfViewerIds}from"../../constant/ElementIdClass";class TextLayer extends PageElement{createTextLayer(a,n,r,i){return __awaiter(this,void 0,void 0,function*(){var e=PageElement.createLayers(aPdfViewerClassNames._A_TEXT_LAYER,aPdfViewerIds._TEXT_LAYER,i),t=(a.appendChild(e),yield r.getTextContent());return n.style.setProperty("--scale-factor",""+i.scale),new pdfjsLib.TextLayer({textContentSource:t,container:e,viewport:i}).render(),e})}}export default TextLayer;