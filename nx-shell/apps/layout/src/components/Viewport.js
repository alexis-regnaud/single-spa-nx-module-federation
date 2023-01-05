import React from 'react';
import { CssBaseline } from '@mui/material';
import singleSpaReact from 'single-spa-react';
import ReactDOM from 'react-dom';

/*
const useGlobalStyles = makeStyles(
  () => ({
    '@global': {
      '*:-webkit-full-screen': {
        height: '100%',
        width: '100%',
      },
      html: {
        position: 'fixed',
      },
      'html, body': {
        height: '100%',
        width: '100%',
      },
      '.root': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      '.main-content': {
        flex: '1 1 0%',
        display: 'flex',
      },
      '#single-spa-application:layout/Header': {
        display: 'flex',
      },
      '#single-spa-application:layout/Navigation': {
        display: 'flex',
      },
      '#single-spa-application:order/App': {
        flex: 1,
      },
    },
  }),
  { name: 'ViewportGlobals' }
);
*/

function Viewport() {
  //useGlobalStyles();

  return (
    <React.Fragment>
      <CssBaseline />
    </React.Fragment>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Viewport,
});

export const { bootstrap, mount, unmount } = lifecycles;
