import { styled } from '@mui/material/styles';
export var SPrimary = styled('div')(function () { return ({
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'visible',
    justifyContent: 'flex-start',
    '&::-webkit-scrollbar': {
        display: 'none'
    },
}); });
export var SSecondary = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'visible',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: '0 1 auto',
        minWidth: "".concat(theme.spacing(2)),
        '&::-webkit-scrollbar': {
            display: 'none'
        },
    });
});
export var SWrapper = styled('div')(function (_a) {
    var theme = _a.theme, justifyContent = _a.justifyContent, hasBorder = _a.hasBorder, fullWidth = _a.fullWidth, position = _a.position, width = _a.width;
    return ({
        gap: '4px',
        display: 'flex',
        alignItems: 'stretch',
        alignSelf: 'center',
        width: "".concat(width),
        justifyContent: "".concat(justifyContent),
        boxShadow: !fullWidth && hasBorder
            ? [
                "inset 0px ".concat(position === 'top' ? -3 : 3, "px 0px -2px ").concat(theme.palette.divider),
                "inset -3px 0px 0px -2px ".concat(theme.palette.divider),
                "inset 3px 0px 0px -2px ".concat(theme.palette.divider)
            ].join(',')
            : 'none',
    });
});
