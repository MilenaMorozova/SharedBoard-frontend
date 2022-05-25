import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import COLORS from '../colors';
import Board, { newBoard } from '../entities/board/board';
import Note from '../entities/note/note';
import User, { newUser } from '../entities/user/user';
import { RootState } from '../store/store';


interface WorkspaceState {
  board: Board,
  currentUser: User,
  participants: Array<User>,

  notes: Array<Note>,
  arrows: Map<string, string>,
  searchText: string,
  selectedNotesIds: Set<string>,
}

let b = {
  ...newBoard(),
  name: 'Untitled',
};

let mockNote1: Note = {
  id: '1',
  title: 'Create task',
  tag: 'patsvr-56',
  description: 'no description',
  color: COLORS.CHIP_LABEL_PURPLE,
  created: new Date(),
  updated: new Date(),
  posX: 34,
  posY: 34,
  refTag: '',
};

let mockNote2: Note = {
  id: '2',
  title: 'Create task',
  tag: 'patsvr-57',
  description: 'no description',
  color: COLORS.CHIP_LABEL_RED,
  created: new Date(),
  updated: new Date(),
  posX: 66,
  posY: 66,
  refTag: mockNote1.tag,
};

let mockNotes = [mockNote1, mockNote2];

const mockUser = {
  ...newUser(),
  id: '1',
  color: COLORS.CHIP_LABEL_BLUE,
  username: 'Milena',
};

const mockUser2 = {
  ...newUser(),
  id: '1',
  color: COLORS.CHIP_LABEL_RED,
  username: 'Carl',
};

let participants = [mockUser, mockUser2, mockUser, mockUser2, mockUser, mockUser2,
  mockUser, mockUser2, mockUser, mockUser2];

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
  board: b,
  currentUser: newUser(),
  participants,

  notes: mockNotes,
  arrows: createArrowDict(mockNotes),
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
    setParticipants: (state: WorkspaceState, action: PayloadAction<Array<User>>) => {
      state.participants = action.payload;
    },
    updateUser: (state: WorkspaceState, { payload }: PayloadAction<User>) => {
      state.participants = state.participants.map(
        participant => (participant.id === payload.id ? payload : participant),
      );
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
  setUser, setParticipants, updateUser, setBoardName, updateNote, addNote, updateArrows,
  setSearchText, addSelectedNote, deselectSelectedNotes, deleteSelectedNotes,
} = WorkspaceSlice.actions;

export const selectCurrentUser = (state: RootState) => state.workspace.currentUser;
export const selectParticipants = (state: RootState) => state.workspace.participants;
export const selectBoard = (state: RootState) => state.workspace.board;
export const selectNotes = (state: RootState) => state.workspace.notes;
export const selectSelectedNotes = (state: RootState) => state.workspace.selectedNotesIds;
export const selectArrows = (state: RootState) => state.workspace.arrows;
export const selectSearchText = (state: RootState) => state.workspace.searchText;

export default WorkspaceSlice.reducer;
