import { Input } from '@mui/material';
import { CSSProperties, useState } from 'react';


type EditableTextProps = {
    value: string,
    setValue: (text: string) => void,
    textStyle: CSSProperties,
    width: string,
    onSave: () => void,
}

function EditableText(props: EditableTextProps) {
  const [toggle, setToggle] = useState(true);

  const getValue = () => {
    if (props.value.length > 9) {
      return `${props.value.slice(0, 7)}...`;
    }
    return props.value;
  };

  const saveValue = () => {
    setToggle(true);
    props.onSave();
  };

  return toggle ? (
    <span
      style={{ ...props.textStyle, width: props.width }}
      onDoubleClick={() => {
        setToggle(false);
      }}
    >{getValue()}
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
      onBlur={saveValue}
    />
  );
}

export default EditableText;
