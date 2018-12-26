import React, { Component } from 'react';

import {
  PageContainer,
  PageLink,
  Button,
} from '../ui';
import {
  Container,
  Content,
  Title,
  PlusSign,
  NavigationRow,
} from './homeStyles';

export class Home extends Component {
  render() {
    return (
      <PageContainer>
        <PageLink to='/projects' left>Projects</PageLink>
        <Container>
          <Content>
            <Title>Bulletproof software engineering</Title>
            <PlusSign>+</PlusSign>
            <Title>squeaky clean design</Title>
            <NavigationRow>
              <Button to="/projects" secondary>Check out what I've done</Button>
              <Button to="/services" primary>See what I can do for you</Button>
            </NavigationRow>
          </Content>
        </Container>
        <PageLink to='/services' right>Services</PageLink>
      </PageContainer>
    );
  }
}
