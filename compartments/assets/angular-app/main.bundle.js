webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setup_setup_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styling_styling_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__airship_schema_airship_schema_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_tutorial_angular_tutorial_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__elements_elements_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__element_element_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_bar_nav_bar_component__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__setup_setup_component__["a" /* SetupComponent */],
            __WEBPACK_IMPORTED_MODULE_7__styling_styling_component__["a" /* StylingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__airship_schema_airship_schema_component__["a" /* AirshipSchemaComponent */],
            __WEBPACK_IMPORTED_MODULE_9__angular_tutorial_angular_tutorial_component__["a" /* AngularTutorialComponent */],
            __WEBPACK_IMPORTED_MODULE_10__elements_elements_component__["a" /* ElementsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__element_element_component__["a" /* ElementComponent */],
            __WEBPACK_IMPORTED_MODULE_12__nav_bar_nav_bar_component__["a" /* NavBarComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_routes__["b" /* appRoutingProviders */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__airship_schema_airship_schema_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_tutorial_angular_tutorial_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__element_element_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__elements_elements_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__setup_setup_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styling_styling_component__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var AppRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_5__setup_setup_component__["a" /* SetupComponent */] },
    { path: "styling", component: __WEBPACK_IMPORTED_MODULE_6__styling_styling_component__["a" /* StylingComponent */] },
    { path: "airship-schema", component: __WEBPACK_IMPORTED_MODULE_1__airship_schema_airship_schema_component__["a" /* AirshipSchemaComponent */] },
    { path: "angular-tutorial", component: __WEBPACK_IMPORTED_MODULE_2__angular_tutorial_angular_tutorial_component__["a" /* AngularTutorialComponent */] },
    { path: "elements", component: __WEBPACK_IMPORTED_MODULE_4__elements_elements_component__["a" /* ElementsComponent */] },
    { path: "elements/:id", component: __WEBPACK_IMPORTED_MODULE_3__element_element_component__["a" /* ElementComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(AppRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElementService = (function () {
    function ElementService(http) {
        this.http = http;
    }
    ElementService.prototype.getAerostat = function (id) {
        return this.http.get('https://angular-app.airshipcms.io/api/aerostats/' + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return err.json(); });
    };
    return ElementService;
}());
ElementService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ElementService);

var _a;
//# sourceMappingURL=element.service.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElementsService = (function () {
    function ElementsService(http) {
        this.http = http;
    }
    ElementsService.prototype.getCollection = function () {
        return this.http.get('https://angular-app.airshipcms.io/api/aerostat_collection/elements')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return err.json(); });
    };
    return ElementsService;
}());
ElementsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ElementsService);

var _a;
//# sourceMappingURL=elements.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
        this.menuOpen = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.active = window.location.pathname;
    };
    NavBarComponent.prototype.toggleMenu = function () {
        this.menuOpen = !this.menuOpen;
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "nav-bar",
        template: __webpack_require__(167)
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetupService = (function () {
    function SetupService(http) {
        this.http = http;
    }
    SetupService.prototype.getPage = function () {
        return this.http.get('https://angular-app.airshipcms.io/api/pages/__root__')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return err.json(); });
    };
    return SetupService;
}());
SetupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SetupService);

var _a;
//# sourceMappingURL=setup.service.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StylingService = (function () {
    function StylingService(http) {
        this.http = http;
    }
    StylingService.prototype.getPage = function () {
        return this.http.get('https://angular-app.airshipcms.io/api/pages/styling')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (res) { return res.json(); });
    };
    return StylingService;
}());
StylingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StylingService);

var _a;
//# sourceMappingURL=styling.service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<div>\n  <div class='container content'>\n    <div class='body' [innerHTML]=\"body\"></div>\n  </div>\n</div>"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<div>\n  <div class='container content'>\n    <div class='body' [innerHTML]=\"body\"></div>\n  </div>\n</div>"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<div class='container'>\n  <div class='element columns'>\n    <div class='column is-one-quarter'>\n      <figure class=\"image element-detail-image\">\n        <img src=\"{{ element?.image[0].url }}\" alt=\"{{ element?.image[0].file_name }}\">\n      </figure>\n    </div>\n    <div class='element-details content column auto'>\n      <h1>{{ element?.name }}</h1>\n      <h4>#{{ element?.sorting_position + 1 }}</h4>\n      <p>{{ element?.description }}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<div class='container'>\n  <h2 class='has-text-centered'>This is a demo rendering all the items of the Elements collection with Angular</h2>\n  <div class='columns'>\n    <a *ngFor='let element of elements' routerLink='/elements/{{ element?.id }}' class='column is-3 element'>\n      <div class='card'>\n        <div class='card-image'>\n          <figure class=\"image\">\n            <img src=\"{{ element?.image[0].thumbnail_url }}\" alt=\"{{ element?.image[0].file_name }}\">\n          </figure>\n        </div>\n        <div class='card-content'>\n          <div class=\"media-content\">\n            <p class=\"title is-4\">{{ element?.name }}</p>\n          </div>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n  <div class=\"container\">\n    <a class=\"nav-title title is-tab\" routerLink='/'>Angular + Airship CMS</a>\n    <div class=\"nav-right nav-menu\" id=\"nav-menu\" [ngClass]='{\"is-active\": menuOpen}'>\n      <a [ngClass]=\"{'is-active': active==='/'}\" class=\"nav-item\" routerLink='/'>Setup</a>\n      <a [ngClass]=\"{'is-active': active==='/styling'}\" class=\"nav-item\" routerLink='/styling'>Styling</a>\n      <a [ngClass]=\"{'is-active': active==='/airship-schema'}\" class=\"nav-item\" routerLink='/airship-schema'>Airship Schema</a>\n      <a [ngClass]=\"{'is-active': active==='/angular-tutorial'}\" class=\"nav-item\" routerLink='/angular-tutorial'>Angular Tutorial</a>\n      <a [ngClass]=\"{'is-active': active==='/elements'}\" class=\"nav-item\" routerLink='/elements'>Elements</a>\n    </div>\n    <a class=\"github-link\" href=\"https://github.com/AirshipCMS/angular-app.airshipcms.io\">\n      <img src=\"/assets/media/github-icon.svg\">\n    </a>\n    <span class=\"nav-toggle\" id=\"nav-toggle\" (click)='toggleMenu()' [ngClass]='{\"is-active\": menuOpen}'>\n      <span></span>\n      <span></span>\n      <span></span>\n    </span>\n  </div>\n</nav>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<div>\n  <div class='container content'>\n  \t<!-- <h1>HI</h1> -->\n    <div class='summary'>\n      <img src=\"/assets/media/angular-airship.svg\">\n      <h1 class='title is-4'>{{ page.title }}</h1>\n      <p>{{ page.description }}</p>\n    </div>\n    <div [innerHTML]=\"page.body\" class='body'></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<div>\n  <div class='container content'>\n    <div class='body' [innerHTML]=\"body\"></div>\n  </div>\n</div>"

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__airship_schema_service__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirshipSchemaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AirshipSchemaComponent = (function () {
    function AirshipSchemaComponent(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
    }
    AirshipSchemaComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    AirshipSchemaComponent.prototype.getPage = function () {
        var _this = this;
        this.service
            .getPage()
            .then(function (res) {
            _this.body = _this.sanitizer.bypassSecurityTrustHtml(res.fields.find(function (field) {
                return field.variable_name === "body";
            }).value);
        })
            .catch(function (err) {
            throw err;
        });
    };
    return AirshipSchemaComponent;
}());
AirshipSchemaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-airship-schema",
        template: __webpack_require__(162),
        providers: [__WEBPACK_IMPORTED_MODULE_2__airship_schema_service__["a" /* AirshipSchemaService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__airship_schema_service__["a" /* AirshipSchemaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__airship_schema_service__["a" /* AirshipSchemaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], AirshipSchemaComponent);

var _a, _b;
//# sourceMappingURL=airship-schema.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_tutorial_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularTutorialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularTutorialComponent = (function () {
    function AngularTutorialComponent(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
    }
    AngularTutorialComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    AngularTutorialComponent.prototype.getPage = function () {
        var _this = this;
        this.service
            .getPage()
            .then(function (res) {
            _this.body = _this.sanitizer.bypassSecurityTrustHtml(res.fields.find(function (field) {
                return field.variable_name === "body";
            }).value);
            window.loadPrism();
        })
            .catch(function (err) {
            throw err;
        });
    };
    return AngularTutorialComponent;
}());
AngularTutorialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-angular-tutorial",
        template: __webpack_require__(163),
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_tutorial_service__["a" /* AngularTutorialService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_tutorial_service__["a" /* AngularTutorialService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_tutorial_service__["a" /* AngularTutorialService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], AngularTutorialComponent);

var _a, _b;
//# sourceMappingURL=angular-tutorial.component.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__element_service__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ElementComponent = (function () {
    function ElementComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    ElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.elementID = params["id"];
        });
        this.getElement();
    };
    ElementComponent.prototype.getElement = function () {
        var _this = this;
        this.service
            .getAerostat(this.elementID)
            .then(function (res) {
            _this.element = res;
            _this.element.fields.forEach(function (field) {
                return _this.element[field.variable_name] = field.value;
            });
        })
            .catch(function (err) {
            throw err;
        });
    };
    return ElementComponent;
}());
ElementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-element",
        template: __webpack_require__(165),
        providers: [__WEBPACK_IMPORTED_MODULE_2__element_service__["a" /* ElementService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__element_service__["a" /* ElementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__element_service__["a" /* ElementService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ElementComponent);

var _a, _b;
//# sourceMappingURL=element.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ElementsComponent = (function () {
    function ElementsComponent(service) {
        this.service = service;
    }
    ElementsComponent.prototype.ngOnInit = function () {
        this.getElements();
    };
    ElementsComponent.prototype.getElements = function () {
        var _this = this;
        this.service
            .getCollection()
            .then(function (res) {
            _this.elements = res.map(function (element) {
                element.fields.forEach(function (field) {
                    return element[field.variable_name] = field.value;
                });
                return element;
            });
        })
            .catch(function (err) {
            throw err;
        });
    };
    return ElementsComponent;
}());
ElementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-elements",
        template: __webpack_require__(166),
        providers: [__WEBPACK_IMPORTED_MODULE_1__elements_service__["a" /* ElementsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__elements_service__["a" /* ElementsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__elements_service__["a" /* ElementsService */]) === "function" && _a || Object])
], ElementsComponent);

var _a;
//# sourceMappingURL=elements.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_service__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetupComponent = (function () {
    function SetupComponent(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.page = {};
    }
    SetupComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    SetupComponent.prototype.getPage = function () {
        var _this = this;
        this.service
            .getPage()
            .then(function (res) {
            res.fields.map(function (field) {
                switch (field.variable_name) {
                    case "body":
                        _this.page.body = _this.sanitizer.bypassSecurityTrustHtml(field.value);
                        break;
                    default:
                        _this.page[field.variable_name] = field.value;
                        break;
                }
            });
        })
            .catch(function (err) {
            throw err;
        });
    };
    return SetupComponent;
}());
SetupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-setup",
        template: __webpack_require__(168),
        providers: [__WEBPACK_IMPORTED_MODULE_2__setup_service__["a" /* SetupService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__setup_service__["a" /* SetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__setup_service__["a" /* SetupService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], SetupComponent);

var _a, _b;
//# sourceMappingURL=setup.component.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styling_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StylingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StylingComponent = (function () {
    function StylingComponent(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
    }
    StylingComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    StylingComponent.prototype.getPage = function () {
        var _this = this;
        this.service
            .getPage()
            .then(function (res) {
            _this.body = _this.sanitizer.bypassSecurityTrustHtml(res.fields.find(function (field) {
                return field.variable_name === "body";
            }).value);
            window.loadPrism();
        })
            .catch(function (err) {
            throw err;
        });
    };
    return StylingComponent;
}());
StylingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-styling",
        template: __webpack_require__(169),
        providers: [__WEBPACK_IMPORTED_MODULE_2__styling_service__["a" /* StylingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__styling_service__["a" /* StylingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__styling_service__["a" /* StylingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], StylingComponent);

var _a, _b;
//# sourceMappingURL=styling.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(107);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirshipSchemaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AirshipSchemaService = (function () {
    function AirshipSchemaService(http) {
        this.http = http;
    }
    AirshipSchemaService.prototype.getPage = function () {
        return this.http.get('https://angular-app.airshipcms.io/api/pages/airship-schema')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return err.json(); });
    };
    return AirshipSchemaService;
}());
AirshipSchemaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AirshipSchemaService);

var _a;
//# sourceMappingURL=airship-schema.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularTutorialService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AngularTutorialService = (function () {
    function AngularTutorialService(http) {
        this.http = http;
    }
    AngularTutorialService.prototype.getPage = function () {
        return this.http.get('https://angular-app.airshipcms.io/api/pages/angular-tutorial')
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return err.json(); });
    };
    return AngularTutorialService;
}());
AngularTutorialService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AngularTutorialService);

var _a;
//# sourceMappingURL=angular-tutorial.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: "app-root",
        template: __webpack_require__(164)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.bundle.js.map