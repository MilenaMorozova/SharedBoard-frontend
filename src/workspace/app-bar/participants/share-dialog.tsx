import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Dialog from '../../../custom-mui-components/dialog/dialog';
import Access from '../../../entities/user/access';
import BoardTextField from '../../../custom-mui-components/text-fields/text-field';
import {
  AccessSelectStyle, CurrentUserAccessStyle, DialogContextStyle, MenuItemStyle, ParticipantAvatarStyle, ParticipantRowStyle, UsernameStyle,
} from './style';
import User from '../../../entities/user/user';
import Avatar from '../../../custom-mui-components/avatar/avatar';
import { selectCurrentUser, selectParticipants } from '../../workspaceSlice';
import { useAppSelector } from '../../../store/hooks';


export type AccessToBoardDialogProps = {
    open: boolean,
    onClose: () => void,
}

function AccessSelect(props: {defaultValue: Access}) {
  const [access, setAccess] = useState(props.defaultValue);

  return (
    <Select
      sx={AccessSelectStyle}
      size="small"
      variant="standard"
      value={access}
      onChange={(event) => setAccess(event.target.value as Access)}
      displayEmpty
      disableUnderline
    >
      <MenuItem sx={MenuItemStyle} value={Access.VIEWER}>{Access.VIEWER}</MenuItem>
      <MenuItem sx={MenuItemStyle} value={Access.EDITOR}>{Access.EDITOR}</MenuItem>
      <MenuItem sx={MenuItemStyle} value={Access.OWNER}>{Access.OWNER}</MenuItem>
    </Select>
  );
}

function ParticipantRow(props: {user: User, isCurrentUser?: boolean}) {
  return (
    <div style={ParticipantRowStyle}>
      <div style={ParticipantAvatarStyle}>
        <Avatar user={props.user} />
        <span style={UsernameStyle}>
          {props.user.username} {(props.isCurrentUser) ? '(you)' : null}
        </span>
      </div>
      {
                (props.isCurrentUser) ? (
                  <span style={CurrentUserAccessStyle}>{props.user.access}</span>
                ) : (
                  <AccessSelect defaultValue={props.user.access} />
                )
            }
    </div>
  );
}

function AccessToBoardDialog(props: AccessToBoardDialogProps) {
  const participants = useAppSelector(selectParticipants);
  const currentUser = useAppSelector(selectCurrentUser);

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
          value="Link fo r you"
          onChange={() => {}}
          sx={{ width: '100%' }}
          InputProps={{ endAdornment: <AccessSelect defaultValue={Access.EDITOR} /> }}
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
