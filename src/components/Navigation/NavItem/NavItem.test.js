import React from 'react';
import { shallow } from 'enzyme';
import NavItem from './NavItem';

it('renders without crashing ', () => {
  shallow(<NavItem />);
});
