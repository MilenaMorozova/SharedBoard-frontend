import { ChangeEvent, SyntheticEvent, useState } from 'react';
import BoardButton from '../../custom-mui-components/button/button';
import BoardPasswordTextField from '../../custom-mui-components/text-fields/password-text-field';
import BoardTextField from '../../custom-mui-components/text-fields/text-field';
import { SignFormStyle } from './style';


function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

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
    <form onSubmit={handleSubmit}>
      <div style={SignFormStyle}>
        <BoardTextField label="Username" value={username} onChange={handleChangeUsername} />
        <BoardPasswordTextField label="Password" value={password} onChange={handleChangePassword} />
        <BoardTextField label="Email" type="email" value={email} onChange={handleChangeEmail} />
        <BoardButton variant="contained" type="submit">Sign Up</BoardButton>
      </div>
    </form>
  );
}

export default SignUpForm;
