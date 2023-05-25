import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToHashElement from 'components/scroll-to-hash-element/ScrollToHashElement';

import Navbar from 'layouts/components/navbar/Navbar';

const AdminLayout: FC = () => {
  return (
    <>
      <ScrollToHashElement />
      <Navbar />
      <div style={{ paddingTop: '64px', backgroundColor: 'gray' }} />
      <Outlet />
    </>
  );
};

export default AdminLayout;
