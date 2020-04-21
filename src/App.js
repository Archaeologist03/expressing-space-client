// =========== REACT IMPORTS ===============
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// =========== PAGES IMPORTS ===============
// import Landing from './pages/Landing/Landing';
// import Profile from './pages/Profile/Profile';
import Users from './pages/Users/Users';

// =========== COMPONENT IMPORTS ===========
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Logo />
        <Navigation />
        {/* <Landing /> */}
        {/* <Profile /> */}
        <Users />
      </div>
    </Router>
  );
};

export default App;
