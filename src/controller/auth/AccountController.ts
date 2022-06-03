import { setBoards, setEmail, setUser, setUsername } from "../../account/accountSlice";
import boardDtoToEntityDto from "../../mapper/boardMapper";
import userDtoToUserEntity from "../../mapper/userMapper";
import ACCOUNT_SERVICE from "../../service/AccountService";
import AUTH_SERVICE from "../../service/AuthService";
import { store } from "../../store/store";

class AccountController {
    downloadUser() {
        ACCOUNT_SERVICE.getUser()
        .then(response => response.json())
        .then(userDtoToUserEntity)
        .then(user => store.dispatch(setUser(user)));        
    }

    downloadBoards() {
        ACCOUNT_SERVICE.getUserBoards()
        .then(response => response.json() as unknown as Array<Object>)
        .then(jsonResponse => jsonResponse.map(boardDtoToEntityDto))
        .then(boards => store.dispatch(setBoards(boards)));
    }

    changeUsername(newUsername: string, password: string) {
        return ACCOUNT_SERVICE.changeUsername(newUsername, password)
        .then(() => store.dispatch(setUsername(newUsername)))
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
}

const ACCOUNT_CONTROLLER = new AccountController();
export default ACCOUNT_CONTROLLER;