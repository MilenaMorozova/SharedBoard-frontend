import BoardColumn from "../../../entities/board/column";
import Note from "../../../entities/note/note";
import TaskCard from "../task-card/task-card";
import HeaderBoardColumn from "./header-column";
import { BoardColumnStyle } from "./style";


function Column(props: {boardColumn: BoardColumn, tasks: Array<Note>}) {
    console.log(props.tasks);
    return (
        <div style={BoardColumnStyle}>            
            <HeaderBoardColumn boardColumn={props.boardColumn} taskCount={props.tasks.length}/>
            {props.tasks.map(task => <TaskCard key={task.id} note={task} />)}
        </div>
    )
}

export default Column;