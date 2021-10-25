import { Box, Dialog, DialogTitle, FormControl, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actEditProfileAPI } from './../../redux/modules/EditProfileReducer/action'

function EditProfile(props) {
    const { onClose, open, profile } = props;
    const { maLoaiNguoiDung } = JSON.parse(localStorage.getItem("User"))
    const [userEdit, setUserEdit] = useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "",
        hoTen: "",
        maLoaiNguoiDung: maLoaiNguoiDung,
    });
    if (profile && userEdit.taiKhoan !== profile.taiKhoan) {
        setUserEdit({
            ...userEdit,
            taiKhoan: profile.taiKhoan,
            matKhau: profile.matKhau,
            email: profile.email,
            soDt: profile.soDT,
            maNhom: profile.maNhom,
            hoTen: profile.hoTen,
            maLoaiNguoiDung: maLoaiNguoiDung,
        })
    }
    const handleClose = () => {
        onClose();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const User = JSON.parse(localStorage.getItem("User"));
        const accessToken = User.accessToken;
        console.log("AA", userEdit);
        props.editUser(userEdit, accessToken);
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserEdit({
            ...userEdit,
            // values: { [name]: value, },
            [name]: value
        })
    }
    const renderEditProfile = () => {
        if (profile) {
            return <Dialog open={open} onClose={handleClose} style={{padding:'10px'}}>
                <DialogTitle>Cập nhật thông tin</DialogTitle>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <TextField variant="filled" name="taiKhoan" label="Tài Khoản" defaultValue={profile.taiKhoan} onChange={handleOnChange} disabled></TextField>
                            <TextField variant="filled" name="matKhau" label="Mật Khẩu" defaultValue={profile.matKhau} onChange={handleOnChange}></TextField>
                            <TextField variant="filled" name="email" label="Email" defaultValue={profile.email} onChange={handleOnChange}></TextField>
                            <TextField variant="filled" name="soDt" label="Số điện thoại" defaultValue={profile.soDT} onChange={handleOnChange}></TextField>
                            <TextField variant="filled" name="hoTen" label="Họ tên" defaultValue={profile.hoTen} onChange={handleOnChange}></TextField>
                        </FormControl>
                    </form>
                </Box>
                <button className="btn btn-info my-2" type="submit" onClick={handleSubmit}>Cập nhật</button>
                <button className="btn btn-danger my-2" onClick={handleClose}>Close</button>
            </Dialog>
        }
    }
    return (
        <div>
            {renderEditProfile()}
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        editUser: (userEdit, accessToken) => {
            dispatch(actEditProfileAPI(userEdit, accessToken))
        }
    }
}

export default connect(null, mapDispatchToProps)(EditProfile)
