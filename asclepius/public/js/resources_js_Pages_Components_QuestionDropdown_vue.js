"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Components_QuestionDropdown_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/listbox/listbox.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/CheckIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/SelectorIcon.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'QuestionDropdown',
  components: {
    Listbox: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.Listbox,
    ListboxLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.ListboxLabel,
    ListboxButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.ListboxButton,
    ListboxOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.ListboxOption,
    ListboxOptions: _headlessui_vue__WEBPACK_IMPORTED_MODULE_2__.ListboxOptions,
    CheckIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectorIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    questions: Object
  },
  setup: function setup(props) {
    var emitter = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)('emitter');
    var choose = {
      id: null,
      question: "Choose ..."
    };
    var preFormatQuestions = props.questions;
    var questions = Object.assign({
      choose: choose
    }, preFormatQuestions);
    var selected = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(choose);
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.watch)(selected, /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(newSelected, oldSelected) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                emitter.emit('updateTopic', newSelected);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      console.log(questions, selected);
    });
    return {
      questions: questions,
      choose: choose,
      selected: selected
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=template&id=4681c2f7":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=template&id=4681c2f7 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Topic");

var _hoisted_2 = {
  "class": "relative"
};
var _hoisted_3 = {
  "class": "flex items-center"
};
var _hoisted_4 = {
  "class": "block truncate"
};
var _hoisted_5 = {
  "class": "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
};
var _hoisted_6 = {
  "class": "flex items-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ListboxLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListboxLabel");

  var _component_SelectorIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectorIcon");

  var _component_ListboxButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListboxButton");

  var _component_CheckIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CheckIcon");

  var _component_ListboxOption = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListboxOption");

  var _component_ListboxOptions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ListboxOptions");

  var _component_Listbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Listbox");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Listbox, {
    as: "div",
    modelValue: $setup.selected,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.selected = $event;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListboxLabel, {
        "class": "block text-sm font-medium text-gray-700"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_1];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListboxButton, {
        "class": "relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.selected.question), 1
          /* TEXT */
          )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectorIcon, {
            "class": "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          })])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "leave-active-class": "transition ease-in duration-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ListboxOptions, {
            "class": "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.questions, function (question) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ListboxOption, {
                  as: "template",
                  key: question.id,
                  value: question
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                    var active = _ref.active,
                        selected = _ref.selected;
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9'])
                    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([selected ? 'font-semibold' : 'font-normal', 'block truncate'])
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.question), 3
                    /* TEXT, CLASS */
                    )]), selected && selected.id != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                      key: 0,
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4'])
                    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CheckIcon, {
                      "class": "h-5 w-5",
                      "aria-hidden": "true"
                    })], 2
                    /* CLASS */
                    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
                    /* CLASS */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["value"]);
              }), 128
              /* KEYED_FRAGMENT */
              ))];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["modelValue"]);
}

/***/ }),

/***/ "./resources/js/Pages/Components/QuestionDropdown.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Components/QuestionDropdown.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionDropdown_vue_vue_type_template_id_4681c2f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionDropdown.vue?vue&type=template&id=4681c2f7 */ "./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=template&id=4681c2f7");
/* harmony import */ var _QuestionDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionDropdown.vue?vue&type=script&lang=js */ "./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_christopherglazier_sites_asclepius_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_christopherglazier_sites_asclepius_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_QuestionDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_QuestionDropdown_vue_vue_type_template_id_4681c2f7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Components/QuestionDropdown.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuestionDropdown.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=template&id=4681c2f7":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=template&id=4681c2f7 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionDropdown_vue_vue_type_template_id_4681c2f7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_QuestionDropdown_vue_vue_type_template_id_4681c2f7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./QuestionDropdown.vue?vue&type=template&id=4681c2f7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/QuestionDropdown.vue?vue&type=template&id=4681c2f7");


/***/ })

}]);