import { Component } from 'react';
import { EmptyObject } from '@reduxjs/toolkit';
import SignUpForm from './form/signUp/sign-up-form';
import BaseSignPage from './base-sign-page';
import PageReference from './page-reference/page-reference';
import ROUTE from '../routers/routers';


type SignUpPageProps = EmptyObject;

class SignUpPage extends Component<SignUpPageProps> {
  render() {
    return (
      <BaseSignPage
        signPageActionName="Sign Up"
      >
        <SignUpForm />
        <PageReference 
          preamble="Already have an account?" 
          pageAction="Login" 
          href={ROUTE.LOGIN} 
        />
      </BaseSignPage>
    );
  }
}

export default SignUpPage;
