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
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);











function DemageMechanismComponent_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r6);
} }
const _c0 = function () { return { "width": "40px" }; };
function DemageMechanismComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function DemageMechanismComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function DemageMechanismComponent_td_18_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r8.style.color = "#0492c2"; })("mouseout", function DemageMechanismComponent_td_18_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const element_r7 = restoredCtx.$implicit; const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.selectionData == element_r7.position ? _r8.style.color = "#0492c2" : _r8.style.color = "black"; })("click", function DemageMechanismComponent_td_18_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const element_r7 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.showData(element_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r3.selectionData == element_r7.position ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r7.position, " ");
} }
function DemageMechanismComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
function DemageMechanismComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemageMechanismComponent_tr_20_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const row_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.selection.toggle(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function () { return [1, 2, 3, 4, 5]; };
const _c3 = function () { return { show: false }; };
class DemageMechanismComponent {
    constructor() {
        this.tableData = [];
        this.columnDetails = [
            { type: 'text', prop: 'piping_id', head: 'Piping Id', width: '100px' },
            { type: 'text', prop: 'piping_damage_mechanism', head: 'Piping Damage Mechanism', width: '200px' },
            { type: 'text', prop: 'active', head: 'Active', width: '200px' },
            { type: 'text', prop: 'notes', head: 'Notes', width: '200px' },
            { type: 'text', prop: 'expected_type', head: 'Expected Type/Location', width: '200px' },
            { type: 'text', prop: 'last_inspection', head: 'Last Insp.Date', width: '200px' },
            { type: 'text', prop: 'insp_due_date', head: 'Insp. Due Date', width: '200px' },
        ];
        this.selectionData = 1;
        this.displayedColumns = ['position'];
        this.resultsLength = 0;
    }
    ngOnInit() {
        for (let i = 0; i < 20; i++)
            this.tableData.push({
                piping_id: 'id',
                piping_damage_mechanism: 'example name',
                active: 'example active',
                notes: 'example notes',
                expected_type: 'expected type',
                last_inspection: 'Last inspection',
                insp_due_date: 'insp due date',
            });
        let tablePosition = [];
        for (let i = 1; i <= 40; i++)
            tablePosition.push({ position: i });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(tablePosition);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    showData(element) {
        this.selectionData = element.position;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
DemageMechanismComponent.ɵfac = function DemageMechanismComponent_Factory(t) { return new (t || DemageMechanismComponent)(); };
DemageMechanismComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemageMechanismComponent, selectors: [["ngx-demage-mechanism"]], viewQuery: function DemageMechanismComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 24, vars: 14, consts: [[1, "d-flex", "justify-content-between"], [1, "d-flex"], ["placeholder", "Piping Id", "status", "primary", 1, "mx-5"], ["value", "option", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "row"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], [3, "tableHeader", "tableFooter", "columnDetails", "tableData"], ["value", "option"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function DemageMechanismComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "CML Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nb-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DemageMechanismComponent_nb_option_6_Template, 2, 1, "nb-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DemageMechanismComponent_Template_input_keyup_10_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nb-card-body")(13, "div", 6)(14, "div", 7)(15, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DemageMechanismComponent_th_17_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DemageMechanismComponent_td_18_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DemageMechanismComponent_tr_19_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DemageMechanismComponent_tr_20_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ngx-mat-table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3))("tableFooter", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c3))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbOptionComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], encapsulation: 2 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);


const _c0 = function () { return { title: "Thickness", filter: "Piping Id" }; };
class ThicknessComponent {
    constructor() {
        this.tableData = [];
        this.columnDetails = [
            { type: 'navto', prop: 'piping_id', head: 'Piping Id', width: '200px', nav: '/pages/cml/' },
            { type: 'text', prop: 'reading', head: 'Reading (mm)', width: '200px' },
            { type: 'text', prop: 't_min', head: 'T min (mm)', width: '200px' },
            { type: 'text', prop: 'lt_cr', head: 'LT CR (mm/Year)', width: '200px' },
            { type: 'text', prop: 'st_cr', head: 'ST CR (mm/Year)', width: '200px' },
            { type: 'text', prop: 'remaining_life', head: 'Remaining Life (Year)', width: '200px' },
            { type: 'text', prop: 'half_life', head: 'Half Life (Year)', width: '200px' },
            { type: 'text', prop: 'retirement_date', head: 'Retirement Date', width: '200px' },
        ];
    }
    ngOnInit() {
        for (let i = 1; i <= 20; i++)
            this.tableData.push({
                piping_id: i,
                reading: 'example reading',
                t_min: 'example date',
                lt_cr: 'example LTCR',
                st_cr: 'example STCR',
                remaining_life: 'example Remaining Life',
                half_life: 'example Half Life',
                retirement_date: 'example Retirement date',
            });
    }
}
ThicknessComponent.ɵfac = function ThicknessComponent_Factory(t) { return new (t || ThicknessComponent)(); };
ThicknessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThicknessComponent, selectors: [["ngx-thickness"]], decls: 1, vars: 4, consts: [[3, "tableHeader", "columnDetails", "tableData"]], template: function ThicknessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], encapsulation: 2 });


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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 88133);












function VisualConditionComponent_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r8);
} }
const _c0 = function () { return { "width": "40px" }; };
function VisualConditionComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pipe Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function VisualConditionComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function VisualConditionComponent_td_17_Template_td_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r10.style.color = "#0492c2"; })("mouseout", function VisualConditionComponent_td_17_Template_td_mouseout_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const element_r9 = restoredCtx.$implicit; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.selectionData == element_r9.position ? _r10.style.color = "#0492c2" : _r10.style.color = "black"; })("click", function VisualConditionComponent_td_17_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const element_r9 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showData(element_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r3.selectionData == element_r9.position ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.position, " ");
} }
function VisualConditionComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 31);
} }
function VisualConditionComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualConditionComponent_tr_19_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const row_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.selection.toggle(row_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VisualConditionComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r18);
} }
function VisualConditionComponent_section_52_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r22 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r20.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r22);
} }
function VisualConditionComponent_section_52_nb_list_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 0)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-checkbox", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedChange", function VisualConditionComponent_section_52_nb_list_item_12_Template_nb_checkbox_checkedChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.toggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const source_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](source_r23);
} }
const _c2 = function () { return ["Excellent", "Good", "Average", "Below Average", "Poor"]; };
function VisualConditionComponent_section_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 34)(1, "div", 35)(2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field")(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VisualConditionComponent_section_52_mat_option_8_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VisualConditionComponent_section_52_nb_list_item_12_Template, 4, 1, "nb-list-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const checkList_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](checkList_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", checkList_r19.source);
} }
const _c3 = function () { return [1, 2, 3, 4, 5]; };
const _c4 = function () { return [1, 2, 3, 4]; };
class VisualConditionComponent {
    constructor() {
        this.tableData = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(this.tableData);
        this.displayedColumns = ['position',];
        this.resultsLength = 0;
        this.selectionData = 1;
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
        for (let i = 1; i <= 40; i++)
            this.tableData.push({ position: i });
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    showData(element) {
        this.selectionData = element.position;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
VisualConditionComponent.ɵfac = function VisualConditionComponent_Factory(t) { return new (t || VisualConditionComponent)(); };
VisualConditionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisualConditionComponent, selectors: [["ngx-visual-condition"]], viewQuery: function VisualConditionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 53, vars: 12, consts: [[1, "d-flex", "justify-content-between"], [1, "d-flex"], ["placeholder", "Piping Id", "status", "primary", 1, "mx-5"], ["value", "option", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Ex. Mia"], ["input", ""], [1, "row"], [1, "col-3"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", "box-shadow", "none", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor : pointer", 3, "ngStyle", "mouseover", "mouseout", "click", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "col-9"], ["multi", ""], ["expanded", "true"], [1, "my-2"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-100", "mx-4"], ["for", "finding", 1, "d-block", "mb-2"], ["nbInput", "", "name", "finding", "id", "finding", "fullWidth", "", "rows", "5"], [1, "w-100"], ["for", "recomendation", 1, "d-block", "mb-2"], ["nbInput", "", "name", "recomendation", "id", "recomendation", "fullWidth", "", "rows", "5"], ["class", "pb-5 px-4 col-6", 4, "ngFor", "ngForOf"], ["value", "option"], ["mat-header-cell", "", 3, "ngStyle"], ["mat-cell", "", 2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["nameCell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [3, "value"], [1, "pb-5", "px-4", "col-6"], [1, "d-flex", "align-items-center", "justify-content-between"], ["class", "d-flex justify-content-between", 4, "ngFor", "ngForOf"], [1, "mx-2", 3, "checkedChange"]], template: function VisualConditionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header", 0)(2, "div", 1)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Visual Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisualConditionComponent_nb_option_6_Template, 2, 1, "nb-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hit Enter To Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-card-body", 6)(13, "div", 7)(14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VisualConditionComponent_th_16_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, VisualConditionComponent_td_17_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VisualConditionComponent_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VisualConditionComponent_tr_19_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-paginator", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15)(22, "nb-accordion", 16)(23, "nb-accordion-item", 17)(24, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nb-accordion-item-body")(27, "div", 0)(28, "div")(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Selection Pipe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 18)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, VisualConditionComponent_mat_option_38_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20)(40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Finding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23)(44, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nb-accordion-item", 17)(48, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "External Checklist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nb-accordion-item-body")(51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, VisualConditionComponent_section_52_Template, 13, 4, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.externalCheckList);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbOptionComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbAccordionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbAccordionItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbAccordionItemHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbAccordionItemBodyComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbListComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbListItemComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCheckboxComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_assesment_assesment_module_ts.js.map