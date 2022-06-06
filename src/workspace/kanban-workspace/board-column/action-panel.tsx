import { ActionIconButton } from "../../../custom-mui-components/action-panel/action-panel";
import { ColumnActionPanelStyle } from "./style";
import { ReactComponent as AddColumnIcon } from '../../../media/column-plus.svg';
import { ReactComponent as AddColumnAfterIcon } from '../../../media/column-plus-after.svg';
import { ReactComponent as RemoveColumnIcon } from '../../../media/column-remove.svg';


function BoardColumnActionPanel() {
    return (
        <span style={ColumnActionPanelStyle}>
            <ActionIconButton
                icon={<AddColumnIcon/>}
                onClick={() => {}}
            />
            <ActionIconButton
                icon={<AddColumnAfterIcon/>}
                onClick={() => {}}
            />
            <ActionIconButton
                icon={<RemoveColumnIcon/>}
                onClick={() => {}}
            />
        </span>
    )
}

export default BoardColumnActionPanel;