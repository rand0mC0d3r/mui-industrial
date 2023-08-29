"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledHighlight = void 0;
var styles_1 = require("@mui/material/styles");
exports.StyledHighlight = (0, styles_1.styled)('span')(function (_a) {
    var theme = _a.theme, highlight = _a.highlight;
    return ({
        color: highlight === 'true' ? theme.palette.primary.main : 'unset',
        fontWeight: highlight === 'true' ? 'bold' : 'unset',
    });
});
