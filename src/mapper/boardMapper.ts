import BoardType from "../entities/board/board-type";
import TableBoardItem, { newTableBoardItem } from "../entities/board/table-board-item";
import Access from "../entities/user/access";
import userDtoToUserEntity from "./userMapper";


const AccessMap: {[key: number]: Access} = {
    0: Access.VIEWER,
    1: Access.EDITOR,
    2: Access.OWNER,
}

function accessNumberToAccessEnum(accessNumber: number): Access {
    return AccessMap[accessNumber];
}

function boardDtoToTableBoardEntity(boardDto: {[key: string]: any}): TableBoardItem {
    const {board, access, owner} = boardDto;
    const {board_type, created, updated, ...commonBoard} = board as {[key: string]: string};
    
    return {
        ...newTableBoardItem(),
        ...commonBoard,
        type: board_type as BoardType,
        createdDate: new Date(created),
        updatedDate: new Date(updated),
        currentUserAccess: accessNumberToAccessEnum(access as unknown as number),
        owner: userDtoToUserEntity(owner as {[key: string]: string}),
    }
}


export default boardDtoToTableBoardEntity;