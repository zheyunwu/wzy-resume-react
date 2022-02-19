import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AllRoutes from './routes';

const App: FC = () => {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
