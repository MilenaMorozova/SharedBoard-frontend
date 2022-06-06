import BoardColumn from "../../../entities/board/column";
import Note from "../../../entities/note/note";
import HeaderBoardColumn from "./header-column";
import { BoardColumnStyle } from "./style";


function Column(props: {boardColumn: BoardColumn, tasks: Array<Note>}) {
    return (
        <div style={BoardColumnStyle}>            
            <HeaderBoardColumn boardColumn={props.boardColumn} taskCount={0}/>
            {props.tasks}
        </div>
    )
}

export default Column;