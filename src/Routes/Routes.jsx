import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../HomeLayouts/HomeLayouts";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute";
import ResetPassword from '../Pages/ResetPassword'
import PageNotFound from "../Pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/skill-details/:id",
        element: <PrivateRoute>
          <SkillDetails></SkillDetails>
        </PrivateRoute>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path: "/forget-password",
        element: <ResetPassword></ResetPassword>
      },
      {
        path: "/*",
        element: <PageNotFound></PageNotFound>
      }
    ],
  }

]);
export default router;
