import MoveUpOutlinedIcon from '@mui/icons-material/MoveUpOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ActionPanel, { ActionIconButton } from '../../../custom-mui-components/action-panel/action-panel';
import Access from '../../../entities/user/access';
import { createNote, removeNote } from '../../../service/websocket/websocket-sender';
import { useAppSelector } from '../../../store/hooks';
import { store } from '../../../store/store';
import { useState } from 'react';
import MigrateTasksDialog from '../migrate-tasks-dialog/migrate-tasks-dialog';


function KanbanActionPanel() {
  const hasSelectedNotes = useAppSelector(state => state.workspace.selectedNotesIds.size > 0);
  const currentUserAccess = useAppSelector(state => state.workspace.currentUser.access);
  const [isMigratingTasks, setMigratingTasks] = useState(false);

  const setDisabledButtons = () => currentUserAccess === Access.VIEWER;

  const onDelete = () => {
    store.getState().workspace.selectedNotesIds.forEach(removeNote);
  };

  const onCreate = () => {
    createNote();
  };

  const onMigrateTasks = () => {
    setMigratingTasks(true);
  }

  return (
    <>
    <ActionPanel>
        <ActionIconButton
            icon={<DashboardCustomizeOutlinedIcon />}
            onClick={onCreate}
            disabled={setDisabledButtons()}
        />
        <ActionIconButton
            icon={<MoveUpOutlinedIcon />}
            onClick={onMigrateTasks}
            disabled={setDisabledButtons()}
        />
      <ActionIconButton
        icon={<DeleteOutlinedIcon />}
        onClick={onDelete}
        disabled={!hasSelectedNotes || setDisabledButtons()}
      />
    </ActionPanel>
    <MigrateTasksDialog 
      open={isMigratingTasks} 
      onClose={() => setMigratingTasks(false)}
    />
  </>
  );
}


export default KanbanActionPanel;