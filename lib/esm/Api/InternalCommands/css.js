import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
export var StyledHighlight = styled('span')(function (_a) {
    var theme = _a.theme, highlight = _a.highlight;
    return ({
        color: highlight === 'true' ? theme.palette.primary.main : 'unset',
        fontWeight: highlight === 'true' ? 'bold' : 'unset',
    });
});
export var SPaper = styled(Paper)(function (_a) {
    var theme = _a.theme;
    return ({
        width: '60vw',
        maxWidth: '750px',
        padding: '12px',
        borderRadius: '8px',
        backgroundColor: "".concat(theme.palette.background.paper, " !important"),
        backdropFilter: 'blur(8px)',
    });
});
