import * as ActionType from './constances'

let initialState = {
    data: null,
    err: null,
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.REGISTER_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.REGISTER_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case ActionType.REGISTER_FAILDED:
            state.data = null;
            state.err = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}