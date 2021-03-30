import React from 'react'
import { Route } from 'react-router'
import "../../components/DashboardAdmin/Dashboard"
import QuanLy from '../../components/QuanLy/QuanLy'
export default function Admin({ Component, ...props }) {
    return (
        <div>
            {console.log("props",props)}
            <Route
                {...props}
                render={(propsComponent) => (<QuanLy>
                    <Component {...propsComponent} />
                    {console.log("propsComponent", propsComponent)}
                </QuanLy>)}
            />
        </div>
    )
}

