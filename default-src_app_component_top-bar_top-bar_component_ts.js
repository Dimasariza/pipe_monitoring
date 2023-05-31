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
const _c3 = function () { return { name: "Print", icon: "printer-outline" }; };
const _c4 = function () { return { name: "QR Print", icon: "qrcode", pack: "fas" }; };
const _c5 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
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
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["ngx-top-bar"]], decls: 3, vars: 12, consts: [["nbButton", "", "outline", "", "size", "small", "status", "primary", "class", "m-2", 3, "click", 4, "ngFor", "ngForOf"], ["nbButton", "", "outline", "", "size", "small", "status", "primary", 1, "m-2", 3, "click"], [1, "m-1", 3, "icon", "pack"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TopBarComponent_button_2_Template, 4, 3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](6, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c4)));
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




function AddAssetsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "div", 31)(2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const spec_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r5.name);
} }
class AddAssetsComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.spesificationItem = [
            { name: "Nominal Thickness" },
            { name: "Outside Diamter" },
            { name: "Min. Design Pressure" },
            { name: "Corrosion Allowance" },
            { name: "Pressure Design" },
            { name: "Join Efficiency (E)" },
            { name: "Max. Design Pressure" },
            { name: "Longtd. Quality Factor (E)" },
            { name: "Allowable Unit Stress (S)" },
            { name: "Min. Design Temperature" },
            { name: "Yield Strength" },
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
AddAssetsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddAssetsComponent, selectors: [["ngx-add-assets"]], inputs: { dialogData: "dialogData" }, decls: 41, vars: 2, consts: [[1, "w-100", "d-flex", "justify-content-center", "mt-5"], [1, "w-75"], [1, "d-flex", "justify-content-between"], ["nbButton", "", "status", "danger", "size", "tiny", 3, "click"], ["icon", "close-outline"], [3, "ngSubmit"], ["addAssetsForm", "ngForm"], [1, "row", "row-cols-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-4"], ["for", "dateInService", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", 3, "nbDatepicker"], ["datepicker", ""], ["for", "class", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "class"], ["for", "notes", 1, "mb-1", "d-block"], ["fullWidth", "", "nbInput", "", "fieldSize", "small", "type", "text", "id", "notes"], [1, "col-6"], ["for", "recomendation", 1, "d-block", "mb-1"], ["fullWidth", "", "nbInput", "", "name", "recomendation", "id", "recomendation", "rows", "3"], ["nbButton", "", "status", "primary", "type", "button", 1, "my-1", "justify-item-center", 3, "click"], ["icon", "file-pdf", "pack", "far", 1, "mx-2"], ["fullWidth", "", "nbInput", "", "type", "file", "accept", "application/pdf", "id", "addAttachment", 2, "display", "none"], ["addAttach", ""], [1, "col"], ["src", "../../../assets/image/pipe.jpg", "alt", "profile name", "width", "100%", 1, "img-thumbnail", "rounded", 2, "cursor", "pointer", 3, "click"], ["fullWidth", "", "nbInput", "", "type", "file", "accept", "image/png, image/gif, image/jpeg", "id", "addImage", 2, "display", "none"], ["addImage", ""], [1, "d-flex", "justify-content-center"], ["nbButton", "", "status", "success", "type", "submit", 1, "m-1", "w-100"], [1, "row", "m-1"], [1, "my-1"], ["fieldSize", "small", "nbInput", "", "type", "text", 1, "col"]], template: function AddAssetsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddAssetsComponent_div_12_Template, 5, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Date In Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12)(18, "nb-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18)(27, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Recomendation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return _r3.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "nb-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25)(35, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddAssetsComponent_Template_img_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return _r4.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29)(39, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add Asset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spesificationItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbDatepicker", _r2);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbButtonComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_1__.NbDatepickerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYXNzZXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_component_top-bar_top-bar_component_ts.js.map