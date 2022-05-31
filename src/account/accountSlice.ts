import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Board from '../entities/board/board';
import User, { newUser } from '../entities/user/user';
import { RootState } from '../store/store';

interface AccountState {
  user: User,
  boards: Array<Board>,
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
