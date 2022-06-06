import { MouseEvent } from 'react';
import WORKSPACE_CONTROLLER from '../../controller/WorkspaceController';
import BoardType from '../../entities/board/board-type';
import BoardColumn from '../../entities/board/column';
import Note from '../../entities/note/note';
import { enableNoteForOthers } from '../../service/websocket/websocket-sender';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { store } from '../../store/store';
import WorkspaceAppBar from '../app-bar/app-bar';
import { deselectSelectedNotes, selectBoardColumns, selectNotes } from '../workspaceSlice';
import KanbanActionPanel from './action-panel/action-panel';
import Column from './board-column/board-column';
import { AppBarStyle, FullScreenStyle, KanbanBoardStyle } from './style';


function KanbanWorkspace() {
  const notes: Array<Note> = useAppSelector(selectNotes);
  const boardColumns: Array<BoardColumn> = useAppSelector(selectBoardColumns);

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
        <KanbanActionPanel/>
        <div style={KanbanBoardStyle}>
          {
            boardColumns.map(boardColumn => {
              const tasks = WORKSPACE_CONTROLLER.getTasksByStatus(notes, boardColumn.id);
              return <Column key={boardColumn.id} boardColumn={boardColumn} tasks={tasks} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default KanbanWorkspace;