import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import Ghe from '../Ghe';
import { actBookingTicketAPI } from '../../redux/modules/BookingTicketReducer/action'

function DanhSachGhe(props) {
    const { showTimeData, maLichChieu } = props;
    const { danhSachVeDangDat } = props;
    const renderChairTable = () => {
        if (showTimeData) {
            console.log(maLichChieu);
            // console.log("Show Data: ", showTimeData.danhSachGhe);
            return showTimeData.danhSachGhe.map(chair => {
                return <Ghe key={chair.maGhe} chair={chair} maLichChieu={maLichChieu}></Ghe>
            })
        }
    }
    const renderCurrentBookingTicket = () => {
        console.log("dsVeDD: ", danhSachVeDangDat);
        if (danhSachVeDangDat) {
            return danhSachVeDangDat.map(item => {
                return <TableRow>
                    <TableCell>{item.maGhe}</TableCell>
                    <TableCell>{item.giaVe}</TableCell>
                </TableRow>
            })
        }
    }
    const handleDatVe = () => {
        const user = JSON.parse(localStorage.getItem("User"))
        const { taiKhoan, accessToken } = user;
        console.log(accessToken);
        const thongTinDatVe = {
            maLichChieu: maLichChieu,
            danhSachVe: danhSachVeDangDat,
            taiKhoanNguoiDung: taiKhoan
        }
        // console.log("thongTinDatVe: ",thongTinDatVe);
        props.datVe(thongTinDatVe, accessToken, thongTinDatVe.maLichChieu);
        
    }
    return (
        <Grid container>
            <Grid item xs={8}>
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
                                <TableCell>Tổng tiền</TableCell>
                                <TableCell></TableCell>

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