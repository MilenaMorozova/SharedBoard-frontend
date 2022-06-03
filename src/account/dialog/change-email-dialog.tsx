import { useEffect, useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DraggableDialog from '../../custom-mui-components/dialog/dialog';
import BoardTextField from '../../custom-mui-components/text-fields/text-field';
import TextButton from '../../custom-mui-components/button/text-button/text-button';
import { ContentTextStyle, TextFieldStyle } from './style';
import { useAppSelector } from '../../store/hooks';
import ACCOUNT_CONTROLLER from '../../controller/auth/AccountController';
import { useSnackbar } from 'notistack';


type ChangeEmailDialogProps = {
    open: boolean,
    onClose: () => void,
}

function ChangeEmailDialog(props: ChangeEmailDialogProps) {
  const email = useAppSelector(state => state.account.user.email);
  const [value, setValue] = useState(email);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => { setValue(email); }, [props.open]);

  const onClick = () => {
    if (value !== email) {
      ACCOUNT_CONTROLLER.changeEmail(value)
      .then(() => {props.onClose()})
      .catch(() => enqueueSnackbar({ 
        text: 'Email not changed, because it is incorrect!', 
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
      titleIcon={<EmailOutlinedIcon />}
      title="Change email"
      actionPanel={<ActionPanel />}
      open={props.open}
      onClose={props.onClose}
    >
      <div style={ContentTextStyle}>
        Entry new email
      </div>
      <BoardTextField 
        type="email"
        sx={TextFieldStyle} 
        value={value} 
        onChange={(event) => setValue(event.target.value)} 
      />
    </DraggableDialog>
  );
}

export default ChangeEmailDialog;
