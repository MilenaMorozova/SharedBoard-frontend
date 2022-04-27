import { Component } from 'react';
import { EmptyObject } from '@reduxjs/toolkit';
import { BACKGOUND_LIGHT_BLUE, TEXT_BLUE, TEXT_DARK_BLUE } from '../colors';
import LoginForm from './form/login-form';
import { ReactComponent as Logo } from '../media/Logo.svg';
import FONTS from '../fonts';

type SignInPageProps = EmptyObject

const FlexColumnCenterStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
};

const SignInPageStyle = {
  backgroundColor: BACKGOUND_LIGHT_BLUE,
  height: '100vh',
  ...FlexColumnCenterStyle,
};

const LogoTextStyle = {
  color: TEXT_DARK_BLUE,
  ...FONTS.H1,
};

const LogoBlockStyle = {
  ...FlexColumnCenterStyle,
  gap: '15px',
  marginTop: '50px',
  marginBottom: '60px',

  ...LogoTextStyle,
};

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
