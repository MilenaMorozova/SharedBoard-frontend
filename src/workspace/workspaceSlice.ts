import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Board, { newBoard } from '../entities/board/board';
import Note from '../entities/note/note';
import User, { newUser } from '../entities/user/user';
import { RootState } from '../store/store';


interface WorkspaceState {
  board: Board,
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
      state.collaborators = state.collaborators.map(
        participant => (participant.id === payload.id ? payload : participant),
      );
    },

    setCollaborators: (state: WorkspaceState, action: PayloadAction<Array<User>>) => {
      state.collaborators = action.payload.filter(user => user.id !== state.currentUser.id);
    },
    setActiveCollaborators: (state: WorkspaceState, action: PayloadAction<Array<User>>) => {
      state.activeCollaborators = action.payload.filter(user => user.id !== state.currentUser.id);
    },

    setBoard: (state: WorkspaceState, {payload}: PayloadAction<Board>) => {
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
      state.notes = state.notes.map((note) => (note.id === payload.id ? payload : note));
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
    deleteSelectedNotes: (state: WorkspaceState) => {
      state.notes = state.notes.filter(note => !state.selectedNotesIds.has(note.id));
      state.arrows = createArrowDict(state.notes);
      state.selectedNotesIds = new Set();
    },
  },
});

export const {
  setUser, setCollaborators, setActiveCollaborators, updateUser, setBoard, setBoardName, updateNote, addNote, updateArrows,
  setSearchText, addSelectedNote, deselectSelectedNotes, deleteSelectedNotes,
} = WorkspaceSlice.actions;

export const selectCurrentUser = (state: RootState) => state.workspace.currentUser;
export const selectCollaborators = (state: RootState) => state.workspace.collaborators;
export const selectActiveCollaborators = (state: RootState) => state.workspace.activeCollaborators;
export const selectBoard = (state: RootState) => state.workspace.board;
export const selectNotes = (state: RootState) => state.workspace.notes;
export const selectSelectedNotes = (state: RootState) => state.workspace.selectedNotesIds;
export const selectArrows = (state: RootState) => state.workspace.arrows;
export const selectSearchText = (state: RootState) => state.workspace.searchText;

export default WorkspaceSlice.reducer;
