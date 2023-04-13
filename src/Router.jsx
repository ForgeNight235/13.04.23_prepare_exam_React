import { createBrowserRouter } from "react-router-dom";
import React from "react";
// import HomePage from "../pages/HomePages";

import Root from "../pages/root";

const HomePage = React.lazy(() => import("../pages/HomePages"));
const Service = React.lazy(() => import("../pages/Service"));
const OrdersPage = React.lazy(() => import("../pages/OrdersPage"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                index: true
            },
            {
                path: "/favorites",
                element: <FavoritePage />
            },
            {
                path: "/orders",
                element: <OrdersPage />
            },
        ]
    }
]);

export default router;