import React, { FC } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ScrollToHashElement from 'components/scroll-to-hash-element/ScrollToHashElement';

import AllRoutes from './routes';

const App: FC = () => {
  return (
    <HashRouter>
      <ScrollToHashElement />
      <AllRoutes />
    </HashRouter>
  );
}

export default App;
