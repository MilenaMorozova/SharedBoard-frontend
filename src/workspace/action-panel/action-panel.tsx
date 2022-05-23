import { IconButton } from "@mui/material";
import { ReactNode } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {IconButtonStyle, ActionPanelStyle} from './style'


function ActionPanel() {
    function ActionIconButton(props: {icon: ReactNode}) {
        return (
            <IconButton sx={IconButtonStyle}>
                {props.icon}
            </IconButton>
        );
    }

    return (
        <div style={ActionPanelStyle}>
            <ActionIconButton icon={<AddOutlinedIcon/>}/>
            <ActionIconButton icon={<DeleteOutlinedIcon/>}/>
        </div>
    );
}

export default ActionPanel;
