import React from 'react';

import FormInput from '../FormInput/FormInput';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './signIn.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput
          name='email'
          type='email'
          // // handleChange={handleChange}
          // value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          // value={password}
          // // handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsBarContainer>
          {/* <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn>
            Sign in with Google
          </CustomButton> */}
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
