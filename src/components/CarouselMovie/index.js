import Slider from 'react-slick'
import React from 'react'
import { connect } from 'react-redux'
import * as Action from './../../redux/modules/ListMovieReducer/action'
import { useEffect } from 'react'
import Movie from '../Movie'

// import Carousel from 'react-bootstrap/Carousel'


function CarouselMovie(props) {
    useEffect(() => {
        // console.log("a");
        props.fetchListMovie();
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
        <Slider slidesToShow={3} slidesToScroll={1}>
            {renderListMovie()}
        </Slider>
    )


}

const mapStateToProps = (state) => {
    return {
        data: state.listMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: () => {
            dispatch(Action.actListMovieApi())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselMovie)
