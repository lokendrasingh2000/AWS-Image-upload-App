(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/lokendrasingh/Personal/Project/Git-Repository/My Project/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! aws-sdk */
      "Sp1i");
      /* harmony import */


      var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);

      var _c0 = "@import url('https://fonts.googleapis.com/css?family=Numans');\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\nbackground-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');\nbackground-size: cover;\nbackground-repeat: no-repeat;\nheight: 100%;\nfont-family: 'Numans', sans-serif;\n}\n.container[_ngcontent-%COMP%]{\nheight: 100%;\nalign-content: center;\n}\n.card[_ngcontent-%COMP%]{\nheight: 370px;\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\nbackground-color: rgba(0,0,0,0.5) !important;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\nfont-size: 60px;\nmargin-left: 10px;\ncolor: #FFC312;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\ncolor: white;\ncursor: pointer;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\ncolor: white;\n}\n.social_icon[_ngcontent-%COMP%]{\nposition: absolute;\nright: 20px;\ntop: -45px;\n}\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\nwidth: 50px;\nbackground-color: #FFC312;\ncolor: black;\nborder:0 !important;\n}\ninput[_ngcontent-%COMP%]:focus{\noutline: 0 0 0 0  !important;\nbox-shadow: 0 0 0 0 !important;\n\n}\n.remember[_ngcontent-%COMP%]{\ncolor: white;\n}\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\nwidth: 20px;\nheight: 20px;\nmargin-left: 15px;\nmargin-right: 5px;\n}\n.login_btn[_ngcontent-%COMP%]{\ncolor: black;\nbackground-color: #FFC312;\nwidth: 100px;\n}\n.login_btn[_ngcontent-%COMP%]:hover{\ncolor: black;\nbackground-color: white;\n}\n.links[_ngcontent-%COMP%]{\ncolor: white;\n}\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\nmargin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBNkQ7QUFGN0QscUNBQXFDO0FBSXJDO0FBQ0EsaUZBQWlGO0FBQ2pGLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsWUFBWTtBQUNaLGlDQUFpQztBQUNqQztBQUVBO0FBQ0EsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQjtBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLDRDQUE0QztBQUM1QztBQUVBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFFQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2Y7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFFQTtBQUNBLFdBQVc7QUFDWCx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQjtBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLDhCQUE4Qjs7QUFFOUI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUVBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7QUFFQTtBQUNBLFlBQVk7QUFDWix1QkFBdUI7QUFDdkI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYWRlIHdpdGggbG92ZSBieSBNdXRpdWxsYWggU2FtaW0qL1xuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xuXG5odG1sLGJvZHl7XG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC9hLzUvZC81NDQ3NTAuanBnJyk7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmhlaWdodDogMTAwJTtcbmZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lcntcbmhlaWdodDogMTAwJTtcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmR7XG5oZWlnaHQ6IDM3MHB4O1xubWFyZ2luLXRvcDogYXV0bztcbm1hcmdpbi1ib3R0b206IGF1dG87XG53aWR0aDogNDAwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW57XG5mb250LXNpemU6IDYwcHg7XG5tYXJnaW4tbGVmdDogMTBweDtcbmNvbG9yOiAjRkZDMzEyO1xufVxuXG4uc29jaWFsX2ljb24gc3Bhbjpob3ZlcntcbmNvbG9yOiB3aGl0ZTtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIGgze1xuY29sb3I6IHdoaXRlO1xufVxuXG4uc29jaWFsX2ljb257XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5yaWdodDogMjBweDtcbnRvcDogLTQ1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XG53aWR0aDogNTBweDtcbmJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG5jb2xvcjogYmxhY2s7XG5ib3JkZXI6MCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1c3tcbm91dGxpbmU6IDAgMCAwIDAgICFpbXBvcnRhbnQ7XG5ib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XG5cbn1cblxuLnJlbWVtYmVye1xuY29sb3I6IHdoaXRlO1xufVxuXG4ucmVtZW1iZXIgaW5wdXRcbntcbndpZHRoOiAyMHB4O1xuaGVpZ2h0OiAyMHB4O1xubWFyZ2luLWxlZnQ6IDE1cHg7XG5tYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxvZ2luX2J0bntcbmNvbG9yOiBibGFjaztcbmJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG53aWR0aDogMTAwcHg7XG59XG5cbi5sb2dpbl9idG46aG92ZXJ7XG5jb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtze1xuY29sb3I6IHdoaXRlO1xufVxuXG4ubGlua3MgYXtcbm1hcmdpbi1sZWZ0OiA0cHg7XG59Il19 */";

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "selectFile",
          value: function selectFile(event) {
            this.selectedFiles = event.target.files;
          }
        }, {
          key: "upload",
          value: function upload() {
            console.log('Successfully called the uploaded function.');
            var file = this.selectedFiles.item(0);
            this.uploadFile(file);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(file) {
            var contentType = file.type;
            var bucket = new aws_sdk__WEBPACK_IMPORTED_MODULE_1__["S3"]({
              accessKeyId: 'AKIARZJKIE2MCGTCJU5N',
              secretAccessKey: '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',
              region: 'us-east-2'
            });
            var params = {
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
            var params1 = {
              Bucket: 'imageprocessingapp-1',
              Key: file.name,
              Body: file,
              ACL: 'public-read',
              ContentType: contentType
            };
            bucket.upload(params1, function (err, data) {
              if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
              }

              console.log('Successfully uploaded file to 2nd bucket too.', data);
              return true;
            });
            var params2 = {
              Bucket: 'imageprocessingapp-3',
              Key: file.name,
              Body: file,
              ACL: 'public-read',
              ContentType: contentType
            };
            bucket.upload(params2, function (err, data) {
              if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
              }

              console.log('Successfully uploaded file to 3nd bucket too.', data);
              return true;
            });
            alert('File has been uploaded successfully !'); //for upload progress   

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
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 31,
        vars: 1,
        consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "integrity", "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.3.1/css/all.css", "integrity", "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU", "crossorigin", "anonymous"], [1, "container"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], [1, "form-group"], ["type", "file", 3, "change"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["href", "/sign-up"], [1, "d-flex", "justify-content-center"], ["href", "#"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Upload files for processing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_20_listener($event) {
              return ctx.selectFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_21_listener() {
              return ctx.upload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Don't have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Forgot your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedFiles);
          }
        },
        styles: [_c0, _c0]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'image-processing-app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 11,
        vars: 0,
        consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/teach_me_more", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["role", "main", 1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["@import url('https://fonts.googleapis.com/css?family=Numans');\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\nbackground-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');\nbackground-size: cover;\nbackground-repeat: no-repeat;\nheight: 100%;\nfont-family: 'Numans', sans-serif;\n}\n.container[_ngcontent-%COMP%]{\nheight: 100%;\nalign-content: center;\n}\n.card[_ngcontent-%COMP%]{\nheight: 370px;\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\nbackground-color: rgba(0,0,0,0.5) !important;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\nfont-size: 60px;\nmargin-left: 10px;\ncolor: #FFC312;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\ncolor: white;\ncursor: pointer;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\ncolor: white;\n}\n.social_icon[_ngcontent-%COMP%]{\nposition: absolute;\nright: 20px;\ntop: -45px;\n}\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\nwidth: 50px;\nbackground-color: #FFC312;\ncolor: black;\nborder:0 !important;\n}\ninput[_ngcontent-%COMP%]:focus{\noutline: 0 0 0 0  !important;\nbox-shadow: 0 0 0 0 !important;\n\n}\n.remember[_ngcontent-%COMP%]{\ncolor: white;\n}\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\nwidth: 20px;\nheight: 20px;\nmargin-left: 15px;\nmargin-right: 5px;\n}\n.login_btn[_ngcontent-%COMP%]{\ncolor: black;\nbackground-color: #FFC312;\nwidth: 100px;\n}\n.login_btn[_ngcontent-%COMP%]:hover{\ncolor: black;\nbackground-color: white;\n}\n.links[_ngcontent-%COMP%]{\ncolor: white;\n}\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\nmargin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBNkQ7QUFGN0QscUNBQXFDO0FBSXJDO0FBQ0EsaUZBQWlGO0FBQ2pGLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsWUFBWTtBQUNaLGlDQUFpQztBQUNqQztBQUVBO0FBQ0EsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQjtBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLDRDQUE0QztBQUM1QztBQUVBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFFQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2Y7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFFQTtBQUNBLFdBQVc7QUFDWCx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQjtBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLDhCQUE4Qjs7QUFFOUI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUVBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7QUFFQTtBQUNBLFlBQVk7QUFDWix1QkFBdUI7QUFDdkI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYWRlIHdpdGggbG92ZSBieSBNdXRpdWxsYWggU2FtaW0qL1xuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xuXG5odG1sLGJvZHl7XG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC9hLzUvZC81NDQ3NTAuanBnJyk7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmhlaWdodDogMTAwJTtcbmZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lcntcbmhlaWdodDogMTAwJTtcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmR7XG5oZWlnaHQ6IDM3MHB4O1xubWFyZ2luLXRvcDogYXV0bztcbm1hcmdpbi1ib3R0b206IGF1dG87XG53aWR0aDogNDAwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW57XG5mb250LXNpemU6IDYwcHg7XG5tYXJnaW4tbGVmdDogMTBweDtcbmNvbG9yOiAjRkZDMzEyO1xufVxuXG4uc29jaWFsX2ljb24gc3Bhbjpob3ZlcntcbmNvbG9yOiB3aGl0ZTtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIGgze1xuY29sb3I6IHdoaXRlO1xufVxuXG4uc29jaWFsX2ljb257XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5yaWdodDogMjBweDtcbnRvcDogLTQ1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XG53aWR0aDogNTBweDtcbmJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG5jb2xvcjogYmxhY2s7XG5ib3JkZXI6MCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1c3tcbm91dGxpbmU6IDAgMCAwIDAgICFpbXBvcnRhbnQ7XG5ib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XG5cbn1cblxuLnJlbWVtYmVye1xuY29sb3I6IHdoaXRlO1xufVxuXG4ucmVtZW1iZXIgaW5wdXRcbntcbndpZHRoOiAyMHB4O1xuaGVpZ2h0OiAyMHB4O1xubWFyZ2luLWxlZnQ6IDE1cHg7XG5tYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxvZ2luX2J0bntcbmNvbG9yOiBibGFjaztcbmJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG53aWR0aDogMTAwcHg7XG59XG5cbi5sb2dpbl9idG46aG92ZXJ7XG5jb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtze1xuY29sb3I6IHdoaXRlO1xufVxuXG4ubGlua3MgYXtcbm1hcmdpbi1sZWZ0OiA0cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! aws-amplify */
      "AL3R");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sign-up/sign-up.component */
      "dsE5");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      aws_amplify__WEBPACK_IMPORTED_MODULE_2__["default"].configure({
        Auth: {
          mandatorySignIn: true,
          region: 'us-east-2',
          userPoolId: 'us-east-2_OAkSRUyht',
          userPoolWebClientId: '5sp8spr63iv5kdf8p515kpaepf',
          authenticationFlowType: 'USER_PASSWORD_AUTH'
        }
      });

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dsE5":
    /*!**********************************************!*\
      !*** ./src/app/sign-up/sign-up.component.ts ***!
      \**********************************************/

    /*! exports provided: SignUpComponent */

    /***/
    function dsE5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! aws-amplify */
      "AL3R");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = "@import url('https://fonts.googleapis.com/css?family=Numans');\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\nbackground-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');\nbackground-size: cover;\nbackground-repeat: no-repeat;\nheight: 100%;\nfont-family: 'Numans', sans-serif;\n}\n.container[_ngcontent-%COMP%]{\nheight: 100%;\nalign-content: center;\n}\n.card[_ngcontent-%COMP%]{\nheight: 370px;\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\nbackground-color: rgba(0,0,0,0.5) !important;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\nfont-size: 60px;\nmargin-left: 10px;\ncolor: #FFC312;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\ncolor: white;\ncursor: pointer;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\ncolor: white;\n}\n.social_icon[_ngcontent-%COMP%]{\nposition: absolute;\nright: 20px;\ntop: -45px;\n}\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\nwidth: 50px;\nbackground-color: #FFC312;\ncolor: black;\nborder:0 !important;\n}\ninput[_ngcontent-%COMP%]:focus{\noutline: 0 0 0 0  !important;\nbox-shadow: 0 0 0 0 !important;\n\n}\n.remember[_ngcontent-%COMP%]{\ncolor: white;\n}\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\nwidth: 20px;\nheight: 20px;\nmargin-left: 15px;\nmargin-right: 5px;\n}\n.login_btn[_ngcontent-%COMP%]{\ncolor: black;\nbackground-color: #FFC312;\nwidth: 100px;\n}\n.login_btn[_ngcontent-%COMP%]:hover{\ncolor: black;\nbackground-color: white;\n}\n.links[_ngcontent-%COMP%]{\ncolor: white;\n}\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\nmargin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBNkQ7QUFGN0QscUNBQXFDO0FBSXJDO0FBQ0EsaUZBQWlGO0FBQ2pGLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsWUFBWTtBQUNaLGlDQUFpQztBQUNqQztBQUVBO0FBQ0EsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQjtBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLDRDQUE0QztBQUM1QztBQUVBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFFQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2Y7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFFQTtBQUNBLFdBQVc7QUFDWCx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQjtBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLDhCQUE4Qjs7QUFFOUI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBOztBQUVBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUVBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7QUFFQTtBQUNBLFlBQVk7QUFDWix1QkFBdUI7QUFDdkI7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYWRlIHdpdGggbG92ZSBieSBNdXRpdWxsYWggU2FtaW0qL1xuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xuXG5odG1sLGJvZHl7XG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC9hLzUvZC81NDQ3NTAuanBnJyk7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbmhlaWdodDogMTAwJTtcbmZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lcntcbmhlaWdodDogMTAwJTtcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmR7XG5oZWlnaHQ6IDM3MHB4O1xubWFyZ2luLXRvcDogYXV0bztcbm1hcmdpbi1ib3R0b206IGF1dG87XG53aWR0aDogNDAwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW57XG5mb250LXNpemU6IDYwcHg7XG5tYXJnaW4tbGVmdDogMTBweDtcbmNvbG9yOiAjRkZDMzEyO1xufVxuXG4uc29jaWFsX2ljb24gc3Bhbjpob3ZlcntcbmNvbG9yOiB3aGl0ZTtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtaGVhZGVyIGgze1xuY29sb3I6IHdoaXRlO1xufVxuXG4uc29jaWFsX2ljb257XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5yaWdodDogMjBweDtcbnRvcDogLTQ1cHg7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XG53aWR0aDogNTBweDtcbmJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG5jb2xvcjogYmxhY2s7XG5ib3JkZXI6MCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1c3tcbm91dGxpbmU6IDAgMCAwIDAgICFpbXBvcnRhbnQ7XG5ib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XG5cbn1cblxuLnJlbWVtYmVye1xuY29sb3I6IHdoaXRlO1xufVxuXG4ucmVtZW1iZXIgaW5wdXRcbntcbndpZHRoOiAyMHB4O1xuaGVpZ2h0OiAyMHB4O1xubWFyZ2luLWxlZnQ6IDE1cHg7XG5tYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxvZ2luX2J0bntcbmNvbG9yOiBibGFjaztcbmJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG53aWR0aDogMTAwcHg7XG59XG5cbi5sb2dpbl9idG46aG92ZXJ7XG5jb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtze1xuY29sb3I6IHdoaXRlO1xufVxuXG4ubGlua3MgYXtcbm1hcmdpbi1sZWZ0OiA0cHg7XG59Il19 */";

      var SignUpComponent = /*#__PURE__*/function () {
        function SignUpComponent(router) {
          _classCallCheck(this, SignUpComponent);

          this.router = router;
        }

        _createClass(SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register() {
            console.log('I have entered here', this.email);

            try {
              var user = aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].signUp({
                username: this.email,
                password: this.password,
                attributes: {
                  email: this.email,
                  given_name: this.givenName,
                  family_name: this.familyName
                }
              });
              console.log({
                user: user
              });
              alert('User signup completed , please check verify your email.');
              this.router.navigate(['login']);
            } catch (error) {
              console.log('error signing up:', error);
            }
          }
        }]);

        return SignUpComponent;
      }();

      SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
        return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpComponent,
        selectors: [["app-sign-up"]],
        decls: 41,
        vars: 4,
        consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "integrity", "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.3.1/css/all.css", "integrity", "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU", "crossorigin", "anonymous"], [1, "container"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "First Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-key"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["type", "submit", "value", "Login", 1, "btn", "float-right", "login_btn", 3, "click"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["href", "/login"]],
        template: function SignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "App Registeration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.givenName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.familyName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_input_click_36_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Already have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.givenName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.familyName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
        styles: [_c0, _c0]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sign-up/sign-up.component */
      "dsE5");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }, {
        path: 'sign-up',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! aws-amplify */
      "AL3R");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = "@import url('https://fonts.googleapis.com/css?family=Numans');\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{\nbackground-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');\nbackground-size: cover;\nbackground-repeat: no-repeat;\nheight: 100%;\nfont-family: 'Numans', sans-serif;\n}\n.container[_ngcontent-%COMP%]{\nheight: 100%;\nalign-content: center;\n}\n.card[_ngcontent-%COMP%]{\nheight: 370px;\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\nbackground-color: rgba(0,0,0,0.5) !important;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\nfont-size: 60px;\nmargin-left: 10px;\ncolor: #FFC312;\n}\n.social_icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\ncolor: white;\ncursor: pointer;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\ncolor: white;\n}\n.social_icon[_ngcontent-%COMP%]{\nposition: absolute;\nright: 20px;\ntop: -45px;\n}\n.input-group-prepend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\nwidth: 50px;\nbackground-color: #FFC312;\ncolor: black;\nborder:0 !important;\n}\ninput[_ngcontent-%COMP%]:focus{\noutline: 0 0 0 0  !important;\nbox-shadow: 0 0 0 0 !important;\n\n}\n.remember[_ngcontent-%COMP%]{\ncolor: white;\n}\n.remember[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]\n{\nwidth: 20px;\nheight: 20px;\nmargin-left: 15px;\nmargin-right: 5px;\n}\n.login_btn[_ngcontent-%COMP%]{\ncolor: black;\nbackground-color: #FFC312;\nwidth: 100px;\n}\n.login_btn[_ngcontent-%COMP%]:hover{\ncolor: black;\nbackground-color: white;\n}\n.links[_ngcontent-%COMP%]{\ncolor: white;\n}\n.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\nmargin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZEQUE2RDtBQUY3RCxxQ0FBcUM7QUFJckM7QUFDQSxpRkFBaUY7QUFDakYsc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1QixZQUFZO0FBQ1osaUNBQWlDO0FBQ2pDO0FBRUE7QUFDQSxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCO0FBRUE7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1osNENBQTRDO0FBQzVDO0FBRUE7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUVBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZjtBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUVBO0FBQ0EsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CO0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsOEJBQThCOztBQUU5QjtBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBRUE7O0FBRUEsV0FBVztBQUNYLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBRUE7QUFDQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWjtBQUVBO0FBQ0EsWUFBWTtBQUNaLHVCQUF1QjtBQUN2QjtBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFkZSB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltKi9cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW1hbnMnKTtcblxuaHRtbCxib2R5e1xuYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwOi8vZ2V0d2FsbHBhcGVycy5jb20vd2FsbHBhcGVyL2Z1bGwvYS81L2QvNTQ0NzUwLmpwZycpO1xuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5oZWlnaHQ6IDEwMCU7XG5mb250LWZhbWlseTogJ051bWFucycsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXJ7XG5oZWlnaHQ6IDEwMCU7XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJke1xuaGVpZ2h0OiAzNzBweDtcbm1hcmdpbi10b3A6IGF1dG87XG5tYXJnaW4tYm90dG9tOiBhdXRvO1xud2lkdGg6IDQwMHB4O1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpICFpbXBvcnRhbnQ7XG59XG5cbi5zb2NpYWxfaWNvbiBzcGFue1xuZm9udC1zaXplOiA2MHB4O1xubWFyZ2luLWxlZnQ6IDEwcHg7XG5jb2xvcjogI0ZGQzMxMjtcbn1cblxuLnNvY2lhbF9pY29uIHNwYW46aG92ZXJ7XG5jb2xvcjogd2hpdGU7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlciBoM3tcbmNvbG9yOiB3aGl0ZTtcbn1cblxuLnNvY2lhbF9pY29ue1xucG9zaXRpb246IGFic29sdXRlO1xucmlnaHQ6IDIwcHg7XG50b3A6IC00NXB4O1xufVxuXG4uaW5wdXQtZ3JvdXAtcHJlcGVuZCBzcGFue1xud2lkdGg6IDUwcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xuY29sb3I6IGJsYWNrO1xuYm9yZGVyOjAgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXN7XG5vdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xuYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xuXG59XG5cbi5yZW1lbWJlcntcbmNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlbWVtYmVyIGlucHV0XG57XG53aWR0aDogMjBweDtcbmhlaWdodDogMjBweDtcbm1hcmdpbi1sZWZ0OiAxNXB4O1xubWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5sb2dpbl9idG57XG5jb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMzEyO1xud2lkdGg6IDEwMHB4O1xufVxuXG4ubG9naW5fYnRuOmhvdmVye1xuY29sb3I6IGJsYWNrO1xuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5saW5rc3tcbmNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmtzIGF7XG5tYXJnaW4tbGVmdDogNHB4O1xufSJdfQ== */";

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.email = '';
          this.password = '';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginWithCognito",
          value: function loginWithCognito() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var user, tokens;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      _context.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].signIn(this.email.toString(), this.password.toString());

                    case 3:
                      user = _context.sent;
                      console.log('Authentication performed for user=' + this.email + 'password=' + this.password + ' login result==' + user);
                      tokens = user.signInUserSession;

                      if (tokens != null) {
                        console.log('User authenticated');
                        this.router.navigate(['home']);
                        alert('You are logged in successfully !');
                      }

                      _context.next = 13;
                      break;

                    case 9:
                      _context.prev = 9;
                      _context.t0 = _context["catch"](0);
                      console.log(_context.t0);
                      alert('User Authentication failed');

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[0, 9]]);
            }));
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 38,
        vars: 2,
        consts: [["href", "//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css", "rel", "stylesheet", "id", "bootstrap-css"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "integrity", "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.3.1/css/all.css", "integrity", "sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU", "crossorigin", "anonymous"], [1, "container"], [1, "d-flex", "justify-content-center", "h-100"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "input-group", "form-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fas", "fa-key"], ["type", "password", "placeholder", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "align-items-center", "remember"], ["type", "checkbox"], [1, "form-group"], ["type", "submit", "value", "Login", 1, "btn", "float-right", "login_btn", 3, "click"], [1, "card-footer"], [1, "d-flex", "justify-content-center", "links"], ["href", "/sign-up"], [1, "d-flex", "justify-content-center"], ["href", "#"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Login Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "link", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "link", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remember Me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_input_click_29_listener() {
              return ctx.loginWithCognito();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Don't have an account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Forgot your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [_c0, _c0]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map