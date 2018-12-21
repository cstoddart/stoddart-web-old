import React, { Component } from 'react';

import {
  PageContainer,
  PageContent,
  PageTitle,
  PageLink,
} from '../ui';

export class Projects extends Component {
  render() {
    return (
      <PageContainer>
        <PageContent>
          <PageTitle>Projects</PageTitle>
          <PageLink to='/' right>Home</PageLink>
        </PageContent>
      </PageContainer>
    );
  }
}
