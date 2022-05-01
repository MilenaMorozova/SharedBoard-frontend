import { Component } from 'react';
import { EmptyObject } from '@reduxjs/toolkit';
import { TEXT_BLUE } from '../colors';
import LoginForm from './form/login-form';
import { ReactComponent as Logo } from '../media/Logo.svg';
import FONTS from '../fonts';
import { LogoBlockStyle, SignInPageStyle } from './style';


type SignInPageProps = EmptyObject

class SignInPage extends Component<SignInPageProps> {
  render() {
    return (
      <div style={SignInPageStyle}>
        <div style={LogoBlockStyle}>
          <Logo />
          <div>Login Share Board</div>
        </div>
        <LoginForm />
        <div style={{ ...FONTS.BODY, marginTop: '20px' }}>
          New in Share Board?
          {' '}
          <a href="#1" style={{ color: TEXT_BLUE }}>Sign Up</a>
        </div>
      </div>
    );
  }
}

export default SignInPage;
