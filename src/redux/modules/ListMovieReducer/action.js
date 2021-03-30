import * as ActionType from './constances'
import api from './../../../services/api'

export const actListMovieApi = (maNhom) => {
    return dispatch => {
        dispatch(actListMovieRequest());
        api.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
            .then(rs => {
                dispatch(actListMovieSuccess(rs.data));
            })
            .catch(err => {
                dispatch(actListMovieFailed(err.response))
            })
    }
}

const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_REQUEST,
    }
}

const actListMovieSuccess = data => {
    return {
        type: ActionType.LIST_MOVIE_SUCCESS,
        payload: data,
    }
}

const actListMovieFailed = err => {
    return{
        type: ActionType.LIST_MOVIE_FAILED,
        padload: err,
    }
}