import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlacementPosition } from '../../index.types';
export var SBox = styled('div')(function (_a) {
    var column = _a.column;
    return ({
        height: '100%',
        width: '100%',
        gap: '0px',
        position: 'absolute',
        display: 'flex',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        flexDirection: column === PlacementPosition.TOP ? 'column-reverse' : 'column',
    });
});
export var SNotifications = styled('div')(function (_a) {
    var column = _a.column;
    return ({
        gap: '0px',
        position: 'absolute',
        display: 'flex',
        right: '16px',
        zIndex: 112,
        height: 'calc(50vh)',
        overflow: 'scroll',
        bottom: column !== PlacementPosition.TOP ? 'unset' : '16px',
        top: column !== PlacementPosition.TOP ? '16px' : 'unset',
        flexDirection: column === PlacementPosition.TOP ? 'column-reverse' : 'column',
    });
});
export var SChildren = styled('div')(function () { return ({
    flex: '1 1 auto',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
}); });
export var SChildrenRow = styled('div')(function () { return ({
    flex: '1 1 auto',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
}); });
export var StyledTypographyNoChildren = styled(Typography)(function () { return ({
    userSelect: 'none',
}); });
export var SElement = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    padding: '8px',
}); });
export var SElementItem = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        minWidth: '165px',
        cursor: 'pointer',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 6px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: "".concat(theme.palette.background.default, " !important"),
        },
    });
});
export var SStatusContainer = styled('div')(function (_a) {
    var theme = _a.theme, hasBorder = _a.hasBorder, fullWidth = _a.fullWidth;
    return ({
        alignSelf: 'stretch',
        justifyContent: 'center',
        display: 'flex',
        boxShadow: fullWidth && hasBorder
            ? ["inset 0px 0px 0px 1px ".concat(theme.palette.divider)].join(',')
            : 'none',
        backgroundColor: theme.palette.mode === 'light'
            ? theme.palette.background.default
            : theme.palette.background.paper,
    });
});
