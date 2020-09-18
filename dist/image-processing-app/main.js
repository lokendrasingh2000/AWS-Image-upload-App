(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lokendrasingh/Personal/Project/image-processing-app/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "Sp1i");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class HomeComponent {
    constructor() { }
    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
    upload() {
        console.log('Successfully called the uploaded function.');
        const file = this.selectedFiles.item(0);
        this.uploadFile(file);
    }
    uploadFile(file) {
        const contentType = file.type;
        const bucket = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__["S3"]({
            accessKeyId: 'AKIARZJKIE2MCGTCJU5N',
            secretAccessKey: '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',
            region: 'us-east-2'
        });
        const params = {
            Bucket: 'imageprocessingapp',
            Key: file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
        //for upload progress   
        /*bucket.upload(params).on('httpUploadProgress', function (evt) {
                  console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
              }).send(function (err, data) {
                  if (err) {
                      console.log('There was an error uploading your file: ', err);
                      return false;
                  }
                  console.log('Successfully uploaded file.', data);
                  return true;
              });*/
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 1, consts: [["for", "givenName"], [1, "btn", "btn-default"], ["type", "file", 3, "change"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-dark", "mb-0"], ["href", "/login", 1, "text-primary", "ml-1"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Upload your file for processing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choose File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_8_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Already a member?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedFiles);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'image-processing-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/teach_me_more", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["role", "main", 1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Image Recognition and Processing App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n       font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n       font-size: 14px;\n       color: #333;\n       box-sizing: border-box;\n       -webkit-font-smoothing: antialiased;\n       -moz-osx-font-smoothing: grayscale;\n     }\n     input[_ngcontent-%COMP%]{\n       width: 100%;\n       line-height: 2em;\n   }\n     label[_ngcontent-%COMP%]{\n       line-height: 2em;\n       font-weight: bold; \n   }\n     button[_ngcontent-%COMP%]{\n   background-color: #1976d2;\n   border: none;\n   color: white;\n   padding: 15px 32px;\n   text-align: center;\n   text-decoration: none;\n   display: inline-block;\n   font-size: 16px;\n   margin: 4px 2px;\n   cursor: pointer;\n   border-radius:0.5em;\n   }\n     h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n       margin: 8px 0;\n     }\n     p[_ngcontent-%COMP%] {\n       margin: 0;\n     }\n     .spacer[_ngcontent-%COMP%] {\n       flex: 1;\n     }\n     .toolbar[_ngcontent-%COMP%] {\n       position: absolute;\n       top: 0;\n       left: 0;\n       right: 0;\n       height: 60px;\n       display: flex;\n       align-items: center;\n       background-color: #1976d2;\n       color: white;\n       font-weight: 600;\n     }\n     .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n       margin: 0 16px;\n     }\n     .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n       height: 40px;\n       margin: 0 16px;\n     }\n     .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n       opacity: 0.8;\n     }\n     .content[_ngcontent-%COMP%] {\n       display: flex;\n       margin: 82px auto 32px;\n       padding: 0 16px;\n       max-width: 960px;\n       flex-direction: column;\n       align-items: center;\n     }\n     svg.material-icons[_ngcontent-%COMP%] {\n       height: 24px;\n       width: auto;\n     }\n     svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n       margin-right: 8px;\n     }\n     .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n       fill: #888;\n     }\n     .card-container[_ngcontent-%COMP%] {\n       display: flex;\n       flex-wrap: wrap;\n       justify-content: center;\n       margin-top: 16px;\n     }\n     .card[_ngcontent-%COMP%] {\n       border-radius: 4px;\n       border: 1px solid #eee;\n       background-color: #fafafa;\n       height: 40px;\n       width: 200px;\n       margin: 0 8px 16px;\n       padding: 16px;\n       display: flex;\n       flex-direction: row;\n       justify-content: center;\n       align-items: center;\n       transition: all 0.2s ease-in-out;\n       line-height: 24px;\n     }\n     .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n       margin-right: 0;\n     }\n     .card.card-small[_ngcontent-%COMP%] {\n       height: 16px;\n       width: 168px;\n     }\n     .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n       cursor: pointer;\n     }\n     .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n       transform: translateY(-3px);\n       box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n     }\n     .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n       fill: rgb(105, 103, 103);\n     }\n     .card.highlight-card[_ngcontent-%COMP%] {\n       background-color: #1976d2;\n       color: white;\n       font-weight: 600;\n       border: none;\n       width: auto;\n       min-width: 30%;\n       position: relative;\n     }\n     .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n       margin-left: 60px;\n     }\n     svg#rocket[_ngcontent-%COMP%] {\n       width: 80px;\n       position: absolute;\n       left: -10px;\n       top: -24px;\n     }\n     svg#rocket-smoke[_ngcontent-%COMP%] {\n       height: calc(100vh - 95px);\n       position: absolute;\n       top: 10px;\n       right: 180px;\n       z-index: -10;\n     }\n     a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n       color: #1976d2;\n       text-decoration: none;\n     }\n     a[_ngcontent-%COMP%]:hover {\n       color: #125699;\n     }\n     .terminal[_ngcontent-%COMP%] {\n       position: relative;\n       width: 80%;\n       max-width: 600px;\n       border-radius: 6px;\n       padding-top: 45px;\n       margin-top: 8px;\n       overflow: hidden;\n       background-color: rgb(15, 15, 16);\n     }\n     .terminal[_ngcontent-%COMP%]::before {\n       content: \"\\2022 \\2022 \\2022\";\n       position: absolute;\n       top: 0;\n       left: 0;\n       height: 4px;\n       background: rgb(58, 58, 58);\n       color: #c2c3c4;\n       width: 100%;\n       font-size: 2rem;\n       line-height: 0;\n       padding: 14px 0;\n       text-indent: 4px;\n     }\n     .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n       font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n       color: white;\n       padding: 0 1rem 1rem;\n       margin: 0;\n     }\n     .circle-link[_ngcontent-%COMP%] {\n       height: 40px;\n       width: 40px;\n       border-radius: 40px;\n       margin: 8px;\n       background-color: white;\n       border: 1px solid #eeeeee;\n       display: flex;\n       justify-content: center;\n       align-items: center;\n       cursor: pointer;\n       box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n       transition: 1s ease-out;\n     }\n     .circle-link[_ngcontent-%COMP%]:hover {\n       transform: translateY(-0.25rem);\n       box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n     }\n     footer[_ngcontent-%COMP%] {\n       margin-top: 8px;\n       display: flex;\n       align-items: center;\n       line-height: 20px;\n     }\n     footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n       display: flex;\n       align-items: center;\n     }\n     .github-star-badge[_ngcontent-%COMP%] {\n       color: #24292e;\n       display: flex;\n       align-items: center;\n       font-size: 12px;\n       padding: 3px 10px;\n       border: 1px solid rgba(27,31,35,.2);\n       border-radius: 3px;\n       background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n       margin-left: 4px;\n       font-weight: 600;\n       font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n     }\n     .github-star-badge[_ngcontent-%COMP%]:hover {\n       background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n       border-color: rgba(27,31,35,.35);\n       background-position: -.5em;\n     }\n     .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n       height: 16px;\n       width: 16px;\n       margin-right: 4px;\n     }\n     svg#clouds[_ngcontent-%COMP%] {\n       position: fixed;\n       bottom: -160px;\n       left: -230px;\n       z-index: -10;\n       width: 1920px;\n     }\n     \n     @media screen and (max-width: 767px) {\n       .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n         width: 100%;\n       }\n       .card[_ngcontent-%COMP%]:not(.highlight-card) {\n         height: 16px;\n         margin: 8px 0;\n       }\n       .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n         margin-left: 72px;\n       }\n       svg#rocket-smoke[_ngcontent-%COMP%] {\n         right: 120px;\n         transform: rotate(-5deg);\n       }\n     }\n     @media screen and (max-width: 575px) {\n       svg#rocket-smoke[_ngcontent-%COMP%] {\n         display: none;\n         visibility: hidden;\n       }\n     }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7T0FDTywwSkFBMEo7T0FDMUosZUFBZTtPQUNmLFdBQVc7T0FDWCxzQkFBc0I7T0FDdEIsbUNBQW1DO09BQ25DLGtDQUFrQztLQUNwQztLQUNBO09BQ0UsV0FBVztPQUNYLGdCQUFnQjtHQUNwQjtLQUNBO09BQ0ksZ0JBQWdCO09BQ2hCLGlCQUFpQjtHQUNyQjtLQUNBO0dBQ0EseUJBQXlCO0dBQ3pCLFlBQVk7R0FDWixZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGtCQUFrQjtHQUNsQixxQkFBcUI7R0FDckIscUJBQXFCO0dBQ3JCLGVBQWU7R0FDZixlQUFlO0dBQ2YsZUFBZTtHQUNmLG1CQUFtQjtHQUNuQjtLQUNFOzs7Ozs7T0FNRSxhQUFhO0tBQ2Y7S0FDQTtPQUNFLFNBQVM7S0FDWDtLQUNBO09BQ0UsT0FBTztLQUNUO0tBQ0E7T0FDRSxrQkFBa0I7T0FDbEIsTUFBTTtPQUNOLE9BQU87T0FDUCxRQUFRO09BQ1IsWUFBWTtPQUNaLGFBQWE7T0FDYixtQkFBbUI7T0FDbkIseUJBQXlCO09BQ3pCLFlBQVk7T0FDWixnQkFBZ0I7S0FDbEI7S0FDQTtPQUNFLGNBQWM7S0FDaEI7S0FDQTtPQUNFLFlBQVk7T0FDWixjQUFjO0tBQ2hCO0tBQ0E7T0FDRSxZQUFZO0tBQ2Q7S0FDQTtPQUNFLGFBQWE7T0FDYixzQkFBc0I7T0FDdEIsZUFBZTtPQUNmLGdCQUFnQjtPQUNoQixzQkFBc0I7T0FDdEIsbUJBQW1CO0tBQ3JCO0tBQ0E7T0FDRSxZQUFZO09BQ1osV0FBVztLQUNiO0tBQ0E7T0FDRSxpQkFBaUI7S0FDbkI7S0FDQTtPQUNFLFVBQVU7S0FDWjtLQUVBO09BQ0UsYUFBYTtPQUNiLGVBQWU7T0FDZix1QkFBdUI7T0FDdkIsZ0JBQWdCO0tBQ2xCO0tBQ0E7T0FDRSxrQkFBa0I7T0FDbEIsc0JBQXNCO09BQ3RCLHlCQUF5QjtPQUN6QixZQUFZO09BQ1osWUFBWTtPQUNaLGtCQUFrQjtPQUNsQixhQUFhO09BQ2IsYUFBYTtPQUNiLG1CQUFtQjtPQUNuQix1QkFBdUI7T0FDdkIsbUJBQW1CO09BQ25CLGdDQUFnQztPQUNoQyxpQkFBaUI7S0FDbkI7S0FDQTtPQUNFLGVBQWU7S0FDakI7S0FDQTtPQUNFLFlBQVk7T0FDWixZQUFZO0tBQ2Q7S0FDQTtPQUNFLGVBQWU7S0FDakI7S0FDQTtPQUNFLDJCQUEyQjtPQUMzQiwwQ0FBMEM7S0FDNUM7S0FDQTtPQUNFLHdCQUF3QjtLQUMxQjtLQUNBO09BQ0UseUJBQXlCO09BQ3pCLFlBQVk7T0FDWixnQkFBZ0I7T0FDaEIsWUFBWTtPQUNaLFdBQVc7T0FDWCxjQUFjO09BQ2Qsa0JBQWtCO0tBQ3BCO0tBQ0E7T0FDRSxpQkFBaUI7S0FDbkI7S0FDQTtPQUNFLFdBQVc7T0FDWCxrQkFBa0I7T0FDbEIsV0FBVztPQUNYLFVBQVU7S0FDWjtLQUNBO09BQ0UsMEJBQTBCO09BQzFCLGtCQUFrQjtPQUNsQixTQUFTO09BQ1QsWUFBWTtPQUNaLFlBQVk7S0FDZDtLQUNBOzs7T0FHRSxjQUFjO09BQ2QscUJBQXFCO0tBQ3ZCO0tBQ0E7T0FDRSxjQUFjO0tBQ2hCO0tBQ0E7T0FDRSxrQkFBa0I7T0FDbEIsVUFBVTtPQUNWLGdCQUFnQjtPQUNoQixrQkFBa0I7T0FDbEIsaUJBQWlCO09BQ2pCLGVBQWU7T0FDZixnQkFBZ0I7T0FDaEIsaUNBQWlDO0tBQ25DO0tBQ0E7T0FDRSw0QkFBNEI7T0FDNUIsa0JBQWtCO09BQ2xCLE1BQU07T0FDTixPQUFPO09BQ1AsV0FBVztPQUNYLDJCQUEyQjtPQUMzQixjQUFjO09BQ2QsV0FBVztPQUNYLGVBQWU7T0FDZixjQUFjO09BQ2QsZUFBZTtPQUNmLGdCQUFnQjtLQUNsQjtLQUNBO09BQ0Usb0VBQW9FO09BQ3BFLFlBQVk7T0FDWixvQkFBb0I7T0FDcEIsU0FBUztLQUNYO0tBQ0E7T0FDRSxZQUFZO09BQ1osV0FBVztPQUNYLG1CQUFtQjtPQUNuQixXQUFXO09BQ1gsdUJBQXVCO09BQ3ZCLHlCQUF5QjtPQUN6QixhQUFhO09BQ2IsdUJBQXVCO09BQ3ZCLG1CQUFtQjtPQUNuQixlQUFlO09BQ2Ysd0VBQXdFO09BQ3hFLHVCQUF1QjtLQUN6QjtLQUNBO09BQ0UsK0JBQStCO09BQy9CLDJDQUEyQztLQUM3QztLQUNBO09BQ0UsZUFBZTtPQUNmLGFBQWE7T0FDYixtQkFBbUI7T0FDbkIsaUJBQWlCO0tBQ25CO0tBQ0E7T0FDRSxhQUFhO09BQ2IsbUJBQW1CO0tBQ3JCO0tBQ0E7T0FDRSxjQUFjO09BQ2QsYUFBYTtPQUNiLG1CQUFtQjtPQUNuQixlQUFlO09BQ2YsaUJBQWlCO09BQ2pCLG1DQUFtQztPQUNuQyxrQkFBa0I7T0FDbEIsOERBQThEO09BQzlELGdCQUFnQjtPQUNoQixnQkFBZ0I7T0FDaEIsa0lBQWtJO0tBQ3BJO0tBQ0E7T0FDRSw4REFBOEQ7T0FDOUQsZ0NBQWdDO09BQ2hDLDBCQUEwQjtLQUM1QjtLQUNBO09BQ0UsWUFBWTtPQUNaLFdBQVc7T0FDWCxpQkFBaUI7S0FDbkI7S0FDQTtPQUNFLGVBQWU7T0FDZixjQUFjO09BQ2QsWUFBWTtPQUNaLFlBQVk7T0FDWixhQUFhO0tBQ2Y7S0FDQSxzQkFBc0I7S0FDdEI7T0FDRTs7U0FFRSxXQUFXO09BQ2I7T0FDQTtTQUNFLFlBQVk7U0FDWixhQUFhO09BQ2Y7T0FDQTtTQUNFLGlCQUFpQjtPQUNuQjtPQUNBO1NBQ0UsWUFBWTtTQUNaLHdCQUF3QjtPQUMxQjtLQUNGO0tBQ0E7T0FDRTtTQUNFLGFBQWE7U0FDYixrQkFBa0I7T0FDcEI7S0FDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICB9XG4gICAgIGlucHV0e1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICB9XG4gICBsYWJlbHtcbiAgICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgIH1cbiAgIGJ1dHRvbntcbiAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICBib3JkZXI6IG5vbmU7XG4gICBjb2xvcjogd2hpdGU7XG4gICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBmb250LXNpemU6IDE2cHg7XG4gICBtYXJnaW46IDRweCAycHg7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBib3JkZXItcmFkaXVzOjAuNWVtO1xuICAgfVxuICAgICBoMSxcbiAgICAgaDIsXG4gICAgIGgzLFxuICAgICBoNCxcbiAgICAgaDUsXG4gICAgIGg2IHtcbiAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICB9XG4gICAgIHAge1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgfVxuICAgICAuc3BhY2VyIHtcbiAgICAgICBmbGV4OiAxO1xuICAgICB9XG4gICAgIC50b29sYmFyIHtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgdG9wOiAwO1xuICAgICAgIGxlZnQ6IDA7XG4gICAgICAgcmlnaHQ6IDA7XG4gICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICB9XG4gICAgIC50b29sYmFyIGltZyB7XG4gICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgIH1cbiAgICAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICB9XG4gICAgIC50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgfVxuICAgICAuY29udGVudCB7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgfVxuICAgICBzdmcubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICB3aWR0aDogYXV0bztcbiAgICAgfVxuICAgICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgIH1cbiAgICAgLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgICAgIGZpbGw6ICM4ODg7XG4gICAgIH1cblxuICAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgIH1cbiAgICAgLmNhcmQge1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgfVxuICAgICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICB9XG4gICAgIC5jYXJkLmNhcmQtc21hbGwge1xuICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICB3aWR0aDogMTY4cHg7XG4gICAgIH1cbiAgICAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgIH1cbiAgICAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICAgICB9XG4gICAgIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gICAgICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xuICAgICB9XG4gICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIH1cbiAgICAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICAgfVxuICAgICBzdmcjcm9ja2V0IHtcbiAgICAgICB3aWR0aDogODBweDtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgdG9wOiAtMjRweDtcbiAgICAgfVxuICAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgdG9wOiAxMHB4O1xuICAgICAgIHJpZ2h0OiAxODBweDtcbiAgICAgICB6LWluZGV4OiAtMTA7XG4gICAgIH1cbiAgICAgYSxcbiAgICAgYTp2aXNpdGVkLFxuICAgICBhOmhvdmVyIHtcbiAgICAgICBjb2xvcjogIzE5NzZkMjtcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgIH1cbiAgICAgYTpob3ZlciB7XG4gICAgICAgY29sb3I6ICMxMjU2OTk7XG4gICAgIH1cbiAgICAgLnRlcm1pbmFsIHtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gICAgIH1cbiAgICAgLnRlcm1pbmFsOjpiZWZvcmUge1xuICAgICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgdG9wOiAwO1xuICAgICAgIGxlZnQ6IDA7XG4gICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xuICAgICAgIGNvbG9yOiAjYzJjM2M0O1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICBwYWRkaW5nOiAxNHB4IDA7XG4gICAgICAgdGV4dC1pbmRlbnQ6IDRweDtcbiAgICAgfVxuICAgICAudGVybWluYWwgcHJlIHtcbiAgICAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcbiAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgcGFkZGluZzogMCAxcmVtIDFyZW07XG4gICAgICAgbWFyZ2luOiAwO1xuICAgICB9XG4gICAgIC5jaXJjbGUtbGluayB7XG4gICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgICAgfVxuICAgICAuY2lyY2xlLWxpbms6aG92ZXIge1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgfVxuICAgICBmb290ZXIge1xuICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgIH1cbiAgICAgZm9vdGVyIGEge1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgfVxuICAgICAuZ2l0aHViLXN0YXItYmFkZ2Uge1xuICAgICAgIGNvbG9yOiAjMjQyOTJlO1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XG4gICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xuICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xuICAgICB9XG4gICAgIC5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XG4gICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XG4gICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XG4gICAgIH1cbiAgICAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICB9XG4gICAgIHN2ZyNjbG91ZHMge1xuICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICBib3R0b206IC0xNjBweDtcbiAgICAgICBsZWZ0OiAtMjMwcHg7XG4gICAgICAgei1pbmRleDogLTEwO1xuICAgICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgIH1cbiAgICAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcbiAgICAgICAudGVybWluYWwge1xuICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgfVxuICAgICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgfVxuICAgICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgICAgfVxuICAgICAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgICAgICAgcmlnaHQ6IDEyMHB4O1xuICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICAgICAgIH1cbiAgICAgfVxuICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgICAgIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICB9XG4gICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "dsE5");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










aws_amplify__WEBPACK_IMPORTED_MODULE_2__["default"].configure({
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-2',
        userPoolId: 'us-east-2_rePxRzoBq',
        userPoolWebClientId: '3nph7s5rqjujggtohmjqk69cdg',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dsE5":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SignUpComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    register() {
        console.log('I have entered here', this.email);
        try {
            const user = aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].signUp({
                username: this.email,
                password: this.password,
                attributes: {
                    email: this.email,
                    given_name: this.givenName,
                    family_name: this.familyName
                }
            });
            console.log({ user });
            alert('User signup completed , please check verify your email.');
            this.router.navigate(['login']);
        }
        catch (error) {
            console.log('error signing up:', error);
        }
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 28, vars: 4, consts: [["for", "givenName"], ["type", "text", "name", "givenName", "required", "", "placeholder", "Enter your first name", 3, "ngModel", "ngModelChange"], ["for", "familyName"], ["type", "text", "name", "familyName", "required", "", "placeholder", "Enter your last name", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", "name", "email", "required", "", "placeholder", "Enter your email", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "required", "", "placeholder", "Enter your password", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "text-dark", "mb-0"], ["href", "/login", 1, "text-primary", "ml-1"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register with My APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_7_listener($event) { return ctx.givenName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_11_listener($event) { return ctx.familyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_15_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_19_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_22_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Already a member?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.givenName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.familyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "dsE5");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");







const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "AL3R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(router) {
        this.router = router;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
    }
    loginWithCognito() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                var user = yield aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(this.email.toString(), this.password.toString());
                console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);
                var tokens = user.signInUserSession;
                if (tokens != null) {
                    console.log('User authenticated');
                    this.router.navigate(['home']);
                    alert('You are logged in successfully !');
                }
            }
            catch (error) {
                console.log(error);
                alert('User Authentication failed');
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 2, consts: [["for", "email"], ["type", "email", "name", "email", "required", "", "placeholder", "Enter your email", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", "required", "", "id", "password", "placeholder", "Enter your password", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "text-dark", "mb-0"], ["href", "/sign-up", 1, "text-primary", "ml-1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() { return ctx.loginWithCognito(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Not a member?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Sign Up now");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map