import { useEffect } from 'react';
import BoardType from '../entities/board/board-type';
import WEBSOCKET_CONNECTION from '../service/websocket/websocket-connection';
import { useAppSelector } from '../store/hooks';
import KanbanWorkspace from './kanban-workspace/kanban-workspace';
import NotesWorkspace from './notes-workspace/notes-workspace';
import WorkspaceStyle from './style';


function Workspace() {
  const currentBoardType = useAppSelector(state => state.workspace.board.type);

  useEffect(() => {
    if (!WEBSOCKET_CONNECTION.isConnect) {
      WEBSOCKET_CONNECTION.connect();
    }
  }, []);

  function WorkspaceContent() {
    switch (currentBoardType) {
      case BoardType.KANBAN:
        return <KanbanWorkspace/>;
      case BoardType.NOTES:
        return <NotesWorkspace />;
      default:
        throw Error(`Unhandled BoardType ${currentBoardType}`);
    }
  }

  return (
    <div id="Workspace_div" style={WorkspaceStyle}>
      <WorkspaceContent />
    </div>
  );
}

export default Workspace;
