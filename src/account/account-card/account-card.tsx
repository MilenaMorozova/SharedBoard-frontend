import { useAppSelector } from '../../store/hooks';

function AccountCard() {
  const username = useAppSelector(state => state.account.username);
  const password = useAppSelector(state => state.account.password);
  const email = useAppSelector(state => state.account.email);

  return null;
}
