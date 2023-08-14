import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
export var SHeader = styled('div')(function (_a) {
    var expanded = _a.expanded;
    return ({
        display: 'flex',
        alignItems: 'center',
        paddingBottom: expanded === 'true' ? '8px' : '0px',
        marginTop: expanded === 'true' ? '-4px' : '0px',
        justifyContent: 'space-between',
        width: '100%',
    });
});
export var SActionButtons = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
}); });
export var SCustomAction = styled('div')(function () { return ({
    lineHeight: '0px',
}); });
export var STitle = styled(Typography)(function (_a) {
    var actions = _a.actions;
    return ({
        userSelect: 'none',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        cursor: actions ? 'initial' : 'cursor',
    });
});
export var SMessage = styled(Typography)(function (_a) {
    var ellipsis = _a.ellipsis;
    return ({
        width: '300px',
        whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
        overflow: ellipsis === 'true' ? 'hidden' : 'unset',
        textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
        lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
        cursor: 'pointer',
    });
});
