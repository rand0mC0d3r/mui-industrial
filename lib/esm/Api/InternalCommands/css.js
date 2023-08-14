import { styled } from '@mui/material/styles';
export var StyledHighlight = styled('span')(function (_a) {
    var theme = _a.theme, highlight = _a.highlight;
    return ({
        color: highlight === 'true' ? theme.palette.primary.main : 'unset',
        fontWeight: highlight === 'true' ? 'bold' : 'unset',
    });
});
