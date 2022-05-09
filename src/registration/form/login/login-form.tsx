import {
  ChangeEvent, SyntheticEvent, useState,
} from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import BoardButton from '../../../custom-mui-components/button/button';
import BoardPasswordTextField from '../../../custom-mui-components/text-fields/password-text-field';
import BoardTextField from '../../../custom-mui-components/text-fields/text-field';
import {
  ForgotPasswordStyle, FullWidthStyle, LoginErrorBlockStyle, SignFormStyle,
} from '../style';
import { useAppSelector } from '../../../store/hooks';


function ErrorBlock() {
  const errorText = useAppSelector(state => state.login.errorText);

  return (
    <div style={LoginErrorBlockStyle}>
      <ErrorOutlineOutlinedIcon />
      {errorText}
    </div>
  );
}

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const errorText = useAppSelector(state => state.login.errorText);

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={SignFormStyle}>
        { (errorText === null) ? null : <ErrorBlock /> }
        <BoardTextField label="Username" value={username} onChange={handleChangeUsername} />
        <BoardPasswordTextField label="Password" value={password} onChange={handleChangePassword} />
        <div style={FullWidthStyle}>
          <a href="#1" style={ForgotPasswordStyle}>Forgot password?</a>
        </div>
        <BoardButton variant="contained" type="submit">LOGIN</BoardButton>
      </div>
    </form>
  );
}

export default LoginForm;
