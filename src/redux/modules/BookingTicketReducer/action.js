import * as ActionType from './constances'
import api from '../../../services/api'
import { setHeader } from '../../../utils/setHeaders'
import { actBoxOfficeAPI } from '../BoxOfficeReducer/action'

export const actBookingTicketAPI = (dsVe, accessToken, maLichChieu) => {
    return dispatch => {
        dispatch(actBookingTicketRequest());
        api.post("/QuanLyDatVe/DatVe", dsVe, setHeader(accessToken))
            .then(rs => {
                dispatch(actBookingTicketSuccess(rs.data))
                dispatch(actBoxOfficeAPI(maLichChieu))
                alert("Đặt vé thành công!")
            })
            .catch(err => {
                dispatch(actBookingTicketFailed(err))
            })
    }
}

const actBookingTicketRequest = () => {
    return {
        type: ActionType.BOOKING_TICKET_REQUEST,
    }
}
const actBookingTicketSuccess = (dsVe) => {
    return {
        type: ActionType.BOOKING_TICKET_SUCCESS,
        payload: dsVe,
    }
}
const actBookingTicketFailed = (err) => {
    return {
        type: ActionType.BOOKING_TICKET_FAILED,
        payload: err
    }
}

export const actBookingTicket = (maGhe) => {
    return {
        type: ActionType.BOOKING_TICKET_CURRENT,
        payload: maGhe
    }
}