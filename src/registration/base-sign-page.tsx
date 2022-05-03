import { Component, ReactNode } from 'react';
import { ReactComponent as Logo } from '../media/Logo.svg';
import {
  LogoBlockStyle, questionStyle, referenceToAnotherActionStyle, SignInPageStyle,
} from './style';


export type BaseSignPageProps = {
    signPageActionName: string,
    question: string,
    referenceToAnotherActionName: string,
    children: ReactNode
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
        <div style={questionStyle}>
          {this.props.question}
          {' '}
          <a href="#1" style={referenceToAnotherActionStyle}>{this.props.referenceToAnotherActionName}</a>
        </div>
      </div>
    );
  }
}

export default BaseSignPage;
