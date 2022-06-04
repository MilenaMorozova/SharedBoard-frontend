import { useEffect } from 'react';
import WEBSOCKET_CONNECTION from '../service/websocket/websocket-connection';
import NotesWorkspace from './notes-workspace/notes-workspace';
import WorkspaceStyle from './style';


function Workspace() {
  useEffect(() => {
    if (!WEBSOCKET_CONNECTION.isConnect) {
      WEBSOCKET_CONNECTION.connect();
    }
  })

  return (
    <div id="Workspace_div" style={WorkspaceStyle}>
      <NotesWorkspace />
    </div>
  );
}

export default Workspace;
