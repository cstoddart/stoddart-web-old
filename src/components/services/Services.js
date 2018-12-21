import React, { Component } from 'react';

import {
  PageContainer,
  PageContent,
  PageLink,
  PageTitle,
} from '../ui';

export class Services extends Component {
  render() {
    return (
      <PageContainer>
        <PageContent>
          <PageTitle>Services</PageTitle>
          <PageLink to='/' left>Home</PageLink>
        </PageContent>
      </PageContainer>
    );
  }
}
