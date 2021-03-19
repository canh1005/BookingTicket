import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}

export const listCinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_CINEMA_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.LIST_CINEMA_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.LIST_CINEMA_FAILED:
            state.data = null;
            state.err = action.payload;
            return {...state}
        default:
            return { ...state }
    }
}