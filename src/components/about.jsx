import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiMapPin, FiCode, FiBook } from 'react-icons/fi';
import profilePic from '../assets/images/pic-heic-opt.png';
import { useLang } from '../context/AppContext';

// ── Animations ────────────────────────────────────────────────────────────────

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.4; transform: scale(0.85); }
`;

const fillBar = keyframes`
  from { width: 0; }
`;

// ── Section with ambient glow ─────────────────────────────────────────────────

const Section = styled.section`
  padding: clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem);
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;
`;

// Ambient light orbs — purely decorative
const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(${({ $blur }) => $blur || 90}px);
  opacity: ${({ theme }) => theme.isDark ? 0.38 : 0.22};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  background: ${({ theme }) => theme.isDark
    ? 'rgba(255, 255, 255, 0.025)'
    : theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1.6rem;
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;

  /* Subtle inner glow on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: radial-gradient(
      circle at top left,
      ${({ theme }) => theme.colors.accentGlow},
      transparent 65%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.borderAccent},
                0 8px 32px ${({ theme }) => theme.colors.accentGlow};

    &::before { opacity: 1; }
  }
`;

const BioCard = styled(Card)`
  @media (min-width: 700px) { grid-column: 1 / 3; }
`;

const PhotoCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  text-align: center;
  padding: 1.6rem;
`;

const SkillsCard = styled(Card)`
  @media (min-width: 700px) { grid-column: 1 / 4; }
`;

// ── Card Labels ───────────────────────────────────────────────────────────────

const CardLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  opacity: 0.8;
`;

// ── Bio ───────────────────────────────────────────────────────────────────────

const BioParagraph = styled.p`
  font-size: 0.97rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  &:last-child { margin-bottom: 0; }
`;

// ── Photo Card ────────────────────────────────────────────────────────────────

const PhotoRing = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6, #8b5cf6);
  box-shadow: 0 0 32px rgba(139, 92, 246, 0.4), 0 0 60px rgba(139, 92, 246, 0.15);
  flex-shrink: 0;
`;

const PhotoInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const PhotoName = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
`;

const PhotoSub = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`;

const PulseDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  animation: ${pulse} 2s ease-in-out infinite;
  flex-shrink: 0;
`;

const StatusText = styled.span`
  font-size: 0.72rem;
  color: #10b981;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

// ── Stats Card ────────────────────────────────────────────────────────────────

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
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
  &:last-child  { border-bottom: none; padding-bottom: 0; }
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

// ── Languages Card ────────────────────────────────────────────────────────────

const LangList = styled.div`display: flex; flex-direction: column;`;

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

// ── Skill Bars ────────────────────────────────────────────────────────────────

const SkillsInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const BarsSection = styled.div`
  display: grid;
  gap: 0.9rem;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem 2.5rem;
  }
`;

const SkillBarRow = styled.div``;

const SkillBarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.38rem;
`;

const SkillBarName = styled.span`
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillBarPct = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0.85;
`;

const BarTrack = styled.div`
  height: 5px;
  background: ${({ theme }) => theme.isDark
    ? 'rgba(255,255,255,0.06)'
    : 'rgba(0,0,0,0.07)'};
  border-radius: 99px;
  overflow: hidden;
`;

const BarFill = styled(motion.div)`
  height: 100%;
  border-radius: 99px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.accent},
    #a78bfa
  );
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.accentGlow};
`;

const GroupSection = styled.div``;

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

// ── Static Data ───────────────────────────────────────────────────────────────

const skillBars = [
  { name: 'JavaScript', level: 90 },
  { name: 'Python',     level: 83 },
  { name: 'Java',       level: 80 },
  { name: 'React',      level: 76 },
  { name: 'TypeScript', level: 72 },
  { name: 'SQL',        level: 70 },
  { name: 'FastAPI',    level: 66 },
  { name: 'Docker',     level: 58 },
];

const tagGroups = [
  { label: 'Web & APIs',       tags: ['Node.js', 'Laravel', 'REST APIs', 'WebSockets', 'PHP'] },
  { label: 'Data & Systems',   tags: ['SQLite', 'MySQL', 'Linux', 'Distributed Systems', 'C / C#'] },
  { label: 'Practices & Tools',tags: ['Git', 'OOP / Design Patterns', 'JWT Auth', 'CCNA (in progress)'] },
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

// ── Translations ──────────────────────────────────────────────────────────────

const copy = {
  en: {
    label:      'About',
    title:      'Who I Am',
    background: 'Background',
    bio1: "I am Harry, 22, and I love developing software that adds value to people's lives. My primary career goal, and mission in general, is to identify problems surrounding our society, and utilize my passion for Software Development to bring reliable solutions to the table.",
    bio2: "So far, I've worked on projects that involve a real-time study platform with WebSocket sync and vector clocks, a full-stack LMS on Laravel, a VSCode extension with thousands of downloads and so on.",
    bio3: "As of right now, I share my knowledge in Object-Oriented Programming to undergraduates at ELTE and previously interned at LimeLight in Oslo.",
    photoName:  'Harry',
    photoSub:   'Budapest, Hungary',
    openToWork: 'Open to Work',
    photo:      'Profile',
    currently:  'Currently',
    byNums:     'By the numbers',
    spokenLang: 'Spoken Languages',
    techStack:  'Tech Stack',
    coreLang:   'Core Languages',
    statsLabels: ['Projects shipped', 'VSCode downloads', 'Internships', 'Years coding'],
    currentItems: [
      { title: 'Building PeerPrep v2',         sub: 'WebSocket chat · vector clocks · AI' },
      { title: 'Teaching Java OOP @ ELTE',      sub: 'Labs, lectures & mentorship' },
      { title: 'Based in Budapest, Hungary',    sub: 'Open to remote & relocation' },
    ],
  },
  uz: {
    label:      'Haqida',
    title:      'Men Haqimda',
    background: 'Biografiya',
    bio1: "Men Xayrullo, 22 yoshdaman va odamlar hayotiga qiymat qo'shadigan dasturiy ta'minotni ishlab chiqishni yaxshi ko'raman. Asosiy maqsadim — jamiyatimizda mavjud muammolarni aniqlash va ularni dasturlash orqali hal etishdir.",
    bio2: "Hozirgacha real vaqtli o'qish platformasi (WebSocket va vektor soatlari), Laravel'dagi to'liq stack LMS, minglab yuklab olinishlarga ega VSCode kengaytmasi va boshqa ko'plab loyihalarda ishladim.",
    bio3: "Hozirda ELTE universitetida bakalavriyat talabalariga Ob'ektga yo'naltirilgan dasturlashni o'rgataman. Ilgari Oslo'dagi LimeLight kompaniyasida amaliyot o'tdim.",
    photoName:  'Xayrullo',
    photoSub:   'Budapesht, Vengriya',
    openToWork: 'Ish izlamoqda',
    photo:      'Rasm',
    currently:  'Hozirda',
    byNums:     'Raqamlarda',
    spokenLang: 'Tillar',
    techStack:  'Texnologiyalar',
    coreLang:   'Asosiy tillar',
    statsLabels: ['Loyihalar', 'VSCode yuklamalar', 'Amaliyotlar', 'Dasturlash yili'],
    currentItems: [
      { title: 'PeerPrep v2 ustida ishlayapman', sub: 'WebSocket · vektor soatlar · AI' },
      { title: 'ELTE\'da Java OOP o\'rgataman',   sub: 'Laboratoriya, ma\'ruza va mentorlik' },
      { title: 'Budapesht, Vengriyada',           sub: 'Masofaviy va ko\'chirish imkoniyatiga ochiq' },
    ],
  },
};

// ── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

// ── Skill Bar Component ───────────────────────────────────────────────────────

const SkillBar = ({ name, level }) => (
  <SkillBarRow>
    <SkillBarTop>
      <SkillBarName>{name}</SkillBarName>
      <SkillBarPct>{level}%</SkillBarPct>
    </SkillBarTop>
    <BarTrack>
      <BarFill
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        viewport={{ once: true }}
      />
    </BarTrack>
  </SkillBarRow>
);

// ── Component ─────────────────────────────────────────────────────────────────

const About = () => {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <Section id="about">
      {/* Ambient glow orbs */}
      <Orb
        $blur={130}
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          top: '-15%',
          right: '-8%',
        }}
      />
      <Orb
        $blur={100}
        style={{
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
          bottom: '5%',
          left: '-5%',
        }}
      />
      <Orb
        $blur={80}
        style={{
          width: 260,
          height: 260,
          background: 'radial-gradient(circle, rgba(196,181,253,0.10) 0%, transparent 70%)',
          top: '40%',
          left: '45%',
        }}
      />

      <Container>
        <SectionHeader>
          <SectionLabel>{t.label}</SectionLabel>
          <SectionTitle
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {t.title}
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
            <CardLabel>{t.background}</CardLabel>
            <BioParagraph>{t.bio1}</BioParagraph>
            <BioParagraph>{t.bio2}</BioParagraph>
            <BioParagraph>{t.bio3}</BioParagraph>
          </BioCard>

          {/* Circular Photo Card */}
          <PhotoCard variants={fadeUp}>
            <PhotoRing>
              <PhotoInner>
                <img src={profilePic} alt={t.photoName} />
              </PhotoInner>
            </PhotoRing>
            <div>
              <PhotoName>{t.photoName}</PhotoName>
              <PhotoSub>{t.photoSub}</PhotoSub>
            </div>
            <StatusRow>
              <PulseDot />
              <StatusText>{t.openToWork}</StatusText>
            </StatusRow>
          </PhotoCard>

          {/* Spoken Languages */}
          <Card variants={fadeUp}>
            <CardLabel>{t.spokenLang}</CardLabel>
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
            <CardLabel>{t.currently}</CardLabel>
            {t.currentItems.map(({ title, sub }, i) => {
              const icons = [<FiCode size={13} />, <FiBook size={13} />, <FiMapPin size={13} />];
              return (
                <CurrentItem key={i}>
                  <CurrentIcon>{icons[i]}</CurrentIcon>
                  <div>
                    <CurrentTitle>{title}</CurrentTitle>
                    <CurrentSub>{sub}</CurrentSub>
                  </div>
                </CurrentItem>
              );
            })}
          </Card>

          {/* Stats */}
          <Card variants={fadeUp}>
            <CardLabel>{t.byNums}</CardLabel>
            <StatsGrid>
              {stats.map(({ num }, i) => (
                <StatBox key={i}>
                  <StatNum>{num}</StatNum>
                  <StatLabel>{t.statsLabels[i]}</StatLabel>
                </StatBox>
              ))}
            </StatsGrid>
          </Card>

          {/* Skills — full width */}
          <SkillsCard variants={fadeUp}>
            <CardLabel>{t.techStack}</CardLabel>
            <SkillsInner>
              {/* Animated bars for core languages */}
              <GroupSection>
                <GroupLabel>{t.coreLang}</GroupLabel>
                <BarsSection>
                  {skillBars.map(({ name, level }) => (
                    <SkillBar key={name} name={name} level={level} />
                  ))}
                </BarsSection>
              </GroupSection>

              {/* Tag clouds for the rest */}
              {tagGroups.map(({ label, tags }) => (
                <GroupSection key={label}>
                  <GroupLabel>{label}</GroupLabel>
                  <TagRow>
                    {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                  </TagRow>
                </GroupSection>
              ))}
            </SkillsInner>
          </SkillsCard>
        </BentoGrid>
      </Container>
    </Section>
  );
};

export default About;
