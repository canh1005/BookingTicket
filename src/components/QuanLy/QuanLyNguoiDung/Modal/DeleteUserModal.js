import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as Action from "../../../../redux/modules/QuanLyNguoiDung/XoaNguoiDungReducer/action";

class DeleteUserModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="deleteUserModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                ...
        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         data: state.actDeleteUserReducer,
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        fetchlistUser: () => {
            dispatch(Action.actDeleteUserAPI())
        }
    }
}

export default connect(null, mapDispatchToProps)(DeleteUserModal);