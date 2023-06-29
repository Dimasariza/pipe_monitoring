"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_assesment_assesment_module_ts"],{

/***/ 43495:
/*!*****************************************************!*\
  !*** ./src/app/pages/assesment/assesment.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssesmentModule": () => (/* binding */ AssesmentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _assesment_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assesment.routing */ 92113);
/* harmony import */ var _assesment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assesment.component */ 43870);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/top-bar/top-bar.module */ 8351);
/* harmony import */ var _demage_mechanism_demage_mechanism_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demage-mechanism/demage-mechanism.component */ 70954);
/* harmony import */ var _thickness_thickness_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thickness/thickness.component */ 41019);
/* harmony import */ var _visual_condition_visual_condition_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visual-condition/visual-condition.component */ 90460);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);


















class AssesmentModule {
}
AssesmentModule.ɵfac = function AssesmentModule_Factory(t) { return new (t || AssesmentModule)(); };
AssesmentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AssesmentModule });
AssesmentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbMenuModule,
            _assesment_routing__WEBPACK_IMPORTED_MODULE_1__.AssesmentRoutingModule,
            _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_4__.TopBarModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_3__.MaterialTableModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbListModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAccordionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCheckboxModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AssesmentModule, { declarations: [_assesment_component__WEBPACK_IMPORTED_MODULE_2__.AssesmentComponent,
        _demage_mechanism_demage_mechanism_component__WEBPACK_IMPORTED_MODULE_5__.DemageMechanismComponent,
        _thickness_thickness_component__WEBPACK_IMPORTED_MODULE_6__.ThicknessComponent,
        _visual_condition_visual_condition_component__WEBPACK_IMPORTED_MODULE_7__.VisualConditionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbMenuModule,
        _assesment_routing__WEBPACK_IMPORTED_MODULE_1__.AssesmentRoutingModule,
        _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_4__.TopBarModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_3__.MaterialTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbListModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbAccordionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbCheckboxModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__.NbButtonModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule] }); })();


/***/ }),

/***/ 92113:
/*!******************************************************!*\
  !*** ./src/app/pages/assesment/assesment.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssesmentRoutingModule": () => (/* binding */ AssesmentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _visual_condition_visual_condition_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual-condition/visual-condition.component */ 90460);
/* harmony import */ var _thickness_thickness_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thickness/thickness.component */ 41019);
/* harmony import */ var _demage_mechanism_demage_mechanism_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demage-mechanism/demage-mechanism.component */ 70954);
/* harmony import */ var _assesment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assesment.component */ 43870);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [{
        path: '',
        component: _assesment_component__WEBPACK_IMPORTED_MODULE_3__.AssesmentComponent,
        children: [
            {
                path: 'visual-condition',
                component: _visual_condition_visual_condition_component__WEBPACK_IMPORTED_MODULE_0__.VisualConditionComponent
            },
            {
                path: 'thickness',
                component: _thickness_thickness_component__WEBPACK_IMPORTED_MODULE_1__.ThicknessComponent
            },
            {
                path: 'damage-mechanism',
                component: _demage_mechanism_demage_mechanism_component__WEBPACK_IMPORTED_MODULE_2__.DemageMechanismComponent
            },
        ],
    }];
class AssesmentRoutingModule {
}
AssesmentRoutingModule.ɵfac = function AssesmentRoutingModule_Factory(t) { return new (t || AssesmentRoutingModule)(); };
AssesmentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AssesmentRoutingModule });
AssesmentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AssesmentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 70954:
/*!********************************************************************************!*\
  !*** ./src/app/pages/assesment/demage-mechanism/demage-mechanism.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemageMechanismComponent": () => (/* binding */ DemageMechanismComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/piping-assets/piping-assets.service */ 78539);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);












const _c0 = function () { return { "width": "40px" }; };
function DemageMechanismComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Piping ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function DemageMechanismComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseover", function DemageMechanismComponent_td_16_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _r6.style.color = "#0492c2"; })("mouseout", function DemageMechanismComponent_td_16_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const element_r5 = restoredCtx.$implicit; const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.selectionData == element_r5.piping_id ? _r6.style.color = "#0492c2" : _r6.style.color = "black"; })("click", function DemageMechanismComponent_td_16_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const element_r5 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.showData(element_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r2.selectionData == element_r5.piping_id ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r5.piping_id, " ");
} }
function DemageMechanismComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
} }
function DemageMechanismComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 21);
} }
const _c2 = function () { return { show: false }; };
class DemageMechanismComponent {
    constructor(pipingAssetsService) {
        this.pipingAssetsService = pipingAssetsService;
        this.tableData = [
            { piping_damage_mechanism: "General and localized metal loss", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Sulfidation and High Temp. H2S/H2 Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Oxidation", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Microbiologically Induced Corrosion (MIC)", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Naphthenic Acid Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Erosion/Erosison-Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Galvanic Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Atmospheric Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Corrosion Under Insulation (CUI)", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Cooling Water Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Boiler Water Condensate Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Soil Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Ammonium Bisulfide and Chloride Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Carbon Dioxide Corrosion", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Surface Connected Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Mechanical Fatigue Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Caustic Stress Corrosion Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Polythionic Stress Corrosion Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Sulfide Stress Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Chloride Stress Corrosion Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Subsurface Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Hydrogen Induced Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Wet Hydrogen Sulfide Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "High-Temperature Micro-fissuring/Micro-void Fromation and Eventual Macro Cracking", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "High-temperature Hydrogen Attack", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Creep/Stress Rupture", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Metallurgical Changes", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Graphitization", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Temper Embrittlement", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
            { piping_damage_mechanism: "Hydrogen Embrittlement", active: false, notes: "", expected_type: "", last_inspection: "", insp_due_date: "" },
        ];
        this.columnDetails = [
            { type: 'text', prop: 'piping_damage_mechanism', head: 'Piping Damage Mechanism', width: '200px' },
            { type: 'check', prop: 'active', head: 'Active', width: '100px' },
            { type: 'drop-down', prop: 'susceptibility', head: 'Susceptibility', width: '50px', value: [
                    "Low", "Medium", "High"
                ] },
            { type: 'editable', prop: 'notes', head: 'Notes', width: '300px' },
            { type: 'editable', prop: 'expected_type', head: 'Expected Type/Location', width: '200px' },
            { type: 'editable', prop: 'last_inspection', head: 'Last Insp.Date', width: '200px' },
            { type: 'editable', prop: 'insp_due_date', head: 'Insp. Due Date', width: '200px' },
        ];
        this.displayedColumns = ['piping_id'];
        this.resultsLength = 0;
    }
    ngOnInit() {
        this.pipingAssetsService.getPipingAssets()
            .subscribe(({ data }) => {
            this.selectionData = data[0].piping_id;
            // this.tableData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
    }
    onClickTable(data, title) {
        console.log("data", data);
        console.log("title", title);
    }
    showData(element) {
        this.selectionData = element.piping_id;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
DemageMechanismComponent.ɵfac = function DemageMechanismComponent_Factory(t) { return new (t || DemageMechanismComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__.PipingAssetsService)); };
DemageMechanismComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DemageMechanismComponent, selectors: [["ngx-demage-mechanism"]], viewQuery: function DemageMechanismComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 25, vars: 12, consts: [[1, "d-flex", "justify-content-between"], [1, "d-flex"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_id"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData", "onClickTable"], [1, "w-100", "d-flex", "justify-content-center"], ["nbButton", "", "size", "medium", "status", "success"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DemageMechanismComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Damage Mechanism");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function DemageMechanismComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "nb-card-body")(11, "div", 4)(12, "div", 5)(13, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DemageMechanismComponent_th_15_Template, 2, 2, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DemageMechanismComponent_td_16_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DemageMechanismComponent_tr_17_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DemageMechanismComponent_tr_18_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "ngx-mat-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClickTable", function DemageMechanismComponent_Template_ngx_mat_table_onClickTable_21_listener($event) { return ctx.onClickTable($event.data, $event.title); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15)(23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c2))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c2))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonComponent], encapsulation: 2 });


/***/ }),

/***/ 41019:
/*!******************************************************************!*\
  !*** ./src/app/pages/assesment/thickness/thickness.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThicknessComponent": () => (/* binding */ ThicknessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/piping-assets/piping-assets.service */ 78539);
/* harmony import */ var _cml_cml_servivce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cml/cml.servivce */ 19271);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);





const _c0 = function () { return { title: "Thickness" }; };
function ThicknessComponent_ngx_mat_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-mat-table", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx_r0.columnDetails)("tableData", ctx_r0.tableData);
} }
class ThicknessComponent {
    constructor(assetsService, cmlService) {
        this.assetsService = assetsService;
        this.cmlService = cmlService;
        this.tableData = [];
        this.columnDetails = [
            { type: 'navto', prop: 'piping_id', head: 'Piping ID', width: '200px', nav: '/pages/cml/' },
            { type: 'text', prop: 'reading', head: 'Reading (mm)', width: '200px' },
            { type: 'text', prop: 't_min', head: 'T min (mm)', width: '200px' },
            { type: 'text', prop: 'lt_cr', head: 'LT CR (mm/Year)', width: '200px' },
            { type: 'text', prop: 'st_cr', head: 'ST CR (mm/Year)', width: '200px' },
            { type: 'text', prop: 'remaining_life', head: 'Remaining Life (Year)', width: '200px' },
            { type: 'text', prop: 'half_life', head: 'Half Life (Year)', width: '200px' },
            { type: 'text', prop: 'retirement_date', head: 'Retirement Date', width: '200px' },
            { type: 'text', prop: 'next_tm_insp_date', head: 'Next TM Insp Date', width: '200px' },
            { type: 'text', prop: 'next_ve_insp_date', head: 'Next VE Insp Date', width: '200px' },
            { type: 'text', prop: 'mawp', head: 'MAWP (psi)', width: '200px' },
        ];
    }
    ngOnInit() {
        let dataCML;
        this.assetsService.getPipingAssets()
            .subscribe(({ data }) => {
            this.cmlService.getCMLs()
                .subscribe(({ data }) => dataCML = data);
            this.tableData = data.map(item => {
                const { outside_diameter, min_design_pressure, longtd_quality_factor, weld_joint_factor, allowable_unit_stress, coefficient, min_alert_thickness, min_structural_thickness, piping_id } = item;
                let dataThickness = [];
                // dataCML.forEach(item => {
                // if(dataThickness.includes(item.piping_id))
                // });
                const pressure_design_thickness = (min_design_pressure * outside_diameter) / (2 * ((longtd_quality_factor * weld_joint_factor * allowable_unit_stress) + (coefficient * min_design_pressure)));
                return Object.assign(Object.assign({}, item), { t_min: Math.max(pressure_design_thickness, min_alert_thickness, min_structural_thickness) });
            });
        });
    }
}
ThicknessComponent.ɵfac = function ThicknessComponent_Factory(t) { return new (t || ThicknessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__.PipingAssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_cml_cml_servivce__WEBPACK_IMPORTED_MODULE_1__.CMLService)); };
ThicknessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ThicknessComponent, selectors: [["ngx-thickness"]], decls: 1, vars: 1, consts: [[3, "tableHeader", "columnDetails", "tableData", 4, "ngIf"], [3, "tableHeader", "columnDetails", "tableData"]], template: function ThicknessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThicknessComponent_ngx_mat_table_0_Template, 1, 4, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tableData.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__.MatTableComponent], encapsulation: 2 });


/***/ }),

/***/ 90460:
/*!********************************************************************************!*\
  !*** ./src/app/pages/assesment/visual-condition/visual-condition.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualConditionComponent": () => (/* binding */ VisualConditionComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/piping-assets/piping-assets.service */ 78539);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 88133);













const _c0 = function () { return { "width": "40px" }; };
function VisualConditionComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Piping ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function VisualConditionComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function VisualConditionComponent_td_15_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r9.style.color = "#0492c2"; })("mouseout", function VisualConditionComponent_td_15_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const element_r8 = restoredCtx.$implicit; const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.selectionData == element_r8.piping_id ? _r9.style.color = "#0492c2" : _r9.style.color = "black"; })("click", function VisualConditionComponent_td_15_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const element_r8 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.showData(element_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r2.selectionData == element_r8.piping_id ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r8.piping_id, " ");
} }
function VisualConditionComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 30);
} }
function VisualConditionComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 31);
} }
function VisualConditionComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r15);
} }
function VisualConditionComponent_section_51_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r19 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r17.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](level_r19);
} }
function VisualConditionComponent_section_51_nb_list_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-list-item", 0)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nb-checkbox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("checkedChange", function VisualConditionComponent_section_51_nb_list_item_12_Template_nb_checkbox_checkedChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.toggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const source_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](source_r20);
} }
const _c2 = function () { return ["Excellent", "Good", "Average", "Below Average", "Poor"]; };
function VisualConditionComponent_section_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 33)(1, "div", 34)(2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field")(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, VisualConditionComponent_section_51_mat_option_8_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VisualConditionComponent_section_51_nb_list_item_12_Template, 4, 1, "nb-list-item", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const checkList_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](checkList_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", checkList_r16.source);
} }
class VisualConditionComponent {
    constructor(pipingAssetsService) {
        this.pipingAssetsService = pipingAssetsService;
        this.displayedColumns = ['piping_id'];
        this.resultsLength = 0;
        this.externalCheckList = [
            {
                title: "Leaks", level: "Leaks", source: [
                    "Process",
                    "Steam Tracking",
                    "Existing Clamp"
                ]
            },
            {
                title: "Misalignment", level: "Misalignment", source: [
                    "Piping Misalignment",
                    "Expain Joint Misalignment",
                    "Existing Clamp",
                ]
            },
            {
                title: "Vibration", level: "Vibration", source: [
                    "Excessive Overhung Weight",
                    "Inadequate Support",
                    "Thin, Small-bore, or Alloy Piping",
                    "Threaded Connections",
                    "Loose Support Causing Metal Wear"
                ]
            },
            {
                title: "Corrosion", level: "Corrosion", source: [
                    "Bolting Support Points Under Clamps",
                    "Coating/Painting Deterioration",
                    "Soil-to-air Interfaces",
                    "Insulation Interfaces",
                    "Biloogical Growth",
                ]
            },
            {
                title: "Supports", level: "Supports", source: [
                    "Shoes Of Supports",
                    "Hanger Distorsion of Breakage",
                    "Bottomed Out Springs",
                    "Brace Distorsion/Breakage",
                    "Loose Brackets",
                    "Slides Plates/Rollers",
                    "Counter Balance Condition",
                    "Support Corrosion",
                ]
            },
            {
                title: "Insulation", level: "Insulation", source: [
                    "Damage/Penetrations",
                    "Missing Jacketing Insulation",
                    "Sealing Deterioration",
                    "Bulging",
                    "Banding (Broken/Missing)",
                ]
            },
        ];
    }
    ngOnInit() {
        this.pipingAssetsService.getPipingAssets()
            .subscribe(({ data }) => {
            this.selectionData = data[0].piping_id;
            this.tableData = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    showData(element) {
        this.selectionData = element.piping_id;
    }
    onSubmit(value) {
        console.log(value);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
VisualConditionComponent.ɵfac = function VisualConditionComponent_Factory(t) { return new (t || VisualConditionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dashboard_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__.PipingAssetsService)); };
VisualConditionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisualConditionComponent, selectors: [["ngx-visual-condition"]], viewQuery: function VisualConditionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 54, vars: 10, consts: [[1, "d-flex", "justify-content-between"], [1, "d-flex"], ["matInput", "", "placeholder", "Ex. Mia"], ["input", ""], [1, "row"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "piping_id"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9", 3, "ngsubmit"], ["visualConditionForm", ""], ["multi", ""], ["expanded", "true"], [1, "my-2"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-100", "mx-4"], ["for", "finding", 1, "d-block", "mb-2"], ["nbInput", "", "name", "finding", "id", "finding", "fullWidth", "", "rows", "5"], [1, "w-100"], ["for", "recomendation", 1, "d-block", "mb-2"], ["nbInput", "", "name", "recomendation", "id", "recomendation", "fullWidth", "", "rows", "5"], ["class", "pb-5 px-4 col-6", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "success", "type", "submit", 1, "w-100", "m-2"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", ""], [3, "value"], [1, "pb-5", "px-4", "col-6"], [1, "d-flex", "align-items-center", "justify-content-between"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "mx-2", 3, "checkedChange"]], template: function VisualConditionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Visual Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nb-card-body", 4)(11, "div", 5)(12, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, VisualConditionComponent_th_14_Template, 2, 2, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, VisualConditionComponent_td_15_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VisualConditionComponent_tr_16_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, VisualConditionComponent_tr_17_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngsubmit", function VisualConditionComponent_Template_form_ngsubmit_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return ctx.onSubmit(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nb-accordion", 15)(22, "nb-accordion-item", 16)(23, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nb-accordion-item-body")(26, "div", 0)(27, "div")(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Selection Pipe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 17)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, VisualConditionComponent_mat_option_37_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19)(39, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Finding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22)(43, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nb-accordion-item", 16)(47, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "External Checklist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "nb-accordion-item-body")(50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, VisualConditionComponent_section_51_Template, 13, 4, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.externalCheckList);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbAccordionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbAccordionItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbAccordionItemHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbAccordionItemBodyComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbListItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCheckboxComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_assesment_assesment_module_ts.js.map