import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Container, StyledPageLink } from './pageLinkStyles';

class PageLinkClass extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.keyboardShortcuts);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardShortcuts);
  }

  keyboardShortcuts = (event) => {
    if (event.code === 'ArrowLeft' && this.props.left) {
      return this.props.history.push(this.props.to);
    }
    if (event.code === 'ArrowRight' && this.props.right) {
      return this.props.history.push(this.props.to);
    }
  }

  render() {
    return (
      <Container
        left={this.props.left ? 1 : 0}
        right={this.props.right ? 1 : 0}
      >
        <StyledPageLink
          to={this.props.to}
          left={this.props.left ? 1 : 0}
          right={this.props.right ? 1 : 0}
        >
          {this.props.children}
        </StyledPageLink>
      </Container>
    );
  }
}

export const PageLink = withRouter(PageLinkClass);
