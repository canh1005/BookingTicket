import { Button, Container, FormControl, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as ActionType from "./../../redux/modules/LoginReducer/action"

function LoginPage(props) {
    const [accountInfo, setAccountInfo] = useState({
        taiKhoan: "",
        matKhau: "",
    })
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAccountInfo({
            ...accountInfo,
            [name]: value,
        })
    }
    const handleOnSubmit = (e) => {
        console.log("history", props);
        e.preventDefault();
        props.fecthLogin(accountInfo, props.history)
    }
    const renderNoti = () => {
        const { err } = props;
        if (err) {
            return <div className="alert alert-danger">{err.response.data}</div>
        }
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Typography variant="h1">Đăng nhập</Typography>
                <form onSubmit={handleOnSubmit}>
                    {renderNoti()}
                    <FormControl>
                        <TextField variant="outlined" label="Username" name="taiKhoan" onChange={handleOnChange}></TextField>
                        <TextField variant="outlined" label="Password" name="matKhau" onChange={handleOnChange}></TextField>
                        <Button><Link to="/Register">Đăng ký</Link></Button>
                        <Button type="submit">Đăng nhập</Button>
                    </FormControl>
                </form>
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
