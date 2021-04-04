import QuanLyNguoiDung from "../components/QuanLy/QuanLyNguoiDung";
import QuanLyPhim from "../components/QuanLy/QuanLyPhim";
import FormThemPhim from "../components/QuanLy/QuanLyPhim/FormThemPhim";


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

export {routeAdmin}
