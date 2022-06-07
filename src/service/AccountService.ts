import BoardType from '../entities/board/board-type';
import { ServerRoute } from '../routers/serverRouters';
import {
  authDeleteRequest, authGet, authPatch, authPost,
} from './requestTemplate';


class AccountService {
  getUser() {
    return authGet(ServerRoute.GET_USER_URL);
  }

  getUserBoards() {
    return authGet(ServerRoute.GET_MY_BOARDS_URL);
  }

  getColumns(board_id: string) {
    return authPost(
      ServerRoute.GET_COLUMNS_URL,
      JSON.stringify({ board_id })
    );
  }

  changeUsername(newUsername: string, password: string) {
    return authPost(
      ServerRoute.CHANGE_USERNAME_URL,
      JSON.stringify({ new_username: newUsername, current_password: password }),
    );
  }

  changeEmail(newEmail: string) {
    return authPatch(
      ServerRoute.GET_USER_URL,
      JSON.stringify({ email: newEmail }),
    );
  }

  changePassword(newPassword: string, reNewPassword: string, currentPassword: string) {
    return authPost(
      ServerRoute.CHANGE_PASSWOD_URL,
      JSON.stringify({
        new_password: newPassword,
        re_new_password: reNewPassword,
        current_password: currentPassword,
      }),
    );
  }

  deleteAccount(password: string) {
    return authDeleteRequest(
      ServerRoute.GET_USER_URL,
      JSON.stringify({ current_password: password }),
    );
  }

  createBoard(boardType: BoardType) {
    return authPost(
      ServerRoute.CREATE_BOARD_URL,
      JSON.stringify({ board_type: boardType }),
    );
  }

  deleteBoard(boardId: string) {
    return authPost(
      ServerRoute.DELETE_BOARD_URL,
      JSON.stringify({ board_id: boardId }),
    );
  }

  leaveBoard(boardId: string) {
    return authPost(
      ServerRoute.LEAVE_BOARD_URL,
      JSON.stringify({ board_id: boardId }),
    );
  }

  getBoardUrl(boardId: string) {
    return authPost(
      ServerRoute.OPEN_BOARD_URL,
      JSON.stringify({ board_id: boardId }),
    );
  }
}

const ACCOUNT_SERVICE = new AccountService();
export default ACCOUNT_SERVICE;
