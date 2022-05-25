import User, { newUser } from '../user/user';
import BoardType from './board-type';

interface Board {
  id: string;
  name: string;
  type: BoardType;
  createdDate: Date;
  updatedDate: Date;
  participants: Array<User>;

  getOwner(): User;
}

export function newBoard(): Board {
  return {
    id: '',
    name: '',
    type: BoardType.NOTES,
    createdDate: new Date(),
    updatedDate: new Date(),
    participants: [],

    getOwner() {
      const user = newUser();
      user.username = 'Milena Sergeevna';
      return user;
    },
  };
}

export default Board;
