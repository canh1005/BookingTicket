import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.LOGIN_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.LOGIN_FAILDED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        case ActionType.LOGIN_CLEAR_DATA:
            state.data = null;
            state.err = null;
            return { ...state };
        default:
            return { ...state };
    }
}