import AccountCard from './account-card/account-card';
import BoardTable from './board-table/board-table';
import CreateBoardsBlock from './create-board-card/create-board-card';
import { AccountCardLocationStyle, AccountPageStyle, BoardBlockStyle } from './style';


function AccountPage() {
  return (
    <div style={AccountPageStyle}>
      <div style={AccountCardLocationStyle}>
        <AccountCard />
        <div style={BoardBlockStyle}>
          <CreateBoardsBlock />
          <BoardTable />
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
