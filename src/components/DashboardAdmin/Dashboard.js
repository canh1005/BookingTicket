import React, { Component } from 'react';
import { DashboardStyle, Nav } from '../../styled/styled';
import LogoutIcon from '@mui/icons-material/Logout';
import { connect } from 'react-redux';
import { actLogout } from '../../redux/modules/LoginReducer/action';
import { withRouter } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
class Dashboard extends Component {
    handleLogout=()=>{
        this.props.logOut(this.props.history)
    }
    render() {
        return (
            <DashboardStyle>
                <nav className="navbar d-block">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Nav className="nav-link text-warning font-weight-bold" to="/AdminHome"><HomeIcon/> <span className="sr-only">(current)</span></Nav>
                        </li>
                        <li className="nav-item dropdown">
                            <Nav className="nav-link text-warning font-weight-bold" to="/Dashboard/QuanLyNguoiDung" id="navbar" data-toggle="dropdown">
                                Quản lý người dùng </Nav>
                        </li>
                        <li className="nav-item dropdown">
                            <Nav className="nav-link text-warning font-weight-bold" to="/Dashboard/QuanLyPhim" id="navbar" data-toggle="dropdown">
                                Quản lý phim </Nav>
                        </li>
                    </ul>
                    <button className="btn btn-secondary" onClick={this.handleLogout}><LogoutIcon /></button>
                </nav>
            </DashboardStyle>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        logOut: (history)=>{
            dispatch(actLogout(history))
        }
    }
}
const navBarAdminComplete = connect(null, mapDispatchToProps)(Dashboard)
export default withRouter(navBarAdminComplete)