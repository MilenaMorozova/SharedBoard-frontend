import { useEffect, useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DraggableDialog from '../../custom-mui-components/dialog/dialog';
import BoardTextField from '../../custom-mui-components/text-fields/text-field';
import TextButton from '../../custom-mui-components/button/text-button/text-button';
import { ContentTextStyle, TextFieldStyle } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setEmail } from '../accountSlice';


type ChangeEmailDialogProps = {
    open: boolean,
    onClose: () => void,
}

function ChangeEmailDialog(props: ChangeEmailDialogProps) {
  const email = useAppSelector(state => state.account.user.email);
  const [value, setValue] = useState(email);

  const dispatch = useAppDispatch();

  useEffect(() => { setValue(email); }, [props.open]);

  const onClick = () => {
    if (value !== email) {
      dispatch(setEmail(value));
    }
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
      titleIcon={<EmailOutlinedIcon />}
      title="Change email"
      actionPanel={<ActionPanel />}
      open={props.open}
      onClose={props.onClose}
    >
      <div style={ContentTextStyle}>
        Entry new email
      </div>
      <BoardTextField sx={TextFieldStyle} value={value} onChange={(event) => setValue(event.target.value)} />
    </DraggableDialog>
  );
}

export default ChangeEmailDialog;
