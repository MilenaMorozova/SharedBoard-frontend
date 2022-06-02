import { useEffect } from 'react';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { EmailActivationPageStyle, EmailActivationTextStyle, EmailActivationTitleStyle, EmailIconStyle, EmailIconWithTextBlockStyle, EmailTextBlock } from './style';
import AUTH_CONTROLLER from '../controller/AuthController';
import urlParamUtils from '../utils/UrlParamUtils';
import { useNavigate } from 'react-router-dom';
import ROUTE from '../routers/routers';


function EmailActivatePage() {
    let navigate = useNavigate();

  async function redirect() {
    AUTH_CONTROLLER.activateAccount(
        urlParamUtils.getParamByName('uid'), 
        urlParamUtils.getParamByName('token')
    );

    navigate(ROUTE.ACCOUNT);
  }

  useEffect(() => {
    redirect();
  });

  return (
    <div style={EmailActivationPageStyle}>
      <div style={EmailIconWithTextBlockStyle}>
        <div>
            <MarkEmailReadOutlinedIcon style={EmailIconStyle}/>
        </div>
        <div style={EmailTextBlock}>
            <span style={EmailActivationTitleStyle}>
            Your mail has been activated!
          </span>
          <span style={EmailActivationTextStyle}>
            Don't panic, now you will be redirected to another page.
            <br />
            If this does not happen click
            {' '}
            <a href="#" onClick={redirect}>here</a>
            .
          </span>
        </div>
      </div>
    </div>
  );
}

export default EmailActivatePage;