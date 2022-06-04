import User, { newUser } from '../entities/user/user';


function userDtoToUserEntity(userDto: {[key: string]: string}): User {
  const { account_color, password, ...commonUser } = userDto; // eslint-disable-line @typescript-eslint/no-unused-vars, camelcase

  return {
    ...newUser(),
    ...commonUser,
    color: account_color, // eslint-disable-line camelcase
  };
}

export default userDtoToUserEntity;
