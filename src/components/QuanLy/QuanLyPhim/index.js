import React, { Component } from 'react'
import FormThemPhim from './FormThemPhim'
import FormXoaPhim from './FormXoaPhim'

export default class QuanLyPhim extends Component {
    render() {
        return (
            <div>
                <FormThemPhim/>
                <FormXoaPhim/>
            </div>
        )
    }
}
