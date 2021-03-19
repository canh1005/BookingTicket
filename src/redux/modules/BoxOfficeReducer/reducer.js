import * as ActionType from "./constances"

let initialState = {
    data: null,
    err: null,
}

export const boxOfficeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.BOX_OFFICE_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state }
        case ActionType.BOX_OFFICE_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case ActionType.BOX_OFFICE_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}