import React, { Component } from 'react'
import Dashboard from '../../DashboardAdmin/Dashboard'
import FormThemPhim from './FormThemPhim'

export default class QuanLyPhim extends Component {
    render() {
        return (
            <div>
                <Dashboard/>
                <FormThemPhim/>
            </div>
        )
    }
}
