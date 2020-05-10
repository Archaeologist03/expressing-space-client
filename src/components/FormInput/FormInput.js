import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './formInput.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer />
    {label ? <FormInputLabel>{'bababa'}</FormInputLabel> : null}
  </GroupContainer>
);

export default FormInput;
