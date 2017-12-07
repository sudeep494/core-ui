(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['core-ui'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SampleComponent = (function () {
    function SampleComponent() {
    }
    SampleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'sample-component',
                    template: "<h1>Sample component</h1>"
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
        { type: core.Directive, args: [{
                    selector: '[sampleDirective]'
                },] },
    ];
    /** @nocollapse */
    SampleDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
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
        { type: core.Pipe, args: [{
                    name: 'samplePipe'
                },] },
        { type: core.Injectable },
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
        { type: core.Injectable },
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
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
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

exports.SampleModule = SampleModule;
exports.SampleComponent = SampleComponent;
exports.SampleDirective = SampleDirective;
exports.SamplePipe = SamplePipe;
exports.SampleService = SampleService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
