import { ServerRoute } from "../routers/serverRouters";
import { authDeleteRequest, authGet, authPatch, authPost, post } from "./requestTemplate";

class AccountService{
  getUser() {
    return authGet(ServerRoute.GET_USER_URL);
  }

  getUserBoards() {
    return authGet(ServerRoute.GET_MY_BOARDS_URL);
  }

  changeUsername(newUsername: string, password: string) {
    return authPost(
      ServerRoute.CHANGE_USERNAME_URL, 
      JSON.stringify({new_username: newUsername, current_password: password})
    );
  }

  changeEmail(newEmail: string) {
    return authPatch(
      ServerRoute.GET_USER_URL, 
      JSON.stringify({email: newEmail})
    );
  }

  changePassword(newPassword: string, reNewPassword: string, currentPassword: string) {
    return authPost(
      ServerRoute.CHANGE_PASSWOD_URL, 
      JSON.stringify({
        new_password: newPassword, 
        re_new_password: reNewPassword, 
        current_password: currentPassword
      })
    );
  }

  deleteAccount(password: string) {
    return authDeleteRequest(
      ServerRoute.GET_USER_URL, 
      JSON.stringify({current_password: password})
    )
  }
}

const ACCOUNT_SERVICE = new AccountService();
export default ACCOUNT_SERVICE;