import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const StyledTitle = styled(motion.h2)`
  margin-bottom: 2rem; /* Add space below the title */
  text-align: center; /* Center the title if needed */
`;


const Spacer = styled.div`
  height: 80px; /* Same as header height */
`;


const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  h2 {
    margin-bottom: 2rem; /* Add space below the heading */
    text-align: center;
    font-size: 2.5rem; /* Adjust font size if needed */
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Ensures new projects appear below */
  gap: 2rem;
  margin-top: 2rem;
`;



const ProjectCard = styled(motion.div)`
  background-color: #112240;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  h3 {
    margin: 0 0 1rem 0;
    color: ${({ theme }) => theme.colors.accent};
  }

  p {
    margin: 0 0 1rem 0;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    margin-right: 1rem;

    &:hover {
      color: ${({ theme }) => theme.colors.hover};
    }
  }
`;

const parentVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const myProjects = [
  {
    title: 'Mood-Lens',
    description: 'Using facial recognition, voice analysis, and interactive AR therapy, MoodLens provides real-time insights and tools for emotional balance.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/mood-lens',
    liveLink: 'https://khayrullo-isomiddinov.github.io/mood-lens/',
  },
  {
    title: 'Comment Remover',
    description: 'A VSCode extension to remove comments. Supports JavaScript, TypeScript, Python, C, C++, PHP, and Java',
    repoLink: 'https://github.com/khayrullo-isomiddinov/comment-remover-vscode-ext',
    liveLink: 'https://marketplace.visualstudio.com/items?itemName=KhayrulloIsomiddinov.khayrullo-comment-remover&ssr=false#review-details',
  },
  {
    title: 'Stargate Game',
    description: 'An engaging, multiplayer grid-based game designed to enhance my web development skills, where players embark on a strategic quest to locate and collect scattered debris fragments.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/Stargate-Game',
    liveLink: 'https://6797fbbf6daef38935426e97--gentle-frangollo-fbc645.netlify.app/',
  },
  {
    title: 'Library Website',
    description: 'A dynamic PHP-powered online library system that allows users to create accounts, add books to their collection and mark them as read.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/booklovers-hub',
    liveLink: 'https://github.com/khayrullo-isomiddinov/booklovers-hub',
  },
  {
    title: 'Ikonik Services',
    description: 'A web-page with affiliate links that I have created for my workplace to ease the reservation process for services.',
    repoLink: 'https://github.com/khayrullo-isomiddinov/ikonikprojectweb',
    liveLink: 'https://sensational-zuccutto-5933f1.netlify.app/',
  }
];

const Divider = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
  width: 150px;
  margin: 1rem auto; /* Center it */
`;
const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <Divider />
      <ProjectGrid
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {myProjects.map((project, index) => (
          <ProjectCard key={index} variants={childVariants}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <a href={project.repoLink} target="_blank" rel="noreferrer">
                Code
              </a>
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
