
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


class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate replace to={ROUTE.ACCOUNT} />} />
              <Route path={ROUTE.LOGIN} element={<LoginPage />} />
              <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
              <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
