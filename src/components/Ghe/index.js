import { Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import { actBookingTicket } from '../../redux/modules/BookingTicketReducer/action'
import { Chair } from '../../material-ui/style'

function Ghe(props) {
    const [gheDangDat, setStateGheDangDat] = React.useState({ active: false })
    const { chair } = props;
    const chairStyle = Chair();
    const handleOnClick = () => {
        props.datGhe(chair);
        setStateGheDangDat(prevProps => {
            return { active: !prevProps.active };
        })
        console.log("A", gheDangDat);
    }
    let activeClass = (gheDangDat.active ? ' active' : '');
    const renderChair = () => {
        return <Button
            className={chair.daDat ? chairStyle.gheDaDat : chairStyle.gheChuaDat + activeClass}
            disabled={chair.daDat}
            onClick={handleOnClick}>{chair.tenGhe}
        </Button>
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
