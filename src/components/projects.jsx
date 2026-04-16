import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiChevronDown } from 'react-icons/fi';

// ── Layout ───────────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: clamp(5rem, 10vw, 8rem) clamp(1.5rem, 6vw, 5rem);
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1100px;
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

const SectionSub = styled(motion.p)`
  margin-top: 0.75rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 480px;
`;

// ── Grid & Cards ─────────────────────────────────────────────────────────────

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px)  { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.25s ease, transform 0.22s ease, box-shadow 0.22s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.28);
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('${({ imageUrl }) => imageUrl}') center / cover no-repeat;
    transition: transform 0.5s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 55%,
      ${({ theme }) => theme.colors.background}88 100%
    );
  }

  ${ProjectCard}:hover &::before {
    transform: scale(1.06);
  }
`;

const CardBody = styled.div`
  padding: 1.4rem 1.5rem 1.6rem;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  font-size: 0.85rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.1rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  padding: 0.22rem 0.6rem;
  background: ${({ theme }) => theme.colors.accentDim};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid rgba(139, 92, 246, 0.18);
  border-radius: 4px;
`;

const DetailsBtn = styled.button`
  width: 100%;
  padding: 0.65rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 7px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

// ── Minor Projects Toggle ─────────────────────────────────────────────────────

const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin: 2.5rem auto 0;
  padding: 0.65rem 1.4rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

// ── Modal ─────────────────────────────────────────────────────────────────────

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  backdrop-filter: blur(6px);
`;

const ModalCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  max-width: 860px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.modal};
`;

const ModalImageWrapper = styled.div`
  width: 100%;
  height: 260px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('${({ imageUrl }) => imageUrl}') center / cover no-repeat;
    opacity: 0.45;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 30%, ${({ theme }) => theme.colors.surface} 100%);
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ModalBody = styled.div`
  padding: 2rem 2rem 2.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const ModalDesc = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.75rem;
`;

const ModalTechTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.75rem;
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.75rem 1.4rem;
  background: ${({ theme }) => theme.colors.accent};
  color: #fff;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.35);
  }
`;

const SecondaryLink = styled(PrimaryLink)`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1.5px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background: ${({ theme }) => theme.colors.accentDim};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    box-shadow: none;
  }
`;

// ── Data ─────────────────────────────────────────────────────────────────────

const myProjects = [
  {
    id: 1,
    title: 'PeerPrep',
    description:
      'A real-time study-group platform with WebSocket chat, vector-clock message synchronisation, AI-assisted event descriptions, and a gamification engine built on FastAPI and React.',
    longDescription:
      'PeerPrep is a full-stack study-group platform built with FastAPI and React. Users create and join study events, chat in real time, and enhance their posts with AI-generated descriptions and cover images. The chat system uses WebSockets with a vector-clock algorithm to maintain causal message ordering across clients. The backend includes JWT authentication with Argon2 hashing, an XP and streak-based gamification engine, caching, lazy loading, optimistic updates, and GZip compression. The data layer uses SQLModel on top of SQLite with a normalised schema and modular service architecture.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/PeerPrep',
    liveLink: 'https://github.com/khayrullo-isomiddinov/PeerPrep',
    techStack: ['FastAPI', 'SQLModel', 'SQLite', 'WebSockets', 'React 19', 'JWT Auth', 'OpenAI API', 'Vector Clocks'],
    imageUrl: new URL('../assets/images/peerprep.png', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Polaris LMS',
    description:
      'A full-stack learning management system for teachers and students — assignment management, grading, role-based dashboards, and secure authentication built on Laravel.',
    longDescription:
      'Polaris is a full-stack Learning Management System built with Laravel. Teachers create subjects and assignments with deadlines and point values, then grade student submissions with written feedback. Students enrol in subjects, view all assignments, and submit their work. The system includes role-based dashboards, authentication via Laravel Breeze, profile management, and a clean responsive interface styled with Tailwind CSS. It demonstrates full-stack PHP development, Eloquent ORM, RESTful routing, RBAC, form validation, and secure auth.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/polarisLMS',
    liveLink: 'https://github.com/khayrullo-isomiddinov/polarisLMS',
    techStack: ['Laravel 12', 'PHP 8', 'Blade', 'SQLite', 'Tailwind CSS', 'MVC'],
    imageUrl: new URL('../assets/images/polaris.png', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Booklovers Hub',
    description:
      'A social reading platform where users follow each other, share books, leave reviews, and build virtual collections — built with Laravel and a relational database.',
    longDescription:
      'Booklovers Hub is a community-driven reading platform built with Laravel. Users create accounts, follow or unfollow other readers, share books, write reviews, and build personal collections. The system supports full user profiles, book records, social connections, and a shared feed. The project demonstrates relational database design, user-management logic, social-feature implementation, secure authentication, and the Laravel ecosystem.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/booklovers-hub',
    liveLink: 'https://github.com/khayrullo-isomiddinov/booklovers-hub',
    techStack: ['PHP', 'MySQL', 'Laravel', 'Blade', 'JavaScript'],
    imageUrl: new URL('../assets/images/books.jpeg', import.meta.url).href,
  },
  {
    id: 4,
    title: 'Stargate Game',
    description:
      'A multiplayer grid-based strategy game where players navigate the board and collect scattered debris fragments, built with vanilla web technologies.',
    longDescription:
      'Stargate is a browser-based multiplayer grid game. Players navigate a shared board and compete to collect debris fragments. The game features real-time multiplayer functionality, turn-based mechanics, and a responsive game interface. It is deployed live and demonstrates proficiency in vanilla JavaScript, DOM manipulation, and game state management.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/Stargate-Game',
    liveLink: 'https://khayrullo.com/Stargate-Game/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: new URL('../assets/images/gate.png', import.meta.url).href,
  },
  {
    id: 5,
    title: 'Comment Remover',
    description:
      'A published VSCode extension that strips comments from source files across seven languages — JavaScript, TypeScript, Python, C, C++, PHP, and Java.',
    longDescription:
      'Comment Remover is a Visual Studio Code extension that helps developers quickly clean up source files by removing all comments. It supports JavaScript, TypeScript, Python, C, C++, PHP, and Java with intelligent language-aware comment detection. The extension has been downloaded thousands of times and is available on the VS Code Marketplace. It demonstrates TypeScript development, the VS Code extension API, and publishing to a production marketplace.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/comment-remover-vscode-ext',
    liveLink: 'https://marketplace.visualstudio.com/items?itemName=KhayrulloIsomiddinov.khayrullo-comment-remover',
    techStack: ['TypeScript', 'VS Code API', 'Node.js'],
    imageUrl: new URL('../assets/images/vscode.png', import.meta.url).href,
  },
  {
    id: 6,
    title: 'MoodLens',
    description:
      'An AI-powered augmented reality application that analyses emotional states in real time using facial recognition and voice analysis, providing interactive well-being tools.',
    longDescription:
      'MoodLens is an AI-powered AR application designed to analyse emotional states and support well-being. It combines facial recognition, voice analysis, and interactive AR therapy to provide real-time emotional insights. Built with React and Node.js, it demonstrates integration of machine-learning APIs, real-time media processing, and an interactive frontend UI.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/mood-lens',
    liveLink: 'https://khayrullo-isomiddinov.github.io/mood-lens/',
    techStack: ['React', 'Node.js', 'AI / ML APIs'],
    imageUrl: new URL('../assets/images/moodlens.png', import.meta.url).href,
  },
];

const minorProjects = [
  {
    id: 101,
    title: 'Knights Game',
    description:
      'A Java Swing strategy game on an NxN grid where two white and two black knights paint tiles with their colour. The first player to form four connected tiles in a line wins.',
    longDescription:
      'Knights Game is a Java Swing application implementing a turn-based "Knight Tournament" strategy game. Two white and two black knights move in legal chess-knight patterns, painting tiles with their colour. The goal is to form four connected painted tiles in a line. The project includes full turn-based logic, win detection, move validation, and a resizable GUI with interactive controls. It demonstrates object-oriented Java, Swing GUI programming, event-driven design, and game state management.',
    repoLink: 'https://github.com/khayrullo-isomiddinov',
    liveLink: '#',
    techStack: ['Java', 'Swing', 'OOP', 'Event-Driven Design'],
    imageUrl: new URL('../assets/images/java.png', import.meta.url).href,
  },
];

// ── Variants ──────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const modalVar = {
  hidden:  { opacity: 0, scale: 0.93, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
  exit:    { opacity: 0, scale: 0.93, y: 20, transition: { duration: 0.2 } },
};

// ── Component ─────────────────────────────────────────────────────────────────

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [showMinor, setShowMinor] = useState(false);

  const open = (project) => {
    setSelected(project);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setSelected(null);
    document.body.style.overflow = '';
  };

  return (
    <Section id="projects">
      <Container>
        <SectionHeader>
          <SectionLabel>Projects</SectionLabel>
          <SectionTitle
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            Things I've Built
          </SectionTitle>
          <SectionSub
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
          >
            Click any card for the full story.
          </SectionSub>
        </SectionHeader>

        <Grid
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {myProjects.map(project => (
            <ProjectCard
              key={project.id}
              variants={fadeUp}
              onClick={() => open(project)}
              whileTap={{ scale: 0.99 }}
            >
              <CardImage imageUrl={project.imageUrl} />
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <CardDesc>{project.description}</CardDesc>
                <TagRow>
                  {project.techStack.slice(0, 3).map(t => <Tag key={t}>{t}</Tag>)}
                  {project.techStack.length > 3 && (
                    <Tag>+{project.techStack.length - 3}</Tag>
                  )}
                </TagRow>
                <DetailsBtn>View Details</DetailsBtn>
              </CardBody>
            </ProjectCard>
          ))}
        </Grid>

        <ToggleBtn onClick={() => setShowMinor(v => !v)}>
          {showMinor ? 'Hide Minor Projects' : 'View Minor Projects'}
          <FiChevronDown
            size={15}
            style={{ transform: showMinor ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }}
          />
        </ToggleBtn>

        {showMinor && (
          <Grid
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ marginTop: '2rem' }}
          >
            {minorProjects.map(project => (
              <ProjectCard
                key={project.id}
                variants={fadeUp}
                onClick={() => open(project)}
                whileTap={{ scale: 0.99 }}
              >
                <CardImage imageUrl={project.imageUrl} />
                <CardBody>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDesc>{project.description}</CardDesc>
                  <TagRow>
                    {project.techStack.slice(0, 3).map(t => <Tag key={t}>{t}</Tag>)}
                    {project.techStack.length > 3 && <Tag>+{project.techStack.length - 3}</Tag>}
                  </TagRow>
                  <DetailsBtn>View Details</DetailsBtn>
                </CardBody>
              </ProjectCard>
            ))}
          </Grid>
        )}
      </Container>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <ModalCard
              variants={modalVar}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <CloseBtn onClick={close} aria-label="Close">
                <FiX size={18} />
              </CloseBtn>

              <ModalImageWrapper imageUrl={selected.imageUrl} />

              <ModalBody>
                <ModalTitle>{selected.title}</ModalTitle>
                <ModalDesc>{selected.longDescription}</ModalDesc>

                <ModalTechTitle>Technologies</ModalTechTitle>
                <TagRow>
                  {selected.techStack.map(t => <Tag key={t}>{t}</Tag>)}
                </TagRow>

                <ModalLinks>
                  {selected.liveLink && selected.liveLink !== '#' && (
                    <PrimaryLink href={selected.liveLink} target="_blank" rel="noreferrer">
                      <FiExternalLink size={16} /> View Live
                    </PrimaryLink>
                  )}
                  {selected.repoLink && (
                    <SecondaryLink href={selected.repoLink} target="_blank" rel="noreferrer">
                      <FiGithub size={16} /> Source Code
                    </SecondaryLink>
                  )}
                </ModalLinks>
              </ModalBody>
            </ModalCard>
          </Overlay>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;
