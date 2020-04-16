import React from 'react';
import { shallow } from 'enzyme';
import Likes from './Likes';

it('renders without crashing', () => {
  shallow(<Likes />);
});
