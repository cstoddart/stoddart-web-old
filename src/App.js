import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/home/Home';
import { Projects } from './components/projects/Projects';
import { Services } from './components/services/Services';
import {
  Particles,
  Navigation,
  AnimatedSwitch,
  Footer,
} from './components/ui';
import {
  GlobalStyles,
  AppContent,
} from './appStyles';

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Particles />
    <BrowserRouter>
      <Fragment>
        <Navigation />
        <AppContent>
          <Route render={({ location }) => (
            <AnimatedSwitch location={location}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/services" component={Services} />
              </Switch>
            </AnimatedSwitch>
          )}/>
        </AppContent>
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Fragment>
);