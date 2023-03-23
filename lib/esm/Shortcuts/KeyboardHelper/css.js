/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, Popper } from '@mui/material';
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
export var StyledContainer = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        gap: '4px',
        padding: '8px',
        width: '225px',
        backgroundColor: "".concat(alpha(theme.palette.background.default, 0.95)),
        borderRadius: "".concat(theme.shape.borderRadius * 2, "px"),
        border: "1px solid ".concat(theme.palette.primary.main),
    });
});
