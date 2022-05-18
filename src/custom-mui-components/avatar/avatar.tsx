import { CSSProperties } from 'react';
import User from '../../entities/user';
import { AvatarStyle, ShortUsernameStyle } from './style';

type AvatarProps = {
  user: User,
  style?: CSSProperties
}

function Avatar(props: AvatarProps) {
  return (
    <div style={{ ...AvatarStyle, background: props.user.color, ...props.style }}>
      <span style={ShortUsernameStyle}>{props.user.shortUsername}</span>
    </div>
  );
}

Avatar.defaultProps = {
  style: null,
};

export default Avatar;
