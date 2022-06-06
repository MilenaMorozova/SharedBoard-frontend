import {
  setBoards, setEmail, setUser, setUsername,
} from '../account/accountSlice';
import BoardType from '../entities/board/board-type';
import TableBoardItem from '../entities/board/table-board-item';
import { boardDtoToTableBoardEntity } from '../mapper/boardMapper';
import { userDtoToUserEntity } from '../mapper/userMapper';
import ACCOUNT_SERVICE from '../service/AccountService';
import AUTH_SERVICE from '../service/AuthService';
import { store } from '../store/store';


class AccountController {
  downloadUser() {
    ACCOUNT_SERVICE.getUser()
      .then(response => response.json())
      .then(userDtoToUserEntity)
      .then(user => store.dispatch(setUser(user)));
  }

  downloadBoards() {
    ACCOUNT_SERVICE.getUserBoards()
      .then(response => response.json() as unknown as Array<{ [key: string]: any; }>) // eslint-disable-line @typescript-eslint/no-explicit-any
      .then(jsonResponse => jsonResponse.map(boardDtoToTableBoardEntity) as Array<TableBoardItem>)
      .then(boards => store.dispatch(setBoards(boards)));
  }

  changeUsername(newUsername: string, password: string) {
    return ACCOUNT_SERVICE.changeUsername(newUsername, password)
      .then(() => store.dispatch(setUsername(newUsername)));
  }

  changeEmail(newEmail: string) {
    return ACCOUNT_SERVICE.changeEmail(newEmail)
      .then(() => store.dispatch(setEmail(newEmail)));
  }

  changePassword(newPassword: string, oldPassword: string) {
    return ACCOUNT_SERVICE.changePassword(newPassword, newPassword, oldPassword);
  }

  logout() {
    AUTH_SERVICE.logout();
  }

  deleteAccount(password: string) {
    return ACCOUNT_SERVICE.deleteAccount(password);
  }

  createBoard(boardType: BoardType) {
    return ACCOUNT_SERVICE.createBoard(boardType)
      .then(() => this.downloadBoards());
  }

  deleteBoard(boardId: string) {
    return ACCOUNT_SERVICE.deleteBoard(boardId)
      .then(() => this.downloadBoards());
  }

  leaveBoard(boardId: string) {
    return ACCOUNT_SERVICE.leaveBoard(boardId)
      .then(() => this.downloadBoards());
  }

  getBoardUrl(boardId: string) {
    return ACCOUNT_SERVICE.getBoardUrl(boardId)
      .then(response => response.text());
  }
}

const ACCOUNT_CONTROLLER = new AccountController();
export default ACCOUNT_CONTROLLER;
