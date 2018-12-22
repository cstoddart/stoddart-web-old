import React, { Fragment } from 'react'

import { StyledParticles } from './particlesStyles';

const primaryParams = {
  particles: {
    number: {
      value: 12,
      density: {
        enable: true,
        value_area: 100,
      }
    },
    line_linked: {
      enable: true,
      distance: 90,
      opacity: 0.25,
    },
    move: {
      direction: 'right',
      random: false,
      straight: true,
      speed: 0.3,
      bounce: false,
      out_mode: 'out',
    },
    size: {
      value: 1.5,
      random: true,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
      onhover: {
        enable: true,
        mode: 'grab',
      }
    },
    modes: {
      push: {
        particles_nb: 1,
      },
      grab: {
        distance: 75,
        line_linked: {
          opacity: 0.5,
        }
      },
    },
  },
  retina_detect: true
};

const secondaryParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 100,
      }
    },
    line_linked: {
      enable: false,
    },
    move: {
      direction: 'right',
      random: false,
      straight: true,
      speed: 0.3,
      bounce: false,
      out_mode: 'out',
    },
    size: {
      value: 1,
      random: true,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  retina_detect: true
};

export const Particles = React.memo(() => (
  <Fragment>
    <StyledParticles params={primaryParams} />
    <StyledParticles params={secondaryParams} secondary={1} />
  </Fragment>
));
