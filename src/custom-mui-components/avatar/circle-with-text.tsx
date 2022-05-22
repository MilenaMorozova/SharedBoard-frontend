import { CSSProperties } from 'react';
import { CircleStyle, TextStyle } from './style';

type CircleWithTextProps = {
  text: string;
  color: string;
  style?: CSSProperties;
};

function CircleWithText(props: CircleWithTextProps) {
  return (
    <div style={{ ...CircleStyle, background: props.color, ...props.style }}>
      <span style={TextStyle}>{props.text}</span>
    </div>
  );
}

CircleWithText.defaultProps = {
  style: null,
};

export default CircleWithText;
