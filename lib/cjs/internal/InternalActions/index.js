"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var jsx_runtime_1=require("react/jsx-runtime"),material_1=require("@mui/material"),react_1=require("react");exports.default=function(e){var t=e.actions,i=e.placement,n=void 0===i?"top":i,r=e.fontSize,l=void 0===r?"20px":r;return(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{children:t&&t.filter(function(e,t){return t<3}).map(function(e){return(0,jsx_runtime_1.jsx)(material_1.Tooltip,__assign({arrow:!0},{placement:n,title:null==e?void 0:e.tooltip},{children:(0,jsx_runtime_1.jsx)("span",{children:(0,jsx_runtime_1.jsx)(material_1.IconButton,__assign({size:"small"},{onClick:function(){return null==e?void 0:e.onClick()},disabled:null==e?void 0:e.disabled},{children:(0,react_1.cloneElement)(null==e?void 0:e.icon,{style:{fontSize:l},color:"action"})}))})}),null==e?void 0:e.tooltip)})})};