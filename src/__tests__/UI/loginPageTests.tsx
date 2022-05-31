import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../../registration/login-page';

let container: HTMLDivElement | null = null;
const mockStore = configureStore();

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container !== null) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});


it('login page render correctly', () => {
  act(() => {
    render(
      <Provider store={mockStore({ login: { errorText: '' } })}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>,
      container,
    );
  });

  expect(document.getElementById('BaseSignPage_div')).toBeTruthy();
  expect(document.getElementById('SignUp_pageReference')).toBeTruthy();

  expect(document.getElementById('Login_form')).toBeTruthy();
  expect(document.getElementById('Login_BoardTextField_username')).toBeTruthy();
  expect(document.getElementById('Login_BoardPasswordTextField')).toBeTruthy();
  expect(document.getElementById('Login_Reference_forgotPassword')).toBeTruthy();
  expect(document.getElementById('Login_BoardButton_login')).toBeTruthy();
});
