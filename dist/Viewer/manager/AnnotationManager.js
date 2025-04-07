import{RectangleAnnotation}from"../annotation/RectangleAnnotation";class AnnotationManager{constructor(t,n,e){this.activeAnnotation=null,this.selectedAnnotation=null,this.annotations=[],this.__pdfState=null,this.focusedShape=[],this.boundMouseDown=this.onMouseDown.bind(this),this.boundMouseMove=this.onMouseMove.bind(this),this.boundMouseUp=this.onMouseUp.bind(this),this.container=t,this.__pdfState=n,this.selectionManager=e,this.selectionUnsubscribe=e.onSelectionChange(t=>{!this.selectedAnnotation||t&&this.selectedAnnotation.getId===t.id||this.deselectAll()}),n.on("ANNOTATION_SELECTED",this.onAnnotationSelection.bind(this))}set pdfState(t){this.__pdfState=t}setPointerEvent(t){this.container&&(this.container.style.pointerEvents=t)}selectAnnotation(t){this.deselectAll(),t.select(),this.selectedAnnotation=t,this.selectionManager.setSelected({id:t.getId,type:"rectangle"})}addListeners(){window.addEventListener("mousedown",this.boundMouseDown),window.addEventListener("mousemove",this.boundMouseMove),window.addEventListener("mouseup",this.boundMouseUp)}removeListeners(){window.removeEventListener("mousedown",this.boundMouseDown),window.removeEventListener("mousemove",this.boundMouseMove),window.removeEventListener("mouseup",this.boundMouseUp)}createRectangle(t,n,e,i){this.container&&(this.deselectAll(),this.addListeners(),this.activeAnnotation=new RectangleAnnotation(this.container,this.__pdfState,t,n,e,i),this.annotations.push(this.activeAnnotation))}drawRectangle({pageNumber:t,x0:n,y0:e,x1:i,y1:o,fillColor:s,strokeColor:a,strokeWidth:l,strokeStyle:r}){this.container&&(s=null!=s?s:"transparent",a=null!=a?a:"red",l=null!=l?l:2,r=null!=r?r:"solid",this.deselectAll(),this.activeAnnotation=new RectangleAnnotation(this.container,this.__pdfState,s,a,l,r),this.activeAnnotation.draw(n,i,e,o,t),this.activeAnnotation.stopDrawing(!1),this.annotations.push(this.activeAnnotation),this.setPointerEvent("none"))}get registeredFocus(){return this.focusedShape}onMouseDown(t){var n,e;this.container&&this.activeAnnotation&&(t.preventDefault(),n=this.container.getBoundingClientRect(),e=t.clientX-n.left,this.activeAnnotation.startDrawing(e,t.clientY-n.top))}onMouseMove(t){var n,e;this.container&&this.activeAnnotation&&this.activeAnnotation.isDrawing&&(t.preventDefault(),n=this.container.getBoundingClientRect(),e=t.clientX-n.left,this.activeAnnotation.updateDrawing(e,t.clientY-n.top))}onMouseUp(){this.activeAnnotation&&(this.activeAnnotation.stopDrawing(),this.registerFocus(),this.activeAnnotation=null,this.removeListeners(),this.setPointerEvent("none"))}registerFocus(t=void 0){t=null!=t?t:null==(t=this.activeAnnotation)?void 0:t.rectInfo;t&&null!=t.pageNumber&&null!=t.id&&(this.focusedShape=[t.pageNumber,t.id])}get getAnnotations(){return this.annotations}deselectAll(){this.annotations.forEach(t=>t.deselect()),this.selectedAnnotation=null}onAnnotationSelection(n){if(null==n.id)throw Error("annotation id missing!");var t;"rectangle"==n.type&&(t=this.annotations.filter(t=>t.getId==n.id))&&1==t.length&&this.selectAnnotation(t[0])}deleteAnnotation(n){var t=this.annotations.filter(t=>t.getId==n);t&&1==t.length&&(t[0].deletAnnotation(),t=this.annotations.filter(t=>t.getId!=n),this.annotations=t)}addAnnotation(t,n=!1){this.drawRectangle({x0:t.x0,y0:t.y0,x1:t.x1,y1:t.y1,fillColor:t.fillColor,strokeColor:t.strokeColor,strokeWidth:t.strokeWidth,strokeStyle:t.strokeStyle,pageNumber:t.pageNumber}),this.activeAnnotation&&n&&(this.activeAnnotation.scrollToView(),this.activeAnnotation.revokeSelection())}updateAnnotation(t){console.log("updateAnnotation not implemented in AnnotationManager")}destroy(){this.removeListeners(),this.selectionUnsubscribe&&this.selectionUnsubscribe(),this.container=null,this.activeAnnotation=null,this.selectedAnnotation=null}}export{AnnotationManager};