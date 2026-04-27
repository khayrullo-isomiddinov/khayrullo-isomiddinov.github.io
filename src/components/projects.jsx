import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX, FiChevronDown } from 'react-icons/fi';

// ── Layout ───────────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 6vw, 5rem) clamp(5rem, 10vw, 8rem);
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
  background: ${({ gradient, theme }) => gradient || theme.colors.surface};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ imageUrl }) => imageUrl
      ? `url('${imageUrl}') center / cover no-repeat`
      : 'none'};
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
  background: ${({ gradient, theme }) => gradient || theme.colors.background};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ imageUrl }) => imageUrl
      ? `url('${imageUrl}') center / cover no-repeat`
      : 'none'};
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
      'A real-time study platform where students form groups, chat live, and get AI help writing their event posts — built with FastAPI and React.',
    longDescription:
      'PeerPrep started as a simple study-group tool and grew into something much more interesting. Students create events, invite others, and chat in real time — with a vector-clock system keeping messages in the right order across every client. Posts can be written by hand or handed off to the AI, which generates a description and cover image on the spot. Under the hood there\'s JWT auth with Argon2 hashing, an XP and streak engine that keeps people coming back, and a FastAPI backend that leans on caching, lazy loading, and GZip to stay fast.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/PeerPrep',
    liveLink: 'https://github.com/khayrullo-isomiddinov/PeerPrep',
    techStack: ['FastAPI', 'SQLModel', 'SQLite', 'WebSockets', 'React 19', 'JWT Auth', 'OpenAI API', 'Vector Clocks'],
    imageUrl: new URL('../assets/images/peerprep.png', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Polaris LMS',
    description:
      'A learning management system where teachers post assignments, students submit work, and everyone gets their own dashboard — built on Laravel.',
    longDescription:
      'Polaris is a clean, no-frills LMS built with Laravel. Teachers set up subjects, post assignments with deadlines and point values, then mark submissions and leave written feedback. Students see everything laid out in their own dashboard and submit their work in a few clicks. The whole thing runs on role-based auth via Laravel Breeze, Eloquent ORM for the data layer, and Tailwind CSS for a tidy responsive look. Simple to use, solid underneath.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/polarisLMS',
    liveLink: 'https://github.com/khayrullo-isomiddinov/polarisLMS',
    techStack: ['Laravel 12', 'PHP 8', 'Blade', 'SQLite', 'Tailwind CSS', 'MVC'],
    imageUrl: new URL('../assets/images/polaris.png', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Erasmus+ Mobility Portal',
    description:
      'The live course selection portal for incoming Erasmus+ students at the University of Split — built for real students and actively maintained.',
    longDescription:
      'This one is live and in use. I built the official Erasmus+ course selection portal for the Faculty of Humanities and Social Sciences at the University of Split, replacing the old email-back-and-forth process with a clean four-step flow. Students fill in their details, declare their language level, then browse only the courses they\'re actually eligible for. Each submission gets a unique reference number so nothing slips through the cracks. On the coordinator side there\'s a full dashboard for reviewing applications, approving or rejecting individual courses, and managing the course catalogue. It\'s deployed on Render and handles real exchange students every semester.',
    repoLink: null,
    liveLink: 'https://unisplit-mobility.onrender.com',
    techStack: ['JavaScript', 'PHP', 'HTML / CSS', 'REST API', 'Render'],
    imageUrl: new URL('../assets/images/split.png', import.meta.url).href,
    gradient: 'linear-gradient(135deg, #003399 0%, #0052cc 55%, #1a73e8 80%, #003399 100%)',
  },
  
  {
    id: 4,
    title: 'Transport Tycoon',
    description:
      'A JavaFX desktop game where you build road and rail networks, send out buses and trains, and try to run a profitable transport company.',
    longDescription:
      'Transport Tycoon is a tile-based simulation game built in JavaFX. You start with a small map and limited funds, then slowly build out roads and railways, set up stations, and dispatch vehicles to carry passengers and cargo between cities. Revenue comes from efficient routes, so planning matters just as much as building. The project uses Maven for dependency management and Ant for the build pipeline — a good chance to work with proper Java tooling on a non-trivial codebase.',
    repoLink: 'https://szofttech.inf.elte.hu/software-technology-2026/group-12/team-404',
    liveLink: null,
    techStack: ['Java', 'JavaFX', 'Maven', 'Ant', 'OOP'],
    imageUrl: new URL('../assets/images/tycoon.png', import.meta.url).href,
  },
  {
    id: 5,
    title: 'Stargate Game',
    description:
      'A browser multiplayer game where players move around a shared grid and race to collect the most debris — no frameworks, just plain JavaScript.',
    longDescription:
      'Stargate is a live multiplayer grid game built from scratch with vanilla JavaScript. Players share the same board and take turns moving, trying to collect debris fragments before the other side does. There\'s no framework doing the heavy lifting — just clean DOM manipulation, game state logic, and a real-time multiplayer layer wired together by hand. It\'s live and playable right now.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/Stargate-Game',
    liveLink: 'https://khayrullo.com/Stargate-Game/',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: new URL('../assets/images/gate.png', import.meta.url).href,
  },
  {
    id: 6,
    title: 'Booklovers Hub',
    description:
      'A social platform for readers — follow friends, share books, write reviews, and build your personal collection, all built with Laravel.',
    longDescription:
      'Booklovers Hub is a reading community built on Laravel. You sign up, set up a profile, and start following other readers. You can share books, write reviews, and build up a personal collection over time. Everyone has a shared feed where new books and reviews show up. The database handles users, books, social connections, and reviews cleanly, and the whole thing sits behind secure authentication. It\'s a straightforward social app, but it covers a lot of ground.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/booklovers-hub',
    liveLink: 'https://github.com/khayrullo-isomiddinov/booklovers-hub',
    techStack: ['PHP', 'MySQL', 'Laravel', 'Blade', 'JavaScript'],
    imageUrl: new URL('../assets/images/books.jpeg', import.meta.url).href,
  },
  {
    id: 7,
    title: 'Comment Remover',
    description:
      'A published VS Code extension that removes all comments from your source files — supports seven languages and has thousands of downloads.',
    longDescription:
      'Comment Remover does one thing well: it strips comments out of your code. It works across JavaScript, TypeScript, Python, C, C++, PHP, and Java, with language-aware detection so it handles each syntax correctly. I published it to the VS Code Marketplace and it\'s picked up thousands of downloads. Shipping a real tool that people actually install and use was a good experience — it\'s not just a side project.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/comment-remover-vscode-ext',
    liveLink: 'https://marketplace.visualstudio.com/items?itemName=KhayrulloIsomiddinov.khayrullo-comment-remover',
    techStack: ['TypeScript', 'VS Code API', 'Node.js'],
    imageUrl: new URL('../assets/images/vscode.png', import.meta.url).href,
  },
  {
    id: 8,
    title: 'MoodLens',
    description:
      'An AR app that reads your facial expressions and tone of voice in real time, then uses AI to reflect back what you\'re feeling.',
    longDescription:
      'MoodLens combines facial recognition and voice analysis to pick up on how you\'re feeling, then layers AR feedback on top to make it interactive. The idea was to go beyond a simple mood tracker — it responds to you in the moment rather than asking you to log feelings manually. It\'s built with React and Node.js, hooked up to ML APIs for the emotion detection, and deployed live. Working out the real-time media processing side was the most interesting part.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/mood-lens',
    liveLink: 'https://khayrullo-isomiddinov.github.io/mood-lens/',
    techStack: ['React', 'Node.js', 'AI / ML APIs'],
    imageUrl: new URL('../assets/images/moodlens.png', import.meta.url).href,
  },
];

const minorProjects = [
  {
    id: 102,
    title: 'CLF-02 Flashcards',
    description:
      'An Anki-style flashcard app for prepping the AWS CLF-02 exam — flip through cards, track what you know, and drill the gaps.',
    longDescription:
      'A straightforward flashcard app built for grinding the AWS Cloud Practitioner (CLF-02) exam. It mimics the Anki flow — you see the question, think through your answer, flip the card, then mark yourself right or wrong. It\'s live on Render and covers the key CLF-02 topics so you can study anywhere without needing a full deck tool.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/clf-02-flashcards-app',
    liveLink: 'https://clf-02-flashcards-app.onrender.com/',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: new URL('../assets/images/flashcard.png', import.meta.url).href,
  },
  {
    id: 101,
    title: 'Knights Game',
    description:
      'A two-player Java Swing game where knights move in chess patterns, paint tiles as they go, and race to connect four in a line.',
    longDescription:
      'Knights Game is a turn-based strategy game built with Java Swing. Two players each control two knights — white and black — and take turns moving them in legal chess-knight patterns. Every tile a knight lands on gets painted its colour. The goal is to connect four of your painted tiles in a line before the other player does. It\'s clean and compact, with full move validation, win detection, and a resizable GUI.',
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
              <CardImage imageUrl={project.imageUrl} gradient={project.gradient} />
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
                <CardImage imageUrl={project.imageUrl} gradient={project.gradient} />
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

              <ModalImageWrapper imageUrl={selected.imageUrl} gradient={selected.gradient} />

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
