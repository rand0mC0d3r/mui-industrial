/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, Paper, Popper } from '@mui/material';
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
export var StyledContainer = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        gap: '4px',
        padding: '8px',
        width: '250px',
        backgroundColor: "".concat(alpha(theme.palette.background.default, 0.95)),
        borderRadius: "".concat(theme.shape.borderRadius * 2, "px"),
        border: "1px solid ".concat(theme.palette.primary.main),
    });
});
export var StyledKey = styled(Paper)(function (_a) {
    var highlight = _a.highlight, theme = _a.theme;
    return ({
        minWidth: '22px',
        lineHeight: '22px',
        userSelect: 'none',
        cursor: 'auto',
        fontWeight: '500',
        color: "".concat(theme.palette.text.secondary),
        backgroundColor: "".concat(highlight === 'true' ? theme.palette.primary.light : theme.palette.background.default),
        textAlign: 'center',
    });
});
