/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/ts/RuleValidators/LengthValidator.ts":
/*!*****************************************************!*\
  !*** ./assets/ts/RuleValidators/LengthValidator.ts ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [unused] [could be renamed] */
/*! export length [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "length": () => /* binding */ length
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _RuleValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleValidator */ "./assets/ts/RuleValidators/RuleValidator.ts");
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

class LengthValidator extends _RuleValidator__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(value) {
        super();
        this.setValue(value);
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    validate(input) {
        return input.length === this.value;
    }
}
const length = (value) => {
    return new LengthValidator(value);
};


/***/ }),

/***/ "./assets/ts/RuleValidators/MaxLengthValidator.ts":
/*!********************************************************!*\
  !*** ./assets/ts/RuleValidators/MaxLengthValidator.ts ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [unused] [could be renamed] */
/*! export maxLength [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maxLength": () => /* binding */ maxLength
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _RuleValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleValidator */ "./assets/ts/RuleValidators/RuleValidator.ts");
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

class MaxLengthValidator extends _RuleValidator__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(value) {
        super();
        this.setValue(value);
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    validate(input) {
        return input.length <= this.value;
    }
}
const maxLength = (value) => {
    return new MaxLengthValidator(value);
};


/***/ }),

/***/ "./assets/ts/RuleValidators/MinLengthValidator.ts":
/*!********************************************************!*\
  !*** ./assets/ts/RuleValidators/MinLengthValidator.ts ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [unused] [could be renamed] */
/*! export minLength [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "minLength": () => /* binding */ minLength
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _RuleValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleValidator */ "./assets/ts/RuleValidators/RuleValidator.ts");
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

class MinLengthValidator extends _RuleValidator__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(value) {
        super();
        this.setValue(value);
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    validate(input) {
        return input.length >= this.value;
    }
}
const minLength = (value) => {
    return new MinLengthValidator(value);
};


/***/ }),

/***/ "./assets/ts/RuleValidators/PatternValidator.ts":
/*!******************************************************!*\
  !*** ./assets/ts/RuleValidators/PatternValidator.ts ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [unused] [could be renamed] */
/*! export pattern [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pattern": () => /* binding */ pattern
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _RuleValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleValidator */ "./assets/ts/RuleValidators/RuleValidator.ts");
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

class PatternValidator extends _RuleValidator__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(value) {
        super();
        this.setValue(value);
    }
    setValue(value) {
        this.value = value;
        return this;
    }
    validate(input) {
        return this.value.test(input);
    }
}
const pattern = (value) => {
    return new PatternValidator(value);
};


/***/ }),

/***/ "./assets/ts/RuleValidators/RuleValidator.ts":
/*!***************************************************!*\
  !*** ./assets/ts/RuleValidators/RuleValidator.ts ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RuleValidator
/* harmony export */ });
class RuleValidator {
}


/***/ }),

/***/ "./assets/ts/index.ts":
/*!****************************!*\
  !*** ./assets/ts/index.ts ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [used] [usage prevents renaming] */
/*! export length [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export maxLength [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export minLength [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! export pattern [provided] [maybe used (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "length": () => /* reexport safe */ _RuleValidators_LengthValidator__WEBPACK_IMPORTED_MODULE_0__.length,
/* harmony export */   "minLength": () => /* reexport safe */ _RuleValidators_MinLengthValidator__WEBPACK_IMPORTED_MODULE_1__.minLength,
/* harmony export */   "maxLength": () => /* reexport safe */ _RuleValidators_MaxLengthValidator__WEBPACK_IMPORTED_MODULE_2__.maxLength,
/* harmony export */   "pattern": () => /* reexport safe */ _RuleValidators_PatternValidator__WEBPACK_IMPORTED_MODULE_3__.pattern,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _RuleValidators_LengthValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleValidators/LengthValidator */ "./assets/ts/RuleValidators/LengthValidator.ts");
/* harmony import */ var _RuleValidators_MinLengthValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RuleValidators/MinLengthValidator */ "./assets/ts/RuleValidators/MinLengthValidator.ts");
/* harmony import */ var _RuleValidators_MaxLengthValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RuleValidators/MaxLengthValidator */ "./assets/ts/RuleValidators/MaxLengthValidator.ts");
/* harmony import */ var _RuleValidators_PatternValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RuleValidators/PatternValidator */ "./assets/ts/RuleValidators/PatternValidator.ts");
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */




// eslint-disable-next-line func-names
const simpleValidator = function (input, rules) {
    return rules.every(rule => rule.validate(input));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simpleValidator);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!**************************!*\
  !*** ./assets/ts/app.ts ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__ */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./assets/ts/index.ts");
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

const { length, pattern } = _index__WEBPACK_IMPORTED_MODULE_0__;
const form = document.querySelector("form.form");
const result = document.querySelector("#result");
function handleValidation(event) {
    const target = event.target;
    const isValid = (0,_index__WEBPACK_IMPORTED_MODULE_0__.default)(target.value, [
        length(4),
        pattern(/Java/g),
    ]);
    if (isValid) {
        result.classList.remove("is-error");
        result.classList.add("is-success");
        result.innerText = "Válido";
        return true;
    }
    result.classList.remove("is-success");
    result.classList.add("is-error");
    result.innerText = "Inválido";
    return false;
}
form.addEventListener("keyup", handleValidation);

})();

/******/ })()
;