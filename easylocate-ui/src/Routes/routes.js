import ErrorComponent from "../Common/ErrorComponent"
import ProtectedLayout from "../Layout/ProtectedLayout"

let routes = [
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: '/',
                element: "Dashboard 1"
            },
            {
                path: '/home',
                element: "Home"
            },
            {
                path: '/',
                element: "RootElement"
            },
            {
                path: '/',
                element: "RootElement"
            },

        ],
        errorElement: <ErrorComponent />
    },
    {
        path:'/login',
        element:"ogin"
    }
]

export default routes