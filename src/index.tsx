import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignInPage from './registration/sign-in-page';

ReactDOM.render(
  <React.StrictMode>
    <SignInPage />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
