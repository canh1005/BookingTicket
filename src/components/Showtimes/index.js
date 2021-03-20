import { Avatar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Tab, TabPane, Tabs } from 'react-bootstrap';
import { connect } from 'react-redux';
import CinemaInfo from '../CinemaInfo';
import { actListCinemaAPI } from './../../redux/modules/ListCinemaReducer/action'
import { actShowTimeByCinemaGroupIdAPI } from './../../redux/modules/ShowtimesWithCinemaGroup/action'
import {cinemaStyle} from './../../material-ui/style'

function Showtimes(props) {
  const [state, setstate] = useState("BDHStar")
  const cinemaStyled = cinemaStyle();
  useEffect(() => {
    props.fecthListCinema();
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [])
  const renderListCinema = () => {
    const { listCinema } = props;
    if (listCinema && listCinema.length > 0) {
      return listCinema.map(cinema => {
        // console.log(JSON.stringify(cinema.logo));
        return <Tab eventKey={cinema.maHeThongRap} key={cinema.maHeThongRap} title={<Avatar src={cinema.logo}></Avatar>}>
        </Tab>
      })
    }
  }
  const getCinemaInfo = (maHeThongRap, maNhom) => {
    props.fectchCinemaInfo(maHeThongRap, maNhom);
  }
  const renderCinemaInfo = () => {
    const { cinemaInfo } = props;
    // console.log("", cinemaInfo.lstCumRap);
    if (cinemaInfo) {
      console.log("", cinemaInfo);
      return cinemaInfo.map(cinemaInfo => {
        // return <CinemaInfo cinema={cinemaInfo}/>
        return <TabPane eventKey={cinemaInfo.maHeThongRap} key={cinemaInfo.maHeThongRap}>
          <CinemaInfo cinema={cinemaInfo}></CinemaInfo>
        </TabPane>
        // return <Avatar src={cinemaInfo.logo}></Avatar>
      })
    }
  }
  return (
    <div id='cumRap'>
      <Typography variant="h2" className={cinemaStyled.title}>Cụm Rạp</Typography>
      <Tabs className={cinemaStyled.tabs} defaultActiveKey={state} onSelect={k => { setstate(k); getCinemaInfo(k, "GP01") }}>
        {/* {console.log("", state)} */}
        {renderListCinema()}
        {renderCinemaInfo()}
      </Tabs>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listCinema: state.listCinemaReducer.data,
    cinemaInfo: state.showTimeWithCinemaGroupReducer.data,
  }
}
const mapStateToDispatch = dispatch => {
  return {
    fecthListCinema: () => {
      dispatch(actListCinemaAPI())
    },
    fectchCinemaInfo: (maHeThongRap, maNhom) => {
      dispatch(actShowTimeByCinemaGroupIdAPI(maHeThongRap, maNhom))
    }
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(Showtimes)
