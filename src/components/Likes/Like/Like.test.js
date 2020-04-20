import React from 'react';
import { shallow } from 'enzyme';
import Like from './Like';

it('renders without crashing', () => {
  const likeTitle = 'Books';
  const likeData = [
    { id: 1, name: 'Idiot', author: 'Fyodor Dostoyevsky' },
    { id: 2, name: '1984', author: 'George Orwell' },
    { id: 3, name: '1984', author: 'George Orwell' },
    { id: 4, name: '1984', author: 'George Orwell' },
    { id: 5, name: '1984', author: 'George Orwell' },
  ];

  shallow(<Like likeData={likeData} likeTitle={likeTitle}></Like>);
});
