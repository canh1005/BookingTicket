import React, { Component } from 'react';
import { DashboardStyle, Nav } from '../../styled/styled';
import logo from './../../assets/web-logo.png'
import PeopleIcon from '@material-ui/icons/People';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import "./Dashboard.css";
import { Menu } from '@material-ui/core';

export default class Dashboard extends Component {
    state = { stateProps: this.props.state };
    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({
            stateProps: nextProps.state,
        })
    }
    render() {
        console.log("abc", this.state);
        return (
            <DashboardStyle>
                {/* <div className="text-center mt-2 d-block">
                    <NavLink to="/">
                        <img width="50px" src={logo} alt=""></img>
                    </NavLink>
                </div> */}

                <nav className="navbar d-block">
                    <ul className="navbar-nav mr-auto">
                        <li className="li-dashboard nav-item ">
                            <Nav to="/">
                                <span id="icon">
                                    <img width="50px" src={logo} alt="" ></img>
                                </span>
                                <span className="title-logo font-weight-bold" style={{ display: this.state.stateProps ? "none" : "block" }}>TIX.VN</span>
                            </Nav>
                        </li>
                        <li className="li-dashboard nav-item ">
                            <Nav className=" font-weight-bold" to="/">
                                <span id="icon"><HomeIcon /></span>
                                <span className="title"  style={{ display: this.state.stateProps ? "none" : "block" }}>Home</span></Nav>
                        </li>
                        <li className="li-dashboard nav-item dropdown">
                            <Nav className=" font-weight-bold" to="/Dashboard/QuanLyNguoiDung" id="navbar" data-toggle="dropdown">
                                <span id="icon"><PeopleIcon /></span>
                                <span className="title"  style={{ display: this.state.stateProps ? "none" : "block" }}>Quản lý người dùng</span>
                            </Nav>

                        </li>

                        <li className="li-dashboard nav-item dropdown">
                            <Nav className=" font-weight-bold" to="/Dashboard/QuanLyPhim" id="navbar" data-toggle="dropdown">
                                <span id="icon"><MovieCreationIcon /></span>
                                <span className="title"  style={{ display: this.state.stateProps ? "none" : "block" }}>Quản lý phim </span>
                            </Nav>
                        </li>
                        <li onClick={() => { this.props.handleHover() }} className="li-dashboard nav-item dropdown ">
                            <span id="toggle">
                                <MenuIcon />
                            </span>
                        </li>
                    </ul>
                </nav>


            </DashboardStyle>

        )
    }
}
