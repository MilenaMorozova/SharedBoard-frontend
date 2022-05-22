import BoardTitle from './board-title/board-title';
import { AppBarStyle, LeftSideStyle, RightSideStyle, SearchFieldStyle, ShareBoardButtonStyle } from './style';
import BoardType from '../../entities/board-type';
import SearchField from '../../custom-mui-components/text-fields/search-field';
import User from '../../entities/user';
import Avatar from '../../custom-mui-components/avatar/avatar';
import Participants from './participants/participants';
import BoardButton from '../../custom-mui-components/button/button';


type WorkspaceAppBarProps = {
    boardType?: BoardType,
    placeholder: string,
    search?: (text: string) => void,
}

function WorkspaceAppBar(props: WorkspaceAppBarProps) {
  const mockUser = new User();
  mockUser.color = 'red';
  mockUser.username = 'Milena';

  return (
    <div style={AppBarStyle}>
      <div style={LeftSideStyle}>
        <BoardTitle boardType={BoardType.NOTES} />
        <SearchField search={() => {}} sx={SearchFieldStyle} placeholder={props.placeholder} />
      </div>
      <div style={RightSideStyle}>
        <Participants />
        <BoardButton variant='contained' fullWidth={false} sx={ShareBoardButtonStyle}> SHARE BOARD </BoardButton>
        <Avatar user={mockUser}/>
      </div>
    </div>
  );
}

export default WorkspaceAppBar;
