"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTypography = exports.StyledActions = exports.StyledBox = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
exports.StyledBox = (0, styles_1.styled)(material_1.Box)(function () { return ({
    userSelect: 'none',
}); });
exports.StyledActions = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        gap: "".concat(theme.shape.borderRadius, "px"),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    });
});
exports.StyledTypography = (0, styles_1.styled)(material_1.Typography)(function () { return ({
    textOverflow: 'ellipsis',
    maxWidth: '225px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
}); });
