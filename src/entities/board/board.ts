import Access from '../user/access';
import User from '../user/user';
import BoardType from './board-type';

interface Board {
  id: string;
  name: string;
  type: BoardType;
  createdDate: Date;
  updatedDate: Date;
  linkAccess: Access;
  participants: Array<User>;
}

export function newBoard(): Board {
  return {
    id: '',
    name: '',
    type: BoardType.NOTES,
    createdDate: new Date(),
    updatedDate: new Date(),
    linkAccess: Access.VIEWER,
    participants: [],
  };
}

export default Board;
