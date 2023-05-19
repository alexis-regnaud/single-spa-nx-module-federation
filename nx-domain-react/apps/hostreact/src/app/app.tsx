import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Modulereact1 = React.lazy(() => import('modulereact1/Module'));
const Modulereact2 = React.lazy(() => import('modulereact2/Module'));
import Parcel from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';

export function App() {
  return (
    <StrictMode>
      <BrowserRouter basename="react">
        <React.Suspense fallback={null}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/modulereact1">Modulereact1</Link>
            </li>

            <li>
              <Link to="/modulereact2">Modulereact2</Link>
            </li>
            <li>
              <Link to="/moduleangular">Moduleangular</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<NxWelcome title="hostreact" />} />

            <Route path="/modulereact1" element={<Modulereact1 />} />

            <Route path="/modulereact2" element={<Modulereact2 />} />
            <Route
              path="/moduleangular"
              element={
                <Parcel
                  config={() => import('moduleangular/Module')}
                  mountParcel={mountRootParcel}
                  handleError={(err) => console.log(err)}
                  parcelDidMount={() => console.log('Angular module mounted')}
                />
              }
            />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
