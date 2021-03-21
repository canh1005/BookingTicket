import React, { Component } from 'react';
import { DashboardStyle, Nav } from '../../styled/styled';
export default class Dashboard extends Component {
    render() {
        return (
            <DashboardStyle>
                <nav className="navbar navbar-expand-sm">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Nav className="nav-link text-warning font-weight-bold" to="/AdminHome">Home <span className="sr-only">(current)</span></Nav>
                        </li>
                        <li class="nav-item dropdown">
                            <Nav className="nav-link text-warning font-weight-bold" to="/Dashboard/QuanLyNguoiDung" id="navbar" data-toggle="dropdown">
                                Quản lý người dùng </Nav>
                            {/* <div class="dropdown-menu">
                                <NavLink class="dropdown-item" to="#a">Thêm</NavLink>
                                <NavLink class="dropdown-item" to="#a">Xóa</NavLink>
                                <NavLink class="dropdown-item" to="#a">Sửa</NavLink>
                                <NavLink class="dropdown-item" to="#a">Tìm kiếm người dùng</NavLink>
                            </div> */}
                        </li>
                        <li class="nav-item dropdown">
                            <Nav className="nav-link text-warning font-weight-bold" to="/Dashboard/QuanLyPhim" id="navbar" data-toggle="dropdown">
                                Quản lý phim </Nav>
                            {/* <div class="dropdown-menu">
                                <NavLink class="dropdown-item" to="#a">Thêm</NavLink>
                                <NavLink class="dropdown-item" to="#a">Xóa</NavLink>
                                <NavLink class="dropdown-item" to="#a">Sửa</NavLink>
                                <NavLink class="dropdown-item" to="#a">Upload hình</NavLink>
                            </div> */}
                        </li>
                    </ul>
                </nav>
            

            </DashboardStyle>

        )
    }
}
