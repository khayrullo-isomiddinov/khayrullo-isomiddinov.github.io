import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { useLang } from '../context/AppContext';

// ── Keyframes ─────────────────────────────────────────────────────────────────

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.5; }
  50%       { transform: translateY(6px); opacity: 1; }
`;

const floatY = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-14px) rotate(-1deg); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

// ── Section ───────────────────────────────────────────────────────────────────

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem clamp(1.5rem, 6vw, 5rem) 4rem;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const DotGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)'} 1px,
    transparent 1px
  );
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
`;

const GlowBlob = styled.div`
  position: absolute;
  top: -10%;
  left: -5%;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: ${({ theme }) => theme.isDark
    ? 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)'};
  pointer-events: none;
  z-index: 0;
`;

const GlowBlobRight = styled.div`
  position: absolute;
  top: 10%;
  right: -8%;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: ${({ theme }) => theme.isDark
    ? 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)'
    : 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)'};
  pointer-events: none;
  z-index: 0;
`;

// ── Two-column layout ─────────────────────────────────────────────────────────

const HeroGrid = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 860px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

// ── Left: text ────────────────────────────────────────────────────────────────

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Tag = styled(motion.p)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
  opacity: 0.9;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.7;
  }
`;

const HeroName = styled(motion.h1)`
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.03;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

const HeroTagline = styled(motion.p)`
  font-size: clamp(0.92rem, 1.8vw, 1.05rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2.5rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
`;

const PrimaryBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    box-shadow: 0 6px 24px ${({ theme }) => theme.colors.accentGlow};
  }
`;

const SecondaryBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.8rem 1.6rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    color: ${({ theme }) => theme.colors.text};
  }
`;

// ── Right: code card ──────────────────────────────────────────────────────────

const CodeCardWrap = styled(motion.div)`
  display: none;

  @media (min-width: 860px) {
    display: block;
    animation: ${floatY} 5s ease-in-out infinite;
  }
`;

const CodeCard = styled.div`
  background: ${({ theme }) => theme.isDark
    ? 'rgba(15, 15, 31, 0.85)'
    : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${({ theme }) => theme.colors.borderAccent};
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px ${({ theme }) => theme.colors.borderAccent},
    0 24px 60px ${({ theme }) => theme.isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.12)'},
    0 0 40px ${({ theme }) => theme.colors.accentGlow};
  backdrop-filter: blur(12px);
  transform: rotate(-1deg);
`;

// Window chrome
const CardChrome = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.isDark
    ? 'rgba(255,255,255,0.03)'
    : 'rgba(0,0,0,0.03)'};
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

const FileName = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 0.4rem;
  opacity: 0.7;
`;

// Code body
const CodeBody = styled.pre`
  padding: 1.4rem 1.6rem;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  line-height: 1.85;
  overflow: hidden;
  white-space: pre-wrap;
  word-break: break-word;
`;

// Syntax colours — work on both light and dark
const K  = styled.span`color: #c084fc;`; // keyword / const
const Fn = styled.span`color: #60a5fa;`; // function / key name
const St = styled.span`color: #34d399;`; // string
const Nm = styled.span`color: #fb923c;`; // number / bool
const Cm = styled.span`color: ${({ theme }) => theme.isDark ? '#4b5563' : '#9ca3af'};`; // comment
const Pl = styled.span`color: ${({ theme }) => theme.colors.text}; opacity: 0.75;`; // punctuation

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 0.9em;
  background: ${({ theme }) => theme.colors.accent};
  vertical-align: middle;
  margin-left: 1px;
  animation: ${blink} 1.1s step-start infinite;
`;

// ── Scroll hint ───────────────────────────────────────────────────────────────

const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  z-index: 1;
  opacity: 0.4;

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  div {
    width: 1px;
    height: 32px;
    background: ${({ theme }) => theme.colors.textSecondary};
    animation: ${scrollBounce} 1.8s ease-in-out infinite;
  }
`;

// ── Animation variants ────────────────────────────────────────────────────────

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const cardReveal = {
  hidden:  { opacity: 0, x: 40, rotate: -1 },
  visible: { opacity: 1, x: 0,  rotate: -1, transition: { duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
};

// ── Translations ──────────────────────────────────────────────────────────────

const copy = {
  en: {
    tag:     'Software Engineer',
    name:    'Khayrullo\nIsomiddinov',
    tagline: 'I build software that adds real value — real-time platforms, full-stack applications, and tools that people actually use.',
    cta:     'View Projects',
    cv:      'Download CV',
  },
  uz: {
    tag:     "Dasturiy ta'minot muhandisi",
    name:    'Xayrullo\nIsomiddinov',
    tagline: "Odamlar hayotiga qiymat qo'shadigan dasturiy ta'minot yarataman — real vaqtli platformalar, to'liq stack ilovalar va haqiqatan ham ishlatiladigan vositalar.",
    cta:     'Loyihalar',
    cv:      'CV yuklab olish',
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Hero = () => {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <HeroSection id="hero">
      <DotGrid />
      <GlowBlob />
      <GlowBlobRight />

      <HeroGrid variants={container} initial="hidden" animate="visible">

        {/* ── Left: text content ── */}
        <TextSide>
          <Tag variants={item}>{t.tag}</Tag>

          <HeroName variants={item}>
            {t.name.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </HeroName>

          <HeroTagline variants={item}>{t.tagline}</HeroTagline>

          <ButtonGroup variants={item}>
            <PrimaryBtn href="#projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              {t.cta} <FiArrowRight size={14} />
            </PrimaryBtn>
            <SecondaryBtn href="/cv.pdf" download whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <FiDownload size={14} /> {t.cv}
            </SecondaryBtn>
          </ButtonGroup>
        </TextSide>

        {/* ── Right: floating code card ── */}
        <CodeCardWrap variants={cardReveal}>
          <CodeCard>
            <CardChrome>
              <Dot $color="#ff5f57" />
              <Dot $color="#febc2e" />
              <Dot $color="#28c840" />
              <FileName>harry.js</FileName>
            </CardChrome>

            <CodeBody>
              <Cm>{'// who is this guy?'}</Cm>{'\n'}
              <K>const </K><Fn>harry</Fn><Pl> = {'{'}</Pl>{'\n'}
              {'  '}<Fn>role</Fn><Pl>:</Pl>    <St>"Software Engineer"</St><Pl>,</Pl>{'\n'}
              {'  '}<Fn>age</Fn><Pl>:</Pl>     <Nm>22</Nm><Pl>,</Pl>{'\n'}
              {'  '}<Fn>location</Fn><Pl>:</Pl> <St>"Budapest 🇭🇺"</St><Pl>,</Pl>{'\n'}
              {'  '}<Fn>openToWork</Fn><Pl>:</Pl> <Nm>true</Nm><Pl>,</Pl>{'\n'}
              {'\n'}
              {'  '}<Fn>skills</Fn><Pl>: [</Pl>{'\n'}
              {'    '}<St>"JavaScript"</St><Pl>,</Pl>{'\n'}
              {'    '}<St>"Python"</St><Pl>,</Pl>{'\n'}
              {'    '}<St>"Java"</St><Pl>,</Pl>{'\n'}
              {'  '}<Pl>],</Pl>{'\n'}
              {'\n'}
              {'  '}<Fn>building</Fn><Pl>:</Pl> <St>"PeerPrep v2"</St><Pl>,</Pl>{'\n'}
              <Pl>{'}'}</Pl><Cursor />
            </CodeBody>
          </CodeCard>
        </CodeCardWrap>

      </HeroGrid>

      <ScrollHint
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span>scroll</span>
        <div />
      </ScrollHint>
    </HeroSection>
  );
};

export default Hero;
