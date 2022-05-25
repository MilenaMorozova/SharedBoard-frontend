import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import loginReducer from '../registration/form/login/loginSlice';
import signUpReducer from '../registration/form/signUp/signUpSlice';
import accountReducer from '../account/accountSlice';
import workspaceReducer from '../workspace/workspaceSlice';


enableMapSet();

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signUp: signUpReducer,
    account: accountReducer,
    workspace: workspaceReducer,
  },
  devTools: true,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
