import { Container, FormControl, IconButton, TextField, Typography } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { login } from '../../material-ui/style'
import { checkEmail, checkEmpty, checkPhoneNumber } from '../../utils/Validation'
import { actRegisterAPI } from './../../redux/modules/RegisterReducer/action'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

function RegisterPage(props) {
    const registerStyle = login()
    const [regisAcc, setRegisAcc] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maNhom: "GP05",
        maLoaiNguoiDung: "KhachHang",
        showPassword: false,
        err: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
        },
        frmValid: false,
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
    const handleErrors = (e) => {
        const { name, value } = e.target;
        let mess = checkEmpty(value);
        switch (name) {
            case 'email':
                if (value !== '') {
                    mess = checkEmail(value);
                }
                break;
            case 'soDt':
                if (value !== '') {
                    mess = checkPhoneNumber(value);
                }
                break;
            default:
                break;
        }
        setRegisAcc({
            ...regisAcc,
            err: {
                ...regisAcc.err,
                [name]: mess,
            },
            frmValid: regisAcc.err.taiKhoan === '' && regisAcc.err.matKhau === '' && regisAcc.err.soDt === '' && regisAcc.err.hoTen === '' && regisAcc.err.email === ''
        })
    }
    console.log('a', regisAcc);
    return (
        <div className={registerStyle.root}>
            <Container maxWidth="sm" className={registerStyle.box}>
                <Typography variant="h1">Đăng ký</Typography>
                <form onSubmit={handleOnSubmit} >
                    {renderNoti()}
                    <FormControl className={registerStyle.form}>
                        <div className="d-flex">
                            <AccountCircleIcon /><TextField name="taiKhoan" variant="outlined" label="Tài khoản" onChange={handleOnChange} onBlur={handleErrors} onKeyUp={handleErrors}></TextField>
                        </div>
                        <p className="text-danger">{regisAcc.err.taiKhoan}</p>
                        <span style={{ position: 'relative' }}>
                            <LockIcon /><TextField name="matKhau" variant="outlined" label="Mật khẩu" onChange={handleOnChange} type={regisAcc.showPassword ? 'text' : 'password'} onBlur={handleErrors} onKeyUp={handleErrors}></TextField>
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                className={registerStyle.iconShowPassword}
                            >
                                {regisAcc.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </span>
                        <p className="text-danger">{regisAcc.err.matKhau}</p>
                        <span>
                            <TextSnippetIcon /><TextField name="hoTen" variant="outlined" label="Họ tên" onChange={handleOnChange} onBlur={handleErrors} onKeyUp={handleErrors}></TextField>
                        </span>
                        <p className="text-danger">{regisAcc.err.hoTen}</p>
                        <span>
                            <EmailIcon /><TextField name="email" variant="outlined" label="Email" onChange={handleOnChange} onBlur={handleErrors} onKeyUp={handleErrors}></TextField>

                        </span>
                        <p className="text-danger">{regisAcc.err.email}</p>
                        <span>
                            <PhoneAndroidIcon /><TextField name="soDt" variant="outlined" label="Số điện thoại" onChange={handleOnChange} onBlur={handleErrors} onKeyUp={handleErrors}></TextField>

                        </span>
                        <p className="text-danger">{regisAcc.err.soDt}</p>
                        <button className="btn btn-success mb-2" type="submit" disabled={!regisAcc.frmValid}>Đăng ký</button>
                        <button className="btn btn-info" onClick={(e) => { e.preventDefault(); props.history.push('/auth') }}>Đã có tài khoản?</button>
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
