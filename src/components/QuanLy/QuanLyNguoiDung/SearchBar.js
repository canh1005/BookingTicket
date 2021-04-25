import React, { Component } from 'react'
import {actSearchUserAPI} from "../../../redux/modules/QuanLyNguoiDung/TimKiemNguoiDungReducer/action"
import { connect } from "react-redux";

class SearchBar extends Component {
    render() {
        return (
            <div className='d-flex justify-content-end'>
                <nav className=" navbar-light bg-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{this.props.search(e.target.value)}} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        search: (keyword) => {
            dispatch(actSearchUserAPI(keyword))
        }
    }
}
export default connect(null,mapDispatchToProps)(SearchBar)
