"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPaper = exports.StyledHighlight = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
exports.StyledHighlight = (0, styles_1.styled)('span')(function (_a) {
    var theme = _a.theme, highlight = _a.highlight;
    return ({
        color: highlight === 'true' ? theme.palette.primary.main : 'unset',
        fontWeight: highlight === 'true' ? 'bold' : 'unset',
    });
});
exports.SPaper = (0, styles_1.styled)(material_1.Paper)(function (_a) {
    var theme = _a.theme;
    return ({
        width: '60vw',
        maxWidth: '750px',
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: "".concat(theme.palette.background.paper, " !important"),
        backdropFilter: 'blur(8px)',
    });
});
