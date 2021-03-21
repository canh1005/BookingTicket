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
            hinhAnh: "",
            moTa: "",
            maNhom: "",
            ngayKhoiChieu: "",
            danhGia: 0
        }
    }
    user = JSON.parse(localStorage.getItem("User"));
    handleOnChange = (e) => {
        let target = e.target;
        if(target.name === 'hinhAnh'){
            this.setState({hinhAnh: e.target.files[0]},()=>{
                console.log(this.state);
            });
        }else{
            this.setState({[e.target.name]: e.target.value},()=>{
                console.log(this.state);
            })
        }
        console.log(this.state);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.addFilm(this.state, this.user.accessToken)
    }

    render() {
        return (
            <div className="container mt-3">
                <form onSubmit={this.handleSubmit}>
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
                                <input type="file" onChange={this.handleOnChange} name="hinhAnh" className="custom-file-input" id="validatedCustomFile" required />
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
                        <input type="text" onChange={this.handleOnChange} name="ngayKhoiChieu" className="form-control" id="maNhom" placeholder="DD/MM/YYYY" value="GP01"/>
                    </div>
                    {/* <div className="col-sm-8 mb-4 p-0">
                        <Label className="col-sm-2 p-0" htmlFor="danhGia">Đánh giá: </Label>
                        <select className="custom-select col-sm-3 " name="danhGia" id="danhGia">
                            <option selected>Chọn đánh giá</option>
                            <option value={1}>1*</option>
                            <option value={2}>2*</option>
                            <option value={3}>3*</option>
                            <option value={4}>4*</option>
                            <option value={5}>5*</option>
                        </select>
                    </div> */}

                    <button type="submit" className="btn btn-warning ">Thêm phim</button>
                </form>
            </div >
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addFilm: (data, token) => {
            dispatch(Action.actAddFilmAPI(data, token))
        }
    }
}
export default connect(null, mapDispatchToProps)(FormThemPhim)