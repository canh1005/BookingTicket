import { Box, Dialog, DialogTitle, FormControl, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actEditProfileAPI } from './../../redux/modules/EditProfileReducer/action'

function EditProfile(props) {
    const { onClose, open, profile } = props;
    const [userEdit, setUserEdit] = useState({
        values: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            hoTen: "",
            maLoaiNguoiDung: "",
        }
    });
    // if (profile && userEdit.values.taiKhoan !== profile.taiKhoan) {
    //     setUserEdit({
    //         ...userEdit,
    //         values: profile,
    //     })
    // }
    // console.log("userEdit ", userEdit);
    // console.log("profile: ", profile);
    const handleClose = () => {
        onClose();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserEdit({
            ...userEdit,
            values: { [name]: value, }
        })
        console.log("User", userEdit);
    }
    const renderEditProfile = () => {
        if (profile) {
            return <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Cập nhật thông tin</DialogTitle>
                <Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <TextField variant="filled" name="taiKhoan" label="Tài Khoản" defaultValue={profile.taiKhoan} onChange={handleOnChange}></TextField>
                            <TextField variant="filled" name="matKhau" label="Mật Khẩu" defaultValue={profile.matKhau} onChange={handleOnChange}></TextField>
                            <TextField variant="filled" name="email" label="Email" defaultValue={profile.email} onChange={handleOnChange}></TextField>
                            <TextField variant="filled" name="soDt" label="Số điện thoại" defaultValue={profile.soDT} onChange={handleOnChange}></TextField>
                            <TextField variant="filled" name="hoTen" label="Họ tên" defaultValue={profile.hoTen} onChange={handleOnChange}></TextField>
                        </FormControl>
                    </form>
                </Box>
                <Button type="submit">Cập nhật</Button>
                <Button onClick={handleClose}>Close</Button>
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
        editUser: (userEdit) => {
            dispatch(actEditProfileAPI(userEdit))
        }
    }
}

export default connect(null, mapDispatchToProps)(EditProfile)
