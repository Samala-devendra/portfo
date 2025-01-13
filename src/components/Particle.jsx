


import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("init");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: -1,
          }}
          options={{
            background: {
              color: {
                value: "#101820", // Deep navy blue for a calm background
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push", // Push more particles when clicked
                },
                onHover: {
                  enable: true,
                  mode: "attract", // Attract particles towards the mouse
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 8, // Increased particle push on click
                },
                attract: {
                  distance: 100, // Attract particles closer to mouse pointer
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ff66cc", // Light pink particles
              },
              links: {
                color: "#ff66cc", // Light pink particle links
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1.5,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true, // Particles move in random directions
                speed: 2.5, // Medium speed for dynamic movement
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 250, // More particles for a fuller effect
              },
              opacity: {
                value: 0.8, // Particles are more visible
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 0.4, // Particles pulse with opacity
                },
              },
              shape: {
                type: "circle", // Circular particles
              },
              size: {
                value: { min: 3, max: 8 }, // Larger particles for a more noticeable effect
              },
              shadow: {
                enable: true,
                color: "#ff66cc", // Light pink shadow for particles
                blur: 15, // Light blur for the shadow
              },
              glow: {
                enable: true,
                color: "#ffcc00", // Golden yellow glow
                intensity: 2, // Stronger glow for a more glowing effect
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

