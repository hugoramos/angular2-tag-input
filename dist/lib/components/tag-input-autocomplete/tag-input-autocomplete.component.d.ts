import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
export declare class TagInputAutocompleteComponent implements OnChanges, OnDestroy, OnInit {
    private elementRef;
    items: string[];
    selectFirstItem: boolean;
    itemSelected: EventEmitter<string>;
    enterPressed: EventEmitter<any>;
    selectedItemIndex: number;
    private keySubscription;
    private readonly itemsCount;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ensureHighlightVisible(): void;
    goToTop(): void;
    goToBottom(itemsCount: any): void;
    goToNext(): void;
    goToPrevious(): void;
    handleUpArrow(): boolean;
    handleDownArrow(): boolean;
    selectItem(itemIndex?: number): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
}
