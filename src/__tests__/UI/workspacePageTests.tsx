import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Workspace from '../../workspace/workspace';
import { newBoard } from '../../entities/board/board';
import { newUser } from '../../entities/user/user';

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


it('workspace page render correctly', () => {
  const store = mockStore({
    workspace: {
      notes: [],
      arrows: new Map(),
      board: newBoard(),
      participants: [],
      currentUser: newUser(),
      selectedNotesIds: [],
    },
  });
  act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Workspace />
        </BrowserRouter>
      </Provider>,
      container,
    );
  });

  expect(document.getElementById('Workspace_div')).toBeTruthy();
  expect(document.getElementById('Workspace_AcionPanel')).toBeTruthy();
  expect(document.getElementById('Workspace_AppBar')).toBeTruthy();

  expect(document.getElementById('NotesWorkspace')).toBeTruthy();
});
