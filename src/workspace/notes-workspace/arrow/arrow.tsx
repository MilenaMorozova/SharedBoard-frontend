import Xarrow, { xarrowPropsType } from 'react-xarrows';
import COLORS from '../../../colors';
import ArrowHeadStyle from './style';


function Arrow(props: xarrowPropsType) {
  return (
    <Xarrow
      {...props}
      strokeWidth={3}
      color={COLORS.TEXT_DARK_BLUE}
      headShape="circle"
      arrowHeadProps={ArrowHeadStyle}
      endAnchor={[
        { position: 'left', offset: { x: 5 } },
        { position: 'right', offset: { x: -5 } },
        { position: 'top', offset: { y: 5 } },
        { position: 'bottom', offset: { y: -5 } },
      ]}
    />
  );
}

export default Arrow;
