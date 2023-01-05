import React from 'react';
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import singleSpaReact from 'single-spa-react';
import ReactDOM from 'react-dom';
//import { useServiceContext } from "../Service";

function Header() {
  // const serviceContext = useServiceContext();

  return (
    <MuiAppBar
      sx={{
        position: 'fixed',
        zIndex: 999,
      }}
    >
      <Toolbar
        sx={{
          paddingRight: 24,
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          //  onClick={props.drawer.openDrawer}
          sx={{
            marginRight: 36,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{
            flexGrow: 1,
          }}
        >
          {/*{serviceContext.title}*/}
          Test titre
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
});

export const { bootstrap, mount, unmount } = lifecycles;
