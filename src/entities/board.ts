import BoardType from './board-type';
import User from './user';

class Board {
  id = '';
  name = '';
  type: BoardType | null = null;
  createdDate: Date | null = null;
  updatedDate: Date | null = null;
  participants: Array<User> = [];

  get owner(): User {
    const user = new User();
    user.username = 'Milena Sergeevna';
    return user;
  }

  copy() {
    let copiedBoard = new Board();
    copiedBoard.id = this.id;
    copiedBoard.name = this.name;
    copiedBoard.type = this.type;
    copiedBoard.createdDate = this.createdDate;
    copiedBoard.updatedDate = this.updatedDate;
    copiedBoard.participants = this.participants;
    return copiedBoard;
  }
}

export default Board;
