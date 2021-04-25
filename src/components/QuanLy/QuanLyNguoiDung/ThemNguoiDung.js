import React, { Component } from 'react'
import { Label } from '../../../styled/styled'
import * as Action from '../../../redux/modules/QuanLyNguoiDung/ThemNguoiDungReducer/action'
import { connect } from 'react-redux'
class ThemNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDt: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: '',
        }
    }
    user = JSON.parse(localStorage.getItem("User"));

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.fetchaddUser(this.state, this.user.accessToken)
    }
    handleRadioChange=(e)=>{
        
        this.setState({
            maLoaiNguoiDung: e.target.value,
        },)
        
    }
    
    render() {
        // console.log("Token: ", this.user.accessToken);
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group row">
                        <Label htmlFor="inputTaiKhoan" className="col-sm-2 col-form-label">Tài khoản:</Label>
                        <div className="col-sm-10">
                            <input type="text" name='taiKhoan' className="form-control" id="inputTaiKhoan" placeholder="Tên tài khoản" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="inputMatKhau" className="col-sm-2 col-form-label">Mật khẩu:</Label>
                        <div className="col-sm-10">
                            <input type="password" name='matKhau' className="form-control" id="inputMatKhau" placeholder="Mật khẩu" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="inputHoTen" className="col-sm-2 col-form-label">Họ Tên:</Label>
                        <div className="col-sm-10">
                            <input type="text" name='hoTen' className="form-control" id="inputHoTen" placeholder="Họ Tên" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email:</Label>
                        <div className="col-sm-5">
                            <input type="email" name='email' className="form-control" id="inputEmail" placeholder="Email" onChange={this.handleOnChange}/>
                        </div>
                        <Label htmlFor="inputPhoneNumber" className="col-sm-2 col-form-label">Số điện thoại:</Label>
                        <div className="col-sm-3">
                            <input type="tel" name='soDt' className="form-control" id="inputPhoneNumber" placeholder="Số điện thoại" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <Label htmlFor="inputMaNhom" className="col-sm-2 col-form-label">Mã nhóm:</Label>
                        <div className="col-sm-3">
                            <input type="text" name='maNhom' className="form-control" id="inputMaNhom" placeholder="Mã nhóm" onChange={this.handleOnChange}/>
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div className="row">
                            <legend className="col-form-label col-sm-3 pt-0 font-weight-bold">Loại người dùng</legend>
                            <div className="col-sm-9">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="KhachHang" defaultChecked={this.state.maLoaiNguoiDung === "KhachHang"} onChange={this.handleRadioChange} />
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                        Khách Hàng
        </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="QuanTri" checked={this.state.maLoaiNguoiDung === "QuanTri"} onChange={this.handleRadioChange}/>
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Quản trị
        </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn btn-success">Thêm người dùng</button>
                </form>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchaddUser: (data, token) => {
            dispatch(Action.actThemNguoiDungAPI(data, token))
        }
    }
}

export default connect(null, mapDispatchToProps)(ThemNguoiDung)
