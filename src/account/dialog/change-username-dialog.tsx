import DraggableDialog from "../../custom-mui-components/dialog/dialog";
import BoardTextField from "../../custom-mui-components/text-fields/text-field";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { SecondaryButton } from "../../custom-mui-components/button/secondary/secondary-button";
import { useState } from "react";


function ActionPanel() {
    return (
        <div>
            <SecondaryButton>CANCEL</SecondaryButton>
            <SecondaryButton>CHANGE</SecondaryButton>
        </div>
    );
}

function ChangeUsernameDialog() {
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    }

    return (
        <DraggableDialog 
            titleIcon={<PersonOutlineIcon />}
            title="Change username"
            actionPanel={<ActionPanel />} 
            open={open} 
            onClose={onClose}
        >
            <BoardTextField/>
        </DraggableDialog>
    )
}

export default ChangeUsernameDialog;
