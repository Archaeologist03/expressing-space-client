import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

jest.mock('react-redux', () => {
  const ActualReactRedux = require.requireActual('react-redux');

  return {
    ...ActualReactRedux,
    useDispatch: jest.fn().mockImplementation(),
  };
});

it('renders without crashing with navsData passed as props', () => {
  const navsData = [
    { linkTo: '/profile', name: 'Profile' },
    { linkTo: '/logout', name: 'Logout' },
  ];

  shallow(<Navigation navsData={navsData} />);
});
