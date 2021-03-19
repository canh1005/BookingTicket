import { Avatar, Grid, Paper, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { NavLink, TabPane } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function CinemaInfo(props) {
    const [state, setState] = useState();
    const { cinema } = props;
    // console.log("cinemaInfo: ", cinema.lstCumRap);
    const renderCinemaInfo = () => {
        if (cinema) {
            return cinema.lstCumRap.map(item => {
                return <Paper key={item.maCumRap}>
                    <Grid container>
                        <Grid item xs={6}>
                            <NavLink eventKey={item.maCumRap} onSelect={(key) => { setState(key) }}>
                                <Avatar src={item.logo}></Avatar>
                                <Typography>{item.tenCumRap}</Typography>
                                <Typography>{item.diaChi}</Typography>
                                <Button><Link to="#abc">Chi Tiết</Link></Button>
                            </NavLink>
                        </Grid>
                        <Grid item xs={6}>
                            {/* {console.log("", state)} */}
                            {state === item.maCumRap && renderShowtimeByCinema(item.danhSachPhim, item.maCumRap)}
                        </Grid>
                    </Grid>
                </Paper>
            })
        }
    }
    const renderShowtimeByCinema = (dsPhim, maCumRap) => {
        // console.log("aa0",dsPhim);
        if (dsPhim) {
            console.log("aaa: ", dsPhim);
            return dsPhim.map(item => {
                return <Paper key={item.maPhim}>
                    <TabPane eventKey={maCumRap}>
                        <Avatar src={item.hinhAnh}></Avatar>
                        <Typography>{item.tenPhim}</Typography>
                        <Paper>
                            {renderShowtimes(item.lstLichChieuTheoPhim)}
                        </Paper>
                    </TabPane>
                </Paper>
            })
        }
    }
    const renderShowtimes = (dsLichChieu) => {
        if(dsLichChieu){
            return dsLichChieu.map(item=>{
                let ngayChieugioChieu = item.ngayChieuGioChieu.split('T');
                return <Button key={item.maLichChieu}><Link to={`/boxoffice/${item.maLichChieu}`}>{new Date(ngayChieugioChieu).toLocaleTimeString()}</Link></Button>
            })
        }
    }
    return (
        <div>
            {renderCinemaInfo()}
        </div>
    )
}
