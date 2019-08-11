(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-dark\">\n  <div class=\"card-header\">\n    <ul class=\"nav nav-tabs card-header-tabs text-white bg-gray\">\n      <h4 id=\"navHeader\"><b><em> {{ title }}</em></b> </h4>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/home\">home</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"currentUser; else notLoggedIn\">\n        <a class=\"nav-link\" (click)=\"logOut()\" href=\"/login\">log out</a>\n      </li>\n\n      <ng-template #notLoggedIn>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/login\">login</a>\n        </li>\n      </ng-template>\n\n      <li class=\"nav-item\" *ngIf=\"currentUser\">\n        <a class=\"nav-link\" href=\"/profiles/{{currentUser.id}}\">profile</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"currentUser\">\n        <a class=\"nav-link\" href=\"/search\">search</a>\n      </li>\n\n    </ul>\n\n  </div>\n</div>\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-profile/edit-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background2\">\n    <div class=\"card w-75 mx-auto my-5 bg-dark text-white\">\n        <div class=\"container\">\n            <h1>Edit Profile</h1>\n            <form (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\">\n\n                <div class=\"form-group\">\n                    <label for=\"description\">Description</label>\n                    <input [(ngModel)]=\"profile.description\" type=\"text\" class=\"form-control\" id=\"description\"\n                        name=\"description\" placeholder=\"Description\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"links\">Links</label>\n                    <input [(ngModel)]=\"profile.links\" type=\"text\" class=\"form-control\" id=\"links\" name=\"links\"\n                        placeholder=\"Links\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"email\">Email Address</label>\n                    <input [(ngModel)]=\"profile.email\" type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"\n                        placeholder=\"Email Address\">\n                </div>\n\n\n                <div class=\"form-group\">\n                    <label for=\"zipcode\">Zipcode</label>\n                    <input [(ngModel)]=\"profile.zipcode\" type=\"text\" class=\"form-control\" id=\"zipcode\" name=\"zipcode\"\n                        placeholder=\"Zipcode\">\n                </div>\n\n                <div class=\"form-group w-25\">\n                    <label for=\"type\">Profile Type</label>\n                    <select [(ngModel)]=\"profile.type\" type=\"text\" class=\"form-control\" id=\"type\" name=\"type\">\n                        <option *ngFor=\"let type of this.headers\">{{type.name}} </option>\n                    </select>\n                </div>\n\n                <button type=\"submit\" [disabled]=\"!userForm.form.valid\" class=\"btn btn-success\">Update Profile</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homescreen/homescreen.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homescreen/homescreen.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n    <div class=\"card text-white bg-dark w-50 mx-auto my-5\">\n        <div class=\"container\">\n            <div class=\"form-group\">\n                <div class=\"hometext\"> {{ welcomeMessage }}</div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"hometext\"> {{ missionStatement }}</div>\n            </div>\n\n            <div>\n                <h6 class=\"caption my-5\"> All background artwork provided by\n                    <a target=\"_blank\" rel=\"noopener\" id=\"keith\" href=\"https://www.instagram.com/starfur12/?hl=en\">Keith\n                        Yong</a>.\n                </h6>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search-results/search-results.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-results/search-results.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"results\">\n    <div class=\"card w-50 mx-auto bg-dark text-white my-5\">\n        <div class=\"container\">\n            <div class=\"card-body\">\n                <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n                    <table class=\"table table-bordered table-striped\">\n                        <thead class=\"thead-dark\">\n                            <th>Name</th>\n                            <th>Index</th>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let result of results\">\n                                <td>{{result.userFullName}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/searcher/searcher.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/searcher/searcher.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background2\">\n    <div class=\"card w-25 mx-auto my-5 bg-dark text-white\">\n        <div class=\"container\">\n            <h1>Search:</h1>\n            <form (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\">\n\n                <div class=\"form-group\">\n                    <label for=\"type\">Profile Type:</label>\n                    <select [(ngModel)]=\"searchCriteria.profileType\" type=\"text\" class=\"form-control\" id=\"type\"\n                        name=\"type\">\n                        <option *ngFor=\"let type of this.headers\">{{type.name}} </option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"type\">Distance:</label>\n                    <select [(ngModel)]=\"searchCriteria.distance\" type=\"text\" class=\"form-control\" id=\"type\"\n                        name=\"type\">\n                        <option *ngFor=\"let type of this.distances\">{{type.name}} </option>\n                    </select>\n                </div>\n\n                <button type=\"submit\" [disabled]=\"!userForm.form.valid\" class=\"btn btn-success\">Search</button>\n            </form>\n        </div>\n    </div>\n\n\n    <div *ngIf=\"results\">\n        <div class=\"card w-50 mx-auto bg-dark text-white my-5\">\n            <div class=\"container\">\n                <div class=\"card-body\">\n                    <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n                        <table class=\"table table-bordered table-striped\">\n                            <thead class=\"thead-dark\">\n                                <th>Name</th>\n                                <th>Profile</th>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let result of results\">\n                                    <td>{{result.userFullName}}</td>\n                                    <td><a routerLink=\"/profiles/{{result.id}}\">profile</a></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background2\">\n  <div class=\"card w-50 mx-auto my-5 bg-dark text-white\">\n    <div class=\"container\">\n      <h1>Sign up</h1>\n      <form (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\">\n\n        <div class=\"form-group\">\n          <label for=\"firstName\">*First Name</label>\n          <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\"\n            placeholder=\"First Name\" required #firstName=\"ngModel\">\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"lastName\">*Last Name</label>\n          <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\"\n            placeholder=\"Last Name\" required #lastName=\"ngModel\">\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"username\">*Username</label>\n          <input [(ngModel)]=\"user.username\" type=\"text\" class=\"form-control\" id=\"username\" name=\"username\"\n            placeholder=\"Username\" required #username=\"ngModel\">\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"password\">*Password</label>\n          <input [(ngModel)]=\"user.password\" type=\"password\" class=\"form-control\" id=\"password\" name=\"password\"\n            placeholder=\"Password\" required #password=\"ngModel\">\n        </div>\n\n        <button type=\"submit\" [disabled]=\"!userForm.form.valid\" class=\"btn btn-success\">Sign up</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/type-selector/type-selector.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/type-selector/type-selector.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select><option *ngFor=\"let type of header\">{{type.name}} </option> </select>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-login/user-login.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-login/user-login.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background2\">\n\n  <div id=\"login\">\n    <div class=\"card w-25 mx-auto my-5 bg-dark text-white bleh\">\n\n      <div class=\"container\">\n        <h1>Login</h1>\n        <form (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Username</label>\n            <input type=\"text\" [(ngModel)]=\"user.username\" class=\"form-control\" id=\"name\" name=\"name\"\n              placeholder=\"Username\" required #name=\"ngModel\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"password\" name=\"password\"\n              placeholder=\"Password\" required #password=\"ngModel\">\n\n          </div>\n          <button type=\"submit\" [disabled]=\"!userForm.form.valid\" class=\"btn btn-success\">Login</button>\n        </form>\n        <div>Don't have an account? <a class=\"nav-link\" href=\"/signup\">Sign up.</a> </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background2\">\n\n  <div *ngIf=\"user\">\n    <div *ngIf=\"profile\">\n\n\n      <div id=\"profileHeader\" class=\"card w-75 mx-auto bg-dark text-white\">\n        <div class=\"headerStyle\">\n          <h1> <b><em>{{user.firstName}} {{user.lastName}} </em></b> <span>({{profile.type}}) </span> </h1>\n        </div>\n      </div>\n\n      <div id=\"profilePage\" class=\"card w-75 mx-auto bg-secondary text-white\">\n        <div class=\"container w-100 my-10\">\n\n\n          <div *ngIf=\"profile.description\" class=\"form-group my-5\">\n            <div id=\"name\" name=\"name\" class=\"cardHeader mx-auto bg-light text-black profileComponents\">\n              <div class=\"card-title w-100 bg-dark headerStyle\">Description</div>\n              <h6 id=\"innerText\"> {{profile.description}} </h6>\n            </div>\n          </div>\n\n\n          <div *ngIf=\"profile.links\" class=\"form-group my-5\">\n            <div id=\"name\" name=\"name\" class=\"cardHeader mx-auto bg-light text-black profileComponents\">\n              <div class=\"card-title w-100 bg-dark headerStyle\">Links</div>\n              <h6 id=\"innerText\"> {{profile.links}} </h6>\n            </div>\n\n          </div><a *ngIf=\"show\" class=\"btn btn-success\" href=\"/editProfile\">Edit Profile</a>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homescreen/homescreen.component */ "./src/app/homescreen/homescreen.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _searcher_searcher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searcher/searcher.component */ "./src/app/searcher/searcher.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");










const routes = [
    { path: 'login', component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'profiles/:id', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"] },
    { path: 'home', component: _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_6__["HomescreenComponent"], runGuardsAndResolvers: "always" },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'editProfile', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"] },
    { path: 'search', component: _searcher_searcher_component__WEBPACK_IMPORTED_MODULE_8__["SearcherComponent"] },
    { path: 'searchResults', component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_9__["SearchResultsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "reload" })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#SearchBar{\n    \n\n}\n\n#greeting {\n    position: relative;\n  right: 0px;\n  width: 200px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOztBQUVBO0lBQ0ksa0JBQWtCO0VBQ3BCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjU2VhcmNoQmFye1xuICAgIFxuXG59XG5cbiNncmVldGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user-service.service */ "./src/app/services/user-service.service.ts");



let AppComponent = class AppComponent {
    constructor(service) {
        this.service = service;
        this.title = 'undergrowth';
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    logOut() {
        this.currentUser = null;
        this.service.userLogout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homescreen/homescreen.component */ "./src/app/homescreen/homescreen.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _type_selector_type_selector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./type-selector/type-selector.component */ "./src/app/type-selector/type-selector.component.ts");
/* harmony import */ var _searcher_searcher_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./searcher/searcher.component */ "./src/app/searcher/searcher.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
            _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
            _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_11__["HomescreenComponent"],
            _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_12__["EditProfileComponent"],
            _type_selector_type_selector_component__WEBPACK_IMPORTED_MODULE_13__["TypeSelectorComponent"],
            _searcher_searcher_component__WEBPACK_IMPORTED_MODULE_14__["SearcherComponent"],
            _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_15__["SearchResultsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ],
        providers: [_services_user_service_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_user_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user-profile */ "./src/app/models/user-profile.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _type_selector_type_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type-selector/type-selector.component */ "./src/app/type-selector/type-selector.component.ts");






let EditProfileComponent = class EditProfileComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.profile = new _models_user_profile__WEBPACK_IMPORTED_MODULE_3__["UserProfile"]();
        this.typeSelector = new _type_selector_type_selector_component__WEBPACK_IMPORTED_MODULE_5__["TypeSelectorComponent"]();
        this.headers = this.typeSelector.header;
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.headers);
        //this.service.getProfile().subscribe(profile => this.profile = profile)
        if (this.currentUser) {
            this.service.getProfile().subscribe(profile => this.profile = profile);
            //this.profile = this.service.getProfile;
        }
    }
    onSubmit() {
        // this.profile.id = null;
        console.log(this.profile);
        this.service.editProfile(this.profile, this.currentUser.id);
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/edit-profile/edit-profile.component.css")]
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/homescreen/homescreen.component.css":
/*!*****************************************************!*\
  !*** ./src/app/homescreen/homescreen.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hometext {\n    color: whitesmoke;\n    margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXNjcmVlbi9ob21lc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXNjcmVlbi9ob21lc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXRleHQge1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/homescreen/homescreen.component.ts":
/*!****************************************************!*\
  !*** ./src/app/homescreen/homescreen.component.ts ***!
  \****************************************************/
/*! exports provided: HomescreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomescreenComponent", function() { return HomescreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomescreenComponent = class HomescreenComponent {
    constructor(router) {
        this.router = router;
        this.welcomeMessage = 'Welcome to undergrowth, a project currently being developed by Connor Jones.';
        this.missionStatement = 'The mission of undergrowth is to promote the growth of local art and music scenes, and provide a place for artists and musicians to gain exposure and connect with one another.';
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
    }
};
HomescreenComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomescreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homescreen',
        template: __webpack_require__(/*! raw-loader!./homescreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/homescreen/homescreen.component.html"),
        styles: [__webpack_require__(/*! ./homescreen.component.css */ "./src/app/homescreen/homescreen.component.css")]
    })
], HomescreenComponent);



/***/ }),

/***/ "./src/app/models/search-criteria.ts":
/*!*******************************************!*\
  !*** ./src/app/models/search-criteria.ts ***!
  \*******************************************/
/*! exports provided: SearchCriteria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCriteria", function() { return SearchCriteria; });
class SearchCriteria {
}


/***/ }),

/***/ "./src/app/models/user-profile.ts":
/*!****************************************!*\
  !*** ./src/app/models/user-profile.ts ***!
  \****************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
class UserProfile {
    constructor() { }
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() { }
}


/***/ }),

/***/ "./src/app/search-results/search-results.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _searcher_searcher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../searcher/searcher.component */ "./src/app/searcher/searcher.component.ts");



let SearchResultsComponent = class SearchResultsComponent {
    constructor(searcher) {
        this.searcher = searcher;
    }
    ngOnInit() {
        this.results = this.searcher.results;
        console.log(this.results);
    }
};
SearchResultsComponent.ctorParameters = () => [
    { type: _searcher_searcher_component__WEBPACK_IMPORTED_MODULE_2__["SearcherComponent"] }
];
SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-results',
        template: __webpack_require__(/*! raw-loader!./search-results.component.html */ "./node_modules/raw-loader/index.js!./src/app/search-results/search-results.component.html"),
        styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/search-results/search-results.component.css")]
    })
], SearchResultsComponent);



/***/ }),

/***/ "./src/app/searcher/searcher.component.css":
/*!*************************************************!*\
  !*** ./src/app/searcher/searcher.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-scrollbar {\n    position: relative;\n    height: 190px;\n    overflow: auto;\n}\n.table-wrapper-scroll-y {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoZXIvc2VhcmNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGVyL3NlYXJjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLXNjcm9sbGJhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTkwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4udGFibGUtd3JhcHBlci1zY3JvbGwteSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/searcher/searcher.component.ts":
/*!************************************************!*\
  !*** ./src/app/searcher/searcher.component.ts ***!
  \************************************************/
/*! exports provided: SearcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearcherComponent", function() { return SearcherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _type_selector_type_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type-selector/type-selector.component */ "./src/app/type-selector/type-selector.component.ts");
/* harmony import */ var _models_search_criteria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/search-criteria */ "./src/app/models/search-criteria.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SearcherComponent = class SearcherComponent {
    constructor(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.typeSelector = new _type_selector_type_selector_component__WEBPACK_IMPORTED_MODULE_2__["TypeSelectorComponent"]();
        this.headers = this.typeSelector.header;
        this.distances = [{ name: 'Local' }, { name: 'All' }];
        this.searchCriteria = new _models_search_criteria__WEBPACK_IMPORTED_MODULE_3__["SearchCriteria"]();
    }
    ngOnInit() {
    }
    onSubmit() {
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.searchCriteria.zipcode = currentUser.userProfile.zipcode;
        console.log(this.searchCriteria);
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.profileService.getProfile().subscribe(profile => this.currentUserProfile = profile);
        if (this.searchCriteria.distance === 'Local') {
            this.profileService.findLocalProfiles(this.searchCriteria.profileType, this.currentUserProfile)
                .subscribe(profiles => this.results = profiles);
        }
        else {
            this.profileService.findAllProfiles(this.searchCriteria.profileType)
                .subscribe(profiles => {
                this.results = profiles;
                //console.log(this.results);
            });
            // this.profileService.findAllUserPages()
            // .subscribe(pages => this.userPages = pages);
            // console.log(this.results);
        }
        console.log(this.results);
        //this.router.navigate(['/searchResults']);
    }
};
SearcherComponent.ctorParameters = () => [
    { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SearcherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searcher',
        template: __webpack_require__(/*! raw-loader!./searcher.component.html */ "./node_modules/raw-loader/index.js!./src/app/searcher/searcher.component.html"),
        styles: [__webpack_require__(/*! ./searcher.component.css */ "./src/app/searcher/searcher.component.css")]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SearcherComponent);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/users';
    }
    login(user) {
        return this.http.put(this.url + '/login', user);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");







let ProfileService = class ProfileService {
    constructor(http, router, userService, loginService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.loginService = loginService;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/profiles';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userProfile = this.currentUser.userProfile;
    }
    getProfile() {
        return this.http.get(this.url + '/' + this.currentUser.id);
    }
    editProfile(userProfile, id) {
        console.log(this.currentUser);
        this.http.put(this.url + '/' + id, userProfile).subscribe();
        // this.loginService.login(this.currentUser);
    }
    findLocalProfiles(type, profile) {
        // this.getProfile().subscribe(profile => this.currentUse)
        console.log(profile);
        console.log(this.userService.currentUserProfile);
        console.log(this.userProfile);
        // this.getProfile().subscribe(profile => this.userProfile = profile);
        return this.http.put(this.url + '/local/' + type, this.userProfile);
    }
    findAllProfiles(type) {
        return this.http.get(this.url + '/all/' + type);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "./src/app/services/user-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UserService = class UserService {
    constructor(http, loginService, router) {
        this.http = http;
        this.loginService = loginService;
        this.router = router;
        this.loggedIn = false;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + '/users';
    }
    addUser(user) {
        this.http.post(this.url, user).subscribe(user => {
            this.userLogin(user);
            // this.router.navigate(['/editProfile']);
        });
        // this.router.navigate(['/editProfile']);
    }
    getUserById(id) {
        return this.http.get(this.url + `/${id}`);
    }
    userLogin(user) {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.loginService.login(user).subscribe(user => {
            this.currentUser = user;
            this.currentUser.password = null;
            this.currentUserProfile = this.currentUser.userProfile;
            console.log(this.currentUserProfile);
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.loggedIn = true;
            location.reload();
        });
        this.router.navigate(['/home']);
    }
    userLogout() {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        location.reload();
    }
    isLoggedIn() {
        return this.loggedIn;
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SignUpComponent = class SignUpComponent {
    constructor(service, http, router) {
        this.service = service;
        this.http = http;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ngOnInit() {
    }
    onSubmit() {
        this.service.addUser(this.user);
        // this.service.userLogin(this.user);
        // this.router.navigate(['editProfile']);
        // this.router.navigate(['/login']);
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/type-selector/type-selector.component.css":
/*!***********************************************************!*\
  !*** ./src/app/type-selector/type-selector.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cGUtc2VsZWN0b3IvdHlwZS1zZWxlY3Rvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/type-selector/type-selector.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/type-selector/type-selector.component.ts ***!
  \**********************************************************/
/*! exports provided: TypeSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeSelectorComponent", function() { return TypeSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TypeSelectorComponent = class TypeSelectorComponent {
    constructor() {
        this.header = [{ name: 'Artist' }, { name: 'Musician' }, { name: 'Photographer' },
            { name: 'Band' }, { name: 'Appreciator' }, { name: 'Other' }];
        this.types = [
            { Name: 'Artist', id: 1 },
            { Name: 'Musician', id: 2 },
            { Name: 'Photographer', id: 3 },
            { Name: 'Band', id: 4 },
            { Name: 'Appreciator', id: 5 },
            { Name: 'Other', id: 6 },
        ];
    }
    ngOnInit() {
    }
};
TypeSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-type-selector',
        template: __webpack_require__(/*! raw-loader!./type-selector.component.html */ "./node_modules/raw-loader/index.js!./src/app/type-selector/type-selector.component.html"),
        styles: [__webpack_require__(/*! ./type-selector.component.css */ "./src/app/type-selector/type-selector.component.css")]
    })
], TypeSelectorComponent);



/***/ }),

/***/ "./src/app/user-login/user-login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-login/user-login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 0;\n    z-index: 1;\n  }\n\n  .caption {\n    z-index: -1;\n    color: aliceblue;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1sb2dpbi91c2VyLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmNhcHRpb24ge1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let UserLoginComponent = class UserLoginComponent {
    constructor(service, http, router) {
        this.service = service;
        this.http = http;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnChanges() {
        location.reload();
    }
    onSubmit() {
        this.service.userLogin(this.user);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    logout() {
        this.service.userLogout();
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-login',
        template: __webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-login/user-login.component.html"),
        styles: [__webpack_require__(/*! ./user-login.component.css */ "./src/app/user-login/user-login.component.css")]
    })
], UserLoginComponent);



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#innerText{\n    color: black;\n    padding-left: 10px;\n    padding: 10px;\n}\n\n#profilePage{\n    height: 500px;\n    /* background-color: lightseagreen; */\n}\n\n.profileComponents{\n    height: 100px;\n}\n\n.headerStyle{\n    color: lightseagreen;\n    text-decoration: underline;\n    -webkit-text-decoration-color: rgb(191, 207, 191);\n            text-decoration-color: rgb(191, 207, 191);\n    margin: auto;\n    padding: 5px;\n    font: italic bold 12px/30px;\n}\n\n.cardHeader{\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGlEQUF5QztZQUF6Qyx5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7O0FBRUEiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5uZXJUZXh0e1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI3Byb2ZpbGVQYWdle1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzZWFncmVlbjsgKi9cbn1cblxuLnByb2ZpbGVDb21wb25lbnRze1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbi5oZWFkZXJTdHlsZXtcbiAgICBjb2xvcjogbGlnaHRzZWFncmVlbjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYigxOTEsIDIwNywgMTkxKTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQ6IGl0YWxpYyBib2xkIDEycHgvMzBweDtcbn1cblxuLmNhcmRIZWFkZXJ7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user-profile */ "./src/app/models/user-profile.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserProfileComponent = class UserProfileComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.profile = new _models_user_profile__WEBPACK_IMPORTED_MODULE_2__["UserProfile"]();
        this.show = false;
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.getProfile();
    }
    getProfile() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUserById(id).subscribe(currentUser => {
            this.user = currentUser;
            this.profile = this.user.userProfile;
            if (this.currentUser.id === this.user.id) {
                this.show = true;
            }
        });
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserProfileComponent.prototype, "profile", void 0);
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/connorjones/Documents/GitHub/undergrowth-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map