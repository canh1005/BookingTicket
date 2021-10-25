import * as ActionType from './constances'

let initialState = {
    dsVe: null,
    err: null,
    danhSachVeDangDat: []
}

export const bookingTicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.BOOKING_TICKET_REQUEST:
            state.dsVe = null;
            state.err = null;
            return { ...state }
        case ActionType.BOOKING_TICKET_SUCCESS:
            state.dsVe = action.payload;
            state.err = null;
            return { ...state }
        case ActionType.BOOKING_TICKET_FAILED:
            state.dsVe = null;
            state.err = action.payload;
            return { ...state }
        case ActionType.BOOKING_TICKET_CURRENT:
            let danhSachVeDangDatUpdate = [...state.danhSachVeDangDat];
            let index = danhSachVeDangDatUpdate.findIndex(gheDangDat => gheDangDat.maGhe === action.payload.maGhe);
            if (index !== -1) {
                danhSachVeDangDatUpdate.splice(index, 1)
            } else {
                let thongTinGhe = {
                    maGhe: action.payload.maGhe,
                    giaVe: action.payload.giaVe,
                    tenGhe: action.payload.tenGhe,
                    daDat: 'dangDat',
                }
                danhSachVeDangDatUpdate.push(thongTinGhe)
            }
            state.danhSachVeDangDat = danhSachVeDangDatUpdate;
            return { ...state }
        default:
            return { ...state }
    }
}