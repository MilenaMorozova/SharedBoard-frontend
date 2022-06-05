import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { Scrollbars } from 'react-custom-scrollbars';
import Dialog from '../../../custom-mui-components/dialog/dialog';
import Access from '../../../entities/user/access';
import BoardTextField from '../../../custom-mui-components/text-fields/text-field';
import { DialogContextStyle } from './style';
import { selectCollaborators, selectCurrentUser } from '../../workspaceSlice';
import { useAppSelector } from '../../../store/hooks';
import AccessSelect from './access-select';
import ParticipantRow from './participant-row';
import { changeLinkAccess } from '../../../service/websocket/websocket-sender';


export type AccessToBoardDialogProps = {
    open: boolean,
    onClose: () => void,
}

function AccessToBoardDialog(props: AccessToBoardDialogProps) {
  const collaborators = useAppSelector(selectCollaborators);
  const currentUser = useAppSelector(selectCurrentUser);

  const linkAccess = useAppSelector(state => state.workspace.board.linkAccess);
  const setLinkAccess = (access: Access) => {
    changeLinkAccess(access);
  }

  return (
    <Dialog
      title="ShareBoard"
      titleIcon={<DashboardOutlinedIcon />}
      actionPanel={null}
      open={props.open}
      onClose={props.onClose}
    >
      <div style={DialogContextStyle}>
        <BoardTextField
          placeholder="Link"
          value={window.location.href}
          onChange={() => {}}
          sx={{ width: '100%' }}
          InputProps={{ endAdornment: <AccessSelect value={linkAccess} onChange={setLinkAccess} /> }}
        />
        <Scrollbars
          thumbSize={90}
          autoHeight
          autoHeightMax={400}
          style={{ width: 450 }}
        >
          <ParticipantRow
            key={currentUser.id}
            user={currentUser}
            isCurrentUser
          />
          {
            collaborators.map(user => <ParticipantRow key={user.id} user={user} />)
          }
        </Scrollbars>
      </div>
    </Dialog>
  );
}

export default AccessToBoardDialog;
