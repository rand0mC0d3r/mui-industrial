import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
export var StyledBox = styled(Box)(function () { return ({
    userSelect: 'none',
}); });
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
