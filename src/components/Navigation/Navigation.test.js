import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

it('renders without crashing with navsData passed as props', () => {
  const navsData = [
    { linkTo: '/profile', name: 'Profile' },
    { linkTo: '/logout', name: 'Logout' },
  ];

  shallow(<Navigation navsData={navsData} />);
});
