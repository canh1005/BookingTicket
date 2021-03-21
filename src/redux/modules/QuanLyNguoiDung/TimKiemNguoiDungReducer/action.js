import api from "../../../../services/api";
import * as Action from "./constances"

export const actSearchUserAPI = (keyword) => {
    return dispatch => {
        dispatch(actSearchUserRequest);
        api.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`)
            .then(rs => {
                dispatch(actSearchUserSuccess(rs.data));
            })
            .catch(err => {
                dispatch(actSearchUserFailed(err));
            })
    }
}

const actSearchUserRequest = () => {
    return {
        type: Action.SEARCH_USER_REQUEST,
    }
}
const actSearchUserSuccess = (keyword) => {
    return {
        type: Action.SEARCH_USER_SUCCESS,
        payload: keyword,
    }
}
const actSearchUserFailed = (err) => {
    return {
        type: Action.SEARCH_USER_FAILED,
        payload: err,
    }
}
