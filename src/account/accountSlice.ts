import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../entities/user';
import { RootState } from '../store/store';

interface AccountState {
  user: User,
}

const initialState: AccountState = {
  user: new User(),
};

export const AccountSlice = createSlice({
  name: 'Account',
  initialState,
  reducers: {
    setUser: (state: AccountState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUsername: (state: AccountState, action: PayloadAction<string>) => {
      state.user.username = action.payload;
    },
    setEmail: (state: AccountState, action: PayloadAction<string>) => {
      state.user.email = action.payload;
    },
  },
});

export const { setUsername, setEmail } = AccountSlice.actions;

export const selectUser = (state: RootState) => state.account.user;

export default AccountSlice.reducer;
