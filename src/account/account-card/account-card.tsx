import COLORS from '../../colors';
import Avatar from '../../custom-mui-components/avatar/avatar';
import User from '../../entities/user';
import { useAppSelector } from '../../store/hooks';

function AccountCard() {
  const username = useAppSelector(state => state.account.username);
  const email = useAppSelector(state => state.account.email);

  const user = new User();
  user.color = COLORS.BUTTON_BLUE;
  user.username = 'Mike Wazovskii';

  return (
    <div>
      <Avatar user={user} />
      <span>{username}</span>
    </div>
  );
}

export default AccountCard;
