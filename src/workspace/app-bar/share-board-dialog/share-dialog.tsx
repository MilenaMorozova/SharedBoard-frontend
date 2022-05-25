import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { Scrollbars } from 'react-custom-scrollbars';
import { useState } from 'react';
import Dialog from '../../../custom-mui-components/dialog/dialog';
import Access from '../../../entities/user/access';
import BoardTextField from '../../../custom-mui-components/text-fields/text-field';
import { DialogContextStyle } from './style';
import { selectCurrentUser, selectParticipants } from '../../workspaceSlice';
import { useAppSelector } from '../../../store/hooks';
import AccessSelect from './access-select';
import ParticipantRow from './participant-row';


export type AccessToBoardDialogProps = {
    open: boolean,
    onClose: () => void,
}

function AccessToBoardDialog(props: AccessToBoardDialogProps) {
  const participants = useAppSelector(selectParticipants);
  const currentUser = useAppSelector(selectCurrentUser);

  const [linkAccess, setLinkAccess] = useState(Access.EDITOR);

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
          value="Link for you"
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
            participants.map(user => <ParticipantRow key={user.id} user={user} />)
          }
        </Scrollbars>
      </div>
    </Dialog>
  );
}

export default AccessToBoardDialog;
