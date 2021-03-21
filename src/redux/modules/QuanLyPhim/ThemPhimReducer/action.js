import api from "../../../../services/api";
import { setHeader } from "../../../../utils/setHeaders";
import * as Action from "./constances";

export const actAddFilmAPI=(data, token)=>{
    return dispatch=>{
        dispatch(actAddFilmRequest());
        api.post("/QuanLyPhim/ThemPhim",data, setHeader(token))
        .then(rs=>{
            dispatch(actAddFilmSuccess(rs.data))
            alert("Thêm phim thành công !")
        })
        .catch(err=>{
            dispatch(actAddFilmFailed(err))
        })
    }
}

const actAddFilmRequest=()=>{
    return{
        type: Action.ADD_FILM_REQUEST
    }
}
const actAddFilmSuccess=(data)=>{
    return{
        type: Action.ADD_FILM_SUCCESS,
        payload: data,
    }
}
const actAddFilmFailed=(err)=>{
    return{
        type: Action.ADD_FILM_FAILED,
        payload: err,
    }
}