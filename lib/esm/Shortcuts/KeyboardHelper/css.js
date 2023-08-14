import { Paper, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
export var StyledPopper = styled(Popper)(function () { return ({
    zIndex: '101',
}); });
export var StyledOverrideWrapper = styled('div')(function () { return ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    flexWrap: 'nowrap',
}); });
export var StyledListOfKeys = styled('div')(function () { return ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    flexWrap: 'nowrap',
}); });
export var StyledKey = styled(Paper)(function (_a) {
    var ascii = _a.ascii, highlight = _a.highlight, theme = _a.theme;
    return ({
        minWidth: '16px',
        padding: '0px 4px',
        lineHeight: '22px',
        userSelect: 'none',
        cursor: 'auto',
        fontFamily: ascii === 'true' ? 'monospace' : 'inherit',
        fontWeight: '500',
        fontSize: '14px',
        color: "".concat(theme.palette.text.secondary),
        backgroundColor: "".concat(highlight === 'true' ? theme.palette.divider : theme.palette.background.paper),
        textAlign: 'center',
    });
});
