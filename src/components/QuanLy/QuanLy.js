import React from 'react';
import Dashboard from '../DashboardAdmin/Dashboard';
export default function QuanLy(props) {
        return (
            <div>
                <Dashboard/>
                {props.children}
            </div>
        )
}
