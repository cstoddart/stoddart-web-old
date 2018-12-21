import React from 'react'

import { StyledParticles } from './particlesStyles';

const params = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 100,
      }
    },
    line_linked: {
      enable: true,
      distance: 75,
      opacity: 0.2,
    },
    move: {
      direction: 'bottom-right',
      speed: 0.3,
      bounce: false,
      out_mode: 'out',
      attract: {
        enable: true,
      },
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
          opacity: 0.25,
        }
      },
    },
  },
  retina_detect: true
};

export const Particles = React.memo(() => (
  <StyledParticles
    params={params} />
));
