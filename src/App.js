// =========== REACT IMPORTS ===============
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// =========== COMPONENT IMPORTS ===========
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

// =========== PAGES IMPORTS ===============
const LandingPage = lazy(() => import('./pages/Landing/Landing'));
const ProfilePage = lazy(() => import('./pages/Profile/Profile'));
const UsersPage = lazy(() => import('./pages/Users/Users'));

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />

        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/users' component={UsersPage} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
