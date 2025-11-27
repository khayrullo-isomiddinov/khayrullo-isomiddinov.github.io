import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

const Divider = styled.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.accent}, transparent);
  width: 100px;
  margin: 0.75rem auto 2rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1.5rem;

  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 2.5rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


const AboutText = styled(motion.div)`
  max-width: 600px;
  padding: 1.5rem 1.75rem;
  background: ${({ theme }) => theme.colors.cardBg}CC;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  line-height: 1.8;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);

  p {
    margin-bottom: 1.25rem;
    font-weight: 400;
  }
`;

const HighlightBox = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const HighlightTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.6rem;
`;

const HighlightText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillsCategory = styled.div`
  margin-bottom: 1.25rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, transparent);
  }
`;

const SkillsDescription = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.4;
  font-style: italic;
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 1rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
`;

const SkillPercentage = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.8rem;
`;

const SkillBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SkillBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover});
  border-radius: 4px;
  position: relative;
  overflow: hidden;

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
      rgba(255, 255, 255, 0.2),
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
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.6rem;
  margin-top: 0.75rem;
`;

const SoftSkillTag = styled.span`
  padding: 0.45rem 0.75rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const renderSkillCategory = (title, skills, description = null) => (
    <SkillsCategory>
      <CategoryTitle>{title}</CategoryTitle>
      {description && <SkillsDescription>{description}</SkillsDescription>}
      {skills.map((skill, index) => (
        <SkillItem
          key={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          <SkillHeader>
            <SkillName>{skill.name}</SkillName>
            <SkillPercentage>{skill.level}%</SkillPercentage>
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
    </SkillsCategory>
  );

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </SectionTitle>
        <Divider />
        
        <ContentWrapper
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <LeftColumn>
            <AboutText variants={itemVariants}>
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
                Currently I am working on my thesis which focuses on building a real-time study-group event platform. I’m developing a FastAPI backend with clean models, proper indexing, and reliable state handling, and a React frontend that supports real-time chat through WebSockets. I use a vector-clock system to keep message ordering consistent even when clients lag or reconnect. The project covers event scheduling, role management, caching, and timezone correctness. I treat it like a production system, not a school assignment, to show I can design and ship a full-stack app end to end.
              </p>
            </AboutText>

            <HighlightBox variants={itemVariants}>
              <HighlightTitle>What I'm Looking For</HighlightTitle>
              <HighlightText>
                I'm searching for internship / junior opportunities to work on challenging projects and collaborate with 
                talented teams. May it be a development role, 
                system design, or problem-solving, I'm ready to bring my skills to the table!
              </HighlightText>
            </HighlightBox>

            

            <SkillsCategory>
              <CategoryTitle>Soft Skills</CategoryTitle>
              <SoftSkillsGrid>
                {softSkills.map((skill, index) => (
                  <SoftSkillTag key={index}>{skill}</SoftSkillTag>
                ))}
              </SoftSkillsGrid>
            </SkillsCategory>
          </LeftColumn>

          <SkillsContainer variants={itemVariants}>
            {renderSkillCategory(
              'Programming Languages',
              programmingLanguages,
              'Percentage represents knowledge depth and practical experience level.'
            )}
            
            {renderSkillCategory(
              'Frameworks & Libraries',
              frameworksAndTools
            )}

            {renderSkillCategory(
              'Databases & Systems',
              databasesAndSystems
            )}

            {renderSkillCategory(
              'Development Tools',
              devTools
            )}
          </SkillsContainer>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;

