import * as ActionType from "./constances"
import api from "./../../../services/api"

export const actBoxOfficeAPI = (maLichChieu) => {
    return dispatch => {
        dispatch(actBoxOfficeRequest());
        api.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
        .then(rs=>{
            dispatch(actBoxOfficeSuccess(rs.data));
        })
        .catch(err=>{
            dispatch(actBoxOfficeFailed(err));
        })
    }
}

const actBoxOfficeRequest = () => {
    return {
        type: ActionType.BOX_OFFICE_REQUEST,
    }
}

const actBoxOfficeSuccess = (data) => {
    return {
        type: ActionType.BOX_OFFICE_SUCCESS,
        payload: data,
    }
}

const actBoxOfficeFailed = (err) => {
    return {
        type: ActionType.BOX_OFFICE_FAILED,
        payload: err,
    }
}
