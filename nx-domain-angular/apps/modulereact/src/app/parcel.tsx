import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

function ParcelComponent(props: any) {
  return (
    <section>
      Parcel component with {props.name} is mounted!
      <br />
      Passed props from Parent
      <div style={{ color: 'red' }}>{props.customProp1}</div>
    </section>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ParcelComponent,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return <div>Error</div>;
  },
});

export const name = 'react-parcel';
export const { bootstrap, mount, unmount } = lifecycles;
