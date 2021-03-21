import api from "../../../../services/api";
import * as Action from "./constances"
import {setHeader} from '../../../../utils/setHeaders'
import { actListUserAPI } from "../ListNguoiDungReducer/action";

export const actDeleteUserAPI=(taikhoan,token)=>{
    return dispatch=>{
        dispatch(actDeleteUserRequest());
        // let token = setHeader(token)
        api.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`,setHeader(token))
        .then(rs=>{
            dispatch(actDeleteUserSuccess(rs.data))
            alert("Xoa thanh cong");
            dispatch(actListUserAPI());

        })
        .catch(err=>{
            dispatch(actDeleteUserFailed(err.response.data))
            alert(err.response.data)
        })
    }
}

const actDeleteUserRequest=()=>{
    return{
        type: Action.DELETE_USER_REQUEST,
    }
}

const actDeleteUserSuccess=(data)=>{
    return{
        type: Action.DELETE_USER_SUCCESS,
        payload: data,
    }
}

const actDeleteUserFailed=(err)=>{
    return{
        type: Action.DELETE_USER_FAILED,
        payload: err,
    }
}