import React, { Component } from 'react';

import { StyledButton } from './buttonStyles';

export class Button extends Component {
  state = {
    text: this.props.children,
  };

  handleMouseOver = () => {
    this.setState({ text: this.props.hoverText})
  }

  handleMouseOut = () => {
    this.setState({ text: this.props.children })
  }

  render() {
    const {
      children,
      to,
      primary,
      secondary,
      reverse,
      width,
      hoverText,
    } = this.props;

    return (
      <StyledButton
        to={to}
        primary={primary ? 1 : 0}
        secondary={secondary ? 1 : 0}
        reverse={reverse ? 1 : 0}
        width={width}
        onMouseOver={hoverText ? this.handleMouseOver : null}
        onMouseOut={hoverText ? this.handleMouseOut : null}
      >
        {this.state.text}
      </StyledButton>
    );
  }
};
