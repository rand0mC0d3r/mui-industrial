"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTypography = exports.StyledActions = exports.StyledActionsWrapper = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
exports.StyledActionsWrapper = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: "".concat(theme.spacing(0.5), " ").concat(theme.spacing(1)),
        borderTop: "1px solid ".concat(theme.palette.divider),
        display: 'flex',
        justifyContent: 'space-between',
        userSelect: 'none',
        alignItems: 'center',
    });
});
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
