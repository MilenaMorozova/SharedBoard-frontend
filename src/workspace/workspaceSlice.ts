import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import COLORS from '../colors';
import Board, { newBoard } from '../entities/board/board';
import BoardColumn from '../entities/board/column';
import Note, { newNote } from '../entities/note/note';
import User, { newUser } from '../entities/user/user';
import { RootState } from '../store/store';


interface WorkspaceState {
  board: Board,
  boardColumns: Array<BoardColumn>,
  currentUser: User,
  collaborators: Array<User>,
  activeCollaborators: Array<User>,

  notes: Array<Note>,
  arrows: Map<string, string>,
  searchText: string,
  selectedNotesIds: Set<string>,
}

function createArrowDict(notes: Array<Note>): Map<string, string> {
  let arrowDict = new Map();
  let noteTagSet = new Set(notes.map(note => note.tag));

  notes.forEach(note => {
    if (noteTagSet.has(note.refTag)) {
      arrowDict.set(note.tag, note.refTag);
    }
  });
  return arrowDict;
}

const initialState: WorkspaceState = {
  board: newBoard(),
  boardColumns: [],
  currentUser: newUser(),
  collaborators: [],
  activeCollaborators: [],

  notes: [],
  arrows: new Map(),
  searchText: '',
  selectedNotesIds: new Set(),
};

export const WorkspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setUser: (state: WorkspaceState, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    updateUser: (state: WorkspaceState, { payload }: PayloadAction<User>) => {
      if (state.currentUser.id === payload.id) {
        state.currentUser = payload;
      } else {
        state.collaborators = state.collaborators.map(
          collaborator => (collaborator.id === payload.id ? payload : collaborator),
        );
      }
    },

    setCollaborators: (state: WorkspaceState, action: PayloadAction<Array<User>>) => {
      state.collaborators = action.payload.filter(user => user.id !== state.currentUser.id);
    },
    setActiveCollaborators: (state: WorkspaceState, action: PayloadAction<Array<User>>) => {
      state.activeCollaborators = action.payload.filter(user => user.id !== state.currentUser.id);
    },
    addActiveUser: (state: WorkspaceState, { payload }: PayloadAction<User>) => {
      if (!state.activeCollaborators.includes(payload)) {
        state.activeCollaborators = state.activeCollaborators.concat(payload);
      }
    },
    removeActiveUser: (state: WorkspaceState, { payload }: PayloadAction<string>) => {
      state.activeCollaborators = state.activeCollaborators.filter(user => user.id !== payload);
    },

    setBoard: (state: WorkspaceState, { payload }: PayloadAction<Board>) => {
      state.board = payload;
    },
    setBoardName: (state: WorkspaceState, { payload }: PayloadAction<string>) => {
      state.board = { ...state.board, name: payload };
    },

    setNotes: (state: WorkspaceState, action: PayloadAction<Array<Note>>) => {
      state.notes = action.payload;
      state.arrows = createArrowDict(state.notes);
    },
    updateNote: (state: WorkspaceState, { payload }: PayloadAction<Note>) => {
      let shouldUpdateArrows = false;
      state.notes = state.notes.map((note) => {
        if (note.id !== payload.id) return note;

        if (note.refTag !== payload.refTag) {
          shouldUpdateArrows = true;
        }
        return payload;
      });

      if (shouldUpdateArrows) {
        state.arrows = createArrowDict(state.notes);
      }
    },
    addNote: (state: WorkspaceState, { payload }: PayloadAction<Note>) => {
      state.notes = state.notes.concat(payload);
    },

    updateArrows: (state: WorkspaceState) => {
      state.arrows = createArrowDict(state.notes);
    },
    setSearchText: (state: WorkspaceState, { payload }: PayloadAction<string>) => {
      state.searchText = payload;
    },

    addSelectedNote: (state: WorkspaceState, { payload }: PayloadAction<string>) => {
      state.selectedNotesIds = new Set(state.selectedNotesIds.add(payload));
    },
    deselectSelectedNotes: (state: WorkspaceState) => {
      state.selectedNotesIds = new Set();
    },
    deleteSelectedNote: (state: WorkspaceState, { payload }: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== payload);
      state.arrows = createArrowDict(state.notes);
      if (state.selectedNotesIds.delete(payload)) {
        state.selectedNotesIds = new Set(state.selectedNotesIds);
      }
    },
    setColumns: (state: WorkspaceState, { payload }: PayloadAction<Array<BoardColumn>>) => {
      state.boardColumns = payload.sort((column1, column2) => column1.position - column2.position);
    },
  },
});

export const {
  setUser, updateUser,
  setCollaborators, setActiveCollaborators, addActiveUser, removeActiveUser,
  setBoard, setBoardName,
  updateNote, setNotes, addNote, addSelectedNote, deselectSelectedNotes, deleteSelectedNote,
  updateArrows,
  setSearchText,
  setColumns
} = WorkspaceSlice.actions;

export const selectCurrentUser = (state: RootState) => state.workspace.currentUser;
export const selectCollaborators = (state: RootState) => state.workspace.collaborators;
export const selectActiveCollaborators = (state: RootState) => state.workspace.activeCollaborators;
export const selectBoard = (state: RootState) => state.workspace.board;
export const selectBoardColumns = (state: RootState) => state.workspace.boardColumns;
export const selectNotes = (state: RootState) => state.workspace.notes;
export const selectSelectedNotes = (state: RootState) => state.workspace.selectedNotesIds;
export const selectArrows = (state: RootState) => state.workspace.arrows;
export const selectSearchText = (state: RootState) => state.workspace.searchText;

export default WorkspaceSlice.reducer;
