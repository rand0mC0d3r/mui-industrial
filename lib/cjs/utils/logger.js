"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lognPackage = exports.logPackage = exports.packageName = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.packageName = 'mui-industrial';
var logPackage = function () {
    var props = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        props[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArray(["[".concat(exports.packageName, "]:")], props, false));
};
exports.logPackage = logPackage;
var lognPackage = function () {
    var props = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        props[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArray(["\n\n[".concat(exports.packageName, "]:")], props, false));
};
exports.lognPackage = lognPackage;
