"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMessage = exports.STitle = exports.SCustomAction = exports.SActionButtons = exports.SHeader = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
exports.SHeader = (0, styles_1.styled)('div')(function (_a) {
    var expanded = _a.expanded;
    return ({
        display: 'flex',
        alignItems: 'center',
        paddingBottom: expanded === 'true' ? '8px' : '0px',
        marginTop: expanded === 'true' ? '-4px' : '0px',
        justifyContent: 'space-between',
        width: '100%',
    });
});
exports.SActionButtons = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
}); });
exports.SCustomAction = (0, styles_1.styled)('div')(function () { return ({
    lineHeight: '0px',
}); });
exports.STitle = (0, styles_1.styled)(material_1.Typography)(function (_a) {
    var actions = _a.actions;
    return ({
        userSelect: 'none',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        cursor: actions ? 'initial' : 'cursor',
    });
});
exports.SMessage = (0, styles_1.styled)(material_1.Typography)(function (_a) {
    var ellipsis = _a.ellipsis;
    return ({
        width: '300px',
        whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
        overflow: ellipsis === 'true' ? 'hidden' : 'unset',
        textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
        lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
        cursor: 'pointer',
    });
});
