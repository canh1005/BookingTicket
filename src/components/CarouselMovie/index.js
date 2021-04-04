import Slider from 'react-slick'
import React from 'react'
import { connect } from 'react-redux'
import * as Action from './../../redux/modules/ListMovieReducer/action'
import { useEffect } from 'react'
import Movie from '../Movie'
import { Typography } from '@material-ui/core'
import { listMovieStyle } from './../../material-ui/style'

// import Carousel from 'react-bootstrap/Carousel'


function CarouselMovie(props) {
    const ListMovieStyle = listMovieStyle()
    const maNhom = "GP01"
    useEffect(() => {
        props.fetchListMovie(maNhom);
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [])

    const renderListMovie = () => {
        // console.log("b");
        const { data } = props;
        console.log("movieData: ", data);
        if (data && data.length > 0) {
            return data.map(movie => {
                // console.log("c");
                // return <Movie movie={movie} key={movie.maPhim} />
                return <div key={movie.maPhim}>
                    <Movie movie={movie} />
                </div>
            })
        }
    }
    return (
        <div id="dsPhim">
            <Typography variant="h2" className={ListMovieStyle.title}>Danh sách phim</Typography>
            <Slider slidesToShow={3} slidesToScroll={1} rows={2} centerMode={true} infinite={true} className="center">
                {renderListMovie()}
            </Slider>
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
