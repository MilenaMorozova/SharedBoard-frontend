import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Board from '../entities/board';
import User from '../entities/user';
import { RootState } from '../store/store';

interface AccountState {
  user: User,
  boards: Array<Board>,
}

const initialState: AccountState = {
  user: new User(),
  boards: [],
};

export const AccountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setUser: (state: AccountState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUsername: (state: AccountState, action: PayloadAction<string>) => {
      let copiedUser = state.user.copy();
      copiedUser.username = action.payload;
      state.user = copiedUser;
    },
    setEmail: (state: AccountState, action: PayloadAction<string>) => {
      let copiedUser = state.user.copy();
      copiedUser.email = action.payload;
      state.user = copiedUser;
    },
    setBoards: (state: AccountState, action: PayloadAction<Array<Board>>) => {
      state.boards = action.payload;
    },
  },
});

export const {
  setUsername, setEmail, setUser, setBoards,
} = AccountSlice.actions;

export const selectUser = (state: RootState) => state.account.user;

export default AccountSlice.reducer;
