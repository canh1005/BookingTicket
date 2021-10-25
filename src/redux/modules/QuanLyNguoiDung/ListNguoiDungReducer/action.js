import * as ActionType from "./constances"
import api from "../../../../services/api";

export const actListUserAPI = (maNhom) => {
    return dispatch => {
        dispatch(actListUserRequest());
        api.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`)
            .then(rs => {
                dispatch(actListUserSuccess(rs.data))
            })
            .catch(err => {
                dispatch(actListUserFailed(err));
            })
    }
}

const actListUserRequest = () => {
    return {
        type: ActionType.LIST_USER_REQUEST,
    }
}

const actListUserSuccess = (data) => {
    return {
        type: ActionType.LIST_USER_SUCCESS,
        payload: data,
    }
}

const actListUserFailed = (err) => {
    return {
        type: ActionType.LIST_USER_FAILED,
        payload: err,
    }
}