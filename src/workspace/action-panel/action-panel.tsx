import { IconButton } from '@mui/material';
import { ReactNode } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { IconButtonStyle, ActionPanelStyle } from './style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addNote, deleteSelectedNotes } from '../workspaceSlice';
import Note from '../../entities/note/note';
import COLORS from '../../colors';


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

  const onCreate = () => {
    const mockNote: Note = {
      id: '51',
      title: 'New task',
      tag: 'patsvr-59',
      description: 'no description',
      color: COLORS.CHIP_LABEL_YELLOW,
      created: new Date(),
      updated: new Date(),
      posX: 200,
      posY: 200,
      refTag: '',
    };

    dispatch(addNote(mockNote));
  };

  return (
    <div id="Workspace_AcionPanel" style={ActionPanelStyle}>
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
