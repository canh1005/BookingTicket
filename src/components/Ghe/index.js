import { Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import { actBookingTicket } from '../../redux/modules/BookingTicketReducer/action'

function Ghe(props) {
    const { chair } = props;
    const handleOnClick = () => {
        props.datGhe(chair);
    }
    const renderChair = () => {
        return <Button style={{ color: chair.daDat ? "red" : "blue" }} onClick={handleOnClick}>{chair.tenGhe}</Button>
    }
    return (
        <span>
            {renderChair()}
        </span>
    )
}
const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.bookingTicketReducer.danhSachVeDangDat,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datGhe: (ghe) => {
            dispatch(actBookingTicket(ghe))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ghe)
