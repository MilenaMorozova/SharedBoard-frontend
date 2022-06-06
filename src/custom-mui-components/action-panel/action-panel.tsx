import { IconButton } from '@mui/material';
import { ReactNode } from 'react';
import { IconButtonStyle, ActionPanelStyle } from './style';


export function ActionIconButton(props: {icon: ReactNode, onClick: () => void, disabled?: boolean}) {
  return (
    <IconButton
      sx={IconButtonStyle}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon}
    </IconButton>
  );
}

ActionIconButton.defaultProps = {
  disabled: false,
};

function ActionPanel(props: {children: ReactNode}) {
  return (
    <div
      id="Workspace_AcionPanel"
      style={ActionPanelStyle}
    >
      {props.children}
    </div>
  );
}


export default ActionPanel;