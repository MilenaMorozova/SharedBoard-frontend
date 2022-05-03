import { Component } from 'react';
import { pageReferenceStyle, questionStyle } from './style';

type PageReferenceProps = {
  preamble: string,
  pageAction: string,
  href: string
}

class PageReference extends Component<PageReferenceProps> {
  render() {
    return (
      <div style={questionStyle}>
        {this.props.preamble}
        {' '}
        <a href={this.props.href} style={pageReferenceStyle}>
          {this.props.pageAction}
        </a>
      </div>
    );
  }
}

export default PageReference;
