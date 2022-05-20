import { useEffect, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DraggableDialog from '../../custom-mui-components/dialog/dialog';
import TextButton from '../../custom-mui-components/button/text-button/text-button';
import { ContentTextStyle, TextFieldsStyle, TextFieldStyle } from './style';
import BoardPasswordTextField from '../../custom-mui-components/text-fields/password-text-field';


type ChangePasswordDialogProps = {
    open: boolean,
    onClose: () => void,
}

function ChangePasswordDialog(props: ChangePasswordDialogProps) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => { setOldPassword(''); setNewPassword(''); }, [props.open]);

  const onClick = () => {
    props.onClose();
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
      titleIcon={<LockOutlinedIcon />}
      title="Change password"
      actionPanel={<ActionPanel />}
      open={props.open}
      onClose={props.onClose}
    >
      <div style={ContentTextStyle}>
        Entry old and new password
      </div>
      <div style={TextFieldsStyle}>
        <BoardPasswordTextField
          label="Old password"
          sx={TextFieldStyle}
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
        />
        <BoardPasswordTextField
          label="New password"
          sx={TextFieldStyle}
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
      </div>
    </DraggableDialog>
  );
}

export default ChangePasswordDialog;
