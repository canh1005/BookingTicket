import * as ActionType from './constances'

let initialState = {
    loading: false,
    data: null,
    err: null,
}

export const showTimeWithCinemaGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_SHOWTIMES_REQUEST:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.GET_SHOWTIMES_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case ActionType.GET_SHOWTIMES_FAILDED:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}