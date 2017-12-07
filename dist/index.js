import { Component, Directive, ElementRef, Injectable, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleComponent = (function () {
    function SampleComponent() {
    }
    SampleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sample-component',
                    template: "<h1>Sample component</h1>",
                    styles: ["h1 { color: red; } "]
                },] },
    ];
    /** @nocollapse */
    SampleComponent.ctorParameters = function () { return []; };
    return SampleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleDirective = (function () {
    function SampleDirective(el) {
        this.el = el;
    }
    SampleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[sampleDirective]'
                },] },
    ];
    /** @nocollapse */
    SampleDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return SampleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SamplePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    SamplePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'samplePipe'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    SamplePipe.ctorParameters = function () { return []; };
    return SamplePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleService = (function () {
    function SampleService() {
    }
    SampleService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SampleService.ctorParameters = function () { return []; };
    return SampleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleModule = (function () {
    function SampleModule() {
    }
    /**
     * @return {?}
     */
    SampleModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    };
    SampleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SampleComponent,
                        SampleDirective,
                        SamplePipe
                    ],
                    exports: [
                        SampleComponent,
                        SampleDirective,
                        SamplePipe
                    ]
                },] },
    ];
    /** @nocollapse */
    SampleModule.ctorParameters = function () { return []; };
    return SampleModule;
}());

export { SampleModule, SampleComponent, SampleDirective, SamplePipe, SampleService };
