import * as React from 'react';
/*import 'zone.js'; // Angular need*/
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import Header from 'layout/Header';
import Navigation from 'layout/Navigation';

const Layout = React.lazy(() => import('layout/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Header />
      <Navigation />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/layout">Layout</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
