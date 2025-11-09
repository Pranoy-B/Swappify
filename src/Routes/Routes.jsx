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
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import Loading from "../Pages/loading";

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
        hydrateFallbackElement: <Loading></Loading>
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
        path: "/my-profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "*",
        element: <PageNotFound></PageNotFound>
      }
    ],
  }

]);
export default router;
