import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes,
} from 'single-spa-layout';
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
