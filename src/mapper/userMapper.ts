import User, { newUser } from '../entities/user/user';
import { accessNumberToAccessEnum } from './boardMapper';


export function userDtoToUserEntity(userDto: {[key: string]: string}): User {
  const { account_color, password, ...commonUser } = userDto; // eslint-disable-line @typescript-eslint/no-unused-vars, camelcase

  return {
    ...newUser(),
    ...commonUser,
    color: account_color, // eslint-disable-line camelcase
  };
}

export function boardUserDtoToUserEntity({user, access}: {user: {[key: string]: any}, access: number}): User {
  const {account_color, ...commonUser} = user;
  return {
    ...newUser(),
    ...commonUser,
    color: account_color, // eslint-disable-line camelcase
    access: accessNumberToAccessEnum(access),
  };
}
