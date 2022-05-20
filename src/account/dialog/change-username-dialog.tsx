import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useEffect, useState } from 'react';
import DraggableDialog from '../../custom-mui-components/dialog/dialog';
import BoardTextField from '../../custom-mui-components/text-fields/text-field';
import TextButton from '../../custom-mui-components/button/text-button/text-button';
import { ContentTextStyle, TextFieldStyle } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUsername } from '../accountSlice';


type ChangeUsernameDialogProps = {
    open: boolean,
    onClose: () => void,
}

function ChangeUsernameDialog(props: ChangeUsernameDialogProps) {
  const username = useAppSelector(state => state.account.user.username);
  const [value, setValue] = useState(username);

  const dispatch = useAppDispatch();

  useEffect(() => { setValue(username); }, [props.open]);

  const onClick = () => {
    if (value !== username) {
      dispatch(setUsername(value));
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
      titleIcon={<PersonOutlineIcon />}
      title="Change username"
      actionPanel={<ActionPanel />}
      open={props.open}
      onClose={props.onClose}
    >
      <div style={ContentTextStyle}>
        Entry new username
      </div>
      <BoardTextField sx={TextFieldStyle} value={value} onChange={(event) => setValue(event.target.value)} />
    </DraggableDialog>
  );
}

export default ChangeUsernameDialog;
