import React from 'react';
import PropTypes from 'prop-types';

import { LikeContainer } from './like.styles';
import { LikeTitle, LikeList, LikeItem } from './like.styles';

const Like = ({ likeTitle, likeData }) => {
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

Like.propTypes = {
  likeTitle: PropTypes.string.isRequired,
  likeData: PropTypes.array,
};

export default Like;
