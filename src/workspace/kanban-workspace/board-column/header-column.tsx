import { ActionIconButton } from "../../../custom-mui-components/action-panel/action-panel";
import { AddTaskIconButtonStyle, ColumnNameWithBadgeStyle, HeaderColumnStyle, TaskCounterBadgeStyle, TooltipStyle } from "./style";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BoardColumn from "../../../entities/board/column";
import { Tooltip } from "@mui/material";
import BoardColumnActionPanel from "./action-panel";


function TaskCounterBadge(props: {count: number}) {
    return (
        <div style={TaskCounterBadgeStyle}>
            {props.count}
        </div>
    )
}

function HeaderBoardColumn(props: {boardColumn: BoardColumn, taskCount: number}) {
    return (
        <Tooltip 
            title={<BoardColumnActionPanel/>} 
            placement="top-end" 
            componentsProps={{tooltip: {sx: TooltipStyle}}}
        >
            <div style={HeaderColumnStyle}>
                <div style={ColumnNameWithBadgeStyle}>
                    <span>{props.boardColumn.name}</span>
                    <TaskCounterBadge count={props.taskCount}/>
                </div>
                <ActionIconButton 
                    icon={<AddOutlinedIcon sx={AddTaskIconButtonStyle}/>} 
                    onClick={() => {}}                
                />
            </div>
        </Tooltip>
    )
}

export default HeaderBoardColumn;