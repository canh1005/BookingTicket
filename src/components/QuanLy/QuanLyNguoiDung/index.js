import React, { Component } from 'react';
import { QuanLyTemplate } from '../../../styled/styled';
import Dashboard from '../../DashboardAdmin/Dashboard';
import ListNguoiDung from '.././QuanLyNguoiDung/ListNguoiDung';
import EditUserModal from '.././QuanLyNguoiDung/Modal/EditUserModal';
// import DeleteUserModal from '.././QuanLyNguoiDung/Modal/DeleteUserModal';
import SearchBar from '.././QuanLyNguoiDung/SearchBar';
import ThemNguoiDung from '.././QuanLyNguoiDung/ThemNguoiDung';

export default class QuanLyNguoiDung extends Component {
    render() {
        return (
            <QuanLyTemplate>
                <Dashboard />

                <div className=''>
                    <div className=''>
                        <ThemNguoiDung />
                        <EditUserModal />
                        {/* <DeleteUserModal /> */}
                    </div>
                    <div className="p-2">
                        <SearchBar />
                        <ListNguoiDung />
                    </div>
                </div>

            </QuanLyTemplate>
        )
    }
}
