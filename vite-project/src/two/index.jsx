import { Outlet, createBrowserRouter } from "react-router-dom"
import Redirect from "../Redirect"
import First from "./First"
import Second from "./Second"

const routes = createBrowserRouter([{
    path: '/two',
    element: <Outlet />,
    children: [
        {
            index: true,
            element: <Redirect path="/two/1" />
        },
        {
            path: "1",
            element: <First />
        },
        {
            path: "2",
            element: <Second />
        },
    ]
}
])
export default routes