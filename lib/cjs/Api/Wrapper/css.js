"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SStatusContainer = exports.SElementItem = exports.SElement = exports.StyledTypographyNoChildren = exports.SChildrenRow = exports.SChildren = exports.SNotifications = exports.SBox = void 0;
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var index_types_1 = require("../../index.types");
exports.SBox = (0, styles_1.styled)('div')(function (_a) {
    var column = _a.column;
    return ({
        height: '100%',
        width: '100%',
        gap: '0px',
        position: 'absolute',
        display: 'flex',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        flexDirection: column === index_types_1.PlacementPosition.TOP ? 'column-reverse' : 'column',
    });
});
exports.SNotifications = (0, styles_1.styled)('div')(function (_a) {
    var column = _a.column;
    return ({
        gap: '8px',
        position: 'absolute',
        display: 'flex',
        alignItems: 'flex-end',
        right: '16px',
        zIndex: 112,
        height: 'calc(95vh)',
        overflow: 'scroll',
        bottom: column !== index_types_1.PlacementPosition.TOP ? 'unset' : '16px',
        top: column !== index_types_1.PlacementPosition.TOP ? '16px' : 'unset',
        flexDirection: column === index_types_1.PlacementPosition.TOP ? 'column-reverse' : 'column',
    });
});
exports.SChildren = (0, styles_1.styled)('div')(function () { return ({
    flex: '1 1 auto',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
}); });
exports.SChildrenRow = (0, styles_1.styled)('div')(function () { return ({
    flex: '1 1 auto',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
}); });
exports.StyledTypographyNoChildren = (0, styles_1.styled)(material_1.Typography)(function () { return ({
    userSelect: 'none',
}); });
exports.SElement = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    padding: '8px',
}); });
exports.SElementItem = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        minWidth: '165px',
        cursor: 'pointer',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 6px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: "".concat(theme.palette.background.default, " !important"),
        },
    });
});
exports.SStatusContainer = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, hasBorder = _a.hasBorder, fullWidth = _a.fullWidth;
    return ({
        alignSelf: 'stretch',
        justifyContent: 'center',
        display: 'flex',
        boxShadow: fullWidth && hasBorder
            ? ["inset 0px 0px 0px 1px ".concat(theme.palette.divider)].join(',')
            : 'none',
        backgroundColor: theme.palette.mode === 'light'
            ? theme.palette.background.default
            : theme.palette.background.paper,
    });
});
