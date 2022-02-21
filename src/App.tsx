import React, { FC } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import AllRoutes from './routes';

const App: FC = () => {
  return (
    <HashRouter>
      <AllRoutes />
    </HashRouter>
  );
}

export default App;
