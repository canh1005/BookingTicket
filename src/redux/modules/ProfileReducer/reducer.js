import * as ActionType from './contances'

let initialState = {
    data: null,
    err: null,
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_PROFILE_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.GET_PROFILE_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case ActionType.GET_PROFILE_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state }

        default:
            return {...state}
    }
}
