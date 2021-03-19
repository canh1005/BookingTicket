import * as ActionType from "./contances"

let initialState = {
    data: null,
    err: null,
}

export const detailMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DETAIL_MOVIE_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.DETAIL_MOVIE_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.DETAIL_MOVIE_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state }
    }
}