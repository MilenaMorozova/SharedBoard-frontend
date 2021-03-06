
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from 'react-router-dom';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import LoginPage from './registration/login-page';
import SignUpPage from './registration/sign-up-page';
import ROUTE from './routers/routers';
import AccountPage from './account/account-page';
import Workspace from './workspace/workspace';
import EmailActivatePage from './registration/email-activaion-page';
import BoardSnackbarProvider from './custom-mui-components/snackbar/snack-provider';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardSnackbarProvider>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate replace to={ROUTE.LOGIN} />} />
                <Route path={ROUTE.LOGIN} element={<LoginPage />} />
                <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
                <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
                <Route path={ROUTE.WORKSPACE}>
                  <Route path=":board_id" element={<Workspace />} />
                </Route>
                <Route path={ROUTE.ACTIVATION} element={<EmailActivatePage />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        </BoardSnackbarProvider>
      </div>
    );
  }
}

export default App;
