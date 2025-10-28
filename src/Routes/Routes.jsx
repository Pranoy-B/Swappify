import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../HomeLayouts/HomeLayouts';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayouts></HomeLayouts>,
            children:[
                {
                    path: 'test',
                    element: <h2>this is child</h2>
                }
            ]
        }
    ]
)
export default router;