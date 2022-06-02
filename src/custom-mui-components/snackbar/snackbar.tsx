import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { NotificationStyle, SnakbarErrorStyle, SnakbarSuccessStyle, SnakbarWarningStyle } from './style';
import { ReactNode } from 'react';


const IconStyles: {[key: string] : ReactNode} = {
    "success": <CheckCircleOutlineOutlinedIcon style={SnakbarSuccessStyle} />,
    "error": <CancelOutlinedIcon style={SnakbarErrorStyle} />,
    "warning": <ErrorOutlineOutlinedIcon style={SnakbarWarningStyle} />,
}

function Snackbar(key: string, {text, type}: { text: string, type: string }) {
    return (
        <div id={key} style={NotificationStyle}>
          {IconStyles[type]}
          {text}
        </div>
      );
}

export default Snackbar;