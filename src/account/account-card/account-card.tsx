import { Button } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import COLORS from '../../colors';
import Avatar from '../../custom-mui-components/avatar/avatar';
import { useAppSelector } from '../../store/hooks';
import {
  AccountInfoRowStyle, ArrowStyle, AccountCardStyle, AvatarStyle, AvatarBlockStyle,
  UsernameRowStyle, UsernameTextStyle, UserFieldsBlockStyle, UserFieldRowStyle, UserFieldTextStyle,
} from './style';
import { ErrorButton, SecondaryButton } from '../../custom-mui-components/button/secondary/secondary-button';


function AccountInfoRow(props: {children: ReactNode, textStyle: CSSProperties, buttonStyle: CSSProperties}) {
  return (
    <Button
      sx={{ ...AccountInfoRowStyle, ...props.buttonStyle }}
      endIcon={<ArrowForwardIosOutlinedIcon sx={ArrowStyle} />}
    >
      <span style={props.textStyle}>{props.children}</span>
    </Button>
  );
}

function AccountCard() {
  const user = useAppSelector(state => state.account.user);

  return (
    <div style={AccountCardStyle}>
      <div style={AvatarBlockStyle}>
        <Avatar user={user} style={AvatarStyle} />
        <AccountInfoRow
          textStyle={UsernameTextStyle}
          buttonStyle={UsernameRowStyle}
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
    </div>
  );
}

export default AccountCard;
