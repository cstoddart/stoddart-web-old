import React, { memo, Fragment } from 'react';

import phone from '../../../assets/images/phone.svg';
import phoneWhite from '../../../assets/images/phoneWhite.svg';
import { Logo, Button, PhoneIcon } from '../';
import {
  StyledNavigation,
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
          <div>If you want to reach me</div><PhoneIcon width={20} color="#fff" />
        </Fragment>
      )}
      primary
      reverse
      disableTextOnMobile
    ><div>Call me,<br />beep me</div><PhoneIcon width={20} /></Button>
  </StyledNavigation>
))
