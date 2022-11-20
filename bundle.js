"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("@mui/material"),n=require("@mui/material/styles"),o=require("react"),i=require("react-dom"),r=require("@mui/icons-material/CheckBoxOutlineBlankOutlined"),a=require("@mui/icons-material/CheckBoxOutlined"),l=require("@mui/icons-material/AppsOutage"),u=require("@mui/icons-material/Close"),s=require("re-resizable"),c=require("@mui/icons-material/LockOpenOutlined"),d=require("@mui/icons-material/LockOutlined");function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f,x=p(r),h=p(a),v=p(l),m=p(u),y=p(c),g=p(d),C=function(){return C=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},C.apply(this,arguments)};function b(e,t,n){if(n||2===arguments.length)for(var o,i=0,r=t.length;i<r;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))}!function(e){e.Top="top",e.Bottom="bottom"}(f||(f={}));var j=n.styled("div")((function(){return{display:"flex",flexWrap:"nowrap",overflow:"scroll",justifyContent:"flex-start","&::-webkit-scrollbar":{display:"none"}}})),k=n.styled("div")((function(){return{display:"flex",flexWrap:"nowrap",overflow:"hidden",justifyContent:"flex-end",alignItems:"center",flex:"0 1 auto",minWidth:"18px","&::-webkit-scrollbar":{display:"none"}}}));function S(){var t=o.useContext(H).status;return e.jsxs(e.Fragment,{children:[t.some((function(e){return!e.secondary}))&&e.jsx(j,C({},{id:"".concat("mui-status-statusBar","-primary")})),t.some((function(e){return e.secondary}))&&e.jsx(k,C({},{id:"".concat("mui-status-statusBar","-secondary")}))]})}function w(n){var i=n.tooltip,r=n.children,a=o.useContext(H).tooltipComponent;return e.jsx(e.Fragment,{children:void 0!==a&&i?a(i,e.jsx("span",{children:r})):e.jsx(t.Tooltip,C({arrow:!0,title:i},{children:e.jsx("span",{children:r})}))})}var I=n.styled("div")((function(){return{flex:"1 0 auto",overflow:"hidden"}})),q=n.styled("div")((function(){return{display:"flex",flexDirection:"column",flex:"1 1 auto"}})),T=n.styled("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"column",position:"absolute",borderTop:"1px solid ".concat(t.palette.divider),backgroundColor:t.palette.background.default,bottom:"0px",left:"0px",alignItems:"center",right:"0px","& > div > div:nth-child(2) > div:not(:first-child)":{display:"none"}}})),O=n.styled("div")((function(){return{display:"flex",flexDirection:"column",flex:"1 1 auto",justifyContent:"center",alignItems:"center",gap:"8px"}})),E=n.styled("div")((function(){return{display:"flex",flexDirection:"row",gap:"0px"}})),A=n.styled(m.default)((function(){return{fontSize:"20px"}})),D=n.styled(t.Typography)((function(e){var t=e.theme,n=e.activated;return{padding:"4px 12px",cursor:"pointer",backgroundColor:"true"===n?t.palette.primary.main:"transparent",color:"true"===n?t.palette.background.default:t.palette.text.secondary,"&:hover":{backgroundColor:"true"===n?t.palette.primary.dark:t.palette.divider,color:"true"===n?t.palette.background.default:t.palette.text.primary}}}));function B(){var n=o.useContext(H),i=n.status,r=n.updateConsoleActiveId,a=n.updateIsConsoleOpen,l=o.useContext(H).settings,u=l.consoleActiveId,c=l.isConsoleOpen,d=function(e){return e===u},p=i.filter((function(e){return"console"===e.type})),f=o.useState("300px"),x=f[0],h=f[1],m=o.useState("100%"),y=m[0],g=m[1],b=o.useCallback((function(e){27===e.keyCode&&a()}),[]);return o.useEffect((function(){return window.addEventListener("keydown",b),function(){window.removeEventListener("keydown",b)}}),[b]),e.jsx(e.Fragment,{children:c&&e.jsx(e.Fragment,{children:i.some((function(e){return"console"===e.type}))&&e.jsx(T,C({},{id:"mui-status-console-wrapper"},{children:e.jsx(s.Resizable,C({onResizeStop:function(e,t,n,o){var i=Number(x.replace("px",""))+o.height;i<125?r({}):(h("".concat(i,"px")),g("100%"))},style:{display:"flex",flexDirection:"column"},minHeight:"75px",maxHeight:"950px",defaultSize:{width:y,height:x}},{children:e.jsx(q,{children:p.some((function(e){return e.uniqueId===u}))?e.jsxs("div",C({style:{flex:"1 1 auto",display:"flex",flexDirection:"column"}},{children:[e.jsxs("div",C({style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},{children:[e.jsx(E,{children:p.map((function(t){var n=t.uniqueId,o=t.title;return e.jsx(D,C({},{key:n,variant:"caption",onClick:function(){return r({id:n})},activated:d(n).toString()},{children:o||n}))}))}),e.jsx(w,C({},{tooltip:"Close console section"},{children:e.jsx(A,C({},{onClick:function(){return r({})}}))}))]})),e.jsx(I,C({},{id:"mui-status-console"}))]})):e.jsxs(O,{children:[e.jsx(v.default,{}),e.jsx(t.Typography,C({},{variant:"caption",color:"textSecondary"},{children:"Seems no consoles available. Select one from above"}))]})})}))}))})})}var z=n.styled("div")((function(e){return{height:"100%",width:"100%",gap:"0px",position:"absolute",display:"flex",top:"0px",bottom:"0px",left:"0px",right:"0px",flexDirection:e.column===f.Top?"column-reverse":"column"}})),R=n.styled("div")((function(){return{flex:"1 1 auto",overflow:"hidden",position:"relative"}})),F=n.styled(t.Typography)((function(){return{userSelect:"none"}})),P=n.styled("div")((function(){return{display:"flex",flexDirection:"row",gap:"16px",padding:"8px"}})),L=n.styled("div")((function(e){var t=e.theme;return{display:"flex",minWidth:"165px",cursor:"pointer",flexDirection:"row",alignItems:"center",gap:"4px",padding:"4px 6px","&:hover":{backgroundColor:t.palette.primary.light,color:"".concat(t.palette.background.default," !important")}}})),W=n.styled("div")((function(e){var t=e.theme,n=e.position;return{gap:"4px",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"light"===t.palette.mode?t.palette.background.default:t.palette.background.paper,boxShadow:"inset 0px ".concat("top"===n?-3:3,"px 0px -2px ").concat(t.palette.divider)}}));function N(n){var i=n.children,r=o.useContext(H),a=r.status,l=r.handleStatusVisibilityToggle,u=o.useContext(H).settings,s=u.position,c=u.statusBarAnnounced,d=u.upperBar,p=o.useState(null),f=p[0],v=p[1],m=Boolean(f),y=function(t){return e.jsxs(L,C({onClick:function(){return l({id:t.uniqueId})}},{children:[t.visible?e.jsx(h.default,{}):e.jsx(x.default,{}),t.children||e.jsx(F,C({variant:"caption",color:"textSecondary"},{children:"No content for child"}))]}))};return e.jsxs(e.Fragment,{children:[e.jsxs(z,C({id:"mui-status-wrapper"},{column:s},{children:[e.jsxs(R,C({id:"mui-status-children"},{children:[i,a.some((function(e){return"console"===e.type}))&&e.jsx(B,{})]})),a.some((function(e){return e.visible}))&&e.jsx(W,C({position:s},{onContextMenu:function(e){e.preventDefault(),v(e.currentTarget)}},{children:!c&&e.jsx(S,{})}))]})),e.jsx(t.Popover,C({id:"toggle-status-popover"},{open:m,anchorEl:f,onClose:function(){return v(null)},elevation:1},{anchorOrigin:{vertical:d?"top":"bottom",horizontal:"center"},transformOrigin:{vertical:d?"top":"bottom",horizontal:"center"},style:{marginTop:"".concat(12*(d?1:-1),"px")}},{children:e.jsx(P,C({},{onContextMenu:function(e){e.preventDefault()}},{children:[!1,!0].map((function(t){return e.jsx("div",{children:a.filter((function(e){return e.secondary===t})).map((function(t){return function(t){return e.jsx(w,C({},{key:t.uniqueId,tooltip:"Toggle visibility of tile",children:y(t)}))}(t)}))},t.toString())}))}))}))]})}var U={position:f.Top,expand:!0,statusBarAnnounced:!1,allowRightClick:!0,debug:!1,hasLock:!0,isConsoleOpen:!1},H=o.createContext({});var M=function(e,t){switch(e){case"primary":return t.palette.primary.main;case"secondary":return t.palette.secondary.main;default:return""}},J=function(e,t){switch(e){case"primary":return t.palette.primary.dark;case"secondary":return t.palette.secondary.dark;default:return t.palette.divider}},V=n.styled(t.Tooltip)((function(){return{padding:"4px 8px"}})),X=n.styled("div")((function(e){var t=e.theme,n=e.hasClick,o=e.highlight,i=e.isDisabled;return{WebkitFontSmoothing:"auto",height:"100%",display:"flex",flex:"0 0 auto",alignItems:"center",gap:"16px",justifyContent:"center",alignSelf:"center",position:"relative",cursor:n&&!i?"pointer":"",backgroundColor:M(o,t),color:t.palette.text.primary,"& > div > *":{color:"default"!==o?"".concat(t.palette.background.default," !important"):""},"& > span > div > *":{color:"default"!==o?"".concat(t.palette.background.default," !important"):""},"&:hover":n&&!i?{backgroundColor:J(o,t),color:"".concat(t.palette.text.primary)}:{}}}));function _(t){var n=t.id,r=t.secondary,a=void 0!==r&&r,l=t.style,u=t.onClick,s=t.onContextMenu,c=t.disabled,d=void 0!==c&&c,p=t.highlight,f=void 0===p?"default":p,x=t.tooltip,h=void 0===x?"":x,v=t.children,m=o.useContext(H),y=m.status,g=m.handleStatusUpdate,b=m.handleStatusAnnouncement,j=m.handleStatusDestroy,k=o.useContext(H).settings.allowRightClick,S=o.useState(),w=S[0],I=S[1],q=o.useState(!1),T=q[0],O=q[1],E=o.useState(null),A=E[0],D=E[1],B=o.useState(null),z=B[0],R=B[1],F=o.useCallback((function(e){return b({id:e,ownId:w,secondary:a,children:v})}),[a,w,v,b]),P=o.useCallback((function(){j({id:n})}),[n]);return o.useEffect((function(){I((Math.random()+1).toString(36).substring(7))}),[]),o.useEffect((function(){w&&null!==A&&g({id:n,ownId:w,children:v})}),[n,w,A,v]),o.useEffect((function(){n&&w&&null===A&&!T&&(y.some((function(e){return e.uniqueId===n}))||F(n)&&O(!0))}),[n,w,A,y,F,T]),o.useEffect((function(){var e=y.find((function(e){return e.uniqueId===n}));null!==A&&(null==A?void 0:A.visible)===(null==e?void 0:e.visible)||!e||D(e)}),[y,n,A]),o.useLayoutEffect((function(){null!==A&&R(document.getElementById("mui-status-statusBar-".concat(a?"secondary":"primary"))||null)}),[a,A,n]),o.useEffect((function(){return function(){P()}}),[P]),o.useEffect((function(){n||console.error("Please define an id for the status bar item")}),[n]),e.jsx(e.Fragment,{children:null!==A&&!!n&&z&&i.createPortal(A.visible&&v?e.jsx(X,C({},{id:n,highlight:f,hasClick:!!u,isDisabled:d,key:"mui-status-".concat(n),onClick:function(e){void 0===u||d||(e.preventDefault(),u(e),g({id:n,ownId:w,children:v}))},onContextMenu:function(e){e.preventDefault(),k&&void 0!==s&&!d&&s(e)},style:C(C({},l),{order:A.index})},{children:e.jsx(V,C({title:h,arrow:!0},{children:e.jsx("span",{children:v})}))})):e.jsx(e.Fragment,{}),z)})}var Y=n.styled("div")((function(e){var t=e.theme;return{padding:"8px",display:"flex",justifyContent:"space-between",borderTop:"1px solid ".concat(t.palette.divider),userSelect:"none",alignItems:"center"}})),G=n.styled("div")((function(e){var t=e.theme;return{display:"flex",gap:"".concat(t.shape.borderRadius,"px"),justifyContent:"flex-end",alignItems:"center"}})),K=n.styled("div")((function(e){var n=e.theme,o=e.elevation;return{display:"flex",alignItems:"stretch",flexDirection:"column",backgroundColor:"".concat(t.alpha(n.palette.background.default,.75)),backdropFilter:"blur(8px)",borderRadius:"".concat(n.shape.borderRadius,"px"),margin:"".concat(n.spacing(.5)," 0px"),padding:n.spacing(.5),border:"1px solid ".concat(n.palette.divider),boxShadow:n.shadows[o]}})),Q=n.styled(t.Typography)((function(){return{lineHeight:1}}));var Z=n.styled(t.Stack)((function(e){var t=e.theme,n=e.reverse;return{gap:"".concat(t.spacing(.5)),flexDirection:"true"===n?"row-reverse":"row",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap",userSelect:"none",WebkitFontSmoothing:"antialiased",shapeRendering:"geometricPrecision"}})),$=n.styled(t.SvgIcon)((function(e){return{fontSize:"14px",flex:"0 1 100%",transform:"true"===e.reverseicon?"scaleX(-1)":"scaleX(1)"}})),ee=n.styled(t.Typography)((function(){return{whiteSpace:"nowrap",userSelect:"none",fontSize:"12px",lineHeight:"inherit"}})),te=n.styled(t.Typography)((function(e){var t=e.theme;return{borderRadius:"".concat(2*t.shape.borderRadius,"px"),padding:"0px 6px",lineHeight:"1.3",fontSize:"10px",backgroundColor:t.palette.divider,border:"0.5px solid ".concat(t.palette.divider)}})),ne=n.styled("img")((function(e){return{width:"18px",height:"18px",borderRadius:e.mask?"50%":"0px"}}));exports.Status=_,exports.StatusConsole=function(t){var n=t.id,r=t.secondary,a=void 0!==r&&r,l=t.style,u=t.onClick,s=t.tooltip,c=void 0===s?"":s,d=t.children,p=t.console,f=t.consoleTitle,x=o.useContext(H),h=x.status,v=x.handleStatusTypeUpdate,m=x.handleStatusConsoleTypeUpdate,y=x.updateConsoleActiveId,g=o.useContext(H).settings,b=g.consoleActiveId,j=g.isConsoleOpen,k=o.useState(null),S=k[0],w=k[1],I=o.useState(null),q=I[0],T=I[1];return o.useEffect((function(){T(document.getElementById("mui-status-console")||null)}),[S,b,j]),o.useEffect((function(){var e=h.find((function(e){return e.uniqueId===n}));null===S&&e&&(w(e),v({id:n,type:"console"}))}),[h,n,S]),o.useEffect((function(){S&&m({id:n,title:f})}),[S,n,f]),e.jsxs(e.Fragment,{children:[e.jsx(_,C({},{id:n,tooltip:c,secondary:a,highlight:S&&j&&(null==S?void 0:S.uniqueId)===b?"primary":"default",onClick:function(){return u&&u(),void y(j&&b===n?{}:{id:null==S?void 0:S.uniqueId})},style:C(C({},l),{cursor:"context-menu",minWidth:"24px"})},{children:d})),q&&S&&S.uniqueId===b&&i.createPortal(p,q)]})},exports.StatusHelper=function(t){var n=t.icon,o=t.text,i=t.notifications,r=t.image,a=t.mask,l=void 0!==a&&a,u=t.reverse,s=void 0!==u&&u,c=t.reverseIcon,d=void 0!==c&&c,p=t.className,f=t.style;return e.jsxs(Z,C({},{id:"statusHelper",style:f,className:p,reverse:s.toString()},{children:[n&&e.jsx($,C({},{id:"sh.icon",reverseicon:d.toString()},{children:n})),r&&e.jsx(ne,C({},{id:"sh.image",alt:"Status entry",mask:l,src:r})),i&&e.jsx(te,C({},{id:"sh.notifications",variant:"subtitle2",color:"textPrimary"},{children:i})),o&&e.jsx(ee,C({},{id:"sh.text",variant:"caption"},{children:o}))]}))},exports.StatusPanel=function(n){var i=n.id,r=n.secondary,a=void 0!==r&&r,l=n.elevation,u=void 0===l?2:l,s=n.style,c=n.onClick,d=n.onClose,p=n.highlight,f=n.tooltip,x=void 0===f?"":f,h=n.children,v=n.popoverStyle,m=n.popoverClassName,b=n.popover,j=n.popoverTitle,k=n.popoverActions,S=o.useContext(H),I=S.status,q=S.settings,T=S.popoverComponent,O=o.useState(null),E=O[0],A=O[1],D=o.useState(!1),B=D[0],z=D[1],R=o.useState(null),F=R[0],P=R[1],L=o.useState(!1),W=L[0],N=L[1],U=Boolean(F),M=W?"top":"bottom",J=W?"top":"bottom",V=(null==E?void 0:E.secondary)?"right":"left",X={id:"mui-status-panel-given-popover-".concat(i),position:W?"top":"bottom",isSecondary:null==E?void 0:E.secondary,popover:b,popoverProps:{anchorEl:F,onClose:d,open:U,style:{marginTop:"".concat(12*(W?1:-1),"px")},anchorOrigin:{vertical:M,horizontal:V},transformOrigin:{vertical:J,horizontal:V}}},Z={open:U,anchorEl:F,onClose:d,elevation:u,id:"mui-status-panel-popover-".concat(i),className:m,style:C({marginTop:"".concat(12*(W?1:-1),"px")},v)};return o.useEffect((function(){var e=I.find((function(e){return e.uniqueId===i}));null===E&&e&&A(e)}),[I,i,E]),e.jsxs(e.Fragment,{children:[e.jsx(_,C({},{id:i,tooltip:x,highlight:B||U?"primary":p,secondary:a,onClick:function(e){c&&!B&&c(),P(F&&!B?null:e.currentTarget),N(e.pageY<screen.height/2)},style:C(C({},s),{cursor:"context-menu",minWidth:"24px"})},{children:h})),void 0!==T?T(X):e.jsx(t.Popper,C({},C({keepMounted:B},Z),{children:e.jsx(t.ClickAwayListener,C({onClickAway:function(){return d&&!B&&d(),B||P(null),void(q.hasLock||P(null))}},{children:e.jsxs(K,C({},{elevation:u},{children:[b,e.jsxs(Y,{children:[e.jsx(Q,C({variant:"caption",color:"textSecondary"},{children:j})),e.jsxs(G,{children:[k,q.hasLock&&e.jsx(w,C({tooltip:"Toggle keep-open"},{children:B?e.jsx(g.default,{onClick:function(){return z(!B)},color:"primary",style:{fontSize:14}}):e.jsx(y.default,{onClick:function(){return z(!B)},style:{fontSize:14}})}))]})]})]}))}))}))]})},exports.StatusProvider=function(t){var n=t.expand,i=t.hasLock,r=t.position,a=void 0===r?f.Top:r,l=t.allowRightClick,u=t.debug,s=t.tooltipComponent,c=t.popoverComponent,d=t.children,p=o.useState([]),x=p[0],h=p[1],v=o.useState(U),m=v[0],y=v[1];return o.useEffect((function(){}),[]),o.useEffect((function(){return localStorage.setItem("mui-status.settings",JSON.stringify(m))}),[m]),o.useEffect((function(){return localStorage.setItem("mui-status.status",JSON.stringify(x.map((function(e){return C(C({},e),{children:void 0})}))))}),[x]),o.useEffect((function(){y((function(e){return C(C({},e),{expand:n||U.expand,position:a,allowRightClick:l||U.allowRightClick,debug:u||U.debug,hasLock:(t=i,o=U.hasLock,void 0===t?o:t)});var t,o}))}),[l,n,a,u,i]),o.useEffect((function(){m.debug&&console.log("mui-status-store:",C(C({},m),{status:x}))}),[m,x]),e.jsx(H.Provider,C({value:{tooltipComponent:s,popoverComponent:c,settings:m,updateConsoleActiveId:function(e){var t=e.id;y((function(e){return C(C({},e),{consoleActiveId:t||void 0,isConsoleOpen:!!t})}))},updateIsConsoleOpen:function(){y((function(e){return C(C({},e),{isConsoleOpen:!e.isConsoleOpen})}))},updateIsConsoleClosed:function(){y((function(e){return C(C({},e),{isConsoleOpen:!1})}))},triggerStatusBarAnnounced:function(){m.statusBarAnnounced||y((function(e){return C(C({},e),{statusBarAnnounced:!0})}))},status:x,handleStatusVisibilityToggle:function(e){var t=e.id;h((function(e){return e.map((function(e){return e.uniqueId===t?C(C({},e),{visible:!e.visible}):e}))}))},handleStatusTypeUpdate:function(e){var t=e.id,n=e.type;console.info("mui-status: 🆗 Updated type for id: [".concat(t,"] to: [").concat(n,"]")),h((function(e){return e.map((function(e){return e.uniqueId===t?C(C({},e),{type:n}):e}))}))},handleStatusConsoleTypeUpdate:function(e){var t=e.id,n=e.title;console.info("mui-status: 🆗 Updated console title for id: [".concat(t,"] to: [").concat(n,"]")),h((function(e){return e.map((function(e){return e.uniqueId===t?C(C({},e),{title:n}):e}))}))},handleStatusUpdate:function(e){var t=e.id,n=e.ownId,o=e.children;h((function(e){var i=e.find((function(e){return e.uniqueId===t}));return(null==i?void 0:i.ownId)!==n?(console.error("mui-status: ❌ Faulty status update captured for: [".concat(t,"] & ownId: [").concat(n,"], but expected ownId: [").concat(null==i?void 0:i.ownId,"]")),e):e.map((function(e){return e.uniqueId===t&&e.ownId===n?C(C({},e),{children:o}):e}))}))},handleStatusAnnouncement:function(e){var t=e.id,n=e.ownId,o=e.secondary,i=e.children;h((function(e){var r=e.find((function(e){return e.uniqueId===t&&e.ownId!==n}));return r?(console.error("mui-status: ❌ Status entry already registered with id: [".concat(t,"] & ownId: [").concat(n,"], but expected ownId [").concat(r.ownId,"]")),e):(m.debug&&console.info("mui-status: 🆗 Status entry registered with id: [".concat(t,"] & ownId: [").concat(n,"]")),b(b([],e.filter((function(e){return e.uniqueId!==t})),!0),[{index:e.length,uniqueId:t,ownId:n,visible:!0,secondary:o,children:i}],!1))}))},handleStatusDestroy:function(e){var t=e.id;h((function(e){return b([],e.filter((function(e){return e.uniqueId!==t})),!0)}))}}},{children:e.jsx(N,C({},{children:d}))}))};
