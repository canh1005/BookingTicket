import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Label } from '../../../../styled/styled'
import { actEditUserAPI } from '../../../../redux/modules/QuanLyNguoiDung/SuaThongTinReducer/action'
class EditUserModal extends Component {
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
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("UNSAFE_componentWillReceiveProps", nextProps);
        if (nextProps && nextProps.userEdit) {
            this.setState({
                taiKhoan: nextProps.userEdit.taiKhoan,
                matKhau: nextProps.userEdit.matKhau,
                hoTen: nextProps.userEdit.hoTen,
                soDt: nextProps.userEdit.soDt,
                maLoaiNguoiDung: nextProps.userEdit.maLoaiNguoiDung,
                maNhom: nextProps.userEdit.maNhom,
                email: nextProps.userEdit.email,
            })
        } else {
            this.setState({
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDt: '',
                maLoaiNguoiDung: '',
                maNhom: '',
                email: '',
            })
        }
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleRadioChange = e => {
        this.setState({
            maLoaiNguoiDung: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log("AAA", this.state);
        const user = JSON.parse(localStorage.getItem("User"))
        const token = user.accessToken;
        this.props.editUser(this.state, token)
    }
    render() {
        const { userEdit } = this.props;
        console.log("ac", userEdit);
        return (
            <div>
                <div className="modal" id="modalEditUser" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group row">
                                    <Label htmlFor="inputTaiKhoan" className="col-sm-3 col-form-label">Tài khoản:</Label>
                                    <div className="col-sm-12">
                                        <input type="text" name='taiKhoan' className="form-control" id="inputTaiKhoan" placeholder="Tên tài khoản" value={this.state.taiKhoan} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <Label htmlFor="inputMatKhau" className="col-sm-3 col-form-label">Mật khẩu:</Label>
                                    <div className="col-sm-12">
                                        <input type="password" name='matKhau' className="form-control" id="inputMatKhau" placeholder="Mật khẩu" value={this.state.matKhau} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <Label htmlFor="inputHoTen" className="col-sm-3 col-form-label">Họ Tên:</Label>
                                    <div className="col-sm-12">
                                        <input type="text" name='hoTen' className="form-control" id="inputHoTen" placeholder="Họ Tên" value={this.state.hoTen} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <Label htmlFor="inputEmail" className="col-sm-3 col-form-label">Email:</Label>
                                    <div className="col-sm-12">
                                        <input type="email" name='email' className="form-control" id="inputEmail" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <Label htmlFor="inputPhoneNumber" className="col-sm-4 col-form-label">Số điện thoại:</Label>
                                    <div className="col-sm-12">
                                        <input type="tel" name='soDt' className="form-control" id="inputPhoneNumber" placeholder="Số điện thoại" value={this.state.soDt} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <Label htmlFor="inputMaNhom" className="col-sm-3 col-form-label">Mã nhóm:</Label>
                                    <div className="col-sm-12">
                                        <input type="text" name='maNhom' className="form-control" id="inputMaNhom" placeholder="Mã nhóm" value={this.state.maNhom} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-3 pt-0 font-weight-bold">Loại người dùng</legend>
                                        <div className="col-sm-9">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gridRadios3" id="gridRadios4" defaultValue="KhachHang" defaultChecked={this.state.maLoaiNguoiDung === "KhachHang"} onChange={this.handleRadioChange} />
                                                <label className="form-check-label" htmlFor="gridRadios4">
                                                    Khách Hàng
        </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gridRadios3" id="gridRadios5" defaultValue="QuanTri" defaultChecked={this.state.maLoaiNguoiDung === "QuanTri"} onChange={this.handleRadioChange} />
                                                <label className="form-check-label" htmlFor="gridRadios5">
                                                    Quản trị
        </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userEdit: state.editUserReducer.userEdit,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editUser: (userEdit, token) => {
            dispatch(actEditUserAPI(userEdit, token))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal)
