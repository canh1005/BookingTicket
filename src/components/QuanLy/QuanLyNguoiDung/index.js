import React, { Component } from 'react';
import { QuanLyTemplate } from '../../../styled/styled';
import ListNguoiDung from '.././QuanLyNguoiDung/ListNguoiDung';
import EditUserModal from '.././QuanLyNguoiDung/Modal/EditUserModal';
// import DeleteUserModal from '.././QuanLyNguoiDung/Modal/DeleteUserModal';
import SearchBar from '.././QuanLyNguoiDung/SearchBar';
import ThemNguoiDung from '.././QuanLyNguoiDung/ThemNguoiDung';

export default class QuanLyNguoiDung extends Component {
    render() {
        console.log('aaa',this.props);
        return (
            <QuanLyTemplate>

                <div className=''>
                    <div className=''>
                        <ThemNguoiDung />
                        <EditUserModal />
                        {/* <DeleteUserModal /> */}
                    </div>
                    <div className="p-2">
                        
                        <ListNguoiDung />
                    </div>
                </div>

            </QuanLyTemplate>
        )
    }
}
