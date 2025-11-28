import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const ProjectsSection = styled.section`
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Divider = styled.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.accent}, transparent);
  width: 100px;
  margin: 1rem auto 3rem;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const ProjectCard = styled(motion.div)`
  background: linear-gradient(145deg, #1a1a1f, #121216);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.28s ease;

  box-shadow:
    0 8px 20px rgba(0,0,0,0.35),
    0 16px 40px rgba(0,0,0,0.45);

  &:hover {
    transform: translateY(-12px) scale(1.03);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow:
      0 12px 28px rgba(0,0,0,0.45),
      0 22px 50px rgba(0,0,0,0.55);
  }
`;
const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url('${props => props.imageUrl || ''}') center/cover;
    opacity: 1;
    transition: transform 0.4s ease;
  }

  /* smooth zoom on hover */
  ${ProjectCard}:hover &::before {
    transform: scale(1.08);
  }
`;


const ProjectIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0.5;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.accent}15;
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.accent}30;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ViewMoreButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.modal};
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ModalImage = styled.div`
  width: 100%;
  height: 300px;
  background: null;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('${props => props.imageUrl || ''}') center/cover;
    opacity: ${props => props.imageUrl ? 0.4 : 0};
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ModalDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ModalTechStack = styled.div`
  margin-bottom: 2rem;
`;

const ModalTechTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ModalLinkButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
  }
`;

const SecondaryLinkButton = styled(ModalLinkButton)`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const myProjects = [
  {
    id: 1,
    title: 'PeerPrep',
    description: 'PeerPrep is a full-stack study-group platform built with FastAPI on the backend and React on the frontend. It lets users create and join study events, chat in real time, and improve their event descriptions and cover images with integrated AI. The system uses WebSockets for messaging and applies vector clock synchronization to keep messages in causal order across clients. It includes JWT authentication with Argon2 hashing, an XP and streak-based gamification engine, and a responsive interface built with TailwindCSS. Performance is improved with caching, lazy loading, optimistic updates, and GZip compression. The backend uses SQLModel with a normalized SQLite schema and follows a modular service-based architecture. The project demonstrates skills in backend engineering with FastAPI, frontend development with React, real-time communication, distributed system concepts, OpenAI API integration, authentication and security, API design, caching strategies, and production-grade error handling.',
    longDescription: 'PeerPrep is a full-stack study-group platform built with FastAPI on the backend and React on the frontend. It lets users create and join study events, chat in real time, and improve their event descriptions and cover images with integrated AI. The system uses WebSockets for messaging and applies vector clock synchronization to keep messages in causal order across clients. It includes JWT authentication with Argon2 hashing, an XP and streak-based gamification engine, and a responsive interface built with TailwindCSS. Performance is improved with caching, lazy loading, optimistic updates, and GZip compression. The backend uses SQLModel with a normalized SQLite schema and follows a modular service-based architecture. The project demonstrates skills in backend engineering with FastAPI, frontend development with React, real-time communication, distributed system concepts, OpenAI API integration, authentication and security, API design, caching strategies, and production-grade error handling.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/PeerPrep',
    liveLink: 'https://github.com/khayrullo-isomiddinov/PeerPrep',
    techStack: ['FastAPI', 'SQLModel', 'SQLite', 'WebSockets', 'JWT Auth', 'React 19', 'WebSockets with vector-clock synchronization', 'OpenAI API', 'CORS rules'],
    imageUrl: new URL('../assets/images/peerprep.png', import.meta.url).href,

  },
  {
    id: 2,
    title: 'Polaris LMS',
    description: 'Learning Management System (LMS) is a full-stack web application built with Laravel that handles course and assignment management for teachers and students. Teachers can create subjects, add assignments with deadlines and point values, and grade student submissions with feedback. Students can enroll in subjects, view assignments, and submit their work. The system includes authentication, profile management, and role-based dashboards. The interface is responsive and styled with Tailwind CSS. It uses Laravel 12, PHP 8.2+, Laravel Breeze, SQLite, Blade, and Tailwind. The project demonstrates full-stack PHP development, database modeling with Eloquent ORM, REST routing, role-based access control, form validation, and secure authentication.',
    longDescription: 'Learning Management System (LMS) is a full-stack web application built with Laravel that handles course and assignment management for teachers and students. Teachers can create subjects, add assignments with deadlines and point values, and grade student submissions with feedback. Students can enroll in subjects, view assignments, and submit their work. The system includes authentication, profile management, and role-based dashboards. The project demonstrates full-stack PHP development, database modeling with Eloquent ORM, REST routing, role-based access control, form validation, and secure authentication.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/polarisLMS',
    liveLink: 'https://github.com/khayrullo-isomiddinov/polarisLMS',
    techStack: ['Laravel 12', 'PHP 8', 'Blade Template', 'SQLite', 'MVC Architecture', 'Composer'],
    imageUrl: new URL('../assets/images/polaris.png', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Booklovers-Hub',
    description: 'Booklovers-Hub is a web application built with Laravel and Blade templating that offers a social platform for readers. Users can create accounts, follow or unfollow other users, share books, leave reviews, and build their own virtual book collections. The system supports user profiles, book records, reviews, social connections, and book sharing — enabling a community-driven reading experience. Built with PHP and Laravel, it uses relational database architecture, secure authentication and authorization, and a responsive UI for smooth user interaction. The project demonstrates full-stack web development, database modeling, user-management logic, social-feature implementation, and skill with Laravel ecosystem.',
    longDescription: 'Booklovers-Hub is a web application built with Laravel and Blade templating that offers a social platform for readers. Users can create accounts, follow or unfollow other users, share books, leave reviews, and build their own virtual book collections. The system supports user profiles, book records, reviews, social connections, and book sharing — enabling a community-driven reading experience. Built with PHP and Laravel, it uses relational database architecture, secure authentication and authorization, and a responsive UI for smooth user interaction. The project demonstrates full-stack web development, database modeling, user-management logic, social-feature implementation, and skill with Laravel ecosystem.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/booklovers-hub',
    liveLink: 'https://github.com/khayrullo-isomiddinov/booklovers-hub',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    imageUrl: new URL('../assets/images/books.jpeg', import.meta.url).href,
  },
  {
    id: 4,
    title: 'Stargate Game',
    description: 'An engaging, multiplayer grid-based game designed to enhance my web development skills, where players embark on a strategic quest to locate and collect scattered debris fragments.',
    longDescription: 'Stargate Game is a multiplayer web-based game that combines strategy and exploration. Players navigate through a grid-based world, searching for debris fragments while competing with other players. The game features real-time multiplayer functionality, dynamic game mechanics, and an engaging user interface. Built to showcase advanced web development skills, this project demonstrates proficiency in frontend frameworks, real-time communication, and game development principles.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/Stargate-Game',
    liveLink: 'https://6797fbbf6daef38935426e97--gentle-frangollo-fbc645.netlify.app/',
    techStack: ['HTML', ' CSS', 'JavaScript'],
    imageUrl: new URL('../assets/images/gate.jpeg', import.meta.url).href,
  },
  {
    id: 5,
    title: 'Comment Remover',
    description: 'A VSCode extension to remove comments. Supports JavaScript, TypeScript, Python, C, C++, PHP, and Java. Streamline your code cleanup process with this powerful developer tool.',
    longDescription: 'Comment Remover is a Visual Studio Code extension designed to help developers quickly clean up their code by removing comments. The extension supports multiple programming languages including JavaScript, TypeScript, Python, C, C++, PHP, and Java. It features intelligent comment detection, batch processing capabilities, and customizable options for different comment styles. This tool has been downloaded by thousands of developers and has received positive feedback for its reliability and ease of use.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/comment-remover-vscode-ext',
    liveLink: 'https://marketplace.visualstudio.com/items?itemName=KhayrulloIsomiddinov.khayrullo-comment-remover&ssr=false#review-details',
    techStack: ['TypeScript', 'VSCode API', 'Node.js'],
    imageUrl: new URL('../assets/images/vscode.png', import.meta.url).href,
  },
  {
    id: 6,
    title: 'MoodLens: AI Therapist',
    description: 'MoodLens is an AI-powered augmented reality (AR) application designed to analyze emotional states and enhance well-being. Using facial recognition, voice analysis, and interactive AR therapy, MoodLens provides real-time insights and tools for emotional balance.',
    longDescription: 'MoodLens is an AI-powered augmented reality (AR) application designed to analyze emotional states and enhance well-being. Using facial recognition, voice analysis, and interactive AR therapy, MoodLens provides real-time insights and tools for emotional balance.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/mood-lens',
    liveLink: 'https://khayrullo-isomiddinov.github.io/mood-lens/',
    techStack: ['React', 'Node.js'],
    imageUrl: new URL('../assets/images/moodlens.png', import.meta.url).href,
  }
];

const MinorToggleButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 2rem auto 0;
  display: block;
  width: fit-content;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }
`;


const minorProjects = [
  {
    id: 101,
    title: "Knights Game",
    description: "A Java Swing application implementing a “Knight Tournament” strategy game on an NxN grid. Two white and two black knights move in legal chess knight patterns, painting tiles with their color. The goal is to form four connected painted tiles in a line. Includes full turn-based logic, win detection, move validation, and a resizable GUI with interactive board controls.",
    longDescription: "A Java Swing application implementing a “Knight Tournament” strategy game on an NxN grid. Two white and two black knights move in legal chess knight patterns, painting tiles with their color. The goal is to form four connected painted tiles in a line. Includes full turn-based logic, win detection, move validation, and a resizable GUI with interactive board controls.",
    repoLink: "https://github.com/khayrullo-isomiddinov",
    liveLink: "#",
    techStack: ["Java OOP", "Swing GUI programming", "Event-driven design", "State management"],
    imageUrl: new URL('../assets/images/java.png', import.meta.url).href,
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMinor, setShowMinor] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Here are some of my recent projects. Click on any project to learn more.
        </SectionSubtitle>
        <Divider />

        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}

        >
          {myProjects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              onClick={() => openModal(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectImage imageUrl={project.imageUrl}>

              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.slice(0, 3).map((tech, idx) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                  {project.techStack.length > 3 && (
                    <TechTag>+{project.techStack.length - 3} more</TechTag>
                  )}
                </TechStack>
                <ViewMoreButton>View Details</ViewMoreButton>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        <MinorToggleButton onClick={() => setShowMinor(!showMinor)}>
          {showMinor ? "Hide Minor Projects" : "View Minor Projects"}
        </MinorToggleButton>

        {showMinor && (
          <ProjectsGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ marginTop: "2rem" }}
          >
            {minorProjects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={cardVariants}
                onClick={() => openModal(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectImage imageUrl={project.imageUrl} />
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TechStack>
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                      <TechTag key={idx}>{tech}</TechTag>
                    ))}
                    {project.techStack.length > 3 && (
                      <TechTag>+{project.techStack.length - 3} more</TechTag>
                    )}
                  </TechStack>

                  <ViewMoreButton>View Details</ViewMoreButton>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        )}


      </Container>

      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <ModalCloseButton onClick={closeModal}>
                <FiX size={20} />
              </ModalCloseButton>

              <ModalImage imageUrl={selectedProject.imageUrl}>

              </ModalImage>

              <ModalBody>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalDescription>{selectedProject.longDescription}</ModalDescription>

                <ModalTechStack>
                  <ModalTechTitle>Technologies Used</ModalTechTitle>
                  <TechStack>
                    {selectedProject.techStack.map((tech, idx) => (
                      <TechTag key={idx}>{tech}</TechTag>
                    ))}
                  </TechStack>
                </ModalTechStack>

                <ModalLinks>
                  {selectedProject.liveLink && (
                    <ModalLinkButton
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink size={18} />
                      View Live
                    </ModalLinkButton>
                  )}
                  {selectedProject.repoLink && (
                    <SecondaryLinkButton
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub size={18} />
                      View Code
                    </SecondaryLinkButton>
                  )}
                </ModalLinks>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
};

export default Projects;
