import * as ActionType from './constances'
import api from '../../../services/api'

export const actSearchMovieAPI = (keyword) => {
    return dispatch => {
        let url = "QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
        if (keyword) {
            url = `QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${keyword}`
        }
        dispatch(actSearchMovieRequest());
        api.get(url)
            .then(rs => {
                dispatch(actSearchMovieSuccess(rs.data));
            })
            .catch(err => {
                dispatch(actSearchMovieFailed(err));
            })
    }
}

const actSearchMovieRequest = () => {
    return {
        type: ActionType.SEARCH_MOVIE_REQUEST,
    }
}

const actSearchMovieSuccess = (searchRS) => {
    return {
        type: ActionType.SEARCH_MOVIE_SUCCESS,
        payload: searchRS,
    }
}

const actSearchMovieFailed = (err) => {
    return {
        type: ActionType.SEARCH_MOVIE_FAILED,
        payload: err,
    }
}

export const actSearchKeyword = (keyword)=>{
    return{
        type: ActionType.SEARCH_KEYWORD,
        payload: keyword,
    }
}