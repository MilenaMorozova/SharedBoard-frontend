import { IconButton } from '@mui/material';
import { ReactNode } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconButtonStyle, ActionPanelStyle } from './style';
import { useAppSelector } from '../../store/hooks';
import { createNote, removeNote } from '../../service/websocket/websocket-sender';
import { store } from '../../store/store';
import Access from '../../entities/user/access';


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
  const currentUserAccess = useAppSelector(state => state.workspace.currentUser.access);

  const setDisabledButtons = () => currentUserAccess === Access.VIEWER;

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
        disabled={setDisabledButtons()}
      />
      <ActionIconButton
        icon={<DeleteOutlinedIcon />}
        onClick={onDelete}
        disabled={!hasSelectedNotes || setDisabledButtons()}
      />
    </div>
  );
}


export default ActionPanel;
