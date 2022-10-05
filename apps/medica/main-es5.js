function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!***********************************************************************************!*\
    !*** ./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale sync ^\.\/.*$ ***!
    \***********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesPnpmMoment2294Node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/af.js",
      "./ar": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ar.js",
      "./az": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/az.js",
      "./be": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/be.js",
      "./bg": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bo.js",
      "./br": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/br.js",
      "./bs": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/cy.js",
      "./da": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/da.js",
      "./de": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/de.js",
      "./dv": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/dv.js",
      "./el": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/eo.js",
      "./es": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/es.js",
      "./et": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/et.js",
      "./eu": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/gu.js",
      "./he": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/he.js",
      "./hi": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/id.js",
      "./is": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/is.js",
      "./it": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/it.js",
      "./ja": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/kk.js",
      "./km": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/km.js",
      "./kn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/lv.js",
      "./me": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/me.js",
      "./mi": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/mt.js",
      "./my": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/my.js",
      "./nb": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sd.js",
      "./se": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/se.js",
      "./si": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/si.js",
      "./sk": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ta.js",
      "./te": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/te.js",
      "./tet": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tg.js",
      "./th": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/th.js",
      "./tk": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/api/api-medic-endpoints.ts":
  /*!********************************************!*\
    !*** ./src/app/api/api-medic-endpoints.ts ***!
    \********************************************/

  /*! exports provided: GET_AUTH_TOKEN_URL, API_MEDIC_BASE_URL, default, GET_ALL_SYMPTOMS, SYMPTOMS, ISSUES, DIAGNOSIS, BODY_LOCATIONS, BODY_SUB_LOCATIONS, SYMPTOMS_IN_LOCATION, ISSUE_INFO, PROPOSED_SYMPTOMS, RED_FLAG_TEXT, SPECIALISATIONS, ALL_SPECIALISATIONS */

  /***/
  function srcAppApiApiMedicEndpointsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_AUTH_TOKEN_URL", function () {
      return GET_AUTH_TOKEN_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_MEDIC_BASE_URL", function () {
      return API_MEDIC_BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GET_ALL_SYMPTOMS", function () {
      return GET_ALL_SYMPTOMS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SYMPTOMS", function () {
      return SYMPTOMS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ISSUES", function () {
      return ISSUES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIAGNOSIS", function () {
      return DIAGNOSIS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BODY_LOCATIONS", function () {
      return BODY_LOCATIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BODY_SUB_LOCATIONS", function () {
      return BODY_SUB_LOCATIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SYMPTOMS_IN_LOCATION", function () {
      return SYMPTOMS_IN_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ISSUE_INFO", function () {
      return ISSUE_INFO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PROPOSED_SYMPTOMS", function () {
      return PROPOSED_SYMPTOMS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RED_FLAG_TEXT", function () {
      return RED_FLAG_TEXT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPECIALISATIONS", function () {
      return SPECIALISATIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALL_SPECIALISATIONS", function () {
      return ALL_SPECIALISATIONS;
    });

    var GET_AUTH_TOKEN_URL = "https://sandbox-authservice.priaid.ch/login";
    var API_MEDIC_BASE_URL = "https://sandbox-healthservice.priaid.ch/";
    /* harmony default export */

    __webpack_exports__["default"] = {
      API_ENDPOINTS: {
        /* language=en-gb for English */
        getAllSymptoms: "symptoms?token={token}&language={language}",
        symptoms: "symptoms?token={token}&language={language}&sysmtoms={symtoms}",
        issues: "issues?token={token}&language={language}",
        diagnosis: "diagnosis?token={token}&language={language}&symptoms={symptoms}&gender={gender}&year_of_birth={yearOfBirth}",
        bodyLocations: "body/locations?token={token}&language={language}",
        bodySubLocations: "body/locations/{locationId}?token={token}&language={language}",
        symptomsInLocation: "symptoms/{locationId}/{selectorStatus}?token={token}&language={language}",
        // selectorStatus : man / woman / boy / girl
        issueInfo: "issues/{issueId}/info?token={token}&language={language}",
        proposedSymptoms: "symptoms/proposed?token={token}&language={language}&symptoms={symptoms}&gender={gender}&year_of_birth={yearOfBirth}",
        redFlagText: "redflag?symptomId={symptomId}&token={token}&language={language}",
        specialisations: "diagnosis/specialisations?token={token}&language={language}&symptoms={symptoms}&gender={gender}&year_of_birth={yearOfBirth}",
        allSpecisalisations: "specialisations?token={token}&language={language}"
      }
    };
    var GET_ALL_SYMPTOMS = "getAllSymptoms";
    var SYMPTOMS = "symptoms";
    var ISSUES = "issues";
    var DIAGNOSIS = "diagnosis";
    var BODY_LOCATIONS = "bodyLocations";
    var BODY_SUB_LOCATIONS = "bodySubLocations";
    var SYMPTOMS_IN_LOCATION = "symptomsInLocation";
    var ISSUE_INFO = "issueInfo";
    var PROPOSED_SYMPTOMS = "proposedSymptoms";
    var RED_FLAG_TEXT = "redFlagText";
    var SPECIALISATIONS = "specialisations";
    var ALL_SPECIALISATIONS = "allSpecisalisations";
    /***/
  },

  /***/
  "./src/app/api/api-medic-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/api/api-medic-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppApiApiMedicInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return ApiMedicInterceptor;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/.pnpm/rxjs@6.6.7/node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/.pnpm/rxjs@6.6.7/node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_medic_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api-medic-endpoints */
    "./src/app/api/api-medic-endpoints.ts");
    /* harmony import */


    var _api_medic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./api-medic.service */
    "./src/app/api/api-medic.service.ts");

    var ApiMedicInterceptor =
    /*#__PURE__*/
    function () {
      function ApiMedicInterceptor(api, http) {
        _classCallCheck(this, ApiMedicInterceptor);

        this.api = api;
        this.http = http;

        this.getRequestWithNewToken = function (req, newToken) {
          var url = req.url;
          url = url.replace(/token=[ A-Za-z0-9.{},-]*&/gi, "token=".concat(newToken, "&"));
          var newRequest = req.clone({
            url: url
          });
          return newRequest;
        };
      }

      _createClass(ApiMedicInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this = this;

          if (req.url.includes("login")) return next.handle(req);
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
              if (err.status === 400 || err.error === "Invalid token") {
                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                  'Authorization': 'Bearer mnkvmj@gmail.com:UdIh/BLgL1gkkmBgXWPZ8w=='
                });
                var options = {
                  headers: headers
                }; // GEBERATE NEW TOKEN IF TOKEN IS INVALID

                return _this.http.post(_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_4__["GET_AUTH_TOKEN_URL"], null, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response) {
                  var token = response["Token"];
                  localStorage.setItem("token", response["Token"]);

                  var newReq = _this.getRequestWithNewToken(req, token); // REDIRECT ORIGINAL REQUEST WITH NEW TOKEN


                  return next.handle(newReq);
                }));
              }
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
          }));
        }
      }]);

      return ApiMedicInterceptor;
    }();

    ApiMedicInterceptor.ɵfac = function ApiMedicInterceptor_Factory(t) {
      return new (t || ApiMedicInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_medic_service__WEBPACK_IMPORTED_MODULE_5__["ApiMedicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    ApiMedicInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ApiMedicInterceptor,
      factory: ApiMedicInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ApiMedicInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
      }], function () {
        return [{
          type: _api_medic_service__WEBPACK_IMPORTED_MODULE_5__["ApiMedicService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/api-medic.service.ts":
  /*!******************************************!*\
    !*** ./src/app/api/api-medic.service.ts ***!
    \******************************************/

  /*! exports provided: ApiMedicService */

  /***/
  function srcAppApiApiMedicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiMedicService", function () {
      return ApiMedicService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _api_medic_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api-medic-endpoints */
    "./src/app/api/api-medic-endpoints.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/.pnpm/rxjs@6.6.7/node_modules/rxjs/_esm2015/operators/index.js");

    var ApiMedicService =
    /*#__PURE__*/
    function () {
      function ApiMedicService(http) {
        _classCallCheck(this, ApiMedicService);

        this.http = http;
      }

      _createClass(ApiMedicService, [{
        key: "generateToken",
        value: function generateToken() {
          // TODO generate token - security issue
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': 'Bearer mnkvmj@gmail.com:UdIh/BLgL1gkkmBgXWPZ8w=='
          });
          var options = {
            headers: headers
          };
          return this.http.post(_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_AUTH_TOKEN_URL"], null, options).toPromise().then(function (response) {
            var token = response["Token"];
            localStorage.setItem("token", response["Token"]);
          });
        }
      }, {
        key: "get",
        value: function get(url, params) {
          return this.http.get(this.getURL(url, params)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "post",
        value: function post(url, params, data) {
          return this.http.post(this.getURL(url, params), data);
        }
      }, {
        key: "getURL",
        value: function getURL(endpoint, params) {
          return this.getParams(_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_2__["default"].API_ENDPOINTS[endpoint], params);
        }
      }, {
        key: "getParams",
        value: function getParams(url, params) {
          for (var key in params) {
            url = url.replace(new RegExp("\\{" + key + "\\}", "gm"), params[key]);
          }

          return _api_medic_endpoints__WEBPACK_IMPORTED_MODULE_2__["API_MEDIC_BASE_URL"] + url;
        }
      }]);

      return ApiMedicService;
    }();

    ApiMedicService.ɵfac = function ApiMedicService_Factory(t) {
      return new (t || ApiMedicService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiMedicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiMedicService,
      factory: ApiMedicService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiMedicService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/newsapi.service.ts":
  /*!****************************************!*\
    !*** ./src/app/api/newsapi.service.ts ***!
    \****************************************/

  /*! exports provided: NewsApiService */

  /***/
  function srcAppApiNewsapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsApiService", function () {
      return NewsApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/.pnpm/rxjs@6.6.7/node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NEWSAPI_KEY = "NEWSAPI_KEY";
    var NEWSAPI_URL = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=" + NEWSAPI_KEY;

    var NewsApiService =
    /*#__PURE__*/
    function () {
      function NewsApiService(http) {
        _classCallCheck(this, NewsApiService);

        this.http = http;
      }

      _createClass(NewsApiService, [{
        key: "getHealthNews",
        value: function getHealthNews() {
          return this.http.get(NEWSAPI_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            return response;
          }));
        }
      }]);

      return NewsApiService;
    }();

    NewsApiService.ɵfac = function NewsApiService_Factory(t) {
      return new (t || NewsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    NewsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NewsApiService,
      factory: NewsApiService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/.pnpm/@angular+router@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");
    /* harmony import */


    var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/account/account.component */
    "./src/app/pages/account/account.component.ts");

    var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["redirectUnauthorizedTo"])(['mayank-vamja/apps/medica/login']);
    };

    var redirectLoggedInToHome = function redirectLoggedInToHome() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["redirectLoggedInTo"])(['mayank-vamja/apps/medica/']);
    };

    var routes = [{
      path: "mayank-vamja/apps/medica/",
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToLogin,
        animation: 'Home'
      }
    }, {
      path: "mayank-vamja/apps/medica/profile",
      component: _pages_account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToLogin,
        animation: 'Profile'
      }
    }, {
      path: "mayank-vamja/apps/medica/login",
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectLoggedInToHome,
        animation: 'Login'
      }
    }, {
      path: "mayank-vamja/apps/medica/signup",
      component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectLoggedInToHome,
        animation: 'Signup'
      }
    }];

    var rootRouting = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);

    var AppRoutingModule =
    /*#__PURE__*/
    _createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[rootRouting, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [rootRouting, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/.pnpm/@angular+router@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _routin_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./routin-animation */
    "./src/app/routin-animation.ts");
    /* harmony import */


    var _common_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common/header/header.component */
    "./src/app/common/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/loader/loader.component */
    "./src/app/common/loader/loader.component.ts");

    function AppComponent_app_loader_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = "MEDICA";
        this.loading = true;
        this.router.events.subscribe(function (e) {
          _this2.navigationInterceptor(e);
        });
      }

      _createClass(AppComponent, [{
        key: "navigationInterceptor",
        value: function navigationInterceptor(event) {
          this.loading = event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"] ? true : event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ? false : event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ? false : event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"] ? false : false; // console.log("ROUTING EVENT STATUS : ", this.loading);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 2,
      consts: [["o", "outlet"], [4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_loader_4_Template, 1, 0, "app-loader", 1);
        }

        if (rf & 2) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r26 && _r26.activatedRouteData && _r26.activatedRouteData["animation"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [_routin_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"],
          animations: [_routin_animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/.pnpm/@angular+platform-browser@9.0.7_cp2r37eicezf35xgtpsmxjy3qq/node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/.pnpm/@angular+platform-browser@9.0.7_cp2r37eicezf35xgtpsmxjy3qq/node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common/header/header.component */
    "./src/app/common/header/header.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/.pnpm/@angular+router@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/.pnpm/@angular+forms@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _common_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./common/chat-bubble/chat-bubble.component */
    "./src/app/common/chat-bubble/chat-bubble.component.ts");
    /* harmony import */


    var _api_api_medic_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./api/api-medic-interceptor.service */
    "./src/app/api/api-medic-interceptor.service.ts");
    /* harmony import */


    var _common_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./common/news-list/news-list.component */
    "./src/app/common/news-list/news-list.component.ts");
    /* harmony import */


    var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/account/account.component */
    "./src/app/pages/account/account.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/.pnpm/@angular+material@9.2.4_mx6bxfplmya5mlvprzsnvhebwu/node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/.pnpm/@angular+material@9.2.4_mx6bxfplmya5mlvprzsnvhebwu/node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./common/loader/loader.component */
    "./src/app/common/loader/loader.component.ts");

    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _api_api_medic_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["default"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _common_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_16__["ChatBubbleComponent"], _common_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_18__["NewsListComponent"], _pages_account_account_component__WEBPACK_IMPORTED_MODULE_19__["AccountComponent"], _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _common_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_16__["ChatBubbleComponent"], _common_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_18__["NewsListComponent"], _pages_account_account_component__WEBPACK_IMPORTED_MODULE_19__["AccountComponent"], _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
            useClass: _api_api_medic_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["default"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/chat-bubble/chat-bubble.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/common/chat-bubble/chat-bubble.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChatBubbleComponent */

  /***/
  function srcAppCommonChatBubbleChatBubbleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatBubbleComponent", function () {
      return ChatBubbleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/.pnpm/@angular+animations@9.0.7_522udmzy5toq5nuxkixl4id3be/node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ChatBubbleComponent =
    /*#__PURE__*/
    function () {
      // audio;
      function ChatBubbleComponent(ref) {
        _classCallCheck(this, ChatBubbleComponent);

        this.ref = ref;
        this.animationState = "shrink";
      }

      _createClass(ChatBubbleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!(this.date instanceof Date)) this.dateText = moment__WEBPACK_IMPORTED_MODULE_2__(this.date.toDate()).fromNow();else this.dateText = moment__WEBPACK_IMPORTED_MODULE_2__(this.date).fromNow();
          this.userText = this.from == "USER" ? "You" : "Medica"; // this.audio = new Audio();
          // this.audio.src = this.from == "USER" ? "../../../assets/sounds/sound_out.wav" : "../../../assets/sounds/sound_in.wav";
          // this.audio.load();
          // this.audio.play();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.animationState = this.animationState === "shrink" ? "normal" : this.animationState;
          this.ref.detectChanges();
        }
      }]);

      return ChatBubbleComponent;
    }();

    ChatBubbleComponent.ɵfac = function ChatBubbleComponent_Factory(t) {
      return new (t || ChatBubbleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    ChatBubbleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatBubbleComponent,
      selectors: [["app-chat-bubble"]],
      inputs: {
        message: "message",
        from: "from",
        date: "date"
      },
      decls: 7,
      vars: 6,
      consts: [[1, "chat-bubble-wrapper", "d-flex", 3, "ngClass"], [1, "chat-bubble", 3, "ngClass"], [1, "chat-username"], [1, "chat-message", 3, "innerHTML"], [1, "text-right", "chat-date"]],
      template: function ChatBubbleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bubble", ctx.animationState)("ngClass", ctx.from === "USER" ? "justify-content-end" : "justify-content-start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.from === "USER" ? "chat-arrow-right" : "chat-arrow-left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dateText);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".chat-arrow-right[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.chat-arrow-right[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-left: 8px solid #fff;\n  border-top: none;\n  position: absolute;\n  top: 8px;\n  left: 100%;\n}\n.chat-arrow-left[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.chat-arrow-left[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  border: 8px solid transparent;\n  border-right: 8px solid #fff;\n  border-top: none;\n  position: absolute;\n  top: 8px;\n  left: -16px;\n}\n.chat-bubble-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  padding-bottom: 0;\n}\n.chat-bubble-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.chat-bubble-wrapper[_ngcontent-%COMP%]   .chat-bubble[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 70%;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.09);\n  position: relative;\n}\n.chat-bubble-wrapper[_ngcontent-%COMP%]   .chat-bubble[_ngcontent-%COMP%]   .chat-username[_ngcontent-%COMP%] {\n  color: #C3073F;\n  font-size: small;\n  font-weight: bold;\n}\n.chat-bubble-wrapper[_ngcontent-%COMP%]   .chat-bubble[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 18px;\n}\n.chat-bubble-wrapper[_ngcontent-%COMP%]   .chat-bubble[_ngcontent-%COMP%]   .chat-date[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: smaller;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3JlcG9zaXRvcmllcy9tZWRpY2EtYW5ndWxhci9zcmMvYXBwL2NvbW1vbi9jaGF0LWJ1YmJsZS9jaGF0LWJ1YmJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2NoYXQtYnViYmxlL2NoYXQtYnViYmxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FwcGxlL0Rlc2t0b3AvcmVwb3NpdG9yaWVzL21lZGljYS1hbmd1bGFyL3NyYy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usb0JBQUE7QUNERjtBREVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNBSjtBRElBO0VBQ0UsaUJBQUE7QUNERjtBREVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNBSjtBRElBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0RGO0FERUU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ0FKO0FERUU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0UsY0U5Q1M7RUYrQ1QsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FOO0FERUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jaGF0LWJ1YmJsZS9jaGF0LWJ1YmJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS5zY3NzXCI7XG5cbi5jaGF0LWFycm93LXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwOyBcbiAgICBoZWlnaHQ6IDA7IFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG59XG5cbi5jaGF0LWFycm93LWxlZnQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwOyBcbiAgICBoZWlnaHQ6IDA7IFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogLTE2cHg7XG4gIH1cbn1cblxuLmNoYXQtYnViYmxlLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHAge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5jaGF0LWJ1YmJsZSB7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4wOSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmNoYXQtdXNlcm5hbWUge1xuICAgICAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XG4gICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5jaGF0LW1lc3NhZ2Uge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAuY2hhdC1kYXRlIHtcbiAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIH1cbiAgfVxufSIsIi5jaGF0LWFycm93LXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uY2hhdC1hcnJvdy1yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDEwMCU7XG59XG5cbi5jaGF0LWFycm93LWxlZnQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5jaGF0LWFycm93LWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogLTE2cHg7XG59XG5cbi5jaGF0LWJ1YmJsZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmNoYXQtYnViYmxlLXdyYXBwZXIgcCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jaGF0LWJ1YmJsZS13cmFwcGVyIC5jaGF0LWJ1YmJsZSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogNzAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGF0LWJ1YmJsZS13cmFwcGVyIC5jaGF0LWJ1YmJsZSAuY2hhdC11c2VybmFtZSB7XG4gIGNvbG9yOiAjQzMwNzNGO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jaGF0LWJ1YmJsZS13cmFwcGVyIC5jaGF0LWJ1YmJsZSAuY2hhdC1tZXNzYWdlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY2hhdC1idWJibGUtd3JhcHBlciAuY2hhdC1idWJibGUgLmNoYXQtZGF0ZSB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59IiwiJGJvZHlDb2xvcjogI0Y2RjVGQTtcbiR3aGl0ZUNvbG9yOiAjZmZmZmZmO1xuJGJnTGlnaHRDb2xvcjogI0UzRTJERjtcbiRiZ0xpZ2h0Q29sb3JBbHQ6ICNFM0NGREM7XG4vLyAzOTMxYWZcbi8vIFxuJHByaW1hcnlDb2xvcjogI0MzMDczRjtcbiRwcmltYXJ5QWx0Q29sb3I6ICNmZjE3NDQ7XG4kcHJpbWFyeURhcmtDb2xvcjogIzlBMTc1MDtcbiRwcmltYXJ5TGlnaHRDb2xvcjogI0VFNEM3QztcbiRzZWNvbmRhcnlDb2xvcjogI0U2NDM5ODtcbiRzZWNvbmRhcnlMaWdodENvbG9yOiAjRTc3MTdEO1xuJHByaW1hcnlUZXh0OiAjMkQwMDBFO1xuXG4vLyBUZXh0ICYgQm9yZGVyIFNoYWRlXG4kdGV4dFNoYWRlMTogIzkyOEZBMDtcbiR0ZXh0U2hhZGUyOiAjQjRCMEM4O1xuJHRleHRTaGFkZTM6ICNCOEI0Q0M7XG4kdGV4dFNoYWRlNDogJGJvZHlDb2xvcjtcbiR0ZXh0U2hhZGU1OiAjREREREREOyJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bubble', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shrink', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1.1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'scale(1)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shrink <=> normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatBubbleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-bubble',
          templateUrl: './chat-bubble.component.html',
          styleUrls: ['./chat-bubble.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bubble', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shrink', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1.1)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'scale(1)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shrink <=> normal', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s')])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        from: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/common/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCommonHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/.pnpm/@angular+router@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_7_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.route("mayank-vamja/apps/medica/login");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_8_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.route("mayank-vamja/apps/medica/signup");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.route("mayank-vamja/apps/medica/");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.route("mayank-vamja/apps/medica/profile");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_11_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router, af) {
        var _this3 = this;

        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.af = af;
        this.isLoggedIn = false;
        this.af.authState.subscribe(function (auth) {
          if (auth) {
            _this3.isLoggedIn = true;
          }
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "route",
        value: function route(path) {
          this.router.navigateByUrl(path);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          this.af.signOut().then(function (success) {
            _this4.isLoggedIn = false;

            _this4.router.navigateByUrl("/login");
          })["catch"](function (err) {
            return console.log(err);
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 12,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "justify-content-start"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["rounterLink", "mayank-vamja/apps/medica/", 1, "navbar-brand", "text-primary"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MEDICA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_li_11_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".navbar-toggler[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3JlcG9zaXRvcmllcy9tZWRpY2EtYW5ndWxhci9zcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbiIsIi5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-header",
          templateUrl: "./header.component.html",
          styleUrls: ["./header.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/loader/loader.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/common/loader/loader.component.ts ***!
    \***************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppCommonLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };

    LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      decls: 2,
      vars: 0,
      consts: [[1, "loader-wrapper", "d-flex", "flex-column", "justify-content-center"], ["src", "../../../assets/images/loader.svg", "height", "120", "width", "120"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".loader-wrapper[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n}\n.loader-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3JlcG9zaXRvcmllcy9tZWRpY2EtYW5ndWxhci9zcmMvYXBwL2NvbW1vbi9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICBpbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSIsIi5sb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubG9hZGVyLXdyYXBwZXIgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loader',
          templateUrl: './loader.component.html',
          styleUrls: ['./loader.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/news-list/news-list.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/common/news-list/news-list.component.ts ***!
    \*********************************************************/

  /*! exports provided: NewsListComponent */

  /***/
  function srcAppCommonNewsListNewsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsListComponent", function () {
      return NewsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _api_newsapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/newsapi.service */
    "./src/app/api/newsapi.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function NewsListComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var news_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, news_r46.urlToImage));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r46.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r46.publishedAt);
      }
    }

    function NewsListComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "News can not be loaded.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Make sure you have good internet connection.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Try after sometimw or click below button.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsListComponent_div_7_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.fetchNews();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Retry");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NewsListComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NewsListComponent =
    /*#__PURE__*/
    function () {
      function NewsListComponent(news, ref) {
        _classCallCheck(this, NewsListComponent);

        this.news = news;
        this.ref = ref;
        this.newsArticles = [];
        this.isLoadingNews = false;
        this.fetchNews();
      }

      _createClass(NewsListComponent, [{
        key: "fetchNews",
        value: function fetchNews() {
          var _this5 = this;

          this.isLoadingNews = true;
          this.news.getHealthNews().subscribe(function (data) {
            _this5.newsArticles = data.articles.map(function (article) {
              return Object.assign(Object.assign({}, article), {
                urlToImage: "url(\"".concat(article.urlToImage, "\")"),
                publishedAt: moment__WEBPACK_IMPORTED_MODULE_1__(article.publishedAt).fromNow()
              });
            });
            _this5.isLoadingNews = false;

            _this5.ref.detectChanges();
          }, function (err) {
            _this5.isLoadingNews = false;

            _this5.ref.detectChanges();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsListComponent;
    }();

    NewsListComponent.ɵfac = function NewsListComponent_Factory(t) {
      return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsListComponent,
      selectors: [["app-news-list"]],
      decls: 9,
      vars: 3,
      consts: [["id", "news-list-wrapper", "clas", "news-wrapper position-relative"], [1, "news-list", "position-absolute"], [1, "p-3", "text-primary"], [4, "ngFor", "ngForOf"], ["class", "news-loader position-absolute text-center d-flex flex-column justify-content-center top-0 h-100 w-100", 4, "ngIf"], [1, "news-card", "d-flex", "flex-row", "justify-content-start"], [1, "news-image", 3, "ngStyle"], [1, "news-info"], [1, "news-title"], [1, "news-date", "text-right"], [1, "news-loader", "position-absolute", "text-center", "d-flex", "flex-column", "justify-content-center", "top-0", "h-100", "w-100"], [1, "text-center"], [1, "btn", "btn-lg", "btn-primary", 3, "click"], [1, "sr-only"], ["role", "status", 1, "spinner-grow"]],
      template: function NewsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Health Related News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewsListComponent_li_6_Template, 8, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsListComponent_div_7_Template, 13, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NewsListComponent_div_8_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsArticles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsArticles.length === 0 && !ctx.isLoadingNews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadingNews);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
      styles: [".news-list {\n  padding: 0;\n  list-style-type: none;\n}\n.news-list .news-card {\n  cursor: pointer;\n  overflow: hidden;\n  margin: 10px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);\n}\n.news-list .news-card .news-image {\n  width: 100px;\n  min-height: 100px;\n  background-size: cover;\n  background-position: center;\n}\n.news-list .news-card p {\n  margin: 0;\n  line-height: 1.3;\n}\n.news-list .news-card .news-info {\n  width: calc(100% - 100px);\n  padding: 5px;\n}\n.news-list .news-card .news-info .news-title {\n  font-size: 14px;\n}\n.news-list .news-card .news-info .news-date {\n  font-size: smaller;\n  color: grey;\n}\n.news-loader {\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.spinner-grow {\n  color: #C3073F;\n  margin: auto;\n  width: 5rem;\n  height: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3JlcG9zaXRvcmllcy9tZWRpY2EtYW5ndWxhci9zcmMvYXBwL2NvbW1vbi9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3JlcG9zaXRvcmllcy9tZWRpY2EtYW5ndWxhci9zcmMvdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQ0RGO0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FDQUo7QURFSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBTjtBREVJO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FDQU47QURFSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0FOO0FEQ007RUFDRSxlQUFBO0FDQ1I7QURDTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FES0E7RUFDRSwwQ0FBQTtBQ0ZGO0FES0E7RUFDRSxjRXBDYTtFRnFDYixZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lLnNjc3NcIjtcblxuLm5ld3MtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgLm5ld3MtY2FyZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4wOCk7XG5cbiAgICAubmV3cy1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgfVxuICAgIHB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cbiAgICAubmV3cy1pbmZvIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAubmV3cy10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5uZXdzLWRhdGUge1xuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubmV3cy1sb2FkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjQpO1xufVxuXG4uc3Bpbm5lci1ncm93IHtcbiAgY29sb3I6ICRwcmltYXJ5Q29sb3I7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbn0iLCIubmV3cy1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLm5ld3MtbGlzdCAubmV3cy1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5uZXdzLWxpc3QgLm5ld3MtY2FyZCAubmV3cy1pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5uZXdzLWxpc3QgLm5ld3MtY2FyZCBwIHtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLm5ld3MtbGlzdCAubmV3cy1jYXJkIC5uZXdzLWluZm8ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubmV3cy1saXN0IC5uZXdzLWNhcmQgLm5ld3MtaW5mbyAubmV3cy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5uZXdzLWxpc3QgLm5ld3MtY2FyZCAubmV3cy1pbmZvIC5uZXdzLWRhdGUge1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubmV3cy1sb2FkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5cbi5zcGlubmVyLWdyb3cge1xuICBjb2xvcjogI0MzMDczRjtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xufSIsIiRib2R5Q29sb3I6ICNGNkY1RkE7XG4kd2hpdGVDb2xvcjogI2ZmZmZmZjtcbiRiZ0xpZ2h0Q29sb3I6ICNFM0UyREY7XG4kYmdMaWdodENvbG9yQWx0OiAjRTNDRkRDO1xuLy8gMzkzMWFmXG4vLyBcbiRwcmltYXJ5Q29sb3I6ICNDMzA3M0Y7XG4kcHJpbWFyeUFsdENvbG9yOiAjZmYxNzQ0O1xuJHByaW1hcnlEYXJrQ29sb3I6ICM5QTE3NTA7XG4kcHJpbWFyeUxpZ2h0Q29sb3I6ICNFRTRDN0M7XG4kc2Vjb25kYXJ5Q29sb3I6ICNFNjQzOTg7XG4kc2Vjb25kYXJ5TGlnaHRDb2xvcjogI0U3NzE3RDtcbiRwcmltYXJ5VGV4dDogIzJEMDAwRTtcblxuLy8gVGV4dCAmIEJvcmRlciBTaGFkZVxuJHRleHRTaGFkZTE6ICM5MjhGQTA7XG4kdGV4dFNoYWRlMjogI0I0QjBDODtcbiR0ZXh0U2hhZGUzOiAjQjhCNENDO1xuJHRleHRTaGFkZTQ6ICRib2R5Q29sb3I7XG4kdGV4dFNoYWRlNTogI0RERERERDsiXX0= */"],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-news-list",
          templateUrl: "./news-list.component.html",
          styleUrls: ["./news-list.component.scss"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _api_newsapi_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/account/account.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/account/account.component.ts ***!
    \****************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppPagesAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var croppie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! croppie */
    "./node_modules/.pnpm/croppie@2.6.5/node_modules/croppie/croppie.js");
    /* harmony import */


    var croppie__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_firebase_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase-firestore.service */
    "./src/app/services/firebase-firestore.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/.pnpm/@angular+material@9.2.4_mx6bxfplmya5mlvprzsnvhebwu/node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../common/loader/loader.component */
    "./src/app/common/loader/loader.component.ts");

    function AccountComponent_a_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_a_30_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.changeGender("Male");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Male");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_a_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_a_31_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.changeGender("Female");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Female");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_a_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_a_32_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.changeGender("Other");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Other");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_app_loader_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
      }
    }

    var _c0 = function _c0() {
      return {
        "visibility": "hidden"
      };
    };

    var AccountComponent =
    /*#__PURE__*/
    function () {
      function AccountComponent(ref, firestore) {
        var _this6 = this;

        _classCallCheck(this, AccountComponent);

        this.ref = ref;
        this.firestore = firestore;
        this.maxDate = new Date();
        this.dob = "Data Not Available";
        this.gender = "Data Not Available";
        this.name = "Unavailable";
        this.isReadOnly = true;
        this.profilePictureSrc = "../../../assets/images/no-dp-preview.png";
        this.isLoading = true;
        this.firestore.onGetUserData.subscribe(function (received) {
          if (!_this6.firestore.user) return;
          var _this6$firestore$user = _this6.firestore.user,
              birthdate = _this6$firestore$user.birthdate,
              gender = _this6$firestore$user.gender,
              name = _this6$firestore$user.name,
              profilePicture = _this6$firestore$user.profilePicture;
          if (birthdate.length) _this6.dob = birthdate;
          if (gender.length) _this6.gender = gender;
          if (name.length) _this6.name = name;
          if (profilePicture.length) _this6.profilePictureSrc = profilePicture;

          _this6.crop.bind({
            url: _this6.profilePictureSrc
          })["catch"](function (err) {});

          ;
          _this6.isLoading = false;
        }, function (err) {
          _this6.isLoading = false;
        });
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.crop = new croppie__WEBPACK_IMPORTED_MODULE_2___default.a(document.getElementById("selected-image"), {
            enableExif: true,
            viewport: {
              width: 200,
              height: 200,
              type: 'circle'
            },
            boundary: {
              width: 300,
              height: 300
            }
          });
          this.firestore.getUserData();
        }
      }, {
        key: "dobChange",
        value: function dobChange(event) {
          this.dob = moment__WEBPACK_IMPORTED_MODULE_1__(event.value).format("DD MMM, YYYY");
          var currentYear = +new Date().getFullYear();
          var yearOfBirth = +this.dob.slice(-4);
          var age = currentYear - yearOfBirth;
          var isAdult = age >= 18;
          this.firestore.updateData({
            birthdate: this.dob,
            yearOfBirth: yearOfBirth,
            isAdult: isAdult
          });
        }
      }, {
        key: "changeGender",
        value: function changeGender(val) {
          this.gender = val;
          this.firestore.updateData({
            gender: val
          });
        }
      }, {
        key: "updateName",
        value: function updateName(val) {
          this.name = val;
          this.firestore.updateData({
            name: val
          });
          this.enableEditName(false);
          this.ref.detectChanges();
        }
      }, {
        key: "enableEditName",
        value: function enableEditName(isEnabled) {
          this.isReadOnly = !isEnabled;
          this.ref.detectChanges();
        }
      }, {
        key: "openDatePicker",
        value: function openDatePicker(dobPicker) {
          dobPicker.open();
        }
      }, {
        key: "imageSelected",
        value: function imageSelected(event) {
          this.crop.bind({
            url: URL.createObjectURL(event.target.files[0]),
            points: [77, 469, 280, 739]
          })["catch"](function (err) {});
        }
      }, {
        key: "updateImage",
        value: function updateImage() {
          var _this7 = this;

          this.crop.result({
            type: 'base64',
            circle: false
          }).then(function (base64) {
            return _this7.firestore.updateData({
              profilePicture: base64
            });
          });
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_firebase_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseFirestore"]));
    };

    AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["ng-component"]],
      decls: 52,
      vars: 14,
      consts: [[1, "profile-header-bg"], [1, "container"], [1, "m-2", "profile-wrapper"], [1, "profile-image-container"], [1, "profile-image", 3, "src"], ["src", "../../../assets/images/ic-camera.svg", "data-toggle", "modal", "data-target", "#imageUploadModal", 1, "profile-image-edit"], [1, "text-center", "profile-name"], [1, "", 3, "value", "disabled", "keyup.enter", "blur"], ["nameBox", ""], ["src", "../../../assets/images/ic-edit.svg", 1, "rounded-border-img", 3, "ngStyle", "click"], [1, "text-center"], [1, "chip"], ["src", "../../../assets/images/ic_email.svg"], [1, "list-group", "list-group-flush", "mt-3"], [1, "list-group-item"], [1, "float-right"], [1, "d-none", 3, "max", "matDatepicker", "dateChange"], ["touchUi", ""], ["dobPicker", ""], ["src", "../../../assets/images/ic-edit.svg", 1, "ml-2", "float-right", "rounded-border-img", 3, "click"], ["src", "../../../assets/images/ic-edit.svg", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "ml-2", "float-right", "rounded-border-img", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], ["id", "imageUploadModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "imageUpload", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "imageUpload", 1, "modal-title", "text-primary"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "custom-file", "mb-3"], ["type", "file", "id", "inputGroupFile", "accept", "image/*", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile", 1, "custom-file-label"], ["id", "selected-image"], ["data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [4, "ngIf"], [1, "dropdown-item", 3, "click"]],
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AccountComponent_Template_input_keyup_enter_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.updateName(_r13.value);
          })("blur", function AccountComponent_Template_input_blur_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            return ctx.updateName(_r13.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_img_click_9_listener() {
            return ctx.enableEditName(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Date of birth ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function AccountComponent_Template_input_dateChange_20_listener($event) {
            return ctx.dobChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-datepicker", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_img_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.openDatePicker(_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AccountComponent_a_30_Template, 2, 0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AccountComponent_a_31_Template, 2, 0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AccountComponent_a_32_Template, 2, 0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Select Profile Picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccountComponent_Template_input_change_44_listener($event) {
            return ctx.imageSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Choose image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_49_listener() {
            return ctx.updateImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AccountComponent_app_loader_51_Template, 1, 0, "app-loader", 36);
        }

        if (rf & 2) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profilePictureSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.name)("disabled", ctx.isReadOnly);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", !ctx.isReadOnly && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.firestore.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.dob, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", ctx.maxDate)("matDatepicker", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.gender, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gender !== "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gender !== "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gender !== "Other");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"]],
      styles: ["@charset \"UTF-8\";\n.profile-header-bg {\n  position: relative;\n  height: 30%;\n  min-height: 150px;\n  background-color: #ff1744;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23404' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23505'%3E%3Ccircle cx='769' cy='229' r='9'/%3E%3Ccircle cx='539' cy='269' r='9'/%3E%3Ccircle cx='603' cy='493' r='9'/%3E%3Ccircle cx='731' cy='737' r='9'/%3E%3Ccircle cx='520' cy='660' r='9'/%3E%3Ccircle cx='309' cy='538' r='9'/%3E%3Ccircle cx='295' cy='764' r='9'/%3E%3Ccircle cx='40' cy='599' r='9'/%3E%3Ccircle cx='102' cy='382' r='9'/%3E%3Ccircle cx='127' cy='80' r='9'/%3E%3Ccircle cx='370' cy='105' r='9'/%3E%3Ccircle cx='578' cy='42' r='9'/%3E%3Ccircle cx='237' cy='261' r='9'/%3E%3Ccircle cx='390' cy='382' r='9'/%3E%3C/g%3E%3C/svg%3E\");\n  background-size: contain;\n}\n.profile-header-bg:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 100%;\n  left: 0;\n  right: 0;\n  bottom: -8px;\n  z-index: -1;\n  transform-origin: 100%;\n  border-bottom: 2px solid #ff1744;\n}\n.profile-wrapper {\n  transform: translateY(-90px);\n}\n.profile-wrapper .profile-image-container {\n  padding: 5px;\n  height: 166px;\n  width: 166px;\n  border: 3px solid white;\n  border-radius: 50%;\n  margin: auto;\n  position: relative;\n}\n.profile-wrapper .profile-image-container .profile-image {\n  height: 150px;\n  width: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n}\n.profile-wrapper .profile-image-container .profile-image-edit {\n  position: absolute;\n  bottom: 10px;\n  right: 15px;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  padding: 5px;\n  background-color: white;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n.profile-wrapper .profile-image-container .profile-image-edit:hover {\n  background-color: #efe !important;\n}\n.profile-wrapper .profile-name {\n  padding: 10px;\n}\n.profile-wrapper .profile-name input {\n  text-align: center;\n  transform: translateX(20px);\n  z-index: 1;\n  border: 1px solid #E64398;\n  box-shadow: 0 0 0 0.2rem rgba(230, 67, 152, 0.5);\n  border-radius: 8px;\n}\n.profile-wrapper .profile-name input:disabled {\n  border: none;\n  outline: none;\n  box-shadow: none;\n  background: transparent;\n}\n.profile-wrapper .profile-name img {\n  visibility: hidden;\n  z-index: 11;\n}\n.profile-wrapper .profile-name:hover {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n}\n.profile-wrapper .profile-name:hover img {\n  visibility: visible;\n  transform: translateX(20px);\n  transition: all 0.5s;\n}\n.profile-wrapper ul {\n  max-width: 400px;\n  margin: auto;\n}\n.profile-wrapper ul li {\n  line-height: 40px;\n  margin: 8px 0;\n  padding: 8px;\n}\n.profile-wrapper ul li:hover {\n  background: white;\n  border: none;\n  border-radius: 8px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);\n  transition: all 0.1s;\n}\n.rounded-border-img {\n  height: 40px;\n  width: 40px;\n  padding: 8px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 50%;\n  border: 1px solid black;\n  opacity: 0.7;\n  cursor: pointer;\n}\n.rounded-border-img:hover {\n  opacity: 1;\n}\n.chip {\n  border-radius: 50px;\n  padding: 4px 10px;\n  background-color: #E3E2DF;\n  display: inline;\n}\n.chip img {\n  vertical-align: unset;\n  margin-right: 8px;\n}\n.chip img:hover {\n  filter: brightness(70%);\n}\n.croppie-container {\n  width: 100%;\n  height: 100%;\n}\n.croppie-container .cr-image {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-origin: 0 0;\n  max-height: none;\n  max-width: none;\n}\n.croppie-container .cr-boundary {\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n}\n.croppie-container .cr-viewport,\n.croppie-container .cr-resizer {\n  position: absolute;\n  border: 2px solid #fff;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  box-shadow: 0 0 2000px 2000px rgba(0, 0, 0, 0.5);\n  z-index: 0;\n}\n.croppie-container .cr-resizer {\n  z-index: 2;\n  box-shadow: none;\n  pointer-events: none;\n}\n.croppie-container .cr-resizer-vertical,\n.croppie-container .cr-resizer-horisontal {\n  position: absolute;\n  pointer-events: all;\n}\n.croppie-container .cr-resizer-vertical::after,\n.croppie-container .cr-resizer-horisontal::after {\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  border: 1px solid black;\n  background: #fff;\n  width: 10px;\n  height: 10px;\n  content: \"\";\n}\n.croppie-container .cr-resizer-vertical {\n  bottom: -5px;\n  cursor: row-resize;\n  width: 100%;\n  height: 10px;\n}\n.croppie-container .cr-resizer-vertical::after {\n  left: 50%;\n  margin-left: -5px;\n}\n.croppie-container .cr-resizer-horisontal {\n  right: -5px;\n  cursor: col-resize;\n  width: 10px;\n  height: 100%;\n}\n.croppie-container .cr-resizer-horisontal::after {\n  top: 50%;\n  margin-top: -5px;\n}\n.croppie-container .cr-original-image {\n  display: none;\n}\n.croppie-container .cr-vp-circle {\n  border-radius: 50%;\n}\n.croppie-container .cr-overlay {\n  z-index: 1;\n  position: absolute;\n  cursor: move;\n  touch-action: none;\n}\n.croppie-container .cr-slider-wrap {\n  width: 75%;\n  margin: 15px auto;\n  text-align: center;\n}\n.croppie-result {\n  position: relative;\n  overflow: hidden;\n}\n.croppie-result img {\n  position: absolute;\n}\n.croppie-container .cr-image,\n.croppie-container .cr-overlay,\n.croppie-container .cr-viewport {\n  transform: translateZ(0);\n  outline: none;\n}\n/*************************************/\n/***** STYLING RANGE INPUT ***********/\n/*************************************/\n/*http://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html */\n/*************************************/\n.cr-slider {\n  -webkit-appearance: none;\n  /*removes default webkit styles*/\n  /*border: 1px solid white; */\n  /*fix for FF unable to apply focus style bug */\n  width: 300px;\n  /*required for proper track sizing in FF*/\n  max-width: 100%;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  background-color: transparent;\n}\n.cr-slider::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 3px;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0;\n  border-radius: 3px;\n}\n.cr-slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: #ddd;\n  margin-top: -6px;\n}\n.cr-slider:focus {\n  outline: none;\n}\n/*\n.cr-slider:focus::-webkit-slider-runnable-track {\nbackground: #ccc;\n}\n*/\n.cr-slider::-moz-range-track {\n  width: 100%;\n  height: 3px;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0;\n  border-radius: 3px;\n}\n.cr-slider::-moz-range-thumb {\n  border: none;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: #ddd;\n  margin-top: -6px;\n}\n/*hide the outline behind the border*/\n.cr-slider:-moz-focusring {\n  outline: 1px solid white;\n  outline-offset: -1px;\n}\n.cr-slider::-ms-track {\n  width: 100%;\n  height: 5px;\n  background: transparent;\n  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */\n  border-color: transparent;\n  /*leave room for the larger thumb to overflow with a transparent border */\n  border-width: 6px 0;\n  color: transparent;\n  /*remove default tick marks*/\n}\n.cr-slider::-ms-fill-lower {\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n}\n.cr-slider::-ms-fill-upper {\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n}\n.cr-slider::-ms-thumb {\n  border: none;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: #ddd;\n  margin-top: 1px;\n}\n.cr-slider:focus::-ms-fill-lower {\n  background: rgba(0, 0, 0, 0.5);\n}\n.cr-slider:focus::-ms-fill-upper {\n  background: rgba(0, 0, 0, 0.5);\n}\n/*******************************************/\n/***********************************/\n/* Rotation Tools */\n/***********************************/\n.cr-rotate-controls {\n  position: absolute;\n  bottom: 5px;\n  left: 5px;\n  z-index: 1;\n}\n.cr-rotate-controls button {\n  border: 0;\n  background: none;\n}\n.cr-rotate-controls i:before {\n  display: inline-block;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 22px;\n}\n.cr-rotate-l i:before {\n  content: \"\u21BA\";\n}\n.cr-rotate-r i:before {\n  content: \"\u21BB\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FwcGxlL0Rlc2t0b3AvcmVwb3NpdG9yaWVzL21lZGljYS1hbmd1bGFyL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FwcGxlL0Rlc2t0b3AvcmVwb3NpdG9yaWVzL21lZGljYS1hbmd1bGFyL3NyYy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0loQjtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJDRGdCO0VERWhCLHU1Q0FBQTtFQUNBLHdCQUFBO0FERkY7QUNHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QURESjtBQ01BO0VBQ0UsNEJBQUE7QURIRjtBQ0lFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBREZKO0FDR0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FERE47QUNHSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtFQUNBLHVDQUFBO0FERE47QUNFTTtFQUNFLGlDQUFBO0FEQVI7QUNJRTtFQUNFLGFBQUE7QURGSjtBQ0dJO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QURETjtBQ0dJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FERE47QUNHSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBREROO0FDR0k7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7QURETjtBQ0VNO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FEQVI7QUNJRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBREZKO0FDR0k7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FERE47QUNFTTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtBREFSO0FDTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0VBQ0EsMEJBQUE7S0FBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBREhGO0FDSUU7RUFDRSxVQUFBO0FERko7QUNPQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkM3SGE7RUQ4SGIsZUFBQTtBREpGO0FDS0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FESEo7QUNJSTtFQUFVLHVCQUFBO0FERGQ7QUNPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FESko7QUNPQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURKSjtBQ09BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURKSjtBQ09BOztFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGdEQUFBO0VBQ0EsVUFBQTtBREpKO0FDT0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBREpGO0FDT0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBREpGO0FDT0E7O0VBRUksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FESko7QUNPQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FESkY7QUNPQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtBREpKO0FDT0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBREpGO0FDT0E7RUFDSSxRQUFBO0VBQ0EsZ0JBQUE7QURKSjtBQ09BO0VBQ0ksYUFBQTtBREpKO0FDT0E7RUFDSSxrQkFBQTtBREpKO0FDT0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURKSjtBQ09BO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURKSjtBQ09BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBREpKO0FDT0E7RUFDSSxrQkFBQTtBREpKO0FDT0E7OztFQU1JLHdCQUFBO0VBQ0EsYUFBQTtBREpKO0FDT0Esc0NBQUE7QUFDQSxzQ0FBQTtBQUNBLHNDQUFBO0FBQ0EscUZBQUE7QUFDQSxzQ0FBQTtBQUVBO0VBQ0ksd0JBQUE7RUFDSixnQ0FBQTtFQUNDLDRCQUFBO0VBQTZCLDhDQUFBO0VBQzFCLFlBQUE7RUFDSix5Q0FBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QURKSjtBQ09BO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBREpKO0FDT0E7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBREpKO0FDT0E7RUFDSSxhQUFBO0FESko7QUNNQTs7OztDQUFBO0FBTUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FESko7QUNPQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBREpKO0FDT0EscUNBQUE7QUFDQTtFQUNJLHdCQUFBO0VBQ0Esb0JBQUE7QURKSjtBQ09BO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNKLHNGQUFBO0VBQ0MseUJBQUE7RUFBMEIseUVBQUE7RUFDMUIsbUJBQUE7RUFDQSxrQkFBQTtFQUFtQiw0QkFBQTtBREZwQjtBQ0lBO0VBQ0MsOEJBQUE7RUFDQSxtQkFBQTtBREREO0FDR0E7RUFDQyw4QkFBQTtFQUNBLG1CQUFBO0FEQUQ7QUNFQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEQ0Q7QUNDQTtFQUNDLDhCQUFBO0FERUQ7QUNBQTtFQUNDLDhCQUFBO0FER0Q7QUNEQSw0Q0FBQTtBQUVBLG9DQUFBO0FBQ0EsbUJBQUE7QUFDQSxvQ0FBQTtBQUNBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURHRDtBQ0RBO0VBQ0MsU0FBQTtFQUNBLGdCQUFBO0FESUQ7QUNGQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURLRDtBQ0hBO0VBQ0MsWUFBQTtBRE1EO0FDSkE7RUFDQyxZQUFBO0FET0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvZmlsZS1oZWFkZXItYmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAlO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMTc0NDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyODAnIGhlaWdodD0nMjgwJyB2aWV3Qm94PScwIDAgODAwIDgwMCclM0UlM0NnIGZpbGw9J25vbmUnIHN0cm9rZT0nJTIzNDA0JyBzdHJva2Utd2lkdGg9JzEnJTNFJTNDcGF0aCBkPSdNNzY5IDIyOUwxMDM3IDI2MC45TTkyNyA4ODBMNzMxIDczNyA1MjAgNjYwIDMwOSA1MzggNDAgNTk5IDI5NSA3NjQgMTI2LjUgODc5LjUgNDAgNTk5LTE5NyA0OTMgMTAyIDM4Mi0zMSAyMjkgMTI2LjUgNzkuNS02OS02MycvJTNFJTNDcGF0aCBkPSdNLTMxIDIyOUwyMzcgMjYxIDM5MCAzODIgNjAzIDQ5MyAzMDguNSA1MzcuNSAxMDEuNSAzODEuNU0zNzAgOTA1TDI5NSA3NjQnLyUzRSUzQ3BhdGggZD0nTTUyMCA2NjBMNTc4IDg0MiA3MzEgNzM3IDg0MCA1OTkgNjAzIDQ5MyA1MjAgNjYwIDI5NSA3NjQgMzA5IDUzOCAzOTAgMzgyIDUzOSAyNjkgNzY5IDIyOSA1NzcuNSA0MS41IDM3MCAxMDUgMjk1IC0zNiAxMjYuNSA3OS41IDIzNyAyNjEgMTAyIDM4MiA0MCA1OTkgLTY5IDczNyAxMjcgODgwJy8lM0UlM0NwYXRoIGQ9J001MjAtMTQwTDU3OC41IDQyLjUgNzMxLTYzTTYwMyA0OTNMNTM5IDI2OSAyMzcgMjYxIDM3MCAxMDVNOTAyIDM4Mkw1MzkgMjY5TTM5MCAzODJMMTAyIDM4MicvJTNFJTNDcGF0aCBkPSdNLTIyMiA0MkwxMjYuNSA3OS41IDM3MCAxMDUgNTM5IDI2OSA1NzcuNSA0MS41IDkyNyA4MCA3NjkgMjI5IDkwMiAzODIgNjAzIDQ5MyA3MzEgNzM3TTI5NS0zNkw1NzcuNSA0MS41TTU3OCA4NDJMMjk1IDc2NE00MC0yMDFMMTI3IDgwTTEwMiAzODJMLTI2MSAyNjknLyUzRSUzQy9nJTNFJTNDZyBmaWxsPSclMjM1MDUnJTNFJTNDY2lyY2xlIGN4PSc3NjknIGN5PScyMjknIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nNTM5JyBjeT0nMjY5JyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzYwMycgY3k9JzQ5Mycgcj0nOScvJTNFJTNDY2lyY2xlIGN4PSc3MzEnIGN5PSc3MzcnIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nNTIwJyBjeT0nNjYwJyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzMwOScgY3k9JzUzOCcgcj0nOScvJTNFJTNDY2lyY2xlIGN4PScyOTUnIGN5PSc3NjQnIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nNDAnIGN5PSc1OTknIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nMTAyJyBjeT0nMzgyJyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzEyNycgY3k9JzgwJyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzM3MCcgY3k9JzEwNScgcj0nOScvJTNFJTNDY2lyY2xlIGN4PSc1NzgnIGN5PSc0Micgcj0nOScvJTNFJTNDY2lyY2xlIGN4PScyMzcnIGN5PScyNjEnIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nMzkwJyBjeT0nMzgyJyByPSc5Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5wcm9maWxlLWhlYWRlci1iZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogLThweDtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmYxNzQ0O1xufVxuXG4ucHJvZmlsZS13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05MHB4KTtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDE2NnB4O1xuICB3aWR0aDogMTY2cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIC5wcm9maWxlLWltYWdlLWVkaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2UtZWRpdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmUgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtbmFtZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5wcm9maWxlLW5hbWUgaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U2NDM5ODtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjMwLCA2NywgMTUyLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5wcm9maWxlLW5hbWUgaW5wdXQ6ZGlzYWJsZWQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLnByb2ZpbGUtd3JhcHBlciAucHJvZmlsZS1uYW1lIGltZyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTE7XG59XG4ucHJvZmlsZS13cmFwcGVyIC5wcm9maWxlLW5hbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wcm9maWxlLXdyYXBwZXIgLnByb2ZpbGUtbmFtZTpob3ZlciBpbWcge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnByb2ZpbGUtd3JhcHBlciB1bCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5wcm9maWxlLXdyYXBwZXIgdWwgbGkge1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgcGFkZGluZzogOHB4O1xufVxuLnByb2ZpbGUtd3JhcHBlciB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuXG4ucm91bmRlZC1ib3JkZXItaW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZzogOHB4O1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucm91bmRlZC1ib3JkZXItaW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNoaXAge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UzRTJERjtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmNoaXAgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHVuc2V0O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jaGlwIGltZzpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLWltYWdlIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIG1heC13aWR0aDogbm9uZTtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1ib3VuZGFyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3Itdmlld3BvcnQsXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLXJlc2l6ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3gtc2hhZG93OiAwIDAgMjAwMHB4IDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3ItcmVzaXplciB7XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLXJlc2l6ZXItdmVydGljYWwsXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLXJlc2l6ZXItaG9yaXNvbnRhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1yZXNpemVyLXZlcnRpY2FsOjphZnRlcixcbi5jcm9wcGllLWNvbnRhaW5lciAuY3ItcmVzaXplci1ob3Jpc29udGFsOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLXJlc2l6ZXItdmVydGljYWwge1xuICBib3R0b206IC01cHg7XG4gIGN1cnNvcjogcm93LXJlc2l6ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1yZXNpemVyLXZlcnRpY2FsOjphZnRlciB7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3ItcmVzaXplci1ob3Jpc29udGFsIHtcbiAgcmlnaHQ6IC01cHg7XG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1yZXNpemVyLWhvcmlzb250YWw6OmFmdGVyIHtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3Itb3JpZ2luYWwtaW1hZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLXZwLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1vdmVybGF5IHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IG1vdmU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1zbGlkZXItd3JhcCB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jcm9wcGllLXJlc3VsdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNyb3BwaWUtcmVzdWx0IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1pbWFnZSxcbi5jcm9wcGllLWNvbnRhaW5lciAuY3Itb3ZlcmxheSxcbi5jcm9wcGllLWNvbnRhaW5lciAuY3Itdmlld3BvcnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKiogU1RZTElORyBSQU5HRSBJTlBVVCAqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLypodHRwOi8vYnJlbm5hb2JyaWVuLmNvbS9ibG9nLzIwMTQvMDUvc3R5bGUtaW5wdXQtdHlwZS1yYW5nZS1pbi1ldmVyeS1icm93c2VyLmh0bWwgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNyLXNsaWRlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLypyZW1vdmVzIGRlZmF1bHQgd2Via2l0IHN0eWxlcyovXG4gIC8qYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXG4gIC8qZml4IGZvciBGRiB1bmFibGUgdG8gYXBwbHkgZm9jdXMgc3R5bGUgYnVnICovXG4gIHdpZHRoOiAzMDBweDtcbiAgLypyZXF1aXJlZCBmb3IgcHJvcGVyIHRyYWNrIHNpemluZyBpbiBGRiovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jci1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uY3Itc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIG1hcmdpbi10b3A6IC02cHg7XG59XG5cbi5jci1zbGlkZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKlxuLmNyLXNsaWRlcjpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuYmFja2dyb3VuZDogI2NjYztcbn1cbiovXG4uY3Itc2xpZGVyOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uY3Itc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIG1hcmdpbi10b3A6IC02cHg7XG59XG5cbi8qaGlkZSB0aGUgb3V0bGluZSBiZWhpbmQgdGhlIGJvcmRlciovXG4uY3Itc2xpZGVyOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cblxuLmNyLXNsaWRlcjo6LW1zLXRyYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLypyZW1vdmUgYmcgY29sb3VyIGZyb20gdGhlIHRyYWNrLCB3ZSdsbCB1c2UgbXMtZmlsbC1sb3dlciBhbmQgbXMtZmlsbC11cHBlciBpbnN0ZWFkICovXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC8qbGVhdmUgcm9vbSBmb3IgdGhlIGxhcmdlciB0aHVtYiB0byBvdmVyZmxvdyB3aXRoIGEgdHJhbnNwYXJlbnQgYm9yZGVyICovXG4gIGJvcmRlci13aWR0aDogNnB4IDA7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLypyZW1vdmUgZGVmYXVsdCB0aWNrIG1hcmtzKi9cbn1cblxuLmNyLXNsaWRlcjo6LW1zLWZpbGwtbG93ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jci1zbGlkZXI6Oi1tcy1maWxsLXVwcGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY3Itc2xpZGVyOjotbXMtdGh1bWIge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uY3Itc2xpZGVyOmZvY3VzOjotbXMtZmlsbC1sb3dlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNyLXNsaWRlcjpmb2N1czo6LW1zLWZpbGwtdXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogUm90YXRpb24gVG9vbHMgKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5jci1yb3RhdGUtY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jci1yb3RhdGUtY29udHJvbHMgYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY3Itcm90YXRlLWNvbnRyb2xzIGk6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmNyLXJvdGF0ZS1sIGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLihrpcIjtcbn1cblxuLmNyLXJvdGF0ZS1yIGk6YmVmb3JlIHtcbiAgY29udGVudDogXCLihrtcIjtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUuc2Nzc1wiO1xuLy8gQGltcG9ydCBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jcm9wcGllL2Nyb3BwaWUuY3NzXCI7XG5cblxuLnByb2ZpbGUtaGVhZGVyLWJnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwJTtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5QWx0Q29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjgwJyBoZWlnaHQ9JzI4MCcgdmlld0JveD0nMCAwIDgwMCA4MDAnJTNFJTNDZyBmaWxsPSdub25lJyBzdHJva2U9JyUyMzQwNCcgc3Ryb2tlLXdpZHRoPScxJyUzRSUzQ3BhdGggZD0nTTc2OSAyMjlMMTAzNyAyNjAuOU05MjcgODgwTDczMSA3MzcgNTIwIDY2MCAzMDkgNTM4IDQwIDU5OSAyOTUgNzY0IDEyNi41IDg3OS41IDQwIDU5OS0xOTcgNDkzIDEwMiAzODItMzEgMjI5IDEyNi41IDc5LjUtNjktNjMnLyUzRSUzQ3BhdGggZD0nTS0zMSAyMjlMMjM3IDI2MSAzOTAgMzgyIDYwMyA0OTMgMzA4LjUgNTM3LjUgMTAxLjUgMzgxLjVNMzcwIDkwNUwyOTUgNzY0Jy8lM0UlM0NwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvJTNFJTNDcGF0aCBkPSdNNTIwLTE0MEw1NzguNSA0Mi41IDczMS02M002MDMgNDkzTDUzOSAyNjkgMjM3IDI2MSAzNzAgMTA1TTkwMiAzODJMNTM5IDI2OU0zOTAgMzgyTDEwMiAzODInLyUzRSUzQ3BhdGggZD0nTS0yMjIgNDJMMTI2LjUgNzkuNSAzNzAgMTA1IDUzOSAyNjkgNTc3LjUgNDEuNSA5MjcgODAgNzY5IDIyOSA5MDIgMzgyIDYwMyA0OTMgNzMxIDczN00yOTUtMzZMNTc3LjUgNDEuNU01NzggODQyTDI5NSA3NjRNNDAtMjAxTDEyNyA4ME0xMDIgMzgyTC0yNjEgMjY5Jy8lM0UlM0MvZyUzRSUzQ2cgZmlsbD0nJTIzNTA1JyUzRSUzQ2NpcmNsZSBjeD0nNzY5JyBjeT0nMjI5JyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzUzOScgY3k9JzI2OScgcj0nOScvJTNFJTNDY2lyY2xlIGN4PSc2MDMnIGN5PSc0OTMnIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nNzMxJyBjeT0nNzM3JyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzUyMCcgY3k9JzY2MCcgcj0nOScvJTNFJTNDY2lyY2xlIGN4PSczMDknIGN5PSc1MzgnIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nMjk1JyBjeT0nNzY0JyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzQwJyBjeT0nNTk5JyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzEwMicgY3k9JzM4Micgcj0nOScvJTNFJTNDY2lyY2xlIGN4PScxMjcnIGN5PSc4MCcgcj0nOScvJTNFJTNDY2lyY2xlIGN4PSczNzAnIGN5PScxMDUnIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nNTc4JyBjeT0nNDInIHI9JzknLyUzRSUzQ2NpcmNsZSBjeD0nMjM3JyBjeT0nMjYxJyByPSc5Jy8lM0UlM0NjaXJjbGUgY3g9JzM5MCcgY3k9JzM4Micgcj0nOScvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IC04cHg7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnlBbHRDb2xvcjtcbiAgfSBcblxufVxuXG4ucHJvZmlsZS13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05MHB4KTtcbiAgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiAxNjZweDtcbiAgICB3aWR0aDogMTY2cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnByb2ZpbGUtaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAucHJvZmlsZS1pbWFnZS1lZGl0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucHJvZmlsZS1uYW1lIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlucHV0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5Q29sb3I7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgkc2Vjb25kYXJ5Q29sb3IsIDAuNSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuICAgIGlucHV0OmRpc2FibGVkIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIGltZyB7IFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyBcbiAgICAgIHotaW5kZXg6IDExO1xuICAgIH1cbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgIGltZyB7IFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyBcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdWwge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGxpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnJvdW5kZWQtYm9yZGVyLWltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuLmNoaXAge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnTGlnaHRDb2xvcjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBpbWd7XG4gICAgdmVydGljYWwtYWxpZ246IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICY6aG92ZXIgeyBmaWx0ZXI6IGJyaWdodG5lc3MoNzAlKTsgfVxuICB9XG59XG5cbi8vIENST1BQSUUgQ1NTXG5cbi5jcm9wcGllLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLWltYWdlIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiBub25lO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLWJvdW5kYXJ5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci12aWV3cG9ydCxcbi5jcm9wcGllLWNvbnRhaW5lciAuY3ItcmVzaXplciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjAwMHB4IDIwMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMDtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1yZXNpemVyIHtcbiAgei1pbmRleDogMjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3ItcmVzaXplci12ZXJ0aWNhbCxcbi5jcm9wcGllLWNvbnRhaW5lciAuY3ItcmVzaXplci1ob3Jpc29udGFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLXJlc2l6ZXItdmVydGljYWw6OmFmdGVyLFxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1yZXNpemVyLWhvcmlzb250YWw6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBjb250ZW50OiAnJztcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1yZXNpemVyLXZlcnRpY2FsIHtcbiAgYm90dG9tOiAtNXB4O1xuICBjdXJzb3I6IHJvdy1yZXNpemU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3ItcmVzaXplci12ZXJ0aWNhbDo6YWZ0ZXIge1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1yZXNpemVyLWhvcmlzb250YWwge1xuICByaWdodDogLTVweDtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY3JvcHBpZS1jb250YWluZXIgLmNyLXJlc2l6ZXItaG9yaXNvbnRhbDo6YWZ0ZXIge1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3Itb3JpZ2luYWwtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3ItdnAtY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jcm9wcGllLWNvbnRhaW5lciAuY3Itb3ZlcmxheSB7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1zbGlkZXItd3JhcCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jcm9wcGllLXJlc3VsdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jcm9wcGllLXJlc3VsdCBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNyb3BwaWUtY29udGFpbmVyIC5jci1pbWFnZSxcbi5jcm9wcGllLWNvbnRhaW5lciAuY3Itb3ZlcmxheSxcbi5jcm9wcGllLWNvbnRhaW5lciAuY3Itdmlld3BvcnQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqIFNUWUxJTkcgUkFOR0UgSU5QVVQgKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qaHR0cDovL2JyZW5uYW9icmllbi5jb20vYmxvZy8yMDE0LzA1L3N0eWxlLWlucHV0LXR5cGUtcmFuZ2UtaW4tZXZlcnktYnJvd3Nlci5odG1sICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmNyLXNsaWRlciB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuLypyZW1vdmVzIGRlZmF1bHQgd2Via2l0IHN0eWxlcyovXG5cdC8qYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovLypmaXggZm9yIEZGIHVuYWJsZSB0byBhcHBseSBmb2N1cyBzdHlsZSBidWcgKi9cbiAgICB3aWR0aDogMzAwcHg7XG4vKnJlcXVpcmVkIGZvciBwcm9wZXIgdHJhY2sgc2l6aW5nIGluIEZGKi9cbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY3Itc2xpZGVyOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jci1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuXG4uY3Itc2xpZGVyOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLypcbi5jci1zbGlkZXI6Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbmJhY2tncm91bmQ6ICNjY2M7XG59XG4qL1xuXG4uY3Itc2xpZGVyOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmNyLXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuXG4vKmhpZGUgdGhlIG91dGxpbmUgYmVoaW5kIHRoZSBib3JkZXIqL1xuLmNyLXNsaWRlcjotbW96LWZvY3VzcmluZyB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuXG4uY3Itc2xpZGVyOjotbXMtdHJhY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLypyZW1vdmUgYmcgY29sb3VyIGZyb20gdGhlIHRyYWNrLCB3ZSdsbCB1c2UgbXMtZmlsbC1sb3dlciBhbmQgbXMtZmlsbC11cHBlciBpbnN0ZWFkICovXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7LypsZWF2ZSByb29tIGZvciB0aGUgbGFyZ2VyIHRodW1iIHRvIG92ZXJmbG93IHdpdGggYSB0cmFuc3BhcmVudCBib3JkZXIgKi9cblx0Ym9yZGVyLXdpZHRoOiA2cHggMDtcblx0Y29sb3I6IHRyYW5zcGFyZW50Oy8qcmVtb3ZlIGRlZmF1bHQgdGljayBtYXJrcyovXG59XG4uY3Itc2xpZGVyOjotbXMtZmlsbC1sb3dlciB7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jci1zbGlkZXI6Oi1tcy1maWxsLXVwcGVyIHtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNyLXNsaWRlcjo6LW1zLXRodW1iIHtcblx0Ym9yZGVyOiBub25lO1xuXHRoZWlnaHQ6IDE2cHg7XG5cdHdpZHRoOiAxNnB4O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQ6ICNkZGQ7XG5cdG1hcmdpbi10b3A6MXB4O1xufVxuLmNyLXNsaWRlcjpmb2N1czo6LW1zLWZpbGwtbG93ZXIge1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uY3Itc2xpZGVyOmZvY3VzOjotbXMtZmlsbC11cHBlciB7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiBSb3RhdGlvbiBUb29scyAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNyLXJvdGF0ZS1jb250cm9scyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiA1cHg7XG5cdGxlZnQ6IDVweDtcblx0ei1pbmRleDogMTtcbn1cbi5jci1yb3RhdGUtY29udHJvbHMgYnV0dG9uIHtcblx0Ym9yZGVyOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xufVxuLmNyLXJvdGF0ZS1jb250cm9scyBpOmJlZm9yZSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRmb250LXNpemU6IDIycHg7XG59XG4uY3Itcm90YXRlLWwgaTpiZWZvcmUge1xuXHRjb250ZW50OiAn4oa6Jztcbn1cbi5jci1yb3RhdGUtciBpOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICfihrsnO1xufVxuIiwiJGJvZHlDb2xvcjogI0Y2RjVGQTtcbiR3aGl0ZUNvbG9yOiAjZmZmZmZmO1xuJGJnTGlnaHRDb2xvcjogI0UzRTJERjtcbiRiZ0xpZ2h0Q29sb3JBbHQ6ICNFM0NGREM7XG4vLyAzOTMxYWZcbi8vIFxuJHByaW1hcnlDb2xvcjogI0MzMDczRjtcbiRwcmltYXJ5QWx0Q29sb3I6ICNmZjE3NDQ7XG4kcHJpbWFyeURhcmtDb2xvcjogIzlBMTc1MDtcbiRwcmltYXJ5TGlnaHRDb2xvcjogI0VFNEM3QztcbiRzZWNvbmRhcnlDb2xvcjogI0U2NDM5ODtcbiRzZWNvbmRhcnlMaWdodENvbG9yOiAjRTc3MTdEO1xuJHByaW1hcnlUZXh0OiAjMkQwMDBFO1xuXG4vLyBUZXh0ICYgQm9yZGVyIFNoYWRlXG4kdGV4dFNoYWRlMTogIzkyOEZBMDtcbiR0ZXh0U2hhZGUyOiAjQjRCMEM4O1xuJHRleHRTaGFkZTM6ICNCOEI0Q0M7XG4kdGV4dFNoYWRlNDogJGJvZHlDb2xvcjtcbiR0ZXh0U2hhZGU1OiAjREREREREOyJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './account.component.html',
          styleUrls: ['./account.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: src_app_services_firebase_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/.pnpm/@angular+forms@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_auth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth/ */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/.pnpm/@angular+router@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_api_api_medic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/api-medic.service */
    "./src/app/api/api-medic.service.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _common_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../common/news-list/news-list.component */
    "./src/app/common/news-list/news-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../common/chat-bubble/chat-bubble.component */
    "./src/app/common/chat-bubble/chat-bubble.component.ts");
    /* harmony import */


    var _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../common/loader/loader.component */
    "./src/app/common/loader/loader.component.ts");

    function HomeComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-bubble", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var obj_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", obj_r6.message)("from", obj_r6.from)("date", obj_r6.date);
      }
    }

    function HomeComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hello there !!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I'm here to help you with medical symptoms informations. This project is under development. So, results given by memight not be accurate. But feel free to try it out. Click Below button to get started.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Just type ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "#");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " anytime to see suggestion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_8_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.getStarted();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get Started");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_app_loader_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
      }
    }

    var features = [{
      key: "GET_STARTED",
      name: "Start",
      value: ""
    }];

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(af, router, api, ref, chat) {
        _classCallCheck(this, HomeComponent);

        this.af = af;
        this.router = router;
        this.api = api;
        this.ref = ref;
        this.chat = chat;
        this.isLoading = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.queryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
          this.chat.initializeAutocomplete(this.chat.autocomplete);
          this.chat.onChange.subscribe(function (changed) {
            _this8.ref.detectChanges();

            _this8.scrollToBottomChat();
          });
          this.chat.onError.subscribe(function (err) {
            if (err.error === "Invalid token") _this8.api.generateToken();
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.scrollToBottomChat();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.chat.onChange.unsubscribe();
          // this.chat.onError.unsubscribe();
        }
      }, {
        key: "sendData",
        value: function sendData() {
          if (this.queryForm.valid) {
            var query = this.queryForm.value.query;
            var item = this.chat.autocomplete.filter(function (i) {
              return query.includes(i.name);
            });
            this.chat.sendUserMessage(query);
            this.queryForm.reset();

            if (item && item[0]) {
              item = item[0];
              this.chat.isGettingMessage = true;
              this.ref.detectChanges();
              this.scrollToBottomChat();
              this.chat.dispatch(item);
            } else {
              this.chat.sendMedicaMessage("I am not getting you. Please try again.");
            }
          }
        }
      }, {
        key: "getStarted",
        value: function getStarted() {
          this.chat.sendUserMessage("Start");
          this.chat.dispatch(features[0]);
        }
      }, {
        key: "scrollToBottomChat",
        value: function scrollToBottomChat() {
          var objDiv = document.getElementById("chats");
          objDiv.scrollTop = objDiv.scrollHeight;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth___WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_api_api_medic_service__WEBPACK_IMPORTED_MODULE_4__["ApiMedicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["ng-component"]],
      decls: 17,
      vars: 5,
      consts: [[1, "row", "position-fixed", "fixed-top", "home-wrapper"], [1, "col-md-4", "d-none", "d-md-block", "d-lg-block", "d-xl-block", "sidebar-wrapper"], [1, "col-md-8", "chats-wrapper", "d-flex", "flex-column", "flex-end", "justify-content-end"], ["id", "chats", 1, "chats"], ["type", "none", 1, "p-0"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "chat-input-wrapper", "p-2", "ml-2", "mr-2"], ["id", "autocomplete-menu"], [3, "formGroup", "ngSubmit"], ["id", "query-form", 1, "d-flex", "flex-row", "flex-nowrap"], ["id", "query", "type", "text", "formControlName", "query", "placeholder", "Type here", "autocomplete", "off", 1, "pl-3"], ["id", "send-btn", "type", "submit"], ["id", "send-btn-img", "src", "../../../assets/images/send.svg"], [3, "message", "from", "date"], [1, "wave"], [1, "dot"], [1, "card", "m-3", 2, "width", "70%"], ["src", "../../../assets/images/bg_1.jpg", "alt", "...", 1, "card-img-top", 2, "height", "200px", "object-fit", "contain"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-news-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_li_6_Template, 2, 3, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_li_7_Template, 5, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 15, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_11_listener() {
            return ctx.sendData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_app_loader_16_Template, 1, 0, "app-loader", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chat.allMessages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat.isGettingMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat.allMessages.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.queryForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat.isLoading);
        }
      },
      directives: [_common_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_6__["NewsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _common_chat_bubble_chat_bubble_component__WEBPACK_IMPORTED_MODULE_8__["ChatBubbleComponent"], _common_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]],
      styles: ["@media only screen and (min-width: 768px) {\n  .sidebar-wrapper {\n    padding-right: 0;\n  }\n\n  .chats-wrapper {\n    padding-left: 0;\n  }\n}\n.home-wrapper {\n  z-index: 0;\n  height: 100vh;\n  padding-top: 56px;\n}\n.home-wrapper .sidebar-wrapper {\n  height: 100%;\n  width: 100%;\n  background: #E3CFDC;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.home-wrapper .sidebar-wrapper::-webkit-scrollbar {\n  width: 0.8em;\n}\n.home-wrapper .sidebar-wrapper::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n}\n.home-wrapper .sidebar-wrapper::-webkit-scrollbar-thumb {\n  background-color: #E64398;\n  border-radius: 1em;\n}\n.home-wrapper .chats-wrapper {\n  height: 100%;\n  width: 100%;\n  background: #E3E2DF;\n  display: flex;\n}\n.home-wrapper .chats-wrapper .chats {\n  width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.home-wrapper .chats-wrapper .chats::-webkit-scrollbar {\n  width: 0.8em;\n}\n.home-wrapper .chats-wrapper .chats::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);\n}\n.home-wrapper .chats-wrapper .chats::-webkit-scrollbar-thumb {\n  background-color: #E64398;\n  border-radius: 1em;\n}\n.home-wrapper .chats-wrapper .chat-input-wrapper {\n  position: relative;\n}\n.home-wrapper .chats-wrapper .chat-input-wrapper #query-form {\n  min-height: 60px;\n  background-color: white;\n  border-radius: 60px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  font-size: larger;\n}\n.home-wrapper .chats-wrapper .chat-input-wrapper #query-form #query {\n  width: 100%;\n  border: none;\n  min-height: 40px;\n  max-height: 200px;\n  outline: none;\n}\n.home-wrapper .chats-wrapper .chat-input-wrapper #query-form #query:focus {\n  outline: none;\n}\n.home-wrapper .chats-wrapper .chat-input-wrapper #query-form #send-btn {\n  border: none;\n  outline: none;\n  background: white;\n}\n.home-wrapper .chats-wrapper .chat-input-wrapper #query-form #send-btn:hover {\n  border: none;\n  outline: none;\n  background: #ded;\n  transition: all 0.4s;\n}\n.home-wrapper .chats-wrapper .chat-input-wrapper #query-form #send-btn-img {\n  height: 60px;\n  width: 60px;\n  padding: 10px;\n}\n.autocomplete-item {\n  color: #C3073F;\n}\n.autocomplete-item:hover {\n  color: #9A1750;\n}\n.autocomplete-container {\n  background: white;\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n  max-height: 188px;\n  overflow-y: auto;\n}\n.autocomplete-container::-webkit-scrollbar {\n  width: 1em;\n}\n.autocomplete-container::-webkit-scrollbar-track {\n  background-color: #efefef;\n  border-radius: 1em;\n}\n.autocomplete-container::-webkit-scrollbar-thumb {\n  background-color: #E64398;\n  border-radius: 1em;\n}\n.autocomplete-container ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n.autocomplete-container ul li {\n  color: #C3073F;\n  padding: 10px;\n}\n.autocomplete-container ul .highlight {\n  background-color: #efefef;\n  transition: all 0.3s ease-in;\n}\n.autocomplete-container::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 0;\n  border: 12px solid transparent;\n  border-top: 12px solid #fff;\n  position: absolute;\n  left: 40px;\n}\n#autocomplete-menu {\n  position: absolute;\n  bottom: 90px;\n  width: calc(100% - 80px);\n}\ndiv.wave {\n  position: relative;\n  text-align: center;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  background: white;\n  padding: 10px;\n  padding-top: 20px;\n  margin-top: 20px;\n  margin-left: 26px;\n  width: 100px;\n}\ndiv.wave .dot {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-right: 3px;\n  background: #C3073F;\n  animation: wave 1.3s linear infinite;\n}\ndiv.wave .dot:nth-child(2) {\n  animation-delay: -1.1s;\n}\ndiv.wave .dot:nth-child(3) {\n  animation-delay: -0.9s;\n}\n@keyframes wave {\n  0%, 60%, 100% {\n    transform: initial;\n  }\n  30% {\n    transform: translateY(-15px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3JlcG9zaXRvcmllcy9tZWRpY2EtYW5ndWxhci9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FwcGxlL0Rlc2t0b3AvcmVwb3NpdG9yaWVzL21lZGljYS1hbmd1bGFyL3NyYy90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFBbUIsZ0JBQUE7RUNBbkI7O0VEQ0E7SUFBaUIsZUFBQTtFQ0dqQjtBQUNGO0FEREE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDR0Y7QURERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJFWmM7RUZhZCxnQkFBQTtFQUNBLGtCQUFBO0FDR0o7QURESTtFQUNFLFlBQUE7QUNHTjtBREFJO0VBQ0UsNENBQUE7QUNFTjtBRENJO0VBQ0UseUJFbEJXO0VGbUJYLGtCQUFBO0FDQ047QURHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJFbENXO0VGbUNYLGFBQUE7QUNESjtBREdJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNETjtBREdNO0VBQ0UsWUFBQTtBQ0RSO0FESU07RUFDRSw0Q0FBQTtBQ0ZSO0FES007RUFDRSx5QkUzQ1M7RUY0Q1Qsa0JBQUE7QUNIUjtBRE1JO0VBQ0Usa0JBQUE7QUNKTjtBRE1NO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSlI7QURNUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNKVjtBREtVO0VBQ0UsYUFBQTtBQ0haO0FETVE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSlY7QURLVTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0haO0FETVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNKVjtBRFlBO0VBQ0UsY0UvRmE7QURzRmY7QURVRTtFQUNFLGNFL0ZlO0FEdUZuQjtBRFdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSRjtBRFVFO0VBQ0UsVUFBQTtBQ1JKO0FEV0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDVEo7QURZRTtFQUNFLHlCRWxIYTtFRm1IYixrQkFBQTtBQ1ZKO0FEWUU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDVko7QURXSTtFQUNFLGNFOUhTO0VGK0hULGFBQUE7QUNUTjtBRFdJO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQ1ROO0FEYUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1hKO0FEZUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ1pGO0FEZUE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Msc0NBQUE7RUFDQSxtQkFBQTtFQUNELGlCQUFBO0VBQ0EsYUFBQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNELFlBQUE7QUNaRDtBRGFDO0VBQ0MscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkUxS2E7RUYyS2Isb0NBQUE7QUNYRjtBRGFFO0VBQ0Msc0JBQUE7QUNYSDtBRGNFO0VBQ0Msc0JBQUE7QUNaSDtBRGlCQTtFQUNDO0lBQ0Msa0JBQUE7RUNkQTtFRGlCRDtJQUNDLDRCQUFBO0VDZkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS5zY3NzXCI7XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXItd3JhcHBlciB7IHBhZGRpbmctcmlnaHQ6IDA7IH1cbiAgLmNoYXRzLXdyYXBwZXIgeyBwYWRkaW5nLWxlZnQ6IDA7IH1cbn1cblxuLmhvbWUtd3JhcHBlciB7XG4gIHotaW5kZXg6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmctdG9wOiA1NnB4O1xuXG4gIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkYmdMaWdodENvbG9yQWx0O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDAuOGVtO1xuICAgIH1cbiAgICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gICAgXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmNoYXRzLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkYmdMaWdodENvbG9yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuY2hhdHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjhlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5Q29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNoYXQtaW5wdXQtd3JhcHBlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgICAgICNxdWVyeS1mb3JtIHtcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcblxuICAgICAgICAjcXVlcnkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAjc2VuZC1idG4ge1xuICAgICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVkO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICNzZW5kLWJ0bi1pbWcge1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuLmF1dG9jb21wbGV0ZS1pdGVte1xuICBjb2xvcjogJHByaW1hcnlDb2xvcjtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRwcmltYXJ5RGFya0NvbG9yO1xuICB9XG59XG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwwLjIpO1xuICBtYXgtaGVpZ2h0OiAxODhweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDFlbTtcbiAgfVxuICBcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICB9XG4gIFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeUNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgfVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpIHtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeUNvbG9yO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgICB9XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDsgXG4gICAgaGVpZ2h0OiAwOyBcbiAgICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0MHB4O1xuICB9XG59XG5cbiNhdXRvY29tcGxldGUtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA5MHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG59XG5cbmRpdi53YXZlIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjZweDtcblx0d2lkdGg6MTAwcHg7XG5cdC5kb3Qge1xuXHRcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRcdHdpZHRoOjEycHg7XG5cdFx0aGVpZ2h0OjEycHg7XG5cdFx0Ym9yZGVyLXJhZGl1czo1MCU7XG5cdFx0bWFyZ2luLXJpZ2h0OjNweDtcblx0XHRiYWNrZ3JvdW5kOiRwcmltYXJ5Q29sb3I7XG5cdFx0YW5pbWF0aW9uOiB3YXZlIDEuM3MgbGluZWFyIGluZmluaXRlO1xuXG5cdFx0JjpudGgtY2hpbGQoMikge1xuXHRcdFx0YW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcblx0XHR9XG5cblx0XHQmOm50aC1jaGlsZCgzKSB7XG5cdFx0XHRhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuXHRcdH1cblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHdhdmUge1xuXHQwJSwgNjAlLCAxMDAlIHtcblx0XHR0cmFuc2Zvcm06IGluaXRpYWw7XG5cdH1cblxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG5cdH1cbn0iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cblxuICAuY2hhdHMtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG4uaG9tZS13cmFwcGVyIHtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy10b3A6IDU2cHg7XG59XG4uaG9tZS13cmFwcGVyIC5zaWRlYmFyLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRTNDRkRDO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uaG9tZS13cmFwcGVyIC5zaWRlYmFyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAuOGVtO1xufVxuLmhvbWUtd3JhcHBlciAuc2lkZWJhci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLmhvbWUtd3JhcHBlciAuc2lkZWJhci13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjQzOTg7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cbi5ob21lLXdyYXBwZXIgLmNoYXRzLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRTNFMkRGO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhvbWUtd3JhcHBlciAuY2hhdHMtd3JhcHBlciAuY2hhdHMge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmhvbWUtd3JhcHBlciAuY2hhdHMtd3JhcHBlciAuY2hhdHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDAuOGVtO1xufVxuLmhvbWUtd3JhcHBlciAuY2hhdHMtd3JhcHBlciAuY2hhdHM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4uaG9tZS13cmFwcGVyIC5jaGF0cy13cmFwcGVyIC5jaGF0czo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY0Mzk4O1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG4uaG9tZS13cmFwcGVyIC5jaGF0cy13cmFwcGVyIC5jaGF0LWlucHV0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZS13cmFwcGVyIC5jaGF0cy13cmFwcGVyIC5jaGF0LWlucHV0LXdyYXBwZXIgI3F1ZXJ5LWZvcm0ge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuLmhvbWUtd3JhcHBlciAuY2hhdHMtd3JhcHBlciAuY2hhdC1pbnB1dC13cmFwcGVyICNxdWVyeS1mb3JtICNxdWVyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmhvbWUtd3JhcHBlciAuY2hhdHMtd3JhcHBlciAuY2hhdC1pbnB1dC13cmFwcGVyICNxdWVyeS1mb3JtICNxdWVyeTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uaG9tZS13cmFwcGVyIC5jaGF0cy13cmFwcGVyIC5jaGF0LWlucHV0LXdyYXBwZXIgI3F1ZXJ5LWZvcm0gI3NlbmQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5ob21lLXdyYXBwZXIgLmNoYXRzLXdyYXBwZXIgLmNoYXQtaW5wdXQtd3JhcHBlciAjcXVlcnktZm9ybSAjc2VuZC1idG46aG92ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLmhvbWUtd3JhcHBlciAuY2hhdHMtd3JhcHBlciAuY2hhdC1pbnB1dC13cmFwcGVyICNxdWVyeS1mb3JtICNzZW5kLWJ0bi1pbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYXV0b2NvbXBsZXRlLWl0ZW0ge1xuICBjb2xvcjogI0MzMDczRjtcbn1cbi5hdXRvY29tcGxldGUtaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjOUExNzUwO1xufVxuXG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtaGVpZ2h0OiAxODhweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5hdXRvY29tcGxldGUtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxZW07XG59XG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY0Mzk4O1xuICBib3JkZXItcmFkaXVzOiAxZW07XG59XG4uYXV0b2NvbXBsZXRlLWNvbnRhaW5lciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmF1dG9jb21wbGV0ZS1jb250YWluZXIgdWwgbGkge1xuICBjb2xvcjogI0MzMDczRjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5hdXRvY29tcGxldGUtY29udGFpbmVyIHVsIC5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xufVxuLmF1dG9jb21wbGV0ZS1jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMTJweCBzb2xpZCAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwcHg7XG59XG5cbiNhdXRvY29tcGxldGUtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA5MHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG59XG5cbmRpdi53YXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNnB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5kaXYud2F2ZSAuZG90IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjQzMwNzNGO1xuICBhbmltYXRpb246IHdhdmUgMS4zcyBsaW5lYXIgaW5maW5pdGU7XG59XG5kaXYud2F2ZSAuZG90Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG59XG5kaXYud2F2ZSAuZG90Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG5cbkBrZXlmcmFtZXMgd2F2ZSB7XG4gIDAlLCA2MCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG4gIH1cbn0iLCIkYm9keUNvbG9yOiAjRjZGNUZBO1xuJHdoaXRlQ29sb3I6ICNmZmZmZmY7XG4kYmdMaWdodENvbG9yOiAjRTNFMkRGO1xuJGJnTGlnaHRDb2xvckFsdDogI0UzQ0ZEQztcbi8vIDM5MzFhZlxuLy8gXG4kcHJpbWFyeUNvbG9yOiAjQzMwNzNGO1xuJHByaW1hcnlBbHRDb2xvcjogI2ZmMTc0NDtcbiRwcmltYXJ5RGFya0NvbG9yOiAjOUExNzUwO1xuJHByaW1hcnlMaWdodENvbG9yOiAjRUU0QzdDO1xuJHNlY29uZGFyeUNvbG9yOiAjRTY0Mzk4O1xuJHNlY29uZGFyeUxpZ2h0Q29sb3I6ICNFNzcxN0Q7XG4kcHJpbWFyeVRleHQ6ICMyRDAwMEU7XG5cbi8vIFRleHQgJiBCb3JkZXIgU2hhZGVcbiR0ZXh0U2hhZGUxOiAjOTI4RkEwO1xuJHRleHRTaGFkZTI6ICNCNEIwQzg7XG4kdGV4dFNoYWRlMzogI0I4QjRDQztcbiR0ZXh0U2hhZGU0OiAkYm9keUNvbG9yO1xuJHRleHRTaGFkZTU6ICNEREREREQ7Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./home.component.html",
          styleUrls: ["./home.component.scss"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_fire_auth___WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_api_api_medic_service__WEBPACK_IMPORTED_MODULE_4__["ApiMedicService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/.pnpm/@angular+forms@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/.pnpm/@angular+router@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_small_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_small_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(af, router) {
        var _this9 = this;

        _classCallCheck(this, LoginComponent);

        this.af = af;
        this.router = router;
        this.af.authState.subscribe(function (auth) {
          if (auth) {
            _this9.router.navigateByUrl("/");
          }
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          if (this.loginForm.valid) {
            var email = this.loginForm.value.email;
            var password = this.loginForm.value.password;
            this.af.signInWithEmailAndPassword(email, password).then(function (success) {
              _this10.router.navigateByUrl("/");
            })["catch"](console.error);
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["ng-component"]],
      decls: 21,
      vars: 3,
      consts: [[1, "full-wh-container", "fixed-top"], [1, "bg-animated", "row", "w-100", "vh-100", "overflow-auto", "justify-content-center"], [1, "col-sm-6", "h-100", "d-flex", "flex-column", "justify-content-center"], ["id", "loginForm", 1, "w-100", "p-2", "m-2"], [3, "formGroup", "ngSubmit"], [1, "form-title", "text-center", "pl-3", "pr-3", "pt-2", "mb-3"], [1, "text-primary"], [1, "form-group", "d-flex", "flex-column-reverse", "mr-3", "ml-3"], ["class", "text-danger pl-3", 4, "ngIf"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Enter email", 1, "form-control"], ["for", "email"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 1, "form-control"], ["for", "password"], [1, "text-center"], ["type", "submit shadow-md", 1, "btn", "btn-lg", "btn-primary"], [1, "text-danger", "pl-3"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_small_9_Template, 2, 0, "small", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_small_14_Template, 2, 0, "small", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("email").valid && ctx.loginForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginForm.get("password").valid && ctx.loginForm.get("password").touched);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".full-wh-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  overflow: hidden;\n}\n.full-wh-container[_ngcontent-%COMP%]   .bg-animated[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/bg_2.png\"), linear-gradient(to bottom, #C3073F, #E64398);\n  background-blend-mode: multiply;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  margin: 0;\n  padding-top: 56px;\n  position: fixed;\n}\n.full-wh-container[_ngcontent-%COMP%]::before, .full-wh-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 60vmax;\n  height: 60vmax;\n  position: absolute;\n  background: rgba(238, 238, 238, 0.07);\n  left: -20vmin;\n  top: -20vmin;\n  animation: morph 10s linear infinite alternate, spin 10s linear infinite;\n  z-index: 1;\n  will-change: border-radius, transform;\n  transform-origin: 55% 55%;\n  pointer-events: none;\n}\n.full-wh-container[_ngcontent-%COMP%]::after {\n  width: 70vmin;\n  height: 70vmin;\n  left: auto;\n  right: -10vmin;\n  top: auto;\n  bottom: 0;\n  animation: morph 5s linear infinite alternate, spin 13s linear infinite reverse;\n  transform-origin: 20% 20%;\n}\n#loginForm[_ngcontent-%COMP%] {\n  max-width: 450px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n}\n@keyframes morph {\n  0% {\n    border-radius: 40% 60% 60% 40%/70% 30% 70% 30%;\n  }\n  100% {\n    border-radius: 40% 60%;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3JlcG9zaXRvcmllcy9tZWRpY2EtYW5ndWxhci9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUY7QURFRTtFQUNFLHdGQUFBO0VBRUEsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDREo7QURJRTtFQUVFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdFQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ0hKO0FETUU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwrRUFBQTtFQUVBLHlCQUFBO0FDTEo7QURTQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FDTkY7QURVQTtFQUNFO0lBQ0UsOENBQUE7RUNQRjtFRFNBO0lBQ0Usc0JBQUE7RUNQRjtBQUNGO0FEVUE7RUFDRTtJQUNFLHdCQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lLnNjc3NcIjtcbi5mdWxsLXdoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmJnLWFuaW1hdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ18yLnBuZ1wiKSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRwcmltYXJ5Q29sb3IsICRzZWNvbmRhcnlDb2xvcik7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDU2cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG5cbiAgJjo6YmVmb3JlLFxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogNjB2bWF4O1xuICAgIGhlaWdodDogNjB2bWF4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCNlZWUsIDAuMDcpO1xuICAgIGxlZnQ6IC0yMHZtaW47XG4gICAgdG9wOiAtMjB2bWluO1xuICAgIGFuaW1hdGlvbjogbW9ycGggMTBzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUsIHNwaW4gMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpbGwtY2hhbmdlOiBib3JkZXItcmFkaXVzLCB0cmFuc2Zvcm07XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTUlIDU1JTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgJjo6YWZ0ZXIge1xuICAgIHdpZHRoOiA3MHZtaW47XG4gICAgaGVpZ2h0OiA3MHZtaW47XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogLTEwdm1pbjtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIGFuaW1hdGlvbjogbW9ycGggNXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSxcbiAgICAgIHNwaW4gMTNzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDIwJSAyMCU7XG4gIH1cbn1cblxuI2xvZ2luRm9ybSB7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuXG5Aa2V5ZnJhbWVzIG1vcnBoIHtcbiAgMCUge1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCUgNjAlIDQwJSAvIDcwJSAzMCUgNzAlIDMwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0MCUgNjAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XG4gIH1cbn0iLCIuZnVsbC13aC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZ1bGwtd2gtY29udGFpbmVyIC5iZy1hbmltYXRlZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnXzIucG5nXCIpLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQzMwNzNGLCAjRTY0Mzk4KTtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLmZ1bGwtd2gtY29udGFpbmVyOjpiZWZvcmUsIC5mdWxsLXdoLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNjB2bWF4O1xuICBoZWlnaHQ6IDYwdm1heDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjM4LCAyMzgsIDAuMDcpO1xuICBsZWZ0OiAtMjB2bWluO1xuICB0b3A6IC0yMHZtaW47XG4gIGFuaW1hdGlvbjogbW9ycGggMTBzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUsIHNwaW4gMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogMTtcbiAgd2lsbC1jaGFuZ2U6IGJvcmRlci1yYWRpdXMsIHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTUlIDU1JTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZnVsbC13aC1jb250YWluZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDcwdm1pbjtcbiAgaGVpZ2h0OiA3MHZtaW47XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTB2bWluO1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgYW5pbWF0aW9uOiBtb3JwaCA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlLCBzcGluIDEzcyBsaW5lYXIgaW5maW5pdGUgcmV2ZXJzZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMjAlIDIwJTtcbn1cblxuI2xvZ2luRm9ybSB7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuQGtleWZyYW1lcyBtb3JwaCB7XG4gIDAlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0MCUgNjAlIDYwJSA0MCUvNzAlIDMwJSA3MCUgMzAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/signup/signup.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/signup/signup.component.ts ***!
    \**************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPagesSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/.pnpm/@angular+forms@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_auth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth/ */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/.pnpm/@angular+router@9.0.7_mrwuhm7oa5wasyxps2f5vnqk24/node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/.pnpm/@angular+common@9.0.7_thdiixddkb7hlw2net4m5ou72m/node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_small_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_small_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_small_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid confirm password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_small_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password and Confirm Password fields don't match.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(af, router) {
        var _this11 = this;

        _classCallCheck(this, SignupComponent);

        this.af = af;
        this.router = router;
        this.af.authState.subscribe(function (auth) {
          if (auth) _this11.router.navigateByUrl("/");
        });
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            'confirm-password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
          }, this.passwordConfirming);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.signupForm.valid) {
            var email = this.signupForm.value.email;
            var password = this.signupForm.value.password;
            this.af.createUserWithEmailAndPassword(email, password).then(function (success) {})["catch"](console.error);
          }
        }
      }, {
        key: "passwordConfirming",
        value: function passwordConfirming(c) {
          if (c.get('password').value !== c.get('confirm-password').value) {
            return {
              passwordMissMatch: true
            };
          }

          return null;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth___WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["ng-component"]],
      decls: 34,
      vars: 5,
      consts: [[1, "full-wh-container", "fixed-top"], [1, "bg-animated", "row", "w-100", "vh-100", "overflow-auto"], [1, "signup-content", "col-sm-6", "h-100", "text-white", "d-flex", "flex-column", "justify-content-center", "text-center", "p-5"], ["src", "https://cdn-icons-png.flaticon.com/512/38/38175.png", "alt", "", 1, ""], [1, "fa", "fa-angle-double-down", "fa-4x", "d-block", "d-sm-none"], [1, "col-sm-6", "h-100", "d-flex", "flex-column", "justify-content-center"], ["id", "signUpForm", 1, "w-100", "p-4"], [3, "formGroup", "ngSubmit"], [1, "form-title", "text-center", "pl-3", "pr-3", "pt-2", "mb-3"], [1, "text-primary"], [1, "form-group", "d-flex", "flex-column-reverse", "mr-3", "ml-3"], ["class", "text-danger pl-3", 4, "ngIf"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "Enter email", 1, "form-control"], ["for", "email"], ["type", "password", "formControlName", "password", "id", "password", "placeholder", "Password", 1, "form-control"], ["for", "password"], ["type", "password", "formControlName", "confirm-password", "id", "confirm-password", "placeholder", "Confirm Password", 1, "form-control"], ["for", "confirm-password"], [1, "text-center"], ["type", "submit shadow-md", 1, "btn", "btn-lg", "btn-primary"], [1, "text-danger", "pl-3"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up for free");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "You are few steps to get help of Medica!!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sign up details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignupComponent_small_16_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_small_21_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SignupComponent_small_26_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignupComponent_small_27_Template, 2, 0, "small", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("email").valid && ctx.signupForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("password").valid && ctx.signupForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signupForm.get("confirm-password").valid && ctx.signupForm.get("confirm-password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("password").valid && ctx.signupForm.get("confirm-password").valid && (ctx.signupForm.errors == null ? null : ctx.signupForm.errors.passwordMissMatch) && ctx.signupForm.get("password").touched && ctx.signupForm.get("confirm-password").touched);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".full-wh-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  overflow: hidden;\n}\n.full-wh-container[_ngcontent-%COMP%]   .bg-animated[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/bg_2.png\"), linear-gradient(to bottom, #C3073F, #E64398);\n  background-blend-mode: multiply;\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  margin: 0;\n  padding-top: 56px;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  position: fixed;\n}\n.full-wh-container[_ngcontent-%COMP%]::before, .full-wh-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 60vmax;\n  height: 60vmax;\n  position: absolute;\n  background: rgba(238, 238, 238, 0.07);\n  left: -20vmin;\n  top: -20vmin;\n  animation: morph 10s linear infinite alternate, spin 10s linear infinite;\n  z-index: 1;\n  will-change: border-radius, transform;\n  transform-origin: 55% 55%;\n  pointer-events: none;\n}\n.full-wh-container[_ngcontent-%COMP%]::after {\n  width: 70vmin;\n  height: 70vmin;\n  left: auto;\n  right: -10vmin;\n  top: auto;\n  bottom: 0;\n  animation: morph 5s linear infinite alternate, spin 13s linear infinite reverse;\n  transform-origin: 20% 20%;\n}\n.signup-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 5% auto;\n  width: 75px;\n  height: 75px;\n  animation: slidUpDown 1s infinite alternate;\n}\n.signup-content[_ngcontent-%COMP%]   .fa-angle-double-down[_ngcontent-%COMP%] {\n  animation: bounce 2s infinite;\n}\n#signUpForm[_ngcontent-%COMP%] {\n  max-width: 420px;\n  background-color: transparent;\n}\n#signUpForm[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #E64398;\n}\n#signUpForm[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 100%;\n  overflow-y: auto;\n  border-radius: 0.8rem;\n  animation: pulseShadow 1.5s infinite alternate-reverse;\n}\n@keyframes slidUpDown {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-20px);\n  }\n}\n@keyframes morph {\n  0% {\n    border-radius: 40% 60% 60% 40%/70% 30% 70% 30%;\n  }\n  100% {\n    border-radius: 40% 60%;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(30px);\n  }\n  60% {\n    transform: translateY(15px);\n  }\n}\n@keyframes pulseShadow {\n  0% {\n    box-shadow: none;\n  }\n  100% {\n    box-shadow: 0 0 0 5px rgba(255, 23, 68, 0.5), 0 0 0 10px rgba(255, 23, 68, 0.4), 0 0 0 15px rgba(255, 23, 68, 0.3), 0 0 0 20px rgba(255, 23, 68, 0.2), 0 0 0 25px rgba(255, 23, 68, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3JlcG9zaXRvcmllcy9tZWRpY2EtYW5ndWxhci9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0FGO0FERUU7RUFDRSx3RkFBQTtFQUVBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0U7RUFFRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx3RUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNGSjtBREtFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsK0VBQUE7RUFFQSx5QkFBQTtBQ0pKO0FEU0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQ05KO0FEU0U7RUFDRSw2QkFBQTtBQ1BKO0FEV0E7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0FDUkY7QURVRTtFQUNFLGdDQUFBO0FDUko7QURXRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzREFBQTtBQ1RKO0FEYUE7RUFDRTtJQUNFLHdCQUFBO0VDVkY7RURZQTtJQUNFLDRCQUFBO0VDVkY7QUFDRjtBRGFBO0VBQ0U7SUFDRSw4Q0FBQTtFQ1hGO0VEYUE7SUFDRSxzQkFBQTtFQ1hGO0FBQ0Y7QURjQTtFQUNFO0lBQ0Usd0JBQUE7RUNaRjtBQUNGO0FEZUE7RUFDRTtJQUtFLHdCQUFBO0VDakJGO0VEbUJBO0lBQ0UsMkJBQUE7RUNqQkY7RURtQkE7SUFDRSwyQkFBQTtFQ2pCRjtBQUNGO0FEb0JBO0VBQ0U7SUFDRSxnQkFBQTtFQ2xCRjtFRG9CQTtJQUNFLHdMQUFBO0VDbEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lLnNjc3NcIjtcbi5mdWxsLXdoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmJnLWFuaW1hdGVkIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ18yLnBuZ1wiKSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRwcmltYXJ5Q29sb3IsICRzZWNvbmRhcnlDb2xvcik7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDYwdm1heDtcbiAgICBoZWlnaHQ6IDYwdm1heDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgjZWVlLCAwLjA3KTtcbiAgICBsZWZ0OiAtMjB2bWluO1xuICAgIHRvcDogLTIwdm1pbjtcbiAgICBhbmltYXRpb246IG1vcnBoIDEwcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlLCBzcGluIDEwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWxsLWNoYW5nZTogYm9yZGVyLXJhZGl1cywgdHJhbnNmb3JtO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDU1JSA1NSU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgd2lkdGg6IDcwdm1pbjtcbiAgICBoZWlnaHQ6IDcwdm1pbjtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtMTB2bWluO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgYW5pbWF0aW9uOiBtb3JwaCA1cyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlLFxuICAgICAgc3BpbiAxM3MgbGluZWFyIGluZmluaXRlIHJldmVyc2U7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMjAlIDIwJTtcbiAgfVxufVxuXG4uc2lnbnVwLWNvbnRlbnQge1xuICBpbWcge1xuICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgYW5pbWF0aW9uOiBzbGlkVXBEb3duIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgfVxuXG4gIC5mYS1hbmdsZS1kb3VibGUtZG93biB7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XG4gIH1cbn1cblxuI3NpZ25VcEZvcm0ge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAuZm9ybS10aXRsZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICRzZWNvbmRhcnlDb2xvcjtcbiAgfVxuXG4gIGZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEod2hpdGUsIDEpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgICBhbmltYXRpb246IHB1bHNlU2hhZG93IDEuNXMgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkVXBEb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW9ycGgge1xuICAwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogNDAlIDYwJSA2MCUgNDAlIC8gNzAlIDMwJSA3MCUgMzAlO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gIDAlLFxuICAyMCUsXG4gIDUwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZVNoYWRvdyB7XG4gIDAlIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKCRwcmltYXJ5QWx0Q29sb3IsIDAuNSksXG4gICAgICAwIDAgMCAxMHB4IHJnYmEoJHByaW1hcnlBbHRDb2xvciwgMC40KSwgMCAwIDAgMTVweCByZ2JhKCRwcmltYXJ5QWx0Q29sb3IsIDAuMyksXG4gICAgICAwIDAgMCAyMHB4IHJnYmEoJHByaW1hcnlBbHRDb2xvciwgMC4yKSwgMCAwIDAgMjVweCByZ2JhKCRwcmltYXJ5QWx0Q29sb3IsIDAuMSk7XG4gIH1cbn1cbiIsIi5mdWxsLXdoLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZnVsbC13aC1jb250YWluZXIgLmJnLWFuaW1hdGVkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmdfMi5wbmdcIiksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNDMzA3M0YsICNFNjQzOTgpO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDU2cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG4uZnVsbC13aC1jb250YWluZXI6OmJlZm9yZSwgLmZ1bGwtd2gtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA2MHZtYXg7XG4gIGhlaWdodDogNjB2bWF4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC4wNyk7XG4gIGxlZnQ6IC0yMHZtaW47XG4gIHRvcDogLTIwdm1pbjtcbiAgYW5pbWF0aW9uOiBtb3JwaCAxMHMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZSwgc3BpbiAxMHMgbGluZWFyIGluZmluaXRlO1xuICB6LWluZGV4OiAxO1xuICB3aWxsLWNoYW5nZTogYm9yZGVyLXJhZGl1cywgdHJhbnNmb3JtO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1NSUgNTUlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5mdWxsLXdoLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICB3aWR0aDogNzB2bWluO1xuICBoZWlnaHQ6IDcwdm1pbjtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xMHZtaW47XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBhbmltYXRpb246IG1vcnBoIDVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGUsIHNwaW4gMTNzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAyMCUgMjAlO1xufVxuXG4uc2lnbnVwLWNvbnRlbnQgaW1nIHtcbiAgbWFyZ2luOiA1JSBhdXRvO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBhbmltYXRpb246IHNsaWRVcERvd24gMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLnNpZ251cC1jb250ZW50IC5mYS1hbmdsZS1kb3VibGUtZG93biB7XG4gIGFuaW1hdGlvbjogYm91bmNlIDJzIGluZmluaXRlO1xufVxuXG4jc2lnblVwRm9ybSB7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI3NpZ25VcEZvcm0gLmZvcm0tdGl0bGUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0U2NDM5ODtcbn1cbiNzaWduVXBGb3JtIGZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGFuaW1hdGlvbjogcHVsc2VTaGFkb3cgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkVXBEb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG1vcnBoIHtcbiAgMCUge1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCUgNjAlIDQwJS83MCUgMzAlIDcwJSAzMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogNDAlIDYwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbiAgfVxufVxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNlU2hhZG93IHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYmEoMjU1LCAyMywgNjgsIDAuNSksIDAgMCAwIDEwcHggcmdiYSgyNTUsIDIzLCA2OCwgMC40KSwgMCAwIDAgMTVweCByZ2JhKDI1NSwgMjMsIDY4LCAwLjMpLCAwIDAgMCAyMHB4IHJnYmEoMjU1LCAyMywgNjgsIDAuMiksIDAgMCAwIDI1cHggcmdiYSgyNTUsIDIzLCA2OCwgMC4xKTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_fire_auth___WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routin-animation.ts":
  /*!*************************************!*\
    !*** ./src/app/routin-animation.ts ***!
    \*************************************/

  /*! exports provided: slideInAnimation */

  /***/
  function srcAppRoutinAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
      return slideInAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/.pnpm/@angular+animations@9.0.7_522udmzy5toq5nuxkixl4id3be/node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: '0'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: '1'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: '1'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: '0'
    }))], {
      optional: true
    })])])]);
    /***/
  },

  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_api_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/api/api-medic-endpoints */
    "./src/app/api/api-medic-endpoints.ts");
    /* harmony import */


    var tributejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! tributejs */
    "./node_modules/.pnpm/tributejs@5.1.3/node_modules/tributejs/dist/tribute.min.js");
    /* harmony import */


    var tributejs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(tributejs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/.pnpm/rxjs@6.6.7/node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_api_medic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api/api-medic.service */
    "./src/app/api/api-medic.service.ts");
    /* harmony import */


    var _firebase_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./firebase-firestore.service */
    "./src/app/services/firebase-firestore.service.ts");

    var features = [{
      key: "GET_STARTED",
      name: "Start",
      value: ""
    }];
    var SERVER_ERROR_MSG = "I'm getting errro from server. Please try again or visit after some time.";

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(api, firestore) {
        var _this12 = this;

        _classCallCheck(this, ChatService);

        this.api = api;
        this.firestore = firestore;
        this.isAdult = true;
        this.yearOfBirth = "2000";
        this.gender = "Male";
        this.allMessages = [];
        this.isGettingMessage = false;
        this.autocomplete = features;
        this.onChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isLoading = false;

        this.sendMedicaMessage = function (message) {
          _this12.allMessages = [].concat(_toConsumableArray(_this12.allMessages), [{
            message: message,
            from: "MEDICA",
            date: new Date()
          }]);

          _this12.firestore.updateChats(_this12.allMessages);

          _this12.onChange.next(true);
        };

        this.sendUserMessage = function (message) {
          _this12.allMessages = [].concat(_toConsumableArray(_this12.allMessages), [{
            message: message,
            from: "USER",
            date: new Date()
          }]);

          _this12.firestore.updateChats(_this12.allMessages);

          _this12.onChange.next(true);
        };

        this.isLoading = true;
        firestore.getUserData();
        this.chatSubscription = firestore.onGetUserData.subscribe(function (received) {
          _this12.isLoading = false;
          if (!firestore.user) return;
          if (firestore.user.chats && _this12.allMessages.length === 0) _this12.allMessages = firestore.user.chats;
          _this12.isAdult = firestore.user.isAdult;
          _this12.yearOfBirth = firestore.user.yearOfBirth;
          _this12.gender = firestore.user.gender;

          _this12.onChange.next(true);
        }, console.error);
      }

      _createClass(ChatService, [{
        key: "dispatch",
        value: function dispatch(item) {
          var _this13 = this;

          var yearOfBirth = this.yearOfBirth;
          var gender = this.gender.toLowerCase();
          var selectorStatus = this.isAdult ? gender === "male" ? "man" : "woman" : gender === "male" ? "boy" : "girl";
          var token = localStorage.getItem("token");
          var language = "en-gb";

          switch (item.key) {
            case "GET_STARTED":
              this.isGettingMessage = false;
              this.autocomplete = [{
                key: "BODY_LOCATIONS",
                name: "Body Locations",
                value: ""
              }, {
                key: "LOCATION_SYMPTOMS",
                name: "Skip",
                value: "0"
              }];
              this.sendMedicaMessage("Get started by typing # to see available options from list. Select or type 'Skip' to skip to next option.");
              this.initializeAutocomplete(this.autocomplete);
              break;

            case "BODY_LOCATIONS":
              this.api.get(src_app_api_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_1__["BODY_LOCATIONS"], {
                token: token,
                language: language
              }).subscribe(function (data) {
                _this13.isGettingMessage = false;
                var newAutocomplete = data.map(function (i) {
                  return {
                    key: "BODY_SUB_LOCATIONS",
                    name: i.Name,
                    value: i.ID
                  };
                });
                _this13.autocomplete = [].concat(_toConsumableArray(newAutocomplete), [{
                  key: "LOCATION_SYMPTOMS",
                  name: "Skip",
                  value: 0
                }]);

                _this13.sendMedicaMessage("Please let me know part of body or location in which you have issue. You can also skip choosing 'Skip' if you are confused. But it'll make more difficult for me to help you.");

                _this13.initializeAutocomplete(_this13.autocomplete);
              }, function (err) {
                _this13.sendMedicaMessage(SERVER_ERROR_MSG);

                _this13.sendMedicaMessage(SERVER_ERROR_MSG);

                _this13.onError.next(err);
              });
              break;

            case "BODY_SUB_LOCATIONS":
              this.api.get(src_app_api_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_1__["BODY_SUB_LOCATIONS"], {
                token: token,
                language: language,
                locationId: item.value
              }).subscribe(function (data) {
                _this13.isGettingMessage = false;
                var newAutocomplete = data.map(function (i) {
                  return {
                    key: "LOCATION_SYMPTOMS",
                    name: i.Name,
                    value: i.ID
                  };
                });
                _this13.autocomplete = [].concat(_toConsumableArray(newAutocomplete), [{
                  key: "LOCATION_SYMPTOMS",
                  name: "Skip",
                  value: 0
                }]);

                _this13.sendMedicaMessage("Great ! Now it would be nice if you could specify sub-part or sublocation in your body part. You can skip it anytime by choosing or sending 'Skip'.");

                _this13.initializeAutocomplete(_this13.autocomplete);
              }, function (err) {
                _this13.isGettingMessage = false;

                _this13.sendMedicaMessage(SERVER_ERROR_MSG);

                _this13.onError.next(err);
              });
              break;

            case "LOCATION_SYMPTOMS":
              this.api.get(src_app_api_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_1__["SYMPTOMS_IN_LOCATION"], {
                token: token,
                language: language,
                selectorStatus: selectorStatus,
                locationId: item.value
              }).subscribe(function (data) {
                _this13.isGettingMessage = false;
                var newAutocomplete = data.map(function (i) {
                  return {
                    key: "SYMPTOM_SELECTED",
                    name: i.Name,
                    value: i.ID
                  };
                });

                if (newAutocomplete.length <= 0) {
                  _this13.dispatch({
                    key: "LOCATION_SYMPTOMS",
                    name: "All Symptoms",
                    value: 0
                  });
                } else {
                  _this13.autocomplete = _toConsumableArray(newAutocomplete);

                  _this13.sendMedicaMessage("Which symptoms do you find ?");

                  _this13.sendMedicaMessage("Search through the list by typing # as always. Go ahead and tell me.");

                  _this13.initializeAutocomplete(_this13.autocomplete);
                }
              }, function (err) {
                _this13.isGettingMessage = false;

                _this13.sendMedicaMessage(SERVER_ERROR_MSG);

                _this13.onError.next(err);
              });
              break;

            case "SYMPTOM_SELECTED":
              this.api.get(src_app_api_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_1__["SPECIALISATIONS"], {
                token: token,
                language: language,
                gender: gender,
                yearOfBirth: yearOfBirth,
                symptoms: "[".concat(item.value, "]")
              }).subscribe(function (data) {
                var dataHtml = "<p>Most probably you are looking for is from following: </p>\n              ".concat(data.sort(function (a, b) {
                  return b.Accuracy - a.Accuracy;
                }).map(function (i, id) {
                  return "\n                  <h6><span class=\"badge badge-pill badge-light\">".concat(id + 1, "</span>").concat(i.Name, "</h6>\n                  <div class=\"progress\">\n                    <div class=\"progress-bar w-").concat(Math.round(i.Accuracy), "\" \n                    role=\"progressbar\" aria-valuenow=\"").concat(Math.round(i.Accuracy), "\" \n                    aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div>");
                }).join(""));

                _this13.sendMedicaMessage("Don't know which type of specialist Doctor you should meet?");

                _this13.sendMedicaMessage(dataHtml);

                _this13.api.get(src_app_api_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_1__["DIAGNOSIS"], {
                  token: token,
                  language: language,
                  gender: gender,
                  yearOfBirth: yearOfBirth,
                  symptoms: "[".concat(item.value, "]")
                }).subscribe(function (data) {
                  _this13.isGettingMessage = false;
                  var newAutocomplete = data.map(function (i) {
                    return {
                      key: "ISSUE_INFO",
                      name: i.Issue.Name,
                      value: i.Issue.ID
                    };
                  });
                  _this13.autocomplete = [].concat(_toConsumableArray(newAutocomplete), [{
                    key: "NO_ISSUES_FOUND",
                    name: "Skip",
                    value: "0"
                  }]);

                  _this13.sendMedicaMessage("I've found some issues you might be or might not be facing. Let me know issue so that I can provide you more information on that. (Type # to see.)");

                  _this13.initializeAutocomplete(_this13.autocomplete);
                }, function (err) {
                  _this13.isGettingMessage = false;

                  _this13.sendMedicaMessage(SERVER_ERROR_MSG);

                  _this13.onError.next(err);
                });
              }, function (err) {
                _this13.isGettingMessage = false;

                _this13.sendMedicaMessage(SERVER_ERROR_MSG);

                _this13.onError.next(err);
              });
              break;

            case "NO_ISSUE_FOUND":
              this.api.get(src_app_api_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_1__["ISSUES"], {
                token: token,
                language: language,
                locationId: item.value
              }).subscribe(function (data) {
                _this13.isGettingMessage = false;
                var newAutocomplete = data.map(function (i) {
                  return {
                    key: "ISSUE_INFO",
                    name: i.Name,
                    value: i.ID
                  };
                });
                _this13.autocomplete = _toConsumableArray(newAutocomplete);

                _this13.sendMedicaMessage("Don't worry. Please search through all available issues and ask me regarding that.");

                _this13.initializeAutocomplete(_this13.autocomplete);
              }, function (err) {
                _this13.isGettingMessage = false;

                _this13.sendMedicaMessage(SERVER_ERROR_MSG);

                _this13.onError.next(err);
              });
              break;

            case "ISSUE_INFO":
              this.api.get(src_app_api_api_medic_endpoints__WEBPACK_IMPORTED_MODULE_1__["ISSUE_INFO"], {
                token: token,
                language: language,
                issueId: item.value
              }).subscribe(function (data) {
                _this13.isGettingMessage = false;
                var newAutocomplete = features;
                _this13.autocomplete = _toConsumableArray(newAutocomplete);

                _this13.sendMedicaMessage("Here is sosendMedicaMessagee information regarding your issue.");

                _this13.sendMedicaMessage("<div class=\"card\">\n                <div class=\"card-header\">\n                   ".concat(data.Name, " \n                </div>\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Special title treatment</h5>\n                  <blockquote class=\"blockquote mb-0\">\n                    <p>").concat(data.Description, "</p>\n                    <p>").concat(data.MedicalCondition, "</p>\n                    <footer class=\"blockquote-footer\"> ").concat(data.TreatmentDescription, " </footer>\n                  </blockquote>\n                </div>\n              </div>"));

                _this13.sendMedicaMessage("I hope that this will help you. You can start again to get my help again.");

                _this13.initializeAutocomplete(_this13.autocomplete);
              }, function (err) {
                _this13.isGettingMessage = false;

                _this13.sendMedicaMessage(SERVER_ERROR_MSG);

                _this13.onError.next(err);
              });
              break;

            default:
              this.isGettingMessage = false;
              this.sendMedicaMessage("Sorry! Can't respond to that");
          }
        }
      }, {
        key: "initializeAutocomplete",
        value: function initializeAutocomplete(values) {
          this.tribute && this.tribute.detach(document.getElementById("query"));
          this.tribute = new tributejs__WEBPACK_IMPORTED_MODULE_2___default.a({
            values: values,
            trigger: "#",
            lookup: "name",
            fillAttr: "name",
            positionMenu: false,
            menuContainer: document.getElementById("autocomplete-menu"),
            containerClass: "autocomplete-container",
            itemClass: "autocomplete-item",
            selectTemplate: function selectTemplate(item) {
              return item.original["name"];
            },
            menuItemTemplate: function menuItemTemplate(item) {
              return item.original["name"];
            }
          });
          this.tribute.attach(document.getElementById("query"));
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_medic_service__WEBPACK_IMPORTED_MODULE_4__["ApiMedicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_firebase_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseFirestore"]));
    };

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_api_medic_service__WEBPACK_IMPORTED_MODULE_4__["ApiMedicService"]
        }, {
          type: _firebase_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/firebase-firestore.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/firebase-firestore.service.ts ***!
    \********************************************************/

  /*! exports provided: FirebaseFirestore */

  /***/
  function srcAppServicesFirebaseFirestoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseFirestore", function () {
      return FirebaseFirestore;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/.pnpm/rxjs@6.6.7/node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/.pnpm/@angular+fire@6.1.5_znxunypcrj6rvmc42o2e5a3ld4/node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var FirebaseFirestore =
    /*#__PURE__*/
    _createClass(function FirebaseFirestore(af, firestore) {
      var _this14 = this;

      _classCallCheck(this, FirebaseFirestore);

      this.af = af;
      this.firestore = firestore;
      this.user = {
        name: "",
        birthdate: "",
        profilePicture: "",
        yearOfBirth: "",
        gender: "",
        isAdult: true,
        chats: []
      };
      this.onGetUserData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      this.isLoading = true;

      this.getUserData = function () {
        return _this14.onGetUserData.next(true);
      };

      this.updateData = function (data) {
        return _this14.userRef.update(data);
      };

      this.updateChats = function (chats) {
        return _this14.userRef.update({
          chats: chats
        });
      };

      this.af.authState.subscribe(function (auth) {
        if (!auth) return;
        _this14.uid = auth.uid;
        _this14.email = auth.email;
        _this14.isEmailVerified = auth.emailVerified;
        _this14.userRef = _this14.firestore.collection("users").doc(auth.uid);

        _this14.userRef.snapshotChanges().subscribe(function (action) {
          if (action.payload.exists === false) {
            // console.log("USER DOEST NOT EXISTS ON FIRESTORE ");
            // console.log("SO CREATING USER ");
            _this14.userRef.set(_this14.user);
          }
        });

        _this14.userRef.valueChanges().subscribe(function (res) {
          _this14.user = res;
          _this14.isLoading = false;

          _this14.onGetUserData.next(true);
        }, console.error);
      });
    });

    FirebaseFirestore.ɵfac = function FirebaseFirestore_Factory(t) {
      return new (t || FirebaseFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
    };

    FirebaseFirestore.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FirebaseFirestore,
      factory: FirebaseFirestore.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseFirestore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyA9H_te0-vqzMM3tDUWZDG-75kGjU4GSF0",
        authDomain: "medicaanywhere.firebaseapp.com",
        databaseURL: "https://medicaanywhere.firebaseio.com",
        projectId: "medicaanywhere",
        storageBucket: "medicaanywhere.appspot.com",
        messagingSenderId: "340114219827",
        appId: "1:340114219827:web:e7499e436ea6c63a625446",
        measurementId: "G-TB494SYWJ0"
      }
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/.pnpm/@angular+core@9.0.7_5vxzpnwefl6dwkmk3nf2qix3m4/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/.pnpm/@angular+platform-browser@9.0.7_cp2r37eicezf35xgtpsmxjy3qq/node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/apple/Desktop/repositories/medica-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map