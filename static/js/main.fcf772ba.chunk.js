(this.webpackJsonpcaculator=this.webpackJsonpcaculator||[]).push([[0],{24:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),E_IT_caculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_App_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39),_App_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(47),antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(40),antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__),react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(25),react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_6__),DarkModeToggle=function(){var _=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(localStorage.getItem("theme")),e=Object(E_IT_caculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_,2),t=e[0],a=e[1],c=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(),r=Object(E_IT_caculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(c,2),n=r[0],u=r[1];Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")),"light"===localStorage.getItem("theme")&&u(!0),"dark"===localStorage.getItem("theme")&&u(!1)}),[]),Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){"object"==typeof localStorage.getItem("theme")&&(localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme","light"),"light"===localStorage.getItem("theme")&&u(!0),"dark"===localStorage.getItem("theme")&&u(!1))}),[]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.a,{checkedChildren:"Dark",unCheckedChildren:"Light",checked:n,onClick:function(){return u(!n),void("dark"===t?(localStorage.setItem("theme","light"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme","light"),a(localStorage.getItem("theme"))):(localStorage.setItem("theme","dark"),document.getElementsByTagName("HTML")[0].setAttribute("data-theme","dark"),a(localStorage.getItem("theme"))))}})})};function App(){var _useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState6=Object(E_IT_caculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),ketqua=_useState6[0],setKetqua=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),_useState8=Object(E_IT_caculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState7,2),tf=_useState8[0],setTF=_useState8[1],tinhketqua=function tinhketqua(){""!==ketqua&&(setKetqua(eval(ketqua)),setTF(!0))},ac=function(){setKetqua(""),setTF(!1)},del=function(){var _=ketqua;setKetqua(_.substring(0,_.length-1))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"Caculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"display-caculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"modee",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DarkModeToggle,{})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"display-result",children:ketqua}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"main",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"nutnhan",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"number",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"7")},children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"8")},children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"9")},children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"4")},children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"5")},children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"6")},children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"1")},children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"2")},children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"3")},children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{style:{width:"200%"},onClick:function(){return setKetqua(ketqua+"0")},children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{style:{fontSize:"60px",paddingBottom:"20px"},onClick:function(){return setKetqua(ketqua+".")},children:"."})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"tinh",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:ac,children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{disabled:tf,onClick:del,children:"DEL"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"+")},children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{style:{fontSize:"60px"},onClick:function(){return setKetqua(ketqua+"-")},children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setKetqua(ketqua+"*")},children:"X"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{style:{fontSize:"60px"},onClick:function(){return setKetqua(ketqua+"/")},children:"\xf7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{style:{width:"200%",fontSize:"60px"},onClick:tinhketqua,children:"="})]})]})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_6___default.a,{pageId:"108457081295779",appId:"742330696473947"})]})}__webpack_exports__.a=App},38:function(_,e,t){},39:function(_,e,t){},46:function(_,e,t){"use strict";t.r(e);var a=t(1),c=t(0),r=t.n(c),n=t(23),u=t.n(n),s=(t(38),t(24)),E=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,n=e.getTTFB;t(_),a(_),c(_),r(_),n(_)}))};u.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(s.a,{})}),document.getElementById("root")),E()}},[[46,1,2]]]);
//# sourceMappingURL=main.fcf772ba.chunk.js.map