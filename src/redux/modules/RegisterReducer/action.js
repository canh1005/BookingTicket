import * as ActionType from './constances'
import api from './../../../services/api'
import {actLoginAPI} from './../../modules/LoginReducer/action'

export const actRegisterAPI = (user, history) => {
    return dispatch => {
        dispatch(actRegisterRequest());
        api.post("/QuanLyNguoiDung/DangKy", user)
            .then(rs => {
                dispatch(actRegisterSuccess(rs.data));
                alert("Đăng ký thành công!")
                dispatch(actLoginAPI(rs.data,history))
            })
            .catch(err => {
                dispatch(actRegisterFailed(err));
            })
    }
}

const actRegisterRequest = () => {
    return {
        type: ActionType.REGISTER_REQUEST,
    }
}

const actRegisterSuccess = (user) => {
    return {
        type: ActionType.REGISTER_SUCCESS,
        payload: user,
    }
}

const actRegisterFailed = (err) => {
    return {
        type: ActionType.REGISTER_FAILDED,
        payload: err,
    }
}