import AccountCard from './account-card/account-card';
import CreateBoardsBlock from './create-board-card/create-board-card';
import { AccountCardLocationStyle, AccountPageStyle, BoardBlockStyle } from './style';


function AccountPage() {
  return (
    <div style={AccountPageStyle}>
      <div style={AccountCardLocationStyle}>
        <AccountCard />
        <div style={BoardBlockStyle}>
          <CreateBoardsBlock />
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
