import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import Ghe from '../Ghe';
import { actBookingTicketAPI } from '../../redux/modules/BookingTicketReducer/action'
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function DanhSachGhe(props) {
    const { showTimeData, maLichChieu } = props;
    const { danhSachVeDangDat } = props;
    const renderChairTable = () => {
        if (showTimeData) {
            return showTimeData.danhSachGhe.map((chair) => {
                return <Ghe key={chair.maGhe} chair={chair} maLichChieu={maLichChieu}></Ghe>
            })
        }
    }
    const renderCurrentBookingTicket = () => {
        if (danhSachVeDangDat) {
            return danhSachVeDangDat.map(item => {
                return <TableRow key={item.maGhe}>
                    <TableCell>{item.tenGhe}</TableCell>
                    <TableCell>{item.giaVe}</TableCell>
                </TableRow>
            })
        }
    }
    const handleDatVe = () => {
        const user = JSON.parse(localStorage.getItem("User"))
        const { taiKhoan, accessToken } = user;
        const thongTinDatVe = {
            maLichChieu: maLichChieu,
            danhSachVe: danhSachVeDangDat,
            taiKhoanNguoiDung: taiKhoan
        }
        props.datVe(thongTinDatVe, accessToken, thongTinDatVe.maLichChieu);
    }
    const tongTien = () => {
        let tongTien = 0;
        danhSachVeDangDat.forEach(element => {
            tongTien += element.giaVe
        });
        return tongTien;
    }
    return (
        <Grid container>
            <Grid item xs={8}>
                <Link style={{ color: 'black' }} to='/'><ArrowBackIosIcon fontSize='small' />Trang chủ</Link>
                <Typography className="text-center">Màn hình</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>

                        </TableHead>
                        <TableBody>
                            {renderChairTable()}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={3}>
                <Typography><Button style={{ background: 'red', padding: '10px' }}></Button>Ghế đã đặt</Typography>
                <Typography ><Button style={{ background: 'yellow', padding: '10px' }}></Button>Ghế đang đặt</Typography>
                <Typography><Button style={{ background: 'blue', padding: '10px' }}></Button>Ghế chưa đặt</Typography>
                <Typography>Danh sách vé đang đặt</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Số ghế</TableCell>
                                <TableCell>Giá</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {renderCurrentBookingTicket()}
                            <TableRow>
                                <TableCell>Tổng tiền:</TableCell>
                                <TableCell>{tongTien()}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={handleDatVe}>Đặt vé</Button>
            </Grid>
        </Grid>

    )
}
const mapStateToProps = state => {
    return {
        danhSachVeDangDat: state.bookingTicketReducer.danhSachVeDangDat,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datVe: (thongTinDatVe, token, maLichChieu) => {
            dispatch(actBookingTicketAPI(thongTinDatVe, token, maLichChieu))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);