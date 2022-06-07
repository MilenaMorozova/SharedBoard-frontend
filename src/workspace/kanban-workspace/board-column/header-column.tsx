import { ActionIconButton } from "../../../custom-mui-components/action-panel/action-panel";
import { AddTaskIconButtonStyle, ColumnNameWithBadgeStyle, HeaderColumnStyle, HeaderColumnStyleOnHover, TaskCounterBadgeStyle, TooltipStyle } from "./style";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import BoardColumn from "../../../entities/board/column";
import { Tooltip } from "@mui/material";
import BoardColumnActionPanel from "./action-panel";
import { changingColumn, createNote } from "../../../service/websocket/websocket-sender";
import EditableText from "../../../custom-mui-components/text-fields/editable-text";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../store/hooks";
import { updateColumn } from "../../workspaceSlice";


function TaskCounterBadge(props: {count: number}) {
    return (
        <div style={TaskCounterBadgeStyle}>
            {props.count}
        </div>
    )
}

function HeaderBoardColumn(props: {boardColumn: BoardColumn, taskCount: number, hover: boolean}) {

    const dispatch = useAppDispatch();

    const getHeaderStyle = () => {
        return {
            ...HeaderColumnStyle, 
            ...((props.hover) ? HeaderColumnStyleOnHover : {})
        }
    }

    const onSaveName = () => {
        changingColumn(props.boardColumn)
    }

    return (
        <Tooltip 
            title={<BoardColumnActionPanel boardColumn={props.boardColumn}/>} 
            placement="top-end" 
            componentsProps={{tooltip: {sx: TooltipStyle}}}
        >
            <div style={getHeaderStyle()}>
                <div style={ColumnNameWithBadgeStyle}>
                    <EditableText 
                    width={"100%"} 
                    value={props.boardColumn.name} 
                    textStyle={{}}
                    onSave={onSaveName}
                    setValue={value => dispatch(updateColumn({...props.boardColumn, name: value})) } 
                    />
                    <TaskCounterBadge count={props.taskCount}/>
                </div>
                <ActionIconButton 
                    icon={<AddOutlinedIcon sx={AddTaskIconButtonStyle}/>} 
                    onClick={() => {
                        createNote(props.boardColumn.id)
                    }}                
                />
            </div>
        </Tooltip>
    )
}

export default HeaderBoardColumn;