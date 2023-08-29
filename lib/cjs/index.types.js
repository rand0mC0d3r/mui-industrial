"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.Severity = exports.PopperHeight = exports.PopperWidth = exports.PlacementPosition = exports.StatusType = exports.Highlight = exports.localStorageKeyHeight = exports.domStatusBarId = exports.domConsoleHeader = exports.domConsoleId = void 0;
exports.domConsoleId = 'mui-status-console';
exports.domConsoleHeader = 'mui-status-console-header';
exports.domStatusBarId = 'mui-status-statusBar';
exports.localStorageKeyHeight = 'mui-industrial-console-height';
var Highlight;
(function (Highlight) {
    Highlight["DEFAULT"] = "default";
    Highlight["PRIMARY"] = "primary";
    Highlight["SECONDARY"] = "secondary";
})(Highlight = exports.Highlight || (exports.Highlight = {}));
var StatusType;
(function (StatusType) {
    StatusType["SIMPLE"] = "simple";
    StatusType["POPPER"] = "popper";
    StatusType["CONSOLE"] = "console";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
var PlacementPosition;
(function (PlacementPosition) {
    PlacementPosition["TOP"] = "top";
    PlacementPosition["BOTTOM"] = "bottom";
})(PlacementPosition = exports.PlacementPosition || (exports.PlacementPosition = {}));
var PopperWidth;
(function (PopperWidth) {
    PopperWidth["SM"] = "sm";
    PopperWidth["MD"] = "md";
    PopperWidth["LG"] = "lg";
    PopperWidth["XL"] = "xl";
    PopperWidth["AUTO"] = "auto";
})(PopperWidth = exports.PopperWidth || (exports.PopperWidth = {}));
var PopperHeight;
(function (PopperHeight) {
    PopperHeight["SM"] = "sm";
    PopperHeight["MD"] = "md";
    PopperHeight["LG"] = "lg";
    PopperHeight["XL"] = "xl";
    PopperHeight["AUTO"] = "auto";
})(PopperHeight = exports.PopperHeight || (exports.PopperHeight = {}));
var Severity;
(function (Severity) {
    Severity["SUCCESS"] = "success";
    Severity["INFO"] = "info";
    Severity["WARNING"] = "warning";
    Severity["ERROR"] = "error";
})(Severity = exports.Severity || (exports.Severity = {}));
exports.Direction = {
    Top: 'top',
    TopLeft: 'topLeft',
    TopRight: 'topRight',
    Right: 'right',
    Bottom: 'bottom',
    BottomLeft: 'bottomLeft',
    BottomRight: 'bottomRight',
    Left: 'left',
};
