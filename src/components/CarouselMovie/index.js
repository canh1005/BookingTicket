import Slider from 'react-slick'
import React from 'react'
import { connect } from 'react-redux'
import * as Action from './../../redux/modules/ListMovieReducer/action'
import { useEffect } from 'react'
import Movie from '../Movie'
import { Typography } from '@material-ui/core'
import { listMovieStyle } from './../../material-ui/style'
import moment from 'moment'
import { Tab, Tabs } from 'react-bootstrap'


function CarouselMovie(props) {
    const ListMovieStyle = listMovieStyle()
    const maNhom = "GP01"
    let phimSapChieu = [];
    let phimDangChieu = [];
    useEffect(() => {
        props.fetchListMovie(maNhom);
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [])

    const renderListMovie = () => {
        const { data } = props;
        if (data && data.length > 0) {
            let startDay = moment().format('YYYY-MM-DD');
            let endDay = moment().add(1, 'months').format('YYYY-MM-DD');
            data.map(movie => {
                if (moment(moment(movie.ngayKhoiChieu).format('YYYY-MM-DD')).isBetween(startDay, endDay)) {
                    return phimDangChieu.push(movie);
                } else if (moment(movie.ngayKhoiChieu).format('YYYY-MM-DD') > endDay) {
                    return phimSapChieu.push(movie);
                } else {
                    return 0;
                }
            })
        }
    }
    const renderCurrentMovie = () => {
        return phimDangChieu.map(movie => {
            return <div key={movie.maPhim}>
                <Movie movie={movie} />
            </div>
        })
    }
    const renderUpcomingMovie = () => {
        return phimSapChieu.map(movie => {
            return <div key={movie.maPhim}>
                <Movie movie={movie} />
            </div>
        })
    }
    return (
        <div id="dsPhim" className={ListMovieStyle.root}>
            {renderListMovie()}
            <Typography variant="h2" className={ListMovieStyle.title}>Danh sách phim</Typography>
            <Tabs defaultActiveKey="phimDangChieu" className={ListMovieStyle.navMovie}>
                <Tab eventKey="phimDangChieu" title="Phim đang chiếu">
                    <Slider slidesToShow={3} slidesToScroll={1} rows={phimDangChieu.length > 6 ? 2 : 1} centerMode={true} infinite={true} className="center">
                        {renderCurrentMovie()}
                    </Slider>
                </Tab>
                <Tab eventKey="phimSapChieu" title="Phim sắp chiếu">
                    <Slider slidesToShow={3} slidesToScroll={1} rows={phimSapChieu.length > 6 ? 2 : 1} centerMode={true} infinite={true} className="center">
                        {renderUpcomingMovie()}
                    </Slider>
                </Tab>
            </Tabs>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        data: state.listMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: (maNhom) => {
            dispatch(Action.actListMovieApi(maNhom))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselMovie)
