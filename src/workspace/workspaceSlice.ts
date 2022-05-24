import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import COLORS from '../colors';
import Board from '../entities/board/board';
import Note from '../entities/note/note';
import User from '../entities/user/user';
import { RootState } from '../store/store';


interface WorkspaceState {
  board: Board,
  currentUser: User,
  participants: Array<User>,

  notes: Array<Note>,
  arrows: Map<string, string>,
}

let b = new Board();
b.name = 'Untitled';

let mockNote1: Note = {
  id: '1',
  title: 'Create task',
  tag: 'patsvr-56',
  description: 'no description',
  color: COLORS.CHIP_LABEL_PURPLE,
  created: new Date(),
  updated: new Date(),
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
  refTag: mockNote1.tag,
};


let mockNotes = [mockNote1, mockNote2];

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
  currentUser: new User(),
  participants: [],

  notes: mockNotes,
  arrows: createArrowDict(mockNotes),
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
    setBoardName: (state: WorkspaceState, action: PayloadAction<string>) => {
      let copiedBoard = state.board.copy();
      copiedBoard.name = action.payload;
      state.board = copiedBoard;
    },
    setNotes: (state: WorkspaceState, action: PayloadAction<Array<Note>>) => {
      state.notes = action.payload;
      state.arrows = createArrowDict(state.notes);
    },
    updateNote: (state: WorkspaceState, { payload }: PayloadAction<Note>) => {
      state.notes = state.notes.map((note) => (note.id === payload.id ? payload : note));
    },
    updateArrows: (state: WorkspaceState) => {
      state.arrows = createArrowDict(state.notes);
    },
  },
});

export const {
  setUser, setParticipants, setBoardName, updateNote, updateArrows,
} = WorkspaceSlice.actions;

export const selectCurrentUser = (state: RootState) => state.workspace.currentUser;
export const selectParticipants = (state: RootState) => state.workspace.participants;
export const selectBoard = (state: RootState) => state.workspace.board;
export const selectNotes = (state: RootState) => state.workspace.notes;
export const selectArrows = (state: RootState) => state.workspace.arrows;

export default WorkspaceSlice.reducer;
