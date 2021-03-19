import HomePage from "../pages/Home/HomePage";


const routeHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/home",
        component: HomePage,
    },
]

export {routeHome}
