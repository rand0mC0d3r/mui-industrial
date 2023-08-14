"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSidebar = exports.StyledActionsTall = exports.StyledPaper = exports.StyledActions = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
exports.StyledActions = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
}); });
exports.StyledPaper = (0, styles_1.styled)(material_1.Paper)(function () { return ({
    border: '1px solid #ccc',
    borderTop: 'none',
    borderBottom: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '8px',
    width: '300px',
    height: '100%',
}); });
exports.StyledActionsTall = (0, styles_1.styled)(exports.StyledActions)(function () { return ({
    flex: '1 1 auto',
}); });
exports.StyledSidebar = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    gap: '0px',
}); });
