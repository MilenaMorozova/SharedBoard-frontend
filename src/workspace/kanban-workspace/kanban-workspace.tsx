import { MouseEvent } from 'react';
import BoardType from '../../entities/board/board-type';
import Note from '../../entities/note/note';
import { enableNoteForOthers } from '../../service/websocket/websocket-sender';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { store } from '../../store/store';
import WorkspaceAppBar from '../app-bar/app-bar';
import { deselectSelectedNotes, selectNotes } from '../workspaceSlice';
import { AppBarStyle, FullScreenStyle } from './style';


function KanbanWorkspace() {
  const notes: Array<Note> = useAppSelector(selectNotes);

  const dispatch = useAppDispatch();

  const onClickBackground = (event: MouseEvent<HTMLDivElement>) => {
    let element = event.target as HTMLElement;
    if (element.id === 'KanbanWorkspace_board') {
      store.getState().workspace.selectedNotesIds.forEach(enableNoteForOthers);
      dispatch(deselectSelectedNotes());
    }
  };

  return (
    <div
      id="KanbanWorkspace"
      role="application"
      style={FullScreenStyle}
    >
      <div
        style={AppBarStyle}
      >
        <WorkspaceAppBar
          placeholder="search task by tag"
          boardType={BoardType.KANBAN}
        />
      </div>
      <div
        id="KanbanWorkspace_board"
        onClick={onClickBackground}
        style={FullScreenStyle}
        role="task"
      >
      </div>
    </div>
  );
}

export default KanbanWorkspace;