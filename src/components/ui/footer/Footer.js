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
    <a href="https://www.google.com/search?q=texas" target="blank">Made In <TexasIcon src={texas} /></a> | <a href="https://github.com/cstoddart/portfolio" target="blank">View Source <GithubIcon src={github} /></a>
  </StyledFooter>
);
