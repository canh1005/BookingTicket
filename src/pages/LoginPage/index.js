import { Button, Container, FormControl, IconButton, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../material-ui/style'
import * as ActionType from "./../../redux/modules/LoginReducer/action"
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import AssignmentIndTwoToneIcon from '@material-ui/icons/AssignmentIndTwoTone';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { checkEmpty } from '../../utils/Validation'

function LoginPage(props) {
    const loginStyle = login();
    const [accountInfo, setAccountInfo] = useState({
        taiKhoan: "",
        matKhau: "",
        showPassword: false,
        err: {
            taiKhoan: '',
            matKhau: '',
        },
        formValid: false,
    })
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAccountInfo({
            ...accountInfo,
            [name]: value,
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        props.fecthLogin(accountInfo, props.history);
    }
    const renderNoti = () => {
        const { err } = props;
        if (err) {
            return <div className="alert alert-danger">{err.response.data}</div>
        }
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        props.history.push('/Register')
    }
    const handleClickShowPassword = () => {
        setAccountInfo({
            ...accountInfo,
            showPassword: !accountInfo.showPassword,
        })
    }
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }
    const handleErrors = (e) => {
        const { name, value } = e.target;
        let mess = checkEmpty(value);
        setAccountInfo({
            ...accountInfo,
            err: { ...accountInfo.err, [name]: mess },
            formValid: accountInfo.err.taiKhoan === '' && accountInfo.err.matKhau === ''
        })
    }
    return (
        <div className={loginStyle.root}>
            <Container style={{ width: 'auto', margin: 'auto' }}>
                <div className={loginStyle.box}>
                    <Typography variant="h1">Đăng nhập</Typography>
                    <form onSubmit={handleOnSubmit} >
                        {renderNoti()}
                        <FormControl>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
                                <AssignmentIndTwoToneIcon fontSize='large' /><TextField variant="outlined" label="Tài khoản" name="taiKhoan" onChange={handleOnChange} onBlur={handleErrors} onKeyUp={handleErrors}></TextField>
                            </div>
                            <p className="text-danger">{accountInfo.err.taiKhoan}</p>
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                <LockTwoToneIcon fontSize='large' /><TextField variant="outlined" label="Mật khẩu" name="matKhau" onChange={handleOnChange} type={accountInfo.showPassword ? 'text' : 'password'} onBlur={handleErrors} onKeyUp={handleErrors}></TextField>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    className={loginStyle.iconShowPassword}
                                >
                                    {accountInfo.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </div>
                            <p className="text-danger">{accountInfo.err.matKhau}</p>
                            <Button className={loginStyle.button_lg} onClick={handleOnClick}><Link to="/Register">Đăng ký</Link></Button>
                            <Button type="submit" className={loginStyle.button_rg} disabled={!accountInfo.formValid}>Đăng nhập</Button>
                        </FormControl>
                    </form>
                </div>
            </Container>
        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        // data: state.loginReducer.data,
        err: state.loginReducer.err,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fecthLogin: (user, history) => {
            dispatch(ActionType.actLoginAPI(user, history));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
