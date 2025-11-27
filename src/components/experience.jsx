import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 50vh;
  position: relative;
  width: 100%;
  display: block;
`;

const Container = styled.div`
  max-width: 1000px;
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
  margin: 0.75rem auto 2.5rem;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accentHover}, transparent);
  }

  @media (min-width: 768px) {
    padding-left: 3rem;
  }
`;

const ExperienceItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -1.75rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    border: 3px solid ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  }

  @media (min-width: 768px) {
    padding-left: 2.5rem;
    
    &::before {
      left: -2.25rem;
    }
  }
`;

const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateX(5px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);

    &::before {
      transform: scaleY(1);
    }
  }
`;

const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Company = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0;
`;

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.9rem;
  }
`;

const JobDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const Responsibilities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Responsibility = styled.li`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.6;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const TechTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.7rem;
  background: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.accent}30;
`;

// Experience data
const experiences = [
  {
    title: 'Object-Oriented Programming Instructor',
    company: 'Eötvös Loránd Tudományegyetem',
    location: 'Budapest, Hungary',
    period: '2025 - Present',
    description: 'Teaching Java OOP to undergraduates (labs + lectures).',
    responsibilities: [
      ' Explaining core concepts: encapsulation, inheritance, polymorphism, interfaces',
      ' Designing weekly assignments + practical coding exercises',
      ' Mentoring students on clean code, debugging, and problem-solving',
      ' Coordinating with the department to ensure course quality and academic standards',
      ' Grading students on Neptun platform.'
    ],
    technologies: ['React', 'Python', 'FastAPI', 'JavaScript', 'SQL', 'Git']
  },
  {
    title: 'Web Development Intern',
    company: 'LimeLight',
    location: 'Oslo, Norway',
    period: '2025, Sep - 2025, Dec',
    description: ' Worked on frontend features using React.',
    responsibilities: [
      ' Built reusable components, handled state management, and integrated REST APIs.',
      ' Fixed UI bugs, improved page load times, and refactored legacy code into cleaner, modular structures.',
      ' Shipped features under short deadlines without breaking existing pages.'
    ],
    technologies: ['Java', 'Python', 'C', 'C#', 'Algorithms', 'Data Structures']
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </SectionTitle>
        <Divider />

        <Timeline
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} variants={itemVariants}>
              <ExperienceCard>
                <JobHeader>
                  <div>
                    <JobTitle>
                      <FiBriefcase />
                      {exp.title}
                    </JobTitle>
                    <Company>{exp.company}</Company>
                  </div>
                </JobHeader>
                
                <JobMeta>
                  <MetaItem>
                    <FiCalendar />
                    {exp.period}
                  </MetaItem>
                  <MetaItem>
                    <FiMapPin />
                    {exp.location}
                  </MetaItem>
                </JobMeta>

                <JobDescription>{exp.description}</JobDescription>

                <Responsibilities>
                  {exp.responsibilities.map((resp, idx) => (
                    <Responsibility key={idx}>{resp}</Responsibility>
                  ))}
                </Responsibilities>

                <TechStack>
                  {exp.technologies.map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ExperienceCard>
            </ExperienceItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
