// =========== REACT IMPORTS ===============
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// =========== PAGES IMPORTS ===============
// import Landing from './pages/Landing/Landing';
import Profile from './pages/Profile/Profile';

// =========== COMPONENT IMPORTS ===========
import Logo from './components/Logo/Logo';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Logo />
        {/* <Landing /> */}
        <Profile />
      </div>
    </Router>
  );
};

export default App;
