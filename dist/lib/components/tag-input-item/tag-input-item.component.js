"use strict";
var core_1 = require('@angular/core');
var TagInputItemComponent = (function () {
    function TagInputItemComponent() {
        this.tagRemoved = new core_1.EventEmitter();
    }
    Object.defineProperty(TagInputItemComponent.prototype, "isSelected", {
        get: function () { return !!this.selected; },
        enumerable: true,
        configurable: true
    });
    TagInputItemComponent.prototype.removeTag = function () {
        this.tagRemoved.emit(this.index);
    };
    TagInputItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'rl-tag-input-item',
                    template: "\n    {{text}}\n    <span\n    class=\"ng2-tag-input-remove\"\n    (click)=\"removeTag()\">&times;</span>\n  ",
                    styles: ["\n    :host {\n      font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n      font-size: 16px;\n      height: 32px;\n      line-height: 32px;\n      display: inline-block;\n      background: #e0e0e0;\n      padding: 0 12px;\n      border-radius: 90px;\n      margin-right: 10px;\n      transition: all 0.12s ease-out;\n    }\n\n     :host .ng2-tag-input-remove {\n      background: #a6a6a6;\n      border-radius: 50%;\n      color: #e0e0e0;\n      cursor: pointer;\n      display: inline-block;\n      font-size: 17px;\n      height: 24px;\n      line-height: 24px;\n      margin-left: 6px;\n      margin-right: -6px;\n      text-align: center;\n      width: 24px;\n    }\n\n    :host.ng2-tag-input-item-selected {\n      color: white;\n      background: #0d8bff;\n    }\n\n     :host.ng2-tag-input-item-selected .ng2-tag-input-remove {\n      background: white;\n      color: #0d8bff;\n    }\n  "]
                },] },
    ];
    TagInputItemComponent.ctorParameters = [];
    TagInputItemComponent.propDecorators = {
        'selected': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'index': [{ type: core_1.Input },],
        'tagRemoved': [{ type: core_1.Output },],
        'isSelected': [{ type: core_1.HostBinding, args: ['class.ng2-tag-input-item-selected',] },],
    };
    return TagInputItemComponent;
}());
exports.TagInputItemComponent = TagInputItemComponent;
//# sourceMappingURL=tag-input-item.component.js.map