// import React from 'react'
// import { Route } from 'react-router-dom'
import NavBarHome from '../../components/NavBarHome'

// function LayoutHome(props) {
//     return (
//         <div>
//             <Header />
//             {props.children}
//         </div>
//     )
// }

// export default function Home({ Component, ...props }) {
//     // const { exact, path, Component } = props;
//     return (
//         <Route
//             {...props}
//             render={(propsComponent) => (<LayoutHome>
//                 <Component {...propsComponent} />
//             </LayoutHome>)}
//         />
//     )
// }

import React, { Component } from 'react'
import HomePage from './HomePage'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBarHome/>
                <HomePage/>
            </div>
        )
    }
}
