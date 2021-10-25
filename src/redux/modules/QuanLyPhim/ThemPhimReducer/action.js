import api from "../../../../services/api";
import * as Action from "./constances";

export const actAddFilmAPI = (data) => {
    return dispatch => {
        dispatch(actAddFilmRequest());
        console.log("DATA1", data);
        api.post("/QuanLyPhim/ThemPhimUploadHinh", data)
            .then(rs => {
                dispatch(actAddFilmSuccess(rs.data))
                alert("Thêm phim thành công!")
            })
            .catch(err => {
                dispatch(actAddFilmFailed(err))
            })
    }
}

const actAddFilmRequest = () => {
    return {
        type: Action.ADD_FILM_REQUEST
    }
}
const actAddFilmSuccess = (data) => {
    return {
        type: Action.ADD_FILM_SUCCESS,
        payload: data,
    }
}
const actAddFilmFailed = (err) => {
    return {
        type: Action.ADD_FILM_FAILED,
        payload: err,
    }
}