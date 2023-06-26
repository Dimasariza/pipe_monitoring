"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 13872:
/*!********************************************************************!*\
  !*** ./src/app/component/delete dialog/delete-dialog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogComponent": () => (/* binding */ DeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 68253);


class DeleteDialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    closeDialog(arr = null) {
        if (!arr)
            this.dialog.close();
        if (arr) {
            console.log(arr);
            // this.assetsService.addPipingAssets(arr)
            // .subscribe(res => console.log(res))
        }
    }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
DeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteDialogComponent, selectors: [["ngx-delete-dialog"]], inputs: { dialogData: "dialogData" }, decls: 2, vars: 0, template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 79138:
/*!*****************************************************************!*\
  !*** ./src/app/component/delete dialog/delete-dialog.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogModule": () => (/* binding */ DeleteDialogModule)
/* harmony export */ });
/* harmony import */ var _delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-dialog.component */ 13872);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DeleteDialogModule {
}
DeleteDialogModule.ɵfac = function DeleteDialogModule_Factory(t) { return new (t || DeleteDialogModule)(); };
DeleteDialogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DeleteDialogModule });
DeleteDialogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogModule.forChild({
                closeOnBackdropClick: true
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DeleteDialogModule, { declarations: [_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DeleteDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogModule], exports: [_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DeleteDialogComponent] }); })();


/***/ }),

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.routing */ 45774);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 24789);
/* harmony import */ var _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/top-bar/top-bar.module */ 8351);
/* harmony import */ var _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piping-assets/piping-assets.component */ 58804);
/* harmony import */ var _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piping-circuits/piping-circuits.component */ 75233);
/* harmony import */ var _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-proposal/view-proposal.component */ 56161);
/* harmony import */ var _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/mat-table/mat-table.module */ 39511);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./piping-assets/add-assets/add-assets.component */ 39267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _piping_circuits_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./piping-circuits/add-circuit/add-circuit.component */ 24651);
/* harmony import */ var _view_proposal_add_proposal_add_proposal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-proposal/add-proposal/add-proposal.component */ 58189);
/* harmony import */ var _component_delete_dialog_delete_dialog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/delete dialog/delete-dialog.module */ 79138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
























class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbMenuModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbOptionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbAccordionModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDatepickerModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbListModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__.NgxQRCodeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule,
            _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule,
            _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__.TopBarModule,
            _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
            _component_delete_dialog_delete_dialog_module__WEBPACK_IMPORTED_MODULE_11__.DeleteDialogModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_4__.PipingAssetsComponent,
        _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_5__.PipingCircuitsComponent,
        _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_6__.ViewProposalComponent,
        _piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_8__.AddAssetsComponent,
        _piping_circuits_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_9__.AddCircuitComponent,
        _view_proposal_add_proposal_add_proposal_component__WEBPACK_IMPORTED_MODULE_10__.AddProposalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbMenuModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbOptionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbAccordionModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbDatepickerModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbListModule,
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_15__.NgxQRCodeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_14__.NbIconModule,
        _dashboard_routing__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule,
        _component_top_bar_top_bar_module__WEBPACK_IMPORTED_MODULE_3__.TopBarModule,
        _component_mat_table_mat_table_module__WEBPACK_IMPORTED_MODULE_7__.MaterialTableModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _component_delete_dialog_delete_dialog_module__WEBPACK_IMPORTED_MODULE_11__.DeleteDialogModule] }); })();


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
                component: _piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_1__.PipingAssetsComponent,
                data: {
                    routename: "assets"
                }
            },
            {
                path: 'piping-circuits',
                component: _piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_2__.PipingCircuitsComponent,
                data: {
                    routename: "circuit"
                }
            },
            {
                path: 'view-proposal',
                component: _view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_3__.ViewProposalComponent,
                data: {
                    routename: "proposal"
                }
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
/* harmony import */ var _component_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/delete dialog/delete-dialog.component */ 13872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _piping_assets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piping-assets.service */ 78539);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);






const _c0 = function () { return { title: "Piping Assets", filter: "Piping Id" }; };
function PipingAssetsComponent_ngx_mat_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-mat-table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClickTable", function PipingAssetsComponent_ngx_mat_table_0_Template_ngx_mat_table_onClickTable_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.onClickTable($event.data, $event.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx_r0.columnDetails)("tableData", ctx_r0.tableData);
} }
class PipingAssetsComponent {
    constructor(assetsService, dialogService) {
        this.assetsService = assetsService;
        this.dialogService = dialogService;
        this.columnDetails = [
            { type: 'select', prop: 'select', head: '', width: '20px' },
            { type: 'text', prop: 'piping_id', head: 'Piping Id', width: '100px' },
            { type: 'text', prop: 'piping_name', head: 'Piping Name', width: '200px' },
            { type: 'text', prop: 'date_in_service', head: 'Date In Service', width: '200px' },
            { type: 'text', prop: 'class', head: 'Class', width: '200px' },
            { type: 'text', prop: 'tm_inspection_interval', head: 'TM Inspection Interval', width: '200px' },
            { type: 'text', prop: 've_inspection_interval', head: 'VE Inspection Interval', width: '200px' },
            { type: 'text', prop: 'notes', head: 'Notes', width: '200px' },
            { type: 'button', prop: 'edit', width: '80px', button: [
                    { icon: 'edit-outline', status: 'info', title: "edit-assets" },
                    { icon: 'trash-2-outline', status: 'danger', title: "delete-assets" },
                ] },
        ];
    }
    ngOnInit() {
        this.assetsService.getPipingAssets()
            .subscribe(({ data }) => this.tableData = data);
    }
    onClickTable(data, title) {
        if (title == 'delete-assets')
            this.deleteAsset(data);
    }
    deleteAsset(data) {
        this.dialogService.open(_component_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DeleteDialogComponent, {
            context: {
                dialogData: 'hello'
                // title: 'This is a title passed to the dialog component',
            },
        });
    }
}
PipingAssetsComponent.ɵfac = function PipingAssetsComponent_Factory(t) { return new (t || PipingAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_piping_assets_service__WEBPACK_IMPORTED_MODULE_1__.PipingAssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogService)); };
PipingAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PipingAssetsComponent, selectors: [["ngx-piping-assets"]], decls: 1, vars: 1, consts: [[3, "tableHeader", "columnDetails", "tableData", "onClickTable", 4, "ngIf"], [3, "tableHeader", "columnDetails", "tableData", "onClickTable"]], template: function PipingAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PipingAssetsComponent_ngx_mat_table_0_Template, 1, 4, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tableData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__.MatTableComponent], encapsulation: 2 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _piping_circuits_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piping-circuits.service */ 52787);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);




const _c0 = function () { return { title: "Piping Circuits", filter: "Circuit Id" }; };
function PipingCircuitsComponent_ngx_mat_table_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-mat-table", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx_r0.columnDetails)("tableData", ctx_r0.tableData);
} }
class PipingCircuitsComponent {
    constructor(circuitService) {
        this.circuitService = circuitService;
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
        this.circuitService.getPipingCircuits()
            .subscribe(({ data }) => this.tableData = data);
    }
}
PipingCircuitsComponent.ɵfac = function PipingCircuitsComponent_Factory(t) { return new (t || PipingCircuitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_piping_circuits_service__WEBPACK_IMPORTED_MODULE_0__.PipingCircuitService)); };
PipingCircuitsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PipingCircuitsComponent, selectors: [["ngx-piping-circuits"]], decls: 1, vars: 1, consts: [[3, "tableHeader", "columnDetails", "tableData", 4, "ngIf"], [3, "tableHeader", "columnDetails", "tableData"]], template: function PipingCircuitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PipingCircuitsComponent_ngx_mat_table_0_Template, 1, 4, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tableData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent], encapsulation: 2 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _view_proposal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-proposal.service */ 74039);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);



const _c0 = function () { return { title: "Proposal", filter: "Proposal Id" }; };
class ViewProposalComponent {
    constructor(viewProposalService) {
        this.viewProposalService = viewProposalService;
        this.tableData = [];
        this.columnDetails = [
            { type: 'select', prop: 'select', head: '', width: '20px' },
            { type: 'text', prop: 'proposal_id', head: 'Proposal ID', width: '100px' },
            { type: 'text', prop: 'inspection_plan_date', head: 'Inspection Plan Date', width: '200px' },
            { type: 'text', prop: 'piping_circuit', head: 'Piping/Piping Circuit', width: '200px' },
            { type: 'text', prop: 'remarks', head: 'Remarks', width: '200px' },
        ];
    }
    ngOnInit() {
        this.viewProposalService.getProposals()
            .subscribe(({ data }) => {
            this.tableData = data;
        });
        // for(let i=0; i < 20; i++) this.tableData.push({ 
        //   proposal_id : 'example proposal id',
        //   inspection_plan_date : 'example plan date',
        //   piping_circuit : 'example piping circuit',
        //   remarks : 'example class',
        // })
    }
}
ViewProposalComponent.ɵfac = function ViewProposalComponent_Factory(t) { return new (t || ViewProposalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_view_proposal_service__WEBPACK_IMPORTED_MODULE_0__.ViewProposalService)); };
ViewProposalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewProposalComponent, selectors: [["ngx-view-proposal"]], decls: 1, vars: 4, consts: [[3, "tableHeader", "columnDetails", "tableData"]], template: function ViewProposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_1__.MatTableComponent], encapsulation: 2 });


/***/ }),

/***/ 74039:
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/view-proposal/view-proposal.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewProposalService": () => (/* binding */ ViewProposalService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ViewProposalService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getProposals() {
        const url = this.apiUrl + "/proposal";
        return this.httpClient.get(url);
    }
}
ViewProposalService.ɵfac = function ViewProposalService_Factory(t) { return new (t || ViewProposalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ViewProposalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ViewProposalService, factory: ViewProposalService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map