import React, { Component, Fragment } from 'react';

import { CurrentComponent, EnteringComponent } from './animatedSwitchStyles';

const routeAnimations = {
  '/': {
    enter: 'fadeIn',
    exit: 'fadeOut',
  },
  '/projects':  {
    enter: 'fromLeft',
    exit: 'toLeft',
  },
  '/services': {
    enter: 'fromRight',
    exit: 'toRight',
  },
};

export class AnimatedSwitch extends Component {
  state = {
    animating: false,
    currentComponent: this.props.children,
    enteringComponent: null,
    enterAnimation: null,
    exitAnimation: routeAnimations[this.props.location.pathname].exit,
  };

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (pathname !== prevProps.location.pathname) {
      const enterAnimation = routeAnimations[pathname].enter;
      const exitAnimation = routeAnimations[prevProps.location.pathname].exit;

      this.setState({
        enteringComponent: this.props.children,
        currentComponent: prevProps.children,
        enterAnimation,
        exitAnimation,
      }, () => this.setState({ animating: true }));
    }
  }

  handleTransitionEnd = () => (
    this.setState((state) => ({
      animating: false,
      currentComponent: state.enteringComponent,
      enteringComponent: null,
      enterAnimation: null,
      exitAnimation: routeAnimations[this.props.location.pathname].exit,
    }))
  );

  render() {
    return (
      <Fragment>
        <CurrentComponent
          animating={this.state.animating}
          animation={this.state.exitAnimation}
        >
          {this.state.currentComponent}
        </CurrentComponent>
        {this.state.enteringComponent && (
          <EnteringComponent
            animating={this.state.animating}
            animation={this.state.enterAnimation}
            onTransitionEnd={this.handleTransitionEnd}
          >
            {this.state.enteringComponent}
          </EnteringComponent>
        )}
      </Fragment>
    );
  }
}
