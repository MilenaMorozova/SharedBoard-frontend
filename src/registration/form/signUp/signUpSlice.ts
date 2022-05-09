import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';

interface SignUpState {
  usernameErrorText: string|null,
  passwordErrorText: string|null,
  emailErrorText: string|null,
}

const initialState: SignUpState = {
  usernameErrorText: null,
  passwordErrorText: null,
  emailErrorText: null,
};

interface errorsDict {
    [key: string]: string
}

function getErrorText(key: string, dict: errorsDict): string | null {
  return dict[key] || null;
}

export const SignUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setUsernameErrorText: (state: SignUpState, action: PayloadAction<string|null>) => {
      state.usernameErrorText = action.payload;
    },
    setPasswordErrorText: (state: SignUpState, action: PayloadAction<string|null>) => {
      state.passwordErrorText = action.payload;
    },
    setEmailErrorText: (state: SignUpState, action: PayloadAction<string|null>) => {
      state.emailErrorText = action.payload;
    },
    setAllErrorTexts: (state: SignUpState, action: PayloadAction<errorsDict>) => {
      state.usernameErrorText = getErrorText('username', action.payload);
      state.passwordErrorText = getErrorText('password', action.payload);
      state.emailErrorText = getErrorText('email', action.payload);
    },
  },
});

export const {
  setUsernameErrorText, setPasswordErrorText, setEmailErrorText, setAllErrorTexts,
} = SignUpSlice.actions;

export const selectUsernameTextError = (state: RootState) => state.signUp.usernameErrorText;
export const selectPasswordTextError = (state: RootState) => state.signUp.passwordErrorText;
export const selectEmailTextError = (state: RootState) => state.signUp.emailErrorText;

export default SignUpSlice.reducer;
