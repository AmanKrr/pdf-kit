import { RectConfig } from '../../types/geometry';
import { RectangleAnnotation } from '../annotation/RectangleAnnotation';
import PdfState from '../components/PdfState';
import { SelectionManager } from './SelectionManager';
export declare class AnnotationManager {
    private container;
    private activeAnnotation;
    private selectedAnnotation;
    private annotations;
    private __pdfState;
    private focusedShape;
    private selectionUnsubscribe;
    private selectionManager;
    private boundMouseDown;
    private boundMouseMove;
    private boundMouseUp;
    constructor(container: HTMLElement, pdfState: PdfState, selectionManager: SelectionManager);
    set pdfState(pdfState: PdfState);
    setPointerEvent(pointerEvent: 'all' | 'none'): void;
    selectAnnotation(annotation: RectangleAnnotation): void;
    private addListeners;
    private removeListeners;
    createRectangle(fillColor: string, strokeColor: string, strokeWidth: number, strokeStyle: string): void;
    private drawRectangle;
    get registeredFocus(): [] | [number, string];
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private registerFocus;
    get getAnnotations(): RectangleAnnotation[];
    deselectAll(): void;
    private onAnnotationSelection;
    deleteAnnotation(annotationId: string): void;
    addAnnotation(annotation: RectConfig, scrollIntoView?: boolean): void;
    updateAnnotation(annotation: RectConfig): void;
    destroy(): void;
}
