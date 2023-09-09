import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { styled } from '@mui/material/styles';
var backgroundColor = function (theme, highlight) {
    switch (highlight) {
        case 'primary':
            return theme.palette.primary.main;
        case 'secondary':
            return theme.palette.secondary.main;
        default:
            return '';
    }
};
var backgroundColorHover = function (theme, highlight) {
    switch (highlight) {
        case 'primary':
            return theme.palette.primary.dark;
        case 'secondary':
            return theme.palette.secondary.dark;
        default:
            return theme.palette.divider;
    }
};
var isStartSeparator = function (startSeparator, endSeparator, secondary) { return (secondary === 'false' && startSeparator === 'true') || (secondary === 'true' && endSeparator === 'true'); };
var isEndSeparator = function (startSeparator, endSeparator, secondary) { return (secondary === 'false' && endSeparator === 'true') || (secondary === 'true' && startSeparator === 'true'); };
export var SSpan = styled('span')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '1px 10px',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'stretch',
        fontSize: '14px',
        gap: "".concat(theme.spacing(0.5)),
        '& > *': {
            fontSize: '14px !important',
        },
    });
});
export var SArrowDown = styled(ArrowDropDownOutlinedIcon)(function (_a) {
    var position = _a.position;
    return ({
        position: 'absolute',
        zIndex: 102,
        bottom: position !== 'top' ? '-10px' : 'unset',
        top: position === 'top' ? '16px' : 'unset',
    });
});
export var STooltip = styled('div')(function () { return ({
    fontSize: '13px',
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '8px',
    alignItems: 'center',
    maxHeight: '300px',
    overflow: 'scroll',
}); });
export var SArrowUp = styled(ArrowDropUpOutlinedIcon)(function () { return ({
    position: 'absolute',
    bottom: 'unset',
    top: '-14px',
    zIndex: 102,
}); });
export var SDiv = styled('div')(function (_a) {
    var theme = _a.theme, secondary = _a.secondary, hasclick = _a.hasclick, highlight = _a.highlight, startSeparator = _a.startSeparator, endSeparator = _a.endSeparator, isdisabled = _a.isdisabled;
    return ({
        WebkitFontSmoothing: 'auto',
        height: '100%',
        display: 'flex',
        flex: '0 0 auto',
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: '16px',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'relative',
        borderLeft: isStartSeparator(startSeparator, endSeparator, secondary) ? "1px solid ".concat(theme.palette.divider) : 'none',
        borderRight: isEndSeparator(startSeparator, endSeparator, secondary) ? "1px solid ".concat(theme.palette.divider) : 'none',
        cursor: (hasclick === 'true' && isdisabled === 'false') ? 'pointer' : '',
        backgroundColor: backgroundColor(theme, highlight),
        color: theme.palette.primary.contrastText,
        '& > div > *': {
            color: highlight !== 'default'
                ? "".concat(theme.palette.background.default, " !important")
                : '',
        },
        '& > span > div > *': {
            color: highlight !== 'default'
                ? "".concat(theme.palette.background.default, " !important")
                : '',
        },
        '&:hover': (hasclick === 'true' && isdisabled === 'false') ? {
            backgroundColor: backgroundColorHover(theme, highlight),
            color: "".concat(theme.palette.primary.contrastText),
        } : {},
    });
});
