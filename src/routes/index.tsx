import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

// Layouts
import VerticalLayouts from "layouts/vertical/VerticalLayout";

// Pages
import Home from "pages/home/Home";

const AllRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<VerticalLayouts />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;