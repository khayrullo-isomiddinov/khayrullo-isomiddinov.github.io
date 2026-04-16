import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// ── Layout ───────────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem);
  background: ${({ theme }) => theme.colors.surface};
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
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
`;

// ── Timeline ──────────────────────────────────────────────────────────────────

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.accent}60 0%,
      transparent 100%
    );
  }

  @media (min-width: 768px) {
    padding-left: 2.5rem;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2.25rem;

  &:last-child { margin-bottom: 0; }

  &::before {
    content: '';
    position: absolute;
    left: -2.43rem;
    top: 1.1rem;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accentDim};

    @media (min-width: 768px) {
      left: -2.85rem;
    }
  }
`;

const Card = styled.div`
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderAccent};
    background: rgba(255, 255, 255, 0.03);
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 580px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const TitleBlock = styled.div``;

const JobTitle = styled.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const Company = styled.p`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;

  @media (min-width: 580px) {
    text-align: right;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const BulletItem = styled.li`
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding-left: 1.1rem;
  position: relative;

  &::before {
    content: '–';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding-top: 1.1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const TechTag = styled.span`
  padding: 0.25rem 0.65rem;
  font-size: 0.77rem;
  font-weight: 500;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.accentDim};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid rgba(139, 92, 246, 0.2);
`;

// ── Data ─────────────────────────────────────────────────────────────────────

const experiences = [
  {
    title: 'Object-Oriented Programming Instructor',
    company: 'Eötvös Loránd University (ELTE)',
    location: 'Budapest, Hungary',
    period: '2025 – Present',
    description:
      'Teaching Java OOP to undergraduate students through labs, lectures, and individual mentorship.',
    bullets: [
      'Explain core concepts: encapsulation, inheritance, polymorphism, interfaces, and design patterns',
      'Design weekly assignments and practical coding exercises aligned with course objectives',
      'Mentor students on clean code practices, debugging strategies, and problem decomposition',
      'Grade coursework via Neptun and coordinate with the department on academic standards',
    ],
    tech: ['Java', 'OOP', 'Design Patterns', 'Data Structures', 'Algorithms'],
  },
  {
    title: 'Frontend Engineering Intern',
    company: 'LimeLight',
    location: 'Oslo, Norway',
    period: 'Sep 2025 – Dec 2025',
    description:
      'Built and maintained frontend features for a production web application used by real customers.',
    bullets: [
      'Built reusable React components with state management and REST API integration',
      'Diagnosed and resolved UI bugs, improving page-load performance on critical user flows',
      'Refactored legacy code into cleaner, modular structures under tight deadlines',
    ],
    tech: ['React', 'JavaScript', 'REST APIs', 'Git'],
  },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Experience = () => (
  <Section id="experience">
    <Container>
      <SectionHeader>
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          Where I've Worked
        </SectionTitle>
      </SectionHeader>

      <Timeline>
        {experiences.map((exp, i) => (
          <TimelineItem
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.08 }}
          >
            <Card>
              <CardTop>
                <TitleBlock>
                  <JobTitle>{exp.title}</JobTitle>
                  <Company>{exp.company}</Company>
                </TitleBlock>
                <Meta>
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </Meta>
              </CardTop>

              <Description>{exp.description}</Description>

              <BulletList>
                {exp.bullets.map((b, idx) => (
                  <BulletItem key={idx}>{b}</BulletItem>
                ))}
              </BulletList>

              <TechRow>
                {exp.tech.map(t => <TechTag key={t}>{t}</TechTag>)}
              </TechRow>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  </Section>
);

export default Experience;
