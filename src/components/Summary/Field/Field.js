import React from 'react';

import { FieldContainer } from './field.styles';

const Field = ({ fieldTitle, fieldText }) => {
  return (
    <div>
      <FieldContainer>
        {/* If user click enter insert next row/new p tag to typed text */}
        {/* also turn into input if needed to open modal to update text */}
        <h5>{fieldTitle}</h5>
        <hr />
        <p>{fieldText}</p>
      </FieldContainer>
    </div>
  );
};

export default Field;
