"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Store_1 = __importDefault(require("../../Store"));
exports.default = (function () {
    var shortcuts = (0, react_1.useContext)(Store_1.default).shortcuts;
    var handleKeyboardTrigger = (0, react_1.useContext)(Store_1.default).handleKeyboardTrigger;
    var handleUserKeyPress = (0, react_1.useCallback)(function (event) {
        var keyCode = event.keyCode, shiftKey = event.shiftKey, metaKey = event.metaKey, ctrlKey = event.ctrlKey, altKey = event.altKey;
        var result = shortcuts
            .find(function (_a) {
            var ascii = _a.ascii, char = _a.char;
            return ascii === keyCode || char === (keyCode === 32 ? 'Space' : String.fromCharCode(keyCode));
        });
        if (!result || !(result === null || result === void 0 ? void 0 : result.onTrigger))
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.altKey) && !altKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.ctrlKey) && !ctrlKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.metaKey) && !metaKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.shiftKey) && !shiftKey)
            return;
        handleKeyboardTrigger(result.id);
    }, [shortcuts, handleKeyboardTrigger]);
    (0, react_1.useEffect)(function () {
        window.addEventListener('keydown', handleUserKeyPress);
        return function () { return window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
});
