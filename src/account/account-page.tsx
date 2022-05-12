import AccountCard from './account-card/account-card';
import { AccountCardLocationStyle, AccountPageStyle } from './style';


function AccountPage() {
  return (
    <div style={AccountPageStyle}>
      <div style={AccountCardLocationStyle}>
        <AccountCard />
      </div>
    </div>
  );
}

export default AccountPage;
