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
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
    text-align: left;
    height: 100vh;
  }
`;

const PhotoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;

  /* subtle circular glow behind the photo */
  &::before {
    content: "";
    position: absolute;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(140, 94, 255, 0.18), transparent 70%);
    filter: blur(40px);
    top: 52%;
    left: 55%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  @media (max-width: 767px) {
    padding-left: 0;

    &::before {
      width: 250px;
      height: 250px;
      top: 50%;
      left: 50%;
    }
  }
`;

const Photo = styled.img`
  width: 82%;
  height: auto;

  /* stronger grounding shadow */
  filter: drop-shadow(0px 25px 45px rgba(0, 0, 0, 0.55));

  margin-top: -4rem;
  margin-left: 3.5rem;

  /* tiny floating effect on hover */
  transition: transform 0.4s ease;
  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 767px) {
    width: 75%;
    margin-top: -1.5rem;
    margin-left: 0;
  }
`;





const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  z-index: 1;

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
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 500px;
  margin: 0 auto;

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
          <Photo src={myPhoto} alt="Khayrullo Isomiddinov" />
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
