import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
export var StyledActionsWrapper = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: "".concat(theme.spacing(0.5), " ").concat(theme.spacing(1)),
        borderTop: "1px solid ".concat(theme.palette.divider),
        display: 'flex',
        justifyContent: 'space-between',
        userSelect: 'none',
        alignItems: 'center',
    });
});
export var StyledActions = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        gap: "".concat(theme.shape.borderRadius, "px"),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    });
});
export var StyledTypography = styled(Typography)(function () { return ({
    textOverflow: 'ellipsis',
    maxWidth: '225px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
}); });
