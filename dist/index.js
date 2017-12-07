import { Component, Directive, ElementRef, Injectable, Input, NgModule, Pipe, ViewEncapsulation } from '@angular/core';
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
                    encapsulation: ViewEncapsulation.None,
                    styles: ["sample-component { display: block; } sample-component h1 { color: green; } "]
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
var CoreTabsComponent = (function () {
    function CoreTabsComponent() {
    }
    /**
     * @return {?}
     */
    CoreTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CoreTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-ui-tabs',
                    template: "<ul class=\"nav nav-tabs\"> <li *ngFor=\"let tab of tabs\" [ngClass]=\"{'active': tab.active}\" class=\"nav-tab\"> <a href=\"{{tab.link}}\">{{tab.label}}</a> <ul class=\"sub-nav nav-sub-tabs\" *ngIf=\"tab.tabs\"> <li *ngFor=\"let subTab of tab.tabs\" [ngClass]=\"{'active': subTab.active}\" class=\"nav-sub-tab\"> <a href=\"{{subTab.link}}\"> <i class=\"fa m-r-xxs\" [ngClass]=\"[subTab.icon]\"></i> {{subTab.label}}</a> </li> </ul> </li> </ul> ",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["core-ui-tabs { display: block; margin-bottom: 60px; } core-ui-tabs ul.nav-tabs > li > a { background-color: #fff; text-transform: uppercase; color: #606060; font-size: 15px; padding: 10px 12px; border: none; } core-ui-tabs ul.nav-tabs > li > a:hover { background-color: #fff; border-bottom: 6px solid #cdc9c9; } core-ui-tabs ul.nav-tabs > li.active > a, core-ui-tabs ul.nav-tabs > li.active > a:hover { border: none; color: #0cb0dd; background-color: #fff; border-bottom: 6px solid #0cb0dd; } core-ui-tabs ul.nav-tabs { padding-bottom: 1px; border-bottom: 2px solid #cdc9c9; position: relative; } core-ui-tabs ul.nav-tabs li.nav-tab { position: static; } core-ui-tabs ul.nav-tabs li.nav-tab ul.nav-sub-tabs { position: absolute; left: 0; top: 50px; width: 100%; border-bottom: 1px solid #cdc9c9; } core-ui-tabs ul.nav-tabs li.nav-tab ul.nav-sub-tabs li { display: inline-block; margin: 6px 0; padding: 0 10px; border-left: 1px solid #ccc; } core-ui-tabs ul.nav-tabs li.nav-tab ul.nav-sub-tabs li a { background-color: #fff; color: #606060; font-size: 14px; border: none; text-decoration: none; padding: 5px 0; } core-ui-tabs ul.nav-tabs li.nav-tab ul.nav-sub-tabs li a:hover { background-color: #fff; border-bottom: 3px solid #cdc9c9; } core-ui-tabs ul.nav-tabs li.nav-tab ul.nav-sub-tabs li:first-child { border-left: none; } core-ui-tabs ul.nav-tabs li.nav-tab ul.nav-sub-tabs li.active > a, core-ui-tabs ul.nav-tabs li.nav-tab ul.nav-sub-tabs li.active > a:hover { border: none; color: #0cb0dd; background-color: #fff; border-bottom: 3px solid #0cb0dd; } "]
                },] },
    ];
    /** @nocollapse */
    CoreTabsComponent.ctorParameters = function () { return []; };
    CoreTabsComponent.propDecorators = {
        "tabs": [{ type: Input },],
    };
    return CoreTabsComponent;
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
                        SamplePipe,
                        CoreTabsComponent
                    ],
                    exports: [
                        SampleComponent,
                        SampleDirective,
                        SamplePipe,
                        CoreTabsComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    SampleModule.ctorParameters = function () { return []; };
    return SampleModule;
}());

export { SampleModule, SampleComponent, SampleDirective, SamplePipe, SampleService };
