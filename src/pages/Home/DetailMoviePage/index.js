import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as CinemaAction from './../../../redux/modules/ListCinemaReducer/action'
import * as DetailMovieAction from './../../../redux/modules/DetailMovieReducer/action'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@material-ui/core'
import {Link} from 'react-router-dom'

function DetailMoviePage(props) {
    useEffect(() => {
        // console.log("show ID: ", props.match);

        // console.log("Data: ", props.cinemaData);
        let id = props.match.params.id;
        props.fetchDetailMovie(id);
        props.fetchListCinema();
        // console.log("Data: ", props.detailMovieData);
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [])
    const showDetailMovie = () => {
        const { detailMovieData } = props;
        if (detailMovieData) {
            return <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img className="img-fluid" src={detailMovieData.hinhAnh} alt=""></img>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Đánh giá: {detailMovieData.danhGia}/10 điểm</Typography>
                    <Typography>Mô Tả: {detailMovieData.moTa}</Typography>
                </Grid>
            </Grid>
        }
    }
    const renderTable = () => {
        const { detailMovieData } = props;
        if(detailMovieData){
            // console.log("AA:1", detailMovieData.heThongRapChieu);
            return detailMovieData.heThongRapChieu.map(item=>{
                // console.log("AA:2", item.cumRapChieu);
                return item.cumRapChieu.map(item=>{
                    return item.lichChieuPhim.map(item=>{
                        let ngayChieugioChieu = item.ngayChieuGioChieu.split('T');
                        return <TableRow key={item.maLichChieu}>
                            <TableCell>{item.tenRap}</TableCell>
                            <TableCell>{new Date(ngayChieugioChieu).toLocaleDateString()}</TableCell>
                            <TableCell>{new Date(ngayChieugioChieu).toLocaleTimeString()}</TableCell>
                            <TableCell>{item.thoiLuong} phút</TableCell>
                            <TableCell>{item.giaVe} VND</TableCell>
                            <TableCell><Button><Link to={`/boxoffice/${item.maLichChieu}`}>Mua vé</Link></Button></TableCell>
                        </TableRow>
                    })
                })
            })
        }
    }
    return (

        <div className="container">
            {showDetailMovie()}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tên rạp</TableCell>
                            <TableCell>Ngày chiếu</TableCell>
                            <TableCell>Giờ chiếu</TableCell>
                            <TableCell>Thời lượng Phim</TableCell>
                            <TableCell>Giá vé</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTable()}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cinemaData: state.listCinemaReducer.data,
        detailMovieData: state.detailMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListCinema: () => {
            dispatch(CinemaAction.actListCinemaAPI())
        },
        fetchDetailMovie: (id) => {
            dispatch(DetailMovieAction.actDetailMovieAPI(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
