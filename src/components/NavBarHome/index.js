import { NavLink, withRouter, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { navBar } from './../../material-ui/style'
import logo from './../../assets/web-logo.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
import SearchBarHome from '../SearchBarHome';


function NavBarHome(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const classes = navBar();
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
                        className={classes.text}
                    >
                        {User.hoTen}<ExpandMoreIcon />
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
                                            {User.maLoaiNguoiDung === "QuanTri" && <MenuItem className={classes.menu} onClick={handleClose}><Link to="/AdminHome">Dashboard</Link></MenuItem>}
                                            <MenuItem className={classes.menu} onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                                            <MenuItem className={classes.menu} onClick={handleLogout}>Logout</MenuItem>
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
            <div className={classes.body}>
                <NavLink to='/'><img width='50' src={logo} alt='' /></NavLink>
                <div>
                    <HashLink smooth className={classes.link} to='#dsPhim'>Danh sách phim</HashLink>
                    <HashLink smooth className={classes.link} to='#cumRap'>Cụm rạp</HashLink>
                    <SearchBarHome />
                </div>
                {renderNavBarHome()}
            </div>
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
