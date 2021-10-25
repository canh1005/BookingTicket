
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import BoxOfficePage from './pages/Home/BoxOfficePage';
// import DetailMoviePage from './pages/Home/DetailMoviePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
// import ProfilePage from './pages/ProfilePage';
import Admin from './pages/Admin';
import { routeAdmin, routeHome } from './routes';
import MovieSearchResult from './components/MovieSearchResult';
import HomeTemplate from './pages/Home';

class App extends Component {
  showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((items, index) => {
        return <Admin key={index} exact={items.exact} path={items.path} Component={items.component} />
      })
    }
  }
  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((items, index) => {
        return <HomeTemplate key={index} exact={items.exact} path={items.path} Component={items.component} />
      })
    }
  }
  render() {
    return (
      <Switch>
        {this.showLayoutHome(routeHome)}
        {/* <Route path="/detail/:id" component={DetailMoviePage} /> */}
        <Route path="/auth" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/boxoffice/:id" component={BoxOfficePage} />
        {/* <Route path="/profile" component={ProfilePage} /> */}
        <Route path="/search/:keyword" component={MovieSearchResult} />
        {this.showLayoutAdmin(routeAdmin)}
        <Route path="" component={PageNotFound} />
      </Switch>
    );
  }
}

export default App;
