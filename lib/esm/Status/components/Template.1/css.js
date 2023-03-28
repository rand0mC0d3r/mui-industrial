import { Stack, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
export var StyledStack = styled(Stack)(function (_a) {
    var theme = _a.theme, reverse = _a.reverse;
    return ({
        gap: "".concat(theme.spacing(0.5)),
        flexDirection: reverse === 'true' ? 'row-reverse' : 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        userSelect: 'none',
        WebkitFontSmoothing: 'antialiased',
        shapeRendering: 'geometricPrecision',
    });
});
export var StyledIcon = styled(SvgIcon)(function (_a) {
    var reverse = _a.reverse;
    return ({
        transform: reverse === 'true' ? 'scaleX(-1)' : 'scaleX(1)',
        display: 'flex',
        order: 0,
        width: '17px',
        flex: '0 0 auto',
    });
});
export var StyledText = styled(Typography)(function () { return ({
    display: 'flex',
    order: 4,
    whiteSpace: 'nowrap',
    userSelect: 'none',
    fontSize: '15px',
    lineHeight: '0px',
}); });
export var StyledBadge = styled(Typography)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.text.primary,
        borderRadius: "".concat(theme.shape.borderRadius * 2, "px"),
        backgroundColor: theme.palette.divider,
        border: "0.5px solid ".concat(theme.palette.divider),
        display: 'flex',
        order: 3,
        padding: '0px 6px',
        lineHeight: 'inherit',
        fontSize: '12px',
    });
});
export var StyledImage = styled('img')(function (_a) {
    var mask = _a.mask;
    return ({
        borderRadius: mask === 'true' ? '50%' : 'unset',
        display: 'flex',
        order: 2,
        width: '18px',
        height: '18px',
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
