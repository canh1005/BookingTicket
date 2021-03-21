import React, { Component } from 'react';
import QuanLyNguoiDung from './QuanLyNguoiDung/index';
import QuanLyPhim from './QuanLyPhim/index'
export default class QuanLy extends Component {
    render() {
        return (
            <div>
                <QuanLyNguoiDung/>
                <QuanLyPhim/>
            </div>
        )
    }
}
