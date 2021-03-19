import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as CinemaAction from './../../../redux/modules/ListCinemaReducer/action'
import * as DetailMovieAction from './../../../redux/modules/DetailMovieReducer/action'
import { Grid, Typography } from '@material-ui/core'

function DetailMoviePage(props) {
    useEffect(() => {
        console.log("show ID: ", props.match);

        console.log("Data: ", props.cinemaData);
        let id = props.match.params.id;
        props.fetchDetailMovie(id);
        props.fetchListCinema();
        console.log("Data: ", props.detailMovieData);
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
                    <Typography>Đánh giá: {detailMovieData.danhGia}</Typography>
                    <Typography>Mô Tả: {detailMovieData.moTa}</Typography>
                </Grid>
            </Grid>
        }
    }

    return (
        
        <div>
            {showDetailMovie()}
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
