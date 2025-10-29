import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../HomeLayouts/HomeLayouts';
import Home from '../Pages/Home';
import SkillDetails from '../Pages/SkillDetails';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayouts></HomeLayouts>,
            children:[
                {
                    index: true,
                    element: <Home></Home>
                },
                {
                    path: '/skill-details/:id',
                    element:<SkillDetails></SkillDetails>,
                    loader: ()=>fetch("/data.json")
                    
                }
            ]
        }
    ]
)
export default router;