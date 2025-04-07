var __awaiter=this&&this.__awaiter||function(t,n,r,l){return new(r=r||Promise)(function(i,e){function a(t){try{s(l.next(t))}catch(t){e(t)}}function o(t){try{s(l.throw(t))}catch(t){e(t)}}function s(t){var e;t.done?i(t.value):((e=t.value)instanceof r?e:new r(function(t){t(e)})).then(a,o)}s((l=l.apply(t,n||[])).next())})};import{aPdfViewerIds}from"../../constant/ElementIdClass";export default class ZoomHandler{constructor(t,e,i){this.pdfState=t,this.pageVirtualization=e,this.options=i||{minScale:.5,maxScale:4,zoomStep:.5}}zoomIn(){return __awaiter(this,void 0,void 0,function*(){var t=this.pdfState.scale;t<this.options.maxScale&&(t=t+this.options.zoomStep,yield this.applyZoom(t))})}zoomOut(){return __awaiter(this,void 0,void 0,function*(){var t=this.pdfState.scale;t>this.options.minScale&&(t=t-this.options.zoomStep,yield this.applyZoom(t))})}applyZoom(a){return __awaiter(this,void 0,void 0,function*(){let t=this.pdfState.scale,e=this.pdfState.currentPage,i=this.getScrollOffsetRelativeToPage(e);this.pdfState.scale=a,this.applyCssScale(a),yield this.pageVirtualization.calculatePagePositioning(),requestAnimationFrame(()=>{this.adjustScrollPosition(e,i,t,a)}),yield this.pageVirtualization.updatePageBuffers(),this.pdfState.emit("scaleChange"),yield this.pageVirtualization.redrawVisiblePages(e)})}getScrollOffsetRelativeToPage(t){var t=this.pageVirtualization.cachedPagePosition.get(t)||0,e=document.querySelector(`#${this.pdfState.containerId} #`+aPdfViewerIds._MAIN_VIEWER_CONTAINER);return e?e.scrollTop-t:0}adjustScrollPosition(t,e,i,a){t=(this.pageVirtualization.cachedPagePosition.get(t)||0)+e*(a/i),e=document.querySelector(`#${this.pdfState.containerId} #`+aPdfViewerIds._MAIN_VIEWER_CONTAINER);e&&(e.scrollTop=t)}applyCssScale(t){var e=document.querySelector(`#${this.pdfState.containerId} #`+aPdfViewerIds._MAIN_PAGE_VIEWER_CONTAINER);e&&e.style.setProperty("--scale-factor",String(t))}pan(t,e){var i=document.querySelector(`#${this.pdfState.containerId} .main-viewer-container`);i&&(i.scrollLeft+=t,i.scrollTop+=e)}}