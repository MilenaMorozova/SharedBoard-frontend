import { CSSProperties } from 'react';
import User from '../../entities/user';
import CircleWithText from './circle-with-text';


type AvatarProps = {
  user: User,
  style?: CSSProperties
}

function Avatar(props: AvatarProps) {
  return (
    <CircleWithText
      text={props.user.shortUsername}
      color={props.user.color}
      style={props.style}
    />
  );
}

Avatar.defaultProps = {
  style: null,
};

export default Avatar;
