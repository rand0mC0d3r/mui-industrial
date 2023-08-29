import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { PlacementPosition } from '../../index.types';
export var StyledStatusConsole = styled('div')(function () { return ({
    flex: '1 0 auto',
    overflow: 'scroll',
    height: '0px',
    display: 'flex',
}); });
export var StyledResizable = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
}); });
export var StyledWrapper = styled('div')(function (_a) {
    var theme = _a.theme, bottom = _a.bottom;
    return ({
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        borderTop: bottom === 'true' ? "1px solid ".concat(theme.palette.divider) : 'unset',
        borderBottom: bottom !== 'true' ? "1px solid ".concat(theme.palette.divider) : 'unset',
        backgroundColor: theme.palette.background.default,
        bottom: bottom === 'true' ? '0px' : 'unset',
        top: bottom !== 'true' ? '0px' : 'unset',
        left: '0px',
        alignItems: 'center',
        right: '0px',
        zIndex: 99,
    });
});
export var StyledEmptyWrapper = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
}); });
export var StyledTabsAndActionWrapper = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '4px',
        cursor: 'pointer',
        borderBottom: "1px solid ".concat(theme.palette.text.disabled),
    });
});
export var StyledTabs = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '0px',
}); });
export var StyledCloseIcon = styled(CloseIcon)(function () { return ({
    fontSize: '20px',
}); });
export var StyledContainer = styled('div')(function (_a) {
    var position = _a.position;
    return ({
        flex: '1 1 auto',
        display: 'flex !important',
        flexDirection: position === PlacementPosition.BOTTOM ? 'column' : 'column-reverse',
    });
});
export var StyledTab = styled(Typography)(function (_a) {
    var theme = _a.theme, activated = _a.activated;
    return ({
        padding: '4px 12px',
        cursor: 'pointer',
        userSelect: 'none',
        borderRight: "1px solid ".concat(theme.palette.divider),
        backgroundColor: activated === 'true' ? theme.palette.primary.main : 'transparent',
        color: activated === 'true' ? theme.palette.background.default : theme.palette.text.secondary,
        '&:hover': {
            backgroundColor: activated === 'true' ? theme.palette.primary.dark : theme.palette.divider,
            color: activated === 'true' ? theme.palette.background.default : theme.palette.text.primary,
        },
    });
});
