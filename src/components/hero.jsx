import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

// ── Layout ──────────────────────────────────────────────────────────────────

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem clamp(1.5rem, 6vw, 5rem) 4rem;
  background: ${({ theme }) => theme.colors.background};
`;

const HeroGrid = styled(motion.div)`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
`;

// ── Text Side ────────────────────────────────────────────────────────────────

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Eyebrow = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const HeroName = styled(motion.h1)`
  font-size: clamp(2.4rem, 6.5vw, 4.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.06;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

const HeroRole = styled(motion.p)`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
`;

const Divider = styled(motion.div)`
  width: 32px;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 2px;
  margin-bottom: 1.5rem;
  opacity: 0.7;
`;

const HeroBio = styled(motion.p)`
  font-size: 0.97rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 480px;
  margin-bottom: 2.25rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  align-items: center;
`;

const PrimaryBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.78rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 6px 22px rgba(139, 92, 246, 0.32);
  }
`;

const SecondaryBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.78rem 1.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.45);
    color: ${({ theme }) => theme.colors.text};
    transform: translateY(-2px);
  }
`;

const SocialRow = styled(motion.div)`
  display: flex;
  gap: 0.6rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: rgba(139, 92, 246, 0.35);
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

// ── Animation Variants ────────────────────────────────────────────────────────

const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVar = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Hero = () => (
  <HeroSection id="hero">
    <HeroGrid variants={containerVar} initial="hidden" animate="visible">
      <TextSide>
        <Eyebrow variants={itemVar}>Hello, I'm</Eyebrow>

        <HeroName variants={itemVar}>
          Khayrullo Isomiddinov
        </HeroName>

        <HeroRole variants={itemVar}>Software Engineer</HeroRole>

        <Divider variants={itemVar} />

        <HeroBio variants={itemVar}>
          CS student at ELTE Budapest. I build systems that scale, ship code that lasts,
          and turn complex problems into clean solutions.
        </HeroBio>

        <ButtonGroup variants={itemVar}>
          <PrimaryBtn
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects <FiArrowRight size={14} />
          </PrimaryBtn>
          <SecondaryBtn
            href="/cv.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiDownload size={14} /> Download CV
          </SecondaryBtn>
        </ButtonGroup>

        <SocialRow variants={itemVar}>
          <SocialIcon
            href="https://github.com/khayrullo-isomiddinov"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/khayrullo-isomiddinov/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialIcon>
        </SocialRow>
      </TextSide>
    </HeroGrid>
  </HeroSection>
);

export default Hero;
