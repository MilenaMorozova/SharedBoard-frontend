import { Component } from 'react';
import { EmptyObject } from '@reduxjs/toolkit';
import LoginForm from './form/login-form';
import BaseSignPage from './base-sign-page';


type LoginPageProps = EmptyObject;

class LoginPage extends Component<LoginPageProps> {
  render() {
    return (
      <BaseSignPage
        signPageActionName="Login"
        question="New in Share Board?"
        referenceToAnotherActionName="Sign Up"
      >
        <LoginForm />
      </BaseSignPage>
    );
  }
}

export default LoginPage;
