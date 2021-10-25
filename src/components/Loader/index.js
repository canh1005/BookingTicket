import React from 'react'
import loading from '../../assets/loading.gif'

function Loader() {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={loading} alt=""/>
        </div>
    )
}
export default Loader
