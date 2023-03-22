import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Quiz from "../Pages/Quiz/Quiz";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/quiz',
        element: <Quiz />
    },
])