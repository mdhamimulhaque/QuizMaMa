import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Quiz from "../Pages/Quiz/Quiz";

export const routes = createBrowserRouter([
    {
        Path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/quiz',
                element: <Quiz />
            }
        ]
    }

])