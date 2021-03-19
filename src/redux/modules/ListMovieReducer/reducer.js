import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}

const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_MOVIE_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.LIST_MOVIE_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.LIST_MOVIE_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}

export default listMovieReducer;