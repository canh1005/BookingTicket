import React, { Component } from 'react'
import * as Action from '../../../redux/modules/QuanLyNguoiDung/ListNguoiDungReducer/action'

import { connect } from 'react-redux';
import NguoiDungItem from "./NguoiDungItem";
import { Table } from '../../../styled/styled';

class ListNguoiDung extends Component {
    renderTableListUser = () => {
        let { data } = this.props;
        if (data) {
            return data.map(user => {
                return <NguoiDungItem
                    key={user.taiKhoan}
                    User={user} />
            })
        }
    }
    rendermaNhom = () => {
        let dropDownItems = [];
        for(let i = 1; i <= 9; i++){
            let maNhom = `GP0${i}`;
            dropDownItems.push(<li><button className="dropdown-item" onClick={()=>{this.handleOnClick(maNhom)}}>{maNhom}</button></li>)
        }
        return dropDownItems;
    }
    
    handleOnClick(maNhom) {
        this.props.fetchlistUser(maNhom);
    }
    render() {
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
                <div className='border display-block' style={{ overflowY: "scroll", maxHeight: "400px" }}>
                    <table className="table border table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Họ tên</th>
                                <th scope="col">Email</th>
                                <th scope="col">Tài khoản</th>
                                <th scope="col">Mật khẩu</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Loại người dùng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableListUser()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.listUserReducer.data,
        listSearch: state.searchUserReducer.data,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchlistUser: (maNhom) => {
            dispatch(Action.actListUserAPI(maNhom))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNguoiDung)
