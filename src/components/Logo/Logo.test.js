import React from 'react';
import { shallow } from 'enzyme';

import Logo from './Logo';
import logoImg from '../../assets/images/galaxy-logo.svg';

describe('<Logo />', () => {
  it('renders without crashing', () => {
    shallow(<Logo />);
  });

  it('renders an image', () => {
    const logo = shallow(<Logo />);

    expect(logo.find('img').prop('src')).toEqual(logoImg);
  });
});
