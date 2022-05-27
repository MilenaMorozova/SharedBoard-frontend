import { ChangeEvent, SyntheticEvent, useState } from 'react';
import BoardButton from '../../../custom-mui-components/button/button';
import BoardPasswordTextField from '../../../custom-mui-components/text-fields/password-text-field';
import BoardTextField from '../../../custom-mui-components/text-fields/text-field';
import { useAppSelector } from '../../../store/hooks';
import { SignFormStyle } from '../style';


function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const usernameErrorText = useAppSelector(state => state.signUp.usernameErrorText);
  const passwordErrorText = useAppSelector(state => state.signUp.passwordErrorText);
  const emailErrorText = useAppSelector(state => state.signUp.emailErrorText);

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form id="SignUp_form" onSubmit={handleSubmit}>
      <div style={SignFormStyle}>
        <BoardTextField
          id="SignUpPage_BoardTextField_username"
          label="Username"
          value={username}
          onChange={handleChangeUsername}
          errorText={usernameErrorText}
        />
        <BoardPasswordTextField
          id="SignUpPage_BoardTextField_password"
          label="Password"
          value={password}
          onChange={handleChangePassword}
          errorText={passwordErrorText}
        />
        <BoardTextField
          id="SignUpPage_BoardTextField_email"
          label="Email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          errorText={emailErrorText}
        />
        <BoardButton
          id="SignUpPage_BoardButton_signUp"
          variant="contained"
          type="submit"
        >
          Sign Up
        </BoardButton>
      </div>
    </form>
  );
}

export default SignUpForm;
