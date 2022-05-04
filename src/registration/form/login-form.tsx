import { EmptyObject } from '@reduxjs/toolkit';
import { ChangeEvent, Component, SyntheticEvent } from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import BoardButton from '../../custom-mui-components/button/button';
import BoardPasswordTextField from '../../custom-mui-components/text-fields/password-text-field';
import BoardTextField from '../../custom-mui-components/text-fields/text-field';
import {
  ForgotPasswordStyle, FullWidthStyle, LoginErrorBlockStyle, SignFormStyle,
} from './style';
import { useAppSelector } from '../../store/hooks';


function ErrorBlock() {
  const errorText = useAppSelector(state => state.login.errorText);

  return (
    <div style={LoginErrorBlockStyle}>
      <ErrorOutlineOutlinedIcon />
      {errorText}
    </div>
  );
}

type LoginFormProps = EmptyObject
type LoginFormState = {
    username: string,
    password: string,
}

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
    const errorText = useAppSelector(state => state.login.errorText);

    return (
      <form onSubmit={this.handleSubmit}>
        <div style={SignFormStyle}>
          { (errorText === null) ? null : <ErrorBlock /> }
          <BoardTextField label="Username" value={this.state.username} onChange={this.handleChangeUsername} />
          <BoardPasswordTextField label="Password" value={this.state.password} onChange={this.handleChangePassword} />
          <div style={FullWidthStyle}>
            <a href="#1" style={ForgotPasswordStyle}>Forgot password?</a>
          </div>
          <BoardButton variant="contained" type="submit">LOGIN</BoardButton>
        </div>
      </form>
    );
  }
}

export default LoginForm;
