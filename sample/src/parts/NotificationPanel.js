import { Box, Button, Switch, Typography } from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { useEffect, useState } from 'react';
import MuiPanel from '../components/MuiPanel';

const NotificationPanel = () => {
  const [alerts, setAlerts] = useState(0);
  const [color, setColor] = useState('primary');
  const [auto, setAuto] = useState(false);

  const handleChangeAuto = (event) => {
    setAuto(!auto);
  };
  const handleChange = (event) => {
    setColor(color === 'primary' ? 'secondary' : 'primary');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (auto) {
        setAlerts(alerts => alerts + 1);
      }
    }, 1000);
    return () => timer && clearInterval(timer);
  }, [auto])

  return <MuiPanel
    id="notificationsPanel"
    title="Notifications Panel"
    notifications={{color, count: alerts}}
    icon={<AccessAlarmIcon />}>
    <Box display="flex" flexDirection="column" style={{ gap: '16px' }}>
      <Box display="flex" flexDirection="row" justifyContent="space-between" style={{ gap: '16px' }}>
        <Typography variant="h6" color={color}>Alerts: {alerts}</Typography>
        <Box display="flex" flexDirection="row" style={{ gap: '16px' }} alignItems="center">
          <Typography variant="caption" color='primary'>Primary</Typography>
          <Switch
            checked={color !== 'primary'}
            onChange={handleChange}
            color={ color !== 'primary' ? 'secondary' : 'primary'}
          />
          <Typography variant="caption" color='secondary'>Secondary</Typography>
          </Box>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" style={{ gap: '16px' }}>
        <Typography variant="h6" color='textPrimary'>Automated?</Typography>
        <Box display="flex" flexDirection="row" style={{ gap: '16px' }} alignItems="center">
          <Typography variant="caption" color='textPrimary'>Not</Typography>
          <Switch
            checked={auto}
            color="primary"
            onChange={handleChangeAuto}
          />
          <Typography variant="caption" color='textPrimary'>Every 1s</Typography>
          </Box>
      </Box>
      <Button color={color} variant="outlined" onClick={() => { setAlerts(alerts => alerts + 1); }}>Add</Button>
      <Button color={color} variant="outlined" onClick={() => setAlerts(alerts => Math.max(0, alerts - 1)) }>Remove</Button>
      <Button color={color} variant="outlined" onClick={() => setAlerts(0) }>To 0</Button>
    </Box>
  </MuiPanel>
}

export default NotificationPanel;
