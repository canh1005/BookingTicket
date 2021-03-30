import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actXoaPhimAPI } from '../../../redux/modules/QuanLyPhim/XoaPhimReducer/action'
import { Label } from '../../../styled/styled'

class FormXoaPhim extends Component {
    handleXoaPhim = (e) => {
        e.preventDefault();
        const { accessToken } = JSON.parse(localStorage.getItem("User"))
        if (this.props.phimCanXoa) {
            this.props.xoaPhim(this.props.phimCanXoa, accessToken)
        }
        // console.log("id",this.props.phimCanXoa);
    }
    renderNoti() {
        const { data, err } = this.props;
        if (err && err.response.status === 500) {
            return <div className="alert alert-danger">{err.response.data}</div>
        } else if (data) {
            return <div className="alert alert-success">{data}</div>
        }
    }
    render() {
        return (
            <div className="modal fade" id="ModalXoaPhim" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="xoaPhimTitle">Xóa Phim</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form >
                                {this.renderNoti()}
                                <Label htmlfor="maPhim">Mã phim</Label>
                                <input type="text"
                                    className="form-control" name="maPhim" id="maPhim" placeholder="Mã Phim" value={this.props.phimCanXoa ? this.props.phimCanXoa : ""} disabled />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleXoaPhim}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state.xoaPhimReducer.data,
        err: state.xoaPhimReducer.err,
        phimCanXoa: state.xoaPhimReducer.phimCanXoa,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        xoaPhim: (maPhim, token) => {
            dispatch(actXoaPhimAPI(maPhim, token))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormXoaPhim)
