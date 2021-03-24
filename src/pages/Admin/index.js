import React from 'react'
import { Route } from 'react-router'
import "../../components/DashboardAdmin/Dashboard"
import QuanLy from '../../components/QuanLy/QuanLy'
export default function Admin({ Component, ...props }) {
    return (
        <div>
            <Route
                {...props}
                render={(propsComponent) => (<QuanLy>
                    <Component {...propsComponent} />
                </QuanLy>)}
            />
        </div>
    )
}

