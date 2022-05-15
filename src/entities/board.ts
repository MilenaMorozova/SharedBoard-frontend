import BoardType from './board-type';
import User from './user';

class Board {
  id = '';
  boardName = '';
  type: BoardType | null = null;
  createdDate: Date | null = null;
  updatedDate: Date | null = null;
  participants: Array<User> = [];
}

export default Board;
