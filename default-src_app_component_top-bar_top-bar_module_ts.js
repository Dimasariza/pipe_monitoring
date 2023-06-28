"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["default-src_app_component_top-bar_top-bar_module_ts"],{

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
        if (arr)
            this.dialog.close(arr);
    }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
DeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteDialogComponent, selectors: [["ngx-delete-dialog"]], inputs: { dialogData: "dialogData" }, decls: 16, vars: 0, consts: [[1, "w-100", "d-flex", "justify-content-center", "mt-5"], [1, "mt-5", 2, "max-height", "35rem", "min-width", "20rem"], [1, "d-flex"], [1, "w-100"], [1, "flex-shrink-1"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [1, "d-flex", "justify-content-center"], ["status", "success", "size", "small", "nbButton", "", 1, "m-1", 3, "click"], ["status", "danger", "size", "small", "nbButton", "", 1, "m-1", 3, "click"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nb-card", 1)(2, "nb-card-header", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_6_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body")(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Are you sure to delete this?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_12_listener() { return ctx.closeDialog(ctx.dialogData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_14_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent], encapsulation: 2 });


/***/ }),

/***/ 5198:
/*!*************************************************************!*\
  !*** ./src/app/component/top-bar/qr-code/qr-code.dialog.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintQRCodeComponent": () => (/* binding */ PrintQRCodeComponent)
/* harmony export */ });
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class PrintQRCodeComponent {
    constructor() {
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_0__.NgxQrcodeElementTypes.URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_0__.NgxQrcodeErrorCorrectionLevels.HIGH;
        // Need to specify the valid website address
        this.value = 'https://www.google.com/';
    }
    ngOnInit() {
    }
}
PrintQRCodeComponent.ɵfac = function PrintQRCodeComponent_Factory(t) { return new (t || PrintQRCodeComponent)(); };
PrintQRCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrintQRCodeComponent, selectors: [["ngx-qr-code"]], decls: 1, vars: 3, consts: [[3, "elementType", "errorCorrectionLevel", "value"]], template: function PrintQRCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-qrcode", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("elementType", ctx.elementType)("errorCorrectionLevel", ctx.correctionLevel)("value", ctx.value);
    } }, directives: [_techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_0__.QrcodeComponent], encapsulation: 2 });


/***/ }),

/***/ 78713:
/*!********************************************************!*\
  !*** ./src/app/component/top-bar/top-bar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _qr_code_qr_code_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-code/qr-code.dialog */ 5198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pages_dashboard_piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/piping-assets/piping-assets.component */ 58804);
/* harmony import */ var _pages_dashboard_piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/dashboard/piping-circuits/piping-circuits.component */ 75233);
/* harmony import */ var _pages_dashboard_view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/dashboard/view-proposal/view-proposal.component */ 56161);
/* harmony import */ var _pages_cml_cml_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/cml/cml.component */ 55526);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);









function TopBarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TopBarComponent_button_2_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const button_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return button_r1.name == "New" ? ctx_r2.addNew() : button_r1.name == "Import" ? ctx_r2.import() : button_r1.name == "Export" ? ctx_r2.export() : button_r1.name == "Print" ? ctx_r2.print() : button_r1.name == "QR Print" ? ctx_r2.qrPrint() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "nb-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", button_r1.icon)("pack", (tmp_1_0 = button_r1.pack) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "eva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](button_r1.name);
} }
const _c0 = function () { return { name: "New", icon: "plus-outline" }; };
const _c1 = function () { return { name: "Import", icon: "download-outline" }; };
const _c2 = function () { return { name: "Export", icon: "upload-outline" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class TopBarComponent {
    constructor(dialogService, activeRoute, assetComponent, circuitComponent, proposalComponent, cmlComponent) {
        this.dialogService = dialogService;
        this.activeRoute = activeRoute;
        this.assetComponent = assetComponent;
        this.circuitComponent = circuitComponent;
        this.proposalComponent = proposalComponent;
        this.cmlComponent = cmlComponent;
    }
    ngOnInit() { }
    addNew() {
        var _a;
        const route = ((_a = this.activeRoute.snapshot.data) === null || _a === void 0 ? void 0 : _a.routename)
            || this.activeRoute.snapshot.firstChild.data.routename;
        if (route == 'assets')
            this.assetComponent.addAssets();
        if (route == 'circuit')
            this.circuitComponent.addCircuit();
        if (route == 'proposal')
            this.proposalComponent.addProposal();
        if (route == 'cml')
            this.cmlComponent.addCML();
    }
    import() {
        console.log('import');
    }
    export() {
        console.log('export');
    }
    print() {
        console.log('print');
    }
    qrPrint() {
        this.dialogService.open(_qr_code_qr_code_dialog__WEBPACK_IMPORTED_MODULE_0__.PrintQRCodeComponent);
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_pages_dashboard_piping_assets_piping_assets_component__WEBPACK_IMPORTED_MODULE_1__.PipingAssetsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_pages_dashboard_piping_circuits_piping_circuits_component__WEBPACK_IMPORTED_MODULE_2__.PipingCircuitsComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_pages_dashboard_view_proposal_view_proposal_component__WEBPACK_IMPORTED_MODULE_3__.ViewProposalComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_pages_cml_cml_component__WEBPACK_IMPORTED_MODULE_4__.CmlComponent)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["ngx-top-bar"]], decls: 3, vars: 8, consts: [["nbButton", "", "outline", "", "size", "small", "status", "primary", "class", "m-2", 3, "click", 4, "ngFor", "ngForOf"], ["nbButton", "", "outline", "", "size", "small", "status", "primary", 1, "m-2", 3, "click"], [1, "m-1", 3, "icon", "pack"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TopBarComponent_button_2_Template, 4, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](4, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2)));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconComponent], encapsulation: 2 });


/***/ }),

/***/ 8351:
/*!*****************************************************!*\
  !*** ./src/app/component/top-bar/top-bar.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarModule": () => (/* binding */ TopBarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-bar.component */ 78713);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ 33244);
/* harmony import */ var _qr_code_qr_code_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./qr-code/qr-code.dialog */ 5198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);








class TopBarModule {
}
TopBarModule.ɵfac = function TopBarModule_Factory(t) { return new (t || TopBarModule)(); };
TopBarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TopBarModule });
TopBarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_6__.NgxQRCodeModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogModule.forChild({
                closeOnBackdropClick: true
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TopBarModule, { declarations: [_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent,
        _qr_code_qr_code_dialog__WEBPACK_IMPORTED_MODULE_2__.PrintQRCodeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_0__.ThemeModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconModule,
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_6__.NgxQRCodeModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogModule], exports: [_top_bar_component__WEBPACK_IMPORTED_MODULE_1__.TopBarComponent] }); })();


/***/ }),

/***/ 46415:
/*!********************************************************!*\
  !*** ./src/app/pages/cml/add-cml/add-cml.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCMLComponent": () => (/* binding */ AddCMLComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);



class AddCMLComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    closeDialog(arr = null) {
        if (!arr)
            this.dialog.close();
        if (arr) {
            console.log(arr);
            this.dialog.close();
            // this.assetsService.addPipingAssets(arr)
            // .subscribe(res => console.log(res))
        }
    }
}
AddCMLComponent.ɵfac = function AddCMLComponent_Factory(t) { return new (t || AddCMLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
AddCMLComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCMLComponent, selectors: [["ngx-add-cml"]], inputs: { dialogData: "dialogData" }, decls: 36, vars: 0, consts: [[1, "w-100", "d-flex", "justify-content-center", "mt-5"], [1, "mt-5", 2, "max-height", "35rem", "min-width", "20rem"], [1, "d-flex"], [1, "w-100"], [1, "flex-shrink-1"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [3, "ngSubmit"], ["cmlForm", "ngForm"], [1, ""], ["for", "cml_id", 1, "d-block"], ["type", "text", "id", "cml_id", "nbInput", "", "fieldSize", "small", "ngModel", "", "name", "cml_id"], ["for", "gauge_point", 1, "d-block"], ["type", "text", "id", "gauge_point", "nbInput", "", "fieldSize", "small", "ngModel", "", "name", "gauge_point"], ["for", "point_location", 1, "d-block"], ["type", "text", "id", "point_location", "nbInput", "", "fieldSize", "small", "ngModel", "", "name", "point_location"], ["for", "nominal_thickness", 1, "d-block"], ["type", "text", "id", "nominal_thickness", "nbInput", "", "fieldSize", "small", "ngModel", "", "name", "nominal_thickness"], ["for", "min_required_thickness", 1, "d-block"], ["type", "text", "id", "min_required_thickness", "nbInput", "", "fieldSize", "small", "ngModel", "", "name", "min_required_thickness"], ["for", "last_thickness_reading", 1, "d-block"], ["type", "text", "id", "last_thickness_reading", "nbInput", "", "fieldSize", "small", "ngModel", "", "name", "last_thickness_reading"], ["for", "last_thickness_reading_date", 1, "d-block"], ["type", "text", "id", "last_thickness_reading_date", "nbInput", "", "fieldSize", "small", "ngModel", "", "name", "last_thickness_reading_date"], ["nbButton", "", "size", "small", "status", "success", "type", "submit"]], template: function AddCMLComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nb-card", 1)(2, "nb-card-header", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add CML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCMLComponent_Template_button_click_6_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body")(9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCMLComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.closeDialog(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div")(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CML ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Gaguge Point");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Point Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nominal Thickness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Min. Required Thickness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Last Thickness Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Last Thickness Reading Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add CML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], encapsulation: 2 });


/***/ }),

/***/ 55526:
/*!********************************************!*\
  !*** ./src/app/pages/cml/cml.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmlComponent": () => (/* binding */ CmlComponent)
/* harmony export */ });
/* harmony import */ var _add_cml_add_cml_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-cml/add-cml.component */ 46415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cml_servivce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cml.servivce */ 19271);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);





function CmlComponent_ngx_mat_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-mat-table", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableHeader", ctx_r0.tableHeader)("columnDetails", ctx_r0.columnDetails)("tableData", ctx_r0.tableData);
} }
class CmlComponent {
    constructor(activatedroute, cmlService, dialogService) {
        this.activatedroute = activatedroute;
        this.cmlService = cmlService;
        this.dialogService = dialogService;
        this.tableData = [];
        this.columnDetails = [
            { type: 'text', prop: 'cml_id', head: 'CML Id', width: '200px' },
            { type: 'text', prop: 'gauge_point', head: 'Gauge Point', width: '200px' },
            { type: 'text', prop: 'point_location', head: 'Point Location', width: '200px' },
            { type: 'text', prop: 'nominal_thickness', head: 'Nominal Thickness (mm)', width: '200px' },
            { type: 'text', prop: 'min_required_thickness', head: 'Min. Required Thickness (mm)', width: '200px' },
            { type: 'text', prop: 'last_thickness_reading', head: 'Last Thickness Reading (mm)', width: '200px' },
            { type: 'text', prop: 'last_thickness_reading_date', head: 'Last Thickness Date', width: '200px' },
            { type: 'text', prop: 'calculate_cr', head: 'Calculated CR (mm/Year)', width: '200px' },
        ];
        this.inputDetail = [
            { name: "Gauge Point", prop: "gauge_point" },
            { name: "Point Location", prop: "point_location" },
        ];
    }
    ngOnInit() {
        const piping_id = this.activatedroute.snapshot.paramMap.get('id');
        this.cmlService.getCMLs()
            .subscribe(({ data }) => this.tableData = data);
        this.tableHeader = { title: `Pipe ${piping_id}`, filter: "CML Id" };
    }
    addCML() {
        this.dialogService.open(_add_cml_add_cml_component__WEBPACK_IMPORTED_MODULE_0__.AddCMLComponent, {
            context: {
                dialogData: 'hello'
                // title: 'This is a title passed to the dialog component',
            },
        });
    }
}
CmlComponent.ɵfac = function CmlComponent_Factory(t) { return new (t || CmlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_cml_servivce__WEBPACK_IMPORTED_MODULE_1__.CMLService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogService)); };
CmlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CmlComponent, selectors: [["ngx-cml"]], decls: 2, vars: 1, consts: [[3, "tableHeader", "columnDetails", "tableData", 4, "ngIf"], [3, "tableHeader", "columnDetails", "tableData"]], template: function CmlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CmlComponent_ngx_mat_table_1_Template, 1, 3, "ngx-mat-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tableData.length);
    } }, encapsulation: 2 });
CmlComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CmlComponent, factory: CmlComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 19271:
/*!*******************************************!*\
  !*** ./src/app/pages/cml/cml.servivce.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CMLService": () => (/* binding */ CMLService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class CMLService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getCMLs() {
        const url = this.apiUrl + "/cml";
        return this.httpClient.get(url);
    }
}
CMLService.ɵfac = function CMLService_Factory(t) { return new (t || CMLService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CMLService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CMLService, factory: CMLService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 39267:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/piping-assets/add-assets/add-assets.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAssetsComponent": () => (/* binding */ AddAssetsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function AddAssetsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", spec_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", spec_r6.id)("name", spec_r6.id)("ngModel", ctx_r1.dialogData == null ? null : ctx_r1.dialogData.data == null ? null : ctx_r1.dialogData.data[spec_r6.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spec_r6 == null ? null : spec_r6.unit, " ");
} }
function AddAssetsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_div_18_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return _r3.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r8 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r7.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r7 == null ? null : image_r7.alt);
} }
class AddAssetsComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.spesificationItem = [
            { id: 'piping_id', name: "Piping Id", unit: 'mm' },
            { id: 'piping_name', name: "Piping Name", unbit: 'mm' },
            { id: 'nominal_pipe_size', name: "Nominal Pipe Size", unit: 'mm' },
            { id: 'pipe_design_code', name: "Pipe Design Code" },
            { id: 'schedule', name: "Schedule", unit: 'mm' },
            { id: 'outside_diameter', name: "Outside Diamter" },
            { id: 'longtd_quality_factor', name: "Longtd. Quality Factor (E)" },
            { id: 'weld_joint_factor', name: "Weld Joint Factor (W)" },
            { id: 'allowable_unit_stress', name: "Allowable Unit Stress (S)", unit: 'psi' },
            { id: 'coefficient', name: "Coefficient (Y)" },
            { id: 'min_design_pressure', name: "Min. Design Pressure (P min)", unit: 'psig' },
            { id: 'max_design_pressure', name: "Max. Design Pressure (P max)", unit: 'psig' },
            { id: 'min_design_temperature', name: "Min. Design Temperature (T min)", unit: 'F' },
            { id: 'max_design_temperature', name: "Max Design Temperature (T max)", unit: 'F' },
            { id: 'corrosion_allowance', name: "Corrosion Allowance", unit: 'mm' },
            { id: 'mechanical_allowance', name: "Mechanical Allowances", unit: 'mm' },
            { id: 'min_structural_thickness', name: "Min. Structural Thickness", unit: 'mm' },
            { id: 'min_alert_thickness', name: "Min. Alert Thickness", unit: 'mm' },
            { id: 'nominal_thickness', name: "Nominal Thickness", unit: 'mm' },
        ];
        this.imageLink = [
        // { src : "https://wallpapercave.com/wp/wp6954364.jpg", alt : "Pipe 1"},
        // { src : "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt : "Pipe 2"},
        // { src : "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt : "Pipe 3"},
        ];
    }
    ngOnInit() { }
    onFileChange(res) {
        const file = res.target.files;
        for (let image of file) {
            var reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (event) => {
                const src = event.target.result;
                this.imageLink.push({ src, alt: image.name });
            };
        }
    }
    onImageLoad() {
        // const formData = new FormData(); 
        // formData.append('dokumen', this.uploadImageUrl);
        // this.homeService.uploadFile(formData)
        // .subscribe((res) => {
        //     if (res.type === HttpEventType.UploadProgress) {
        //         this.uploadProgress = Math.round(res.loaded / res.total ) * 100 + '%';
        //     } else 
        //     if ( res.type === HttpEventType.Response){
        //         this.uploadProgress = 'Upload Success';
        //         const result : any = res;
        //         this.uploadImageUrl = result.body.data.file;
        //     }
        // })
    }
    closeDialog(arr = null) {
        if (!arr)
            this.dialog.close();
        if (arr)
            this.dialog.close(arr);
    }
}
AddAssetsComponent.ɵfac = function AddAssetsComponent_Factory(t) { return new (t || AddAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
AddAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAssetsComponent, selectors: [["ngx-add-assets"]], inputs: { dialogData: "dialogData" }, decls: 57, vars: 9, consts: [[1, "w-100", "d-flex", "justify-content-center", "mt-5"], [1, "mt-5"], [1, "d-flex"], [1, "w-100"], [1, "flex-shrink-1"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [3, "ngSubmit"], ["addAssetsForm", "ngForm"], [1, "row"], [1, "col-8"], [1, "row", "row-cols-4"], ["class", "col mb-2", 4, "ngFor", "ngForOf"], [1, "col-4"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["for", "addImage"], ["placeholder", "Add image", "multiple", "", "fullWidth", "", "nbInput", "", "type", "file", "accept", "image/png, image/gif, image/jpeg", "id", "addImage", 3, "change"], ["addImage", ""], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "row", "row-cols-2"], ["for", "dateInService", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "name", "date_in_service", "required", "", 3, "nbDatepicker", "ngModel"], ["datepicker", ""], ["for", "class", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "class", "required", "", "name", "class", 3, "ngModel"], ["for", "notes", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "notes", "name", "notes", 3, "ngModel"], ["for", "addAttach", 1, "d-block", "mb-1"], ["fullWidth", "", "fieldSize", "tiny", "nbInput", "", "type", "file", "id", "addAttach", "accept", "application/pdf", "id", "addAttachment", "name", "attachment", "ngModel", ""], ["addAttach", ""], ["for", "recomendation", 1, "d-block", "mb-1"], ["fullWidth", "", "nbInput", "", "name", "recomendation", "id", "recomendation", "rows", "2", 3, "ngModel"], [1, "d-flex", "justify-content-center"], ["nbButton", "", "status", "success", "type", "submit", 1, "m-1", "w-100", 3, "disabled"], [1, "col", "mb-2"], [1, "d-block", 2, "font-size", ".9rem", 3, "for"], ["fieldSize", "small", "required", "", "nbInput", "", "type", "text", 1, "col-8", 3, "id", "name", "ngModel"], [1, "col"], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "13rem"], [1, "w-100", 3, "src", "alt", "click"]], template: function AddAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nb-card", 1)(2, "nb-card-header", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_Template_button_click_6_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body")(9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddAssetsComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.closeDialog(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddAssetsComponent_div_14_Template, 6, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddAssetsComponent_div_18_Template, 3, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddAssetsComponent_Template_input_change_21_listener($event) { return ctx.onFileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25)(32, "div")(33, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Date In Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 27)(36, "nb-datepicker", null, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div")(39, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div")(43, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div")(47, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 38)(55, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Add Asset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogData == null ? null : ctx.dialogData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spesificationItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r4)("ngModel", ctx.dialogData == null ? null : ctx.dialogData.data == null ? null : ctx.dialogData.data.date_in_service);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dialogData == null ? null : ctx.dialogData.data == null ? null : ctx.dialogData.data.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dialogData == null ? null : ctx.dialogData.data == null ? null : ctx.dialogData.data.notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dialogData == null ? null : ctx.dialogData.data == null ? null : ctx.dialogData.data.recomendation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerComponent], encapsulation: 2 });


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
/* harmony import */ var _add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-assets/add-assets.component */ 39267);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _piping_assets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piping-assets.service */ 78539);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);










function PipingAssetsComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PipingAssetsComponent_button_2_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const button_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return button_r1.name == "New" ? ctx_r2.addAssets() : button_r1.name == "Import" ? ctx_r2.import() : button_r1.name == "Export" ? ctx_r2.export() : button_r1.name == "Print" ? ctx_r2.print() : button_r1.name == "QR Print" ? ctx_r2.qrPrint() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", button_r1.icon)("pack", (tmp_1_0 = button_r1.pack) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "eva");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](button_r1.name);
} }
const _c0 = function () { return { name: "New", icon: "plus-outline" }; };
const _c1 = function () { return { name: "Import", icon: "download-outline" }; };
const _c2 = function () { return { name: "Export", icon: "upload-outline" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
const _c4 = function () { return { title: "Piping Assets", filter: "Piping Id" }; };
class PipingAssetsComponent {
    constructor(assetsService, dialogService, toastrService) {
        this.assetsService = assetsService;
        this.dialogService = dialogService;
        this.toastrService = toastrService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
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
            .subscribe(({ data }) => {
            this.tableData = data;
            this.viewTable.regenerateTable(data);
        }, () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'));
    }
    onClickTable(data, title) {
        if (title == 'delete-assets')
            this.deleteAsset(data);
        if (title == 'edit-assets')
            this.editAsset(data);
    }
    addAssets() {
        this.dialogService.open(_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_1__.AddAssetsComponent, {
            context: {
                dialogData: {
                    title: 'Add Assets',
                }
            },
        })
            .onClose
            .subscribe(newData => {
            if (newData)
                this.assetsService.addPipingAssets(newData)
                    .subscribe(() => this.ngOnInit(), () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'), () => this.toastrService.success('Data has been added.', 'Your request success.'));
        });
    }
    deleteAsset(data) {
        this.dialogService.open(_component_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DeleteDialogComponent, {
            context: {
                dialogData: {
                    title: "Delete Assets",
                    name: data.piping_name,
                    id: data.id
                }
            },
        })
            .onClose
            .subscribe(data => {
            if (data)
                this.assetsService.deletePipingAssets(data.id)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
                    .subscribe(() => this.ngOnInit(), () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'), () => this.toastrService.success('Data has been delete.', 'Your request success.'));
        });
    }
    editAsset(data) {
        this.dialogService.open(_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_1__.AddAssetsComponent, {
            context: {
                dialogData: {
                    title: 'Update Assets',
                    data: Object.assign(Object.assign({}, data), { date_in_service: new Date(data.date_in_service) })
                }
            },
        })
            .onClose
            .subscribe(newData => {
            if (newData)
                this.assetsService.updatePipingAssets(Object.assign(Object.assign({}, data), newData))
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$))
                    .subscribe(() => this.ngOnInit(), () => this.toastrService.danger('Please check your connection and try again.', 'Your request failed.'), () => this.toastrService.success('Data has been delete.', 'Your request success.'));
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
PipingAssetsComponent.ɵfac = function PipingAssetsComponent_Factory(t) { return new (t || PipingAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_piping_assets_service__WEBPACK_IMPORTED_MODULE_3__.PipingAssetsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbToastrService)); };
PipingAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PipingAssetsComponent, selectors: [["ngx-piping-assets"]], viewQuery: function PipingAssetsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__.MatTableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.viewTable = _t.first);
    } }, decls: 4, vars: 12, consts: [["nbButton", "", "outline", "", "size", "small", "status", "primary", "class", "m-2", 3, "click", 4, "ngFor", "ngForOf"], [3, "tableHeader", "columnDetails", "tableData", "onClickTable"], ["nbButton", "", "outline", "", "size", "small", "status", "primary", 1, "m-2", 3, "click"], [1, "m-1", 3, "icon", "pack"]], template: function PipingAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PipingAssetsComponent_button_2_Template, 4, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ngx-mat-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClickTable", function PipingAssetsComponent_Template_ngx_mat_table_onClickTable_3_listener($event) { return ctx.onClickTable($event.data, $event.title); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c4))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbIconComponent, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__.MatTableComponent], encapsulation: 2 });
PipingAssetsComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PipingAssetsComponent, factory: PipingAssetsComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 24651:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/piping-circuits/add-circuit/add-circuit.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCircuitComponent": () => (/* binding */ AddCircuitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../piping-assets/piping-assets.service */ 78539);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function AddCircuitComponent_nb_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pipe_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pipe_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pipe_r6.piping_id);
} }
function AddCircuitComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCircuitComponent_div_41_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51); return _r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r8 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r7.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", image_r7 == null ? null : image_r7.alt);
} }
class AddCircuitComponent {
    constructor(dialog, assetsService) {
        this.dialog = dialog;
        this.assetsService = assetsService;
        this.imageLink = [
            { src: "https://wallpapercave.com/wp/wp6954364.jpg", alt: "Pipe 1" },
            { src: "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt: "Pipe 2" },
            { src: "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt: "Pipe 3" },
        ];
    }
    ngOnInit() {
        this.assetsService.getPipingAssets()
            .subscribe(({ data }) => {
            this.piping = data;
        });
    }
    closeDialog(arr = null) {
        this.dialog.close(arr);
    }
}
AddCircuitComponent.ɵfac = function AddCircuitComponent_Factory(t) { return new (t || AddCircuitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_piping_assets_piping_assets_service__WEBPACK_IMPORTED_MODULE_0__.PipingAssetsService)); };
AddCircuitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddCircuitComponent, selectors: [["ngx-add-circuit"]], inputs: { dialogData: "dialogData" }, decls: 59, vars: 4, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "mt-4"], [1, "mt-5"], [1, "d-flex"], [1, "w-100"], [1, "flex-shrink-1"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [3, "ngSubmit"], ["addCircuitForm", "ngForm"], [1, "row"], [1, "col-6"], ["for", "piping_circuit_id", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "piping_circuit_id", "name", "piping_circuit_id", "ngModel", ""], ["for", "piping_id", 1, "mb-1", "d-block"], ["multiple", "", "placeholder", "Multiple Select", "name", "piping_id", "ngModel", "", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "piping_circuit_name", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "piping_circuit_name", "name", "piping_circuit_name", "ngModel", "", "required", ""], ["for", "dateInService", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "name", "date_in_service", "ngModel", "", "required", "", 3, "nbDatepicker"], ["datepicker", ""], ["for", "class", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "class", "name", "class", "ngModel", "", "required", ""], ["for", "notes", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "notes", "name", "notes", "ngModel", "", "required", ""], ["for", "addAttach", 1, "d-block", "mb-1"], ["fullWidth", "", "fieldSize", "tiny", "nbInput", "", "type", "file", "id", "addAttach", "accept", "application/pdf", "id", "addAttachment", "name", "attachment", "ngModel", ""], ["addAttach", ""], [1, "col-6", "align-self-center"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["fullWidth", "", "nbInput", "", "type", "file", "accept", "image/png, image/gif, image/jpeg", "id", "addImage", 2, "display", "none"], ["addImage", ""], ["for", "recomendation", 1, "d-block", "mb-1"], ["fullWidth", "", "nbInput", "", "name", "recomendation", "id", "recomendation", "rows", "2", "name", "recomendation", "ngModel", "", "required", ""], [1, "d-flex", "justify-content-center"], ["nbButton", "", "status", "success", "type", "submit", 1, "m-1", "w-100", 3, "disabled"], [3, "value"], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "13rem"], [1, "w-100", 3, "src", "alt", "click"]], template: function AddCircuitComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nb-card", 1)(2, "nb-card-header", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add Circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddCircuitComponent_Template_button_click_6_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "nb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nb-card-body")(9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddCircuitComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return ctx.closeDialog(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Piping Circuit Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Piping Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nb-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AddCircuitComponent_nb_option_19_Template, 2, 2, "nb-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Piping Circuit Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Date In Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 19)(26, "nb-datepicker", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 28)(39, "div", 29)(40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AddCircuitComponent_div_41_Template, 3, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div")(53, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 41)(57, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Add Circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.piping);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imageLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbDatepickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], encapsulation: 2 });


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
/* harmony import */ var _add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-circuit/add-circuit.component */ 24651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _piping_circuits_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piping-circuits.service */ 52787);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);






function PipingCircuitsComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PipingCircuitsComponent_button_2_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const button_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return button_r2.name == "New" ? ctx_r3.addCircuit() : button_r2.name == "Import" ? ctx_r3.import() : button_r2.name == "Export" ? ctx_r3.export() : button_r2.name == "Print" ? ctx_r3.print() : button_r2.name == "QR Print" ? ctx_r3.qrPrint() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const button_r2 = ctx.$implicit;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", button_r2.icon)("pack", (tmp_1_0 = button_r2.pack) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "eva");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](button_r2.name);
} }
const _c0 = function () { return { title: "Piping Circuits", filter: "Circuit Id" }; };
function PipingCircuitsComponent_ngx_mat_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-mat-table", 4);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0))("columnDetails", ctx_r1.columnDetails)("tableData", ctx_r1.tableData);
} }
const _c1 = function () { return { name: "New", icon: "plus-outline" }; };
const _c2 = function () { return { name: "Import", icon: "download-outline" }; };
const _c3 = function () { return { name: "Export", icon: "upload-outline" }; };
const _c4 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PipingCircuitsComponent {
    constructor(circuitService, dialogService) {
        this.circuitService = circuitService;
        this.dialogService = dialogService;
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
    addCircuit() {
        this.dialogService.open(_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_0__.AddCircuitComponent, {
            context: {
                dialogData: 'hello'
                // title: 'This is a title passed to the dialog component',
            },
        });
    }
}
PipingCircuitsComponent.ɵfac = function PipingCircuitsComponent_Factory(t) { return new (t || PipingCircuitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_piping_circuits_service__WEBPACK_IMPORTED_MODULE_1__.PipingCircuitService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogService)); };
PipingCircuitsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PipingCircuitsComponent, selectors: [["ngx-piping-circuits"]], decls: 4, vars: 9, consts: [["nbButton", "", "outline", "", "size", "small", "status", "primary", "class", "m-2", 3, "click", 4, "ngFor", "ngForOf"], [3, "tableHeader", "columnDetails", "tableData", 4, "ngIf"], ["nbButton", "", "outline", "", "size", "small", "status", "primary", 1, "m-2", 3, "click"], [1, "m-1", 3, "icon", "pack"], [3, "tableHeader", "columnDetails", "tableData"]], template: function PipingCircuitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PipingCircuitsComponent_button_2_Template, 4, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PipingCircuitsComponent_ngx_mat_table_3_Template, 1, 4, "ngx-mat-table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](5, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.tableData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__.MatTableComponent], encapsulation: 2 });
PipingCircuitsComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PipingCircuitsComponent, factory: PipingCircuitsComponent.ɵfac, providedIn: 'root' });


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

/***/ 58189:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/view-proposal/add-proposal/add-proposal.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProposalComponent": () => (/* binding */ AddProposalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 88133);







const _c0 = function (a0) { return { "color": a0 }; };
function AddProposalComponent_nb_list_item_37_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 27)(1, "span", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AddProposalComponent_nb_list_item_37_Template_span_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r10.style.color = "#0492c2"; })("mouseout", function AddProposalComponent_nb_list_item_37_Template_span_mouseout_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const index_r9 = restoredCtx.index; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.selectionCircuit == index_r9 ? _r10.style.color = "#0492c2" : _r10.style.color = "black"; })("click", function AddProposalComponent_nb_list_item_37_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const index_r9 = restoredCtx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.selectCircuit(index_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const circuit_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r2.selectionCircuit == index_r9 ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", circuit_r8, " ");
} }
function AddProposalComponent_nb_list_item_42_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 27)(1, "span", 28, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AddProposalComponent_nb_list_item_42_Template_span_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r17.style.color = "#0492c2"; })("mouseout", function AddProposalComponent_nb_list_item_42_Template_span_mouseout_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const index_r16 = restoredCtx.index; const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectionPipe == index_r16 ? _r17.style.color = "#0492c2" : _r17.style.color = "black"; })("click", function AddProposalComponent_nb_list_item_42_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const index_r16 = restoredCtx.index; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.selectPipe(index_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const piping_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.selectionPipe == index_r16 ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", piping_r15, " ");
} }
function AddProposalComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProposalComponent_mat_option_51_Template_mat_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.selectInspectionType(item_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22, " ");
} }
function AddProposalComponent_nb_list_item_59_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 32)(1, "span", 28, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AddProposalComponent_nb_list_item_59_Template_span_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r27.style.color = "#0492c2"; })("mouseout", function AddProposalComponent_nb_list_item_59_Template_span_mouseout_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const index_r26 = restoredCtx.index; const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.selectionMethod == index_r26 ? _r27.style.color = "#0492c2" : _r27.style.color = "black"; })("click", function AddProposalComponent_nb_list_item_59_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const index_r26 = restoredCtx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.selectMethod(index_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const method_r25 = ctx.$implicit;
    const index_r26 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.selectionMethod == index_r26 ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", method_r25 == null ? null : method_r25.name, " ");
} }
function AddProposalComponent_nb_list_item_64_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 27)(1, "span", 28, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function AddProposalComponent_nb_list_item_64_Template_span_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r34.style.color = "#0492c2"; })("mouseout", function AddProposalComponent_nb_list_item_64_Template_span_mouseout_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const index_r33 = restoredCtx.index; const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.selectionTechnique == index_r33 ? _r34.style.color = "#0492c2" : _r34.style.color = "black"; })("click", function AddProposalComponent_nb_list_item_64_Template_span_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const index_r33 = restoredCtx.index; const technique_r32 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.selectTechnique(index_r33, technique_r32.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const technique_r32 = ctx.$implicit;
    const index_r33 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r6.selectionTechnique == index_r33 ? "#0492c2" : "black"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", technique_r32 == null ? null : technique_r32.name, " ");
} }
function AddProposalComponent_nb_list_item_68_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", method_r39 == null ? null : method_r39.method, " ");
} }
function AddProposalComponent_nb_list_item_68_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" + ", method_r39 == null ? null : method_r39.technique, " ");
} }
function AddProposalComponent_nb_list_item_68_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 35)(1, "div", 36)(2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProposalComponent_nb_list_item_68_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const index_r40 = restoredCtx.index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.activationMethod(index_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddProposalComponent_nb_list_item_68_span_9_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddProposalComponent_nb_list_item_68_span_10_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const method_r39 = ctx.$implicit;
    const index_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r40 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", (method_r39 == null ? null : method_r39.active) ? "radio-button-on-outline" : "radio-button-off-outline")("status", (method_r39 == null ? null : method_r39.active) ? "success" : "basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", method_r39 == null ? null : method_r39.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", method_r39 == null ? null : method_r39.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", method_r39 == null ? null : method_r39.technique);
} }
const _c1 = function () { return [1, 2, 3, 4, 5]; };
const _c2 = function () { return [1, 2, 3]; };
const _c3 = function () { return ["Instrusive", "Non Instrusive"]; };
class AddProposalComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.selectionCircuit = 0;
        this.selectionMethod = 0;
        this.inspectionMethodList = [];
        this.inspectionMethod = [
            { name: "Acoustic Emission", children: [
                    { name: "Crack Detection" },
                    { name: "Leak Detection" },
                ] },
            { name: "Eddy Current", children: [
                    { name: "ACFM" },
                    { name: "Low Frequency" },
                    { name: "Pulsed" },
                    { name: "Remote Field" },
                    { name: "Standard (flat coil)" },
                ] },
            { name: "Magnetic", children: [
                    { name: "Magnetic Fluorescent Inspection" },
                    { name: "Magnetic Flux Leakage" },
                    { name: "Magnetic Particle Inspection" },
                ] },
            { name: "Metallurgical", children: [
                    { name: "Hardness Surveys" },
                    { name: "Microstructure Replication" },
                ] },
            { name: "Monitoring", children: [
                    { name: "On-line Monitoring" }
                ] },
            { name: "Penetrant", children: [
                    { name: "Liquid Penetrant Inspection" },
                    { name: "Penetrant Leak Inspection" }
                ] },
            { name: "Radiography", children: [
                    { name: "Compton Scatter" },
                    { name: "Gamma Radiography" },
                    { name: "Real-time Radiography" },
                    { name: "X-Radiography" },
                ] },
            { name: "Thermography", children: [
                    { name: "Passive Thermography" },
                    { name: "Transient Thermography" },
                ] },
            { name: "Ultrasonic", children: [
                    { name: "Advanced Ultrasonic Backscatter Technique" },
                    { name: "Angled Compression Wave" },
                    { name: "Angled Shear Wave" },
                    { name: "A-scan Thickness Survey" },
                    { name: "B-Scan" },
                    { name: "Chime" },
                    { name: "C-Scan" },
                    { name: "Digital Ultrasonic Thickness Gauge" },
                    { name: "Internal Rotational Inspection System" },
                    { name: "Lorus" },
                    { name: "Surface Waves" },
                    { name: "Teletest" },
                    { name: "TOFD" },
                ] },
            { name: "Visual", children: [
                    { name: "Endoscopy" },
                    { name: "Holiday Test" },
                    { name: "Hydrotesting" },
                    { name: "Naked Eye" },
                    { name: "Video" },
                ] },
        ];
    }
    ngOnInit() {
    }
    selectCircuit(index) {
        this.selectionPipe = null;
        this.selectionCircuit = index;
    }
    selectPipe(index) {
        this.selectionPipe = index;
    }
    selectTechnique(index, value) {
        this.selectionTechnique = index;
        this.inspectionMethodList[this.activeMethod]["method"] =
            this.inspectionMethod[this.selectionMethod].name;
        this.inspectionMethodList[this.activeMethod]["technique"] = value;
    }
    selectMethod(index) {
        this.selectionTechnique = null;
        this.selectionMethod = index;
        this.inspectionMethodList[this.activeMethod]["method"] =
            this.inspectionMethod[this.selectionMethod].name;
    }
    selectInspectionType(value) {
        this.inspectionMethodList = this.inspectionMethodList.map(item => (Object.assign(Object.assign({}, item), { active: false })));
        this.inspectionMethodList.push({ type: value, active: true });
        this.activeMethod = this.inspectionMethodList.length - 1;
    }
    activationMethod(index) {
        this.inspectionMethodList = this.inspectionMethodList.map(item => (Object.assign(Object.assign({}, item), { active: false })));
        this.inspectionMethodList[index].active = true;
        this.activeMethod = index;
    }
    closeDialog(arr = null) {
        this.dialog.close();
        console.log(arr);
    }
}
AddProposalComponent.ɵfac = function AddProposalComponent_Factory(t) { return new (t || AddProposalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
AddProposalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProposalComponent, selectors: [["ngx-add-proposal"]], inputs: { dialogData: "dialogData" }, decls: 71, vars: 11, consts: [[1, "w-100", "d-flex", "justify-content-center", "mt-5"], [1, "mt-5", 2, "max-height", "35rem", "min-width", "80rem"], [1, "d-flex"], [1, "w-100"], [1, "flex-shrink-1"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [1, "d-flex", "justify-content-between"], ["for", "remarks", 1, "d-block"], ["nbInput", "", "name", "", "id", "inspection_summary", "rows", "7", "fullWidth", ""], ["for", "dateInService", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", 3, "nbDatepicker"], ["inspection_planned_date", ""], ["recomendation_date", ""], [2, "max-height", "10rem"], [1, "text-secondary"], ["style", "max-height: .7rem;", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-12"], [1, "my-2"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "col-6", "p-1"], [1, "w-50"], ["style", "max-height: .7rem; cursor: pointer;", 4, "ngFor", "ngForOf"], [2, "max-height", "24rem"], ["style", "cursor: pointer;", "class", "w-100", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "success", "size", "small", 1, "w-100"], [2, "max-height", ".7rem"], [2, "cursor", "pointer", 3, "ngStyle", "mouseover", "mouseout", "click"], ["circuitcell", ""], ["pipingcell", ""], [3, "value", "click"], [2, "max-height", ".7rem", "cursor", "pointer"], ["methodcell", ""], ["techniquecell", ""], [1, "w-100", 2, "cursor", "pointer"], [1, "d-flex", "justify-content-between", "w-100", "row"], [1, "col-1", 3, "click"], [1, "d-flex", "align-items-center"], [1, "align-self-center", "ms-2", 2, "font-size", "20px", 3, "icon", "status"], [1, "col-3"], ["class", "col-3", 4, "ngIf"], ["type", "number", "nbInput", "", "min", "0", "max", "100", "fieldSize", "tiny", 1, "col-2"]], template: function AddProposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nb-card", 1)(2, "nb-card-header", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProposalComponent_Template_button_click_6_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body")(9, "form")(10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 7)(13, "div")(14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div")(18, "div", 2)(19, "div")(20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Inspection Planned Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 11)(23, "nb-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div")(26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Recomendation Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11)(29, "nb-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nb-card", 14)(32, "nb-card-body", 2)(33, "div", 3)(34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Circuit ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddProposalComponent_nb_list_item_37_Template, 4, 4, "nb-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3)(39, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Piping ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddProposalComponent_nb_list_item_42_Template, 4, 4, "nb-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Inspection Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 17)(46, "div", 18)(47, "mat-form-field", 19)(48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Inspection Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AddProposalComponent_mat_option_51_Template, 2, 2, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21)(53, "nb-card")(54, "nb-card-body", 2)(55, "div", 22)(56, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Inspection Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AddProposalComponent_nb_list_item_59_Template, 4, 4, "nb-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3)(61, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Inspection Technique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AddProposalComponent_nb_list_item_64_Template, 4, 4, "nb-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21)(66, "nb-card", 24)(67, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AddProposalComponent_nb_list_item_68_Template, 12, 6, "nb-list-item", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Add Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inspectionMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inspectionMethod[ctx.selectionMethod] == null ? null : ctx.inspectionMethod[ctx.selectionMethod].children);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inspectionMethodList);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });


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
/* harmony import */ var _add_proposal_add_proposal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-proposal/add-proposal.component */ 58189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _view_proposal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-proposal.service */ 74039);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/mat-table/mat-table.component */ 53858);






function ViewProposalComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewProposalComponent_button_2_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const button_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return button_r1.name == "New" ? ctx_r2.addAssets() : button_r1.name == "Import" ? ctx_r2.import() : button_r1.name == "Export" ? ctx_r2.export() : button_r1.name == "Print" ? ctx_r2.print() : button_r1.name == "QR Print" ? ctx_r2.qrPrint() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nb-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", button_r1.icon)("pack", (tmp_1_0 = button_r1.pack) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "eva");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](button_r1.name);
} }
const _c0 = function () { return { name: "New", icon: "plus-outline" }; };
const _c1 = function () { return { name: "Import", icon: "download-outline" }; };
const _c2 = function () { return { name: "Export", icon: "upload-outline" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
const _c4 = function () { return { title: "Proposal", filter: "Proposal Id" }; };
class ViewProposalComponent {
    constructor(viewProposalService, dialogService) {
        this.viewProposalService = viewProposalService;
        this.dialogService = dialogService;
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
    }
    addProposal() {
        this.dialogService.open(_add_proposal_add_proposal_component__WEBPACK_IMPORTED_MODULE_0__.AddProposalComponent, {
            context: {
                dialogData: 'hello'
                // title: 'This is a title passed to the dialog component',
            },
        });
    }
}
ViewProposalComponent.ɵfac = function ViewProposalComponent_Factory(t) { return new (t || ViewProposalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_view_proposal_service__WEBPACK_IMPORTED_MODULE_1__.ViewProposalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDialogService)); };
ViewProposalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ViewProposalComponent, selectors: [["ngx-view-proposal"]], decls: 4, vars: 12, consts: [["nbButton", "", "outline", "", "size", "small", "status", "primary", "class", "m-2", 3, "click", 4, "ngFor", "ngForOf"], [3, "tableHeader", "columnDetails", "tableData"], ["nbButton", "", "outline", "", "size", "small", "status", "primary", 1, "m-2", 3, "click"], [1, "m-1", 3, "icon", "pack"]], template: function ViewProposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ViewProposalComponent_button_2_Template, 4, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ngx-mat-table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableHeader", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c4))("columnDetails", ctx.columnDetails)("tableData", ctx.tableData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbIconComponent, _component_mat_table_mat_table_component__WEBPACK_IMPORTED_MODULE_2__.MatTableComponent], encapsulation: 2 });
ViewProposalComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ViewProposalComponent, factory: ViewProposalComponent.ɵfac, providedIn: 'root' });


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
//# sourceMappingURL=default-src_app_component_top-bar_top-bar_module_ts.js.map