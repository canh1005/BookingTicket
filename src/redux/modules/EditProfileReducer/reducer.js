import * as ActionType from './contances'

let initialState = {
    userEdit: null,
    err: null,
}

export const userEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.EDIT_PROFILE_REQUEST:
            state.userEdit = null;
            state.err = null;
            return { ...state };
        case ActionType.EDIT_PROFILE_SUCCESS:
            state.userEdit = action.payload;
            state.err = null;
            return { ...state };
        case ActionType.EDIT_PROFILE_FAILED:
            state.userEdit = null;
            state.err = action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}