import { Table, TableBody, TableContainer, TableHead } from '@material-ui/core'
import React from 'react'
import Ghe from '../Ghe';

function DanhSachGhe(props) {
    const { showTimeData } = props;

    const renderChairTable = () => {
        if (showTimeData) {
            console.log("Show Data: ", showTimeData.danhSachGhe);
            return showTimeData.danhSachGhe.map(chair => {
                return <Ghe key={chair.maGhe} chair={chair}></Ghe>
            })
        }
    }
    return (
        <TableContainer>
            <Table>
                <TableHead>

                </TableHead>
                <TableBody>
                    {renderChairTable()}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default (DanhSachGhe);