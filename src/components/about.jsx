import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiMapPin, FiCode, FiBook } from 'react-icons/fi';

// ── Animations ────────────────────────────────────────────────────────────────

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.85); }
`;

// ── Layout ───────────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem);
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
`;

const SectionLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.8rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
`;

// ── Bento Grid ────────────────────────────────────────────────────────────────

const BentoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1.6rem;
  transition: border-color 0.25s ease, background 0.25s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    background: rgba(255, 255, 255, 0.035);
  }
`;

// Bio card spans 2 of 3 columns on desktop
const BioCard = styled(Card)`
  @media (min-width: 700px) {
    grid-column: 1 / 3;
  }
`;

// Status card — right column, same row as bio
const StatusCard = styled(Card)`
  background: rgba(16, 185, 129, 0.04);
  border-color: rgba(16, 185, 129, 0.15);

  &:hover {
    border-color: rgba(16, 185, 129, 0.3);
    background: rgba(16, 185, 129, 0.06);
  }
`;

// Skills card spans full width
const SkillsCard = styled(Card)`
  @media (min-width: 700px) {
    grid-column: 1 / 4;
  }
`;

// ── Card Inner Components ─────────────────────────────────────────────────────

const CardLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const GreenLabel = styled(CardLabel)`
  color: #10b981;
`;

const BioParagraph = styled.p`
  font-size: 0.97rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;

  &:last-child { margin-bottom: 0; }
`;

// ── Status Card ───────────────────────────────────────────────────────────────

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1.1rem;
`;

const PulseDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  flex-shrink: 0;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const StatusTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: #10b981;
`;

const StatusDetail = styled.p`
  font-size: 0.85rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.75rem;
`;

const LocationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

// ── Stats Card ────────────────────────────────────────────────────────────────

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  height: 100%;
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StatNum = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.text}, #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

// ── Currently Card ────────────────────────────────────────────────────────────

const CurrentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child { border-bottom: none; padding-bottom: 0; }
  &:first-child { padding-top: 0; }
`;

const CurrentIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.accentDim};
  border: 1px solid ${({ theme }) => theme.colors.borderAccent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
  font-size: 0.8rem;
`;

const CurrentText = styled.div``;

const CurrentTitle = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.15rem;
`;

const CurrentSub = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

// ── Skills ────────────────────────────────────────────────────────────────────

const SkillsInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const SkillGroup = styled.div``;

const GroupLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.65rem;
  opacity: 0.9;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const Tag = styled.span`
  padding: 0.28rem 0.7rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.78rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    color: #c4b5fd;
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

// ── Languages Card ────────────────────────────────────────────────────────────

const LangList = styled.div`
  display: flex;
  flex-direction: column;
`;

const LangItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.55rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child { border-bottom: none; }
`;

const LangName = styled.span`
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const LangBadge = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accentDim};
  border: 1px solid ${({ theme }) => theme.colors.borderAccent};
  padding: 0.18rem 0.5rem;
  border-radius: 4px;
`;

// ── Data ─────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    label: 'Languages',
    tags: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C#', 'PHP'],
  },
  {
    label: 'Web & APIs',
    tags: ['FastAPI', 'React', 'Node.js', 'Laravel', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Data & Systems',
    tags: ['SQL', 'SQLite', 'MySQL', 'Docker', 'Linux', 'Distributed Systems'],
  },
  {
    label: 'Practices & Tools',
    tags: ['Git', 'OOP / Design Patterns', 'JWT Auth', 'CCNA (in progress)'],
  },
];

const languages = [
  { name: 'Uzbek',   level: 'Native' },
  { name: 'English', level: 'C2 · Fluent' },
  { name: 'Russian', level: 'C1 · Advanced' },
  { name: 'French',  level: 'B1 · Intermediate' },
];

const stats = [
  { num: '6+',  label: 'Projects shipped' },
  { num: '1k+', label: 'VSCode downloads' },
  { num: '2',   label: 'Internships' },
  { num: '3+',  label: 'Years coding' },
];

const currentItems = [
  {
    icon: <FiCode size={13} />,
    title: 'Building PeerPrep v2',
    sub: 'WebSocket chat · vector clocks · AI',
  },
  {
    icon: <FiBook size={13} />,
    title: 'Teaching Java OOP @ ELTE',
    sub: 'Labs, lectures & mentorship',
  },
  {
    icon: <FiMapPin size={13} />,
    title: 'Based in Budapest, Hungary',
    sub: 'Open to remote & relocation',
  },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// ── Component ─────────────────────────────────────────────────────────────────

const About = () => (
  <Section id="about">
    <Container>
      <SectionHeader>
        <SectionLabel>About</SectionLabel>
        <SectionTitle
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Who I Am
        </SectionTitle>
      </SectionHeader>

      <BentoGrid
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {/* Bio — spans 2 cols */}
        <BioCard variants={fadeUp}>
          <CardLabel>Background</CardLabel>
          <BioParagraph>
            I'm a Software Engineer and CS student at Eötvös Loránd University in Budapest.
            My work spans backend systems, distributed architectures, and full-stack products —
            always with a focus on correctness and performance.
          </BioParagraph>
          <BioParagraph>
            I've shipped a real-time study platform with WebSocket sync and vector clocks,
            a full-stack LMS on Laravel, and a VSCode extension with thousands of downloads.
            I treat every project like a production system — not a school assignment.
          </BioParagraph>
          <BioParagraph>
            Outside of code I teach Java OOP to undergraduates at ELTE and previously
            interned at LimeLight in Oslo, building React features for real customers.
          </BioParagraph>
        </BioCard>

        {/* Status — right of bio */}
        <StatusCard variants={fadeUp}>
          <GreenLabel>Availability</GreenLabel>
          <StatusRow>
            <PulseDot />
            <StatusTitle>Open to Work</StatusTitle>
          </StatusRow>
          <StatusDetail>
            Actively seeking full-time roles and strong internships in software engineering,
            backend systems, or full-stack development.
          </StatusDetail>
          <LocationRow>
            <FiMapPin size={12} />
            Budapest · Remote · Relocate
          </LocationRow>
        </StatusCard>

        {/* Languages */}
        <Card variants={fadeUp}>
          <CardLabel>Spoken Languages</CardLabel>
          <LangList>
            {languages.map(({ name, level }) => (
              <LangItem key={name}>
                <LangName>{name}</LangName>
                <LangBadge>{level}</LangBadge>
              </LangItem>
            ))}
          </LangList>
        </Card>

        {/* Currently */}
        <Card variants={fadeUp}>
          <CardLabel>Currently</CardLabel>
          {currentItems.map(({ icon, title, sub }) => (
            <CurrentItem key={title}>
              <CurrentIcon>{icon}</CurrentIcon>
              <CurrentText>
                <CurrentTitle>{title}</CurrentTitle>
                <CurrentSub>{sub}</CurrentSub>
              </CurrentText>
            </CurrentItem>
          ))}
        </Card>

        {/* Stats */}
        <Card variants={fadeUp}>
          <CardLabel>By the numbers</CardLabel>
          <StatsGrid>
            {stats.map(({ num, label }) => (
              <StatBox key={label}>
                <StatNum>{num}</StatNum>
                <StatLabel>{label}</StatLabel>
              </StatBox>
            ))}
          </StatsGrid>
        </Card>

        {/* Skills — full width */}
        <SkillsCard variants={fadeUp}>
          <CardLabel>Tech Stack</CardLabel>
          <SkillsInner>
            {skillCategories.map(({ label, tags }) => (
              <SkillGroup key={label}>
                <GroupLabel>{label}</GroupLabel>
                <TagRow>
                  {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagRow>
              </SkillGroup>
            ))}
          </SkillsInner>
        </SkillsCard>
      </BentoGrid>
    </Container>
  </Section>
);

export default About;
