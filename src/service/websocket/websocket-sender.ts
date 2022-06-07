import Board from '../../entities/board/board';
import BoardColumn from '../../entities/board/column';
import Note from '../../entities/note/note';
import Access from '../../entities/user/access';
import { accessEnumToAccessNumber } from '../../mapper/boardMapper';
import { noteEntityToNoteDto } from '../../mapper/noteMapper';
import WEBSOCKET_CONNECTION from './websocket-connection';


export function changeLinkAccess(access: Access) {
  const newAccess = accessEnumToAccessNumber(access);
  WEBSOCKET_CONNECTION.send({
    type: 'change_link_access',
    new_access: newAccess,
  });
}

export function getAllUsers() {
  WEBSOCKET_CONNECTION.send({
    type: 'all_users',
  });
}

export function getAllActiveUsers() {
  WEBSOCKET_CONNECTION.send({
    type: 'active_users',
  });
}

export function changeUserAccess(userId: string, newAccess: Access) {
  const accesssNumber = accessEnumToAccessNumber(newAccess);
  WEBSOCKET_CONNECTION.send({
    type: 'change_user_access',
    another_user_id: userId,
    new_access: accesssNumber,
  });
}

export function changeBoardName(newBoardName: string) {
  WEBSOCKET_CONNECTION.send({
    type: 'change_board_config',
    config: {
      name: newBoardName,
    },
  });
}

export function createNote(status: string | null = null) {
  WEBSOCKET_CONNECTION.send({
    type: 'create_node',
    status: status
  });
}

export function getAllNotes() {
  WEBSOCKET_CONNECTION.send({
    type: 'board_nodes',
  });
}

const blockMap: Map<string, number> = new Map();

export function disableNoteForOthers(noteId: string) {
  if (!blockMap.has(noteId)) {
    blockMap.set(noteId, 1);
  } else {
    blockMap.set(noteId, blockMap.get(noteId)! + 1);
  }
  if (blockMap.get(noteId) === 1) {
    WEBSOCKET_CONNECTION.send({
      type: 'start_changing_node',
      node_id: noteId,
    });
  }
}

export function enableNoteForOthers(noteId: string) {
  if (blockMap.has(noteId)) {
    blockMap.set(noteId, blockMap.get(noteId)! - 1);
  } else {
    throw Error('Note is not blocked!');
  }
  if (blockMap.get(noteId) === 0) {
    WEBSOCKET_CONNECTION.send({
      type: 'stop_changing_node',
      node_id: noteId,
    });
  }
}

export function removeNote(noteId: string) {
  WEBSOCKET_CONNECTION.send({
    type: 'delete_node',
    node_id: noteId,
  });
}

export function changeNote(changedNote: Note) {
  const nodeDto = noteEntityToNoteDto(changedNote);
  WEBSOCKET_CONNECTION.send({
    type: 'changing_node',
    node: nodeDto,
  });
}

export function getColumnsInfo() {
  WEBSOCKET_CONNECTION.send({
    type: 'columns_info',
  });
}

export function createColumn(position: number) {
  WEBSOCKET_CONNECTION.send({
    type: 'create_column',
    position
  });
}

export function removeColumn(columnId: string) {
  WEBSOCKET_CONNECTION.send({
    type: 'delete_column',
    column_id: columnId
  });
}

export function changingColumn(column: BoardColumn) {
  WEBSOCKET_CONNECTION.send({
    type: 'changing_column',
    column
  });
}