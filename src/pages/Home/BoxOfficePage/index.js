import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import DanhSachGhe from '../../../components/DanhSachGhe';
import { actBoxOfficeAPI } from './../../../redux/modules/BoxOfficeReducer/action'

function BoxOfficePage(props) {
    const { showTimeData } = props;
    useEffect(() => {
        console.log("Show ID: ", props.match);
        let id = props.match.params.id;
        props.fecthTicket(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])
    // console.log("Show id: ",id);
    return (
        <div>
            <DanhSachGhe showTimeData={showTimeData} maLichChieu={props.match.params.id}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showTimeData: state.boxOfficeReducer.data,
        err: state.boxOfficeReducer.err,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fecthTicket: (id) => {
            dispatch(actBoxOfficeAPI(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxOfficePage);
