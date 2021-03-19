
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import NavBarHome from './components/NavBarHome';
import Home from './pages/Home';
import BoxOfficePage from './pages/Home/BoxOfficePage';
import DetailMoviePage from './pages/Home/DetailMoviePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
// import {routeHome} from './routes'

class App extends Component {
  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((items, index) => {
        return <Home key={index} exact={items.exact} path={items.path} Component={items.component} />

      })
    }
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={DetailMoviePage}/>
        <Route path="/auth" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/boxoffice/:id" component={BoxOfficePage}/>
        <Route path="/profile" component={ProfilePage}/>
        {/* {this.showLayoutHome(routeHome)} */}
        <Route path="" component={PageNotFound} />
      </Switch>
    );
  }
}

export default App;
