"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var tag_input_keys_1 = require('../../shared/tag-input-keys');
function isBlank(obj) {
    return obj === undefined || obj === null;
}
var TagInputComponent = (function () {
    function TagInputComponent(fb, elementRef) {
        this.fb = fb;
        this.elementRef = elementRef;
        this.addOnBlur = true;
        this.addOnComma = true;
        this.addOnEnter = true;
        this.addOnPaste = true;
        this.addOnSpace = false;
        this.allowDuplicates = false;
        this.allowedTagsPattern = /.+/;
        this.autocomplete = false;
        this.autocompleteItems = [];
        this.autocompleteMustMatch = true;
        this.autocompleteSelectFirstItem = true;
        this.pasteSplitPattern = ',';
        this.placeholder = 'Add a tag';
        this.addTag = new core_1.EventEmitter();
        this.removeTag = new core_1.EventEmitter();
        this.canShowAutoComplete = false;
        this.autocompleteResults = [];
        this.tagsList = [];
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(TagInputComponent.prototype, "tagInputField", {
        get: function () {
            return this.tagInputForm.get('tagInputField');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "inputValue", {
        get: function () {
            return this.tagInputField.value;
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.onDocumentClick = function (event, target) {
        if (!target) {
            return;
        }
        if (!this.elementRef.nativeElement.contains(target)) {
            this.canShowAutoComplete = false;
        }
    };
    TagInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.splitRegExp = new RegExp(this.pasteSplitPattern);
        this.tagInputForm = this.fb.group({
            tagInputField: ''
        });
        this.tagInputSubscription = this.tagInputField.valueChanges
            .do(function (value) {
            _this.autocompleteResults = _this.autocompleteItems.filter(function (item) {
                return item.toLowerCase().indexOf(value.toLowerCase()) > -1 && _this._isTagUnique(item);
            });
        })
            .subscribe();
    };
    TagInputComponent.prototype.onKeydown = function (event) {
        var key = event.keyCode;
        switch (key) {
            case tag_input_keys_1.KEYS.backspace:
                this._handleBackspace();
                break;
            case tag_input_keys_1.KEYS.enter:
                if (this.addOnEnter && !this.showAutocomplete()) {
                    this._addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            case tag_input_keys_1.KEYS.comma:
                if (this.addOnComma) {
                    this._addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            case tag_input_keys_1.KEYS.space:
                if (this.addOnSpace) {
                    this._addTags([this.inputValue]);
                    event.preventDefault();
                }
                break;
            default:
                break;
        }
    };
    TagInputComponent.prototype.onInputBlurred = function (event) {
        if (this.addOnBlur) {
            this._addTags([this.inputValue]);
        }
        this.isFocused = false;
    };
    TagInputComponent.prototype.onInputFocused = function () {
        var _this = this;
        this.isFocused = true;
        setTimeout(function () { return _this.canShowAutoComplete = true; });
    };
    TagInputComponent.prototype.onInputPaste = function (event) {
        var _this = this;
        var clipboardData = event.clipboardData || (event.originalEvent && event.originalEvent.clipboardData);
        var pastedString = clipboardData.getData('text/plain');
        var tags = this._splitString(pastedString);
        this._addTags(tags);
        setTimeout(function () { return _this._resetInput(); });
    };
    TagInputComponent.prototype.onAutocompleteSelect = function (selectedItem) {
        this._addTags([selectedItem]);
        this.tagInputElement.nativeElement.focus();
    };
    TagInputComponent.prototype.onAutocompleteEnter = function () {
        if (this.addOnEnter && this.showAutocomplete() && !this.autocompleteMustMatch) {
            this._addTags([this.inputValue]);
        }
    };
    TagInputComponent.prototype.showAutocomplete = function () {
        return (this.autocomplete &&
            this.autocompleteItems &&
            this.autocompleteItems.length > 0 &&
            this.canShowAutoComplete &&
            this.inputValue.length > 0);
    };
    TagInputComponent.prototype._splitString = function (tagString) {
        tagString = tagString.trim();
        var tags = tagString.split(this.splitRegExp);
        return tags.filter(function (tag) { return !!tag; });
    };
    TagInputComponent.prototype._isTagValid = function (tagString) {
        return this.allowedTagsPattern.test(tagString) &&
            this._isTagUnique(tagString);
    };
    TagInputComponent.prototype._isTagUnique = function (tagString) {
        return this.allowDuplicates ? true : this.tagsList.indexOf(tagString) === -1;
    };
    TagInputComponent.prototype._isTagAutocompleteItem = function (tagString) {
        return this.autocompleteItems.indexOf(tagString) > -1;
    };
    TagInputComponent.prototype._emitTagAdded = function (addedTags) {
        var _this = this;
        addedTags.forEach(function (tag) { return _this.addTag.emit(tag); });
    };
    TagInputComponent.prototype._emitTagRemoved = function (removedTag) {
        this.removeTag.emit(removedTag);
    };
    TagInputComponent.prototype._addTags = function (tags) {
        var _this = this;
        var validTags = tags.map(function (tag) { return tag.trim(); })
            .filter(function (tag) { return _this._isTagValid(tag); })
            .filter(function (tag, index, tagArray) { return tagArray.indexOf(tag) === index; })
            .filter(function (tag) { return (_this.showAutocomplete() && _this.autocompleteMustMatch) ? _this._isTagAutocompleteItem(tag) : true; });
        this.tagsList = this.tagsList.concat(validTags);
        this._resetSelected();
        this._resetInput();
        this.onChange(this.tagsList);
        this._emitTagAdded(validTags);
    };
    TagInputComponent.prototype._removeTag = function (tagIndexToRemove) {
        var removedTag = this.tagsList[tagIndexToRemove];
        this.tagsList.splice(tagIndexToRemove, 1);
        this._resetSelected();
        this.onChange(this.tagsList);
        this._emitTagRemoved(removedTag);
    };
    TagInputComponent.prototype._handleBackspace = function () {
        if (!this.inputValue.length && this.tagsList.length) {
            if (!isBlank(this.selectedTag)) {
                this._removeTag(this.selectedTag);
            }
            else {
                this.selectedTag = this.tagsList.length - 1;
            }
        }
    };
    TagInputComponent.prototype._resetSelected = function () {
        this.selectedTag = null;
    };
    TagInputComponent.prototype._resetInput = function () {
        this.tagInputField.setValue('');
    };
    TagInputComponent.prototype.writeValue = function (value) {
        this.tagsList = value;
    };
    TagInputComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    TagInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    TagInputComponent.prototype.ngOnDestroy = function () {
        this.tagInputSubscription.unsubscribe();
    };
    TagInputComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'rl-tag-input',
                    template: "\n    <rl-tag-input-item\n      [text]=\"tag\"\n      [index]=\"index\"\n      [selected]=\"selectedTag === index\"\n      (tagRemoved)=\"_removeTag($event)\"\n      *ngFor=\"let tag of tagsList; let index = index\">\n    </rl-tag-input-item>\n    <form [formGroup]=\"tagInputForm\" class=\"ng2-tag-input-form\">\n      <input\n        class=\"ng2-tag-input-field\"\n        type=\"text\"\n        #tagInputElement\n        formControlName=\"tagInputField\"\n        [placeholder]=\"placeholder\"\n        (paste)=\"onInputPaste($event)\"\n        (keydown)=\"onKeydown($event)\"\n        (blur)=\"onInputBlurred($event)\"\n        (focus)=\"onInputFocused()\">\n\n      <div *ngIf=\"showAutocomplete()\" class=\"rl-tag-input-autocomplete-container\">\n        <rl-tag-input-autocomplete\n          [items]=\"autocompleteResults\"\n          [selectFirstItem]=\"autocompleteSelectFirstItem\"\n          (itemSelected)=\"onAutocompleteSelect($event)\"\n          (enterPressed)=\"onAutocompleteEnter($event)\">\n        </rl-tag-input-autocomplete>\n      </div>\n    </form>\n  ",
                    styles: ["\n    :host {\n      font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n      font-size: 16px;\n      display: block;\n      box-shadow: 0 1px #ccc;\n      padding: 8px 0 6px 0;\n      will-change: box-shadow;\n      transition: box-shadow 0.12s ease-out;\n    }\n\n     :host .ng2-tag-input-form {\n      display: inline;\n    }\n\n     :host .ng2-tag-input-field {\n      font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n      font-size: 16px;\n      display: inline-block;\n      width: auto;\n      box-shadow: none;\n      border: 0;\n      padding: 8px 0;\n    }\n\n     :host .ng2-tag-input-field:focus {\n      outline: 0;\n    }\n\n     :host .rl-tag-input-autocomplete-container {\n      position: relative;\n      z-index: 10;\n    }\n\n    :host.ng2-tag-input-focus {\n      box-shadow: 0 2px #0d8bff;\n    }\n  "],
                    providers: [
                        { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return TagInputComponent; }), multi: true },
                    ]
                },] },
    ];
    TagInputComponent.ctorParameters = [
        { type: forms_1.FormBuilder, },
        { type: core_1.ElementRef, },
    ];
    TagInputComponent.propDecorators = {
        'isFocused': [{ type: core_1.HostBinding, args: ['class.ng2-tag-input-focus',] },],
        'addOnBlur': [{ type: core_1.Input },],
        'addOnComma': [{ type: core_1.Input },],
        'addOnEnter': [{ type: core_1.Input },],
        'addOnPaste': [{ type: core_1.Input },],
        'addOnSpace': [{ type: core_1.Input },],
        'allowDuplicates': [{ type: core_1.Input },],
        'allowedTagsPattern': [{ type: core_1.Input },],
        'autocomplete': [{ type: core_1.Input },],
        'autocompleteItems': [{ type: core_1.Input },],
        'autocompleteMustMatch': [{ type: core_1.Input },],
        'autocompleteSelectFirstItem': [{ type: core_1.Input },],
        'pasteSplitPattern': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'addTag': [{ type: core_1.Output, args: ['addTag',] },],
        'removeTag': [{ type: core_1.Output, args: ['removeTag',] },],
        'tagInputElement': [{ type: core_1.ViewChild, args: ['tagInputElement',] },],
        'onDocumentClick': [{ type: core_1.HostListener, args: ['document:click', ['$event', '$event.target'],] },],
    };
    return TagInputComponent;
}());
exports.TagInputComponent = TagInputComponent;
//# sourceMappingURL=tag-input.component.js.map