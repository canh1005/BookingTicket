import { Button, Container, Dialog, DialogTitle, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import EditProfile from '../../components/EditProfile'
import { actGetProfileAPI } from './../../redux/modules/ProfileReducer/action'
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import { Profile } from '../../material-ui/style'

function ProfilePage(props) {
    const profileStyle = Profile();
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
            props.fetchProfile(taiKhoan)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const renderProfile = () => {
        const { profileData } = props;
        if (profileData) {
            return <Grid container className={profileStyle.content}>
                <Grid item xs={4}>
                    <AccountBoxSharpIcon />
                    <Typography>Họ tên: {profileData.hoTen}</Typography>
                    <Button onClick={handleOpenEditProfile} className={profileStyle.button}>Cập nhật thông tin người dùng</Button>
                    <EditProfile open={openEditProfile} onClose={handleCloseEditProfile} profile={props.profileData} />
                </Grid>
                <Grid item xs={8}>
                    <Typography>Tài khoản: {profileData.taiKhoan}</Typography>
                    <Typography>Email: {profileData.email}</Typography>
                    <Typography>Số điện thoại: {profileData.soDT}</Typography>
                    <Button onClick={handleClickOpen} className={profileStyle.button}>Xem lịch sử đặt vé</Button>
                    {renderBookingTicketHistory(profileData.thongTinDatVe)}
                </Grid>
            </Grid>
        }
    }
    const renderBookingTicketHistory = (thongTinDatVe) => {
        return <Dialog onClose={handleClose} open={open}>
            <DialogTitle >Lịch sử đặt vé</DialogTitle>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Tên phim</TableCell>
                        <TableCell>Ngày đặt</TableCell>
                        <TableCell>Giá</TableCell>
                        <TableCell>Tên rạp</TableCell>
                        <TableCell>Số ghế</TableCell>
                        <TableCell>Hệ thống rạp</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {thongTinDatVe && thongTinDatVe.map(thongTinVe => {
                        let ngayDat = thongTinVe.ngayDat.split('T');
                        return thongTinVe.danhSachGhe.map(thongTinGhe => {
                            return <TableRow>
                                <TableCell>{thongTinVe.tenPhim}</TableCell>
                                <TableCell>{new Date(ngayDat).toLocaleDateString()}</TableCell>
                                <TableCell>{thongTinVe.giaVe}</TableCell>
                                <TableCell>{thongTinGhe.tenCumRap}</TableCell>
                                <TableCell>{thongTinGhe.tenGhe}</TableCell>
                                <TableCell>{thongTinGhe.tenHeThongRap}</TableCell>
                            </TableRow>
                        })
                    })}
                </TableBody>
            </Table>
        </Dialog>

    }
    return (
        <div className={profileStyle.background}>
            <Container maxWidth='lg' className={profileStyle.box}>
                <span className={profileStyle.span}></span>
                {renderProfile()}
                {props.children}
            </Container>
        </div>

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