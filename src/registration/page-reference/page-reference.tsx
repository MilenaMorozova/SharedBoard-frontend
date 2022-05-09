import { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={this.props.href} style={pageReferenceStyle}>
          {this.props.pageAction}
        </Link>
      </div>
    );
  }
}

export default PageReference;
