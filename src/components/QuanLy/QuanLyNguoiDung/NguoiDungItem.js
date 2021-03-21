import React, { Component } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { ButtonDelete, ButtonEdit, } from "../../../styled/styled";
import { actGetUserEdited } from '../../../redux/modules/QuanLyNguoiDung/SuaThongTinReducer/action'
import { actDeleteUserAPI } from '../../../redux/modules/QuanLyNguoiDung/XoaNguoiDungReducer/action'
import { connect } from 'react-redux';

class NguoiDungItem extends Component {

    handleOnClick = (user) => {
        const ngDung = JSON.parse(localStorage.getItem("User"))
        const accessToken = ngDung.accessToken;
        this.props.fetchDeleteUser(user.taiKhoan, accessToken)
    }
    render() {

        const { User } = this.props;
        return (
            <tr key={User.taiKhoan}>
                <td>{User.hoTen}</td>
                <td>{User.email}</td>
                <td>{User.taiKhoan}</td>
                <td>{User.matKhau}</td>
                <td>{User.soDt}</td>
                <td>{User.maLoaiNguoiDung}</td>
                <td>
                    <ButtonEdit className='btn-info'
                        data-toggle="modal"
                        data-target="#modalEditUser"
                        onClick={() => { this.props.editUser(User) }}
                    ><EditIcon />
                    </ButtonEdit>
                    <ButtonDelete onClick={() => { this.handleOnClick(User) }} className='btn-danger' data-toggle='modal' data-tagert="#deleteUserModal">
                        <DeleteOutlineIcon />
                    </ButtonDelete>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDeleteUser: (taiKhoan, token) => {
            dispatch(actDeleteUserAPI(taiKhoan, token))
        },
        editUser: (user) => {
            dispatch(actGetUserEdited(user))
        }
    }
}
export default connect(null, mapDispatchToProps)(NguoiDungItem)
