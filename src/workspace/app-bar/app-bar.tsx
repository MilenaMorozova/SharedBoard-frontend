import BoardTitle from './board-title/board-title';
import {
  AppBarStyle, LeftSideStyle, RightSideStyle, SearchFieldStyle, ShareBoardButtonStyle,
} from './style';
import BoardType from '../../entities/board/board-type';
import SearchField from '../../custom-mui-components/text-fields/search-field';
import Avatar from '../../custom-mui-components/avatar/avatar';
import Participants from './participants/participants';
import BoardButton from '../../custom-mui-components/button/button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectCurrentUser, setSearchText } from '../workspaceSlice';


type WorkspaceAppBarProps = {
    boardType: BoardType,
    placeholder: string,
}

function WorkspaceAppBar(props: WorkspaceAppBarProps) {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const onSearch = (text: string) => {
    dispatch(setSearchText(text));
  };

  const onBlurSearchField = () => {
    dispatch(setSearchText(''));
  };

  return (
    <div style={AppBarStyle}>
      <div style={LeftSideStyle}>
        <BoardTitle boardType={props.boardType} />
        <SearchField
          search={onSearch}
          onBlur={onBlurSearchField}
          sx={SearchFieldStyle}
          placeholder={props.placeholder}
        />
      </div>
      <div style={RightSideStyle}>
        <Participants />
        <BoardButton
          variant="contained"
          fullWidth={false}
          sx={ShareBoardButtonStyle}
        > SHARE BOARD
        </BoardButton>
        <Avatar user={currentUser} />
      </div>
    </div>
  );
}

export default WorkspaceAppBar;
