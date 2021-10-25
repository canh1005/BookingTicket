import React, { Component } from 'react';
import { QuanLyTemplate } from '../../../styled/styled';
import ListNguoiDung from '.././QuanLyNguoiDung/ListNguoiDung';
import EditUserModal from '.././QuanLyNguoiDung/Modal/EditUserModal';
import SearchBar from '.././QuanLyNguoiDung/SearchBar';
import ThemNguoiDung from '.././QuanLyNguoiDung/ThemNguoiDung';

export default class QuanLyNguoiDung extends Component {
    render() {
        return (
            <QuanLyTemplate>
                <div className=''>
                    <div className=''>
                        <ThemNguoiDung />
                        <EditUserModal />
                    </div>
                    <div className="p-2">
                        <ListNguoiDung />
                    </div>
                </div>

            </QuanLyTemplate>
        )
    }
}
