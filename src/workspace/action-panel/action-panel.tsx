import { IconButton } from '@mui/material';
import { ReactNode } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconButtonStyle, ActionPanelStyle } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteSelectedNotes } from '../workspaceSlice';


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
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(deleteSelectedNotes());
  };

  return (
    <div style={ActionPanelStyle}>
      <ActionIconButton
        icon={<AddOutlinedIcon />}
        onClick={() => {}}
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
