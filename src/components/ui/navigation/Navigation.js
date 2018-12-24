import React, { Fragment } from 'react';

import phone from '../../../assets/images/phone.svg';
import phoneWhite from '../../../assets/images/phoneWhite.svg';
import { Logo, Button } from '../';
import {
  StyledNavigation,
  PhoneIcon,
} from './navigationStyles';

export const Navigation = () => (
  <StyledNavigation>
    <Logo width={175} />
    <Button
      width={105}
      hoverWidth={140}
      to="/services"
      hoverRender={(
        <Fragment>
          <div>If you want to reach me</div><PhoneIcon src={phoneWhite} />
        </Fragment>
      )}
      primary
      reverse
      disableTextOnMobile
    ><div>Call me,<br />beep me</div><PhoneIcon src={phone} /></Button>
  </StyledNavigation>
)
