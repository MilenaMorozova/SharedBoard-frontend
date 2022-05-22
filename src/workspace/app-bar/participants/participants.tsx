import Avatar from "../../../custom-mui-components/avatar/avatar";
import CircleWithText from "../../../custom-mui-components/avatar/circle-with-text";
import User from "../../../entities/user";
import { MovedLeftAvatarStyle, ParticipantsStyle } from "./style";

function Participants() {
    const mockUser = new User();
    mockUser.color = 'red';
    mockUser.username = 'Milena';
  
    const users = [mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser, mockUser];
  
    return (
      <div style={ParticipantsStyle}>
        {
            users.slice(0, 5).map((user, i) => <Avatar key={user.id} user={user} style={(i === 0 ? {} : MovedLeftAvatarStyle)} />)
        }
        {
            users.length > 5
              ? <CircleWithText text={`+${users.length - 5}`} color="brown" style={MovedLeftAvatarStyle} /> : null
        }
      </div>
    );
  }

export default Participants;