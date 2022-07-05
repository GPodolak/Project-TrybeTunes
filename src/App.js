import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import search from './pages/search';
import Login from './pages/Login';
import album from './pages/album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact login="/" component={ Login } />
          <Route exact path="/search" component={ search } />
          <Route exact path="/album" component={ album } />
          <Route exact path="/Favorites" component={ Favorites } />
          <Route exact path="/Profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="/NotFound" component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}
export default App;
