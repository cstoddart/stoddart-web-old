import React, { Component } from 'react';

import {
  PageContainer,
  PageLink,
  Row,
  Button,
} from '../ui';
import { Title, Content } from './homeStyles';

export class Home extends Component {
  render() {
    return (
      <PageContainer>
        <Content>
          <PageLink to='/projects' left>Projects</PageLink>
          <Title>Bulletproof software engineering<br /><strong>+</strong><br />squeaky clean design</Title>
          <PageLink to='/services' right>Services</PageLink>
          <Row>
            <Button to="/projects" secondary>Check out what I've done</Button>
            <Button to="/services" primary>See what I can do for you</Button>
          </Row>
        </Content>
      </PageContainer>
    );
  }
}
