"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["common"],{

/***/ 8351:
/*!*****************************************************!*\
  !*** ./src/app/component/top-bar/top-bar.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarModule": () => (/* binding */ TopBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-bar.component */ 78713);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







// import { PrintQRCodeComponent } from "./qr-code/qr-code.dialog";
class TopBarModule {
}
TopBarModule.ɵfac = function TopBarModule_Factory(t) { return new (t || TopBarModule)(); };
TopBarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TopBarModule });
TopBarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__.NgxQRCodeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogModule.forChild({
                closeOnBackdropClick: true
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TopBarModule, { declarations: [_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconModule,
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__.NgxQRCodeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogModule], exports: [_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent] }); })();


/***/ }),

/***/ 55526:
/*!********************************************!*\
  !*** ./src/app/pages/cml/cml.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMLComponent": () => (/* binding */ CMLComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/top-bar/top-bar.component */ 78713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class CMLComponent {
    constructor() { }
    ngOnInit() {
    }
}
CMLComponent.ɵfac = function CMLComponent_Factory(t) { return new (t || CMLComponent)(); };
CMLComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CMLComponent, selectors: [["ngx-cml"]], decls: 2, vars: 0, template: function CMLComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-top-bar")(1, "router-outlet");
    } }, directives: [_component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=common.js.map