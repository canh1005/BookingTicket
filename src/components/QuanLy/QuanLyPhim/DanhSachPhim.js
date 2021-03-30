import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actListMovieApi } from '../../../redux/modules/ListMovieReducer/action'
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { ButtonDelete, ButtonEdit, Nav, } from "../../../styled/styled";
import { actPhimSeDuocSua } from '../../../redux/modules/QuanLyPhim/SuaPhimReducer/action'
import { actPhimDuocXoa } from '../../../redux/modules/QuanLyPhim/XoaPhimReducer/action'
import FormXoaPhim from './FormXoaPhim';

class DanhSachPhim extends Component {
    renderTable = () => {
        const { danhSachPhimDaThem } = this.props;
        if (danhSachPhimDaThem) {
            return danhSachPhimDaThem.map(phim => {
                return <tr key={phim.maPhim}>
                    <td>{phim.maPhim}</td>
                    <td>{phim.tenPhim}</td>
                    <td>{phim.trailer}</td>
                    <td>{phim.hinhAnh}</td>
                    <td>{phim.moTa}</td>
                    <td>{phim.maNhom}</td>
                    <td>{phim.ngayKhoiChieu}</td>
                    <td>{phim.danhGia}</td>
                    <td>
                        <ButtonEdit className='btn-info'><Nav to={`/Dashboard/${phim.maPhim}/suaPhim`} onClick={() => this.props.layPhimDuocSua(phim)}><EditIcon /></Nav></ButtonEdit>
                        <ButtonDelete className='btn-danger' type="button" data-toggle="modal" data-target="#ModalXoaPhim" onClick={() => { this.props.layPhimCanXoa(phim.maPhim) }}><DeleteOutlineIcon /></ButtonDelete>
                    </td>
                </tr>
            })
        }
    }
    rendermaNhom = () => {
        let dropdownItems = []
        for (let i = 1; i <= 15; i++) {
            let maNhom = ''
            if (i < 10) {
                maNhom = `GP0${i}`
            } else {
                maNhom = `GP${i}`
            }
            dropdownItems.push(<li><button className="dropdown-item" onClick={() => { this.handleOnClick(maNhom) }}>{maNhom}</button></li>);
        }
        return dropdownItems
    }
    handleOnClick(maNhom) {
        this.props.layDanhSachPhim(maNhom);
    }
    render() {
        console.log("dsPhimChild", this.props);
        return (
            <div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mã nhóm
                </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.rendermaNhom()}
                    </div>
                </div>
                <Nav to="/Dashboard/themPhim">Thêm phim</Nav>
                <table className="table border table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Mã phim</th>
                            <th scope="col">Tên phim</th>
                            <th scope="col">Trailer</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Mã nhóm</th>
                            <th scope="col">Ngày khởi chiều</th>
                            <th scope="col">Đánh giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
                <FormXoaPhim />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        danhSachPhimDaThem: state.listMovieReducer.data,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layDanhSachPhim: maPhim => {
            dispatch(actListMovieApi(maPhim))
        },
        layPhimDuocSua: phim => {
            dispatch(actPhimSeDuocSua(phim))
        },
        layPhimCanXoa: maPhim => {
            dispatch(actPhimDuocXoa(maPhim))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachPhim)
