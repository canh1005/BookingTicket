import NavBarHome from '../../components/NavBarHome'
import React from 'react'
import { Route } from 'react-router'
// import Footer from '../../components/Footer'

function Home(props) {
    return (
        <div>
            <NavBarHome />
            {props.children}
        </div>
    )

}

function HomeTemplate({ Component, ...props }) {
    return (
        <Route {...props}
            render={(propsComponents) => (
                <Home>
                    <Component {...propsComponents} />
                </Home>
            )}
        />
    )
}

export default HomeTemplate;