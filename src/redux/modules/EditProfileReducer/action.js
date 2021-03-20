import * as ActionType from "./contances"
import api from './../../../services/api'
import {setHeader} from './../../../utils/setHeaders'

export const actEditProfileAPI = (userEdit, accessToken) => {
    return dispatch => {
        dispatch(actEditProfileRequest());
        let Token = setHeader(accessToken)
        // console.log("AccessToken: \n", JSON.stringify(Token));
        api.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', userEdit, Token)
            .then(rs => {
                dispatch(actEditProfileSuccess(rs.data));
                alert("Cập nhật thành công!")
            })
            .catch(err => {
                dispatch(actEditProfileFailed(err));
            })
    }
}

const actEditProfileRequest = () => {
    return {
        type: ActionType.EDIT_PROFILE_REQUEST,
    }
}
const actEditProfileSuccess = (userEdit) => {
    return {
        type: ActionType.EDIT_PROFILE_SUCCESS,
        payload: userEdit,
    }
}
const actEditProfileFailed = (err) => {
    return {
        type: ActionType.EDIT_PROFILE_FAILED,
        payload: err,
    }
}