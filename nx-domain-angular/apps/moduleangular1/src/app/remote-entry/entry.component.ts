import { Component, ViewEncapsulation } from '@angular/core';
import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'nx-domain-angular-moduleangular1-entry',
  template: `
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2,
      p,
      pre {
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      svg {
        display: block;
        vertical-align: middle;
      }

      svg {
        shape-rendering: auto;
        text-rendering: optimizeLegibility;
      }
      pre {
        background-color: rgba(55, 65, 81, 1);
        border-radius: 0.25rem;
        color: rgba(229, 231, 235, 1);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        overflow: scroll;
        padding: 0.5rem 0.75rem;
      }

      .shadow {
        box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .rounded {
        border-radius: 1.5rem;
      }

      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
      #parcels {
        padding-top: 40px;
      }
      #love {
        color: rgba(107, 114, 128, 1);
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 3.5rem;
        opacity: 0.6;
        text-align: center;
      }
      #love svg {
        color: rgba(252, 165, 165, 1);
        width: 1.25rem;
        height: 1.25rem;
        display: inline;
        margin-top: -0.25rem;
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome moduleangular1 👋
          </h1>
        </div>
        <div id="parcels">
          <parcel
            [config]="config"
            [mountParcel]="mountRootParcel"
            [customProps]="parcelProps"
            wrapWith="h1"
            [onParcelMount]="parcelMounted"
          ></parcel>
          <parcel
            [config]="ngconfig"
            [mountParcel]="mountRootParcel"
            [customProps]="parcelProps"
            wrapWith="h1"
            [onParcelMount]="ngparcelMounted"
          ></parcel>
        </div>
        <p id="love">
          Carefully crafted with
          <svg
            fill="currentColor"
            stroke="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </p>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class RemoteEntryComponent {
  async config() {
    return import('modulereact/Parcel');
  }
  async ngconfig() {
    return import('../parcel.single-spa');
  }
  parcelMounted(): void {
    console.log('React parcel mounted');
  }
  ngparcelMounted(): void {
    console.log('Angular parcel mounted');
  }
  mountRootParcel = mountRootParcel;
  parcelProps = { customProp1: 'Parent prop1' };
}
