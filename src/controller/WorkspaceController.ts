import Note from "../entities/note/note";
import Access from "../entities/user/access";
import User from "../entities/user/user";


class WorkspaceController {
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
      console.log(notes)
      const result = notes.filter(note => note.status === status);
      return result;
    }
}

const WORKSPACE_CONTROLLER = new WorkspaceController();
export default WORKSPACE_CONTROLLER;
