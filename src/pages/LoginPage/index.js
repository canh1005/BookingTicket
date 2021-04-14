import { Button, Container, FormControl, IconButton, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../material-ui/style'
import * as ActionType from "./../../redux/modules/LoginReducer/action"
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import AssignmentIndTwoToneIcon from '@material-ui/icons/AssignmentIndTwoTone';
import { Visibility, VisibilityOff } from '@material-ui/icons'

function LoginPage(props) {
    const loginStyle = login();
    const [accountInfo, setAccountInfo] = useState({
        taiKhoan: "",
        matKhau: "",
        showPassword: false,
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
        props.fecthLogin(accountInfo, props.history)
        console.log(accountInfo);
    }
    const renderNoti = () => {
        const { err } = props;
        if (err) {
            return <div className="alert alert-danger">{err.response.data}</div>
        }
    }
    const handleOnClick = (e) => {
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
    return (
        <div className={loginStyle.root}>
            <Container maxWidth="sm">
                <div className={loginStyle.box}>
                    <Typography variant="h1">Đăng nhập</Typography>
                    <form onSubmit={handleOnSubmit} >
                        {renderNoti()}
                        <FormControl>
                            <div>
                                <AssignmentIndTwoToneIcon fontSize='large' /><TextField variant="outlined" label="Tài khoản" name="taiKhoan" onChange={handleOnChange}></TextField>
                            </div>
                            <div style={{position: 'relative'}}>
                                <LockTwoToneIcon fontSize='large' /><TextField variant="outlined" label="Mật khẩu" name="matKhau" onChange={handleOnChange} type={accountInfo.showPassword ? 'text' : 'password'}></TextField>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    className={loginStyle.iconShowPassword}
                                >
                                    {accountInfo.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </div>
                            <Button className={loginStyle.button} onClick={handleOnClick}><Link to="/Register">Đăng ký</Link></Button>
                            <Button type="submit" className={loginStyle.button}>Đăng nhập</Button>
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
