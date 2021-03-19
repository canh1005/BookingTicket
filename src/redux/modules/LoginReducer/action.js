import * as ActionType from "./constances"
import api from "./../../../services/api"
import { setHeader } from "./../../../utils/setHeaders"


export const actLoginAPI = (user, history) => {
    return dispatch => {
        dispatch(actLoginRequest());
        api.post("/QuanLyNguoiDung/DangNhap", user)
            .then(rs => {
                dispatch(actLoginSuccess(rs.data))
                if(rs.data.maLoaiNguoiDung === "KhachHang" || rs.data.maLoaiNguoiDung === "QuanTri"){
                    setHeader(rs.data.accessToken);
                    localStorage.setItem("User",JSON.stringify(rs.data))
                    history.replace("/home");
                }else{
                    return{
                        response: {data: "Tài khoản hoặc mật khẩu không đúng!"}
                    }
                }
            })
            .catch(err => {
                dispatch(actLoginFailed(err));
            })
    }
}

export const actLogout = (history) => {
    if(localStorage.getItem("User")){
        localStorage.removeItem("User")
    }else{
        localStorage.removeItem("UserAdmin")
    }
    history.replace("/auth");
    return{
        type: ActionType.LOGIN_CLEAR_DATA,
    }
}


const actLoginRequest = () => {
    return {
        type: ActionType.LOGIN_REQUEST,
    }
}

const actLoginSuccess = (data) => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
    }
}

const actLoginFailed = (err) => {
    return {
        type: ActionType.LOGIN_FAILDED,
        payload: err,
    }
}
