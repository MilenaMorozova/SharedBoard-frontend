import { accessNumberToAccessEnum, boardInfoDtoToBoardEntity } from "../../mapper/boardMapper";
import { noteDtoToNoteEntity } from "../../mapper/noteMapper";
import { boardUserDtoToUserEntity } from "../../mapper/userMapper";
import { store } from "../../store/store";
import { addActiveUser, addNote, deleteSelectedNote, removeActiveUser, 
    setActiveCollaborators, setBoard, setCollaborators, 
    setNotes, setUser, updateNote, updateUser } from "../../workspace/workspaceSlice";
import WEBSOCKET_CONNECTION from "./websocket-connection";


type PayloadType = {[key: string]: any};

// On start connection
function channelName({channel_name}: {channel_name: string}) {
    WEBSOCKET_CONNECTION.channelName = channel_name;
}

function boardInfo({board}: {board: PayloadType}) {
    let boardInfo = boardInfoDtoToBoardEntity(board);
    store.dispatch(setBoard(boardInfo));
}

function currentUserInfo({user}: {user: any}) {
    let currentUser = boardUserDtoToUserEntity(user);
    store.dispatch(setUser(currentUser));
}

function changeLinkAccess({new_access}: {new_access: number}) {
    const linkAccess = accessNumberToAccessEnum(new_access);
    store.dispatch(setBoard({...store.getState().workspace.board, linkAccess}));
}

function getAllUsers({users}: {users: any}) {
    const allUsers = users.map(boardUserDtoToUserEntity);
    store.dispatch(setCollaborators(allUsers));
}

function getActiveUsers({users}: {users: any}) {
    const activeUsers = users.map(boardUserDtoToUserEntity);
    store.dispatch(setActiveCollaborators(activeUsers));
}

function newActiveUser({user}: {user: any}) {
    let newUser = boardUserDtoToUserEntity(user);
    store.dispatch(addActiveUser(newUser));
}

function remActiveUser({user_id}: {user_id: string}) {
    store.dispatch(removeActiveUser(user_id));
}

function changeUserAccess({user}: {user: any}) {
    let changedUser = boardUserDtoToUserEntity(user);
    store.dispatch(updateUser(changedUser));
}

function newNote({node}: {node: PayloadType}) {
    const newNote = noteDtoToNoteEntity(node);
    store.dispatch(addNote(newNote));
}

function boardNodes({nodes}: {nodes: Array<PayloadType>}) {
    const boardNotes = nodes.map(note => noteDtoToNoteEntity(note));
    store.dispatch(setNotes(boardNotes))
}

function getRemovedNote({node_id}: {node_id: string}) {
    store.dispatch(deleteSelectedNote(node_id));
}

function getNoteChanges({node}: {node: PayloadType}) {
    const updatedNote = noteDtoToNoteEntity(node);
    store.dispatch(updateNote(updatedNote));
}

const MESSAGE_TYPES: {[key: string]: (body: any) => void} = {
    "channel_name": channelName,
    "board_info": boardInfo,
    "current_user": currentUserInfo,
    "change_link_access": changeLinkAccess,
    "all_users": getAllUsers,
    "active_users": getActiveUsers,
    "new_user": newActiveUser,
    "delete_user": remActiveUser,
    "change_user_access": changeUserAccess,
    "change_board_config": boardInfo,
    "node_created": newNote,
    "node_deleted": getRemovedNote,
    "node_changed": getNoteChanges,

    "board_nodes": boardNodes,
}

export default function receive({type, ...data}: {type: string, data: PayloadType}) {
    if (type in MESSAGE_TYPES) {
        MESSAGE_TYPES[type](data);
    }
}