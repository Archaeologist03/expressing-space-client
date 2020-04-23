// =========== REACT IMPORTS ===============
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// =========== PAGES IMPORTS ===============
import Landing from './pages/Landing/Landing';
import Profile from './pages/Profile/Profile';
import Users from './pages/Users/Users';

// =========== COMPONENT IMPORTS ===========
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div className='App'>
      <Logo />
      <Navigation />

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </div>
  );
};

export default App;
