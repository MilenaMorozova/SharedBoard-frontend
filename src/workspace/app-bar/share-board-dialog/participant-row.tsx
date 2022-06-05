import Avatar from '../../../custom-mui-components/avatar/avatar';
import Access from '../../../entities/user/access';
import User from '../../../entities/user/user';
import { changeUserAccess } from '../../../service/websocket/websocket-sender';
import { useAppSelector } from '../../../store/hooks';
import AccessSelect from './access-select';
import {
  CurrentUserAccessStyle, ParticipantAvatarStyle, ParticipantRowStyle, UsernameStyle,
} from './style';


function ParticipantRow(props: {user: User, isCurrentUser?: boolean}) {
  const currentUserAccess = useAppSelector(state => state.workspace.currentUser.access);

  const onChange = (access: Access) => {
    changeUserAccess(props.user.id, access);
  };

  const setAccessDisabled = () => {
    return currentUserAccess !== Access.OWNER;
  }

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
              <AccessSelect
                value={props.user.access}
                onChange={onChange}
                disabled={setAccessDisabled()}
              />
            )
        }
    </div>
  );
}

ParticipantRow.defaultProps = {
  isCurrentUser: false,
};

export default ParticipantRow;
