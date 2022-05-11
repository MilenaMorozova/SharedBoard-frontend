import COLORS from '../../colors';
import Avatar from '../../custom-mui-components/avatar/avatar';
import User from '../../entities/user';
import { useAppSelector } from '../../store/hooks';

function AccountCard() {
  const username = useAppSelector(state => state.account.username);
  const password = useAppSelector(state => state.account.password);
  const email = useAppSelector(state => state.account.email);

  const user = new User();
  user.color = COLORS.BUTTON_BLUE;
  user.username = 'Mike Wazovskii';

  return (
    <Avatar user={user} />
  );
}

export default AccountCard;
