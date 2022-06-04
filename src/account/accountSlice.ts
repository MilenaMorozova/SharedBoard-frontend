import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TableBoardItem from '../entities/board/table-board-item';
import User, { newUser } from '../entities/user/user';
import { RootState } from '../store/store';

interface AccountState {
  user: User,
  boards: Array<TableBoardItem>,
}

const initialState: AccountState = {
  user: newUser(),
  boards: [],
};

export const AccountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUser: (state: AccountState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUsername: (state: AccountState, { payload }: PayloadAction<string>) => {
      state.user = { ...state.user, username: payload };
    },
    setEmail: (state: AccountState, { payload }: PayloadAction<string>) => {
      state.user = { ...state.user, email: payload };
    },
    setBoards: (state: AccountState, action: PayloadAction<Array<TableBoardItem>>) => {
      state.boards = action.payload;
    },
  },
});

export const {
  setUsername, setEmail, setUser, setBoards,
} = AccountSlice.actions;

export const selectUser = (state: RootState) => state.account.user;
export const selectBoards = (state: RootState) => state.account.boards;

export default AccountSlice.reducer;
