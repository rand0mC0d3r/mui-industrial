"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var jsx_runtime_1=require("react/jsx-runtime"),material_1=require("@mui/material"),react_1=require("react"),KeyboardHelper_1=__importDefault(require("../../Shortcuts/KeyboardHelper")),Store_1=__importDefault(require("../../Store")),InternalHeader_1=__importDefault(require("../InternalHeader")),css_1=require("./css"),kbdId="commands";exports.default=function(){var e=(0,react_1.useContext)(Store_1.default),t=e.handleKeyboardRegister,n=e.handleCallCommand,r=e.commands,i=(0,react_1.useState)(!1),s=i[0],a=i[1],l=(0,react_1.useState)(""),o=l[0],u=l[1];return(0,react_1.useEffect)(function(){t({id:kbdId,shiftKey:!0,char:"P",metaKey:!0,onTrigger:function(){return a(function(e){return!e})},label:"Hide/Show quick commands"})}),(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{children:s&&(0,jsx_runtime_1.jsx)("div",__assign({style:{position:"absolute",top:"32px",display:"flex",justifyContent:"center",width:"100%"}},{children:(0,jsx_runtime_1.jsx)(material_1.ClickAwayListener,__assign({onClickAway:function(){return a(!1)}},{children:(0,jsx_runtime_1.jsx)(material_1.Paper,__assign({style:{width:"60vw",maxWidth:"750px",padding:"12px",borderRadius:"8px"},elevation:8},{children:(0,jsx_runtime_1.jsx)(material_1.Autocomplete,{disablePortal:!0,open:!0,autoHighlight:!0,inputValue:o,clearOnEscape:!0,onClose:function(e,t){"escape"===t&&a(!1)},autoSelect:!0,onInputChange:function(e,t){t&&(e&&"blur"!==(null==e?void 0:e.type)||!e)&&u(t)},onChange:function(e,t){t&&(e&&"blur"!==(null==e?void 0:e.type)||!e)&&(n(t.id),a(!1))},fullWidth:!0,openOnFocus:!0,style:{position:"relative"},PaperComponent:function(e){var t=e.children;return(0,jsx_runtime_1.jsxs)(material_1.Paper,__assign({style:{position:"relative"}},{children:[(0,jsx_runtime_1.jsx)("div",__assign({style:{position:"relative"}},{children:t})),(0,jsx_runtime_1.jsx)(InternalHeader_1.default,{id:"quickCommands",noDefaults:!0,title:"Quick commands"})]}))},renderOption:function(e,t){return(0,jsx_runtime_1.jsx)("div",__assign({},e,{onContextMenu:function(e){return e.preventDefault()}},{children:(0,jsx_runtime_1.jsxs)(material_1.Box,__assign({display:"flex",justifyContent:"space-between",style:{width:"100%"},alignItems:"center"},{children:[(0,jsx_runtime_1.jsxs)(material_1.Box,__assign({display:"flex",style:{gap:"8px"},flexWrap:"nowrap",alignItems:"center"},{children:[(0,react_1.cloneElement)(t.icon,{style:{fontSize:"16px"}}),(n=t.label,r=o,i=n.split(new RegExp("(".concat(r,")"),"gi")),(0,jsx_runtime_1.jsx)(material_1.Typography,__assign({variant:"subtitle2",color:"textSecondary"},{children:i.map(function(e,t){return(0,jsx_runtime_1.jsx)(css_1.StyledHighlight,__assign({highlight:e.toLowerCase()===r.toLowerCase()?"true":"false"},{children:e}),t)})})))]})),t.shortcutId&&(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{children:(0,jsx_runtime_1.jsx)(KeyboardHelper_1.default,{shortcutId:t.shortcutId,asChip:!0})})]}))}));var n,r,i},id:"combo-box-demo",options:r,renderInput:function(e){return(0,jsx_runtime_1.jsx)(material_1.TextField,__assign({autoFocus:!0},e,{fullWidth:!0,size:"small",label:"Commands"}))}})}))}))}))})};