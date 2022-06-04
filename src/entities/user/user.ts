import TableBoardItem from '../board/table-board-item';
import Access from './access';

interface User {
  id: string;
  color: string;
  username: string;
  email: string;
  access: Access;

  getShortName() : string;
  getShortEmail() : string;
  isOwnerOfThisBoard(board: TableBoardItem): boolean;
}

export function newUser(): User {
  return {
    id: ' ',
    color: ' ',
    username: ' ',
    email: ' ',
    access: Access.EDITOR,

    getShortName() { return this.username[0]; },
    getShortEmail() {
      if (this.email.length > 35) {
        return `${this.email.slice(0, 35)}...`;
      }
      return this.email;
    },
    isOwnerOfThisBoard(board: TableBoardItem) { return board.owner.id === this.id },
  };
}

export default User;
