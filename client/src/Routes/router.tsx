import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Login from "../Pages/Login/Login";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
]);


export default router;