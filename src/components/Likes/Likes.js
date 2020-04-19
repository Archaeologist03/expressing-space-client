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
    tvShows: [{ id: 1, name: 'Mr.Robot', director: 'Sam Esmail' }],
    artists: [{ id: 1, name: 'Salvador Dali' }],
    music: [
      { id: 1, name: 'Let it Happen', artist: 'Tame Impala' },
      { id: 2, name: 'Joey Badass' },
    ],
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
        <LikeContainer>
          <Like likeTitle='Tv-Shows' likeData={likesData.tvShows} />
        </LikeContainer>{' '}
        <LikeContainer>
          <Like likeTitle='Artists' likeData={likesData.artists} />
        </LikeContainer>{' '}
        <LikeContainer>
          <Like likeTitle='Music' likeData={likesData.music} />
        </LikeContainer>
      </LikesBox>
    </LikesContainer>
  );
};

export default Likes;
