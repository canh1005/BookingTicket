import React, { Component } from 'react';
import { Label } from "../../../styled/styled";
import * as Action from "../../../redux/modules/QuanLyPhim/ThemPhimReducer/action"
import { connect } from 'react-redux';
class FormThemPhim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maPhim: 0,
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: {},
            moTa: "",
            maNhom: "",
            ngayKhoiChieu: "",
            danhGia: 0
        }
    }
    user = JSON.parse(localStorage.getItem("User"));
    handleOnChange = (e) => {
        let target = e.target;
        if (target.name === 'hinhAnh') {
            this.setState({ hinhAnh: e.target.files[0] }, () => {
                console.log(this.state);
            });
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const frmData = new FormData();
        for (let key in this.state) {
            frmData.append(key, this.state[key])
        }
        this.props.addFilm(frmData)
    }
    renderNoti() {
        const { err } = this.props;
        if (err && err.response.status === 200) {
            return <div className="alert alert-success">{err.response.data}</div>
        } else if (err && err.response.status === 500) {
            return <div className="alert alert-danger">{err.response.data}</div>
        }
    }
    render() {
        return (
            <div className="container mt-3">
                <form onSubmit={this.handleSubmit}>
                    {this.renderNoti()}
                    <div className="form-row ">
                        <div className="form-group col-md-6">
                            <Label htmlFor="tenPhim">Tên phim:</Label>
                            <input type="text" onChange={this.handleOnChange} name="tenPhim" className="form-control" id="tenPhim" placeholder="Tên phim" />
                        </div>
                        <div className="form-group col-md-6">
                            <Label htmlFor="biDanh">Bí danh:</Label>
                            <input type="text" onChange={this.handleOnChange} name="biDanh" className="form-control" id="biDanh" placeholder="Bí danh" />
                        </div>
                    </div>
                    <div className="form-row ">
                        <div className="form-group col-md-6">
                            <Label htmlFor="trailer">Trailer:</Label>
                            <input type="text" onChange={this.handleOnChange} name="trailer" className="form-control" id="trailer" placeholder="Trailer" />
                        </div>
                        <div className="form-group col-md-6">
                            <Label htmlFor="hinhAnh">Hình ảnh:</Label>
                            <div className="custom-file">
                                <input type="file" onChange={this.handleOnChange} name="hinhAnh" className="custom-file-input" id="validatedCustomFile" />
                                <label className="custom-file-label" htmlFor="validatedCustomFile">Chọn file...</label>
                                <div className="invalid-feedback">Example invalid custom file feedback</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <Label htmlFor="moTa">Mô tả</Label>
                        <textarea type="text" onChange={this.handleOnChange} name="moTa" className="form-control" id="moTa" placeholder="Mô tả" />
                    </div>
                    <div className="form-group">
                        <Label htmlFor="maNhom">Mã nhóm</Label>
                        <input type="text" onChange={this.handleOnChange} name="maNhom" className="form-control" id="maNhom" placeholder="Mã nhóm" />
                    </div>
                    <div className="form-group">
                        <Label htmlFor="ngayKhoiChieu">Ngày khởi chiếu</Label>
                        <input type="text" onChange={this.handleOnChange} name="ngayKhoiChieu" className="form-control" id="ngayKhoiChieu" placeholder="DD/MM/YYYY" />
                    </div>
                    <div className="form-group">
                        <Label htmlFor="danhGia">Đánh giá</Label>
                        <input type="text" onChange={this.handleOnChange} name="danhGia" className="form-control" id="danhGia" placeholder="Đánh giá" />
                    </div>

                    <button type="submit" className="btn btn-warning ">Thêm phim</button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#ModalXoaPhim">
                        Xóa Phim</button>

                </form>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        err: state.addFilmReducer.err,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addFilm: (data) => {
            dispatch(Action.actAddFilmAPI(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormThemPhim)