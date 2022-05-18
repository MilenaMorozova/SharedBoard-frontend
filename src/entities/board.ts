import BoardType from './board-type';
import User from './user';

class Board {
  id = '';
  boardName = '';
  type: BoardType | null = null;
  createdDate: Date | null = null;
  updatedDate: Date | null = null;
  participants: Array<User> = [];

  get owner(): User {
    const user = new User();
    user.username = 'Milena Sergeevna';
    return user;
  }
}

export default Board;
