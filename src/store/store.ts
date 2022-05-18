import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../registration/form/login/loginSlice';
import signUpReducer from '../registration/form/signUp/signUpSlice';
import accountReducer from '../account/accountSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signUp: signUpReducer,
    account: accountReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
