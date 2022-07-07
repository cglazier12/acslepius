"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Components_StoryTextBox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/StoryTextBox.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/StoryTextBox.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/vue */ "./node_modules/@headlessui/vue/dist/components/listbox/listbox.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/CalendarIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/PaperClipIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/TagIcon.js");
/* harmony import */ var _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/vue/solid */ "./node_modules/@heroicons/vue/solid/esm/UserCircleIcon.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var assignees = [{
      name: 'Unassigned',
      value: null
    }, {
      name: 'Wade Cooper',
      value: 'wade-cooper',
      avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    } // More items...
    ];
    var labels = [{
      name: 'Unlabelled',
      value: null
    }, {
      name: 'Engineering',
      value: 'engineering'
    } // More items...
    ];
    var dueDates = [{
      name: 'No due date',
      value: null
    }, {
      name: 'Today',
      value: 'today'
    } // More items...
    ];
    var assigned = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(assignees[0]);
    var labelled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(labels[0]);
    var dated = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(dueDates[0]);
    var __returned__ = {
      assignees: assignees,
      labels: labels,
      dueDates: dueDates,
      assigned: assigned,
      labelled: labelled,
      dated: dated,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      Listbox: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.Listbox,
      ListboxButton: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.ListboxButton,
      ListboxLabel: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.ListboxLabel,
      ListboxOption: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.ListboxOption,
      ListboxOptions: _headlessui_vue__WEBPACK_IMPORTED_MODULE_1__.ListboxOptions,
      CalendarIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_2__["default"],
      PaperClipIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_3__["default"],
      TagIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_4__["default"],
      UserCircleIcon: _heroicons_vue_solid__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/StoryTextBox.vue?vue&type=template&id=46605689":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/StoryTextBox.vue?vue&type=template&id=46605689 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  action: "#",
  "class": "relative"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500\"><label for=\"title\" class=\"sr-only\">Title</label><input type=\"text\" name=\"title\" id=\"title\" class=\"block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0\" placeholder=\"Title\"><label for=\"description\" class=\"sr-only\">Description</label><textarea rows=\"2\" name=\"description\" id=\"description\" class=\"block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm\" placeholder=\"Write a description...\"></textarea><!-- Spacer element to match the height of the toolbar --><div aria-hidden=\"true\"><div class=\"py-2\"><div class=\"h-9\"></div></div><div class=\"h-px\"></div><div class=\"py-2\"><div class=\"py-px\"><div class=\"h-9\"></div></div></div></div></div>", 1);

var _hoisted_3 = {
  "class": "absolute bottom-0 inset-x-px"
};
var _hoisted_4 = {
  "class": "flex flex-nowrap justify-end py-2 px-2 space-x-2 sm:px-3"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Assign ");

var _hoisted_6 = {
  "class": "relative"
};
var _hoisted_7 = ["src"];
var _hoisted_8 = {
  "class": "flex items-center"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = {
  "class": "ml-3 block font-medium truncate"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add a label ");

var _hoisted_12 = {
  "class": "relative"
};
var _hoisted_13 = {
  "class": "flex items-center"
};
var _hoisted_14 = {
  "class": "block font-medium truncate"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add a due date ");

var _hoisted_16 = {
  "class": "relative"
};
var _hoisted_17 = {
  "class": "flex items-center"
};
var _hoisted_18 = {
  "class": "block font-medium truncate"
};
var _hoisted_19 = {
  "class": "border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3"
};
var _hoisted_20 = {
  "class": "flex"
};
var _hoisted_21 = {
  type: "button",
  "class": "-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-sm text-gray-500 group-hover:text-gray-600 italic"
}, "Attach a file", -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
}, "Create")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("form", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Listbox"], {
    as: "div",
    modelValue: $setup.assigned,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.assigned = $event;
    }),
    "class": "flex-shrink-0"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxLabel"], {
        "class": "sr-only"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_5];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxButton"], {
        "class": "relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$setup.assigned.value === null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["UserCircleIcon"], {
            key: 0,
            "class": "flex-shrink-0 h-5 w-5 text-gray-300 sm:-ml-1",
            "aria-hidden": "true"
          })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
            key: 1,
            src: $setup.assigned.avatar,
            alt: "",
            "class": "flex-shrink-0 h-5 w-5 rounded-full"
          }, null, 8
          /* PROPS */
          , _hoisted_7)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.assigned.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block'])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.assigned.value === null ? 'Assign' : $setup.assigned.name), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "leave-active-class": "transition ease-in duration-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxOptions"], {
            "class": "absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.assignees, function (assignee) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxOption"], {
                  as: "template",
                  key: assignee.value,
                  value: assignee
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
                    var active = _ref.active;
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100' : 'bg-white', 'cursor-default select-none relative py-2 px-3'])
                    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [assignee.avatar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
                      key: 0,
                      src: assignee.avatar,
                      alt: "",
                      "class": "flex-shrink-0 h-5 w-5 rounded-full"
                    }, null, 8
                    /* PROPS */
                    , _hoisted_9)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["UserCircleIcon"], {
                      key: 1,
                      "class": "flex-shrink-0 h-5 w-5 text-gray-400",
                      "aria-hidden": "true"
                    })), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(assignee.name), 1
                    /* TEXT */
                    )])], 2
                    /* CLASS */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["value"]);
              }), 64
              /* STABLE_FRAGMENT */
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
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Listbox"], {
    as: "div",
    modelValue: $setup.labelled,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.labelled = $event;
    }),
    "class": "flex-shrink-0"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxLabel"], {
        "class": "sr-only"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_11];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxButton"], {
        "class": "relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["TagIcon"], {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.labelled.value === null ? 'text-gray-300' : 'text-gray-500', 'flex-shrink-0 h-5 w-5 sm:-ml-1']),
            "aria-hidden": "true"
          }, null, 8
          /* PROPS */
          , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.labelled.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block'])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.labelled.value === null ? 'Label' : $setup.labelled.name), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "leave-active-class": "transition ease-in duration-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxOptions"], {
            "class": "absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.labels, function (label) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxOption"], {
                  as: "template",
                  key: label.value,
                  value: label
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref2) {
                    var active = _ref2.active;
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100' : 'bg-white', 'cursor-default select-none relative py-2 px-3'])
                    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(label.name), 1
                    /* TEXT */
                    )])], 2
                    /* CLASS */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["value"]);
              }), 64
              /* STABLE_FRAGMENT */
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
  , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Listbox"], {
    as: "div",
    modelValue: $setup.dated,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.dated = $event;
    }),
    "class": "flex-shrink-0"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxLabel"], {
        "class": "sr-only"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_15];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxButton"], {
        "class": "relative inline-flex items-center rounded-full py-2 px-2 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap hover:bg-gray-100 sm:px-3"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CalendarIcon"], {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.dated.value === null ? 'text-gray-300' : 'text-gray-500', 'flex-shrink-0 h-5 w-5 sm:-ml-1']),
            "aria-hidden": "true"
          }, null, 8
          /* PROPS */
          , ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$setup.dated.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block'])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.dated.value === null ? 'Due date' : $setup.dated.name), 3
          /* TEXT, CLASS */
          )];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "leave-active-class": "transition ease-in duration-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxOptions"], {
            "class": "absolute right-0 z-10 mt-1 w-52 bg-white shadow max-h-56 rounded-lg py-3 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.dueDates, function (dueDate) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ListboxOption"], {
                  as: "template",
                  key: dueDate.value,
                  value: dueDate
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref3) {
                    var active = _ref3.active;
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
                      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([active ? 'bg-gray-100' : 'bg-white', 'cursor-default select-none relative py-2 px-3'])
                    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(dueDate.name), 1
                    /* TEXT */
                    )])], 2
                    /* CLASS */
                    )];
                  }),
                  _: 2
                  /* DYNAMIC */

                }, 1032
                /* PROPS, DYNAMIC_SLOTS */
                , ["value"]);
              }), 64
              /* STABLE_FRAGMENT */
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
  , ["modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["PaperClipIcon"], {
    "class": "-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500",
    "aria-hidden": "true"
  }), _hoisted_22])]), _hoisted_23])])]);
}

/***/ }),

/***/ "./resources/js/Pages/Components/StoryTextBox.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Components/StoryTextBox.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StoryTextBox_vue_vue_type_template_id_46605689__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoryTextBox.vue?vue&type=template&id=46605689 */ "./resources/js/Pages/Components/StoryTextBox.vue?vue&type=template&id=46605689");
/* harmony import */ var _StoryTextBox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoryTextBox.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Components/StoryTextBox.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_christopherglazier_sites_asclepius_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_christopherglazier_sites_asclepius_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_StoryTextBox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_StoryTextBox_vue_vue_type_template_id_46605689__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Components/StoryTextBox.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Components/StoryTextBox.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Pages/Components/StoryTextBox.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StoryTextBox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StoryTextBox_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StoryTextBox.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/StoryTextBox.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Components/StoryTextBox.vue?vue&type=template&id=46605689":
/*!**************************************************************************************!*\
  !*** ./resources/js/Pages/Components/StoryTextBox.vue?vue&type=template&id=46605689 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StoryTextBox_vue_vue_type_template_id_46605689__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_StoryTextBox_vue_vue_type_template_id_46605689__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./StoryTextBox.vue?vue&type=template&id=46605689 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Components/StoryTextBox.vue?vue&type=template&id=46605689");


/***/ })

}]);