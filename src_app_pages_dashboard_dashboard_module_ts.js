"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 24789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/top-bar/top-bar.component */ 78713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class DashboardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["ngx-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-top-bar")(1, "router-outlet");
    } }, directives: [_component_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_0__.TopBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.routing */ 45774);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 24789);
/* harmony import */ var _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/top-bar/top-bar.module */ 8351);
/* harmony import */ var _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piping-assets/piping-assets.component */ 58804);
/* harmony import */ var _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piping-circuits/piping-circuits.component */ 75233);
/* harmony import */ var _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-proposal/view-proposal.component */ 56161);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piping-assets/add-assets/add-assets.component */ 39267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _piping_circuits_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./piping-circuits/add-circuit/add-circuit.component */ 24651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);






















class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbMenuModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbOptionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbAccordionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbDatepickerModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbButtonModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_13__.NgxQRCodeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbIconModule,
            _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule,
            _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__.TopBarModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_4__.PipingAssetsComponent,
        _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_5__.PipingCircuitsComponent,
        _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_6__.ViewProposalComponent,
        _piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_8__.AddAssetsComponent,
        _piping_circuits_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_9__.AddCircuitComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbMenuModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbOptionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbAccordionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbDatepickerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbButtonModule,
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_13__.NgxQRCodeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_12__.NbIconModule,
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule,
        _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__.TopBarModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule] }); })();


/***/ }),

/***/ 45774:
/*!******************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.routing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardsRoutingModule": () => (/* binding */ DashboardsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 24789);
/* harmony import */ var _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piping-assets/piping-assets.component */ 58804);
/* harmony import */ var _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piping-circuits/piping-circuits.component */ 75233);
/* harmony import */ var _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-proposal/view-proposal.component */ 56161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        children: [
            {
                path: 'piping-assets',
                component: _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_1__.PipingAssetsComponent
            },
            {
                path: 'piping-circuits',
                component: _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_2__.PipingCircuitsComponent
            },
            {
                path: 'view-proposal',
                component: _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_3__.ViewProposalComponent
            },
        ],
    }];
class DashboardsRoutingModule {
}
DashboardsRoutingModule.ɵfac = function DashboardsRoutingModule_Factory(t) { return new (t || DashboardsRoutingModule)(); };
DashboardsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DashboardsRoutingModule });
DashboardsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 58804:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/piping-assets/piping-assets.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipingAssetsComponent": () => (/* binding */ PipingAssetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);


const _c0 = function () { return { title: "Piping Assets", filter: "Piping Id" }; };
class PipingAssetsComponent {
    constructor() {
        this.tableData = [];
        this.columnDetails = [
            { type: 'select', prop: 'select', head: '', width: '20px' },
            { type: 'text', prop: 'piping_id', head: 'Piping Id', width: '100px' },
            { type: 'text', prop: 'piping_name', head: 'Piping Name', width: '200px' },
            { type: 'text', prop: 'date_in_service', head: 'Date In Service', width: '200px' },
            // { type : 'button', prop : 'qr_print', head : 'QR', width : '50px',
            //   button : [
            //     { name : 'QR Print', icon : 'qrcode', pack : 'fas' },
            //   ]
            // },
        ];
    }
    ngOnInit() {
        for (let i = 0; i < 20; i++)
            this.tableData.push({
                piping_id: 'example id',
                piping_name: 'example name',
                date_in_service: 'example date'
            });
    }
}
PipingAssetsComponent.ɵfac = function PipingAssetsComponent_Factory(t) { return new (t || PipingAssetsComponent)(); };
PipingAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PipingAssetsComponent, selectors: [["ngx-piping-assets"]], decls: 1, vars: 4, consts: [[3, "tableHeader", "columnDetails", "tableData"]], template: function PipingAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], encapsulation: 2 });


/***/ }),

/***/ 75233:
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/piping-circuits/piping-circuits.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipingCircuitsComponent": () => (/* binding */ PipingCircuitsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);


const _c0 = function () { return { title: "Piping Circuits", filter: "Circuit Id" }; };
class PipingCircuitsComponent {
    constructor() {
        this.tableData = [];
        this.columnDetails = [
            { type: 'select', prop: 'select', head: '', width: '20px' },
            { type: 'text', prop: 'piping_circuit_id', head: 'Piping Circuit Id', width: '100px' },
            { type: 'text', prop: 'piping_circuit_name', head: 'Piping Circuit Name', width: '200px' },
            { type: 'text', prop: 'date_in_service', head: 'Date In Service', width: '200px' },
            { type: 'text', prop: 'class', head: 'Class', width: '200px' },
            { type: 'text', prop: 'notes', head: 'Notes', width: '200px' },
        ];
    }
    ngOnInit() {
        for (let i = 0; i < 20; i++)
            this.tableData.push({
                piping_circuit_id: 'example circuit id',
                piping_circuit_name: 'example name',
                date_in_service: 'example date',
                class: 'example class',
                notes: 'example notes',
            });
    }
}
PipingCircuitsComponent.ɵfac = function PipingCircuitsComponent_Factory(t) { return new (t || PipingCircuitsComponent)(); };
PipingCircuitsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PipingCircuitsComponent, selectors: [["ngx-piping-circuits"]], decls: 1, vars: 4, consts: [[3, "tableHeader", "columnDetails", "tableData"]], template: function PipingCircuitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], encapsulation: 2 });


/***/ }),

/***/ 56161:
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/view-proposal/view-proposal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProposalComponent": () => (/* binding */ ViewProposalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);


const _c0 = function () { return { title: "Proposal", filter: "Proposal Id" }; };
class ViewProposalComponent {
    constructor() {
        this.tableData = [];
        this.columnDetails = [
            { type: 'select', prop: 'select', head: '', width: '20px' },
            { type: 'text', prop: 'proposal_id', head: 'Proposal Id', width: '100px' },
            { type: 'text', prop: 'inspection_plan_date', head: 'Inspection Plan Date', width: '200px' },
            { type: 'text', prop: 'piping_circuit', head: 'Piping/Piping Circuit', width: '200px' },
            { type: 'text', prop: 'remarks', head: 'Remarks', width: '200px' },
        ];
    }
    ngOnInit() {
        for (let i = 0; i < 20; i++)
            this.tableData.push({
                proposal_id: 'example proposal id',
                inspection_plan_date: 'example plan date',
                piping_circuit: 'example piping circuit',
                remarks: 'example class',
            });
    }
}
ViewProposalComponent.ɵfac = function ViewProposalComponent_Factory(t) { return new (t || ViewProposalComponent)(); };
ViewProposalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewProposalComponent, selectors: [["ngx-view-proposal"]], decls: 1, vars: 4, consts: [[3, "tableHeader", "columnDetails", "tableData"]], template: function ViewProposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_0__.MatTableComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map