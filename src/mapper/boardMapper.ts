import BoardType from '../entities/board/board-type';
import TableBoardItem, { newTableBoardItem } from '../entities/board/table-board-item';
import Access from '../entities/user/access';
import userDtoToUserEntity from './userMapper';


const AccessMap: {[key: number]: Access} = {
  0: Access.VIEWER,
  1: Access.EDITOR,
  2: Access.OWNER,
};

function accessNumberToAccessEnum(accessNumber: number): Access {
  return AccessMap[accessNumber];
}

function boardDtoToTableBoardEntity(boardDto: {[key: string]: any}): TableBoardItem { // eslint-disable-line  @typescript-eslint/no-explicit-any
  const { board, access, owner } = boardDto;
  const {
    board_type, created, updated, ...commonBoard // eslint-disable-line camelcase
  } = board as {[key: string]: string};

  return {
    ...newTableBoardItem(),
    ...commonBoard,
    type: board_type as BoardType, // eslint-disable-line camelcase
    createdDate: new Date(created),
    updatedDate: new Date(updated),
    currentUserAccess: accessNumberToAccessEnum(access as unknown as number),
    owner: userDtoToUserEntity(owner as {[key: string]: string}),
  };
}


export default boardDtoToTableBoardEntity;
