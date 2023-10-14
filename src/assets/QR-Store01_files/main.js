"use strict";
(self["webpackChunkvi_tokens_webapp"] = self["webpackChunkvi_tokens_webapp"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const routes = [];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor() {
    this.title = 'vi-tokens-webapp';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment/payment.component */ 8836);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success/success.component */ 5747);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 2154);
/* harmony import */ var _store_home_store_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store-home/store-home.component */ 3683);
/* harmony import */ var ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-scanner-qrcode */ 4526);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularx-qrcode */ 3725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
















const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
},
// { path: 'home', component: HomeComponent, canActivate: [authGuard]},
{
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}, {
  path: 'payment',
  component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__.PaymentComponent
}, {
  path: 'success',
  component: _success_success_component__WEBPACK_IMPORTED_MODULE_5__.SuccessComponent
}, {
  path: 'maintenance',
  component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__.MaintenanceComponent
}, {
  path: 'store-home',
  component: _store_home_store_home_component__WEBPACK_IMPORTED_MODULE_7__.StoreHomeComponent
}];
class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_13__.NgxScannerQrcodeModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__.QRCodeModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _payment_payment_component__WEBPACK_IMPORTED_MODULE_4__.PaymentComponent, _success_success_component__WEBPACK_IMPORTED_MODULE_5__.SuccessComponent, _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_6__.MaintenanceComponent, _store_home_store_home_component__WEBPACK_IMPORTED_MODULE_7__.StoreHomeComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_13__.NgxScannerQrcodeModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__.QRCodeModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 5148:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/data.service */ 5303);
var _class;




class AuthService {
  constructor(dataService) {
    this.dataService = dataService;
    this.isLoggedIn = false;
    // store the URL so we can redirect after logging in
    this.redirectUrl = null;
    if (this.dataService.getUserIdSession()) {
      this.isLoggedIn = true;
    }
  }
  login() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this.isLoggedIn = true));
  }
  logout() {
    this.isLoggedIn = false;
  }
}
_class = AuthService;
_class.ɵfac = function AuthService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/data.service */ 5303);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 5148);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-qrcode */ 3725);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;






class HomeComponent {
  constructor(dataService, router, authService) {
    this.dataService = dataService;
    this.router = router;
    this.authService = authService;
    this.username = null;
    this.userId = null;
    this.stars = 0;
    this.storeId = '';
    this.userId = this.dataService.getUserIdSession();
    this.username = this.dataService.getUsernameSession();
    this.storeId = '650fd699a4e9bc8730b00f0d';
  }
  ngOnInit() {
    // if (this.authService.isLoggedIn) {
    //   this.logIn();
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }
  logIn() {
    this.dataService.getStarsBalance(this.userId).subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        this.stars += response[i].token;
      }
      this.dataService.setStarsSession(this.stars);
    });
  }
  goToPaymentPage() {
    this.router.navigate(['/payment']);
  }
  logOut() {
    this.authService.logout();
    this.dataService.deleteAllSessions();
    this.router.navigate(['/login']);
  }
  qrScan(e) {
    console.log(e);
  }
  onError(e) {}
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 17,
  vars: 7,
  consts: [[1, "container", "text-center", "h-100"], [1, "row", "justify-content-center", "align-items-center", "h-75"], [1, "col"], [1, "fs-1"], [3, "qrdata", "width", "errorCorrectionLevel"], [1, "btn", "btn-outline-primary", "w-75", "mt-5", 3, "click"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p")(4, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "titlecase");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Your star balance:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 3)(10, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "qrcode", 4)(13, "br")(14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
        return ctx.logOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Hi, ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, ctx.username), "!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.stars, " \u2B50");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("qrdata", ctx.storeId)("width", 256)("errorCorrectionLevel", "M");
    }
  },
  dependencies: [angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__.QRCodeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/data.service */ 5303);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 5148);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;






function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Incorrect login credentials. Please try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(router, dataService, authService) {
    this.router = router;
    this.dataService = dataService;
    this.authService = authService;
    this.username = '';
    this.password = '';
    this.incorrectCreds = false;
    this.dataService.deleteAllSessions();
    this.authService.logout();
  }
  ngOnInit() {}
  loginBtnClick() {
    const data = {
      username: this.username,
      password: this.password
    };
    this.dataService.loginRequest(data).subscribe(response => {
      if (response.login) {
        console.log(response);
        this.dataService.setUsernameSession(this.username);
        this.dataService.setUserIdSession(response.userId);
        this.router.navigate(['/home']);
        // this.authService.login().subscribe(() => {
        //   if (this.authService.isLoggedIn) {
        //     this.dataService.setUsernameSession(this.username);
        //     this.dataService.setUserIdSession(response.userId); 
        //     response.isPlayer === true ? this.router.navigate(['/home']) : this.router.navigate(['/store-home'])
        //   }
        // });
      } else {
        this.incorrectCreds = true;
      }
    });
  }
}
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-login"]],
  decls: 12,
  vars: 3,
  consts: [[1, "container", "text-center", "h-100"], [1, "d-flex", "justify-content-center", "align-items-center", "h-75"], [1, "col", "px-5"], [1, "form-label", "mt-3"], ["placeholder", "Username", "type", "text", "aria-label", "default input example", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputPassword5", 1, "form-label", "mt-5"], ["placeholder", "Password", "type", "password", "id", "inputPassword5", "aria-describedby", "passwordHelpBlock", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "passwordHelpBlock", "class", "form-text text-danger", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "mt-5", "w-100", 3, "click"], ["id", "passwordHelpBlock", 1, "form-text", "text-danger"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() {
        return ctx.loginBtnClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.incorrectCreds);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2154:
/*!******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaintenanceComponent: () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class MaintenanceComponent {}
_class = MaintenanceComponent;
_class.ɵfac = function MaintenanceComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-maintenance"]],
  decls: 4,
  vars: 0,
  template: function MaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error encountered");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please try again later");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8836:
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentComponent: () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/data.service */ 5303);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 5148);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;






function PaymentComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Insufficient balance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class PaymentComponent {
  constructor(router, dataService, authService) {
    this.router = router;
    this.dataService = dataService;
    this.authService = authService;
    this.stars = 0;
    this.isInvalidAmt = false;
    this.userId = '';
  }
  ngOnInit() {
    this.stars = this.dataService.getStarsSession();
    this.userId = this.dataService.getUserIdSession();
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
  payment() {
    if (this.amount < this.stars) {
      this.isInvalidAmt = false;
      this.dataService.setAmountPaidSession(this.amount);
      // TO DO: dynamic store ID 
      const data = {
        'playerId': this.userId,
        'storeId': '650fd699a4e9bc8730b00f0d',
        'tokenCount': this.amount
      };
      this.dataService.userPaymentToStore(data).subscribe(response => {
        if (response) {
          this.router.navigate(['/success']);
        } else {
          this.router.navigate(['/maintenance']);
        }
      });
    } else {
      this.isInvalidAmt = true;
    }
  }
}
_class = PaymentComponent;
_class.ɵfac = function PaymentComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-payment"]],
  decls: 14,
  vars: 2,
  consts: [[1, "container", "text-center", "h-100"], [1, "d-flex", "justify-content-center", "align-items-center", "h-75"], [1, "col", "px-5"], [1, "fs-1"], ["placeholder", "0", "type", "number", "aria-label", "default input example", 1, "form-control", "text-center", "border-0", 3, "ngModel", "ngModelChange"], [2, "border-top", "1px solid #0d6efd"], [1, "form-label", "mt-1"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "button", 1, "mt-5", "btn", "btn-primary", "w-75", 3, "click"], [1, "form-text", "text-danger"]],
  template: function PaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Store 001");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PaymentComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.amount = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Enter amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PaymentComponent_div_10_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentComponent_Template_button_click_12_listener() {
        return ctx.payment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "PAY");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isInvalidAmt);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: [".form-control[_ngcontent-%COMP%]:focus {\n    box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5303:
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;


class DataService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = 'https://us-central1-vithegame.cloudfunctions.net/api';
    this.username = '';
  }
  // sample get request
  getRequest() {
    return this.httpClient.get(this.baseUrl + '/servers/duels');
  }
  // TO DO: Models for data type ? 
  loginRequest(data) {
    return this.httpClient.post(this.baseUrl + '/auth/users/login', data);
  }
  getStarsBalance(userId) {
    return this.httpClient.get(this.baseUrl + '/auth/users/getStars/' + userId);
  }
  // TO DO: Dynamic store ID
  userPaymentToStore(data) {
    return this.httpClient.post(this.baseUrl + '/auth/users/chargePlayer', data);
  }
  // GET & SET STORAGE SESSIONS
  setUsernameSession(username) {
    sessionStorage.setItem('username', username);
  }
  getUsernameSession() {
    return sessionStorage.getItem('username');
  }
  setUserIdSession(userId) {
    sessionStorage.setItem('userId', userId);
  }
  getUserIdSession() {
    return sessionStorage.getItem('userId');
  }
  setStarsSession(stars) {
    sessionStorage.setItem('stars', stars.toString());
  }
  getStarsSession() {
    return Number(sessionStorage.getItem('stars'));
  }
  setAmountPaidSession(amount) {
    sessionStorage.setItem('amount', amount.toString());
  }
  getAmountPaidSession() {
    return Number(sessionStorage.getItem('amount'));
  }
  deleteAllSessions() {
    sessionStorage.clear();
  }
}
_class = DataService;
_class.ɵfac = function DataService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3683:
/*!****************************************************!*\
  !*** ./src/app/store-home/store-home.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreHomeComponent: () => (/* binding */ StoreHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class StoreHomeComponent {}
_class = StoreHomeComponent;
_class.ɵfac = function StoreHomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-store-home"]],
  decls: 2,
  vars: 0,
  template: function StoreHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "store-home works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5747:
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessComponent: () => (/* binding */ SuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/data.service */ 5303);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 5148);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;





class SuccessComponent {
  constructor(router, dataService, authService) {
    this.router = router;
    this.dataService = dataService;
    this.authService = authService;
    this.refNum = '';
  }
  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    this.refNum = Date.now().toString();
    this.currentDate = new Date();
    this.amount = this.dataService.getAmountPaidSession();
  }
  home() {
    this.router.navigate(['/home']);
  }
}
_class = SuccessComponent;
_class.ɵfac = function SuccessComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-success"]],
  decls: 23,
  vars: 6,
  consts: [[1, "container", "text-center", "h-100"], [1, "row", "py-4", "px-3", "h-auto"], [1, "row", "justify-content-end"], [1, "btn-close", 3, "click"], [1, "row", "text-center", "h-75"], [1, "d-flex", "justify-content-center", "align-items-center"], [1, "col", "px-5"], [1, "fs-2"], [1, "fs-1"], [1, "mb-3", 2, "border-top", "1px solid #0d6efd"], ["type", "button", 1, "mt-5", "btn", "btn-primary", "w-100", 3, "click"]],
  template: function SuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuccessComponent_Template_button_click_3_listener() {
        return ctx.home();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Successfully paid to");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7)(10, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Store 001");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 8)(13, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuccessComponent_Template_button_click_21_listener() {
        return ctx.home();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Go back to home page");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.amount, " \u2B50");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Ref. No. ", ctx.refNum, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 3, ctx.currentDate, "dd MMM yyyy hh:mm a"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9548), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map