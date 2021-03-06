"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var tag_input_keys_1 = require('../../shared/tag-input-keys');
var TagInputAutocompleteComponent = (function () {
    function TagInputAutocompleteComponent(elementRef) {
        this.elementRef = elementRef;
        this.selectFirstItem = false;
        this.itemSelected = new core_1.EventEmitter();
        this.enterPressed = new core_1.EventEmitter();
        this.selectedItemIndex = null;
    }
    Object.defineProperty(TagInputAutocompleteComponent.prototype, "itemsCount", {
        get: function () {
            return this.items ? this.items.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    TagInputAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keySubscription = Observable_1.Observable.fromEvent(window, 'keydown')
            .filter(function (event) {
            return event.keyCode === tag_input_keys_1.KEYS.upArrow ||
                event.keyCode === tag_input_keys_1.KEYS.downArrow ||
                event.keyCode === tag_input_keys_1.KEYS.enter ||
                event.keyCode === tag_input_keys_1.KEYS.esc;
        })
            .do(function (event) {
            switch (event.keyCode) {
                case tag_input_keys_1.KEYS.downArrow:
                    _this.handleDownArrow();
                    break;
                case tag_input_keys_1.KEYS.upArrow:
                    _this.handleUpArrow();
                    break;
                case tag_input_keys_1.KEYS.enter:
                    _this.selectItem();
                    _this.enterPressed.emit();
                    break;
                case tag_input_keys_1.KEYS.esc:
                    break;
            }
            event.stopPropagation();
            event.preventDefault();
        })
            .subscribe();
    };
    TagInputAutocompleteComponent.prototype.ensureHighlightVisible = function () {
        var container = this.elementRef.nativeElement.querySelector('.sk-select-results__container');
        if (!container) {
            return;
        }
        var choices = container.querySelectorAll('.sk-select-results__item');
        if (choices.length < 1) {
            return;
        }
        if (this.selectedItemIndex < 0) {
            return;
        }
        var highlighted = choices[this.selectedItemIndex];
        if (!highlighted) {
            return;
        }
        var posY = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        var height = container.offsetHeight;
        if (posY > height) {
            container.scrollTop += posY - height;
        }
        else if (posY < highlighted.clientHeight) {
            container.scrollTop -= highlighted.clientHeight - posY;
        }
    };
    TagInputAutocompleteComponent.prototype.goToTop = function () {
        this.selectedItemIndex = 0;
        this.ensureHighlightVisible();
    };
    TagInputAutocompleteComponent.prototype.goToBottom = function (itemsCount) {
        this.selectedItemIndex = itemsCount - 1;
        this.ensureHighlightVisible();
    };
    TagInputAutocompleteComponent.prototype.goToNext = function () {
        if (this.selectedItemIndex + 1 < this.itemsCount) {
            this.selectedItemIndex++;
        }
        else {
            this.goToTop();
        }
        this.ensureHighlightVisible();
    };
    TagInputAutocompleteComponent.prototype.goToPrevious = function () {
        if (this.selectedItemIndex - 1 >= 0) {
            this.selectedItemIndex--;
        }
        else {
            this.goToBottom(this.itemsCount);
        }
        this.ensureHighlightVisible();
    };
    TagInputAutocompleteComponent.prototype.handleUpArrow = function () {
        if (this.selectedItemIndex === null) {
            this.goToBottom(this.itemsCount);
            return false;
        }
        this.goToPrevious();
    };
    TagInputAutocompleteComponent.prototype.handleDownArrow = function () {
        if (this.selectedItemIndex === null) {
            this.goToTop();
            return false;
        }
        this.goToNext();
    };
    TagInputAutocompleteComponent.prototype.selectItem = function (itemIndex) {
        var itemToEmit = itemIndex ? this.items[itemIndex] : this.items[this.selectedItemIndex];
        if (itemToEmit) {
            this.itemSelected.emit(itemToEmit);
        }
    };
    TagInputAutocompleteComponent.prototype.ngOnChanges = function (changes) {
        if (this.selectFirstItem && this.itemsCount > 0) {
            this.goToTop();
        }
    };
    TagInputAutocompleteComponent.prototype.ngOnDestroy = function () {
        this.keySubscription.unsubscribe();
    };
    TagInputAutocompleteComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'rl-tag-input-autocomplete',
                    template: "\n    <div\n      *ngFor=\"let item of items; let itemIndex = index\"\n      [ngClass]=\"{ 'is-selected': selectedItemIndex === itemIndex }\"\n      (click)=\"selectItem(itemIndex)\"\n      class=\"rl-autocomplete-item\">\n      {{item}}\n    </div>\n  ",
                    styles: ["\n    :host {\n      box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n      display: block;\n      position: absolute;\n      top: 100%;\n      font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n      font-size: 16px;\n      color: #444444;\n      background: white;\n      padding: 8px 0;\n    }\n\n     :host .rl-autocomplete-item {\n      padding: 0 16px;\n      height: 48px;\n      line-height: 48px;\n    }\n\n     :host .is-selected {\n      background: #eeeeee;\n    }\n  "]
                },] },
    ];
    TagInputAutocompleteComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    TagInputAutocompleteComponent.propDecorators = {
        'items': [{ type: core_1.Input },],
        'selectFirstItem': [{ type: core_1.Input },],
        'itemSelected': [{ type: core_1.Output },],
        'enterPressed': [{ type: core_1.Output },],
    };
    return TagInputAutocompleteComponent;
}());
exports.TagInputAutocompleteComponent = TagInputAutocompleteComponent;
//# sourceMappingURL=tag-input-autocomplete.component.js.map