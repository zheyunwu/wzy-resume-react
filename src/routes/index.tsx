import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import VerticalLayouts from "layouts/VerticalLayout";

// Pages
import Home from "pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VerticalLayouts />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  }
]);

const AllRoutes: FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AllRoutes;