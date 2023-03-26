"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledKey = exports.StyledContainer = exports.StyledListOfKeys = exports.StyledOverrideWrapper = exports.StyledPopper = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
exports.StyledPopper = (0, styles_1.styled)(material_1.Popper)(function () { return ({
    zIndex: '101',
}); });
exports.StyledOverrideWrapper = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    flexWrap: 'nowrap',
}); });
exports.StyledListOfKeys = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    flexWrap: 'nowrap',
}); });
exports.StyledContainer = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        gap: '4px',
        padding: '8px',
        width: '250px',
        backgroundColor: "".concat((0, material_1.alpha)(theme.palette.background.default, 0.95)),
        borderRadius: "".concat(theme.shape.borderRadius * 2, "px"),
        border: "1px solid ".concat(theme.palette.primary.main),
    });
});
exports.StyledKey = (0, styles_1.styled)(material_1.Paper)(function (_a) {
    var highlight = _a.highlight, theme = _a.theme;
    return ({
        minWidth: '22px',
        lineHeight: '22px',
        userSelect: 'none',
        cursor: 'auto',
        fontWeight: '500',
        color: "".concat(theme.palette.text.secondary),
        backgroundColor: "".concat(highlight === 'true' ? theme.palette.primary.light : theme.palette.background.default),
        textAlign: 'center',
    });
});
