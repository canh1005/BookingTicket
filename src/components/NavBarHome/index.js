import { NavLink, withRouter, Link } from 'react-router-dom'
import { navBar } from './../../material-ui/style'
import logo from './../../assets/web-logo.png'

import React from 'react'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { connect } from 'react-redux'
import { actLogout } from './../../redux/modules/LoginReducer/action'


function NavBarHome(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    const classes = navBar()
    const handleLogout = () => {
        props.fetchLogout(props.history);
    }
    const renderNavBarHome = () => {
        if (localStorage.getItem("User")) {
            const User = JSON.parse(localStorage.getItem("User"));
            return (
                <div>
                    <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        {User.hoTen}
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            {User.maLoaiNguoiDung === "QuanTri" && <MenuItem onClick={handleClose}>Dashboard</MenuItem>}
                                            <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            )
        } else {
            return (
                <div>
                    <NavLink className={classes.link} to='/auth'>Đăng nhập</NavLink>
                </div>
            )
        }
    }
    return (
        <div className={classes.root}>
            <NavLink to='/'><img width='50' src={logo} alt='' /></NavLink>
            <div>
                <NavLink className={classes.link} to='#abc'>Lịch chiếu</NavLink>
                <NavLink className={classes.link} to='#abc'>Cụm rạp</NavLink>
                <NavLink className={classes.link} to='#abc'>Tin tức</NavLink>
                <NavLink className={classes.link} to='#abc'>Ứng dụng</NavLink>
            </div>
            {renderNavBarHome()}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogout: (history) => {
            dispatch(actLogout(history))
        }
    }
}
const NavBarHomeComplete = connect(null, mapDispatchToProps)(NavBarHome)
export default withRouter(NavBarHomeComplete);
