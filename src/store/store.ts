import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../registration/form/login/loginSlice';
import signUpReducer from '../registration/form/signUp/signUpSlice';


export const store = configureStore({
  reducer: {
    login: loginReducer,
    signUp: signUpReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
