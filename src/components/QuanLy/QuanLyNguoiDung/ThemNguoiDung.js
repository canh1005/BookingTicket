import React, { Component } from 'react'
import { Label } from '../../../styled/styled'
import * as Action from '../../../redux/modules/QuanLyNguoiDung/ThemNguoiDungReducer/action'
import { connect } from 'react-redux'
import { checkEmail, checkEmpty, checkPhoneNumber } from '../../../utils/Validation'
class ThemNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDt: '',
                maLoaiNguoiDung: '',
                maNhom: '',
                email: '',
            },
            errs: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDt: '',
                maLoaiNguoiDung: '',
                maNhom: '',
                email: '',
            },
            taiKhoanValid: false,
            matKhauValid: false,
            hoTenValid: false,
            soDtValid: false,
            maLoaiNguoiDungValid: false,
            maNhomValid: false,
            emailValid: false,
            frmValid: false,
        }
    }
    user = JSON.parse(localStorage.getItem("User"));

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchaddUser(this.state.values, this.user.accessToken);
        console.log('a',this.state.values);
    }
    handleRadioChange = (e) => {

        this.setState({
            values:{
                ...this.state.values,
                maLoaiNguoiDung: e.target.value,
            }
        })

    }
    handleErrors = (e) => {
        const { name, value } = e.target;
        let mess = checkEmpty(value);
        let { taiKhoanValid, maLoaiNguoiDungValid, matKhauValid, maNhomValid, emailValid, hoTenValid, soDtValid } = this.state;
        switch (name) {
            case 'taiKhoan':
                taiKhoanValid = mess !== "" ? false : true;
                break;
            case 'matKhau':
                matKhauValid = mess !== "" ? false : true;
                break;
            case 'email':
                emailValid = mess !== "" ? false : true;
                if (value !== "") {
                    mess = checkEmail(value);
                } else {
                    emailValid = false;
                }
                break;
            case 'hoTen':
                hoTenValid = mess !== "" ? false : true;
                break;
            case 'soDt':
                soDtValid = mess !== "" ? false : true;
                // if (value !== "") {
                //     mess = checkPhoneNumber(value);
                // }
                break;
            case 'maNhom':
                maNhomValid = mess !== "" ? false : true;
                break;
            default:
                break;
        }
        if (this.state.maLoaiNguoiDung !== "") {
            maLoaiNguoiDungValid = true;
        }
        this.setState({
            ...this.state,
            errs: { ...this.state.errs, [name]: mess },
            taiKhoanValid,
            matKhauValid,
            emailValid,
            soDtValid,
            maLoaiNguoiDungValid,
            maNhomValid,
            hoTenValid,
            frmValid: taiKhoanValid && matKhauValid && emailValid && soDtValid && maNhomValid && maLoaiNguoiDungValid && hoTenValid,
        })
    }
    Noti=()=>{
        const {err} = this.props;
        if(err){
            return <div className="alert alert-danger">{err.response.data}</div>
        }
    }
    render() {
        return (
            <div className='container mt-3'>
                <form onSubmit={this.handleSubmit}>
                    {this.Noti()}
                    <div className="form-group row">
                        <Label htmlFor="inputTaiKhoan" className="col-sm-2 col-form-label">Tài khoản:</Label>
                        <div className="col-sm-10">
                            <input type="text" name='taiKhoan' className="form-control" id="inputTaiKhoan" placeholder="Tên tài khoản" onChange={this.handleOnChange} onBlur={this.handleErrors} />
                            {this.state.errs.taiKhoan ? <div className="alert alert-danger">{this.state.errs.taiKhoan}</div> : ""}
                        </div>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="inputMatKhau" className="col-sm-2 col-form-label">Mật khẩu:</Label>
                        <div className="col-sm-10">
                            <input type="password" name='matKhau' className="form-control" id="inputMatKhau" placeholder="Mật khẩu" onChange={this.handleOnChange} onBlur={this.handleErrors} />
                            {this.state.errs.matKhau ? <div className="alert alert-danger">{this.state.errs.matKhau}</div> : ""}
                        </div>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="inputHoTen" className="col-sm-2 col-form-label">Họ Tên:</Label>
                        <div className="col-sm-10">
                            <input type="text" name='hoTen' className="form-control" id="inputHoTen" placeholder="Họ Tên" onChange={this.handleOnChange} onBlur={this.handleErrors} />
                            {this.state.errs.hoTen ? <div className="alert alert-danger">{this.state.errs.hoTen}</div> : ""}
                        </div>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email:</Label>
                        <div className="col-sm-5">
                            <input type="email" name='email' className="form-control" id="inputEmail" placeholder="Email" onChange={this.handleOnChange} onBlur={this.handleErrors} />
                            {this.state.errs.email ? <div className="alert alert-danger">{this.state.errs.email}</div> : ""}
                        </div>
                        <Label htmlFor="inputPhoneNumber" className="col-sm-2 col-form-label">Số điện thoại:</Label>
                        <div className="col-sm-3">
                            <input type="tel" name='soDt' className="form-control" id="inputPhoneNumber" placeholder="Số điện thoại" onChange={this.handleOnChange} onBlur={this.handleErrors} />
                            {this.state.errs.soDt ? <div className="alert alert-danger">{this.state.errs.soDt}</div> : ""}
                        </div>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="inputMaNhom" className="col-sm-2 col-form-label">Mã nhóm:</Label>
                        <div className="col-sm-3">
                            <input type="text" name='maNhom' className="form-control" id="inputMaNhom" placeholder="Mã nhóm" onChange={this.handleOnChange} onBlur={this.handleErrors} />
                            {this.state.errs.maNhom ? <div className="alert alert-danger">{this.state.errs.maNhom}</div> : ""}
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-3 pt-0 font-weight-bold">Loại người dùng</legend>
                            <div className="col-sm-9">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="KhachHang" defaultChecked={this.state.values.maLoaiNguoiDung === "KhachHang"} onChange={this.handleRadioChange} onClick={this.handleErrors} />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Khách Hàng
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="QuanTri" checked={this.state.values.maLoaiNguoiDung === "QuanTri"} onChange={this.handleRadioChange} onClick={this.handleErrors} />
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Quản trị
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-success" disabled={!this.state.frmValid}>Thêm người dùng</button>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        err: state.addUserReducer.err,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchaddUser: (data, token) => {
            dispatch(Action.actThemNguoiDungAPI(data, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemNguoiDung)
