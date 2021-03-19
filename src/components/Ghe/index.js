import { Button } from '@material-ui/core'
import React from 'react'

export default function Ghe(props) {
    const { chair } = props
    const renderChair = () => {
        if (chair.daDat) {
            return <Button color='primary'>{chair.tenGhe}</Button>}
        }
        return (
            <span>
                {renderChair()}
            </span>
            // <Button>{chair.tenGhe}</Button>
        )
    }
