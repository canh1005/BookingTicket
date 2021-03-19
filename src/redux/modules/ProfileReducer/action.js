import * as ActionType from './contances'
import api from './../../../services/api'

export const actGetProfileAPI = (taiKhoan) => {
    return dispatch => {
        dispatch(actGetProfileRequest());
        api.post("/QuanLyNguoiDung/ThongTinTaiKhoan", taiKhoan)
            .then(rs => {
                dispatch(actGetProfileSuccess(rs.data))
            })
            .catch(err => {
                dispatch(actGetProfileFailed(err))
            })
    }
}

const actGetProfileRequest = () => {
    return {
        type: ActionType.GET_PROFILE_REQUEST,
    }
}
const actGetProfileSuccess = (data) => {
    return {
        type: ActionType.GET_PROFILE_SUCCESS,
        payload: data,
    }
}
const actGetProfileFailed = (err) => {
    return {
        type: ActionType.GET_PROFILE_FAILED,
        payload: err,
    }
}