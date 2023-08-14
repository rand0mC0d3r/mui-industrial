import { Alert, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
export var SCode = styled('textarea')(function (_a) {
    var height = _a.height, theme = _a.theme;
    return ({
        fontFamily: 'monospace',
        padding: '8px',
        resize: 'vertical',
        whiteSpace: 'nowrap',
        marginTop: '8px',
        marginBottom: '8px',
        borderColor: 'inherit',
        maxHeight: '300px',
        borderRadius: '4px',
        color: 'inherit',
        backgroundColor: "".concat(theme.palette.divider),
        minHeight: "".concat((height * 20) + 10, "px"),
        '&::selection': {
            backgroundColor: "".concat(theme.palette.divider),
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            textDecorationColor: "".concat(theme.palette.divider),
        },
        '&:focus-visible': {
            outline: '0px',
        },
    });
});
export var SMessage = styled(Typography)(function (_a) {
    var ellipsis = _a.ellipsis;
    return ({
        whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
        overflow: ellipsis === 'true' ? 'hidden' : 'unset',
        textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
        lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
    });
});
export var SWrapper = styled('div')(function () { return ({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
}); });
export var SAlert = styled(Alert)(function (_a) {
    var expanded = _a.expanded, actions = _a.actions;
    return ({
        '.MuiAlert-message': {
            minWidth: 'unset',
            width: '100%',
            display: 'flex',
            padding: expanded === 'true' ? '8px 0px' : '0px',
            flexDirection: (actions === 'true' || expanded === 'true') ? 'column' : 'row',
        },
    });
});
