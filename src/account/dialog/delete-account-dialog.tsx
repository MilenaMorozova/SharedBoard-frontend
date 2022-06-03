import DraggableDialog from '../../custom-mui-components/dialog/dialog';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import TextButton from '../../custom-mui-components/button/text-button/text-button';
import BoardPasswordTextField from '../../custom-mui-components/text-fields/password-text-field';
import { ContentTextStyle, TextFieldStyle } from './style';
import { useState } from 'react';
import ACCOUNT_CONTROLLER from '../../controller/auth/AccountController';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import ROUTE from '../../routers/routers';


type DeleteAccountDialogProps = {
    open: boolean,
    onClose: () => void,
}

function DeleteAccountDialog(props: DeleteAccountDialogProps) {
    const [password, setPassword] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const onClick = () => {
        ACCOUNT_CONTROLLER.deleteAccount(password)
        .then(() => navigate(ROUTE.SIGN_UP))
        .catch(error => { enqueueSnackbar({ 
                text: error.message, 
                type: 'error' 
            })
        });
    }

    function ActionPanel() {
        return (
            <>
                <TextButton fullWidth={false} onClick={props.onClose}>CANCEL</TextButton>
                <TextButton fullWidth={false} onClick={onClick}>CHANGE</TextButton>
            </>
        );
    }

    return (
        <DraggableDialog
            titleIcon={<PersonRemoveOutlinedIcon />}
            title="Delete account"
            actionPanel={<ActionPanel />}
            open={props.open}
            onClose={props.onClose}
        >
            <div style={ContentTextStyle}>
                Are you sure you want to delete your account?
            </div>
            <BoardPasswordTextField
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                sx={TextFieldStyle} 
            />
        </DraggableDialog>
    );
}

export default DeleteAccountDialog;