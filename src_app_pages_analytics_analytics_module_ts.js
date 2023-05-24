"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_analytics_analytics_module_ts"],{

/***/ 2733:
/*!********************************************************!*\
  !*** ./src/app/pages/analytics/analytics.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsComponent": () => (/* binding */ AnalyticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AnalyticsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnalyticsComponent.ɵfac = function AnalyticsComponent_Factory(t) { return new (t || AnalyticsComponent)(); };
AnalyticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyticsComponent, selectors: [["ngx-analytics"]], decls: 1, vars: 0, template: function AnalyticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 92679:
/*!*****************************************************!*\
  !*** ./src/app/pages/analytics/analytics.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsModule": () => (/* binding */ AnalyticsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.component */ 2733);
/* harmony import */ var _analytics_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.routing */ 54625);
/* harmony import */ var _corrosion_rate_trend_corrosion_rate_trend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corrosion-rate-trend/corrosion-rate-trend.component */ 80281);
/* harmony import */ var _remaining_life_trend_remaining_life_trend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remaining-life-trend/remaining-life-trend.component */ 55743);
/* harmony import */ var _corrosion_rate_trend_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./corrosion-rate-trend/chart/remaining-chart.component */ 29205);
/* harmony import */ var _corrosion_rate_trend_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corrosion-rate-trend/chart/thickness-chart.component */ 63511);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _corrosion_rate_trend_chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./corrosion-rate-trend/chart/corrosionR-chart.component */ 49668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












class AnalyticsModule {
}
AnalyticsModule.ɵfac = function AnalyticsModule_Factory(t) { return new (t || AnalyticsModule)(); };
AnalyticsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AnalyticsModule });
AnalyticsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbMenuModule,
            _analytics_routing__WEBPACK_IMPORTED_MODULE_2__.AnalyticsRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AnalyticsModule, { declarations: [_analytics_component__WEBPACK_IMPORTED_MODULE_1__.AnalyticsComponent,
        _corrosion_rate_trend_corrosion_rate_trend_component__WEBPACK_IMPORTED_MODULE_3__.CorrosionRateTrendComponent,
        _remaining_life_trend_remaining_life_trend_component__WEBPACK_IMPORTED_MODULE_4__.RemainingLifeTrendComponent,
        _corrosion_rate_trend_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_6__.ThicknessChartComponent,
        _corrosion_rate_trend_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_5__.RemainingChartComponent,
        _corrosion_rate_trend_chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_8__.CorrosionRChartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbMenuModule,
        _analytics_routing__WEBPACK_IMPORTED_MODULE_2__.AnalyticsRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule] }); })();


/***/ }),

/***/ 54625:
/*!******************************************************!*\
  !*** ./src/app/pages/analytics/analytics.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsRoutingModule": () => (/* binding */ AnalyticsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cml_cml_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cml/cml.component */ 55526);
/* harmony import */ var _corrosion_rate_trend_corrosion_rate_trend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corrosion-rate-trend/corrosion-rate-trend.component */ 80281);
/* harmony import */ var _remaining_life_trend_remaining_life_trend_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remaining-life-trend/remaining-life-trend.component */ 55743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [{
        path: '',
        component: _cml_cml_component__WEBPACK_IMPORTED_MODULE_0__.CMLComponent,
        children: [
            {
                path: 'corrosion-rate-trend',
                component: _corrosion_rate_trend_corrosion_rate_trend_component__WEBPACK_IMPORTED_MODULE_1__.CorrosionRateTrendComponent
            },
            {
                path: 'remaining-life-trend',
                component: _remaining_life_trend_remaining_life_trend_component__WEBPACK_IMPORTED_MODULE_2__.RemainingLifeTrendComponent
            },
        ],
    }];
class AnalyticsRoutingModule {
}
AnalyticsRoutingModule.ɵfac = function AnalyticsRoutingModule_Factory(t) { return new (t || AnalyticsRoutingModule)(); };
AnalyticsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AnalyticsRoutingModule });
AnalyticsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 49668:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/analytics/corrosion-rate-trend/chart/corrosionR-chart.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrosionRChartComponent": () => (/* binding */ CorrosionRChartComponent)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class CorrosionRChartComponent extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions("Corrosion Rate vs Year", 'CR', 'Piping');
    }
    ngOnInit() {
        this.generateChart('CorrosionR');
    }
}
CorrosionRChartComponent.ɵfac = function CorrosionRChartComponent_Factory(t) { return new (t || CorrosionRChartComponent)(); };
CorrosionRChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CorrosionRChartComponent, selectors: [["ngx-corrosionR-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "CorrosionR"]], template: function CorrosionRChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 29205:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/analytics/corrosion-rate-trend/chart/remaining-chart.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemainingChartComponent": () => (/* binding */ RemainingChartComponent)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class RemainingChartComponent extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions("Remaining Life vs Year", 'Remaining Life (years)', 'Year');
    }
    ngOnInit() {
        this.generateChart('Remaining');
    }
}
RemainingChartComponent.ɵfac = function RemainingChartComponent_Factory(t) { return new (t || RemainingChartComponent)(); };
RemainingChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RemainingChartComponent, selectors: [["ngx-remaining-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "Remaining"]], template: function RemainingChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 63511:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/analytics/corrosion-rate-trend/chart/thickness-chart.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThicknessChartComponent": () => (/* binding */ ThicknessChartComponent)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ThicknessChartComponent extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions("Thickness vs Year", 'Thickness (mm)', 'Year');
    }
    ngOnInit() {
        this.generateChart('Thickness');
    }
}
ThicknessChartComponent.ɵfac = function ThicknessChartComponent_Factory(t) { return new (t || ThicknessChartComponent)(); };
ThicknessChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThicknessChartComponent, selectors: [["ngx-thickness-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "Thickness"]], template: function ThicknessChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 80281:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/analytics/corrosion-rate-trend/corrosion-rate-trend.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorrosionRateTrendComponent": () => (/* binding */ CorrosionRateTrendComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart/thickness-chart.component */ 63511);
/* harmony import */ var _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/remaining-chart.component */ 29205);
/* harmony import */ var _chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/corrosionR-chart.component */ 49668);






chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_3__.registerables);
class CorrosionRateTrendComponent {
    constructor() { }
    ngOnInit() {
    }
}
CorrosionRateTrendComponent.ɵfac = function CorrosionRateTrendComponent_Factory(t) { return new (t || CorrosionRateTrendComponent)(); };
CorrosionRateTrendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CorrosionRateTrendComponent, selectors: [["ngx-corrosion-rate-trend"]], decls: 9, vars: 0, consts: [[1, "row"], [1, "col-6"]], template: function CorrosionRateTrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body")(2, "div", 0)(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ngx-thickness-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "ngx-remaining-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "ngx-corrosionR-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_0__.ThicknessChartComponent, _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_1__.RemainingChartComponent, _chart_corrosionR_chart_component__WEBPACK_IMPORTED_MODULE_2__.CorrosionRChartComponent], encapsulation: 2 });


/***/ }),

/***/ 55743:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/analytics/remaining-life-trend/remaining-life-trend.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemainingLifeTrendComponent": () => (/* binding */ RemainingLifeTrendComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);


class RemainingLifeTrendComponent {
    constructor() { }
    ngOnInit() {
    }
}
RemainingLifeTrendComponent.ɵfac = function RemainingLifeTrendComponent_Factory(t) { return new (t || RemainingLifeTrendComponent)(); };
RemainingLifeTrendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RemainingLifeTrendComponent, selectors: [["ngx-remaining-life-trend"]], decls: 1, vars: 0, consts: [["title", "Remaining Life Trend"]], template: function RemainingLifeTrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-mat-table", 0);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1haW5pbmctbGlmZS10cmVuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_analytics_module_ts.js.map