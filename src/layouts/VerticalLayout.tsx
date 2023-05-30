import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToHashElement from 'components/scroll-to-hash-element/ScrollToHashElement';

import Navbar from 'layouts/components/navbar/Navbar';

const VerticalLayouts: FC = () => {
  return (
    <>
      <ScrollToHashElement />
      <Navbar dynamicBackground={true} />
      <Outlet />
    </>
  );
};

export default VerticalLayouts;
