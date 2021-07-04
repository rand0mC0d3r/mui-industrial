import { Button } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import React, { cloneElement, useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    position: "absolute",
    width: "100%",
    display: "grid",
    "grid-template-columns": "50px auto 1fr auto 50px",
    "grid-template-rows": "1fr",
    "gap": "0px 0px",
    "grid-auto-flow": "row",
    "grid-template-areas":`
      "left-menu left-panel main right-panel right-menu"
      `
  },
  leftMenu: { "grid-area": "left-menu" },
  leftPanel: { "grid-area": "left-panel" },
  topMenu: { "grid-area": "top-menu" },
  topPanel: { "grid-area": "top-panel" },
  rightPanel: { "grid-area": "right-panel" },
  rightMenu: { "grid-area": "right-menu" },
  bottomPanel: { "grid-area": "bottom-panel" },
  bottomMenu: { "grid-area": "bottom-menu" },
  main: { "grid-area": "main" },

  buttonMenu: {
    border: "1px solid gray",
    borderRadius: "0px",
    minWidth: "initial"
  }
}));

const MuiPanelManager = withTheme(({
  children,
  theme
}) => {
  const classes = useStyles(theme)
  const [layout, setLayout] = useState([])

  const handleAnnounceSelf = (index, side, title, icon) => {
    setLayout((layout) => ([ ...layout, { isVisible: false, index, side, title, icon } ]));
  }

  useEffect(() => {
    console.log(layout)
  }, [layout]);

  return <div className={classes.root}>

    {layout.filter(lo => lo.side === 'left').length > 0 && <div className={classes.leftMenu}>
      {layout.filter(lo => lo.side === 'left').map(layoutObject =>
        <Button disableElevation variant="outlined" fullWidth className={classes.buttonMenu} >
          {layoutObject.icon}
        </Button>
      )}
    </div>}
    {layout.filter(lo => lo.side === 'right').length > 0 && <div className={classes.rightMenu}>
      {layout.filter(lo => lo.side === 'right').map(layoutObject =>
        <Button disableElevation variant="outlined" fullWidth className={classes.buttonMenu} >
          {layoutObject.icon}
        </Button>
      )}
    </div>}

    {children.map((child, i) => {
      if (child.props.title) {
        return cloneElement( child, { key: i, isVisible: layout.length > 0 ? layout.find(lo => lo.index === i).isVisible : false, handleOnAnnouncements: (side, title, icon) => handleAnnounceSelf(i, side, title, icon),})
      } else {
        return cloneElement( child, { key: i, className: classes.main})
      }
    })}

  </div>
})
export default MuiPanelManager;
