import React from 'react';

import Like from './Like/Like';

import {
  LikesContainer,
  LikesTitle,
  LikesBox,
  LikeContainer,
} from './likes.styles';

const Likes = () => {
  const likesData = {
    books: [
      { id: 1, name: 'Idiot', author: 'Fyodor Dostoyevsky' },
      { id: 2, name: '1984', author: 'George Orwell' },
      { id: 3, name: '1984', author: 'George Orwell' },
      { id: 4, name: '1984', author: 'George Orwell' },
      { id: 5, name: '1984', author: 'George Orwell' },
    ],
    movies: [{ id: 1, name: 'Fight Club', director: 'David Fincher' }],
  };

  return (
    <LikesContainer>
      <LikesTitle>Likes</LikesTitle>
      <LikesBox>
        {/* Either map or list manually(because has different fields..or go with just name/title)*/}
        <LikeContainer>
          <Like likeTitle='Books' likeData={likesData.books} />
        </LikeContainer>
        <LikeContainer>
          <Like likeTitle='Movies' likeData={likesData.movies} />
        </LikeContainer>
      </LikesBox>
    </LikesContainer>
  );
};

export default Likes;
