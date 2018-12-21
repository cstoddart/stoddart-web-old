import React from 'react';

import {
  StyledLogo,
  Primary,
  Secondary,
} from './logoStyles';

export const Logo = ({ width }) => {
  const primaryFontSize = width * .22;
  const secondaryFontSize = width * .1;

  return (
    <StyledLogo>
      <Primary fontSize={primaryFontSize}>Stoddart</Primary>
      <Secondary fontSize={secondaryFontSize}>Web Engineering</Secondary>
    </StyledLogo>
  );
};
