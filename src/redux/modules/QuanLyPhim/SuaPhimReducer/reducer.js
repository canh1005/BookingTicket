import * as ActionType from './constances'

let initialState = {
    data: null,
    err: null,
}

export const suaPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SUA_PHIM_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.SUA_PHIM_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case ActionType.SUA_PHIM_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state }
        default:
            return {...state}
    }
}