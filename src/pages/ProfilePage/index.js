import { Avatar, Button, Container, Dialog, DialogTitle, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import EditProfile from '../../components/EditProfile'
import { actGetProfileAPI } from './../../redux/modules/ProfileReducer/action'

function ProfilePage(props) {
    const userData = JSON.parse(localStorage.getItem('User'));
    const taiKhoan = {
        taiKhoan: userData.taiKhoan,
    }
    const [open, setOpen] = React.useState(false);
    const [openEditProfile, setOpenEditProfile] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpenEditProfile = () => {
        setOpenEditProfile(true);
    }
    const handleCloseEditProfile = () => {
        setOpenEditProfile(false);
    }
    useEffect(() => {
        if (userData) {
            // console.log("userData", taiKhoan);
            props.fetchProfile(taiKhoan)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const renderProfile = () => {
        const { profileData } = props;
        if (profileData) {
            console.log("DATA: ", profileData);
            return <Grid container>
                <Grid item xs={4}>
                    <Avatar src="" />
                    <Typography>Họ tên: {profileData.hoTen}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Paper>
                        <Typography>Tài khoản: {profileData.taiKhoan}</Typography>
                        <Typography>Email: {profileData.email}</Typography>
                        <Typography>Số điện thoại: {profileData.soDT}</Typography>
                        <Button onClick={handleClickOpen}>Xem lịch sử đặt vé</Button>
                        {renderBookingTicketHistory(profileData.thongTinDatVe)}
                    </Paper>
                </Grid>
            </Grid>
        }
    }
    const renderBookingTicketHistory = (thongTinDatVe) => {
        return <Dialog onClose={handleClose} open={open}>
            <DialogTitle >Lịch sử đặt vé</DialogTitle>
            <Paper>Work!: {thongTinDatVe}</Paper>
        </Dialog>

    }
    return (
        <Container fixed>
            {renderProfile()}
            <Button onClick={handleOpenEditProfile}>Cập nhật thông tin người dùng</Button>
            <EditProfile open={openEditProfile} onClose={handleCloseEditProfile} profile={props.profileData}/>
            {props.children}
        </Container>
    )
}
const mapStateToProps = state => {
    return {
        profileData: state.profileReducer.data,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProfile: (taiKhoan) => {
            dispatch(actGetProfileAPI(taiKhoan))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)