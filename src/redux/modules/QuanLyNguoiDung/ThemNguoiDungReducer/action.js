import api from "../../../../services/api";
import * as Action from "./constances"
import { setHeader } from '../../../../utils/setHeaders'
import {actListUserAPI} from '../ListNguoiDungReducer/action'

export const actThemNguoiDungAPI = (data, token) => {
    return dispatch => {
        dispatch(actThemNguoiDungRequest());
        api.post("/QuanLyNguoiDung/ThemNguoiDung", data, setHeader(token))
            .then(rs => {
                dispatch(actThemNguoiDungSuccess(rs.data))
                dispatch(actListUserAPI());
                alert("Thêm thành công !")
            })
            .catch(err => {
                dispatch(actThemNguoiDungFailed(err))
            })
    }
}

const actThemNguoiDungRequest = () => {
    return {
        type: Action.ADD_USER_REQUEST,
    }
}
const actThemNguoiDungSuccess = (data) => {
    return {
        type: Action.ADD_USER_SUCCESS,
        payload: data,
    }
}
const actThemNguoiDungFailed = (err) => {
    return {
        type: Action.ADD_USER_FAILED,
        payload: err,
    }
}