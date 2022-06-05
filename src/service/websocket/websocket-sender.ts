import Access from "../../entities/user/access";
import { accessEnumToAccessNumber } from "../../mapper/boardMapper";
import WEBSOCKET_CONNECTION from "./websocket-connection";


export function changeLinkAccess(access: Access) {
    const newAccess = accessEnumToAccessNumber(access);
    WEBSOCKET_CONNECTION.send({
        "type": "change_link_access", 
        "new_access": newAccess,
    });
}

export function getAllUsers() {
    WEBSOCKET_CONNECTION.send({
        "type": "all_users",
    })
}

export function getAllActiveUsers() {
    WEBSOCKET_CONNECTION.send({
        "type": "active_users",
    })
}

export function changeUserAccess(userId: string, newAccess: Access) {
    const accesssNumber = accessEnumToAccessNumber(newAccess);
    WEBSOCKET_CONNECTION.send({
        "type": "change_user_access",
        "another_user_id": userId,
        "new_access": accesssNumber,
    })
}