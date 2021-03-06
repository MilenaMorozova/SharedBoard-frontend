import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ActionPanel, { ActionIconButton } from '../../../custom-mui-components/action-panel/action-panel';
import Access from '../../../entities/user/access';
import { createNote, removeNote } from '../../../service/websocket/websocket-sender';
import { useAppSelector } from '../../../store/hooks';
import { store } from '../../../store/store';


function NotesActionPanel() {
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
    <ActionPanel>
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
    </ActionPanel>
  );
}


export default NotesActionPanel;