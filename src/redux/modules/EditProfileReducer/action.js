import * as ActionType from "./contances"
import api from './../../../services/api'

export const actEditProfileAPI = (userEdit) => {
    return dispatch => {
        dispatch(actEditProfileRequest());
        api.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', userEdit)
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