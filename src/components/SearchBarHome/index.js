import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import { FormControl, List, ListItemText, TextField } from '@material-ui/core';
import { navBar } from '../../material-ui/style';
import { connect } from 'react-redux';
import { actSearchMovieAPI, actSearchKeyword } from '../../redux/modules/SearchMovieReducer/action'
import { Nav } from '../../styled/styled'
import { withRouter } from 'react-router';

function SearchBarHome(props) {
    const searchStyle = navBar();
    const renderSearchResult = () => {
        const { searchResult } = props;
        if (keyword && keyword !== '' && searchResult && searchResult.length > 0) {
            return searchResult.map(item => {
                return <ListItemText className="row" key={item.maPhim}>
                    <img src={item.hinhAnh} width="30px" alt="" className="col-3 p-0" />
                    <Nav className="col-9" to={`/detail/${item.maPhim}`}>{item.tenPhim}</Nav>
                </ListItemText>
            })
        } else if (keyword !== '' && keyword) {
            return <ListItemText>Không tìm thấy phim!</ListItemText>
        }
    }
    const handleSearch = (e) => {
        props.searchMovie(e.target.value);
        props.getKeyword(e.target.value);
    }
    const handleSubmit = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            props.history.push(`/search/${keyword}`)
            props.getKeyword('');
        }
    }
    const { keyword } = props;
    return (
        <FormControl className={searchStyle.search}>
            <Nav to={`/search/${keyword}`}><SearchIcon /></Nav>
            <TextField placeholder="Tìm kiếm" onChange={handleSearch} onKeyPress={handleSubmit}></TextField>
            {keyword && keyword !== '' && <List className={searchStyle.searchResult}>{renderSearchResult()}</List>}
        </FormControl>
    )
}

const mapStateToProps = state => {
    return {
        searchResult: state.searchMovieReducer.data,
        keyword: state.searchMovieReducer.keyword,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchMovie: (keyword) => {
            dispatch(actSearchMovieAPI(keyword))
        },
        getKeyword: (keyword) => {
            dispatch(actSearchKeyword(keyword))
        }
    }
}

const completeSearchBarHome = connect(mapStateToProps, mapDispatchToProps)(SearchBarHome)


export default withRouter(completeSearchBarHome)

