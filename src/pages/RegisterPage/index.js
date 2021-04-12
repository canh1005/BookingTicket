import { Button, Container, FormControl, TextField, Typography } from '@material-ui/core'
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
        console.log("rs:", regisAcc);
        props.fetchRegister(regisAcc, props.history)
    }
    const renderNoti = () => {
        const { err } = props;
        if (err && err.response.status === 500) {
            return <p className="alert alert-danger">{err.response.data}</p>
        }
    }

    return (
        <div className={registerStyle.root}>
            <Container maxWidth="sm" className={registerStyle.box}>
                <Typography variant="h1">Đăng ký</Typography>
                <form onSubmit={handleOnSubmit} >
                    {renderNoti()}
                    <FormControl className={registerStyle.form}>
                        <TextField name="taiKhoan" variant="outlined" label="Tài khoản" onChange={handleOnChange}></TextField>
                        <TextField name="matKhau" variant="outlined" label="Mật khẩu" onChange={handleOnChange}></TextField>
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
