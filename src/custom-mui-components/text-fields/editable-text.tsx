import { Input } from '@mui/material';
import { CSSProperties, useState } from 'react';


type EditableTextProps = {
    value: string,
    setValue: (text: string) => void,
    getValue: (text: string) => string, // eslint-disable-line react/require-default-props
    textStyle: CSSProperties,
    width: string,
    multiline?: boolean,
    disabled?: boolean,
    onSave: () => void,
    onStartEdit?: () => void,
}

function EditableText(props: EditableTextProps) {
  const [toggle, setToggle] = useState(true);

  const saveValue = () => {
    setToggle(true);
    props.onSave();
  };

  const getValue = (text: string) => {
    const value = props.getValue(text);
    return value.trim() === '' ? 'None' : value;
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
      {getValue(props.value)}
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
  onStartEdit: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

export default EditableText;
