import { Component, ReactNode } from 'react';
import { ReactComponent as Logo } from '../media/Logo.svg';
import {
  LogoBlockStyle, SignInPageStyle,
} from './style';


type BaseSignPageProps = {
    signPageActionName: string,
    children: ReactNode,
}

class BaseSignPage extends Component<BaseSignPageProps> {
  render() {
    return (
      <div style={SignInPageStyle}>
        <div style={LogoBlockStyle}>
          <Logo />
          <div>{this.props.signPageActionName} Share Board</div>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default BaseSignPage;
