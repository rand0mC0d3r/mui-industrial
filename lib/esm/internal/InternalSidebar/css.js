/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
export var StyledActions = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
}); });
export var StyledPaper = styled(Paper)(function () { return ({
    border: '1px solid #ccc',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '8px',
    width: '300px',
    height: '100%',
}); });
export var StyledActionsTall = styled(StyledActions)(function () { return ({
    flex: '1 1 auto',
}); });
export var StyledSidebar = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    gap: '0px',
}); });
