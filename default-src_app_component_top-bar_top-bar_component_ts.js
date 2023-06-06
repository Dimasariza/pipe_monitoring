"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["default-src_app_component_top-bar_top-bar_component_ts"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);





function TopBarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopBarComponent_button_2_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const button_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return button_r1.name == "New" ? ctx_r2.addNew() : button_r1.name == "Import" ? ctx_r2.import() : button_r1.name == "Export" ? ctx_r2.export() : button_r1.name == "Print" ? ctx_r2.print() : button_r1.name == "QR Print" ? ctx_r2.qrPrint() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nb-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", button_r1.icon)("pack", (tmp_1_0 = button_r1.pack) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "eva");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](button_r1.name);
} }
const _c0 = function () { return { name: "New", icon: "plus-outline" }; };
const _c1 = function () { return { name: "Import", icon: "download-outline" }; };
const _c2 = function () { return { name: "Export", icon: "upload-outline" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class TopBarComponent {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    ngOnInit() {
    }
    addNew() {
        this.dialogService.open(_pages_dashboard_piping_assets_add_assets_add_assets_component__WEBPACK_IMPORTED_MODULE_1__.AddAssetsComponent, {
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
        console.log('qr print');
        this.dialogService.open(_qr_code_qr_code_dialog__WEBPACK_IMPORTED_MODULE_0__.PrintQRCodeComponent);
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbDialogService)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["ngx-top-bar"]], decls: 3, vars: 8, consts: [["nbButton", "", "outline", "", "size", "small", "status", "primary", "class", "m-2", 3, "click", 4, "ngFor", "ngForOf"], ["nbButton", "", "outline", "", "size", "small", "status", "primary", 1, "m-2", 3, "click"], [1, "m-1", 3, "icon", "pack"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TopBarComponent_button_2_Template, 4, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](4, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c2)));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbIconComponent], encapsulation: 2 });


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




function AddAssetsComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "div", 7)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const spec_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", spec_r5 == null ? null : spec_r5.unit, " ");
} }
class AddAssetsComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.spesificationItem = [
            { name: "Nominal Thickness", unit: 'mm' },
            { name: "Outside Diamter", unit: 'mm' },
            { name: "Min. Design Pressure" },
            { name: "Corrosion Allowance" },
            { name: "Pressure Design" },
            { name: "Join Efficiency (E)" },
            { name: "Max. Design Pressure" },
            { name: "Longtd. Quality Factor (E)" },
            { name: "Allowable Unit Stress (S)" },
            { name: "Min. Design Temperature" },
            { name: "Coefficient (Y)" },
            { name: "Max Design Temperature" },
            { name: "Max Temperature" },
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
AddAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAssetsComponent, selectors: [["ngx-add-assets"]], inputs: { dialogData: "dialogData" }, decls: 41, vars: 2, consts: [[1, "w-100", "d-flex", "justify-content-center", "mt-5"], [1, "w-75", "mt-5"], [1, "d-flex", "justify-content-between"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [3, "ngSubmit"], ["addAssetsForm", "ngForm"], [1, "row", "m-1"], [1, "col-4"], ["for", "dateInService", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", 3, "nbDatepicker"], ["datepicker", ""], ["for", "class", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "class"], ["for", "notes", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "notes"], [1, "col-6"], ["for", "recomendation", 1, "d-block", "mb-1"], ["fullWidth", "", "nbInput", "", "name", "recomendation", "id", "recomendation", "rows", "3"], ["nbButton", "", "status", "primary", "type", "button", 1, "my-1", "justify-item-center", 3, "click"], ["icon", "file-pdf", "pack", "far", 1, "mx-2"], ["fullWidth", "", "nbInput", "", "type", "file", "accept", "application/pdf", "id", "addAttachment", 2, "display", "none"], ["addAttach", ""], [1, "col"], ["src", "../../../assets/image/pipe.jpg", "alt", "profile name", "width", "100%", 1, "img-thumbnail", "rounded", 2, "cursor", "pointer", 3, "click"], ["fullWidth", "", "nbInput", "", "type", "file", "accept", "image/png, image/gif, image/jpeg", "id", "addImage", 2, "display", "none"], ["addImage", ""], [1, "row", "row-cols-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center"], ["nbButton", "", "status", "success", "type", "submit", 1, "m-1", "w-100"], [1, "my-1"], ["fieldSize", "small", "nbInput", "", "type", "text"]], template: function AddAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nb-card", 1)(2, "nb-card-header", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Assets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_Template_button_click_6_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card-body")(9, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddAssetsComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.closeDialog(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date In Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10)(16, "nb-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16)(25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23)(33, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_Template_img_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddAssetsComponent_div_37_Template, 8, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29)(39, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add Asset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spesificationItem);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYXNzZXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_component_top-bar_top-bar_component_ts.js.map