"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/do');
var tag_input_autocomplete_component_1 = require('./components/tag-input-autocomplete/tag-input-autocomplete.component');
var tag_input_component_1 = require('./components/tag-input/tag-input.component');
var tag_input_item_component_1 = require('./components/tag-input-item/tag-input-item.component');
var RlTagInputModule = (function () {
    function RlTagInputModule() {
    }
    RlTagInputModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule
                    ],
                    declarations: [
                        tag_input_autocomplete_component_1.TagInputAutocompleteComponent,
                        tag_input_component_1.TagInputComponent,
                        tag_input_item_component_1.TagInputItemComponent
                    ],
                    exports: [
                        tag_input_component_1.TagInputComponent
                    ]
                },] },
    ];
    RlTagInputModule.ctorParameters = [];
    return RlTagInputModule;
}());
exports.RlTagInputModule = RlTagInputModule;
//# sourceMappingURL=tag-input.module.js.map