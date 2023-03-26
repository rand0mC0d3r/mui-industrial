"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledContainer = exports.StyledPopper = exports.StyledBox = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
exports.StyledBox = (0, styles_1.styled)(material_1.Box)(function (_a) {
    var theme = _a.theme, width = _a.width, height = _a.height;
    return ({
        width: "".concat(width ? "".concat(theme.breakpoints.values[width] / 1.42, "px") : 'auto'),
        height: "".concat(height ? "".concat(theme.breakpoints.values[height] / 1.24, "px") : 'auto'),
    });
});
exports.StyledPopper = (0, styles_1.styled)(material_1.Popper)(function () { return ({
    zIndex: '101',
}); });
exports.StyledContainer = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, elevation = _a.elevation, highlight = _a.highlight, variant = _a.variant, decoration = _a.decoration;
    return ({
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        flexDirection: 'column',
        padding: 0,
        backdropFilter: 'blur(8px)',
        backgroundColor: "".concat((0, material_1.alpha)(theme.palette.background.default, 0.75)),
        borderRadius: "".concat(theme.shape.borderRadius, "px"),
        margin: decoration === 'true' ? "".concat(theme.spacing(0.75), " 0px") : "".concat(theme.spacing(0.25), " 0px"),
        border: variant === 'default'
            ? '2px solid transparent'
            : "2px solid ".concat(highlight !== 'default' ? theme.palette[highlight].main : 'transparent'),
        boxShadow: theme.shadows[elevation || 2],
    });
});
