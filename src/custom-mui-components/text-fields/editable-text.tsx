import { Input } from '@mui/material';
import { CSSProperties, useState } from 'react';
import { changeNote } from '../../service/websocket/websocket-sender';
import { store } from '../../store/store';


type EditableTextProps = {
    value: string,
    setValue: (text: string) => void,
    getValue: (text: string) => string, // eslint-disable-line react/require-default-props
    textStyle: CSSProperties,
    width: string,
    multiline?: boolean,
    disabled?: boolean,
    onSave: () => void,
    onStartEdit: () => void,
}

function EditableText(props: EditableTextProps) {
  const [toggle, setToggle] = useState(true);

  const saveValue = () => {
    setToggle(true);
    props.onSave();
  };

  return toggle ? (
    <span
      style={{ ...props.textStyle, width: props.width, wordBreak: 'break-all' }}
      onDoubleClick={(event) => {
        if (!props.disabled) {
          setToggle(false);
          props.onStartEdit();
        }
        event.stopPropagation();
      }}
    >
      {props.getValue(props.value)}
    </span>
  ) : (
    <Input
      disableUnderline
      type="text"
      value={props.value}
      sx={{ ...props.textStyle, width: props.width }}
      onChange={(event) => {
        props.setValue(event.target.value);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === 'Escape') {
          saveValue();
          event.preventDefault();
          event.stopPropagation();
        }
      }}
      multiline={props.multiline}
      onBlur={saveValue}
    />
  );
}

EditableText.defaultProps = {
  getValue: (text: string) => text,
  multiline: false,
  disabled: false,
  onStartEdit: () => {},
};

export default EditableText;
