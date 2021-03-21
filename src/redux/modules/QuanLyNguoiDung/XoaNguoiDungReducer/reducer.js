import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}
export const deleteUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DELETE_USER_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.DELETE_USER_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.DELETE_USER_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}