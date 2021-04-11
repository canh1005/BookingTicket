import * as ActionType from './constances'

let initialState = {
    data: null,
    err: null,
    keyword: '',
}

export const searchMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SEARCH_MOVIE_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.SEARCH_MOVIE_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.SEARCH_MOVIE_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        case ActionType.SEARCH_KEYWORD:
            state.keyword = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}