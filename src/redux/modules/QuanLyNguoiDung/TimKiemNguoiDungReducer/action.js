import api from "../../../../services/api";
// import * as Action from "./constances"
import * as ActionType from '../ListNguoiDungReducer/constances'

export const actSearchUserAPI = (maNhom,keyword) => {
    return dispatch => {
        let url = `LayDanhSachNguoiDung`

        if (keyword) {
            url = `TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${keyword}`
        }

        dispatch(actSearchUserRequest);
        api.get(`/QuanLyNguoiDung/${url}`)
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
        type: ActionType.LIST_USER_REQUEST,
    }
}
const actSearchUserSuccess = (keyword) => {
    return {
        type: ActionType.LIST_USER_SUCCESS,
        payload: keyword,
    }
}
const actSearchUserFailed = (err) => {
    return {
        type: ActionType.LIST_USER_FAILED,
        payload: err,
    }
}
