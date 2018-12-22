import React, { Component } from 'react';

import {
  PageContainer,
  PageLink,
  Row,
  Button,
} from '../ui';
import {
  Container,
  Title,
  Content,
} from './homeStyles';

export class Home extends Component {
  render() {
    return (
      <PageContainer>
        <PageLink to='/projects' left>Projects</PageLink>
        <Container>
          <Content>
            <Title>Bulletproof software engineering<strong>+</strong>squeaky clean design</Title>
            <Row>
              <Button to="/projects" secondary>Check out what I've done</Button>
              <Button to="/services" primary>See what I can do for you</Button>
            </Row>
          </Content>
        </Container>
        <PageLink to='/services' right>Services</PageLink>
      </PageContainer>
    );
  }
}
