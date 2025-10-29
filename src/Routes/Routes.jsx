import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayouts from "../HomeLayouts/HomeLayouts";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        element: <SkillDetails></SkillDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ],
  }

]);
export default router;
