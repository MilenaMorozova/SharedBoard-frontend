import COLORS from '../../../colors';
import Avatar from '../../../custom-mui-components/avatar/avatar';
import CircleWithText from '../../../custom-mui-components/avatar/circle-with-text';
import User from '../../../entities/user/user';
import { useAppSelector } from '../../../store/hooks';
import { selectActiveCollaborators } from '../../workspaceSlice';
import { MovedLeftAvatarStyle, ParticipantsCounterStyle, ParticipantsStyle } from './style';


function Collaborators() {
  const collaborators: Array<User> = useAppSelector(selectActiveCollaborators);

  return (
    <div style={ParticipantsStyle}>
      {
        collaborators.slice(0, 5).map((user, i) => (
          <Avatar
            key={user.id}
            user={user}
            style={(i === 0 ? {} : MovedLeftAvatarStyle)}
          />
        ))
      }
      {
        collaborators.length > 5 ? (
          <CircleWithText
            text={`+${collaborators.length - 5}`}
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

export default Collaborators;
