import { newBoard } from '../../entities/board/board';
import BoardType from '../../entities/board/board-type';
import Access from '../../entities/user/access';
import { newUser } from '../../entities/user/user';

it('create new board', async () => {
  const board = newBoard();
  expect(board.id).toEqual('');
  expect(board.name).toEqual('');
  expect(board.type).toEqual(BoardType.NOTES);
  expect(board.participants).toEqual([]);
});

it('get owner of board without owner should return undefined', async () => {
  const board = {
    ...newBoard(),
  };
  expect(board.getOwner()).toBeUndefined();
});

it('get owner of board with owner should return owner', async () => {
  const username = 'Polly';
  const participants = [{ ...newUser(), username, access: Access.OWNER }];
  const board = {
    ...newBoard(),
    participants,
  };

  let owner = board.getOwner();
  expect(owner).toBeDefined();
  expect(owner?.username).toEqual(username);
  expect(owner?.access).toEqual(Access.OWNER);
});
