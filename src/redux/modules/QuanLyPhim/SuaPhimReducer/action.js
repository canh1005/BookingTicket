import * as ActionType from './constances';
import api from '../../../../services/api';
import { setHeader } from '../../../../utils/setHeaders'

export const actSuaPhimAPI = (frmData, token) => {
    return dispatch => {
        dispatch(actSuaPhimRequest());
        api.post("/QuanLyPhim/CapNhatPhimUpload", frmData, setHeader(token))
            .then(rs => {
                dispatch(actSuaPhimSuccess(rs.data))
                alert("Sửa thành công")
            })
            .catch(err => {
                dispatch(actSuaPhimFailed(err))
                // console.log(err.response.data);
            })
    }
}

//Request sua phim
const actSuaPhimRequest = () => {
    return {
        type: ActionType.SUA_PHIM_REQUEST,
    }
}

//Sua phim thanh cong
const actSuaPhimSuccess = (data) => {
    return {
        type: ActionType.SUA_PHIM_SUCCESS,
        payload: data,
    }
}
const actSuaPhimFailed = (err) => {
    return {
        type: ActionType.SUA_PHIM_FAILED,
        payload: err,

    }
}