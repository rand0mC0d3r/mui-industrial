import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
var iconSize = '16px';
export var StyledStack = styled(Stack)(function (_a) {
    var theme = _a.theme, reverse = _a.reverse;
    return ({
        gap: "".concat(theme.spacing(0.5)),
        flexDirection: reverse === 'true' ? 'row-reverse' : 'row',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 0px',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        userSelect: 'none',
        WebkitFontSmoothing: 'antialiased',
        shapeRendering: 'geometricPrecision',
    });
});
export var StyledIcon = styled('div')(function () { return ({
    display: 'flex',
    order: 0,
    width: iconSize,
    flex: '0 0 auto',
    '& svg': {
        width: iconSize,
        height: iconSize,
    },
    '& img': {
        width: iconSize,
        height: iconSize,
    },
    '& .MuiAvatar-root': {
        width: iconSize,
        height: iconSize,
    },
}); });
export var StyledText = styled(Typography)(function () { return ({
    display: 'flex',
    order: 2,
    whiteSpace: 'nowrap',
    userSelect: 'none',
    fontSize: '14px',
    lineHeight: '14px',
}); });
export var StyledBadge = styled(Typography)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.text.primary,
        borderRadius: "".concat(theme.shape.borderRadius * 2, "px"),
        backgroundColor: theme.palette.divider,
        border: "0.5px solid ".concat(theme.palette.divider),
        display: 'flex',
        order: 1,
        padding: '2px 6px',
        lineHeight: '10px',
        fontSize: '12px',
    });
});
export var StyledChildren = styled('div')(function (_a) {
    var theme = _a.theme, order = _a.order;
    return ({
        order: order,
        gap: "".concat(theme.spacing(0.5)),
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
    });
});
