import React from 'react';
import { shallow } from 'enzyme';
import Auth from './Auth';

it('renders without crashing', () => {
  shallow(<Auth />);
});
