/*
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
*/

//import React from 'react';

window.React = require('react');

import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from 'single-spa-layout';
//const importLazy = require("import-lazy")(require);
// @ts-ignore
import mfLayout from './mf-layout.html';
import './styles.css';

type MfImport = {
  [title: string]: () => Promise<any>;
};
const mfImport: MfImport = {
  'layout/Header': () => import('layout/Header'),
  'layout/Navigation': () => import('layout/Navigation'),
  'hostreact/App': () => import('hostreact/App'),
  'hostangular/App': () => import('hostangular/App'),
};

const routes = constructRoutes(mfLayout);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return mfImport[name]();
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();

start({
  urlRerouteOnly: true,
});
