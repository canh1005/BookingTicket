import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}

export const addFilmReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ActionType.ADD_FILM_REQUEST:
            state.data = null;
            state.err = null;
            return {...state};
        case ActionType.ADD_FILM_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return {...state};
        case ActionType.ADD_FILM_FAILED:
            state.data = null;
            state.err = action.payload;
            return {...state};
        default:
            return {...state};
    }
}