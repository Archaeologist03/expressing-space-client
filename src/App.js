// =========== REACT IMPORTS ===============
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// =========== PAGES IMPORTS ===============
import Landing from './pages/Landing/Landing';
// import Profile from './pages/Profile/Profile';
import Users from './pages/Users/Users';

// =========== COMPONENT IMPORTS ===========
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  const isAuth = true; // should come from redux

  return (
    <Router>
      <div className='App'>
        <Logo />
        <Navigation />
        {!isAuth ? <Landing /> : <Users />}

        {/* <Profile /> */}
      </div>
    </Router>
  );
};

export default App;
