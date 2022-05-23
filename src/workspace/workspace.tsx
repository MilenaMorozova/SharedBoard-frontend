import NotesWorkspace from './notes-workspace/notes-workspace';
import { WorkspaceStyle } from './style';

function Workspace() {
  return (
    <div style={WorkspaceStyle}>
      <NotesWorkspace />
    </div>
  );
}

export default Workspace;
