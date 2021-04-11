webpackHotUpdate("static/development/pages/landingpage.js",{

/***/ "./assets/img/faces/avatar.jpg":
/*!*************************************!*\
  !*** ./assets/img/faces/avatar.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/avatar-f1d71f777331fd7e3de116edf4ee3b67.jpg";

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/components/typographyStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/components/typographyStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var typographyStyle = {
  defaultFontStyle: _objectSpread({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
  },
  infoText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["infoColor"]
  },
  successText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["successColor"]
  },
  warningText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["warningColor"]
  },
  dangerText: {
    color: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/imagesStyles.js":
/*!********************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/imagesStyles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imagesStyles);

/***/ }),

/***/ "./assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js":
/*!************************************************************************************!*\
  !*** ./assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-kit.js */ "./assets/jss/nextjs-material-kit.js");
/* harmony import */ var assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/imagesStyles.js */ "./assets/jss/nextjs-material-kit/imagesStyles.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var typographyStyle = _objectSpread({
  section: {
    padding: "70px 0"
  },
  container: assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  space50: {
    height: "50px",
    display: "block"
  },
  title: _objectSpread({}, assets_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  }
}, assets_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

/***/ }),

/***/ "./components/Typography/Danger.js":
/*!*****************************************!*\
  !*** ./components/Typography/Danger.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Danger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/components/Typography/Danger.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Danger(props) {
  var classes = useStyles();
  var children = props.children;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.dangerText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Danger.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Info.js":
/*!***************************************!*\
  !*** ./components/Typography/Info.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/components/Typography/Info.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Info(props) {
  var classes = useStyles();
  var children = props.children;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.infoText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Info.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Muted.js":
/*!****************************************!*\
  !*** ./components/Typography/Muted.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Muted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/components/Typography/Muted.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Muted(props) {
  var classes = useStyles();
  var children = props.children;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.mutedText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Muted.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Primary.js":
/*!******************************************!*\
  !*** ./components/Typography/Primary.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/components/Typography/Primary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Primary(props) {
  var classes = useStyles();
  var children = props.children;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.primaryText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Primary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Quote.js":
/*!****************************************!*\
  !*** ./components/Typography/Quote.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/components/Typography/Quote.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Quote(props) {
  var text = props.text,
      author = props.author;
  var classes = useStyles();
  return __jsx("blockquote", {
    className: classes.defaultFontStyle + " " + classes.quote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: classes.quoteText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, text), __jsx("small", {
    className: classes.quoteAuthor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, author));
}
Quote.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Small.js":
/*!****************************************!*\
  !*** ./components/Typography/Small.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Small; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/components/Typography/Small.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Small(props) {
  var classes = useStyles();
  var children = props.children;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.smallText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Small.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Success.js":
/*!******************************************!*\
  !*** ./components/Typography/Success.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Success; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/components/Typography/Success.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Success(props) {
  var classes = useStyles();
  var children = props.children;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.successText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Success.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./components/Typography/Warning.js":
/*!******************************************!*\
  !*** ./components/Typography/Warning.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Warning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/components/typographyStyle.js */ "./assets/jss/nextjs-material-kit/components/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/components/Typography/Warning.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_nextjs_material_kit_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Warning(props) {
  var classes = useStyles();
  var children = props.children;
  return __jsx("div", {
    className: classes.defaultFontStyle + " " + classes.warningText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Warning.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/MySkills.js":
/*!*********************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/MySkills.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MySkills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Typography_Small_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Typography/Small.js */ "./components/Typography/Small.js");
/* harmony import */ var components_Typography_Danger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Typography/Danger.js */ "./components/Typography/Danger.js");
/* harmony import */ var components_Typography_Warning_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Typography/Warning.js */ "./components/Typography/Warning.js");
/* harmony import */ var components_Typography_Success_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Typography/Success.js */ "./components/Typography/Success.js");
/* harmony import */ var components_Typography_Info_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Typography/Info.js */ "./components/Typography/Info.js");
/* harmony import */ var components_Typography_Primary_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Typography/Primary.js */ "./components/Typography/Primary.js");
/* harmony import */ var components_Typography_Muted_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Typography/Muted.js */ "./components/Typography/Muted.js");
/* harmony import */ var components_Typography_Quote_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Typography/Quote.js */ "./components/Typography/Quote.js");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/faces/avatar.jpg */ "./assets/img/faces/avatar.jpg");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_jss_nextjs_material_kit_pages_componentsSections_typographyStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js */ "./assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js");
var _jsxFileName = "/Users/prajjwalkhanal/Documents/Next.JS/NextJS-PersonalWebsite/pages-sections/LandingPage-Sections/MySkills.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons
// core components













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_componentsSections_typographyStyle_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function MySkills() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.space50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Images")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Rounded Image"), __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRounded + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Circle Image"), __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRoundedCircle + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Rounded Raised"), __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  })), __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "Circle Raised"), __jsx("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }))), __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: classes.space50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=landingpage.js.4c6ffc79bad814016b31.hot-update.js.map