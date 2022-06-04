import User from '../user/user';
import BoardType from './board-type';

interface Board {
  id: string;
  name: string;
  type: BoardType;
  createdDate: Date;
  updatedDate: Date;
  participants: Array<User>;
}

export function newBoard(): Board {
  return {
    id: '',
    name: '',
    type: BoardType.NOTES,
    createdDate: new Date(),
    updatedDate: new Date(),
    participants: [],
  };
}

export default Board;
