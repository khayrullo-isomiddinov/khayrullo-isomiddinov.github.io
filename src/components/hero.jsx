// hero.jsx
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import myPhoto from "../assets/images/lclas.jpg";

// --------------------------------------
// BACKGROUND & LAYER STYLES
// --------------------------------------
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column; /* Mobile default */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
  overflow: hidden;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, #0a192f, #1d3557, #0a192f);
    background-size: 400% 400%;
    z-index: -5;
    animation: ${gradientAnimation} 20s ease infinite;
  }

  @media (min-width: 1024px) {
    /* On desktop, use a row layout for the entire section */
    flex-direction: row;
    text-align: left;
  }
`;

const ParticlesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -4;
`;

const Waves = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 200px;
  z-index: -3;
  opacity: 0.8;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23644ff0' fill-opacity='0.4' d='M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,138.7C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") repeat-x;
  animation: wave 15s linear infinite;

  @keyframes wave {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`;

// --------------------------------------
// CONTENT LAYOUT
// --------------------------------------

// Container to arrange the photo and text side by side on desktop,
// while keeping them centered on mobile.
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack vertically on mobile */
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 1rem;  /* Extra horizontal padding for mobile */

  @media (min-width: 1024px) {
    flex-direction: row; /* Side by side on desktop */
    align-items: center;
    justify-content: center;
  }
`;

// --------------------------------------
// PROFILE PICTURE & TILT EFFECT
// --------------------------------------
const PhotoWrapper = styled.div`
  margin: 1rem 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    margin-right: 3rem;
  }

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const MyPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Container for text info; on mobile, text is centered.
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  /* Center text on mobile */
  text-align: center;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    align-items: flex-start; /* Left align on desktop */
    text-align: left;
  }
`;

// --------------------------------------
// TEXT EFFECTS & ANIMATIONS FOR DESKTOP
// --------------------------------------

// Motion variants for letter-by-letter animation
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.5 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 }
  }
};

/*  
  The desktop title & subtitle containers use a flex layout to animate each letter individually.
  These will be hidden on mobile.
*/
const DesktopTitle = styled(motion.h1)`
  display: flex;
  flex-wrap: wrap;
  font-size: 3rem;
  margin: 1rem 0;
  perspective: 1000px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  position: relative;
  color: white;

  @media (max-width: 1023px) {
    display: none;
  }

  /* Underline effect */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const DesktopSubtitle = styled(motion.h3)`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  position: relative;
  color: white;

  @media (max-width: 1023px) {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Letter = styled(motion.span)`
  display: inline-block;
  margin: 0 2px;
`;

const splitText = (text) => text.split("");

// --------------------------------------
// TEXT FOR MOBILE
// --------------------------------------
/*  
  On mobile, we hide the letter-by-letter animation and render two separate lines:
  - The first line shows "Hello, I'm" (normal style).
  - The second line shows the name "Khayrullo Isomiddinov" with a bolder style.
*/
const MobileTitle = styled.div`
  display: none;
  font-size: 2.5rem;
  margin: 1rem 0;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  line-height: 1.2;
  @media (max-width: 1023px) {
    display: block;
  }
`;

const MobileSubtitle = styled.div`
  display: none;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 300;
  color: white;
  @media (max-width: 1023px) {
    display: block;
  }
`;

// --------------------------------------
// HERO COMPONENT
// --------------------------------------
const Hero = () => {
  const particlesInit = async (main) => {
    console.log("Particles initialized!");
    await loadFull(main);
  };

  // The full title for desktop animation (letter-by-letter)
  const titleText = "Hello, I'm Khayrullo Isomiddinov";
  // For mobile, we split the title into two lines:
  const mobileLine1 = "Hello, I'm";
  const mobileLine2 = "Khayrullo Isomiddinov";
  const subtitleText = "I like building cool stuff";

  return (
    <HeroSection id="hero">
      <ParticlesBackground>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: { color: { value: "#0a192f" } },
            particles: {
              number: { value: 100 },
              color: { value: ["#ff007f", "#7f00ff", "#00ffff"] },
              shape: { type: ["circle", "star", "polygon"] },
              opacity: {
                value: 0.7,
                anim: { enable: true, speed: 1, opacity_min: 0.3 }
              },
              size: {
                value: { min: 2, max: 6 },
                anim: { enable: true, speed: 2 }
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                outModes: { default: "out" }
              }
            },
            interactivity: {
              events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "bubble" }
              },
              modes: {
                grab: { distance: 150 },
                bubble: { distance: 200, size: 10 }
              }
            }
          }}
        />
      </ParticlesBackground>

      <Waves />

      <motion.div initial="hidden" animate="visible">
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
          <ContentWrapper>
            <PhotoWrapper>
              <MyPhoto src={myPhoto} alt="Profile" />
            </PhotoWrapper>
            <InfoContainer>
              {/* Desktop Version: Animated Letter-by-Letter */}
              <DesktopTitle variants={textContainerVariants}>
                {splitText(titleText).map((char, index) => (
                  <Letter key={index} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </Letter>
                ))}
              </DesktopTitle>
              <DesktopSubtitle variants={textContainerVariants}>
                {splitText(subtitleText).map((char, index) => (
                  <Letter key={index} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </Letter>
                ))}
              </DesktopSubtitle>

              {/* Mobile Version: Simple, split text */}
              <MobileTitle>
                <div>{mobileLine1}</div>
                <div style={{ fontWeight: 'bold' }}>{mobileLine2}</div>
              </MobileTitle>
              <MobileSubtitle>{subtitleText}</MobileSubtitle>
            </InfoContainer>
          </ContentWrapper>
        </Tilt>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;
