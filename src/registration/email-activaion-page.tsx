import { useEffect } from 'react';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { useNavigate } from 'react-router-dom';
import {
  EmailActivationPageStyle, EmailActivationTextStyle, EmailActivationTitleStyle,
  EmailIconStyle, EmailIconWithTextBlockStyle, EmailTextBlock,
} from './style';
import AUTH_CONTROLLER from '../controller/AuthController';
import urlParamUtils from '../utils/UrlParamUtils';
import ROUTE from '../routers/routers';


function EmailActivatePage() {
  let navigate = useNavigate();

  async function redirect() {
    AUTH_CONTROLLER.activateAccount(
      urlParamUtils.getParamByName('uid'),
      urlParamUtils.getParamByName('token'),
    );
    navigate(ROUTE.LOGIN);
  }

  useEffect(() => {
    redirect();
  });

  return (
    <div style={EmailActivationPageStyle}>
      <div style={EmailIconWithTextBlockStyle}>
        <div>
          <MarkEmailReadOutlinedIcon style={EmailIconStyle} />
        </div>
        <div style={EmailTextBlock}>
          <span style={EmailActivationTitleStyle}>
            Your mail has been activated!
          </span>
          <span style={EmailActivationTextStyle}>
            Don&apot panic, now you will be redirected to another page.
            <br />
            If this does not happen click
            {' '}
            <a href="#" onClick={redirect}>here</a> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
            .
          </span>
        </div>
      </div>
    </div>
  );
}

export default EmailActivatePage;
