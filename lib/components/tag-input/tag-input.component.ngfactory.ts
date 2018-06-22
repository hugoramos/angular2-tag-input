/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './tag-input.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/forms/src/form_builder';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/forms/src/directives/control_value_accessor';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import15 from '../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import16 from '../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import17 from '../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import18 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/common/src/directives/ng_for';
import * as import22 from '@angular/forms/src/directives/default_value_accessor';
import * as import23 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import24 from '@angular/forms/src/directives/ng_control';
import * as import25 from '@angular/forms/src/directives/ng_control_status';
import * as import26 from '@angular/common/src/directives/ng_if';
import * as import27 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import28 from '@angular/forms/src/directives/control_container';
import * as import29 from '../tag-input-item/tag-input-item.component';
import * as import30 from '../tag-input-item/tag-input-item.component.ngfactory';
import * as import31 from '../tag-input-autocomplete/tag-input-autocomplete.component';
import * as import32 from '../tag-input-autocomplete/tag-input-autocomplete.component.ngfactory';
export class Wrapper_TagInputComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TagInputComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  subscription0:any;
  subscription1:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.TagInputComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
  }
  check_addOnBlur(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.addOnBlur = currValue;
      this._expr_0 = currValue;
    }
  }
  check_addOnComma(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.addOnComma = currValue;
      this._expr_1 = currValue;
    }
  }
  check_addOnEnter(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.addOnEnter = currValue;
      this._expr_2 = currValue;
    }
  }
  check_addOnPaste(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.addOnPaste = currValue;
      this._expr_3 = currValue;
    }
  }
  check_addOnSpace(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.addOnSpace = currValue;
      this._expr_4 = currValue;
    }
  }
  check_allowDuplicates(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.allowDuplicates = currValue;
      this._expr_5 = currValue;
    }
  }
  check_allowedTagsPattern(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.allowedTagsPattern = currValue;
      this._expr_6 = currValue;
    }
  }
  check_autocomplete(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.autocomplete = currValue;
      this._expr_7 = currValue;
    }
  }
  check_autocompleteItems(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.autocompleteItems = currValue;
      this._expr_8 = currValue;
    }
  }
  check_autocompleteMustMatch(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.autocompleteMustMatch = currValue;
      this._expr_9 = currValue;
    }
  }
  check_autocompleteSelectFirstItem(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.autocompleteSelectFirstItem = currValue;
      this._expr_10 = currValue;
    }
  }
  check_pasteSplitPattern(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.pasteSplitPattern = currValue;
      this._expr_11 = currValue;
    }
  }
  check_placeholder(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.placeholder = currValue;
      this._expr_12 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_13:any = this.context.isFocused;
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      view.renderer.setElementClass(el,'ng2-tag-input-focus',currVal_13);
      this._expr_13 = currVal_13;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'document:click')) {
      const pd_sub_0:any = ((<any>this.context.onDocumentClick($event,$event.target)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.addTag.subscribe(_eventHandler.bind(view,'addTag'))); }
    if (emit1) { (this.subscription1 = this.context.removeTag.subscribe(_eventHandler.bind(view,'removeTag'))); }
  }
}
var renderType_TagInputComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TagInputComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TagInputComponent>;
  _TagInputComponent_0_3:Wrapper_TagInputComponent;
  __NG_VALUE_ACCESSOR_0_4:any[];
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TagInputComponent_Host0,renderType_TagInputComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  get _NG_VALUE_ACCESSOR_0_4():any[] {
    if ((this.__NG_VALUE_ACCESSOR_0_4 == null)) { (this.__NG_VALUE_ACCESSOR_0_4 = [this._TagInputComponent_0_3.context]); }
    return this.__NG_VALUE_ACCESSOR_0_4;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'rl-tag-input',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TagInputComponent0(this.viewUtils,this,0,this._el_0);
    this._TagInputComponent_0_3 = new Wrapper_TagInputComponent(this.injectorGet(import8.FormBuilder,this.parentIndex),new import9.ElementRef(this._el_0));
    this.compView_0.create(this._TagInputComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click','document'),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TagInputComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TagInputComponent) && (0 === requestNodeIndex))) { return this._TagInputComponent_0_3.context; }
    if (((token === import10.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TagInputComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._TagInputComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TagInputComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._TagInputComponent_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const TagInputComponentNgFactory:import7.ComponentFactory<import0.TagInputComponent> = new import7.ComponentFactory<import0.TagInputComponent>('rl-tag-input',View_TagInputComponent_Host0,import0.TagInputComponent);
const styles_TagInputComponent:any[] = ['[_nghost-%COMP%] {\n      font-family: "Roboto", "Helvetica Neue", sans-serif;\n      font-size: 16px;\n      display: block;\n      box-shadow: 0 1px #ccc;\n      padding: 8px 0 6px 0;\n      will-change: box-shadow;\n      transition: box-shadow 0.12s ease-out;\n    }\n\n     [_nghost-%COMP%]   .ng2-tag-input-form[_ngcontent-%COMP%] {\n      display: inline;\n    }\n\n     [_nghost-%COMP%]   .ng2-tag-input-field[_ngcontent-%COMP%] {\n      font-family: "Roboto", "Helvetica Neue", sans-serif;\n      font-size: 16px;\n      display: inline-block;\n      width: auto;\n      box-shadow: none;\n      border: 0;\n      padding: 8px 0;\n    }\n\n     [_nghost-%COMP%]   .ng2-tag-input-field[_ngcontent-%COMP%]:focus {\n      outline: 0;\n    }\n\n     [_nghost-%COMP%]   .rl-tag-input-autocomplete-container[_ngcontent-%COMP%] {\n      position: relative;\n      z-index: 10;\n    }\n\n    .ng2-tag-input-focus[_nghost-%COMP%] {\n      box-shadow: 0 2px #0d8bff;\n    }'];
var renderType_TagInputComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_TagInputComponent,{});
export class View_TagInputComponent0 extends import2.AppView<import0.TagInputComponent> {
  _viewQuery_tagInputElement_0:import11.QueryList<any>;
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import12.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import13.Wrapper_NgFor;
  _text_2:any;
  _el_3:any;
  _FormGroupDirective_3_3:import14.Wrapper_FormGroupDirective;
  _ControlContainer_3_4:any;
  _NgControlStatusGroup_3_5:import15.Wrapper_NgControlStatusGroup;
  _text_4:any;
  _el_5:any;
  _DefaultValueAccessor_5_3:import16.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_5_4:any[];
  _FormControlName_5_5:import17.Wrapper_FormControlName;
  _NgControl_5_6:any;
  _NgControlStatus_5_7:import15.Wrapper_NgControlStatus;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import12.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import18.Wrapper_NgIf;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_25:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TagInputComponent0,renderType_TagInputComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_25 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_tagInputElement_0 = new import11.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import12.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import19.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import13.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import20.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'form',new import3.InlineArray2(2,'class','ng2-tag-input-form'),(null as any));
    this._FormGroupDirective_3_3 = new import14.Wrapper_FormGroupDirective((null as any),(null as any));
    this._ControlContainer_3_4 = this._FormGroupDirective_3_3.context;
    this._NgControlStatusGroup_3_5 = new import15.Wrapper_NgControlStatusGroup(this._ControlContainer_3_4);
    this._text_4 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'input',new import3.InlineArray8(6,'class','ng2-tag-input-field','formControlName','tagInputField','type','text'),(null as any));
    this._DefaultValueAccessor_5_3 = new import16.Wrapper_DefaultValueAccessor(this.renderer,new import9.ElementRef(this._el_5));
    this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
    this._FormControlName_5_5 = new import17.Wrapper_FormControlName(this._ControlContainer_3_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_5_4);
    this._NgControl_5_6 = this._FormControlName_5_5.context;
    this._NgControlStatus_5_7 = new import15.Wrapper_NgControlStatus(this._NgControl_5_6);
    this._text_6 = this.renderer.createText(this._el_3,'\n\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._vc_7 = new import12.ViewContainer(7,3,this,this._anchor_7);
    this._TemplateRef_7_5 = new import19.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import18.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray4(4,'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_3));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray16(10,'paste',(null as any),'keydown',(null as any),'blur',(null as any),'focus',(null as any),'input',(null as any)),this.eventHandler(this.handleEvent_5));
    this._viewQuery_tagInputElement_0.reset([new import9.ElementRef(this._el_5)]);
    this.context.tagInputElement = this._viewQuery_tagInputElement_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import21.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    if (((token === import22.DefaultValueAccessor) && (5 === requestNodeIndex))) { return this._DefaultValueAccessor_5_3.context; }
    if (((token === import10.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_5_4; }
    if (((token === import23.FormControlName) && (5 === requestNodeIndex))) { return this._FormControlName_5_5.context; }
    if (((token === import24.NgControl) && (5 === requestNodeIndex))) { return this._NgControl_5_6; }
    if (((token === import25.NgControlStatus) && (5 === requestNodeIndex))) { return this._NgControlStatus_5_7.context; }
    if (((token === import19.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import26.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import27.FormGroupDirective) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._FormGroupDirective_3_3.context; }
    if (((token === import28.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._ControlContainer_3_4; }
    if (((token === import25.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._NgControlStatusGroup_3_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.tagsList;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    const currVal_3_0_0:any = this.context.tagInputForm;
    this._FormGroupDirective_3_3.check_form(currVal_3_0_0,throwOnChange,false);
    this._FormGroupDirective_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this._NgControlStatusGroup_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    this._DefaultValueAccessor_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_5_1_0:any = 'tagInputField';
    this._FormControlName_5_5.check_name(currVal_5_1_0,throwOnChange,false);
    this._FormControlName_5_5.ngDoCheck(this,this._el_5,throwOnChange);
    this._NgControlStatus_5_7.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_7_0_0:any = this.context.showAutocomplete();
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._NgControlStatusGroup_3_5.checkHost(this,this,this._el_3,throwOnChange);
    const currVal_25:any = this.context.placeholder;
    if (import3.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this.renderer.setElementProperty(this._el_5,'placeholder',currVal_25);
      this._expr_25 = currVal_25;
    }
    this._NgControlStatus_5_7.checkHost(this,this,this._el_5,throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_7.destroyNestedViews();
    this._FormControlName_5_5.ngOnDestroy();
    this._FormGroupDirective_3_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_TagInputComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    if ((nodeIndex == 7)) { return new View_TagInputComponent2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._FormGroupDirective_3_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_5_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'paste')) {
      const pd_sub_0:any = ((<any>this.context.onInputPaste($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'keydown')) {
      const pd_sub_1:any = ((<any>this.context.onKeydown($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'blur')) {
      const pd_sub_2:any = ((<any>this.context.onInputBlurred($event)) !== false);
      result = (pd_sub_2 && result);
    }
    if ((eventName == 'focus')) {
      const pd_sub_3:any = ((<any>this.context.onInputFocused()) !== false);
      result = (pd_sub_3 && result);
    }
    return result;
  }
}
class View_TagInputComponent1 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import29.TagInputItemComponent>;
  _TagInputItemComponent_0_3:import30.Wrapper_TagInputItemComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_TagInputComponent1,renderType_TagInputComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'rl-tag-input-item',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import30.View_TagInputItemComponent0(this.viewUtils,this,0,this._el_0);
    this._TagInputItemComponent_0_3 = new import30.Wrapper_TagInputItemComponent();
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_0.create(this._TagInputItemComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'tagRemoved',(null as any)),this.eventHandler(this.handleEvent_0));
    this._TagInputItemComponent_0_3.subscribe(this,this.eventHandler(this.handleEvent_0),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.TagInputItemComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._TagInputItemComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = (this.parentView.context.selectedTag === this.context.index);
    this._TagInputItemComponent_0_3.check_selected(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.$implicit;
    this._TagInputItemComponent_0_3.check_text(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.context.index;
    this._TagInputItemComponent_0_3.check_index(currVal_0_0_2,throwOnChange,false);
    this._TagInputItemComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._TagInputItemComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TagInputItemComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'tagRemoved')) {
      const pd_sub_0:any = ((<any>this.parentView.context._removeTag($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_TagInputComponent2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import31.TagInputAutocompleteComponent>;
  _TagInputAutocompleteComponent_2_3:import32.Wrapper_TagInputAutocompleteComponent;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_TagInputComponent2,renderType_TagInputComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','rl-tag-input-autocomplete-container'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'rl-tag-input-autocomplete',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import32.View_TagInputAutocompleteComponent0(this.viewUtils,this,2,this._el_2);
    this._TagInputAutocompleteComponent_2_3 = new import32.Wrapper_TagInputAutocompleteComponent(new import9.ElementRef(this._el_2));
    this._text_3 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_2.create(this._TagInputAutocompleteComponent_2_3.context);
    this._text_4 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray4(4,'itemSelected',(null as any),'enterPressed',(null as any)),this.eventHandler(this.handleEvent_2));
    this._TagInputAutocompleteComponent_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true,true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import31.TagInputAutocompleteComponent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._TagInputAutocompleteComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.autocompleteResults;
    this._TagInputAutocompleteComponent_2_3.check_items(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parentView.context.autocompleteSelectFirstItem;
    this._TagInputAutocompleteComponent_2_3.check_selectFirstItem(currVal_2_0_1,throwOnChange,false);
    this._TagInputAutocompleteComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.compView_2.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this._TagInputAutocompleteComponent_2_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'itemSelected')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onAutocompleteSelect($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'enterPressed')) {
      const pd_sub_1:any = ((<any>this.parentView.context.onAutocompleteEnter($event)) !== false);
      result = (pd_sub_1 && result);
    }
    return result;
  }
}