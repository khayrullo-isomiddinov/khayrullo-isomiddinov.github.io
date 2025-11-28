import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import myPhoto from "../assets/images/shopkojiro.png";

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
  background: radial-gradient(circle at 20% 40%, rgba(50, 30, 120, 0.18), transparent 60%), #0b0e2a;

  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;

  @media (max-width: 767px) {
    padding: 5rem 1rem 2rem;
    min-height: auto;
    justify-content: flex-start;
    padding-top: 6rem;
  }

  @media (max-width: 480px) {
    padding-top: 5rem;
    padding-bottom: 1rem;
  }
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  z-index: 1;
  gap: 1rem;

  @media (max-width: 767px) {
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
    text-align: left;
    height: 100vh;
    gap: 2rem;
  }
`;

const PhotoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;

  /* Ambient glow behind the photo for natural blending */
  &::before {
    content: "";
    position: absolute;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(140, 94, 255, 0.25) 0%,
      rgba(140, 94, 255, 0.15) 30%,
      rgba(50, 30, 120, 0.1) 50%,
      transparent 70%
    );
    filter: blur(50px);
    top: 52%;
    left: 55%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: glowPulse 4s ease-in-out infinite;
  }

  /* Soft ambient overlay for edge blending */
  &::after {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      transparent 40%,
      rgba(11, 14, 42, 0.3) 70%,
      rgba(11, 14, 42, 0.6) 100%
    );
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
    mix-blend-mode: multiply;
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
  }

  @media (max-width: 767px) {
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0.5rem;
    max-height: 40vh;
    min-height: 280px;

    &::before {
      width: 280px;
      height: 280px;
      top: 50%;
      left: 50%;
      filter: blur(35px);
    }

    &::after {
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
    }
  }

  @media (max-width: 480px) {
    max-height: 35vh;
    min-height: 240px;

    &::before {
      width: 220px;
      height: 220px;
      filter: blur(30px);
    }
  }

  @media (max-width: 360px) {
    max-height: 30vh;
    min-height: 200px;

    &::before {
      width: 180px;
      height: 180px;
    }
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  filter: drop-shadow(0px 30px 60px rgba(0, 0, 0, 0.5));
`;

const Photo = styled.img`
  width: 82%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 2;

  /* Natural blending with background - soft edges */
  filter: 
    drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.6))
    drop-shadow(0px 0px 30px rgba(139, 92, 246, 0.2))
    brightness(0.98)
    contrast(1.03);
  
  /* Soft edge blending for natural integration */
  -webkit-mask-image: radial-gradient(
    ellipse 85% 90% at 50% 50%,
    black 65%,
    rgba(0, 0, 0, 0.8) 80%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 85% 90% at 50% 50%,
    black 65%,
    rgba(0, 0, 0, 0.8) 80%,
    transparent 100%
  );

  margin-top: -4rem;
  margin-left: 3.5rem;

  /* Smooth hover effect */
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-4px);
    filter: 
      drop-shadow(0px 25px 50px rgba(0, 0, 0, 0.7))
      drop-shadow(0px 0px 40px rgba(139, 92, 246, 0.3))
      brightness(1.02)
      contrast(1.05);
  }

  @media (max-width: 767px) {
    width: 60%;
    max-width: 300px;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
    filter: 
      drop-shadow(0px 15px 35px rgba(0, 0, 0, 0.5))
      drop-shadow(0px 0px 20px rgba(139, 92, 246, 0.15))
      brightness(0.98)
      contrast(1.03);
    
    -webkit-mask-image: radial-gradient(
      ellipse 80% 85% at 50% 50%,
      black 60%,
      rgba(0, 0, 0, 0.75) 75%,
      transparent 100%
    );
    mask-image: radial-gradient(
      ellipse 80% 85% at 50% 50%,
      black 60%,
      rgba(0, 0, 0, 0.75) 75%,
      transparent 100%
    );

    &:hover {
      filter: 
        drop-shadow(0px 18px 40px rgba(0, 0, 0, 0.6))
        drop-shadow(0px 0px 25px rgba(139, 92, 246, 0.2))
        brightness(1.02)
        contrast(1.05);
    }
  }

  @media (max-width: 480px) {
    width: 55%;
    max-width: 250px;
  }

  @media (max-width: 360px) {
    width: 50%;
    max-width: 220px;
  }
`;





const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  z-index: 1;

  @media (max-width: 767px) {
    padding: 1rem 0.5rem;
    margin-top: 0;
  }

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const Greeting = styled(motion.p)`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const Name = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (min-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.3;

  @media (min-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  @media (min-width: 768px) {
    margin: 0;
    text-align: left;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(139, 92, 246, 0.3);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Hero = () => {
  return (
    <HeroSection id="hero">
      <ContentContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <PhotoContainer variants={itemVariants}>
          <PhotoWrapper>
            <Photo src={myPhoto} alt="Khayrullo Isomiddinov" />
          </PhotoWrapper>
        </PhotoContainer>

        <TextContainer>
          <Greeting variants={itemVariants}>
            Hi, my name is
          </Greeting>

          <Name variants={itemVariants}>
            Khayrullo Isomiddinov.
          </Name>

          <Title variants={itemVariants}>
            and I love building stuff.
          </Title>

          <Description variants={itemVariants}>
            I'm a student of Computer Science at ELTE, and I am crazy about backend development, databases, and solving complex challenges.
          </Description>

          <CTAButton
            variants={itemVariants}
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </CTAButton>
        </TextContainer>
      </ContentContainer>
    </HeroSection>
  );
};

export default Hero;
