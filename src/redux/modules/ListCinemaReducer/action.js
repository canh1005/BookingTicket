import * as ActionType from "./constances"
import api from "./../../../services/api"

export const actListCinemaAPI = ()=>{
    return dispatch =>{
        dispatch(actListCinemaRequest());
        api.get("QuanLyRap/LayThongTinHeThongRap")
        .then(rs=>{
            dispatch(actListCinemaSuccess(rs.data));
        })
        .catch(err=>{
            dispatch(actListCinemaFailed(err.response));
        })
    }
}

const actListCinemaRequest = () => {
    return {
        type: ActionType.LIST_CINEMA_REQUEST,
    }
}

const actListCinemaSuccess = (data) => {
    return {
        type: ActionType.LIST_CINEMA_SUCCESS,
        payload: data,
    }
}

const actListCinemaFailed = (err) => {
    return {
        type: ActionType.LIST_CINEMA_FAILED,
        payload: err,
    }
}