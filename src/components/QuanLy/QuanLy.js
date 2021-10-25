import React, { useState } from 'react';
import Dashboard from '../DashboardAdmin/Dashboard';
import NavbarTop from './NavbarTop/NavbarTop';

import "./QuanLy.css";
export default function QuanLy(props) {
    const [state, setState] = useState(false);
    const HoverHandler = () => {
        if (!state) {
            setState(true);
        }else{
            setState(false);
        }
    }
    const childrenWithProps = React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { handleHover: HoverHandler });
        }
        return child;
    });

    return (
        <div>
            {/* <NavbarTop/> */}
            <div className="row">
                <div className="dashboard col" style={{ width: state ? "80px" : "250px" }}>
                    <Dashboard handleHover={HoverHandler} state={state}/>
                </div>

                <div className="content mr-2 col" id="">
                    {childrenWithProps}
                </div>
            </div>
        </div>

    )
}
