import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';

interface LoginState {
  errorText: string|null
}

const initialState: LoginState = {
  errorText: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setErrorText: (state: LoginState, action: PayloadAction<string|null>) => {
      state.errorText = action.payload;
    },
  },
});

export const { setErrorText } = loginSlice.actions;

export const selectCount = (state: RootState) => state.login.errorText;

export default loginSlice.reducer;
