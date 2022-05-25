import Avatar from '../../../custom-mui-components/avatar/avatar';
import User from '../../../entities/user/user';
import AccessSelect from './access-select';
import {
  CurrentUserAccessStyle, ParticipantAvatarStyle, ParticipantRowStyle, UsernameStyle,
} from './style';


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

export default ParticipantRow;
