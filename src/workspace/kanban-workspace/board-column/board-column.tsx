import React from "react";
import WORKSPACE_CONTROLLER from "../../../controller/WorkspaceController";
import BoardColumn from "../../../entities/board/column";
import Note from "../../../entities/note/note";
import { useAppDispatch } from "../../../store/hooks";
import { updateNote } from "../../workspaceSlice";
import TaskCard from "../task-card/task-card";
import HeaderBoardColumn from "./header-column";
import { BoardColumnStyle } from "./style";


function Column(props: {boardColumn: BoardColumn, tasks: Array<Note>}) {
    const [isDragHover, setDragHover] = React.useState(false);

    const dispatch = useAppDispatch();

    const onDrop = () => {
        if(WORKSPACE_CONTROLLER.dragedTask !== null)
            dispatch(updateNote({...WORKSPACE_CONTROLLER.dragedTask, status: props.boardColumn.id}))
        setDragHover(false);
    }

    return (
        <div 
            style={BoardColumnStyle}
            onDragEnter={()=>{setDragHover(true)}}
            onDragLeave={()=>{setDragHover(false)}}
            onDragOver={(event)=>{event.preventDefault();}}
            onDrop={onDrop}
        >            
            <HeaderBoardColumn boardColumn={props.boardColumn} taskCount={props.tasks.length} hover={isDragHover}/>
            {props.tasks.map(task => <TaskCard key={task.id} note={task} />)}
        </div>
    )
}

export default Column;