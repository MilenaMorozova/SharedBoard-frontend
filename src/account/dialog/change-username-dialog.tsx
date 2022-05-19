import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DraggableDialog from '../../custom-mui-components/dialog/dialog';
import BoardTextField from '../../custom-mui-components/text-fields/text-field';
import TextButton from '../../custom-mui-components/button/text-button/text-button';


function ActionPanel() {
  return (
    <div>
      <TextButton>CANCEL</TextButton>
      <TextButton>CHANGE</TextButton>
    </div>
  );
}

type ChangeUsernameDialogProps = {
    open: boolean,
    onClose: () => void,
}

function ChangeUsernameDialog(props: ChangeUsernameDialogProps) {
  console.log(props);
  return (
    <DraggableDialog
      titleIcon={<PersonOutlineIcon />}
      title="Change username"
      actionPanel={<ActionPanel />}
      open={props.open}
      onClose={props.onClose}
    >
      <BoardTextField />
    </DraggableDialog>
  );
}

export default ChangeUsernameDialog;
