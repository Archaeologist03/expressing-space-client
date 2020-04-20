import React from 'react';
import { shallow } from 'enzyme';
import Field from './Field';

it('renders without crashing', () => {
  const fieldTitle = 'Self Summary';
  const fieldText = `Stuff about myself... I am currently reading this very profound book
  from one Russian author. One of characters name is Margarita, she
  became a witch..big times woah!`;

  shallow(<Field fieldTitle={fieldTitle} fieldText={fieldText} />);
});
