import { alpha, Box, Popover } from '@mui/material';
import { styled } from '@mui/material/styles';
export var StyledBox = styled(Box)(function (_a) {
    var theme = _a.theme, width = _a.width, height = _a.height;
    return ({
        width: "".concat(width ? "".concat(theme.breakpoints.values[width] / 1.42, "px") : 'auto'),
        height: "".concat(height ? "".concat(theme.breakpoints.values[height] / 1.69, "px") : 'auto'),
        maxHeight: 'calc(75vh)',
        minWidth: 'calc(15vw)',
        overflow: 'scroll',
        borderBottom: "1px dotted ".concat(theme.palette.divider),
    });
});
export var StyledPopover = styled(Popover)(function () { return ({
    zIndex: '101',
}); });
export var StyledContainer = styled('div')(function (_a) {
    var theme = _a.theme, elevation = _a.elevation, highlight = _a.highlight, variant = _a.variant, decoration = _a.decoration;
    return ({
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        flexDirection: 'column',
        padding: 0,
        backdropFilter: 'blur(8px)',
        backgroundColor: "".concat(alpha(theme.palette.background.default, 0.75)),
        borderRadius: "".concat(theme.shape.borderRadius, "px"),
        margin: decoration === 'true' ? "".concat(theme.spacing(0.75), " 0px") : "".concat(theme.spacing(0.25), " 0px"),
        border: variant === 'default'
            ? '2px solid transparent'
            : "2px solid ".concat(highlight !== 'default' ? theme.palette[highlight].main : 'transparent'),
        boxShadow: theme.shadows[elevation || 2],
    });
});
