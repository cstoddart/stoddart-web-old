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
        <PageLink to='/' left>Home</PageLink>
        <PageContent>
          <PageTitle>Services</PageTitle>
        </PageContent>
      </PageContainer>
    );
  }
}
