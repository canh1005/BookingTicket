import MovieSearchResult from "../components/MovieSearchResult";
import QuanLyNguoiDung from "../components/QuanLy/QuanLyNguoiDung";
import QuanLyPhim from "../components/QuanLy/QuanLyPhim";
import FormThemPhim from "../components/QuanLy/QuanLyPhim/FormThemPhim";
import DetailMoviePage from "../pages/Home/DetailMoviePage";
import HomePage from "../pages/Home/HomePage";
import ProfilePage from "../pages/ProfilePage";


const routeAdmin = [
    {
        exact: false,
        path: "/AdminHome",
        component: QuanLyNguoiDung,
    },
    {
        exact: false,
        path: "/Dashboard/QuanLyPhim",
        component: QuanLyPhim,
    },
    {
        exact: false,
        path: "/Dashboard/QuanLyNguoiDung",
        component: QuanLyNguoiDung,
    },
    {
        exact: false,
        path: "/Dashboard/themPhim",
        component: FormThemPhim,
    },
    {
        exact: false,
        path: "/Dashboard/:id/suaPhim",
        component: FormThemPhim,
    },
]
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
    {
        exact: false,
        path: "/search/:keyword",
        component: MovieSearchResult,
    },
    {
        exact: false,
        path: '/detail/:id',
        component: DetailMoviePage,
    },
    {
        exact: false,
        path: '/profile',
        component: ProfilePage,
    }
]

export {routeAdmin, routeHome}
