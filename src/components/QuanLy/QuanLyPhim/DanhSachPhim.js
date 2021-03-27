import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                </tr>
            })
        }
    }
    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Mã phim</th>
                            <th>Tên phim</th>
                            <th>Trailer</th>
                            <th>Hình ảnh</th>
                            <th>Mô tả</th>
                            <th>Mã nhóm</th>
                            <th>Ngày khởi chiều</th>
                            <th>Đánh giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        danhSachPhimDaThem: state.addFilmReducer.data,
    }
}
export default connect(mapStateToProps, null)(DanhSachPhim)
