import { Button } from '@mui/material';
import {
  CSSProperties, MouseEventHandler, ReactNode, useState,
} from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useNavigate } from 'react-router-dom';
import Avatar from '../../custom-mui-components/avatar/avatar';
import { useAppSelector } from '../../store/hooks';
import {
  AccountInfoRowStyle, ArrowStyle, AccountCardStyle, AvatarStyle, AvatarBlockStyle,
  UsernameRowStyle, UsernameTextStyle, UserFieldsBlockStyle, UserFieldRowStyle, UserFieldTextStyle,
} from './style';
import { ErrorButton, SecondaryButton } from '../../custom-mui-components/button/secondary/secondary-button';
import ChangeUsernameDialog from '../dialog/change-username-dialog';
import ChangePasswordDialog from '../dialog/change-password-dialog';
import ChangeEmailDialog from '../dialog/change-email-dialog';
import ACCOUNT_CONTROLLER from '../../controller/AccountController';
import ROUTE from '../../routers/routers';
import DeleteAccountDialog from '../dialog/delete-account-dialog';


type AccountInfoRowProps = {
  children: ReactNode,
  textStyle: CSSProperties,
  buttonStyle: CSSProperties,
  onClick: MouseEventHandler<HTMLButtonElement>,
}

function AccountInfoRow(props: AccountInfoRowProps) {
  return (
    <Button
      sx={{ ...AccountInfoRowStyle, ...props.buttonStyle }}
      endIcon={<ArrowForwardIosOutlinedIcon sx={ArrowStyle} />}
      onClick={props.onClick}
    >
      <span style={props.textStyle}>{props.children}</span>
    </Button>
  );
}

function AccountCard() {
  const user = useAppSelector(state => state.account.user);
  const [isUsernameChanging, setUsernameChanging] = useState(false);
  const [isPasswordChanging, setPasswordChanging] = useState(false);
  const [isEmailChanging, setEmailChanging] = useState(false);
  const [isAccountDeletion, setAcountDeletion] = useState(false);

  const navigate = useNavigate();

  const onLogout = () => {
    ACCOUNT_CONTROLLER.logout();
    navigate(ROUTE.LOGIN);
  };

  return (
    <div id="AccountPage_AccountCard" style={AccountCardStyle}>
      <div style={AvatarBlockStyle}>
        <Avatar user={user} style={AvatarStyle} />
        <AccountInfoRow
          textStyle={UsernameTextStyle}
          buttonStyle={UsernameRowStyle}
          onClick={() => setUsernameChanging(true)}
        >
          {user.username}
        </AccountInfoRow>
      </div>

      <div style={UserFieldsBlockStyle}>
        <AccountInfoRow
          textStyle={UserFieldTextStyle}
          buttonStyle={UserFieldRowStyle}
          onClick={() => setEmailChanging(true)}
        >
          Email: {user.getShortEmail()}
        </AccountInfoRow>
        <AccountInfoRow
          textStyle={UserFieldTextStyle}
          buttonStyle={UserFieldRowStyle}
          onClick={() => setPasswordChanging(true)}
        >
          Password: *********
        </AccountInfoRow>
      </div>

      <SecondaryButton onClick={onLogout}>LOG OUT</SecondaryButton>
      <ErrorButton onClick={() => setAcountDeletion(true)}>DELETE ACCOUNT</ErrorButton>

      <ChangeUsernameDialog
        open={isUsernameChanging}
        onClose={() => setUsernameChanging(false)}
      />
      <ChangePasswordDialog
        open={isPasswordChanging}
        onClose={() => setPasswordChanging(false)}
      />
      <ChangeEmailDialog
        open={isEmailChanging}
        onClose={() => setEmailChanging(false)}
      />
      <DeleteAccountDialog
        open={isAccountDeletion}
        onClose={() => setAcountDeletion(false)}
      />
    </div>
  );
}

export default AccountCard;
