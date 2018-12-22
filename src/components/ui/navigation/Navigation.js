import React from 'react';
import { Link } from 'react-router-dom';

import { Logo, Button } from '../';
import {
  StyledNavigation,
} from './navigationStyles';

export const Navigation = () => (
  <StyledNavigation>
    <Logo width={175} />
    <Button
      to="/services"
      width={100}
      hoverText="If you want to reach me"
      primary
      reverse
    >Call me,<br />beep me</Button>
  </StyledNavigation>
)
