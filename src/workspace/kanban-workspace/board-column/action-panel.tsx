import { ActionIconButton } from "../../../custom-mui-components/action-panel/action-panel";
import { ColumnActionPanelStyle } from "./style";
import { ReactComponent as AddColumnIcon } from '../../../media/column-plus.svg';
import { ReactComponent as AddColumnAfterIcon } from '../../../media/column-plus-after.svg';
import { ReactComponent as RemoveColumnIcon } from '../../../media/column-remove.svg';
import BoardColumn from "../../../entities/board/column";
import { createColumn, removeColumn } from "../../../service/websocket/websocket-sender";


function BoardColumnActionPanel(props: {boardColumn: BoardColumn}) {
    return (
        <span style={ColumnActionPanelStyle}>
            <ActionIconButton
                icon={<AddColumnIcon/>}
                onClick={() => {
                    createColumn(props.boardColumn.position);
                }}
            />
            <ActionIconButton
                icon={<AddColumnAfterIcon/>}
                onClick={() => {
                    createColumn(props.boardColumn.position + 1);
                }}
            />
            <ActionIconButton
                icon={<RemoveColumnIcon/>}
                onClick={() => {
                    removeColumn(props.boardColumn.id)
                }}
            />
        </span>
    )
}

export default BoardColumnActionPanel;