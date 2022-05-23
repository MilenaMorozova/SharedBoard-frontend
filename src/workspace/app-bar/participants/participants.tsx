import COLORS from '../../../colors';
import Avatar from '../../../custom-mui-components/avatar/avatar';
import CircleWithText from '../../../custom-mui-components/avatar/circle-with-text';
import User from '../../../entities/user/user';
import { useAppSelector } from '../../../store/hooks';
import { MovedLeftAvatarStyle, ParticipantsCounterStyle, ParticipantsStyle } from './style';


function Participants() {
  const users: Array<User> = useAppSelector(state => state.workspace.participants);

  return (
    <div style={ParticipantsStyle}>
      {
        users.slice(0, 5).map((user, i) => (
          <Avatar
            key={user.id}
            user={user}
            style={(i === 0 ? {} : MovedLeftAvatarStyle)}
          />
        ))
      }
      {
        users.length > 5 ? (
          <CircleWithText
            text={`+${users.length - 5}`}
            color={COLORS.BACKGOUND_LIGHT_BLUE}
            style={ParticipantsCounterStyle}
          />
        ) : (
          null
        )
      }
    </div>
  );
}

export default Participants;
