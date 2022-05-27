import { Component } from 'react';
import { EmptyObject } from '@reduxjs/toolkit';
import LoginForm from './form/login/login-form';
import BaseSignPage from './base-sign-page';
import PageReference from './page-reference/page-reference';
import ROUTE from '../routers/routers';


type LoginPageProps = EmptyObject;

class LoginPage extends Component<LoginPageProps> {
  render() {
    return (
      <BaseSignPage
        signPageActionName="Login"
      >
        <LoginForm />
        <PageReference
          preamble="New in Share Board?"
          pageAction="Sign Up"
          href={ROUTE.SIGN_UP}
        />
      </BaseSignPage>
    );
  }
}

export default LoginPage;
