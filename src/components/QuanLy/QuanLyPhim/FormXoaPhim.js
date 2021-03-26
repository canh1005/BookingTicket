import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actXoaPhimAPI } from '../../../redux/modules/QuanLyPhim/XoaPhimReducer/action'
import { Label } from '../../../styled/styled'

class FormXoaPhim extends Component {
    state = {
        maPhim: 0,
    }
    handleOnChange = (e) => {
        this.setState({
            maPhim: e.target.value,
        })
    }
    handleXoaPhim = (e) => {
        e.preventDefault();

        const { accessToken } = JSON.parse(localStorage.getItem("User"))
        this.props.xoaPhim(this.state.maPhim, accessToken)
        // console.log("id",this.state.maPhim);
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
                            <form onSubmit={this.handleXoaPhim}>
                                {this.renderNoti()}
                                <Label htmlfor="maPhim">Mã phim</Label>
                                <input type="text"
                                    class="form-control" name="maPhim" id="maPhim" placeholder="Mã Phim" onChange={this.handleOnChange} />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
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
