import QuanLyNguoiDung from "../components/QuanLy/QuanLyNguoiDung";
import QuanLyPhim from "../components/QuanLy/QuanLyPhim";


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
]

export {routeAdmin}
