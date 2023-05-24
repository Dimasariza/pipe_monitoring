"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_cml_cml_module_ts"],{

/***/ 74845:
/*!*****************************************!*\
  !*** ./src/app/pages/cml/cml.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMLModule": () => (/* binding */ CMLModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _cml_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cml.routing */ 58434);
/* harmony import */ var _cml_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cml.component */ 55526);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/top-bar/top-bar.module */ 8351);
/* harmony import */ var _demage_mechanism_demage_mechanism_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demage-mechanism/demage-mechanism.component */ 58716);
/* harmony import */ var _thickness_thickness_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thickness/thickness.component */ 65470);
/* harmony import */ var _visual_condition_visual_condition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visual-condition/visual-condition.component */ 63523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











class CMLModule {
}
CMLModule.ɵfac = function CMLModule_Factory(t) { return new (t || CMLModule)(); };
CMLModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CMLModule });
CMLModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbMenuModule,
            _cml_routing__WEBPACK_IMPORTED_MODULE_1__.CMLRoutingModule,
            _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_4__.TopBarModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_3__.MaterialTableModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CMLModule, { declarations: [_cml_component__WEBPACK_IMPORTED_MODULE_2__.CMLComponent,
        _demage_mechanism_demage_mechanism_component__WEBPACK_IMPORTED_MODULE_5__.DemageMechanismComponent,
        _thickness_thickness_component__WEBPACK_IMPORTED_MODULE_6__.ThicknessComponent,
        _visual_condition_visual_condition_component__WEBPACK_IMPORTED_MODULE_7__.VisualConditionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbMenuModule,
        _cml_routing__WEBPACK_IMPORTED_MODULE_1__.CMLRoutingModule,
        _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_4__.TopBarModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_3__.MaterialTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule] }); })();


/***/ }),

/***/ 58434:
/*!******************************************!*\
  !*** ./src/app/pages/cml/cml.routing.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMLRoutingModule": () => (/* binding */ CMLRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _visual_condition_visual_condition_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual-condition/visual-condition.component */ 63523);
/* harmony import */ var _cml_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cml.component */ 55526);
/* harmony import */ var _thickness_thickness_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thickness/thickness.component */ 65470);
/* harmony import */ var _demage_mechanism_demage_mechanism_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demage-mechanism/demage-mechanism.component */ 58716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [{
        path: '',
        component: _cml_component__WEBPACK_IMPORTED_MODULE_1__.CMLComponent,
        children: [
            {
                path: 'visual-condition',
                component: _visual_condition_visual_condition_component__WEBPACK_IMPORTED_MODULE_0__.VisualConditionComponent
            },
            {
                path: 'thickness',
                component: _thickness_thickness_component__WEBPACK_IMPORTED_MODULE_2__.ThicknessComponent
            },
            {
                path: 'damage-mechanism',
                component: _demage_mechanism_demage_mechanism_component__WEBPACK_IMPORTED_MODULE_3__.DemageMechanismComponent
            },
        ],
    }];
class CMLRoutingModule {
}
CMLRoutingModule.ɵfac = function CMLRoutingModule_Factory(t) { return new (t || CMLRoutingModule)(); };
CMLRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CMLRoutingModule });
CMLRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CMLRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 58716:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cml/demage-mechanism/demage-mechanism.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemageMechanismComponent": () => (/* binding */ DemageMechanismComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);


class DemageMechanismComponent {
    constructor() { }
    ngOnInit() {
    }
}
DemageMechanismComponent.ɵfac = function DemageMechanismComponent_Factory(t) { return new (t || DemageMechanismComponent)(); };
DemageMechanismComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemageMechanismComponent, selectors: [["ngx-demage-mechanism"]], decls: 1, vars: 0, consts: [["title", "Demage Mechanism"]], template: function DemageMechanismComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-mat-table", 0);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], encapsulation: 2 });


/***/ }),

/***/ 65470:
/*!************************************************************!*\
  !*** ./src/app/pages/cml/thickness/thickness.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThicknessComponent": () => (/* binding */ ThicknessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);


class ThicknessComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThicknessComponent.ɵfac = function ThicknessComponent_Factory(t) { return new (t || ThicknessComponent)(); };
ThicknessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThicknessComponent, selectors: [["ngx-thickness"]], decls: 1, vars: 0, consts: [["title", "Thickness"]], template: function ThicknessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-mat-table", 0);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], encapsulation: 2 });


/***/ }),

/***/ 63523:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cml/visual-condition/visual-condition.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualConditionComponent": () => (/* binding */ VisualConditionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);


class VisualConditionComponent {
    constructor() { }
    ngOnInit() {
    }
}
VisualConditionComponent.ɵfac = function VisualConditionComponent_Factory(t) { return new (t || VisualConditionComponent)(); };
VisualConditionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisualConditionComponent, selectors: [["ngx-visual-condition"]], decls: 1, vars: 0, consts: [["title", "Visual Condition"]], template: function VisualConditionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-mat-table", 0);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_cml_cml_module_ts.js.map