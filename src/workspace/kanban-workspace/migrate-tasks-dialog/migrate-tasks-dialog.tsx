import DraggableDialog from "../../../custom-mui-components/dialog/dialog";
import MoveUpOutlinedIcon from '@mui/icons-material/MoveUpOutlined';
import TextButton from "../../../custom-mui-components/button/text-button/text-button";
import BoardTextField from "../../../custom-mui-components/text-fields/text-field";
import { ContentTextStyle, TextFieldStyle } from "./style";
import { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import BoardSelect from "../../../custom-mui-components/select/select";
import BoardColumn from "../../../entities/board/column";
import { ColumnsMapStyle } from "../../../custom-mui-components/select/style";


type MigrateTasksDialogProps = {
    open: boolean,
    onClose: () => void,
}

function MigrateTasksDialog(props: MigrateTasksDialogProps) {
    const [destinationColumns, setDestinationColumns] = useState([]);
    const fromColumns: Array<BoardColumn> = useAppSelector(state => state.workspace.boardColumns);

    const onClick = () => {}

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
                value={""} 
                possibleValues={[]} 
                onChange={() => {}}/>
            <div style={ContentTextStyle}>
                Columns:
            </div>
            <div>
                <div style={ColumnsMapStyle}>
                    <div style={ContentTextStyle}>From</div>
                    {
                        fromColumns.map( column => {
                            <BoardSelect 
                                width="225px"
                                value={column.name} 
                                possibleValues={[column.name]} 
                                onChange={() => {}}
                            />
                        })
                    }
                </div>
                <div style={ColumnsMapStyle}>
                    <div style={ContentTextStyle}>To</div>
                    {
                        fromColumns.map( column => {
                            <BoardSelect 
                                width="225px"
                                value={destinationColumns[0]} 
                                possibleValues={destinationColumns} 
                                onChange={() => {}}
                            />
                        })
                    }
                </div>
            </div>
        </DraggableDialog>
    )
}

export default MigrateTasksDialog;