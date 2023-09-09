"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTab = exports.StyledContainer = exports.StyledCloseIcon = exports.StyledTabs = exports.StyledTabsAndActionWrapper = exports.StyledEmptyWrapper = exports.StyledWrapper = exports.StyledResizable = exports.StyledStatusConsole = void 0;
var styles_1 = require("@mui/material/styles");
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var material_1 = require("@mui/material");
var index_types_1 = require("../../index.types");
exports.StyledStatusConsole = (0, styles_1.styled)('div')(function () { return ({
    flex: '1 0 auto',
    overflow: 'scroll',
    height: '0px',
    display: 'flex',
}); });
exports.StyledResizable = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
}); });
exports.StyledWrapper = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, bottom = _a.bottom;
    return ({
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        borderTop: bottom === 'true' ? "1px solid ".concat(theme.palette.divider) : 'unset',
        borderBottom: bottom !== 'true' ? "1px solid ".concat(theme.palette.divider) : 'unset',
        backgroundColor: theme.palette.background.paper,
        bottom: bottom === 'true' ? '0px' : 'unset',
        top: bottom !== 'true' ? '0px' : 'unset',
        left: '0px',
        alignItems: 'center',
        right: '0px',
        zIndex: 99,
    });
});
exports.StyledEmptyWrapper = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
}); });
exports.StyledTabsAndActionWrapper = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '4px',
        cursor: 'pointer',
        borderBottom: "1px solid ".concat(theme.palette.text.disabled),
    });
});
exports.StyledTabs = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '0px',
}); });
exports.StyledCloseIcon = (0, styles_1.styled)(Close_1.default)(function () { return ({
    fontSize: '20px',
}); });
exports.StyledContainer = (0, styles_1.styled)('div')(function (_a) {
    var position = _a.position;
    return ({
        flex: '1 1 auto',
        display: 'flex !important',
        flexDirection: position === index_types_1.PlacementPosition.BOTTOM ? 'column' : 'column-reverse',
    });
});
exports.StyledTab = (0, styles_1.styled)(material_1.Typography)(function (_a) {
    var theme = _a.theme, activated = _a.activated;
    return ({
        padding: '4px 12px',
        cursor: 'pointer',
        userSelect: 'none',
        borderRight: "1px solid ".concat(theme.palette.divider),
        backgroundColor: activated === 'true' ? theme.palette.primary.main : 'transparent',
        color: activated === 'true' ? theme.palette.primary.contrastText : theme.palette.text.secondary,
        '&:hover': {
            backgroundColor: activated === 'true' ? theme.palette.primary.dark : theme.palette.divider,
            color: activated === 'true' ? theme.palette.primary.contrastText : theme.palette.text.primary,
        },
    });
});
