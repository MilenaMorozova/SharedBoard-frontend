import { Button } from '@mui/material';
import {
  CSSProperties, MouseEventHandler, ReactNode, useState,
} from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Avatar from '../../custom-mui-components/avatar/avatar';
import { useAppSelector } from '../../store/hooks';
import {
  AccountInfoRowStyle, ArrowStyle, AccountCardStyle, AvatarStyle, AvatarBlockStyle,
  UsernameRowStyle, UsernameTextStyle, UserFieldsBlockStyle, UserFieldRowStyle, UserFieldTextStyle,
} from './style';
import { ErrorButton, SecondaryButton } from '../../custom-mui-components/button/secondary/secondary-button';
import ChangeUsernameDialog from '../dialog/change-username-dialog';


type AccountInfoRowProps = {
  children: ReactNode,
  textStyle: CSSProperties,
  buttonStyle: CSSProperties,
  onClick?: MouseEventHandler<HTMLButtonElement>,
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


  return (
    <div style={AccountCardStyle}>
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
        >
          Email: {user.shortEmail}
        </AccountInfoRow>
        <AccountInfoRow
          textStyle={UserFieldTextStyle}
          buttonStyle={UserFieldRowStyle}
        >
          Password: *********
        </AccountInfoRow>
      </div>

      <SecondaryButton>LOG OUT</SecondaryButton>
      <ErrorButton>DELETE ACCOUNT</ErrorButton>

      <ChangeUsernameDialog
        open={isUsernameChanging}
        onClose={() => setUsernameChanging(false)}
      />
    </div>
  );
}

export default AccountCard;
