import { ServerRoute } from "../routers/serverRouters";
import { authGet, post } from "./requestTemplate";

class AccountService{
  getUser() {
    return authGet(ServerRoute.GET_USER_URL);
  }

  getUserBoards() {
    return authGet(ServerRoute.GET_MY_BOARDS_URL);
  }
}

const ACCOUNT_SERVICE = new AccountService();
export default ACCOUNT_SERVICE;