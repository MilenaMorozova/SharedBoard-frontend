import Access from '../user/access';
import User, { newUser } from '../user/user';
import BoardType from './board-type';

interface Board {
  id: string;
  name: string;
  type: BoardType;
  createdDate: Date;
  updatedDate: Date;
  participants: Array<User>;

  getOwner(): User | undefined;
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
      return this.participants.find(user => user.access === Access.OWNER);
    },
  };
}

export default Board;
