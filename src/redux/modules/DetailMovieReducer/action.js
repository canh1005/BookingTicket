import * as ActionType from "./contances"
import api from "./../../../services/api"

export const actDetailMovieAPI = (id) => {
    return dispatch => {
        dispatch(actDetailMovieRequest());
        api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
        .then(rs=>{
            dispatch(actDetailMovieSuccess(rs.data))
        })
        .catch(err=>{
            dispatch(actDetailMovieFailed(err.reponse))
        })
    }
}

const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST,
    }
}

const actDetailMovieSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
}

const actDetailMovieFailed = (err) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAILED,
        payload: err
    }
}
