
import React, { Component } from 'react'
import CarouselMovie from '../../../components/CarouselMovie'
import Showtimes from '../../../components/Showtimes'

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <CarouselMovie/>
                <Showtimes/>
            </div>
        )
    }
}



export default (HomePage);
