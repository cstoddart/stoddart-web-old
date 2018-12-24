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
  AppContainer,
  GlobalStyles,
  AppContent,
} from './appStyles';

export const App = () => (
  <AppContainer>
    <GlobalStyles />
    <Particles />
    <BrowserRouter>
      <Fragment>
        <Navigation />
        <AppContent>
          <Route render={({ location, history }) => (
            <AnimatedSwitch location={location} history={history}>
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
  </AppContainer>
);
