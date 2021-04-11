
import React from 'react'
import CarouselMovie from '../../../components/CarouselMovie'
import Showtimes from '../../../components/Showtimes'
import { body } from '../../../material-ui/style'

function HomePage() {
    const bodyStyle = body();
    return (
        <div className={bodyStyle.root}>
            <div className="container">
                <CarouselMovie />
                <Showtimes />
            </div>
        </div>
    )
}

export default (HomePage);
