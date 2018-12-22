import React from 'react';

import { StyledButton } from './buttonStyles';

export const Button = ({ children, to, primary, secondary }) => (
  <StyledButton
    to={to}
    primary={primary ? 1 : 0}
    secondary={secondary ? 1 : 0}
  >
    {children}
  </StyledButton>
);
