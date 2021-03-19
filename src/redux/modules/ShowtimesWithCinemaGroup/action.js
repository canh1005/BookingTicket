import * as ActionType from './constances'
import api from './../../../services/api'

export const actShowTimeByCinemaIdAPI = (maNhom) => {
    return dispatch => {
        dispatch(actShowtimeWithCinemaGroupRequest());
        api.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`)
            .then(rs => {
                dispatch(actShowtimeWithCinemaGroupSuccess(rs.data));
            })
            .catch(err => {
                dispatch(actShowtimeWithCinemaGroupFaied(err));
            })
    }
}

export const actShowTimeByCinemaGroupIdAPI = (maHeThongRap, maNhom) => {
    return dispatch => {
        dispatch(actShowtimeWithCinemaGroupRequest());
        api.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`)
            .then(rs => {
                dispatch(actShowtimeWithCinemaGroupSuccess(rs.data));
            })
            .catch(err => {
                dispatch(actShowtimeWithCinemaGroupFaied(err));
            })
    }
}

const actShowtimeWithCinemaGroupRequest = () => {
    return {
        type: ActionType.GET_SHOWTIMES_REQUEST,
    }
}
const actShowtimeWithCinemaGroupSuccess = (data) => {
    return {
        type: ActionType.GET_SHOWTIMES_SUCCESS,
        payload: data,
    }
}
const actShowtimeWithCinemaGroupFaied = (err) => {
    return {
        type: ActionType.GET_SHOWTIMES_FAILDED,
        payload: err
    }
}