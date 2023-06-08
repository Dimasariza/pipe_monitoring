"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["default-src_app_component_top-bar_top-bar_module_ts"],{

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
/* harmony import */ var _pages_dashboard_piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/piping-assets/add-assets/add-assets.component */ 39267);
/* harmony import */ var _pages_dashboard_piping_circuits_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/dashboard/piping-circuits/add-circuit/add-circuit.component */ 24651);
/* harmony import */ var _pages_dashboard_view_proposal_add_proposal_add_proposal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/dashboard/view-proposal/add-proposal/add-proposal.component */ 58189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);








function TopBarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopBarComponent_button_2_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const button_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return button_r1.name == "New" ? ctx_r2.addNew() : button_r1.name == "Import" ? ctx_r2.import() : button_r1.name == "Export" ? ctx_r2.export() : button_r1.name == "Print" ? ctx_r2.print() : button_r1.name == "QR Print" ? ctx_r2.qrPrint() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nb-icon", 2);
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
class TopBarComponent {
    constructor(dialogService, activeRoute) {
        this.dialogService = dialogService;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
    }
    addNew() {
        const route = this.activeRoute.snapshot.firstChild.routeConfig.path;
        if (route == 'piping-assets')
            this.dialogService.open(_pages_dashboard_piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_1__.AddAssetsComponent, {
                context: {
                    dialogData: 'hello'
                    // title: 'This is a title passed to the dialog component',
                },
            });
        if (route == 'piping-circuits')
            this.dialogService.open(_pages_dashboard_piping_circuits_add_circuit_add_circuit_component__WEBPACK_IMPORTED_MODULE_2__.AddCircuitComponent, {
                context: {
                    dialogData: 'hello'
                    // title: 'This is a title passed to the dialog component',
                },
            });
        if (route == 'view-proposal')
            this.dialogService.open(_pages_dashboard_view_proposal_add_proposal_add_proposal_component__WEBPACK_IMPORTED_MODULE_3__.AddProposalComponent, {
                context: {
                    dialogData: 'hello'
                    // title: 'This is a title passed to the dialog component',
                },
            });
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
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["ngx-top-bar"]], decls: 3, vars: 8, consts: [["nbButton", "", "outline", "", "size", "small", "status", "primary", "class", "m-2", 3, "click", 4, "ngFor", "ngForOf"], ["nbButton", "", "outline", "", "size", "small", "status", "primary", 1, "m-2", 3, "click"], [1, "m-1", 3, "icon", "pack"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TopBarComponent_button_2_Template, 4, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](4, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c2)));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbIconComponent], encapsulation: 2 });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", spec_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", spec_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spec_r6 == null ? null : spec_r6.unit, " ");
} }
function AddAssetsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_div_18_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return _r3.click(); });
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
            { id: 'nominal_pipe_size', name: "Nominal Pipe Size", unit: 'mm' },
            { id: 'pipe_design_code', name: "Pipe Design Code" },
            { id: 'schedule', name: "Schedule", unit: 'mm' },
            { id: 'outisde_diameter', name: "Outside Diamter" },
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
            { src: "https://wallpapercave.com/wp/wp6954364.jpg", alt: "Pipe 1" },
            { src: "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt: "Pipe 2" },
            { src: "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt: "Pipe 3" },
        ];
    }
    ngOnInit() {
    }
    closeDialog(arr = null) {
        this.dialog.close();
        console.log(arr);
    }
}
AddAssetsComponent.ɵfac = function AddAssetsComponent_Factory(t) { return new (t || AddAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
AddAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAssetsComponent, selectors: [["ngx-add-assets"]], inputs: { dialogData: "dialogData" }, decls: 55, vars: 3, consts: [[1, "w-100", "d-flex", "justify-content-center", "mt-5"], [1, "mt-5"], [1, "d-flex"], [1, "w-100"], [1, "flex-shrink-1"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [3, "ngSubmit"], ["addAssetsForm", "ngForm"], [1, "row"], [1, "col-8"], [1, "row", "row-cols-4"], ["class", "col mb-2", 4, "ngFor", "ngForOf"], [1, "col-4"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["fullWidth", "", "nbInput", "", "type", "file", "accept", "image/png, image/gif, image/jpeg", "id", "addImage", 2, "display", "none"], ["addImage", ""], [1, "row", "row-cols-2"], ["for", "dateInService", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", 3, "nbDatepicker"], ["datepicker", ""], ["for", "class", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "class"], ["for", "notes", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "notes"], ["for", "addAttach", 1, "d-block", "mb-1"], ["fullWidth", "", "fieldSize", "tiny", "nbInput", "", "type", "file", "id", "addAttach", "accept", "application/pdf", "id", "addAttachment"], ["addAttach", ""], ["for", "recomendation", 1, "d-block", "mb-1"], ["fullWidth", "", "nbInput", "", "name", "recomendation", "id", "recomendation", "rows", "2"], [1, "d-flex", "justify-content-center"], ["nbButton", "", "status", "success", "type", "submit", 1, "m-1", "w-100"], [1, "col", "mb-2"], [1, "d-block", 2, "font-size", ".9rem", 3, "for"], ["fieldSize", "small", "nbInput", "", "type", "text", 1, "col-8", 3, "id"], [1, "col"], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "13rem"], [1, "w-100", 3, "src", "alt", "click"]], template: function AddAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nb-card", 1)(2, "nb-card-header", 2)(3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_Template_button_click_6_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body")(9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddAssetsComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.closeDialog(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddAssetsComponent_div_14_Template, 6, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13)(16, "div", 14)(17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddAssetsComponent_div_18_Template, 3, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24)(30, "div")(31, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Date In Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 26)(34, "nb-datepicker", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div")(37, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div")(41, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div")(45, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 37)(53, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Add Asset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spesificationItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r4);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerComponent], encapsulation: 2 });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




function AddCircuitComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCircuitComponent_div_33_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return _r4.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r6 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r5.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r5 == null ? null : image_r5.alt);
} }
class AddCircuitComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.imageLink = [
            { src: "https://wallpapercave.com/wp/wp6954364.jpg", alt: "Pipe 1" },
            { src: "https://th.bing.com/th/id/OIP.AYvIW8-BF1Kfk1LvIq2WagAAAA?pid=ImgDet&w=400&h=400&rs=1", alt: "Pipe 2" },
            { src: "https://th.bing.com/th/id/OIP.buLgFymST5kZJoEQjTQVxQHaE7?pid=ImgDet&rs=1", alt: "Pipe 3" },
        ];
    }
    ngOnInit() {
    }
    closeDialog(arr = null) {
        this.dialog.close();
        console.log(arr);
    }
}
AddCircuitComponent.ɵfac = function AddCircuitComponent_Factory(t) { return new (t || AddCircuitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
AddCircuitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCircuitComponent, selectors: [["ngx-add-circuit"]], inputs: { dialogData: "dialogData" }, decls: 51, vars: 2, consts: [[1, "mt-5"], [1, "d-flex"], [1, "w-100"], [1, "flex-shrink-1"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [3, "ngSubmit"], ["addCircuitForm", "ngForm"], [1, "row"], [1, "col-6"], ["for", "dateInService", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", 3, "nbDatepicker"], ["datepicker", ""], ["for", "class", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "class"], ["for", "notes", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "notes"], ["for", "piping_circuit_id", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "piping_circuit_id"], ["for", "addAttach", 1, "d-block", "mb-1"], ["fullWidth", "", "fieldSize", "tiny", "nbInput", "", "type", "file", "id", "addAttach", "accept", "application/pdf", "id", "addAttachment"], ["addAttach", ""], [1, "col-6", "align-self-center"], ["id", "carouselExampleInterval", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "carousel-item", "data-bs-interval", "10000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleInterval", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["fullWidth", "", "nbInput", "", "type", "file", "accept", "image/png, image/gif, image/jpeg", "id", "addImage", 2, "display", "none"], ["addImage", ""], ["for", "recomendation", 1, "d-block", "mb-1"], ["fullWidth", "", "nbInput", "", "name", "recomendation", "id", "recomendation", "rows", "2"], [1, "d-flex", "justify-content-center"], ["nbButton", "", "status", "success", "type", "submit", 1, "m-1", "w-100"], ["data-bs-interval", "10000", 1, "carousel-item", 3, "ngClass"], [1, "overflow-hidden", "d-flex", "align-justify-center", 2, "height", "13rem"], [1, "w-100", 3, "src", "alt", "click"]], template: function AddCircuitComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0)(1, "nb-card-header", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddCircuitComponent_Template_button_click_5_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nb-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-body")(8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCircuitComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.closeDialog(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date In Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11)(15, "nb-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Piping Circuit Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Attachment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22)(31, "div", 23)(32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddCircuitComponent_div_33_Template, 3, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div")(45, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 35)(49, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Add Circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageLink);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], encapsulation: 2 });


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


class AddProposalComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    closeDialog(arr = null) {
        this.dialog.close();
        console.log(arr);
    }
}
AddProposalComponent.ɵfac = function AddProposalComponent_Factory(t) { return new (t || AddProposalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDialogRef)); };
AddProposalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProposalComponent, selectors: [["ngx-add-proposal"]], inputs: { dialogData: "dialogData" }, decls: 2, vars: 0, template: function AddProposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Proposal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=default-src_app_component_top-bar_top-bar_module_ts.js.map