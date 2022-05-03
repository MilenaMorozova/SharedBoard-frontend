import { EmptyObject } from '@reduxjs/toolkit';
import { ChangeEvent, Component, SyntheticEvent } from 'react';
import BoardButton from '../../custom-mui-components/button/button';
import BoardPasswordTextField from '../../custom-mui-components/text-fields/password-text-field';
import BoardTextField from '../../custom-mui-components/text-fields/text-field';
import { SignFormStyle } from './style';


type SignUpFormProps = EmptyObject
type SignUpFormState = {
    username: string,
    email: string,
    password: string
}

class SignUpForm extends Component<SignUpFormProps, SignUpFormState> {
  constructor(props: SignUpFormProps) {
    super(props);
    this.state = { username: '', password: '', email: '' };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ password: event.target.value });
  }

  handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={SignFormStyle}>
          <BoardTextField label="Username" value={this.state.username} onChange={this.handleChangeUsername} />
          <BoardPasswordTextField label="Password" value={this.state.password} onChange={this.handleChangePassword} />
          <BoardTextField label="Email" type="email" value={this.state.email} onChange={this.handleChangeEmail} />
          <BoardButton variant="contained" type="submit">Sign Up</BoardButton>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
