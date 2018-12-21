import styled, { createGlobalStyle } from 'styled-components';
import Particles from 'react-particles-js';

import { SITE_WIDTH } from './constants';
import bitterBold from './assets/fonts/Bitter-Bold.ttf';
import montserratMedium from './assets/fonts/Montserrat-Medium.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Bitter;
    font-weight: 700;
    src: url(${bitterBold});
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 500;
    src: url(${montserratMedium});
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: #222;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    color: white;
  }

  a {
    text-decoration: none;
    color: #fb1;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 500;
  }
`;

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${SITE_WIDTH};
  width: 65%;
  height: 100%;
  margin: 0 auto;
`;
