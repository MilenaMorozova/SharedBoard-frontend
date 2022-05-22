import WorkspaceAppBar from './app-bar/app-bar';
import { WorkspaceStyle } from './style';

function Workspace() {
  return (
    <div style={WorkspaceStyle}>
      <WorkspaceAppBar placeholder="search note by tag" />
    </div>
  );
}

export default Workspace;
