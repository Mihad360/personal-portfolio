import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../home/Home";
import Layout from "../layout/Layout";
import Projects from "../home/Projects";
import About from "../home/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);

export default router;