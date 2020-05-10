import React from 'react';
import { shallow } from 'enzyme';
import FormInput from './FormInput';

it('renders without crashing', () => {
  shallow(<FormInput />);
});
