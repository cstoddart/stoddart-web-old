import React from 'react'

import texas from '../../../assets/images/texas.svg';
import github from '../../../assets/images/github.svg';
import {
  StyledFooter,
  TexasIcon,
  GithubIcon,
} from './footerStyles';

export const Footer = () => (
  <StyledFooter>
    Made In <TexasIcon src={texas} /> | View Source <GithubIcon src={github} />
  </StyledFooter>
);
