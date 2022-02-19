import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'layouts/components/navbar/Navbar';

const VerticalLayouts: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default VerticalLayouts;
