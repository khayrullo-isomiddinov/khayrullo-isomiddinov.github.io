import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const AboutSection = styled.section`
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;

  /* Modern gradient background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      ${({ theme }) => theme.colors.accent}08 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      ${({ theme }) => theme.colors.accent}05 0%,
      transparent 50%
    );
    pointer-events: none;
    z-index: 0;
  }

  /* Animated grid pattern */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(${({ theme }) => theme.colors.accent}03 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.accent}03 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 2rem;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.text} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  position: relative;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const Divider = styled(motion.div)`
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.accent}40,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accent}40,
    transparent
  );
  width: 120px;
  margin: 0 auto 3rem;
  border-radius: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent}80;
  }

  @media (min-width: 768px) {
    width: 150px;
    height: 4px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;

const AboutText = styled(motion.div)`
  padding: 2rem 1.5rem;
  background: ${({ theme }) => 
    `linear-gradient(135deg, ${theme.colors.cardBg}F0 0%, ${theme.colors.cardBg}D0 100%)`
  };
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border}40;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  border-radius: 16px;
  line-height: 1.9;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px ${({ theme }) => theme.colors.border}20,
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accentHover}
    );
    transition: width 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.15),
      0 0 0 1px ${({ theme }) => theme.colors.border}40,
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 0 40px ${({ theme }) => theme.colors.accent}20;
  }

  p {
    margin-bottom: 1.5rem;
    font-weight: 400;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.accent};
      font-size: 1.2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
    font-size: 1.05rem;
  }
`;

const HighlightBox = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.cardBg}F8 0%,
    ${({ theme }) => theme.colors.cardBg}E8 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border}50;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 0 0 1px ${({ theme }) => theme.colors.border}20;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.accent}10 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 
      0 16px 48px rgba(0, 0, 0, 0.12),
      0 0 60px ${({ theme }) => theme.colors.accent}15;
    border-color: ${({ theme }) => theme.colors.accent}80;

    &::before {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const HighlightTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accentHover}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent},
      transparent
    );
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HighlightText = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  position: relative;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;

const SkillsCategory = styled(motion.div)`
  margin-bottom: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.cardBg}F0 0%,
    ${({ theme }) => theme.colors.cardBg}D0 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid ${({ theme }) => theme.colors.border}40;
  border-radius: 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px ${({ theme }) => theme.colors.border}20;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: ${({ theme }) => theme.colors.border}60;
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.15),
      0 0 0 1px ${({ theme }) => theme.colors.border}40;
  }
`;

const CategoryButton = styled(motion.button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.accent},
      ${({ theme }) => theme.colors.accentHover}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.cardBg}40;
  }

  @media (min-width: 768px) {
    padding: 1.75rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.text} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  letter-spacing: -0.3px;
  margin: 0;
  flex: 1;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.15rem;
  }
`;

const ChevronIcon = styled(motion.div)`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.accent}15;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${CategoryButton}:hover & {
    background: ${({ theme }) => theme.colors.accent}25;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    width: 28px;
    height: 28px;
  }
`;

const CategoryContent = styled(motion.div)`
  overflow: hidden;
`;

const CategoryInner = styled.div`
  padding: 0 1.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem 1rem;
  }
`;

const SkillsDescription = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-style: italic;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.cardBg}80;
  border-left: 3px solid ${({ theme }) => theme.colors.accent}60;
  border-radius: 8px;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 1.25rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
`;

const SkillName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillPercentage = styled(motion.span)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.accent}15;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.accent}30;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border}30;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.accent},
    ${({ theme }) => theme.colors.accentHover},
    ${({ theme }) => theme.colors.accent}
  );
  background-size: 200% 100%;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 0 10px ${({ theme }) => theme.colors.accent}40,
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const SoftSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.6rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const SoftSkillTag = styled(motion.span)`
  padding: 0.7rem 1rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.cardBg}F8 0%,
    ${({ theme }) => theme.colors.cardBg}E8 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1.5px solid ${({ theme }) => theme.colors.border}40;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.accent}20,
      transparent
    );
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    border-radius: 50%;
  }

  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 
      0 8px 24px ${({ theme }) => theme.colors.accent}20,
      0 0 0 2px ${({ theme }) => theme.colors.accent}10;

    &::before {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.85rem;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 0.85rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LanguageItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateX(5px);
  }
`;

const LanguageName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
`;

const LanguageLevel = styled.span`
  font-weight: 700;
  font-size: 1rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: ${({ theme, level }) => {
    if (level === 'C2') return `${theme.colors.accent}25`;
    if (level === 'C1') return `${theme.colors.accent}20`;
    if (level === 'B2') return `${theme.colors.accent}15`;
    return `${theme.colors.accent}10`;
  }};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme, level }) => {
    if (level === 'C2') return theme.colors.accent;
    if (level === 'C1') return `${theme.colors.accent}80`;
    if (level === 'B2') return `${theme.colors.accent}60`;
    return `${theme.colors.accent}40`;
  }};
`;

// Skill data separated by category
const programmingLanguages = [
  { name: 'Python', level: 95 },
  { name: 'Java', level: 80 },
  { name: 'JavaScript', level: 70 },
  { name: 'C#', level: 65 },
  { name: 'C', level: 60 },
  { name: 'PHP', level: 58 },
  { name: 'ADA', level: 35 },
];

const frameworksAndTools = [
  { name: 'React', level: 88 },
  { name: 'FastAPI', level: 85 },
  { name: 'Node.js', level: 72 },
  { name: 'Laravel', level: 55 },
];

const databasesAndSystems = [
  { name: 'SQL (Databases)', level: 92 },
  { name: 'Linux', level: 92 },
  { name: 'Operating Systems', level: 90 },
];

const devTools = [
  { name: 'Git', level: 93 },
  { name: 'REST APIs', level: 90 },
  { name: 'OOP Design Patterns', level: 87 },
  { name: 'Docker', level: 55 },
];

const languages = [
  { name: 'Uzbek', level: 'C2' },
  { name: 'English', level: 'C2' },
  { name: 'Russian', level: 'C1' },
  { name: 'French', level: 'B1' },
];

const softSkills = [
  'Leadership',
  'Team Collaboration',
  'Critical Thinking',
  'Problem-Solving',
  'Adaptability',
  'Time Management',
  'Communication',
  'Project Management'
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.6]);
  
  const [openCategories, setOpenCategories] = useState({
    programming: true,
    frameworks: false,
    databases: false,
    devTools: false,
  });

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const dividerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const percentageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (level) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const contentVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
        opacity: {
          duration: 0.3,
          delay: 0.1,
        },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  };

  const chevronVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const renderSkillCategory = (title, skills, description = null, categoryKey) => {
    const isOpen = openCategories[categoryKey];
    
    return (
      <SkillsCategory
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={itemVariants}
      >
        <CategoryButton
          onClick={() => toggleCategory(categoryKey)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <CategoryTitle>{title}</CategoryTitle>
          <ChevronIcon
            variants={chevronVariants}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <FiChevronDown />
          </ChevronIcon>
        </CategoryButton>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <CategoryContent
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
            >
              <CategoryInner>
                {description && (
                  <SkillsDescription as={motion.p} variants={itemVariants}>
                    {description}
                  </SkillsDescription>
                )}
                {skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    custom={index}
                  >
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillPercentage
                        variants={percentageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.level}
                      >
                        {skill.level}%
                      </SkillPercentage>
                    </SkillHeader>
                    <SkillBarContainer>
                      <SkillBar
                        custom={skill.level}
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </SkillBarContainer>
                  </SkillItem>
                ))}
              </CategoryInner>
            </CategoryContent>
          )}
        </AnimatePresence>
      </SkillsCategory>
    );
  };

  return (
    <AboutSection id="about" style={{ opacity }}>
      <Container>
        <SectionTitle
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>
        <Divider
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        
        <ContentWrapper
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <LeftColumn>
            <AboutText 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <p>
                Hey there, thanks for checking out my portfolio!
              </p>
              <p>
                Now that you are here, let me tell you a little bit about me. I am a student of computer science, and I am currently 
                trying to break into the tech industry. I am doing so by thoroughly learning about databases, backend development (mainly using python FastAPI), 
                as well as grasping the foundations of networking and configuration. I am taking CCNA prep courses in order to achieve it. 
              </p>
              <p>
                As a lifelong learner, I like to be proactive, and spend as much time as possible on self improvement and skills acquisition. 
                I mostly find myself enjoying my time tinkering with databases and the ways to optimize queries, learning in-depth about distributed systems, 
                as well as trying to constantly improve my grades. 
              </p>
              <p>
                Currently I am working on my thesis which focuses on building a real-time study-group event platform. I'm developing a FastAPI backend with clean models, proper indexing, and reliable state handling, and a React frontend that supports real-time chat through WebSockets. I use a vector-clock system to keep message ordering consistent even when clients lag or reconnect. The project covers event scheduling, role management, caching, and timezone correctness. I treat it like a production system, not a school assignment, to show I can design and ship a full-stack app end to end.
              </p>
            </AboutText>

            <HighlightBox 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <HighlightTitle>What I'm Looking For</HighlightTitle>
              <HighlightText>
                I'm searching for internship / junior opportunities to work on challenging projects and collaborate with 
                talented teams. May it be a development role, 
                system design, or problem-solving, I'm ready to bring my skills to the table!
              </HighlightText>
            </HighlightBox>

            <SkillsCategory
              as={motion.div}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <CategoryTitle as={motion.h3} variants={itemVariants}>Soft Skills</CategoryTitle>
              <SoftSkillsGrid>
                {softSkills.map((skill, index) => (
                  <SoftSkillTag 
                    key={index}
                    variants={skillTagVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    custom={index}
                  >
                    {skill}
                  </SoftSkillTag>
                ))}
              </SoftSkillsGrid>
            </SkillsCategory>
          </LeftColumn>

          <SkillsContainer variants={itemVariants}>
            {renderSkillCategory(
              'Programming Languages',
              programmingLanguages,
              'Percentage represents knowledge depth and practical experience level.',
              'programming'
            )}
            
            {renderSkillCategory(
              'Frameworks & Libraries',
              frameworksAndTools,
              null,
              'frameworks'
            )}

            {renderSkillCategory(
              'Databases & Systems',
              databasesAndSystems,
              null,
              'databases'
            )}

            {renderSkillCategory(
              'Development Tools',
              devTools,
              null,
              'devTools'
            )}
          </SkillsContainer>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;

