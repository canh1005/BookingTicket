import React, { Component } from 'react'
import { actSearchUserAPI } from "../../../redux/modules/QuanLyNguoiDung/TimKiemNguoiDungReducer/action"
import { connect } from "react-redux";

class SearchBar extends Component {
    render() {
        console.log('aa',this.props);
        return (
            <div className=''>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { this.props.search(this.props.manhom,e.target.value) }} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        search: (maNhom,keyword) => {
            dispatch(actSearchUserAPI(maNhom,keyword))
        }
    }
}
export default connect(null, mapDispatchToProps)(SearchBar)
