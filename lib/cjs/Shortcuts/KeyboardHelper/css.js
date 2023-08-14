"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledKey = exports.StyledListOfKeys = exports.StyledOverrideWrapper = exports.StyledPopper = void 0;
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
exports.StyledKey = (0, styles_1.styled)(material_1.Paper)(function (_a) {
    var ascii = _a.ascii, highlight = _a.highlight, theme = _a.theme;
    return ({
        minWidth: '16px',
        padding: '0px 4px',
        lineHeight: '22px',
        userSelect: 'none',
        cursor: 'auto',
        fontFamily: ascii === 'true' ? 'monospace' : 'inherit',
        fontWeight: '500',
        fontSize: '14px',
        color: "".concat(theme.palette.text.secondary),
        backgroundColor: "".concat(highlight === 'true' ? theme.palette.divider : theme.palette.background.paper),
        textAlign: 'center',
    });
});
