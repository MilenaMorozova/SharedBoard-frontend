import { Component } from 'react';
import { EmptyObject } from '@reduxjs/toolkit';
import SignUpForm from './form/sign-up-form';
import BaseSignPage from './base-sign-page';


type SignUpPageProps = EmptyObject;

class SignUpPage extends Component<SignUpPageProps> {
  render() {
    return (
      <BaseSignPage
        signPageActionName="Sign Up"
        question="Already have an account?"
        referenceToAnotherActionName="Login"
      >
        <SignUpForm />
      </BaseSignPage>
    );
  }
}

export default SignUpPage;
