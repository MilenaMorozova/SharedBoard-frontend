import User, { newUser } from "../entities/user/user";


function userDtoToUserEntity(userDto: {[key: string]: string}): User {
    const {account_color, password, ...commonUser} = userDto;
    return {
        ...newUser(),
        ...commonUser,
        color: account_color,
    }
}

export default userDtoToUserEntity;