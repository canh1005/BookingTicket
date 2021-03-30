import * as ActionType from './constances';
import api from '../../../../services/api';
import { setHeader } from '../../../../utils/setHeaders'

export const actXoaPhimAPI = (maPhim, token) => {
    return dispatch => {
        dispatch(actXoaPhimRequest());
        api.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`, setHeader(token))
        .then(rs=>{
            dispatch(actXoaPhimSuccess(rs.data));
        })
        .catch(err=>{
            dispatch(actXoaPhimFailed(err));
        })
    }
}

const actXoaPhimRequest = () => {
    return {
        type: ActionType.XOA_PHIM_REQUEST,
    }
}
const actXoaPhimSuccess = (data) => {
    return {
        type: ActionType.XOA_PHIM_SUCCESS,
        payload: data,
    }
}
const actXoaPhimFailed = (err) => {
    return {
        type: ActionType.XOA_PHIM_FAILED,
        payload: err,
    }
}

export const actPhimDuocXoa = maPhim =>{
    return{
        type: ActionType.LAY_PHIM_CAN_XOA,
        payload: maPhim,
    }
}