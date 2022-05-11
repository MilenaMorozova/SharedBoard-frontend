import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface AccountState {
  username: string,
  email: string,
}

const initialState: AccountState = {
  username: '',
  email: '',
};

export const AccountSlice = createSlice({
  name: 'Account',
  initialState,
  reducers: {
    setUsername: (state: AccountState, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state: AccountState, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setUsername, setPassword, setEmail } = AccountSlice.actions;

export const selectUsername = (state: RootState) => state.account.username;
export const selectEmail = (state: RootState) => state.account.email;

export default AccountSlice.reducer;
