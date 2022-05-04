import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../registration/form/loginSlice';


export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
