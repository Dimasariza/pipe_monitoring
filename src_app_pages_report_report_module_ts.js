"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_report_report_module_ts"],{

/***/ 47024:
/*!**********************************************!*\
  !*** ./src/app/component/common-variable.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Variables": () => (/* binding */ Variables)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class Variables {
    constructor() {
        this.damageMechanismName = [
            { id: "01", piping_damage_mechanism: "General and localized metal loss" },
            { id: "02", piping_damage_mechanism: "Sulfidation and High Temp. H2S/H2 Corrosion" },
            { id: "03", piping_damage_mechanism: "Oxidation" },
            { id: "04", piping_damage_mechanism: "Microbiologically Induced Corrosion (MIC)" },
            { id: "05", piping_damage_mechanism: "Naphthenic Acid Corrosion" },
            { id: "06", piping_damage_mechanism: "Erosion/Erosison-Corrosion" },
            { id: "07", piping_damage_mechanism: "Galvanic Corrosion" },
            { id: "08", piping_damage_mechanism: "Atmospheric Corrosion" },
            { id: "09", piping_damage_mechanism: "Corrosion Under Insulation (CUI)" },
            { id: "10", piping_damage_mechanism: "Cooling Water Corrosion" },
            { id: "11", piping_damage_mechanism: "Boiler Water Condensate Corrosion" },
            { id: "12", piping_damage_mechanism: "Soil Corrosion" },
            { id: "13", piping_damage_mechanism: "Ammonium Bisulfide and Chloride Corrosion" },
            { id: "14", piping_damage_mechanism: "Carbon Dioxide Corrosion" },
            { id: "15", piping_damage_mechanism: "Surface Connected Cracking" },
            { id: "16", piping_damage_mechanism: "Mechanical Fatigue Cracking" },
            { id: "17", piping_damage_mechanism: "Caustic Stress Corrosion Cracking" },
            { id: "18", piping_damage_mechanism: "Polythionic Stress Corrosion Cracking" },
            { id: "19", piping_damage_mechanism: "Sulfide Stress Cracking" },
            { id: "20", piping_damage_mechanism: "Chloride Stress Corrosion Cracking" },
            { id: "21", piping_damage_mechanism: "Subsurface Cracking" },
            { id: "22", piping_damage_mechanism: "Hydrogen Induced Cracking" },
            { id: "23", piping_damage_mechanism: "Wet Hydrogen Sulfide Cracking" },
            { id: "24", piping_damage_mechanism: "High-Temperature Micro-fissuring/Micro-void Fromation and Eventual Macro Cracking" },
            { id: "25", piping_damage_mechanism: "High-temperature Hydrogen Attack" },
            { id: "26", piping_damage_mechanism: "Creep/Stress Rupture" },
            { id: "27", piping_damage_mechanism: "Metallurgical Changes" },
            { id: "28", piping_damage_mechanism: "Graphitization" },
            { id: "29", piping_damage_mechanism: "Temper Embrittlement" },
            { id: "30", piping_damage_mechanism: "Hydrogen Embrittlement" },
        ];
    }
}
Variables.ɵfac = function Variables_Factory(t) { return new (t || Variables)(); };
Variables.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Variables, factory: Variables.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 52787:
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/piping-circuits/piping-circuits.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipingCircuitService": () => (/* binding */ PipingCircuitService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class PipingCircuitService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getPipingCircuits() {
        const url = this.apiUrl + "/circuit";
        return this.httpClient.get(url);
    }
    addPipingCircuits(data) {
        const url = this.apiUrl + "/circuit";
        return this.httpClient.post(url, data);
    }
    updatePipingCircuits(data) {
        const url = this.apiUrl + "/circuit/" + data.id;
        return this.httpClient.put(url, data);
    }
    deletePipingCircuits(id) {
        const url = this.apiUrl + "/circuit/" + id;
        return this.httpClient.delete(url);
    }
}
PipingCircuitService.ɵfac = function PipingCircuitService_Factory(t) { return new (t || PipingCircuitService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PipingCircuitService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PipingCircuitService, factory: PipingCircuitService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60133:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/piping-assets/chart/remaining-chart.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRemainingChart": () => (/* binding */ DashboardRemainingChart)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class DashboardRemainingChart extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions({
            chartTitle: "Remaining Life vs Year",
            yTitle: 'Remaining Life (years)',
            xTitle: 'Year'
        });
    }
    ngOnInit() {
        this.generateChart('DashboardRemaining');
    }
}
DashboardRemainingChart.ɵfac = function DashboardRemainingChart_Factory(t) { return new (t || DashboardRemainingChart)(); };
DashboardRemainingChart.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardRemainingChart, selectors: [["ngx-dashboard-remaining-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "DashboardRemaining"]], template: function DashboardRemainingChart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 3009:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/report/piping-assets/chart/thickness-chart.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardThicknessChart": () => (/* binding */ DashboardThicknessChart)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class DashboardThicknessChart extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.defineOptions({
            chartTitle: "Thickness vs Year",
            yTitle: 'Thickness (mm)',
            xTitle: 'Year'
        });
    }
    ngOnInit() {
        this.generateChart('DashboardThickness');
    }
}
DashboardThicknessChart.ɵfac = function DashboardThicknessChart_Factory(t) { return new (t || DashboardThicknessChart)(); };
DashboardThicknessChart.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardThicknessChart, selectors: [["ngx-dashboard-thickness-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "DashboardThickness"]], template: function DashboardThicknessChart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 76851:
/*!********************************************************************!*\
  !*** ./src/app/pages/report/piping-assets/report-piping-assets.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPipingAssets": () => (/* binding */ ReportPipingAssets)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard/piping-assets/piping-assets.service */ 78539);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report-service */ 51683);
/* harmony import */ var _component_common_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/common-variable */ 47024);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/remaining-chart.component */ 60133);
/* harmony import */ var _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chart/thickness-chart.component */ 3009);




















function ReportPipingAssets_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](option_r8);
} }
const _c0 = function () { return { "width": "40px" }; };
function ReportPipingAssets_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Piping ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function ReportPipingAssets_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseover", function ReportPipingAssets_td_17_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1); return _r10.style.color = "#0492c2"; })("mouseout", function ReportPipingAssets_td_17_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const element_r9 = restoredCtx.$implicit; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.pipeData == element_r9 ? _r10.style.color = "#0492c2" : _r10.style.color = "black"; })("click", function ReportPipingAssets_td_17_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const element_r9 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.showData(element_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c1, ctx_r3.pipeData == element_r9 ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r9.piping_id, " ");
} }
function ReportPipingAssets_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 21);
} }
function ReportPipingAssets_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 22);
} }
function ReportPipingAssets_h5_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please Add Piping Assets.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ReportPipingAssets_nb_card_23_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Image Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ReportPipingAssets_nb_card_23_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", i_r23 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", image_r22.src, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", image_r22 == null ? null : image_r22.alt);
} }
function ReportPipingAssets_nb_card_23_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52)(1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r24 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](spec_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r18.pipeData[spec_r24.props]);
} }
function ReportPipingAssets_nb_card_23_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const visual_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](visual_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](visual_r25.data || "-");
} }
function ReportPipingAssets_nb_card_23_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52)(1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "0.3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](spec_r26.name);
} }
const _c2 = function () { return { show: false }; };
const _c3 = function () { return { pageSize: 5 }; };
function ReportPipingAssets_nb_card_23_ngx_mat_table_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-mat-table", 46);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c3))("columnDetails", ctx_r21.inspectionHistoryDetails)("tableData", ctx_r21.inspectionHistoryData);
} }
function ReportPipingAssets_nb_card_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body")(2, "section")(3, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 6)(6, "div", 24)(7, "div", 25)(8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ReportPipingAssets_nb_card_23_span_9_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ReportPipingAssets_nb_card_23_div_10_Template, 3, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 33)(20, "div")(21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "ngx-qrcode", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "See Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 37)(26, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Date In Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Recomendation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, ReportPipingAssets_nb_card_23_div_43_Template, 5, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "section")(45, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Piping Visual");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, ReportPipingAssets_nb_card_23_div_48_Template, 5, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "section", 44)(50, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Piping Calculation");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, ReportPipingAssets_nb_card_23_div_53_Template, 5, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "section")(55, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Piping Damage Mechanism");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "ngx-mat-table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "section")(59, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Inspection History");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, ReportPipingAssets_nb_card_23_ngx_mat_table_61_Template, 1, 6, "ngx-mat-table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "section")(63, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](66, "ngx-dashboard-remaining-chart", 48)(67, "ngx-dashboard-thickness-chart", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Piping Assets ", ctx_r7.pipeData == null ? null : ctx_r7.pipeData.piping_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r7.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("elementType", ctx_r7.elementType)("errorCorrectionLevel", ctx_r7.correctionLevel)("value", ctx_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r7.pipeData == null ? null : ctx_r7.pipeData.date_in_service) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r7.pipeData == null ? null : ctx_r7.pipeData.class) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r7.pipeData == null ? null : ctx_r7.pipeData.notes) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r7.pipeData == null ? null : ctx_r7.pipeData.recomendation) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.spesificationItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.pipingVisual);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.pipingThickness);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](19, _c3))("columnDetails", ctx_r7.damageMechanismDetails)("tableData", ctx_r7.damageMechanismData);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.inspectionHistoryData.length);
} }
const _c4 = function () { return [1, 2, 3, 4, 5]; };
class ReportPipingAssets {
    constructor(pipingAssetsService, reportService, variables) {
        this.pipingAssetsService = pipingAssetsService;
        this.reportService = reportService;
        this.variables = variables;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__.NgxQrcodeElementTypes.URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__.NgxQrcodeErrorCorrectionLevels.HIGH;
        this.value = 'https://www.google.com/';
        this.tablePosition = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.tablePosition);
        this.displayedColumns = ['piping_id'];
        this.resultsLength = 0;
        this.imageLink = [];
        this.spesificationItem = [
            { props: 'nominal_pipe_size', name: "Nominal Pipe Size", unit: 'mm' },
            { props: 'pipe_design_code', name: "Pipe Design Code" },
            { props: 'schedule', name: "Schedule", unit: 'mm' },
            { props: 'outside_diameter', name: "Outside Diameter" },
            { props: 'longtd_quality_factor', name: "Longtd. Quality Factor (E)" },
            { props: 'weld_joint_factor', name: "Weld Joint Factor (W)" },
            { props: 'allowable_unit_stress', name: "Allowable Unit Stress (S)", unit: 'psi' },
            { props: 'coefficient', name: "Coefficient (Y)" },
            { props: 'min_design_pressure', name: "Min. Design Pressure (P min)", unit: 'psig' },
            { props: 'max_design_pressure', name: "Max. Design Pressure (P max)", unit: 'psig' },
            { props: 'min_design_temperature', name: "Min. Design Temperature (T min)", unit: 'F' },
            { props: 'max_design_temperature', name: "Max Design Temperature (T max)", unit: 'F' },
            { props: 'corrosion_allowance', name: "Corrosion Allowance", unit: 'mm' },
            { props: 'mechanical_allowance', name: "Mechanical Allowances", unit: 'mm' },
            { props: 'min_structural_thickness', name: "Min. Structural Thickness", unit: 'mm' },
            { props: 'min_alert_thickness', name: "Min. Alert Thickness", unit: 'mm' },
            { props: 'nominal_thickness', name: "Nominal Thickness", unit: 'mm' },
        ];
        this.pipingVisual = [
            { name: 'Leaks', props: 'leaks_condition', data: null },
            { name: 'Misalignment', props: 'misalignment_condition', data: null },
            { name: 'Vibration', props: 'vibration_condition', data: null },
            { name: 'Supports', props: 'supports_condition', data: null },
            { name: 'Corrosion', props: 'corrosion_condition', data: null },
            { name: 'Insulation', props: 'insulation_condition', data: null },
        ];
        this.pipingThickness = [
            { name: 'Reading', props: 'reading' },
            { name: 'Long Term Cr', props: 'long_term_cr' },
            { name: 'Remaining Life', props: 'remaining_life' },
            { name: 'Thick. Min', props: 'thick_min' },
            { name: 'Short Term CR', props: 'short_term_cr' },
            { name: 'Half Life', props: 'half_life' },
            { name: 'Retirement Date', props: 'retirement_date' },
        ];
        this.damageMechanismDetails = [
            { type: 'text', prop: 'piping_damage_mechanism', head: 'Piping Damage Mechanism', width: '200px' },
            { type: 'text', prop: 'notes', head: 'Notes', width: '200px' },
            { type: 'text', prop: 'type_location', head: 'Expected Type/Location', width: '200px' },
            { type: 'text', prop: 'last_insp_date', head: 'Last Insp.Date', width: '200px' },
            { type: 'text', prop: 'insp_due_date', head: 'Insp. Due Date', width: '200px' },
        ];
        this.inspectionHistoryData = [];
        this.inspectionHistoryDetails = [
            { type: 'text', prop: 'inspection_id', head: 'Inspection Id', width: '200px' },
            { type: 'text', prop: 'inspection_date', head: 'Inspection Date', width: '200px' },
            { type: 'text', prop: 'damage_mechanism', head: 'Damage Mechanism', width: '200px' },
            { type: 'text', prop: 'inspection_summary', head: 'Inspection Summary', width: '200px' },
            { type: 'text', prop: 'caried_out', head: 'Caried Out', width: '200px' },
        ];
    }
    ngOnInit() {
        this.pipingAssetsService.getPipingAssets()
            .subscribe(({ data }) => {
            const firsData = data[0];
            this.showData(firsData);
            this.getReportData(firsData.id);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            // this.inspectionHistoryData = data
        });
    }
    getReportData(id) {
        this.reportService.getAssetsReport(id)
            .subscribe(({ data: { damage_mechanism, visual_condition } }) => {
            this.damageMechanismData = this.variables.damageMechanismName.map(({ id, piping_damage_mechanism }) => {
                const damage = damage_mechanism === null || damage_mechanism === void 0 ? void 0 : damage_mechanism[id];
                if (damage)
                    return Object.assign(Object.assign({}, damage), { piping_damage_mechanism });
                return null;
            })
                .filter(item => item != null);
            this.viewTable.regenerateTable(this.damageMechanismData);
            this.pipingVisual = this.pipingVisual.map(({ name, props }) => {
                var _a;
                return ({
                    name, props, data: (_a = visual_condition[props]) !== null && _a !== void 0 ? _a : null
                });
            });
            console.log(this.pipingVisual);
        });
    }
    showData(element) {
        var _a;
        this.getReportData(element.id);
        this.pipeData = element;
        this.imageLink = (_a = element === null || element === void 0 ? void 0 : element.images) === null || _a === void 0 ? void 0 : _a.map(image => ({ src: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/image/' + image, alt: 'Pipe Asssets' }));
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ReportPipingAssets.ɵfac = function ReportPipingAssets_Factory(t) { return new (t || ReportPipingAssets)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_2__.PipingAssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_component_common_variable__WEBPACK_IMPORTED_MODULE_4__.Variables)); };
ReportPipingAssets.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ReportPipingAssets, selectors: [["ngx-report-piping-assets"]], viewQuery: function ReportPipingAssets_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 24, vars: 10, consts: [[1, "d-flex", "justify-content-between"], [1, "d-flex"], ["placeholder", "Piping Id Filter", "status", "primary", 1, "mx-5"], ["value", "option", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_id"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], [4, "ngIf"], ["value", "option"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "fw-bolder", "text-primary", "mb-2", "d-block"], [1, "col-8"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-4", "d-flex", "justify-content-center", "align-self-center"], [1, "border", "rounded"], [3, "elementType", "errorCorrectionLevel", "value"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 1, "mt-2", "w-100"], [1, "row", "mt-3"], [1, "text-secondary", "col-4"], [1, "text-secondary"], [1, "row", "row-cols-2", "mt-3"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [1, "row", "row-cols-3"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "row", "row-cols-3", "mt-3"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData", 4, "ngIf"], [1, "col-6"], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "15rem"], [1, "w-100", "img-fluid", 3, "src", "alt"], [1, "row", "mb-2"], [1, "col-8", "text-secondary"], [1, "col"], [1, "col", "text-secondary"]], template: function ReportPipingAssets_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Piping Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "nb-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ReportPipingAssets_nb_option_6_Template, 2, 1, "nb-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function ReportPipingAssets_Template_input_keyup_10_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nb-card-body", 6)(13, "div", 7)(14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ReportPipingAssets_th_16_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ReportPipingAssets_td_17_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ReportPipingAssets_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ReportPipingAssets_tr_19_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ReportPipingAssets_h5_22_Template, 2, 0, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ReportPipingAssets_nb_card_23_Template, 68, 20, "nb-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.pipeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.pipeData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbOptionComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_8__.QrcodeComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbButtonComponent, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent, _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_5__.DashboardRemainingChart, _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_6__.DashboardThicknessChart], encapsulation: 2 });


/***/ }),

/***/ 80962:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/report/piping-circuits/chart/piping-circuit-trend-chart.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipingCircuitChart": () => (/* binding */ PipingCircuitChart)
/* harmony export */ });
/* harmony import */ var _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../component/chart/charts-component */ 17313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class PipingCircuitChart extends _component_chart_charts_component__WEBPACK_IMPORTED_MODULE_0__.ChartsComponent {
    constructor() {
        super();
        this.chartType = 'bar';
        this.yLabels = ['Pipe 101A', 'Pipe 102A', 'Pipe 103A', 'Pipe 104A', 'Pipe 105A'];
        this.legendPosition = 'bottom';
        this.showRightSclae = true;
        this.datasets = [
            {
                label: "Reading (mm)",
                yAxisID: 'A',
                data: ['467', '576', '572', '79', '92'],
                backgroundColor: 'rgba(255,0,0,.5)',
                borderColor: 'rgba(255,0,0,.5)',
            },
            {
                label: "T minimum (mm)",
                yAxisID: 'A',
                data: ['542', '542', '536', '327', '17'],
                backgroundColor: 'rgba(100,100,0,.5)',
                borderColor: 'rgba(100,100,0,.5)',
            },
            {
                label: "Nominal Thickness (mm)",
                yAxisID: 'A',
                data: ['504', '142', '336', '317', '100'],
                backgroundColor: 'rgba(10,50,100,.5)',
                borderColor: 'rgba(10,50,100,.5)',
            },
            {
                label: "Corrosion Rate (mm/Year)",
                yAxisID: 'B',
                data: ['0.052', '0.042', '0.336', '0.527', '0.517'],
                backgroundColor: 'rgba(90,190,90,.5)',
                borderColor: 'rgba(90,190,90,.5)',
            },
        ];
        this.defineOptions({
            chartTitle: "Chart Piping Circuit",
        });
    }
    ngOnInit() {
        this.generateChart('piping_circuit_chart');
    }
}
PipingCircuitChart.ɵfac = function PipingCircuitChart_Factory(t) { return new (t || PipingCircuitChart)(); };
PipingCircuitChart.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PipingCircuitChart, selectors: [["ngx-piping-circuit-chart"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["id", "piping_circuit_chart"]], template: function PipingCircuitChart_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 94724:
/*!***********************************************************************!*\
  !*** ./src/app/pages/report/piping-circuits/report-piping-circuit.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPipingCircuit": () => (/* binding */ ReportPipingCircuit)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_circuits_piping_circuits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard/piping-circuits/piping-circuits.service */ 52787);
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report-service */ 51683);
/* harmony import */ var _component_common_variable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/common-variable */ 47024);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);
/* harmony import */ var _chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chart/piping-circuit-trend-chart */ 80962);


















function ReportPipingCircuit_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r8);
} }
const _c0 = function () { return { "width": "40px" }; };
function ReportPipingCircuit_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Circuit Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function ReportPipingCircuit_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseover", function ReportPipingCircuit_td_17_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); return _r10.style.color = "#0492c2"; })("mouseout", function ReportPipingCircuit_td_17_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const element_r9 = restoredCtx.$implicit; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.selectionData.piping_circuit_name == element_r9.piping_circuit_name ? _r10.style.color = "#0492c2" : _r10.style.color = "black"; })("click", function ReportPipingCircuit_td_17_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const element_r9 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.showData(element_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, ctx_r3.selectionData.piping_circuit_name == element_r9.piping_circuit_name ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r9.piping_circuit_name, " ");
} }
function ReportPipingCircuit_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
} }
function ReportPipingCircuit_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 22);
} }
function ReportPipingCircuit_h5_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Please Add Piping Circuit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ReportPipingCircuit_nb_card_23_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Image Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ReportPipingCircuit_nb_card_23_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", i_r21 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", image_r20.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", image_r20 == null ? null : image_r20.alt);
} }
function ReportPipingCircuit_nb_card_23_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const visual_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](visual_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](visual_r22.data);
} }
function ReportPipingCircuit_nb_card_23_nb_list_item_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-list-item", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mechanism_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mechanism_r23.name, " ");
} }
const _c2 = function () { return { show: false }; };
const _c3 = function () { return { pageSize: 5 }; };
function ReportPipingCircuit_nb_card_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body")(2, "section")(3, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 6)(6, "div", 24)(7, "div", 25)(8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ReportPipingCircuit_nb_card_23_span_9_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ReportPipingCircuit_nb_card_23_div_10_Template, 3, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 33)(20, "div")(21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "ngx-qrcode", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "See Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 37)(26, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Date In Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Recomendation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "section")(43, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Piping Visual");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ReportPipingCircuit_nb_card_23_div_46_Template, 5, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "section", 42)(48, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Piping Thickness");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "ngx-mat-table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "section")(52, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Piping Circuit Damage Mechanisms");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Active Damage Mechanism");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, ReportPipingCircuit_nb_card_23_nb_list_item_57_Template, 2, 1, "nb-list-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "section")(59, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Inspection History");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "ngx-mat-table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "section")(63, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "ngx-piping-circuit-chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.piping_circuit_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.imageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("elementType", ctx_r7.elementType)("errorCorrectionLevel", ctx_r7.correctionLevel)("value", ctx_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.date_in_service);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.selectionData == null ? null : ctx_r7.selectionData.recomendation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.pipingVisual);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](20, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](21, _c3))("columnDetails", ctx_r7.columnDetails)("tableData", ctx_r7.tableData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.activeDamageMechaninsm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](23, _c3))("columnDetails", ctx_r7.inspectionHistoryDetails)("tableData", ctx_r7.tableData);
} }
const _c4 = function () { return [1, 2, 3, 4, 5]; };
class ReportPipingCircuit {
    constructor(pipingCircuitService, reportService, variables) {
        this.pipingCircuitService = pipingCircuitService;
        this.reportService = reportService;
        this.variables = variables;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__.NgxQrcodeElementTypes.URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__.NgxQrcodeErrorCorrectionLevels.HIGH;
        this.value = 'https://www.google.com/';
        this.tablePosition = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.tablePosition);
        this.displayedColumns = ['piping_circuit_name'];
        this.resultsLength = 0;
        this.imageLink = [];
        this.pipingVisual = [
            { name: 'Leaks', props: 'leaks_condition', data: null },
            { name: 'Misalignment', props: 'misalignment_condition', data: null },
            { name: 'Vibration', props: 'vibration_condition', data: null },
            { name: 'Supports', props: 'supports_condition', data: null },
            { name: 'Corrosion', props: 'corrosion_condition', data: null },
            { name: 'Insulation', props: 'insulation_condition', data: null },
        ];
        this.activeDamageMechaninsm = [];
        this.tableData = [];
        this.columnDetails = [
            { type: 'text', prop: 'piping_id', head: 'Piping Id', width: '200px' },
            { type: 'text', prop: 'reading', head: 'Reading (mm)', width: '200px' },
            { type: 'text', prop: 't_min', head: 'T min (mm)', width: '200px' },
            { type: 'text', prop: 'lt_cr', head: 'LT CR (mm/Year)', width: '200px' },
            { type: 'text', prop: 'st_cr', head: 'ST CR (mm/Year)', width: '200px' },
            { type: 'text', prop: 'rl', head: 'RL (Years)', width: '200px' },
            { type: 'text', prop: 'hl', head: 'HL (Years)', width: '200px' },
            { type: 'text', prop: 'retriement_date', head: 'Retriement date', width: '200px' },
        ];
        this.inspectionHistoryDetails = [
            { type: 'text', prop: 'inspection_id', head: 'Inspection Id', width: '200px' },
            { type: 'text', prop: 'inspection_date', head: 'Inspection Date', width: '200px' },
            { type: 'text', prop: 'inspection_summary', head: 'Inspection Summary', width: '200px' },
            { type: 'text', prop: 'caried_out', head: 'Caried Out', width: '200px' },
            // { type : 'button', prop : 'edit', head : 'Update', width : '200px' },
        ];
    }
    ngOnInit() {
        this.pipingCircuitService.getPipingCircuits()
            .subscribe(({ data }) => {
            this.showData(data[0]);
            this.getCircuitReport(data[0].id);
            this.tableData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
        for (let i = 0; i < 20; i++)
            this.tableData.push({
                piping_id: 'id',
                reading: 'reading',
                t_min: 'T min',
                lt_cr: 'LT CR',
                st_cr: 'ST CR',
                rl: 'RL',
                hl: 'HL',
                retriement_date: 'Retriement Date',
            });
    }
    getCircuitReport($id) {
        this.reportService.getCircuitReport($id)
            .subscribe(({ data: { assets, circuit } }) => {
            this.pipingVisual = this.pipingVisual.map(({ name, props }) => ({
                name, props,
                data: this.switchToLevel(Math.round(this.visualConditionAvg(assets, props) / assets.length))
            }));
            assets.forEach(({ damage_mechanism }) => {
                const damage = this.variables.damageMechanismName
                    .map(({ id, piping_damage_mechanism }) => {
                    const damage = damage_mechanism === null || damage_mechanism === void 0 ? void 0 : damage_mechanism[id];
                    if (damage)
                        return Object.assign(Object.assign({}, damage), { piping_damage_mechanism });
                    return null;
                })
                    .filter(item => item != null)
                    .map(({ piping_damage_mechanism }) => ({ name: piping_damage_mechanism }));
                damage.forEach(element => {
                    if (!this.activeDamageMechaninsm.includes(element))
                        this.activeDamageMechaninsm.push(element);
                });
            });
        });
    }
    visualConditionAvg(asset, props) {
        return asset.map(x => this.switchToPoint(x.visual_condition[props]))
            .reduce((x, y) => {
            return x + y;
        }, 0);
    }
    switchToPoint(c) {
        if (c == 'Excellent')
            return 5;
        if (c == 'Good')
            return 4;
        if (c == 'Average')
            return 3;
        if (c == 'Below Average')
            return 2;
        if (c == 'Poor')
            return 1;
        return 0;
    }
    switchToLevel(l) {
        if (l == 5)
            return 'Excellent';
        if (l == 4)
            return 'Good';
        if (l == 3)
            return 'Average';
        if (l == 2)
            return 'Below Average';
        if (l == 1)
            return 'Poor';
        return null;
    }
    showData(element) {
        var _a;
        this.selectionData = element;
        this.imageLink = (_a = element === null || element === void 0 ? void 0 : element.images) === null || _a === void 0 ? void 0 : _a.map(image => ({ src: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/image/' + image, alt: 'Pipe Asssets' }));
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ReportPipingCircuit.ɵfac = function ReportPipingCircuit_Factory(t) { return new (t || ReportPipingCircuit)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dashboard_piping_circuits_piping_circuits_service__WEBPACK_IMPORTED_MODULE_1__.PipingCircuitService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_report_service__WEBPACK_IMPORTED_MODULE_2__.ReportService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_component_common_variable__WEBPACK_IMPORTED_MODULE_3__.Variables)); };
ReportPipingCircuit.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ReportPipingCircuit, selectors: [["ngx-report-piping-circuit"]], viewQuery: function ReportPipingCircuit_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 24, vars: 10, consts: [[1, "d-flex", "justify-content-between"], [1, "d-flex"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], ["placeholder", "Piping Id Filter", "status", "primary", 1, "mx-5"], ["value", "option", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_circuit_name"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], [4, "ngIf"], ["value", "option"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "fw-bolder", "text-primary", "mb-2", "d-block"], [1, "col-8"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-4", "d-flex", "justify-content-center", "align-self-center"], [1, "border", "rounded"], [3, "elementType", "errorCorrectionLevel", "value"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 1, "mt-2", "w-100"], [1, "row", "mt-3"], [1, "text-secondary", "col-4"], [1, "text-secondary"], [1, "row", "row-cols-3"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "mt-3"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData"], ["style", "height: 1rem;", 4, "ngFor", "ngForOf"], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "15rem"], [1, "w-100", "img-fluid", 3, "src", "alt"], [1, "col", "text-secondary"], [1, "col"], [2, "height", "1rem"]], template: function ReportPipingCircuit_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Piping Circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function ReportPipingCircuit_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "nb-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ReportPipingCircuit_nb_option_11_Template, 2, 1, "nb-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "nb-card-body", 6)(13, "div", 7)(14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ReportPipingCircuit_th_16_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ReportPipingCircuit_td_17_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ReportPipingCircuit_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ReportPipingCircuit_tr_19_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ReportPipingCircuit_h5_22_Template, 2, 0, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ReportPipingCircuit_nb_card_23_Template, 66, 24, "nb-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.selectionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectionData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardHeaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__.QrcodeComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonComponent, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_4__.MatTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbListItemComponent, _chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_5__.PipingCircuitChart], encapsulation: 2 });


/***/ }),

/***/ 51683:
/*!************************************************!*\
  !*** ./src/app/pages/report/report-service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getAssetsReport(id) {
        const url = this.apiUrl + '/asset_report/' + id;
        return this.httpClient.get(url);
    }
    getCircuitReport(id) {
        const url = this.apiUrl + '/circuit_report/' + id;
        return this.httpClient.get(url);
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31248:
/*!**************************************************!*\
  !*** ./src/app/pages/report/report.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class ReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(); };
ReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["ngx-report"]], decls: 1, vars: 0, template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 81725:
/*!***********************************************!*\
  !*** ./src/app/pages/report/report.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportModule": () => (/* binding */ ReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.component */ 31248);
/* harmony import */ var _repot_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repot.routing */ 94134);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _piping_assets_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piping-assets/chart/thickness-chart.component */ 3009);
/* harmony import */ var _piping_assets_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piping-assets/chart/remaining-chart.component */ 60133);
/* harmony import */ var _piping_assets_report_piping_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piping-assets/report-piping-assets */ 76851);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _piping_circuits_report_piping_circuit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./piping-circuits/report-piping-circuit */ 94724);
/* harmony import */ var _piping_circuits_chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piping-circuits/chart/piping-circuit-trend-chart */ 80962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);




















class ReportModule {
}
ReportModule.ɵfac = function ReportModule_Factory(t) { return new (t || ReportModule)(); };
ReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ReportModule });
ReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _repot_routing__WEBPACK_IMPORTED_MODULE_2__.ReportRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbOptionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbListModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_6__.MaterialTableModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_19__.NgxQRCodeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ReportModule, { declarations: [_report_component__WEBPACK_IMPORTED_MODULE_1__.ReportComponent,
        _piping_assets_chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_3__.DashboardThicknessChart,
        _piping_assets_chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_4__.DashboardRemainingChart,
        _piping_assets_report_piping_assets__WEBPACK_IMPORTED_MODULE_5__.ReportPipingAssets,
        _piping_circuits_report_piping_circuit__WEBPACK_IMPORTED_MODULE_7__.ReportPipingCircuit,
        _piping_circuits_chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_8__.PipingCircuitChart], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _repot_routing__WEBPACK_IMPORTED_MODULE_2__.ReportRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbOptionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_11__.NbButtonModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_6__.MaterialTableModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_19__.NgxQRCodeModule] }); })();


/***/ }),

/***/ 94134:
/*!***********************************************!*\
  !*** ./src/app/pages/report/repot.routing.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportRoutingModule": () => (/* binding */ ReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.component */ 31248);
/* harmony import */ var _piping_assets_report_piping_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piping-assets/report-piping-assets */ 76851);
/* harmony import */ var _piping_circuits_report_piping_circuit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piping-circuits/report-piping-circuit */ 94724);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [{
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_0__.ReportComponent,
        children: [
            {
                path: 'piping-assets',
                component: _piping_assets_report_piping_assets__WEBPACK_IMPORTED_MODULE_1__.ReportPipingAssets
            },
            {
                path: 'piping-circuits',
                component: _piping_circuits_report_piping_circuit__WEBPACK_IMPORTED_MODULE_2__.ReportPipingCircuit
            },
        ],
    }];
class ReportRoutingModule {
}
ReportRoutingModule.ɵfac = function ReportRoutingModule_Factory(t) { return new (t || ReportRoutingModule)(); };
ReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ReportRoutingModule });
ReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_report_report_module_ts.js.map