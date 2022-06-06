import Note from "../../entities/note/note";
import Access from "../../entities/user/access";
import { accessEnumToAccessNumber } from "../../mapper/boardMapper";
import { noteEntityToNoteDto } from "../../mapper/noteMapper";
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

export function changeBoardName(newBoardName: string) {
    WEBSOCKET_CONNECTION.send({
        "type": "change_board_config",
        "config": {
            "name": newBoardName,
        }
    })
}

export function createNote() {
    WEBSOCKET_CONNECTION.send({
        "type": "create_node",
    })
}

export function getAllNotes() {
    WEBSOCKET_CONNECTION.send({
        "type": "board_nodes",
    })
}

export function disableNoteForOthers(noteId: string) {
    WEBSOCKET_CONNECTION.send({
        "type": "start_changing_node",
        "node_id": noteId
    })
}

export function enableNoteForOthers(noteId: string) {
    WEBSOCKET_CONNECTION.send({
        "type": "stop_changing_node",
        "node_id": noteId
    })
}

export function removeNote(noteId: string) {
    WEBSOCKET_CONNECTION.send({
        "type": "delete_node",
        "node_id": noteId
    })
}

export function changeNote(changedNote: Note) {
    const nodeDto = noteEntityToNoteDto(changedNote);
    WEBSOCKET_CONNECTION.send({
        "type": "changing_node",
        "node": nodeDto,
    })
}