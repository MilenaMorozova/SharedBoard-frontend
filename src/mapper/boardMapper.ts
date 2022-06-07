/* eslint-disable camelcase */
import Board, { newBoard } from '../entities/board/board';
import BoardType from '../entities/board/board-type';
import BoardColumn from '../entities/board/column';
import TableBoardItem, { newTableBoardItem } from '../entities/board/table-board-item';
import Access from '../entities/user/access';
import { userDtoToUserEntity } from './userMapper';


const AccessArray: Array<Access> = [Access.VIEWER, Access.EDITOR, Access.OWNER];

export function accessNumberToAccessEnum(accessNumber: number): Access {
  return AccessArray[accessNumber];
}

export function accessEnumToAccessNumber(accessEnum: Access): number {
  return AccessArray.indexOf(accessEnum);
}

export function boardDtoToTableBoardEntity(boardDto: {[key: string]: any}): TableBoardItem { // eslint-disable-line  @typescript-eslint/no-explicit-any
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

export function boardInfoDtoToBoardEntity(boardInfoDto: {[key: string]: unknown}): Board {
  const { board_type, link_access, ...commonBoardInfo } = boardInfoDto;

  return {
    ...newBoard(),
    ...commonBoardInfo,
    type: board_type as BoardType,
    linkAccess: accessNumberToAccessEnum(link_access as number),
  };
}

export function columnDtoToColumnEntity(column: BoardColumn): BoardColumn {
  return {
    ...column,
    id: `${column.id}`
  };
}
