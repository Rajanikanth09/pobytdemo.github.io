(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<div class=\"container margintop\">\n  <div class=\"row\">\n    <div class=\"col-md-6 flex-column px-0 d-md-height-600\">\n      <img alt=\"pobyt team\" class=\"half-containers w-100\" src=\"assets/images/About/img1.png\">\n      <div class=\"half-containers d-flex align-items-center\">\n        <h3 class=\"align-center text-center flex-fill font-weight-normal\">MEET THE TEAM</h3>\n      </div>\n    </div>\n    <div class=\"col-md-6 bg-gray-s text-gray-200 px-0\">\n      <div class=\"card-body\">\n        <h5 class=\"mt-5 pt-5 mb-2\">What We're About</h5>\n        <div class=\"mb-3\">It's simple: we partner with top-rated hotels, they give us their unsold\n          rooms, and we show you each day's best deals. You check out those delas, book the one you like and boom!\n          You're\n          on your way to a great stay.\n        </div>\n        <div class=\"mb-3\">And we're not just for tonight - you can book our sweet deals for tonight,\n          tomorrow and beyond. Plan ahead or play it by ear... and turn an average night into a 'tonight' you'll always\n          remember. </div>\n        <div class=\"mb-3\">And we're not just for tonight - you can book our sweet deals for tonight,\n          tomorrow and beyond. Plan ahead or play it by ear... and turn an average night into a 'tonight' you'll always\n          remember. </div>\n        <h5>Experience a new way of Hotelling!!</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"row no-padding our-team\">\n    <app-our-team></app-our-team>\n  </div>\n  <div class=\"row bg-dark flex-row align-items-center\">\n<div class=\"col-lg-7 p-4 text-light\"> Sign up and we'll send you special deals, limited-time offers and plenty of\n  travel\n      inspiration. </div>\n    <div class=\"col-lg-5 p-4\">\n      <div class=\"input-group\"><input class=\"form-control\" placeholder=\"sample@email.com\" type=\"email\"><span class=\"input-group-btn\"><button\n            class=\"btn btn-secondary btn-square\" type=\"submit\">Subscribe</button></span></div>\n    </div>\n  </div>\n</div>\n\n<app-footer-section></app-footer-section>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cities_cities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities/cities.component */ "./src/app/cities/cities.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/bookings/bookings.component.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/search-result/search-result.component.ts");
/* harmony import */ var _mycredits_mycredits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mycredits/mycredits.component */ "./src/app/mycredits/mycredits.component.ts");
/* harmony import */ var _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./promotions/promotions.component */ "./src/app/promotions/promotions.component.ts");
/* harmony import */ var _invite_friends_invite_friends_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./invite-friends/invite-friends.component */ "./src/app/invite-friends/invite-friends.component.ts");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/how-it-works/how-it-works.component.ts");
/* harmony import */ var _call_support_call_support_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./call-support/call-support.component */ "./src/app/call-support/call-support.component.ts");
/* harmony import */ var _hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hotel-details/hotel-details.component */ "./src/app/hotel-details/hotel-details.component.ts");
/* harmony import */ var _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./booking-details/booking-details.component */ "./src/app/booking-details/booking-details.component.ts");
/* harmony import */ var _hotel_caurosals_hotel_caurosals_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hotel-caurosals/hotel-caurosals.component */ "./src/app/hotel-caurosals/hotel-caurosals.component.ts");


















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'cities', component: _cities_cities_component__WEBPACK_IMPORTED_MODULE_3__["CitiesComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__["FaqComponent"] },
    { path: 'contact', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"] },
    { path: 'bookings', component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_8__["BookingsComponent"] },
    { path: 'search-result', component: _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_9__["SearchResultComponent"] },
    { path: 'mycredits', component: _mycredits_mycredits_component__WEBPACK_IMPORTED_MODULE_10__["MycreditsComponent"] },
    { path: 'promotions', component: _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_11__["PromotionsComponent"] },
    { path: 'invite-friends', component: _invite_friends_invite_friends_component__WEBPACK_IMPORTED_MODULE_12__["InviteFriendsComponent"] },
    { path: 'how-it-works', component: _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_13__["HowItWorksComponent"] },
    { path: 'call-support', component: _call_support_call_support_component__WEBPACK_IMPORTED_MODULE_14__["CallSupportComponent"] },
    { path: 'hotel-details', component: _hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_15__["HotelDetailsComponent"] },
    { path: 'booking-details', component: _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_16__["BookingDetailsComponent"] },
    { path: 'hotel-caurosals', component: _hotel_caurosals_hotel_caurosals_component__WEBPACK_IMPORTED_MODULE_17__["HotelCaurosalsComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(cookieService) {
        this.cookieService = cookieService;
        this.cookieValue = 'UNKNOWN';
        this.title = 'PobytApp-Angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cookieService.set('Test', 'Rajanikanth');
        this.cookieValue = this.cookieService.get('Test');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-carousel */ "./node_modules/ngx-carousel/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-menu/header-menu.component */ "./src/app/header-menu/header-menu.component.ts");
/* harmony import */ var _footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer-section/footer-section.component */ "./src/app/footer-section/footer-section.component.ts");
/* harmony import */ var _cities_cities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cities/cities.component */ "./src/app/cities/cities.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _testmonial_testmonial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testmonial/testmonial.component */ "./src/app/testmonial/testmonial.component.ts");
/* harmony import */ var _multi_hotels_multi_hotels_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./multi-hotels/multi-hotels.component */ "./src/app/multi-hotels/multi-hotels.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./our-team/our-team.component */ "./src/app/our-team/our-team.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bookings/bookings.component */ "./src/app/bookings/bookings.component.ts");
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search-result/search-result.component */ "./src/app/search-result/search-result.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _mycredits_mycredits_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mycredits/mycredits.component */ "./src/app/mycredits/mycredits.component.ts");
/* harmony import */ var _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./promotions/promotions.component */ "./src/app/promotions/promotions.component.ts");
/* harmony import */ var _invite_friends_invite_friends_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./invite-friends/invite-friends.component */ "./src/app/invite-friends/invite-friends.component.ts");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/how-it-works/how-it-works.component.ts");
/* harmony import */ var _call_support_call_support_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./call-support/call-support.component */ "./src/app/call-support/call-support.component.ts");
/* harmony import */ var _hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./hotel-details/hotel-details.component */ "./src/app/hotel-details/hotel-details.component.ts");
/* harmony import */ var _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./booking-details/booking-details.component */ "./src/app/booking-details/booking-details.component.ts");
/* harmony import */ var _booking_tabs_booking_tabs_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./booking-tabs/booking-tabs.component */ "./src/app/booking-tabs/booking-tabs.component.ts");
/* harmony import */ var _hotel_caurosals_hotel_caurosals_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./hotel-caurosals/hotel-caurosals.component */ "./src/app/hotel-caurosals/hotel-caurosals.component.ts");
/* harmony import */ var _guest_form_guest_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./guest-form/guest-form.component */ "./src/app/guest-form/guest-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_9__["SliderComponent"],
                _header_menu_header_menu_component__WEBPACK_IMPORTED_MODULE_10__["HeaderMenuComponent"],
                _footer_section_footer_section_component__WEBPACK_IMPORTED_MODULE_11__["FooterSectionComponent"],
                _cities_cities_component__WEBPACK_IMPORTED_MODULE_12__["CitiesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _testmonial_testmonial_component__WEBPACK_IMPORTED_MODULE_15__["TestmonialComponent"],
                _multi_hotels_multi_hotels_component__WEBPACK_IMPORTED_MODULE_16__["MultiHotelsComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_17__["FaqComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["ContactUsComponent"],
                _our_team_our_team_component__WEBPACK_IMPORTED_MODULE_19__["OurTeamComponent"],
                _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_20__["BookingsComponent"],
                _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_21__["SearchResultComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["SidebarComponent"],
                _mycredits_mycredits_component__WEBPACK_IMPORTED_MODULE_23__["MycreditsComponent"],
                _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_24__["PromotionsComponent"],
                _invite_friends_invite_friends_component__WEBPACK_IMPORTED_MODULE_25__["InviteFriendsComponent"],
                _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_26__["HowItWorksComponent"],
                _call_support_call_support_component__WEBPACK_IMPORTED_MODULE_27__["CallSupportComponent"],
                _hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_28__["HotelDetailsComponent"],
                _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_29__["BookingDetailsComponent"],
                _booking_tabs_booking_tabs_component__WEBPACK_IMPORTED_MODULE_30__["BookingTabsComponent"],
                _hotel_caurosals_hotel_caurosals_component__WEBPACK_IMPORTED_MODULE_31__["HotelCaurosalsComponent"],
                _guest_form_guest_form_component__WEBPACK_IMPORTED_MODULE_32__["GuestFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_carousel__WEBPACK_IMPORTED_MODULE_4__["NgxCarouselModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbAlertModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBbO5ncLYlh6J5O5TIpd6D-3_E3XQ9UrsE'
                })
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking-details/booking-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/booking-details/booking-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctZGV0YWlscy9ib29raW5nLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/booking-details/booking-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/booking-details/booking-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margintop\">\n  <app-header-menu></app-header-menu>\n  <div class=\"row justify-content-center mbr-white full-height\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"  style=\"background:#6d6e71; color:white;\">\n      <div class=\"bookings details col-lg-8 col-md-8 col-sm-8 col-xs-12 offset-md-2 offset-lg-2\">\n        <div class=\"row margintop\">\n          <div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <img src=\"assets/images/img2.png\" class=\"img-fluid\" alt=\"\" />\n                <div class=\"detail-cont\">\n                  <p>FALCONS NEST<br />LA RIVIERA</p>\n                  <P class=\"float-left\">98% | Banjara Hills</P>\n                  <span class=\"float-right\"> Rs 2/min</span>\n                </div>\n              </div>\n            </div>\n            <br />\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12 \">\n                <span class=\"btn  btn-square details-left border\">MAX 2 GUESTS</span>\n                <span class=\"btn  btn-square details-left border\">VALID ID CARD</span>\n              </div>\n            </div>\n  \n          </div>\n  \n          <div class=\"col-lg-7 col-md-7 col-sm-7 col-xs-12\">\n            <app-booking-tabs></app-booking-tabs>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/booking-details/booking-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/booking-details/booking-details.component.ts ***!
  \**************************************************************/
/*! exports provided: BookingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsComponent", function() { return BookingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookingDetailsComponent = /** @class */ (function () {
    function BookingDetailsComponent() {
    }
    BookingDetailsComponent.prototype.ngOnInit = function () {
    };
    BookingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking-details',
            template: __webpack_require__(/*! ./booking-details.component.html */ "./src/app/booking-details/booking-details.component.html"),
            styles: [__webpack_require__(/*! ./booking-details.component.css */ "./src/app/booking-details/booking-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookingDetailsComponent);
    return BookingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/booking-tabs/booking-tabs.component.css":
/*!*********************************************************!*\
  !*** ./src/app/booking-tabs/booking-tabs.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmctdGFicy9ib29raW5nLXRhYnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/booking-tabs/booking-tabs.component.html":
/*!**********************************************************!*\
  !*** ./src/app/booking-tabs/booking-tabs.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset class=\"booking-tabs\">\n  <ngb-tab title=\"BOOKING FOR SRAVAN\">\n    <ng-template ngbTabContent>\n      <table class=\"table \">\n        <tbody>\n          <tr>\n            <td class=\"first-td\">\n              <p>Hotal</p>\n              <p>Dates</p>\n            </td>\n            <td class=\"text-right first-td\">\n              <p>Falcon Nest la Rivera</p>\n              <p>20-Dec-2018</p>\n            </td>\n          </tr>\n          <tr>\n            <td>Booking For<br />Booking Time</td>\n            <td class=\"text-right\">Sravan Kumar<br />5 Hrs</td>\n          </tr>\n          <tr>\n            <td>Amount Payable</td>\n            <td class=\"text-right\"> 575</td>\n          </tr>\n          <tr>\n            <td>Apply Coupon</td>\n            <td class=\"text-center\"><button class=\"btn btn-block btn-secondary btn-square\">XYZ123</button></td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <div class=\"form-group\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input \" type=\"checkbox\" value=\"\" id=\"invalidCheck3\" required>\n                  <label class=\"form-check-label\" for=\"invalidCheck3\">\n                    I accept hotel will assign the room type at check-in. The room will fit 2 adults.\n                  </label>\n                </div>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"2\">\n              <a class=\"btn btn-secondary btn-block btn-square btn-right paybtn\" href=\"javascript:void(0);\">PAY AT HOTEL</a>\n              <button class=\"btn btn-secondary btn-block btn-square btn-right paybtn focusbtn\" type=\"button\">PAY NOW</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </ng-template>\n  </ngb-tab>\n  <ngb-tab>\n    <ng-template ngbTabTitle>OTHERS</ng-template>\n    <ng-template ngbTabContent>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.\n      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko\n        farm-to-table\n        craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad\n        vinyl\n        cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia\n        yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable\n        jean\n        shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher\n        vero\n        sint qui sapiente accusamus tattooed echo park.</p>\n    </ng-template>\n  </ngb-tab>\n\n</ngb-tabset>"

/***/ }),

/***/ "./src/app/booking-tabs/booking-tabs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/booking-tabs/booking-tabs.component.ts ***!
  \********************************************************/
/*! exports provided: BookingTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingTabsComponent", function() { return BookingTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookingTabsComponent = /** @class */ (function () {
    function BookingTabsComponent() {
    }
    BookingTabsComponent.prototype.ngOnInit = function () {
    };
    BookingTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-booking-tabs',
            template: __webpack_require__(/*! ./booking-tabs.component.html */ "./src/app/booking-tabs/booking-tabs.component.html"),
            styles: [__webpack_require__(/*! ./booking-tabs.component.css */ "./src/app/booking-tabs/booking-tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookingTabsComponent);
    return BookingTabsComponent;
}());



/***/ }),

/***/ "./src/app/bookings/bookings.component.css":
/*!*************************************************!*\
  !*** ./src/app/bookings/bookings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bookings/bookings.component.html":
/*!**************************************************!*\
  !*** ./src/app/bookings/bookings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margintop\">\n  <app-header-menu></app-header-menu>\n  <div class=\"row justify-content-center mbr-white full-height\">\n    <div class=\"first-column col-lg-3 col-md-3 col-sm-3 col-xs-12  no-padding paddingtop\" style=\"background:#58595b\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 block1 no-padding\">\n        <ul>\n          <li class=\"profile_name\">\n            <div class=\"name\">\n              <p>P</p>\n            </div>\n            <h3>Pobyt</h3><small>View Profile</small>\n          </li>\n          <li></li>\n          <li></li>\n          <li></li>\n\n        </ul>\n        <ul>\n          <li class=\"active\"><a href=\"bookings\">Bookings</a></li>\n          <li><a href=\"mycredits\">My Credits</a></li>\n          <li><a href=\"promotions\">Promotions</a></li>\n          <li><a href=\"invite-friends\">Invite Friends</a></li>\n          <li><a href=\"how-it-works\">How it works</a></li>\n          <!-- <li><a href=\"call-support\">Call Support</a></li> -->\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"bookings booking-table second-column col-lg-9 col-md-9 col-sm-9 col-xs-12\" style=\"background:#6d6e71; color:white;\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <ul>\n          <li class=\"paddingtb border-bottom\">\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n                <img src=\"assets/images/img2.png\" class=\"img-fluid\" alt=\"\" />\n                <div>\n                  <p>FALCONS NEST<br />LA RIVIERA</p>\n                  <P class=\"float-left\">98% | Banjara Hills</P>\n                  <span class=\"float-right\"> Rs 2/min</span>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>Hotal<br />Dates</td>\n                      <td class=\"text-right\">Falcon Nest la Rivera<br />20-Dec-2018</td>\n                    </tr>\n                    <tr>\n                      <td>Guest name<br />Payment Method</td>\n                      <td class=\"text-right\">Sravan Kumar<br />Credit Card</td>\n                    </tr>\n                    <tr>\n                      <td>Stay (5 Hrs)<br />Taxes & Fees</td>\n                      <td class=\"text-right\">575<br />125</td>\n                    </tr>\n                    <tr>\n                      <td>Total Paid</td>\n                      <td class=\"text-right\"> 700</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"d-flex align-items-end col-lg-2 col-md-2 col-sm-2 col-xs-12\">\n                <button _ngcontent-c1=\"\" class=\"btn btn-secondary btn-square\" type=\"button\">BOOK AGAIN</button>\n              </div>\n            </div>\n          </li>\n          <li class=\"paddingtb border-bottom\">\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n                <img src=\"assets/images/img2.png\" class=\"img-fluid\" alt=\"\" />\n                <div>\n                  <p>FALCONS NEST<br />LA RIVIERA</p>\n                  <P class=\"float-left\">98% | Banjara Hills</P>\n                  <span class=\"float-right\"> Rs 2/min</span>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>Hotal<br />Dates</td>\n                      <td class=\"text-right\">Falcon Nest la Rivera<br />20-Dec-2018</td>\n                    </tr>\n                    <tr>\n                      <td>Guest name<br />Payment Method</td>\n                      <td class=\"text-right\">Sravan Kumar<br />Credit Card</td>\n                    </tr>\n                    <tr>\n                      <td>Stay (5 Hrs)<br />Taxes & Fees</td>\n                      <td class=\"text-right\">575<br />125</td>\n                    </tr>\n                    <tr>\n                      <td>Total Paid</td>\n                      <td class=\"text-right\">700</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"d-flex align-items-end col-lg-2 col-md-2 col-sm-2 col-xs-12\">\n                <button _ngcontent-c1=\"\" class=\"btn btn-secondary btn-square\" type=\"button\">BOOK AGAIN</button>\n              </div>\n            </div>\n          </li>\n          <li class=\"paddingtb border-bottom\">\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-12\">\n                <img src=\"assets/images/img2.png\" class=\"img-fluid\" alt=\"\" />\n                <div>\n                  <p>FALCONS NEST<br />LA RIVIERA</p>\n                  <P class=\"float-left\">98% | Banjara Hills</P>\n                  <span class=\"float-right\"> Rs 2/min</span>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>Hotal<br />Dates</td>\n                      <td class=\"text-right\">Falcon Nest la Rivera<br />20-Dec-2018</td>\n                    </tr>\n                    <tr>\n                      <td>Guest name<br />Payment Method</td>\n                      <td class=\"text-right\">Sravan Kumar<br />Credit Card</td>\n                    </tr>\n                    <tr>\n                      <td>Stay (5 Hrs)<br />Taxes & Fees</td>\n                      <td class=\"text-right\">575<br />125</td>\n                    </tr>\n                    <tr>\n                      <td>Total Paid</td>\n                      <td class=\"text-right\"> 700</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"d-flex align-items-end col-lg-2 col-md-2 col-sm-2 col-xs-12\">\n                <button _ngcontent-c1=\"\" class=\"btn btn-secondary btn-square\" type=\"button\">BOOK AGAIN</button>\n              </div>\n            </div>\n          </li>\n        </ul>\n\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bookings/bookings.component.ts":
/*!************************************************!*\
  !*** ./src/app/bookings/bookings.component.ts ***!
  \************************************************/
/*! exports provided: BookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsComponent", function() { return BookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookingsComponent = /** @class */ (function () {
    function BookingsComponent() {
    }
    BookingsComponent.prototype.ngOnInit = function () {
    };
    BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(/*! ./bookings.component.html */ "./src/app/bookings/bookings.component.html"),
            styles: [__webpack_require__(/*! ./bookings.component.css */ "./src/app/bookings/bookings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "./src/app/call-support/call-support.component.css":
/*!*********************************************************!*\
  !*** ./src/app/call-support/call-support.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGwtc3VwcG9ydC9jYWxsLXN1cHBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/call-support/call-support.component.html":
/*!**********************************************************!*\
  !*** ./src/app/call-support/call-support.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margintop\">\n  <app-header-menu></app-header-menu>\n  <div class=\"row justify-content-center mbr-white full-height\">\n    <div class=\"first-column content-top col-lg-3 col-md-3 col-sm-3 col-xs-12  no-padding paddingtop\" style=\"background:#58595b\">\n      <div class=\" paddingtb col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding\">\n        <ul>\n          <li class=\"profile_name\">\n            <div class=\"name\">\n              <p>P</p>\n            </div>\n            <h3>Pobyt</h3><small>View Profile</small>\n          </li>\n          <li></li>\n          <li></li>\n          <li></li>\n\n        </ul>\n        <ul>\n          <li><a href=\"bookings\">Bookings</a></li>\n          <li><a href=\"mycredits\">My Credits</a></li>\n          <li><a href=\"promotions\">Promotions</a></li>\n          <li><a href=\"invite-friends\">Invite Friends</a></li>\n          <li ><a href=\"how-it-works\">How it works</a></li>\n          <li class=\"active\"><a href=\"call-support\">Call Support</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"second-column content-top col-lg-9 col-md-9 col-sm-9 col-xs-12\" style=\"background:#6d6e71; color:white;\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/call-support/call-support.component.ts":
/*!********************************************************!*\
  !*** ./src/app/call-support/call-support.component.ts ***!
  \********************************************************/
/*! exports provided: CallSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallSupportComponent", function() { return CallSupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CallSupportComponent = /** @class */ (function () {
    function CallSupportComponent() {
    }
    CallSupportComponent.prototype.ngOnInit = function () {
    };
    CallSupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-call-support',
            template: __webpack_require__(/*! ./call-support.component.html */ "./src/app/call-support/call-support.component.html"),
            styles: [__webpack_require__(/*! ./call-support.component.css */ "./src/app/call-support/call-support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallSupportComponent);
    return CallSupportComponent;
}());



/***/ }),

/***/ "./src/app/cities/cities.component.css":
/*!*********************************************!*\
  !*** ./src/app/cities/cities.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 370px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2l0aWVzL2NpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvY2l0aWVzL2NpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAzNzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cities/cities.component.html":
/*!**********************************************!*\
  !*** ./src/app/cities/cities.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<div class=\"container margintop\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding\">\n      <div class=\"animated fadeIn app-cities\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 pr-0\">\n            <div style=\"position:relative;\">\n              <img alt=\"hyderabad hotels\" class=\"img-city d-md-block w-100\" src=\"assets/images/cities/Hyd.png\">\n              <div class=\"carousel-caption\">\n                <h3>Hyderabad</h3>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 pl-0\">\n            <div class=\"half-containers\">\n              <div class=\"row\">\n                <div class=\"col-sm-6 pr-0\">\n                  <img alt=\"Vizag hotels\" class=\"img-city w-100\" src=\"assets/images/cities/viz.png\">\n                  <div class=\"carousel-caption\">\n                    <h3>Vizag</h3>\n                  </div>\n                </div>\n                <div class=\"col-sm-6 pl-0 \">\n                  <img alt=\"Tirupathi hotels\" class=\"img-city w-100\" src=\"assets/images/cities/Tirupathi.png\">\n                  <div class=\"carousel-caption\">\n                    <h3>Tirupathi</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"half-containers\">\n              <img alt=\"Banglore hotels\" class=\"img-city w-100\" src=\"assets/images/cities/bang.png\">\n              <div class=\"carousel-caption\">\n                <h3>Banglore</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row bg-dark flex-row align-items-center m-0\">\n          <div class=\"col-lg-7 p-4 text-light\"> Sign up and we'll send you special deals, limited-time offers and\n            plenty of\n            travel\n            inspiration. </div>\n          <div class=\"col-lg-5 p-4\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"sample@email.com\" type=\"email\">\n              <span class=\"input-group-btn\">\n                <button class=\"btn btn-secondary btn-square\" type=\"submit\">Subscribe</button>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer-section></app-footer-section>\n"

/***/ }),

/***/ "./src/app/cities/cities.component.ts":
/*!********************************************!*\
  !*** ./src/app/cities/cities.component.ts ***!
  \********************************************/
/*! exports provided: CitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function() { return CitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CitiesComponent = /** @class */ (function () {
    function CitiesComponent() {
        this.lat = 17.429949200000003;
        this.lng = 78.45756279999999;
    }
    CitiesComponent.prototype.ngOnInit = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // this.lat = position.coords.latitude;
                // this.lng = position.coords.longitude;
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
            });
        }
    };
    CitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cities',
            template: __webpack_require__(/*! ./cities.component.html */ "./src/app/cities/cities.component.html"),
            styles: [__webpack_require__(/*! ./cities.component.css */ "./src/app/cities/cities.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CitiesComponent);
    return CitiesComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<div class=\"container margintop\">\n<div class=\"row margintop85\">\n    <div class=\"bg-secondary col-sm-6 px-0\">\n      <div class=\"card-body my-3\">\n        <h5 class=\"text-white mb-3\"> Happy to Help!\n          <br> Always!!\n        </h5>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n              <input class=\"form-control bg-secondary text-light\" placeholder=\"Full name\" type=\"text\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control bg-secondary text-light\" placeholder=\"Email\" type=\"email\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control bg-secondary text-light\" placeholder=\"Mobile\" type=\"text\">\n            </div>\n            <div class=\"form-group\">\n              <input class=\"form-control bg-secondary text-light\" placeholder=\"Subject\" type=\"text\">\n            </div>\n            <div class=\"form-group\">\n              <textarea class=\"form-control bg-secondary text-light\" placeholder=\"Message\" rows=\"5\"></textarea>\n            </div>\n            <div class=\"row px-4\">\n              <button class=\"btn btn-dark ml-auto btn-square w-100px\" type=\"button\">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 px-0 bg-dark\">\n      <div class=\"card-body\">\n        <h5 class=\"my-4 pl-4\">Reach Us</h5>\n        <ul class=\"ul-suggests ul-contact-reach my-4\">\n          <li class=\"icon1 mb-4\">\n            <div> Plot #40, Bhaskar Rao Nagar Colony </div>\n            <div> Sainikpuri, Kapra, Hyderabad</div>\n            <div> Telangana 500094</div>\n          </li>\n          <li class=\"icon2  mb-4\">\n            <div class=\"\">040 4582 1235</div>\n            <div class=\"\">040 4582 1246</div>\n          </li>\n          <li class=\"icon3 mb-4\">\n            <div class=\"email_link\">info@pobyt.co</div>\n          </li>\n          <li class=\"icon4 mb-4\">\n            <div class=\"\">Customer Care</div>\n            <div class=\"\">02457 985201</div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer-section></app-footer-section>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<div class=\"container\">\n  <div class=\"row justify-content-center mbr-white margintop bg-gray-s pob-faq\">\n    <h2 class=\"text-left\">Frequently Asked Questions</h2>\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n      <ngb-panel title=\"What is Pobyt?\">\n        <ng-template ngbPanelContent>\n          Pobyt is a hotel booking platform that enables you to book flexible-length stays at luxury hotels around you,\n          by the\n          minute. You can decide the check-in and check-out time and only pay for what you need, day or night. It’s\n          that easy.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n          <span> How does it work? </span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n          <p><strong>Step 1:</strong> Find a hotel nearby<br> Open the Pobyt app and choose a nearby hotel that is just\n            minutes\n            away from you.<br><strong>Step 2:</strong> Book the hotel on the go <br> Tap, Pay and Confirm the details\n            and a room\n            will be instantly ready for you to check in.<br><strong>Step 3:</strong> Confirm the Booking <br> Choose\n            the payment\n            type and make the payment. Congratulations your booking is confirmed. <br><strong>Step 4:</strong> Head to\n            the Hotel\n            <br> You will receive 60 minutes of complimentary travel time that will start immediately after you book a\n            room. Once\n            you arrive at the Hotel, please go to the front desk and let them know you are checking in with Pobyt. Your\n            check-in\n            time begins when you are given your key, or 60 minutes after you book, whichever comes first. <br> Note:\n            You do not\n            have to wait for the 60 minutes to count down before checking in. Your room is ready for you the second you\n            tap Book\n            Now.<br></p>\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\" Can I book in advance? \">\n        <ng-template ngbPanelContent>\n          No, you can’t book in advance. After the booking is confirmed, Pobyt guests are notified that they have 60\n          minutes of\n          complimentary travel time to reach the hotel. Check-in time begins once you pick up the keys at the front\n          desk, or 60\n          minutes after you tap Book Now, whichever comes first.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"When can I check in and check out? \">\n        <ng-template ngbPanelContent>\n          Unlike traditional hotel booking channels, there is no set check-in and check-out time. With Pobyt, your room\n          will be\n          ready for you the instant you tap Pay Now in the app. After you finished your planned stay we would like you\n          to\n          Check-Out the Room immediately. So that we can make the room ready for the next guest. Please head to the\n          reception and\n          hand over the keys to check-out.\n          <small>Note: Guests staying longer than the duration of stay without prior notice will be charged extra.</small>\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"Are the prices shown per room?\">\n        <ng-template ngbPanelContent>\n          Yes, prices are per single occupancy and double occupancy room and pack of minutes + GST ( varies from hotel\n          to hotel )\n          + Service Fee ( which is 2% ).\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"In which cities is Pobyt Available?\">\n        <ng-template ngbPanelContent>\n          We are currently operating in Hyderabad. We will soon launch in Bangalore, Mumbai and Delhi.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel title=\" What is required at check in?\">\n        <ng-template ngbPanelContent>\n          A valid government or state-issued photo ID will be required at check-in.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n  </div>\n</div>\n\n<app-footer-section></app-footer-section>\n"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/footer-section/footer-section.component.css":
/*!*************************************************************!*\
  !*** ./src/app/footer-section/footer-section.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci1zZWN0aW9uL2Zvb3Rlci1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/footer-section/footer-section.component.html":
/*!**************************************************************!*\
  !*** ./src/app/footer-section/footer-section.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"footer1 cid-qJ2WtUFT1h\" id=\"footer1-b\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center mbr-white\">\n      <div class=\"first-column col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-md-4 offset-lg-4\">\n          <h3 class=\"mbr-section-subtitle mbr-fonts-style mbr-lighter display-4\">\n            Download the App and\n            Experience the new way\n            of Hotelling!!\n          </h3><br />\n          <p class=\"mbr-text mbr-fonts-style display-5\">\n            <a class=\"navbar-brand js-scroll-trigger\" href=\"https://play.google.com/store/apps/details?id=co.pobyt.pobytApp\"\n              target=\"_blank\"><img src=\"assets/images/playstore.png\" class=\"img-respnosive\" width=\"135\" /></a>\n          </p>\n          <p class=\"mbr-text mbr-fonts-style display-5\">\n            <a class=\"navbar-brand js-scroll-trigger\" href=\"https://itunes.apple.com/us/app/pobyt/id1390862497?ls=1&mt=8\"\n              target=\"_blank\"><img src=\"assets/images/appstore.png\" class=\"img-respnosive\" width=\"135\" /></a>\n          </p>\n        </div>\n      </div>\n      <div class=\"second-column col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n        <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-md-2 offset-lg-2\">\n          <p class=\"marginleft-40\"><a class=\"navbar-brand js-scroll-trigger\" href=\"cities\">Our Cities</a> </p>\n          <p class=\"marginleft-40\"><a class=\"navbar-brand js-scroll-trigger\" href=\"about\"> About</a> </p>\n          <p class=\"marginleft-40\"><a class=\"navbar-brand js-scroll-trigger\" href=\"faq\"> FAQ</a> </p>\n          <p class=\"marginleft-40\"><a class=\"navbar-brand js-scroll-trigger\" href=\"contact\">Contact</a></p><br />\n          <p class=\"mbr-section-subtitle mbr-fonts-style mbr-lighter display-4 marginleft-40\">\n            Follow\n          </p><br/>\n          <div class=\"icons-wrapper\">\n            <ul>\n              <li>\n                <a class=\"icon-transition\" href=\"https://www.facebook.com/pobytapp/\">\n                  <span class=\"mbr-iconfont socicon-facebook socicon\"></span>\n                </a>\n              </li>\n              <li>\n                <a class=\"icon-transition\" href=\"https://twitter.com/Pobytapp\">\n                  <span class=\"mbr-iconfont socicon-twitter socicon\"></span>\n                </a>\n              </li>\n              <li>\n                <a class=\"icon-transition\" href=\"https://www.instagram.com/pobytapp/\">\n                  <span class=\"mbr-iconfont socicon-youtube socicon\"></span>\n                </a>\n              </li>\n              <li>\n                <a class=\"icon-transition\" href=\"https://www.instagram.com/mobirise/\">\n                  <span class=\"mbr-iconfont socicon-instagram socicon\"></span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Footer -->\n<footer>\n  <!-- Navigation -->\n  <nav class=\"navbar navbar-expand-lg navbar-dark\" id=\"mainNav\">\n    <div class=\"container\">\n      <a class=\"navbar-brand js-scroll-trigger\" href=\"./\"><img src=\"assets/images/logo.png\" class=\"img-respnosive\"\n          width=\"135\" /></a>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav text-uppercase ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\" href=\"./terms-conditions\">Terms & Conditions </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\" href=\"./privacy-poslicy\">Privacy Policy </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link js-scroll-trigger\" href=\"javascript:void(0);\">© 2018 Pobyt. All rights reserved. </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/footer-section/footer-section.component.ts":
/*!************************************************************!*\
  !*** ./src/app/footer-section/footer-section.component.ts ***!
  \************************************************************/
/*! exports provided: FooterSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSectionComponent", function() { return FooterSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterSectionComponent = /** @class */ (function () {
    function FooterSectionComponent() {
    }
    FooterSectionComponent.prototype.ngOnInit = function () {
    };
    FooterSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-section',
            template: __webpack_require__(/*! ./footer-section.component.html */ "./src/app/footer-section/footer-section.component.html"),
            styles: [__webpack_require__(/*! ./footer-section.component.css */ "./src/app/footer-section/footer-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterSectionComponent);
    return FooterSectionComponent;
}());



/***/ }),

/***/ "./src/app/guest-form/guest-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/guest-form/guest-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0LWZvcm0vZ3Vlc3QtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/guest-form/guest-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/guest-form/guest-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate=\"\" class=\"ng-invalid ng-touched ng-dirty\">\n  <div class=\"modal-body\">\n    <h4 class=\"mb-1 text-light\">Sign Up</h4>\n    <!-- <alertservice>         \n    </alertservice> -->\n    <div class=\"form-group my-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n        formcontrolname=\"name\" placeholder=\"Full Name\" required=\"\" type=\"text\">\n\n    </div>\n    <div class=\"row form-group mb-2\">\n      <div class=\"col-sm-6\"><select class=\"form-control bg-secondary-900 text-light ng-pristine ng-invalid ng-touched\"\n          formcontrolname=\"gender\">\n          <option value=\"\">Gender</option>\n          <option value=\"male\">Male</option>\n          <option value=\"female\">Female</option>\n        </select></div>\n      <div class=\"col-sm-6\"><input class=\"form-control bg-transparent text-light ng-dirty ng-invalid ng-touched\"\n          formcontrolname=\"dob\" placeholder=\"DOB\" required=\"\" type=\"text\"></div>\n    </div>\n    <div class=\"form-group my-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n        formcontrolname=\"mobile\" placeholder=\"Mobile\" required=\"\" type=\"text\">\n\n    </div>\n    <div class=\"form-group my-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n        formcontrolname=\"email\" placeholder=\"Email\" required=\"\" type=\"email\">\n\n    </div>\n    <div class=\"form-group mb-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n        formcontrolname=\"password\" placeholder=\"Password\" required=\"\" type=\"password\">\n\n    </div>\n    <div class=\"form-group mb-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n        formcontrolname=\"repassword\" placeholder=\"Re type password\" required=\"\" type=\"password\">\n\n    </div>\n    <div class=\"form-group\"><input class=\"form-control bg-transparent text-light ng-pristine ng-valid ng-touched\"\n        formcontrolname=\"referral_code\" placeholder=\"Referral code\" type=\"text\"></div>\n  </div>\n<div class=\"border-0 text-center\">\n    <div class=\"\"><button class=\"btn btn-primary px-5 bg-primary-theme border-0\" type=\"submit\">SignUp</button></div>\n  </div>\n  <br/>\n  <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fa fa-google mr-2\"></i>\n    Continue\n    with Google</button>\n  <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fa fa-facebook-f mr-2\"></i>\n    Continue with Facebook</button>\n</form>"

/***/ }),

/***/ "./src/app/guest-form/guest-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/guest-form/guest-form.component.ts ***!
  \****************************************************/
/*! exports provided: GuestFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestFormComponent", function() { return GuestFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuestFormComponent = /** @class */ (function () {
    function GuestFormComponent() {
    }
    GuestFormComponent.prototype.ngOnInit = function () {
    };
    GuestFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guest-form',
            template: __webpack_require__(/*! ./guest-form.component.html */ "./src/app/guest-form/guest-form.component.html"),
            styles: [__webpack_require__(/*! ./guest-form.component.css */ "./src/app/guest-form/guest-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuestFormComponent);
    return GuestFormComponent;
}());



/***/ }),

/***/ "./src/app/header-menu/header-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/header-menu/header-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\r\n  background-color: #292b2c;\r\n  color: white;\r\n}\r\n\r\n.dark-modal .close {\r\n  color: white;\r\n}\r\n\r\n.light-blue-backdrop {\r\n  background-color: #5cb3fd;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLW1lbnUvaGVhZGVyLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXItbWVudS9oZWFkZXItbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTJiMmM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZGFyay1tb2RhbCAuY2xvc2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpZ2h0LWJsdWUtYmFja2Ryb3Age1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2IzZmQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/header-menu/header-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/header-menu/header-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body padding60\">\n\n    <h5 class=\"card-title text-left\">Sign In</h5>\n    <form class=\"form-signin\">\n      <div class=\"form-label-group\">\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [formControl]=\"email\" placeholder=\"Email address\"\n          required autofocus>\n        <label for=\"inputEmail\">Email address</label>\n      </div>\n\n      <div class=\"form-label-group\">\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [formControl]=\"lpassword\" placeholder=\"Password\"\n          required>\n        <label for=\"inputPassword\">Password</label>\n      </div>\n\n      <p class=\"text-center\"><button class=\"btn btn-sm btn-primary text-uppercase\" type=\"submit\" (click)=\"onSubmit($event)\">Sign\n          in</button></p>\n      <div class=\"text-center\">\n        <a href=\"https://phpoll.com/recover\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n      </div>\n      <p class=\"text-center\">--- OR ---</p>\n      <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fa fa-google mr-2\"></i>\n        Continue with Google</button>\n      <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fa fa-facebook-f mr-2\"></i>\n        Continue with Facebook</button>\n    </form>\n\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button> -->\n  </div>\n</ng-template>\n\n<ng-template #content1 let-modal>\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body padding60 \">\n\n    <form novalidate=\"\" class=\"ng-invalid ng-touched ng-dirty\">\n      <div class=\"modal-body\">\n        <h4 class=\"mb-1 text-light\">Sign Up</h4>\n        <!-- <alertservice>         \n        </alertservice> -->\n        <div class=\"form-group my-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n            formcontrolname=\"name\" placeholder=\"Full Name\" required=\"\" type=\"text\">\n        </div>\n        <div class=\"row form-group mb-2\">\n          <div class=\"col-sm-6\"><select class=\"form-control bg-secondary-900 text-light ng-pristine ng-invalid ng-touched\"\n              formcontrolname=\"gender\">\n              <option value=\"\">Gender</option>\n              <option value=\"male\">Male</option>\n              <option value=\"female\">Female</option>\n            </select></div>\n          <div class=\"col-sm-6\"><input class=\"form-control bg-transparent text-light ng-dirty ng-invalid ng-touched\"\n              formcontrolname=\"dob\" placeholder=\"DOB\" required=\"\" type=\"text\"></div>\n        </div>\n        <div class=\"form-group my-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n            formcontrolname=\"mobile\" placeholder=\"Mobile\" required=\"\" type=\"text\">\n\n        </div>\n        <div class=\"form-group my-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n            formcontrolname=\"email\" placeholder=\"Email\" required=\"\" type=\"email\">\n\n        </div>\n        <div class=\"form-group mb-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n            formcontrolname=\"password\" placeholder=\"Password\" required=\"\" type=\"password\">\n\n        </div>\n        <div class=\"form-group mb-2\"><input class=\"form-control bg-transparent text-light ng-pristine ng-invalid ng-touched\"\n            formcontrolname=\"repassword\" placeholder=\"Re type password\" required=\"\" type=\"password\">\n\n        </div>\n        <div class=\"form-group\"><input class=\"form-control bg-transparent text-light ng-pristine ng-valid ng-touched\"\n            formcontrolname=\"referral_code\" placeholder=\"Referral code\" type=\"text\"></div>\n      </div>\n      <div class=\"border-0 text-center\">\n        <div class=\"\"><button class=\"btn btn-primary px-5 bg-primary-theme border-0\" type=\"submit\">SignUp</button></div>\n      </div>\n      <br />\n      <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fa fa-google mr-2\"></i>\n        Continue\n        with Google</button>\n      <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fa fa-facebook-f mr-2\"></i>\n        Continue with Facebook</button>\n    </form>\n\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button> -->\n  </div>\n</ng-template>\n\n<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"./\"><img src=\"assets/images/logo.png\" class=\"img-respnosive\" width=\"135\" /></a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <div class=\"col-md-6 offset-md-2\" *ngIf=\"router == '/search-result'\">\n      <form class=\"search_bar d-flex col-12 col-sm-12 ng-pristine ng-valid ng-touched\" novalidate=\"\">\n        <div class=\"col-md-6 no-padding\">\n          <input autocapitalize=\"off\" autocomplete=\"off\" autocorrect=\"off\" class=\"form-control rounded-0 ng-pristine ng-valid ng-touched\"\n            formcontrolname=\"location\" google-place=\"\" placeholder=\"Location (city)\" spellcheck=\"off\" type=\"text\">\n        </div>\n        <div class=\"col-md-2 no-padding\">\n          <input class=\"form-control  rounded-0\" max=\"18\" min=\"3\" placeholder=\"Hours\" type=\"number\">\n        </div>\n        <div class=\"col-md-2 no-padding\">\n          <input class=\"form-control  rounded-0\" max=\"59\" min=\"1\" placeholder=\"Minutes\" type=\"number\">\n        </div>\n        <div class=\"col-md-2 no-padding\">\n          <a ng-reflect-router-link=\"/search-result\" href=\"/search-result\">\n            <button class=\"btn rounded-0 text-white btn-block\" tabindex=\"0\" type=\"submit\" style=\"background:#111111;\">\n              Hotels\n            </button>\n          </a>\n        </div>\n      </form>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav text-uppercase ml-auto\" *ngIf=\"signIn == true\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"javascript:void(0)\" (click)=\"openLg(content1)\">SIGN UP</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"javascript:void(0)\" (click)=\"openVerticallyCentered(content)\">SIGN\n            IN</a>\n        </li>\n      </ul>\n      <ul  class=\"navbar-nav text-uppercase ml-auto\"  *ngIf=\"login === true\">\n        <li  class=\"nav-item\" style=\"border-right:1px solid white;\">\n          <a class=\"nav-link js-scroll-trigger\" [routerLink]=\"['/bookings']\">Venkat </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" [routerLink]=\"['/bookings']\">Sign Out</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"./\"><img src=\"assets/images/logo.png\" class=\"img-respnosive\" width=\"135\" /></a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav text-uppercase ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"javascript:void(0)\" (click)=\"openLg(content1)\">SIGN UP</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"javascript:void(0)\" (click)=\"openVerticallyCentered(content)\">SIGN\n            IN</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav> -->\n"

/***/ }),

/***/ "./src/app/header-menu/header-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/header-menu/header-menu.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMenuComponent", function() { return HeaderMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var HeaderMenuComponent = /** @class */ (function () {
    function HeaderMenuComponent(modalService, _router, renderer) {
        this.modalService = modalService;
        this._router = _router;
        this.renderer = renderer;
        this.router = '';
        this.login = false;
        this.signIn = true;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
        ]);
        this.lpassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
        ]);
        this.router = _router.url;
        console.log(this.router);
        if (this.router !== '/home') {
            this.renderer.addClass(document.body, 'active-header');
        }
    }
    HeaderMenuComponent.prototype.openBackDropCustomClass = function (content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    HeaderMenuComponent.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    HeaderMenuComponent.prototype.openSm = function (content) {
        this.modalService.open(content, { size: 'sm' });
    };
    HeaderMenuComponent.prototype.openLg = function (content1) {
        this.modalService.open(content1, { centered: true, size: 'sm' });
    };
    HeaderMenuComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true, size: 'sm' });
    };
    HeaderMenuComponent.prototype.onSubmit = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if ((this.email.value) !== ('test@gmail.com')) {
            // this.renderer.addClass(document.getElementById("demo"), 'active-header');
            this.login = true;
            this.signIn = false;
            console.log(this.email.value);
            console.log(this.login);
        }
    };
    HeaderMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-menu',
            template: __webpack_require__(/*! ./header-menu.component.html */ "./src/app/header-menu/header-menu.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./header-menu.component.css */ "./src/app/header-menu/header-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], HeaderMenuComponent);
    return HeaderMenuComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<div class=\"container home\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding\">      \n      <app-slider></app-slider>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 bg-primary-theme second-column content-top\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding testimonial\">\n          <app-testmonial></app-testmonial>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\">\n          <p class=\"text-center\"> <img src=\"assets/images/Home/mobile-img.png\" class=\"img-responsive phoneImg\" alt=\"Mobile\" /></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 bg-white second-column\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-md-10\">\n          <ul class=\"home-hotel-suggests my-4\">\n            <li class=\"icon1\">\n              <h6>Hotels For Everyone</h6>\n              <div class=\"text-muted\"> Stuck in traffic? Waiting for flight? Meeting delay? Choose your stay at your\n                fingertips\n                on Pobyt </div>\n            </li>\n            <li class=\"icon2\">\n              <h6>Book Instantly</h6>\n              <div class=\"text-muted\"> Planning in advance? Forget it! Get your phone and book a hotel near you in just\n                three\n                clicks. </div>\n            </li>\n            <li class=\"icon3\">\n              <h6>Pay Per Minute</h6>\n              <div class=\"text-muted\"> Now, Experience Comfort in minutes. Book on minute basis and put a check to 24\n                hour\n                norm.\n              </div>\n            </li>\n            <li class=\"icon4\">\n              <h6>Flexible Check in-outs</h6>\n              <div class=\"text-muted\"> Now, check in-out whenever you wish to. Oh, and the best part? Just pay only for\n                the\n                time\n                you stay. </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer-section></app-footer-section>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/hotel-caurosals/hotel-caurosals.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hotel-caurosals/hotel-caurosals.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsLWNhdXJvc2Fscy9ob3RlbC1jYXVyb3NhbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/hotel-caurosals/hotel-caurosals.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hotel-caurosals/hotel-caurosals.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-carousel [inputs]=\"carouselOne\" (carouselLoad)=\"myfunc($event)\">\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n          <img src=\"assets/images/hotel-details/img1.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\"> Nikhil Gurrala<br />\n              CEO | Founder</p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n          <img src=\"assets/images/hotel-details/img2.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\"> Nihal Gurrala<br />\n              Co-Founder </p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n          <img src=\"assets/images/hotel-details/img3.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\">Meghana Kolan<br />Co-Founder </p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n          <img src=\"assets/images/hotel-details/img1.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\">Sudharshan Reddy<br />Designation</p>\n          </div>\n  \n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n          <img src=\"assets/images/hotel-details/img2.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\"> Shiva<br />\n              CEO | Founder</p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n  <img src=\"assets/images/hotel-details/img3.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\"> Amr Omr<br />\n              CEO | Founder</p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n  <img src=\"assets/images/hotel-details/img1.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\"> Sanjay Kumar<br />\n              CEO | Founder</p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n  <img src=\"assets/images/hotel-details/img2.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\"> Uttej Kumar Reddy<br />\n              CEO | Founder</p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n  <img src=\"assets/images/hotel-details/img2.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\"> Ramoji Rao Yalamati<br />\n              CEO | Founder</p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n      <div class=\"col-lg-12 col-md-12 no-padding\">\n        <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n  <img src=\"assets/images/hotel-details/img3.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n        </div>\n  \n        <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n            <p class=\"text-center\">SriRam<br />\n              CEO | Founder</p>\n          </div>\n        </div> -->\n      </div>\n    </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n  <img src=\"assets/images/hotel-details/img1.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n  \n      <!-- <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n           <p class=\"text-center\">P A Rishi Bharadwaj<br />\n            CEO | Founder</p> \n        </div>\n      </div> -->\n    </div>\n  </ngx-item>\n    <button NgxCarouselPrev class='leftRs'></button>\n    <button NgxCarouselNext class='rightRs'></button>\n  </ngx-carousel>\n  "

/***/ }),

/***/ "./src/app/hotel-caurosals/hotel-caurosals.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hotel-caurosals/hotel-caurosals.component.ts ***!
  \**************************************************************/
/*! exports provided: HotelCaurosalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelCaurosalsComponent", function() { return HotelCaurosalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelCaurosalsComponent = /** @class */ (function () {
    function HotelCaurosalsComponent() {
    }
    HotelCaurosalsComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
            slide: 3,
            speed: 600,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    };
    HotelCaurosalsComponent.prototype.myfunc = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    HotelCaurosalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-caurosals',
            template: __webpack_require__(/*! ./hotel-caurosals.component.html */ "./src/app/hotel-caurosals/hotel-caurosals.component.html"),
            styles: [__webpack_require__(/*! ./hotel-caurosals.component.css */ "./src/app/hotel-caurosals/hotel-caurosals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelCaurosalsComponent);
    return HotelCaurosalsComponent;
}());



/***/ }),

/***/ "./src/app/hotel-details/hotel-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hotel-details/hotel-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsLWRldGFpbHMvaG90ZWwtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hotel-details/hotel-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/hotel-details/hotel-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<div class=\"container margintop\">\n  <div class=\"row details-sec1\">\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n      <h2> FALCONS NEST LA RIVIERA </h2>\n      <h4>98% | Banjara Hills | 2.75Km</h4>\n\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 \">\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 float-right\">\n        <span class=\"btn btn-square border\"> RS.2 Per Min</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row book-details\">\n    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-12 offset-lg-2 offset-md-2\">\n      <div class=\"row\">\n        <form class=\"d-flex col-12 col-sm-12 ng-pristine ng-valid ng-touched\">\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 no-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12\">\n                <div class=\"form-group col-md-6 d-inline-block text-right\">\n                  <label for=\"inputCity\">Guest</label>\n                </div>\n                <div class=\"form-group col-md-6 d-inline-block\">\n                  <select class=\"form-control\">\n                    <option selected>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 no-padding\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12\">\n                <div class=\"form-group col-md-6  d-inline-block no-padding\">\n                  <select class=\"form-control\">\n                    <option selected>3 Hrs</option>\n                    <option>4 Hrs</option>\n                    <option>5 Hrs</option>\n                    <option>6 Hrs</option>\n                  </select>\n                </div>\n                <div class=\"form-group col-md-6  d-inline-block no-padding\">\n                  <select class=\"form-control\">\n                    <option selected>10 Min</option>\n                    <option>20 Min</option>\n                    <option>30 Min</option>\n                    <option>40 Min</option>\n                    <option>50 Min</option>\n                    <option>60 Min</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 no-padding\">\n              <div class=\"row\">\n                <div class=\"col-lg-12 col-md-12\">\n                  <div class=\"form-group col-md-6  d-inline-block\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"INR. 575\">\n                  </div>\n                  <div class=\"form-group col-md-6  d-inline-block no-padding\">\n                      <button type=\"button\" class=\"btn btn-dark btn-block btn-square mb-2\" (click)=\"openVerticallyCentered(content)\">BOOK</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n  <div class=\"row no-padding our-team\">\n    <app-hotel-caurosals></app-hotel-caurosals>\n  </div>\n  <div class=\"row justify-content-center mbr-white\">\n    <div class=\"hotel-amenities col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n\n      <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 \">\n        <div class=\"card-body\">\n          <h5 class=\"my-4 pl-4\">AMENITIES</h5>\n          <ul class=\"ul-suggests ul-contact-reach my-4\">\n            <li class=\"icon1 mb-4\">\n              <div> Restaurant </div>\n            </li>\n            <li class=\"icon2  mb-4\">\n              <div class=\"\">AC</div>\n            </li>\n            <li class=\"icon3 mb-4\">\n              <div class=\"email_link\">Television</div>\n            </li>\n            <li class=\"icon4 mb-4\">\n              <div class=\"\">Wifi</div>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"hotel-terms col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n      <div class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12 \">\n        <h4 class=\"my-4 border text-center paddingtb\">DO NOT FORGET TO CARRY A VALID ID CARD</h4>\n        <div class=\"card-body conditions\">\n          <h5 class=\"my-4 \">Hotel policy And Disclaimer</h5>\n          <ul class=\"\">\n            <li class=\"\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n            </li>\n            <li class=\"\">\n              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer\n              took a galley of type and scrambled it to make a type specimen book.\n            </li>\n            <li class=\"\">\n              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\n              Latin literature from 45 BC, making it over 2000 years old\n            </li>\n            <li class=\"\">\n              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more\n              obscure Latin words, consectetur,\n            </li>\n          </ul>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body padding60\">\n\n    <h5 class=\"card-title text-left\">Sign In</h5>\n    <form class=\"form-signin\" action=\"/booking-details\">\n      <div class=\"form-label-group\">\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n        <label for=\"inputEmail\">Email address</label>\n      </div>\n\n      <div class=\"form-label-group\">\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n        <label for=\"inputPassword\">Password</label>\n      </div>\n\n      <p class=\"text-center\"> <button class=\"btn btn-sm btn-primary text-uppercase\"\n            type=\"submit\">Sign in</button></p>\n      <div class=\"text-center\">\n        <a href=\"https://phpoll.com/recover\" tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\n      </div>\n      <p class=\"text-center\">--- OR ---</p>\n      <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"button\"><i class=\"fa fa-google mr-2\"></i>\n        Continue with Google</button>\n      <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"button\"><i class=\"fa fa-facebook-f mr-2\"></i>\n        Continue with Facebook</button>\n    </form>\n\n  </div>\n  <div class=\"modal-footer\">\n    <!-- <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button> -->\n  </div>\n</ng-template>\n\n<!-- <app-footer-section></app-footer-section> -->"

/***/ }),

/***/ "./src/app/hotel-details/hotel-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hotel-details/hotel-details.component.ts ***!
  \**********************************************************/
/*! exports provided: HotelDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailsComponent", function() { return HotelDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var HotelDetailsComponent = /** @class */ (function () {
    function HotelDetailsComponent(modalService) {
        this.modalService = modalService;
    }
    HotelDetailsComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true, size: 'sm' });
    };
    HotelDetailsComponent.prototype.ngOnInit = function () {
    };
    HotelDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-details',
            template: __webpack_require__(/*! ./hotel-details.component.html */ "./src/app/hotel-details/hotel-details.component.html"),
            styles: [__webpack_require__(/*! ./hotel-details.component.css */ "./src/app/hotel-details/hotel-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.css":
/*!*********************************************************!*\
  !*** ./src/app/how-it-works/how-it-works.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.html":
/*!**********************************************************!*\
  !*** ./src/app/how-it-works/how-it-works.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margintop\">\n  <app-header-menu></app-header-menu>\n  <div class=\"row justify-content-center mbr-white full-height\">\n    <div class=\"first-column content-top col-lg-3 col-md-3 col-sm-3 col-xs-12  no-padding paddingtop\" style=\"background:#58595b\">\n      <div class=\" paddingtb col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding\">\n        <ul>\n          <li class=\"profile_name\">\n            <div class=\"name\">\n              <p>P</p>\n            </div>\n            <h3>Pobyt</h3><small>View Profile</small>\n          </li>\n          <li></li>\n          <li></li>\n          <li></li>\n\n        </ul>\n        <ul>\n          <li><a href=\"bookings\">Bookings</a></li>\n          <li><a href=\"mycredits\">My Credits</a></li>\n          <li><a href=\"promotions\">Promotions</a></li>\n          <li><a href=\"invite-friends\">Invite Friends</a></li>\n          <li class=\"active\"><a href=\"how-it-works\">How it works</a></li>\n          <!-- <li><a href=\"call-support\">Call Support</a></li> -->\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"second-column how content-top col-lg-9 col-md-9 col-sm-9 col-xs-12 paddingtop\" style=\"background:#6d6e71; color:white;\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 col-md-10 col-sm-12 col-xs-12 offset-md-1 offset-lg-1\">\n          <ngb-carousel *ngIf=\"images\">\n            <ng-template ngbSlide>\n              <img src=\"assets/images/how-it-works/slide-1.png\" alt=\"Random first slide\" class=\"slideImg\">\n              <div class=\"carousel-caption\">\n                <p class=\"text-left text-primary\">Instant Intelligent Hotel Search</p>\n                <p class=\"text-left\">Open the Pobyt and choose an available hotel\n                  from the list of nearby hotels based on\u0003your current/desired location.</p>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide>\n              <img src=\"assets/images/how-it-works/slide-2.png\" alt=\"Random second slide\" class=\"slideImg\">\n              <div class=\"carousel-caption\">\n                <p class=\"text-left text-primary\">Second slide label</p>\n                <p class=\"text-left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </ng-template>\n            <ng-template ngbSlide>\n              <img src=\"assets/images/how-it-works/slide-3.png\" alt=\"Random third slide\" class=\"slideImg\">\n              <div class=\"carousel-caption\">\n                <p class=\"text-left text-primary\">Third slide label</p>\n                <p class=\"text-left\">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </ng-template>\n          </ngb-carousel>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.ts":
/*!********************************************************!*\
  !*** ./src/app/how-it-works/how-it-works.component.ts ***!
  \********************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/how-it-works/how-it-works.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/invite-friends/invite-friends.component.css":
/*!*************************************************************!*\
  !*** ./src/app/invite-friends/invite-friends.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludml0ZS1mcmllbmRzL2ludml0ZS1mcmllbmRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/invite-friends/invite-friends.component.html":
/*!**************************************************************!*\
  !*** ./src/app/invite-friends/invite-friends.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margintop\">\n  <app-header-menu></app-header-menu>\n  <div class=\"row justify-content-center mbr-white full-height\">\n    <div class=\"first-column content-top col-lg-3 col-md-3 col-sm-3 col-xs-12  no-padding paddingtop\" style=\"background:#58595b\">\n      <div class=\" paddingtb col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding\">\n        <ul>\n          <li class=\"profile_name\">\n            <div class=\"name\">\n              <p>P</p>\n            </div>\n            <h3>Pobyt</h3><small>View Profile</small>\n          </li>\n          <li></li>\n          <li></li>\n          <li></li>\n\n        </ul>\n        <ul>\n          <li><a href=\"bookings\">Bookings</a></li>\n          <li><a href=\"mycredits\">My Credits</a></li>\n          <li><a href=\"promotions\">Promotions</a></li>\n          <li class=\"active\"><a href=\"invite-friends\">Invite Friends</a></li>\n          <li><a href=\"how-it-works\">How it works</a></li>\n          <!-- <li><a href=\"call-support\">Call Support</a></li> -->\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"second-column content-top col-lg-9 col-md-9 col-sm-9 col-xs-12\" style=\"background:#6d6e71; color:white;\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-md-3 offset-lg-3 paddingtb\">\n          <p class=\"text-primary\">REFER YOUR FAMILY AND FRIENDS TO POBYT!</p>\n          <p>They will get RS 200 in Pobyt credit when they sign up,\u0003and you will get RS 150 once they book a hotel</p>\n          <p>&nbsp;</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-md-3 offset-lg-3 paddingtb\">\n          <p>Your referral code</p><br />\n          <button class=\"btn btn-lg btn-secondary btn-square\" type=\"button\">70ASHIK</button>&nbsp;\n          <button class=\"btn btn-info btn-lg btn-secondary btn-square\" type=\"button\">INVITE</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-md-3 offset-lg-3 bg-btmImg\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/invite-friends/invite-friends.component.ts":
/*!************************************************************!*\
  !*** ./src/app/invite-friends/invite-friends.component.ts ***!
  \************************************************************/
/*! exports provided: InviteFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendsComponent", function() { return InviteFriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InviteFriendsComponent = /** @class */ (function () {
    function InviteFriendsComponent() {
    }
    InviteFriendsComponent.prototype.ngOnInit = function () {
    };
    InviteFriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invite-friends',
            template: __webpack_require__(/*! ./invite-friends.component.html */ "./src/app/invite-friends/invite-friends.component.html"),
            styles: [__webpack_require__(/*! ./invite-friends.component.css */ "./src/app/invite-friends/invite-friends.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InviteFriendsComponent);
    return InviteFriendsComponent;
}());



/***/ }),

/***/ "./src/app/multi-hotels/multi-hotels.component.css":
/*!*********************************************************!*\
  !*** ./src/app/multi-hotels/multi-hotels.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL211bHRpLWhvdGVscy9tdWx0aS1ob3RlbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/multi-hotels/multi-hotels.component.html":
/*!**********************************************************!*\
  !*** ./src/app/multi-hotels/multi-hotels.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-carousel [inputs]=\"carouselOne\" (carouselLoad)=\"myfunc($event)\">\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <small class=\"status\">COMFORT</small>\n        <img src=\"assets/images/img1.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n          <p> FALCONS NEST<br />LA RIVIERA<br />\n            <small>98% </small>| <small>Banjara Hills</small> </p>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n          <p> INR 575<br /><br />RS. 2/Min</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <small class=\"status\">COMFORT</small>\n        <a  [routerLink]=\"['/hotel-details']\"><img src=\"assets/images/img2.png\" alt=\"\" class=\"img-responsive\" width=\"284\"></a>\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n          <p> FALCONS NEST<br />LA RIVIERA<br />\n            <small>98% </small>| <small>Banjara Hills</small> </p>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n          <p> INR 575<br /><br />RS. 2/Min</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <small class=\"status\">COMFORT</small>\n        <img src=\"assets/images/img3.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n          <p> FALCONS NEST<br />LA RIVIERA<br />\n            <small>98% </small>| <small>Banjara Hills</small> </p>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n          <p> INR 575<br /><br />RS. 2/Min</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <small class=\"status\">COMFORT</small>\n        <img src=\"assets/images/img4.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n          <p> FALCONS NEST<br />LA RIVIERA<br />\n            <small>98% </small>| <small>Banjara Hills</small> </p>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n          <p> INR 575<br /><br />RS. 2/Min</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <small class=\"status\">COMFORT</small>\n        <img src=\"assets/images/img5.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n          <p> FALCONS NEST<br />LA RIVIERA<br />\n            <small>98% </small>| <small>Banjara Hills</small> </p>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n          <p> INR 575<br /><br />RS. 2/Min</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <small class=\"status\">COMFORT</small>\n        <img src=\"assets/images/img6.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n          <p> FALCONS NEST<br />LA RIVIERA<br />\n            <small>98% </small>| <small>Banjara Hills</small> </p>\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n          <p> INR 575<br /><br />RS. 2/Min</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <button NgxCarouselPrev class='leftRs'></button>\n  <button NgxCarouselNext class='rightRs'></button>\n</ngx-carousel>\n"

/***/ }),

/***/ "./src/app/multi-hotels/multi-hotels.component.ts":
/*!********************************************************!*\
  !*** ./src/app/multi-hotels/multi-hotels.component.ts ***!
  \********************************************************/
/*! exports provided: MultiHotelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiHotelsComponent", function() { return MultiHotelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MultiHotelsComponent = /** @class */ (function () {
    function MultiHotelsComponent() {
    }
    MultiHotelsComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 3,
            speed: 600,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    };
    MultiHotelsComponent.prototype.myfunc = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    MultiHotelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multi-hotels',
            template: __webpack_require__(/*! ./multi-hotels.component.html */ "./src/app/multi-hotels/multi-hotels.component.html"),
            styles: [__webpack_require__(/*! ./multi-hotels.component.css */ "./src/app/multi-hotels/multi-hotels.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MultiHotelsComponent);
    return MultiHotelsComponent;
}());



/***/ }),

/***/ "./src/app/mycredits/mycredits.component.css":
/*!***************************************************!*\
  !*** ./src/app/mycredits/mycredits.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215Y3JlZGl0cy9teWNyZWRpdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mycredits/mycredits.component.html":
/*!****************************************************!*\
  !*** ./src/app/mycredits/mycredits.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margintop\">\n  <app-header-menu></app-header-menu>\n  <div class=\"row justify-content-center mbr-white full-height\">\n    <div class=\"first-column col-lg-3 col-md-3 col-sm-3 col-xs-12  no-padding paddingtop\" style=\"background:#58595b\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding\">\n        <ul>\n          <li class=\"profile_name\">\n            <div class=\"name\">\n              <p>P</p>\n            </div>\n            <h3>Pobyt</h3><small>View Profile</small>\n          </li>\n          <li></li>\n          <li></li>\n          <li></li>\n\n        </ul>\n        <ul>\n          <li><a href=\"bookings\">Bookings</a></li>\n          <li class=\"active\"><a href=\"mycredits\">My Credits</a></li>\n          <li><a href=\"promotions\">Promotions</a></li>\n          <li><a href=\"invite-friends\">Invite Friends</a></li>\n          <li><a href=\"how-it-works\">How it works</a></li>\n          <!-- <li><a href=\"call-support\">Call Support</a></li> -->\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12 content-top paddingtop second-column\" style=\"background:#6d6e71; color:white;\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-md-3 offset-lg-3\">\n          <div class=\"credit-card\">\n            <div class=\"card-details text-right\">\n              <p>SRAVAN KUMAR</p>\n              <h2>RS. 1250</h2>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 offset-md-3 offset-lg-3 term-cond\">\n          <p>Terms & Conditions:</p>\n          <p>If you do more than 5 bookings you will get 100 points<br />\n            1 point equals to 1 Rupee<br />\n            Refer a friend and get 200 Rupees</p>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mycredits/mycredits.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mycredits/mycredits.component.ts ***!
  \**************************************************/
/*! exports provided: MycreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycreditsComponent", function() { return MycreditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MycreditsComponent = /** @class */ (function () {
    function MycreditsComponent() {
    }
    MycreditsComponent.prototype.ngOnInit = function () {
    };
    MycreditsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mycredits',
            template: __webpack_require__(/*! ./mycredits.component.html */ "./src/app/mycredits/mycredits.component.html"),
            styles: [__webpack_require__(/*! ./mycredits.component.css */ "./src/app/mycredits/mycredits.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MycreditsComponent);
    return MycreditsComponent;
}());



/***/ }),

/***/ "./src/app/our-team/our-team.component.css":
/*!*************************************************!*\
  !*** ./src/app/our-team/our-team.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291ci10ZWFtL291ci10ZWFtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/our-team/our-team.component.html":
/*!**************************************************!*\
  !*** ./src/app/our-team/our-team.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-carousel [inputs]=\"carouselOne\" (carouselLoad)=\"myfunc($event)\">\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <img src=\"assets/images/About/nikhil.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\"> Nikhil Gurrala<br />\n            CEO | Founder</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <img src=\"assets/images/About/nihal.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\"> Nihal Gurrala<br />\n            Co-Founder </p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <img src=\"assets/images/About/Megahana.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\">Meghana Kolan<br />Co-Founder </p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <img src=\"assets/images/About/SudharshanReddy.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\">Sudharshan Reddy<br />Designation</p>\n        </div>\n\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n        <img src=\"assets/images/About/shiva.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\"> Shiva<br />\n            CEO | Founder</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n<img src=\"assets/images/About/Amr-omr.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\"> Amr Omr<br />\n            CEO | Founder</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n<img src=\"assets/images/About/sanjay-kumar.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\"> Sanjay Kumar<br />\n            CEO | Founder</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n<img src=\"assets/images/About/uttej-kumar.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\"> Uttej Kumar Reddy<br />\n            CEO | Founder</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n<img src=\"assets/images/About/Ramoji-Rao.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\"> Ramoji Rao Yalamati<br />\n            CEO | Founder</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n  <ngx-item NgxCarouselItem>\n    <div class=\"col-lg-12 col-md-12 no-padding\">\n      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n<img src=\"assets/images/About/sriram.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n      </div>\n\n      <div class=\"col-lg-12 col-md-12 carousel-text\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n          <p class=\"text-center\">SriRam<br />\n            CEO | Founder</p>\n        </div>\n      </div>\n    </div>\n  </ngx-item>\n<ngx-item NgxCarouselItem>\n  <div class=\"col-lg-12 col-md-12 no-padding\">\n    <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n<img src=\"assets/images/About/Rishi-Bhardwaj.png\" alt=\"\" class=\"img-responsive\" width=\"284\">\n    </div>\n\n    <div class=\"col-lg-12 col-md-12 carousel-text\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 inline no-padding\">\n        <p class=\"text-center\">P A Rishi Bharadwaj<br />\n          CEO | Founder</p>\n      </div>\n    </div>\n  </div>\n</ngx-item>\n  <button NgxCarouselPrev class='leftRs'></button>\n  <button NgxCarouselNext class='rightRs'></button>\n</ngx-carousel>\n"

/***/ }),

/***/ "./src/app/our-team/our-team.component.ts":
/*!************************************************!*\
  !*** ./src/app/our-team/our-team.component.ts ***!
  \************************************************/
/*! exports provided: OurTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurTeamComponent", function() { return OurTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OurTeamComponent = /** @class */ (function () {
    function OurTeamComponent() {
    }
    OurTeamComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 4, lg: 4, all: 0 },
            slide: 3,
            speed: 600,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner'
        };
    };
    OurTeamComponent.prototype.myfunc = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    OurTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-team',
            template: __webpack_require__(/*! ./our-team.component.html */ "./src/app/our-team/our-team.component.html"),
            styles: [__webpack_require__(/*! ./our-team.component.css */ "./src/app/our-team/our-team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurTeamComponent);
    return OurTeamComponent;
}());



/***/ }),

/***/ "./src/app/promotions/promotions.component.css":
/*!*****************************************************!*\
  !*** ./src/app/promotions/promotions.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb21vdGlvbnMvcHJvbW90aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/promotions/promotions.component.html":
/*!******************************************************!*\
  !*** ./src/app/promotions/promotions.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container margintop\">\n  <app-header-menu></app-header-menu>\n  <div class=\"row justify-content-center mbr-white full-height\">\n    <div class=\"first-column content-top col-lg-3 col-md-3 col-sm-3 col-xs-12  no-padding paddingtop\" style=\"background:#58595b\">\n      <div class=\" paddingtb col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding\">\n        <ul>\n          <li class=\"profile_name\">\n            <div class=\"name\">\n              <p>P</p>\n            </div>\n            <h3>Pobyt</h3><small>View Profile</small>\n          </li>\n          <li></li>\n          <li></li>\n          <li></li>\n\n        </ul>\n        <ul>\n          <li><a href=\"bookings\">Bookings</a></li>\n          <li><a href=\"mycredits\">My Credits</a></li>\n          <li class=\"active\"><a href=\"promotions\">Promotions</a></li>\n          <li><a href=\"invite-friends\">Invite Friends</a></li>\n          <li><a href=\"how-it-works\">How it works</a></li>\n          <!-- <li><a href=\"call-support\">Call Support</a></li> -->\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"second-column content-top col-lg-9 col-md-9 col-sm-9 col-xs-12\" style=\"background:#6d6e71; color:white;\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <div class=\"promo-list\">\n            <ul>\n              <li class=\"paddingtb  border-bottom\">\n                <div class=\"row\">\n                  <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10\">\n                    <p class=\"text-primary\">WELCOME15</p>\n                    <p>Get 15% off your total amount! This coupon is valid upto January 31 st<br /> and can be utilized\n                      only\n                      once</p>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                    <button class=\"btn btn-secondary btn-square\" type=\"button\">COPY CODE</button>\n                  </div>\n                </div>\n              </li>\n              <li class=\"paddingtb  border-bottom\">\n                <div class=\"row\">\n                  <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10\">\n                    <p class=\"text-primary\">WELCOME15</p>\n                    <p>Get 15% off your total amount! This coupon is valid upto January 31 st<br /> and can be utilized\n                      only\n                      once</p>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                    <button class=\"btn btn-secondary btn-square\" type=\"button\">COPY CODE</button>\n                  </div>\n                </div>\n              </li>\n              <li class=\"paddingtb  border-bottom\">\n                <div class=\"row\">\n                  <div class=\"col-lg-10 col-md-10 col-sm-10 col-xs-10\">\n                    <p class=\"text-primary\">WELCOME15</p>\n                    <p>Get 15% off your total amount! This coupon is valid upto January 31 st<br /> and can be utilized\n                      only\n                      once</p>\n                  </div>\n                  <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                    <button class=\"btn btn-secondary btn-square\" type=\"button\">COPY CODE</button>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/promotions/promotions.component.ts":
/*!****************************************************!*\
  !*** ./src/app/promotions/promotions.component.ts ***!
  \****************************************************/
/*! exports provided: PromotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsComponent", function() { return PromotionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent() {
    }
    PromotionsComponent.prototype.ngOnInit = function () {
    };
    PromotionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotions',
            template: __webpack_require__(/*! ./promotions.component.html */ "./src/app/promotions/promotions.component.html"),
            styles: [__webpack_require__(/*! ./promotions.component.css */ "./src/app/promotions/promotions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromotionsComponent);
    return PromotionsComponent;
}());



/***/ }),

/***/ "./src/app/search-result/search-result.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-result/search-result.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHQvc2VhcmNoLXJlc3VsdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/search-result/search-result.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-result/search-result.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-menu></app-header-menu>\n\n<div class=\"container margintop\">\n  <div class=\"row height\">\n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12  scrol\">\n      <ul class=\"no-padding hotel-list\">\n          <li>\n            <a  [routerLink]=\"['/hotel-details']\"> <div class=\"col-lg-12 col-md-12 no-padding\">\n                <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n                  <small class=\"status\">COMFORT</small>\n                  <img src=\"assets/images/img1.png\" alt=\"\" class=\"img-responsive\" width=\"auto\">\n                </div>\n          \n                <div class=\"col-lg-12 col-md-12 carousel-text\">\n                  <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n                    <p> FALCONS NEST<br />LA RIVIERA<br />\n                      <small>98% </small>| <small>Banjara Hills</small> </p>\n                  </div>\n                  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n                    <p> INR 575<br /><br />RS. 2/Min</p>\n                  </div>\n                </div>\n              </div></a>\n            </li>\n            <li>\n              <a  [routerLink]=\"['/hotel-details']\"> <div class=\"col-lg-12 col-md-12 no-padding\">\n                  <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n                    <small class=\"status\">COMFORT</small>\n                    <img src=\"assets/images/img2.png\" alt=\"\" class=\"img-responsive\" width=\"auto\">\n                  </div>\n            \n                  <div class=\"col-lg-12 col-md-12 carousel-text\">\n                    <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n                      <p> FALCONS NEST<br />LA RIVIERA<br />\n                        <small>98% </small>| <small>Banjara Hills</small> </p>\n                    </div>\n                    <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n                      <p> INR 575<br /><br />RS. 2/Min</p>\n                    </div>\n                  </div>\n                </div></a>\n              </li>\n              <li>\n                <a  [routerLink]=\"['/hotel-details']\"> <div class=\"col-lg-12 col-md-12 no-padding\">\n                    <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n                      <small class=\"status\">COMFORT</small>\n                     <img src=\"assets/images/img3.png\" alt=\"\" class=\"img-responsive\" width=\"auto\">\n                    </div>\n              \n                    <div class=\"col-lg-12 col-md-12 carousel-text\">\n                      <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n                        <p> FALCONS NEST<br />LA RIVIERA<br />\n                          <small>98% </small>| <small>Banjara Hills</small> </p>\n                      </div>\n                      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n                        <p> INR 575<br /><br />RS. 2/Min</p>\n                      </div>\n                    </div>\n                  </div></a>\n                </li>\n                <li>\n                  <a  [routerLink]=\"['/hotel-details']\"> <div class=\"col-lg-12 col-md-12 no-padding\">\n                      <div class=\"col-lg-12 col-md-12 img-block no-padding\">\n                        <small class=\"status\">COMFORT</small>\n                        <img src=\"assets/images/img4.png\" alt=\"\" class=\"img-responsive\" width=\"auto\">\n                      </div>\n                \n                      <div class=\"col-lg-12 col-md-12 carousel-text\">\n                        <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 inline no-padding\">\n                          <p> FALCONS NEST<br />LA RIVIERA<br />\n                            <small>98% </small>| <small>Banjara Hills</small> </p>\n                        </div>\n                        <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 inline no-padding\">\n                          <p> INR 575<br /><br />RS. 2/Min</p>\n                        </div>\n                      </div>\n                    </div></a>\n                  </li>\n      </ul>\n      <!-- <app-multi-hotels></app-multi-hotels> -->\n    </div>\n    <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12 no-padding multi-hotels\">\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" class=\"h-100\" (mapClick)=\"mapClicked($event)\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" (markerClick)=\"clickedMarker($event, i)\"></agm-marker>\n        <!-- <agm-marker class=\"mapMarker\" *ngFor=\"let device of devices;\" [latitude]=\"device.latitude\" [longitude]=\"device.longitude\"\n          [iconUrl]=\"'device.markerUrl'\" > \n        </agm-marker>-->\n      </agm-map>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/search-result/search-result.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent() {
        this.zoom = 8;
        this.title = 'My first AGM project';
        this.lat = 17.429949200000003;
        this.lng = 78.45756279999999;
    }
    SearchResultComponent.prototype.clickedMarker = function ($event, index) {
        console.log("clicked the marker:", $event, index);
    };
    SearchResultComponent.prototype.mapClicked = function ($event) {
        console.log($event);
        // this.markers.push({
        //   lat: $event.coords.lat,
        //   lng: $event.coords.lng,
        //   draggable: true
        // });
    };
    // markerDragEnd(m: markers, $event: MouseEvent) {
    //   console.log('dragEnd', m, $event);
    // }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                // this.lat = position.coords.latitude;
                // this.lng = position.coords.longitude;
                _this.devices = [
                    {
                        'latitude': 22.728392,
                        'longitude': 71.637077
                    },
                    {
                        'latitude': 9.383452,
                        'longitude': 76.574059
                    },
                    ,
                    {
                        'latitude': 14.623801,
                        'longitude': 75.621788
                    }
                ];
                //  console.log(this.rooms[0].lat_long[0].lat);
                console.log(position.coords.longitude);
            });
        }
    };
    SearchResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! ./search-result.component.html */ "./src/app/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.css */ "./src/app/search-result/search-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->\n<aside class=\"left-sidebar\">\n  <!-- Sidebar scroll-->\n  <div class=\"scroll-sidebar\">\n    <!-- User profile -->\n    <div class=\"user-profile\">\n      <!-- User profile image -->\n      <div class=\"profile-img\"> <img src=\"assets/images/profile.png\" alt=\"user\" />\n        <!-- this is blinking heartbit-->\n        <div class=\"notify setpos\"> <span class=\"heartbit\"></span> <span class=\"point\"></span> </div>\n      </div>\n      <!-- User profile text-->\n      <div class=\"profile-text\">\n        <a href=\"#\" class=\"dropdown-toggle u-dropdown\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\"\n          aria-expanded=\"true\">Markarn\n          Doe <i class=\"fa fa-angle-down\"></i></a>\n        <div class=\"dropdown-menu animated flipInY\">\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-user\"></i> My Profile</a>\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-wallet\"></i> My Balance</a>\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-email\"></i> Inbox</a>\n          <!-- text-->\n          <div class=\"dropdown-divider\"></div>\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"ti-settings\"></i> Account Setting</a>\n          <!-- text-->\n          <div class=\"dropdown-divider\"></div>\n          <!-- text-->\n          <a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-power-off\"></i> Logout</a>\n          <!-- text-->\n        </div>\n      </div>\n    </div>\n    <!-- End User profile text-->\n    <!-- Sidebar navigation-->\n    <nav class=\"sidebar-nav\">\n      <ul id=\"sidebarnav\">\n        <li class=\"nav-devider\"></li>\n        <li class=\"nav-small-cap\">PERSONAL</li>\n        <li [class.active]=\"showMenu === 'start'\">\n          <a routerLink=\"/starter\" (click)=\"addExpandClass('start')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"icon-speedometer\"></i><span class=\"hide-menu\">Starter Page</span></a>\n        </li>\n        <li class=\"nav-small-cap\">UI COMPONENTS</li>\n        <li>\n          <a routerLink=\"/accordion\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-equal\"></i><span class=\"hide-menu\">Accordion</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/alert\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-message-bulleted\"></i><span class=\"hide-menu\">Alert</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/carousel\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-view-carousel\"></i><span class=\"hide-menu\">Carousel</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/datepicker\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-calendar-clock\"></i><span class=\"hide-menu\">Datepicker</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/dropdown\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-arrange-bring-to-front\"></i><span class=\"hide-menu\">Dropdown - Collapse</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/modal\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-tablet\"></i><span class=\"hide-menu\">Modal</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/pagination\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-backburger\"></i><span class=\"hide-menu\">Pagination</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/poptool\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-image-filter-vintage\"></i><span class=\"hide-menu\">Popover & Tooltip</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/progressbar\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-poll\"></i><span class=\"hide-menu\">Progressbar</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/rating\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-bandcamp\"></i><span class=\"hide-menu\">Ratings</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/tabs\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-sort-variant\"></i><span class=\"hide-menu\">Tabs</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/timepicker\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-calendar-clock\"></i><span class=\"hide-menu\">Timepicker</span></a>\n        </li>\n        <li>\n          <a routerLink=\"/typehead\" (click)=\"addExpandClass('component')\" [routerLinkActive]=\"['router-link-active']\"><i\n              class=\"mdi mdi-blur-radial\"></i><span class=\"hide-menu\">Typehead</span></a>\n        </li>\n\n        <li class=\"m-t-40 p-20 upgrade-btn\">\n          <a href=\"https://wrappixel.com/templates/elite-angular-admin/\" target=\"_blank\" class=\"btn btn-danger text-white\">Upgrade\n            To Pro</a>\n        </li>\n      </ul>\n    </nav>\n    <!-- End Sidebar navigation -->\n  </div>\n  <!-- End Sidebar scroll-->\n</aside>\n<!-- ============================================================== -->\n<!-- End Left Sidebar - style you can find in sidebar.scss  -->\n<!-- ============================================================== -->"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.css":
/*!*********************************************!*\
  !*** ./src/app/slider/slider.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/slider/slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"row searchbar-sec\">\n    <div class=\"col-md-6 offset-md-3\">\n      <form class=\"search_bar d-flex col-12 col-sm-12 ng-pristine ng-valid ng-touched\" novalidate=\"\" style=\"margin-top:160px;\">        \n        <div class=\"col-md-6 no-padding\">\n          <input autocapitalize=\"off\" autocomplete=\"off\" autocorrect=\"off\" class=\"form-control rounded-0 ng-pristine ng-valid ng-touched\"\n            formcontrolname=\"location\" google-place=\"\" placeholder=\"Location (city)\" spellcheck=\"off\" type=\"text\">\n        </div>\n        <div class=\"col-md-2 no-padding\">\n          <input class=\"form-control  rounded-0\" max=\"18\" min=\"3\" placeholder=\"Hours\" type=\"number\">\n        </div>\n        <div class=\"col-md-2 no-padding\">\n          <input class=\"form-control  rounded-0\" max=\"59\" min=\"1\" placeholder=\"Minutes\" type=\"number\">\n        </div>\n        <div class=\"col-md-2 no-padding\">\n          <a  [routerLink]=\"['/search-result']\"><button class=\"btn bg-primary-theme rounded-0 text-white btn-block\"  type=\"submit\"\n            tabindex=\"0\"> Hotels </button></a>\n        </div>\n      </form>\n    </div>\n  </div>\n  <ngb-carousel *ngIf=\"images\">\n    <ng-template ngbSlide>\n      <img src=\"./assets/images/Home/slider-1.png\" alt=\"Random first slide\">\n      <div class=\"carousel-caption\">\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"./assets/images/Home/slider-2.png\" alt=\"Random second slide\">\n      <div class=\"carousel-caption\">\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img src=\"./assets/images/Home/slider-3.png\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n      </div>\n    </ng-template>\n  </ngb-carousel>\n</header>\n"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var SliderComponent = /** @class */ (function () {
    function SliderComponent(config) {
        this.images = [1, 2, 3, 4].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
        this.search = '/search-result';
        // customize default values of carousels used by this component tree
        config.interval = 4000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/slider/slider.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/testmonial/testmonial.component.css":
/*!*****************************************************!*\
  !*** ./src/app/testmonial/testmonial.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Rtb25pYWwvdGVzdG1vbmlhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/testmonial/testmonial.component.html":
/*!******************************************************!*\
  !*** ./src/app/testmonial/testmonial.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-carousel>\n  <ng-template ngbSlide>\n    <div class=\"caption\">\n      <h3 class=\"text-left\">Too tired<br />\n        to drive back home?</h3>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"caption\">\n<h3 class=\"text-left\">Too tired<br />\n  to drive back home 2?</h3>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"caption\">\n      <h3 class=\"text-left\">Too tired<br />\n        to drive back home 3?</h3>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"caption\">\n      <h3 class=\"text-left\">Too tired<br />\n        to drive back home 4?</h3>\n    </div>\n  </ng-template>\n</ngb-carousel>\n"

/***/ }),

/***/ "./src/app/testmonial/testmonial.component.ts":
/*!****************************************************!*\
  !*** ./src/app/testmonial/testmonial.component.ts ***!
  \****************************************************/
/*! exports provided: TestmonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestmonialComponent", function() { return TestmonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var TestmonialComponent = /** @class */ (function () {
    function TestmonialComponent(config) {
        // customize default values of carousels used by this component tree
        config.interval = 4000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
    }
    TestmonialComponent.prototype.ngOnInit = function () {
    };
    TestmonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testmonial',
            template: __webpack_require__(/*! ./testmonial.component.html */ "./src/app/testmonial/testmonial.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
            styles: [__webpack_require__(/*! ./testmonial.component.css */ "./src/app/testmonial/testmonial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]])
    ], TestmonialComponent);
    return TestmonialComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\PobytApp-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map