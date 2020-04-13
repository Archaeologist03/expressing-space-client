// =========== REACT IMPORTS ===============
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// =========== STYLES IMPORTS ==============
import './App.module.scss';

// =========== PAGES IMPORTS ===============
import Landing from './pages/Landing/Landing';

// =========== COMPONENT IMPORTS ===========
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Logo />
        <Navigation />
        <Landing />
      </div>
    </Router>
  );
};

export default App;
