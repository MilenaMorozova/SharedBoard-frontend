import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import SignUpPage from '../../registration/sign-up-page';

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


it('sign up page render correctly', () => {
  act(() => {
    render(
      <Provider store={mockStore({ signUp: { usernameErrorText: '', passwordErrorText: '', emailErrorText: '' } })}>
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>
      </Provider>,
      container,
    );
  });

  expect(document.getElementById('BaseSignPage_div')).toBeTruthy();

  expect(document.getElementById('SignUp_form')).toBeTruthy();
  expect(document.getElementById('SignUp_pageReference')).toBeTruthy();
  expect(document.getElementById('SignUpPage_BoardTextField_username')).toBeTruthy();
  expect(document.getElementById('SignUpPage_BoardTextField_password')).toBeTruthy();
  expect(document.getElementById('SignUpPage_BoardTextField_email')).toBeTruthy();
  expect(document.getElementById('SignUpPage_BoardButton_signUp')).toBeTruthy();
});
