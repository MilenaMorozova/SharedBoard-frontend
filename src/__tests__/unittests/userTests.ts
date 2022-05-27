import Access from '../../entities/user/access';
import { newUser } from '../../entities/user/user';

it('create new user', async () => {
  const user = newUser();
  expect(user.id).toEqual(' ');
  expect(user.color).toEqual(' ');
  expect(user.username).toEqual(' ');
  expect(user.email).toEqual(' ');
  expect(user.access).toEqual(Access.EDITOR);
});

it('get short username', async () => {
  const username = 'Igor';
  const user = {
    ...newUser(),
    username,
  };

  expect(user.username).toEqual(username);
  expect(user.getShortName()).toEqual(username[0]);
});

it('get short email', async () => {
  const email = 'very_big_email_for_my_tests@very_log_domain_name.com';
  const user = {
    ...newUser(),
    email,
  };
  expect(user.email).toEqual(email);
  expect(user.getShortEmail()).toEqual(`${email.slice(0, 35)}...`);
});

it('get short email should return full email', async () => {
  const email = 'small_email@small.com';
  const user = {
    ...newUser(),
    email,
  };
  expect(user.email).toEqual(email);
  expect(user.getShortEmail()).toEqual(email);
});
