import { IconButton } from '@mui/material';
import { ReactNode } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconButtonStyle, ActionPanelStyle } from './style';
import { useAppSelector } from '../../store/hooks';
import { createNote, removeNote } from '../../service/websocket/websocket-sender';
import { store } from '../../store/store';


function ActionIconButton(props: {icon: ReactNode, onClick: () => void, disabled?: boolean}) {
  return (
    <IconButton
      sx={IconButtonStyle}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon}
    </IconButton>
  );
}

ActionIconButton.defaultProps = {
  disabled: false,
};

function ActionPanel() {
  const hasSelectedNotes = useAppSelector(state => state.workspace.selectedNotesIds.size > 0);

  const onDelete = () => {
    store.getState().workspace.selectedNotesIds.forEach(removeNote);
  };

  const onCreate = () => {
    createNote();
  };

  return (
    <div
      id="Workspace_AcionPanel"
      style={ActionPanelStyle}
    >
      <ActionIconButton
        icon={<AddOutlinedIcon />}
        onClick={onCreate}
      />
      <ActionIconButton
        icon={<DeleteOutlinedIcon />}
        onClick={onDelete}
        disabled={!hasSelectedNotes}
      />
    </div>
  );
}


export default ActionPanel;
