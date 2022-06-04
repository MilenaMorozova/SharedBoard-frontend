import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useEffect, useState } from 'react';
import DraggableDialog from '../../custom-mui-components/dialog/dialog';
import BoardTextField from '../../custom-mui-components/text-fields/text-field';
import TextButton from '../../custom-mui-components/button/text-button/text-button';
import { ContentTextStyle, TextFieldsStyle, TextFieldStyle } from './style';
import { useSnackbar } from 'notistack';
import ACCOUNT_CONTROLLER from '../../controller/AccountController';
import BoardPasswordTextField from '../../custom-mui-components/text-fields/password-text-field';
import { useAppSelector } from '../../store/hooks';


type ChangeUsernameDialogProps = {
    open: boolean,
    onClose: () => void,
}

function ChangeUsernameDialog(props: ChangeUsernameDialogProps) {
  const username = useAppSelector(state => state.account.user.username);
  const [value, setValue] = useState(username);
  const [password, setPassword] = useState('');

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => { setValue(username); }, [props.open]);

  const onClick = () => {
    if (value !== username) {
      ACCOUNT_CONTROLLER.changeUsername(value, password)
      .then(() => {props.onClose()})
      .catch(() => enqueueSnackbar({ 
        text: 'Username not changed, because it is incorrect!', 
        type: 'error' 
      }));
    } else {
      props.onClose();
    }
  };

  function ActionPanel() {
    return (
      <>
        <TextButton fullWidth={false} onClick={props.onClose}>CANCEL</TextButton>
        <TextButton fullWidth={false} onClick={onClick}>CHANGE</TextButton>
      </>
    );
  }

  return (
    <DraggableDialog
      titleIcon={<PersonOutlineIcon />}
      title="Change username"
      actionPanel={<ActionPanel />}
      open={props.open}
      onClose={props.onClose}
    >
      <div style={ContentTextStyle}>
        Entry new username and current password
      </div>
      <div style={TextFieldsStyle}>
        <BoardTextField
          label="New username"
          sx={TextFieldStyle} 
          value={value} 
          onChange={(event) => setValue(event.target.value)} 
        />
        <BoardPasswordTextField
          label="Password"
          sx={TextFieldStyle} 
          value={password} 
          onChange={(event) => setPassword(event.target.value)} 
        />
      </div>
    </DraggableDialog>
  );
}

export default ChangeUsernameDialog;
