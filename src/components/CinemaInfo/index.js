import { Avatar, Grid, Paper, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { NavLink, TabPane } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
import { cinemaStyle } from '../../material-ui/style'
export default function CinemaInfo(props) {
    const [state, setState] = useState();
    const { cinema } = props;
    const cinemaTable = cinemaStyle();
    // console.log("cinemaInfo: ", cinema.lstCumRap);
    const renderCinemaInfo = () => {
        if (cinema) {
            return cinema.lstCumRap.map(item => {
                return <TabPane className={cinemaTable.tabPane} key={item.maCumRap}>
                    <NavLink eventKey={item.maCumRap} onSelect={(key) => { setState(key) }}>
                        <Avatar src={item.logo}></Avatar>
                        <Typography className={cinemaTable.text}>{item.tenCumRap}</Typography>
                        <Typography className={cinemaTable.text}>{item.diaChi}</Typography>
                    </NavLink>
                </TabPane>
            })
        }
    }
    const renderShowTimeByCinema = () => {
        if (cinema) {
            return cinema.lstCumRap.map(item => {
                if (item.maCumRap === state) {
                    return item.danhSachPhim.map(dsPhim => {
                        return <TabPane eventKey={item.maCumRap} key={dsPhim.maPhim}>
                            <Avatar src={dsPhim.hinhAnh}></Avatar>
                            <Typography className={cinemaTable.text}>{dsPhim.tenPhim}</Typography>
                            <Grid container>
                                {renderShowtimes(dsPhim.lstLichChieuTheoPhim)}

                            </Grid>
                        </TabPane>
                    })
                }
            })
        }
    }
    const renderShowtimes = (dsLichChieu) => {
        if (dsLichChieu) {
            return dsLichChieu.map(item => {
                let ngayChieugioChieu = item.ngayChieuGioChieu.split('T');
                return <Grid item xs={2} className="my-2">
                    <Link className={cinemaTable.button} key={item.maLichChieu} to={localStorage.getItem("User") ? `/boxoffice/${item.maLichChieu}` : "/auth"} > {new Date(ngayChieugioChieu).toLocaleTimeString()}</ Link>
                </Grid>

            })
        }
    }
    return (
        <Grid container className={cinemaTable.root}>
            <Grid item xs={5} className={cinemaTable.cinemaInfo}><Paper>{renderCinemaInfo()}</Paper></Grid>
            <Grid item xs={7} className={cinemaTable.movieByCinema}><Paper>{renderShowTimeByCinema()}</Paper></Grid>
        </Grid>
    )
}
