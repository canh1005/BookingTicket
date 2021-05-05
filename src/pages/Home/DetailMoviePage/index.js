import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as DetailMovieAction from './../../../redux/modules/DetailMovieReducer/action'
import { Grid, Typography, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { detailMovieStyle } from '../../../material-ui/style'
import { Tab, TabPane, Tabs } from 'react-bootstrap'
import moment from 'moment'



function DetailMoviePage(props) {
    let prop = {};
    const { detailMovieData } = props;
    if (detailMovieData) {
        prop = { backgroundImage: detailMovieData.hinhAnh }
    }
    const detailMoviestyle = detailMovieStyle(prop);
    const [weekKey, setweekKey] = useState(moment().format('YYYY-MM-DD'));
    const [cinemaKey, setcinemaKey] = useState('BHDStar');
    useEffect(() => {
        let id = props.match.params.id;
        props.fetchDetailMovie(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [])
    const showDetailMovie = () => {
        if (detailMovieData) {
            return <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img className="img-fluid" src={detailMovieData.hinhAnh} alt=""></img>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Đánh giá: {detailMovieData.danhGia}/10 điểm</Typography>
                    <Typography>Mô Tả: {detailMovieData.moTa}</Typography>
                </Grid>
            </Grid>
        }
    }
    const renderWeek = () => {
        const currentDay = moment();
        let days = [];
        const startDay = currentDay.startOf('isoWeek');
        for (let i = 0; i <= 6; i++) {
            days.push(moment(startDay).add(i, 'days').format('YYYY-MM-DD'));
        }
        return days.map((day, index) => {
            index++;
            return <Tab eventKey={day} key={day}
                title={
                    <div key={index}>
                        <span>{index === 7 ? 'Chủ nhật' : `Thứ ${index + 1}`}</span>
                        <br />
                        <span>{moment(day).format('DD/MM')}</span>
                    </div>
                }>
            </Tab>
        })
    }
    const renderListCinema = () => {
        if (detailMovieData) {
            return detailMovieData.heThongRapChieu.map(item => {
                return <Tab key={item.maHeThongRap} eventKey={item.maHeThongRap} title={<Avatar src={item.logo}></Avatar>}></Tab>
            })
        }
    }
    const renderTabContent = () => {
        if (detailMovieData) {
            return detailMovieData.heThongRapChieu.map(item => {
                if (item.maHeThongRap === cinemaKey) {
                    return item.cumRapChieu.map(itemCumRap => {
                        const lichChieu = groupLichChieu(itemCumRap.lichChieuPhim, 'tenRap')
                        return <div key={itemCumRap.maCumRap} className={detailMoviestyle.tabContent}>
                            <Typography style={{
                                display: itemCumRap.lichChieuPhim.find(item =>
                                    moment(item.ngayChieuGioChieu.split('T')[0]).format('YYYY-MM-DD') === weekKey
                                ) ? 'block' : 'none'
                            }}>{itemCumRap.tenCumRap}</Typography>
                            {renderMovieShowTimes(lichChieu)}
                        </div>
                    })
                }
            })
        }
    }
    const groupLichChieu = (items, key) => {
        let listLichChieuOnDaySelected = [];
        items.map(item => {
            if (moment(item.ngayChieuGioChieu).format('YYYY-MM-DD') === weekKey) {
                return listLichChieuOnDaySelected.push(item)
            }
        })
        return listLichChieuOnDaySelected.reduce((item, lichChieuChiTiet) => {
            (item[lichChieuChiTiet[key]] = item[lichChieuChiTiet[key]] || []).push(lichChieuChiTiet);
            return item;
        }, {});
    }
    const renderMovieShowTimes = (lichChieu) => {
        if (!lichChieu) {
            return <></>
        }
        lichChieu = Object.entries(lichChieu);
        return lichChieu.map(item => {
            return (
                <>
                    <Typography>{item[0]}</Typography>
                    {
                        item[1].map(value => {
                            return <Grid>
                                <TabPane key={value.maRap}>
                                    <Link className={detailMoviestyle.button} to={localStorage.getItem("User") ? `/boxoffice/${item.maLichChieu}` : "/auth"}>{new Date(value.ngayChieuGioChieu).toLocaleTimeString()}</Link>
                                </TabPane>
                            </Grid>
                        })
                    }
                </>
            )
        })

    }
    return (
        <div className={detailMoviestyle.background}>
            <div className={detailMoviestyle.content}>
                {showDetailMovie()}
                <div className={detailMoviestyle.showTimes}>
                    <Tabs activeKey={weekKey} onSelect={k => setweekKey(k)} className={detailMoviestyle.week}>
                        {renderWeek()}
                    </Tabs>
                    <div className="row">
                        <div className='col-2'>
                            <Tabs activeKey={cinemaKey} onSelect={k => setcinemaKey(k)} className={detailMoviestyle.listCinema}>
                                {renderListCinema()}
                            </Tabs>
                        </div>
                        <div className='col-10'>
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        detailMovieData: state.detailMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailMovie: (id) => {
            dispatch(DetailMovieAction.actDetailMovieAPI(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
