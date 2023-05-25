import React, { FC } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from "components/protected-route/ProtectedRoute";

// Layouts
import VerticalLayouts from "layouts/VerticalLayout";
import AdminLayouts from "layouts/AdminLayout";


// Pages
import Home from "pages/home/Home";
import Admin from "pages/admin/Admin";
import Login from "pages/login/Login";


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
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />
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