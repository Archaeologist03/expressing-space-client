import React from 'react';
import { shallow } from 'enzyme';
import PersonalInfo from './PersonalInfo';

it('renders without crashing', () => {
  shallow(<PersonalInfo />);
});
