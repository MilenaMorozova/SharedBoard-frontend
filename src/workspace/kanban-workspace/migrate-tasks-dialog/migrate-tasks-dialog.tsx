import DraggableDialog from "../../../custom-mui-components/dialog/dialog";
import MoveUpOutlinedIcon from '@mui/icons-material/MoveUpOutlined';
import TextButton from "../../../custom-mui-components/button/text-button/text-button";
import BoardTextField from "../../../custom-mui-components/text-fields/text-field";
import { ContentTextStyle, TextFieldStyle } from "./style";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import BoardSelect from "../../../custom-mui-components/select/select";
import BoardColumn from "../../../entities/board/column";
import { ColumnsMapStyle, ContentMapStyle } from "../../../custom-mui-components/select/style";
import ACCOUNT_SERVICE from "../../../service/AccountService";
import WORKSPACE_CONTROLLER from "../../../controller/WorkspaceController";
import TableBoardItem from "../../../entities/board/table-board-item";
import { store } from "../../../store/store";
import { migrateBoard } from "../../../service/websocket/websocket-sender";
import ACCOUNT_CONTROLLER from "../../../controller/AccountController";
import AUTH_SERVICE from "../../../service/AuthService";


type MigrateTasksDialogProps = {
    open: boolean,
    onClose: () => void,
}

function MigrateTasksDialog(props: MigrateTasksDialogProps) {
    const [boards, setBoards] = useState([] as Array<TableBoardItem>);
    const [selectedBoard, setSelectedBoard] = useState(null as (TableBoardItem | null));

    const [destinationColumns, setDestinationColumns] = useState([] as Array<BoardColumn>);
    const [selectedColumns, setSelectedColumns] = useState(new Map() as Map<string, BoardColumn>);

    const fromColumns: Array<BoardColumn> = useAppSelector(state => state.workspace.boardColumns);

    const getEmptyMap = () => {
        const map = new Map();
        fromColumns.forEach( column => {
            map.set(column.id, null);
        })
        return map;
    }

    useEffect(()=>{
        WORKSPACE_CONTROLLER.getUserBords()
        .then(response => setBoards(response))
    },[])

    useEffect(()=>{
        if(selectedBoard !== null){
            WORKSPACE_CONTROLLER.getColumns(selectedBoard.id)
            .then(columns => {
                setSelectedColumns(getEmptyMap());
                setDestinationColumns(columns);
            })
        }
    },[selectedBoard])

    const onClick = () => {
        const boardId = selectedBoard?.id!;
        migrateBoard(boardId, selectedColumns)
        ACCOUNT_CONTROLLER.getBoardUrl(boardId).then(
            url => AUTH_SERVICE.openPage(url)
        )
    }

    function ActionPanel() {
        return (
          <>
            <TextButton fullWidth={false} onClick={props.onClose}>CANCEL</TextButton>
            <TextButton fullWidth={false} onClick={onClick}>MIGRATE</TextButton>
          </>
        );
      }

    return (
        <DraggableDialog 
            title={"Migrate tasks"}
            titleIcon={<MoveUpOutlinedIcon/>} 
            actionPanel={<ActionPanel/>} 
            open={props.open} 
            onClose={props.onClose}
        >
            <BoardSelect 
                width="460px"
                value={selectedBoard} 
                possibleValues={boards} 
                getText={(item)=>item.name}
                onChange={setSelectedBoard}/>
            <div style={ContentTextStyle}>
                Columns:
            </div>
            <div style={ContentMapStyle}>
                <div style={ColumnsMapStyle}>
                    <div style={ContentTextStyle}>From</div>
                    {
                        fromColumns.map( column => (
                            <BoardSelect 
                                key={column.id}
                                width="225px"
                                value={column} 
                                getText={(item)=>item.name}
                                possibleValues={[column]} 
                                onChange={() => {}}
                            />
                        ))
                    }
                </div>
                <div style={ColumnsMapStyle}>
                    <div style={ContentTextStyle}>To</div>
                    {
                        fromColumns.map( column => (
                            <BoardSelect 
                                key={column.id}
                                width="225px"
                                value={selectedColumns.get(`${column.id}`)} 
                                getText={(item)=>item.name}
                                possibleValues={destinationColumns} 
                                onChange={(value) => {
                                    selectedColumns.set(`${column.id}`, value)
                                    setSelectedColumns(new Map(selectedColumns));
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        </DraggableDialog>
    )
}

export default MigrateTasksDialog;