import { setBoards, setUser } from "../../account/accountSlice";
import boardDtoToEntityDto from "../../mapper/boardMapper";
import userDtoToUserEntity from "../../mapper/userMapper";
import ACCOUNT_SERVICE from "../../service/AccountService";
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
}

const ACCOUNT_CONTROLLER = new AccountController();
export default ACCOUNT_CONTROLLER;