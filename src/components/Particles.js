import React from "react";
import ParticlesReact from "react-particles-js";

const Particles = (props) => {
  return (
    <ParticlesReact
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: "999999",
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: false,
            anim: {
              enable: true,
              speed: 80,
              size_min: 0.1,
              sync: true,
            },
          },
          line_linked: {
            enable: true,
            distance: 300,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
          move: {
            enable: true,
            speed: 12,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 800,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 800,
              size: 80,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particles;
