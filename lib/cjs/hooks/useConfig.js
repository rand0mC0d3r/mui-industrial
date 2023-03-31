"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.useConfig=void 0;var react_1=require("react"),Store_1=__importDefault(require("../Store")),logger_1=require("../utils/logger"),useConfig=function(){var e=(0,react_1.useContext)(Store_1.default).handleKeyboardsRegister,t=(0,react_1.useContext)(Store_1.default).handleCommandsRegister,r=(0,react_1.useContext)(Store_1.default).handleKeyboardsDeRegister,o=(0,react_1.useContext)(Store_1.default).handleCommandsDeRegister;return{config:function(r){var o=r.keyboards,n=r.commands;try{o&&(null==o?void 0:o.length)>0&&e(o),n&&(null==n?void 0:n.length)>0&&t(n)}catch(e){(0,logger_1.logPackage)(e)}},configUnmount:function(e){var t=e.keyboards,n=e.commands;try{t&&(null==t?void 0:t.length)>0&&r(t.map(function(e){return e.id})),n&&(null==n?void 0:n.length)>0&&o(n.map(function(e){return e.id}))}catch(e){(0,logger_1.logPackage)(e)}}}};exports.useConfig=useConfig;