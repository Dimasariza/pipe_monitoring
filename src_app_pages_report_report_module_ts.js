"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_report_report_module_ts"],{

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
        const url = this.apiUrl + "/assets";
        return this.httpClient.post(url, data);
    }
    updatePipingCircuits(data) {
        const url = this.apiUrl + "/assets";
        return this.httpClient.put(url, data);
    }
    deletePipingCircuits(id) {
        const url = this.apiUrl + "/assets/" + id;
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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/piping-assets/piping-assets.service */ 78539);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);
/* harmony import */ var _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/remaining-chart.component */ 60133);
/* harmony import */ var _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/thickness-chart.component */ 3009);
















function ReportPipingAssets_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r12);
} }
const _c0 = function () { return { "width": "40px" }; };
function ReportPipingAssets_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Piping ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function ReportPipingAssets_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function ReportPipingAssets_td_17_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); return _r14.style.color = "#0492c2"; })("mouseout", function ReportPipingAssets_td_17_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const element_r13 = restoredCtx.$implicit; const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.selectionData == element_r13 ? _r14.style.color = "#0492c2" : _r14.style.color = "black"; })("click", function ReportPipingAssets_td_17_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const element_r13 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.showData(element_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, ctx_r3.selectionData == element_r13 ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r13.piping_id, " ");
} }
function ReportPipingAssets_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 45);
} }
function ReportPipingAssets_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 46);
} }
function ReportPipingAssets_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 47)(1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", i_r21 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", image_r20.src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", image_r20 == null ? null : image_r20.alt);
} }
function ReportPipingAssets_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r22 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](spec_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.selectionData[spec_r22.props]);
} }
function ReportPipingAssets_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const visual_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](visual_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](visual_r23.props);
} }
function ReportPipingAssets_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "0.3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](spec_r24.name);
} }
const _c2 = function () { return { show: false }; };
const _c3 = function () { return { pageSize: 5 }; };
function ReportPipingAssets_ngx_mat_table_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-mat-table", 54);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c3))("columnDetails", ctx_r10.damageMechanismDetails)("tableData", ctx_r10.damageMechanismData);
} }
function ReportPipingAssets_ngx_mat_table_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-mat-table", 54);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c3))("columnDetails", ctx_r11.inspectionHistoryDetails)("tableData", ctx_r11.inspectionHistoryData);
} }
const _c4 = function () { return [1, 2, 3, 4, 5]; };
class ReportPipingAssets {
    constructor(pipingAssetsService) {
        this.pipingAssetsService = pipingAssetsService;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__.NgxQrcodeElementTypes.URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__.NgxQrcodeErrorCorrectionLevels.HIGH;
        this.value = 'https://www.google.com/';
        this.tablePosition = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.tablePosition);
        this.displayedColumns = ['piping_id'];
        this.resultsLength = 0;
        this.selectionData = 1;
        this.imageLink = [
            { src: "https://wallpapercave.com/wp/wp6954364.jpg", alt: "Pipe 1" },
            { src: "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt: "Pipe 2" },
            { src: "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt: "Pipe 3" },
        ];
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
            { name: 'Leaks', props: 'Excellent' },
            { name: 'Misalignment', props: 'Good' },
            { name: 'Vibration', props: 'Average' },
            { name: 'Supports', props: 'Below Average' },
            { name: 'Corrosion', props: 'Poor' },
            { name: 'Insulation', props: 'Excellent' },
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
        this.activeDamageMechaninsm = [
            { name: 'Corrosion Under Insulation' },
            { name: 'Creep/Stress Rupture' },
        ];
        this.damageMechanismData = [];
        this.damageMechanismDetails = [
            { type: 'text', prop: 'inspection_id', head: 'Piping Damage Mechanism', width: '200px' },
            { type: 'text', prop: 'inspection_date', head: 'Notes', width: '200px' },
            { type: 'text', prop: 'damage_mechanism', head: 'Expected Type/Location', width: '200px' },
            { type: 'text', prop: 'inspection_summary', head: 'Last Insp.Date', width: '200px' },
            { type: 'text', prop: 'caried_out', head: 'Insp. Due Date', width: '200px' },
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
            this.selectionData = data[0];
            this.inspectionHistoryData = data;
            this.damageMechanismData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    showData(element) {
        this.selectionData = element;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ReportPipingAssets.ɵfac = function ReportPipingAssets_Factory(t) { return new (t || ReportPipingAssets)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__.PipingAssetsService)); };
ReportPipingAssets.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReportPipingAssets, selectors: [["ngx-report-piping-assets"]], viewQuery: function ReportPipingAssets_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 89, vars: 22, consts: [[1, "d-flex", "justify-content-between"], [1, "d-flex"], ["placeholder", "Piping Id Filter", "status", "primary", 1, "mx-5"], ["value", "option", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_id"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], [1, "fw-bolder", "text-primary", "mb-2", "d-block"], [1, "col-8"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-4", "d-flex", "justify-content-center", "align-self-center"], [1, "border", "rounded"], [3, "elementType", "errorCorrectionLevel", "value"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 1, "mt-2", "w-100"], [1, "row", "mt-3"], [1, "text-secondary", "col-4"], [1, "text-secondary"], [1, "row", "row-cols-2", "mt-3"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], [1, "row", "row-cols-3"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "row", "row-cols-3", "mt-3"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData", 4, "ngIf"], [1, "col-6"], ["value", "option"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", ""], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "15rem"], [1, "w-100", "img-fluid", 3, "src", "alt"], [1, "row", "mb-2"], [1, "col-8", "text-secondary"], [1, "col"], [1, "col", "text-secondary"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData"]], template: function ReportPipingAssets_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Piping Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nb-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ReportPipingAssets_nb_option_6_Template, 2, 1, "nb-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function ReportPipingAssets_Template_input_keyup_10_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nb-card-body", 6)(13, "div", 7)(14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ReportPipingAssets_th_16_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ReportPipingAssets_td_17_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ReportPipingAssets_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ReportPipingAssets_tr_19_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15)(22, "nb-card")(23, "nb-card-body")(24, "section")(25, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 6)(28, "div", 17)(29, "div", 18)(30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ReportPipingAssets_div_31_Template, 3, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 26)(41, "div")(42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "ngx-qrcode", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "See Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 30)(47, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Date In Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, ReportPipingAssets_div_64_Template, 5, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "section")(66, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Piping Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, ReportPipingAssets_div_69_Template, 5, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "section", 37)(71, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Piping Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, ReportPipingAssets_div_74_Template, 5, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "section")(76, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Piping Damage Mechanism");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, ReportPipingAssets_ngx_mat_table_78_Template, 1, 6, "ngx-mat-table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "section")(80, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Inspection History");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](82, ReportPipingAssets_ngx_mat_table_82_Template, 1, 6, "ngx-mat-table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "section")(84, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "ngx-dashboard-remaining-chart", 40)(88, "ngx-dashboard-thickness-chart", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](21, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Piping Assets ", ctx.selectionData == null ? null : ctx.selectionData.piping_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.imageLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("elementType", ctx.elementType)("errorCorrectionLevel", ctx.correctionLevel)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.selectionData == null ? null : ctx.selectionData.date_in_service) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.selectionData == null ? null : ctx.selectionData.class) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.selectionData == null ? null : ctx.selectionData.notes) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.selectionData == null ? null : ctx.selectionData.recomendation) || "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.spesificationItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pipingVisual);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pipingThickness);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.damageMechanismData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.inspectionHistoryData.length);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbOptionComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_5__.QrcodeComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_9__.NbButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent, _chart_remaining_chart_component__WEBPACK_IMPORTED_MODULE_2__.DashboardRemainingChart, _chart_thickness_chart_component__WEBPACK_IMPORTED_MODULE_3__.DashboardThicknessChart], encapsulation: 2 });


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
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_circuits_piping_circuits_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/piping-circuits/piping-circuits.service */ 52787);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);
/* harmony import */ var _chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/piping-circuit-trend-chart */ 80962);















function ReportPipingCircuit_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](option_r9);
} }
const _c0 = function () { return { "width": "40px" }; };
function ReportPipingCircuit_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function ReportPipingCircuit_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function ReportPipingCircuit_td_17_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); return _r11.style.color = "#0492c2"; })("mouseout", function ReportPipingCircuit_td_17_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const element_r10 = restoredCtx.$implicit; const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.selectionData == element_r10.piping_circuit_name ? _r11.style.color = "#0492c2" : _r11.style.color = "black"; })("click", function ReportPipingCircuit_td_17_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const element_r10 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.showData(element_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, ctx_r3.selectionData == element_r10.piping_circuit_name ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r10.piping_circuit_name, " ");
} }
function ReportPipingCircuit_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 42);
} }
function ReportPipingCircuit_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 43);
} }
function ReportPipingCircuit_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const image_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", i_r18 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", image_r17.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", image_r17 == null ? null : image_r17.alt);
} }
function ReportPipingCircuit_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const visual_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](visual_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](visual_r19.props);
} }
function ReportPipingCircuit_nb_list_item_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mechanism_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mechanism_r20.name, " ");
} }
const _c2 = function () { return [1, 2, 3, 4, 5]; };
const _c3 = function () { return { show: false }; };
const _c4 = function () { return { pageSize: 5 }; };
class ReportPipingCircuit {
    constructor(pipingCircuitService) {
        this.pipingCircuitService = pipingCircuitService;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__.NgxQrcodeElementTypes.URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__.NgxQrcodeErrorCorrectionLevels.HIGH;
        this.value = 'https://www.google.com/';
        this.tablePosition = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.tablePosition);
        this.displayedColumns = ['piping_circuit_name'];
        this.resultsLength = 0;
        this.selectionData = 1;
        this.imageLink = [
            { src: "https://wallpapercave.com/wp/wp6954364.jpg", alt: "Pipe 1" },
            { src: "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt: "Pipe 2" },
            { src: "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt: "Pipe 3" },
        ];
        this.pipingVisual = [
            { name: 'Leaks', props: 'Excellent' },
            { name: 'Misalignment', props: 'Good' },
            { name: 'Vibration', props: 'Average' },
            { name: 'Supports', props: 'Below Average' },
            { name: 'Corrosion', props: 'Poor' },
            { name: 'Insulation', props: 'Excellent' },
        ];
        this.activeDamageMechaninsm = [
            { name: 'Corrosion Under Insulation' },
            { name: 'Creep/Stress Rupture' },
        ];
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
            { type: 'button', prop: 'edit', head: 'Update', width: '200px' },
        ];
    }
    ngOnInit() {
        // for(let i = 1; i <= 40; i++)
        // this.tablePosition.push({position : i})
        this.pipingCircuitService.getPipingCircuits()
            .subscribe(({ data }) => {
            this.selectionData = data[0].piping_circuit_name;
            this.tableData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(data);
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
    // ngAfterViewInit() {
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    // }
    showData(element) {
        this.selectionData = element.piping_circuit_name;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
ReportPipingCircuit.ɵfac = function ReportPipingCircuit_Factory(t) { return new (t || ReportPipingCircuit)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_piping_circuits_piping_circuits_service__WEBPACK_IMPORTED_MODULE_0__.PipingCircuitService)); };
ReportPipingCircuit.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReportPipingCircuit, selectors: [["ngx-report-piping-circuit"]], viewQuery: function ReportPipingCircuit_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 87, vars: 27, consts: [[1, "d-flex", "justify-content-between"], [1, "d-flex"], ["placeholder", "Piping Id Filter", "status", "primary", 1, "mx-5"], ["value", "option", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_circuit_name"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], [1, "fw-bolder", "text-primary", "mb-2", "d-block"], [1, "col-8"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "col-4", "d-flex", "justify-content-center", "align-self-center"], [1, "border", "rounded"], [3, "elementType", "errorCorrectionLevel", "value"], ["nbButton", "", "status", "primary", "size", "small", "outline", "", 1, "mt-2", "w-100"], [1, "row", "mt-3"], [1, "text-secondary", "col-4"], [1, "text-secondary"], [1, "row", "row-cols-3"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "mt-3"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData"], [4, "ngFor", "ngForOf"], ["value", "option"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", ""], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "15rem"], [1, "w-100", "img-fluid", 3, "src", "alt"], [1, "col", "text-secondary"], [1, "col"]], template: function ReportPipingCircuit_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Piping Circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "nb-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReportPipingCircuit_nb_option_6_Template, 2, 1, "nb-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ReportPipingCircuit_Template_input_keyup_10_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "nb-card-body", 6)(13, "div", 7)(14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ReportPipingCircuit_th_16_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ReportPipingCircuit_td_17_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ReportPipingCircuit_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ReportPipingCircuit_tr_19_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15)(22, "nb-card")(23, "nb-card-body")(24, "section")(25, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 6)(28, "div", 17)(29, "div", 18)(30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ReportPipingCircuit_div_31_Template, 3, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 26)(41, "div")(42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "ngx-qrcode", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "See Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 30)(47, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Date In Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "08/06/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iure in vel impedit necessitatibus dolorum expedita laborum commodi quod perferendis, excepturi quasi nemo? Reprehenderit nam ipsam architecto omnis sapiente distinctio?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "section")(64, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Piping Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, ReportPipingCircuit_div_67_Template, 5, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "section", 35)(69, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Piping Thickness");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "ngx-mat-table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "section")(73, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Piping Circuit Damage Mechanisms");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Active Damage Mechanism");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, ReportPipingCircuit_nb_list_item_78_Template, 2, 1, "nb-list-item", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "section")(80, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Inspection History");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "ngx-mat-table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "section")(84, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "ngx-piping-circuit-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Piping Assets ", ctx.selectionData, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.imageLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("elementType", ctx.elementType)("errorCorrectionLevel", ctx.correctionLevel)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.pipingVisual);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c3))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c4))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.activeDamageMechaninsm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c3))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](26, _c4))("columnDetails", ctx.inspectionHistoryDetails)("tableData", ctx.tableData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbOptionComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__.QrcodeComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbButtonComponent, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbListItemComponent, _chart_piping_circuit_trend_chart__WEBPACK_IMPORTED_MODULE_2__.PipingCircuitChart], encapsulation: 2 });


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