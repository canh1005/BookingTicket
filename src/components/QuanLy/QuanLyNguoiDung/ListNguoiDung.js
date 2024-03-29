import React, { Component } from 'react'
import * as Action from '../../../redux/modules/QuanLyNguoiDung/ListNguoiDungReducer/action'

import { connect } from 'react-redux';
import NguoiDungItem from "./NguoiDungItem";
import { Table } from '../../../styled/styled';

class ListNguoiDung extends Component {
    componentDidMount() {
        this.props.fetchlistUser();
    }

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
    render() {
        return (
            <div className='border display-block'>
                <Table className="table border table-bordered table-hover table-layout-fixed;">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Họ tên</th>
                            <th scope="col" colSpan="2">Email</th>
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
                </Table>
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
        fetchlistUser: () => {
            dispatch(Action.actListUserAPI())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNguoiDung)
