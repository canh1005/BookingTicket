import React, { PureComponent } from 'react'
import img404 from '../../assets/404.jpg';

export default class PageNotFound extends PureComponent {
    render() {
        return (
            <div className="text-center" style={{backgroundImage:`url(${img404})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'100vh',position:'relative'}}>
                {/* <img src={img404}/> */}
                <h1 style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>PageNotFound</h1>
            </div>
        )
    }
}
