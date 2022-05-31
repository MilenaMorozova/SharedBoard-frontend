import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { newUser } from '../../entities/user/user';
import AccountPage from '../../account/account-page';

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


it('account page render correctly', () => {
  const store = mockStore({
    account: {
      user: newUser(),
      boards: [],
    },
  });
  act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AccountPage />
        </BrowserRouter>
      </Provider>,
      container,
    );
  });

  expect(document.getElementById('AccountPage')).toBeTruthy();
  expect(document.getElementById('AccountPage_AccountCard')).toBeTruthy();
  expect(document.getElementById('AccountPage_BoardTable')).toBeTruthy();
  expect(document.getElementById('AccountPage_CreateBoardCard')).toBeTruthy();
});
