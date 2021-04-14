import { Button, Container, FormControl, IconButton, TextField, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { login } from '../../material-ui/style'
import { actRegisterAPI } from './../../redux/modules/RegisterReducer/action'

function RegisterPage(props) {
    const registerStyle = login()
    const [regisAcc, setRegisAcc] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        showPassword: false,
    })

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setRegisAcc({
            ...regisAcc,
            [name]: value,
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.fetchRegister(regisAcc, props.history)
    }
    const renderNoti = () => {
        const { err } = props;
        if (err && err.response.status === 500) {
            return <p className="alert alert-danger">{err.response.data}</p>
        }
    }
    const handleClickShowPassword = () => {
        setRegisAcc({
            ...regisAcc,
            showPassword: !regisAcc.showPassword,
        })
    }
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }
    return (
        <div className={registerStyle.root}>
            <Container maxWidth="sm" className={registerStyle.box}>
                <Typography variant="h1">Đăng ký</Typography>
                <form onSubmit={handleOnSubmit} >
                    {renderNoti()}
                    <FormControl className={registerStyle.form}>
                        <TextField name="taiKhoan" variant="outlined" label="Tài khoản" onChange={handleOnChange}></TextField>
                        <span style={{ position: 'relative' }}>
                            <TextField name="matKhau" variant="outlined" label="Mật khẩu" onChange={handleOnChange} type={regisAcc.showPassword ? 'text' : 'password'}></TextField>
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                className={registerStyle.iconShowPassword}
                            >
                                {regisAcc.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </span>
                        <TextField name="hoTen" variant="outlined" label="Họ tên" onChange={handleOnChange}></TextField>
                        <TextField name="email" variant="outlined" label="Email" onChange={handleOnChange}></TextField>
                        <TextField name="soDt" variant="outlined" label="Số điện thoại" onChange={handleOnChange}></TextField>
                        <Button type="submit">Đăng ký</Button>
                    </FormControl>
                </form>
            </Container>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        err: state.registerReducer.err,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRegister: (user, history) => {
            dispatch(actRegisterAPI(user, history))
        }
    }
}

const renderRegisterPageComplete = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
export default withRouter(renderRegisterPageComplete);
