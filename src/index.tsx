import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import LoginPage from './registration/login-page';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
