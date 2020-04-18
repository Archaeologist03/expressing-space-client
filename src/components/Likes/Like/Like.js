import React from 'react';
import { LikeContainer } from './like.styles';
import { LikeTitle, LikeList, LikeItem } from './like.styles';

const Like = ({ likeTitle, likeData }) => {
  console.log(likeTitle, likeData, 2323);

  return (
    <LikeContainer>
      <LikeTitle>{likeTitle}:</LikeTitle>
      <LikeList>
        {likeData.map((like, i, arr) => {
          let likeName = arr[i + 1] ? `${like.name},` : like.name;

          return <LikeItem key={like.id}>{likeName}</LikeItem>;
        })}
      </LikeList>
    </LikeContainer>
  );
};

export default Like;
