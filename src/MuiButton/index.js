import PropTypes from 'prop-types';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import DataProvider from '../MuiPanelStore';

const MuiButton = ({ id, tooltip, shortText, icon, showIcon, onClick }) => {
  const { handlePanelAnnouncement } = useContext(DataProvider);
  const [isRegistered, setIsRegistered] = useState(false);

  const registerPanel = useCallback((id) => {
    handlePanelAnnouncement({
      side: 'left',
      handleOnClick: onClick,
      noPanel: true,
      icon, id, shortText, showIcon, tooltip,
    })
  }, [handlePanelAnnouncement, icon, onClick, shortText, showIcon, tooltip])

  useEffect(() => {
    if (id && icon && !isRegistered) { registerPanel(id); setIsRegistered(true) }
  }, [isRegistered, id, icon, registerPanel]);

  return null
}

MuiButton.defaultProps = {
  showIcon: true,
  onClick: () => { }
}

MuiButton.propTypes = {
	id: PropTypes.string,
	tooltip: PropTypes.string,
	shortText: PropTypes.string,
	icon: PropTypes.node,
	showIcon: PropTypes.bool,
	onClick: PropTypes.func,
}

export default MuiButton;