import React, { Component } from 'react'
import DanhSachPhim from './DanhSachPhim'

export default class QuanLyPhim extends Component {
    render() {
        return (
            <div>
                <DanhSachPhim/>
                {this.props.children}
                {console.log("dsPhim",this.props)}
            </div>
        )
    }
}
