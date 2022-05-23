import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Board from '../entities/board/board';
import User from '../entities/user/user';
import { RootState } from '../store/store';

interface WorkspaceState {
  board: Board,
  currentUser: User,
  participants: Array<User>,
}

let b = new Board();
b.name = 'Untitled';

const initialState: WorkspaceState = {
  board: b,
  currentUser: new User(),
  participants: [],
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
  },
});

export const { setUser, setParticipants, setBoardName } = WorkspaceSlice.actions;

export const selectCurrentUser = (state: RootState) => state.workspace.currentUser;
export const selectParticipants = (state: RootState) => state.workspace.participants;
export const selectBoard = (state: RootState) => state.workspace.board;

export default WorkspaceSlice.reducer;
