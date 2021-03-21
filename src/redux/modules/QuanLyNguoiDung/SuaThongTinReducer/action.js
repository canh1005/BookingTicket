import api from "../../../../services/api";
import * as Action from "./constances";
import { setHeader } from '../../../../utils/setHeaders'

export const actEditUserAPI = (userEdit, token) => {
    return dispatch => {
        dispatch(actEditUserRequset());
        api.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", userEdit, setHeader(token))
            .then(rs => {
                dispatch(actEditUserSuccess(rs.data))
                alert("Cập nhật thành công!")
                
            })
            .catch(err => {
                dispatch(actEditUserFailed(err))
            })
    }
}

const actEditUserRequset = () => {
    return {
        type: Action.EDIT_USER_REQUEST,
    }
}
const actEditUserSuccess = (data) => {
    return {
        type: Action.EDIT_USER_SUCCESS,
        payload: data,
    }
}
const actEditUserFailed = (err) => {
    return {
        type: Action.EDIT_USER_FAILED,
        payload: err,
    }
}

export const actGetUserEdited = (userEdit)=>{
    return{
        type: Action.GET_USER_EDIT,
        payload: userEdit,
    }
}