import React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOM from 'react-dom';
import App from './app/app';

export default singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.log('Error load modulereact/App', err);
    return <div>Error</div>;
  },
});
