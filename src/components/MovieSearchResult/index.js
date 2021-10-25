import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Movie from '../Movie';
import { body } from '../../material-ui/style'
import { actSearchMovieAPI } from '../../redux/modules/SearchMovieReducer/action';

function MovieSearchResult(props) {
    const bgBody = body();
    let keyword = props.match.params.keyword
    useEffect(() => {
        props.getMovieSearch(keyword)
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [])
    const renderMovieSearchResult = () => {
        const { searchRS, movieSearchKeyword } = props;
        console.log('aaaaa');
        if (searchRS && searchRS.length > 0 && !movieSearchKeyword) {
            return searchRS.map(movie => {
                return <Grid item xs={3} key={movie.maPhim}>
                    <Movie movie={movie} />
                </Grid>
            })
        } else if (movieSearchKeyword && movieSearchKeyword !== '') {
            return;
        }
    }
    return (
        <Grid container className={bgBody.root}>
            {renderMovieSearchResult()}
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        searchRS: state.searchMovieReducer.data,
        movieSearchKeyword: state.searchMovieReducer.keyword,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getMovieSearch: (keyword) => {
            dispatch(actSearchMovieAPI(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearchResult)