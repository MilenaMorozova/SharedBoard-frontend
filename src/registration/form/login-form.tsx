import { EmptyObject } from '@reduxjs/toolkit';
import { ChangeEvent, Component, SyntheticEvent } from 'react';
import BoardButton from '../../button/button';
import { TEXT_BLUE } from '../../colors';
import FONTS from '../../fonts';
import BoardPasswordTextField from '../../text-fields/password-text-field';
import BoardTextField from '../../text-fields/text-field';

type LoginFormProps = EmptyObject
type LoginFormState = {
    username: string,
    password: string
}

const WIDTH = 510;

const LoginFormStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  padding: '15px 20px',
  gap: '20px',

  position: 'relative' as 'relative',
  width: WIDTH,

  background: 'white',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
  borderRadius: '6px',

  justifyContent: 'space-between',
};

const ForgotPasswordStyle = {
  position: 'relative' as 'relative',
  float: 'right' as 'right',
  color: TEXT_BLUE,
  ...FONTS.BODY,
};

class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={LoginFormStyle}>
          <BoardTextField label="Username" value={this.state.username} onChange={this.handleChangeUsername} />
          <BoardPasswordTextField label="Password" value={this.state.password} onChange={this.handleChangePassword} />
          <div style={{ width: '100%' }}>
            <a href="#1" style={ForgotPasswordStyle}>Forgot password?</a>
          </div>
          <BoardButton variant="contained" type="submit">LOGIN</BoardButton>
        </div>
      </form>
    );
  }
}

export default LoginForm;
