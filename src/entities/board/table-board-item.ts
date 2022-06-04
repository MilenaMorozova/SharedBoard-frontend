import Access from '../user/access';
import User, { newUser } from '../user/user';
import BoardType from './board-type';

interface TableBoardItem {
  id: string;
  name: string;
  type: BoardType;
  createdDate: Date;
  updatedDate: Date;
  currentUserAccess: Access;
  owner: User;
}

export function newTableBoardItem(): TableBoardItem {
  return {
    id: '',
    name: '',
    type: BoardType.NOTES,
    createdDate: new Date(),
    updatedDate: new Date(),
    currentUserAccess: Access.VIEWER,
    owner: newUser(),
  };
}

export default TableBoardItem;
