import React, { memo, Fragment } from 'react';

import {
  Logo,
  Button,
  PhoneIcon,
} from '../';
import {
  StyledNavigation,
  ButtonText,
} from './navigationStyles';

export const Navigation = memo(() => (
  <StyledNavigation>
    <Logo width={175} />
    <Button
      width={105}
      hoverWidth={140}
      to="/services"
      hoverRender={(
        <Fragment>
          <ButtonText>If you want to reach me</ButtonText>
          <PhoneIcon width={20} height={20} color="#fff" />
        </Fragment>
      )}
      primary
      reverse
      disableTextOnMobile
    >
      <ButtonText>Call me,<br />beep me</ButtonText>
      <PhoneIcon width={20} height={20} />
    </Button>
  </StyledNavigation>
))
