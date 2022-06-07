import BoardType from "../entities/board/board-type";
import BoardColumn from "../entities/board/column";
import TableBoardItem from "../entities/board/table-board-item";
import Note from "../entities/note/note";
import Access from "../entities/user/access";
import User from "../entities/user/user";
import { boardDtoToTableBoardEntity, columnDtoToColumnEntity } from "../mapper/boardMapper";
import ACCOUNT_SERVICE from "../service/AccountService";
import { store } from "../store/store";


class WorkspaceController {
    dragedTask: Note | null;
    constructor() {
      this.dragedTask = null;
    }

    setDisableElement(note: Note, currentUser: User): boolean {
        if (currentUser.access === Access.VIEWER) {
          return true;
        }
        if (note.blockedBy === null) {
          return false;
        }
        if (note.blockedBy !== currentUser.id) {
          return true;
        }
        return false;
    }

    getTasksByStatus(notes: Array<Note>, status: string) {
      const result = notes.filter(note => note.status === status);
      return result;
    }

    getUserBords() {
      const currentBoard = store.getState().workspace.board;
      return ACCOUNT_SERVICE.getUserBoards()
      .then(response => response.json() as unknown as Array<{ [key: string]: any; }>) // eslint-disable-line @typescript-eslint/no-explicit-any
      .then(jsonResponse => jsonResponse.map(boardDtoToTableBoardEntity) as Array<TableBoardItem>)
      .then(boards => boards.filter(board => board.id != currentBoard.id))
      .then(boards => boards.filter(board => board.type === BoardType.KANBAN))
    }
    getColumns(board_id: string) {
      return ACCOUNT_SERVICE.getColumns(board_id)
      .then(response => response.json() as unknown as Array<any>) // eslint-disable-line @typescript-eslint/no-explicit-any
      .then(jsonResponse => jsonResponse.map(columnDtoToColumnEntity) as Array<BoardColumn>)
    }
}

const WORKSPACE_CONTROLLER = new WorkspaceController();
export default WORKSPACE_CONTROLLER;
