import * as ActionType from "./constances";

let initialState = {
    data: null,
    err: null,
    userEdit: null,
}

export const editUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.EDIT_USER_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state };
        case ActionType.EDIT_USER_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.EDIT_USER_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state };
        case ActionType.GET_USER_EDIT:
            state.userEdit = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}