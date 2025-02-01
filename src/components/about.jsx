import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem; /* Adds padding around the section */
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  h2 {
    margin-bottom: 2rem; /* Space below the heading */
    font-size: 2.5rem;
  }
`;

const Spacer = styled.div`
  height: 1rem; /* Adjust height to control the space */
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.accent};
  width: 200px;
  margin: 1rem auto; /* Center the divider */
`;

const AboutText = styled.p`
  max-width: 800px; /* Constrain the width of the text */
  margin: 0 auto; /* Center the text horizontally */
  line-height: 1.8; /* Improve readability by adding line spacing */
  text-align: justify; /* Align text neatly for a professional look */
  font-size: 1.1rem; /* Slightly larger font size for better legibility */
  color: ${({ theme }) => theme.colors.text}; /* Use text color from theme */
`;

const SkillsContainer = styled.div`
  max-width: 800px; /* Limit the width of the skills section */
  margin: 2rem auto; /* Center the section */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive grid layout */
  gap: 1rem; /* Add space between skills */
`;

const SkillItem = styled.li`
  list-style: none;
  text-align: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    transform: scale(1.05);
  }
`;


const About = () => {
    return (
      <AboutSection id="about">
        <h2>About Me</h2>
        <Divider />
        <AboutText>
          My name is Khayrullo Isomiddinov, but my friends know me as Harry. I hail from the beautiful country of Uzbekistan, a land of rich culture and history. Currently, I am pursuing my undergraduate degree in Computer Science at Eötvös Loránd University (ELTE) in Hungary.
  
          I am a proactive, detail-oriented, and ambitious individual with a deep passion for mathematics and its application in solving real-world problems. My love for learning and exploring new concepts in technology drives me to constantly expand my knowledge and skill set. Whether it’s programming, designing algorithms, or understanding complex systems, I thrive on challenges that push me to grow and innovate.
  
          As a lifelong learner, I am always honing my abilities in Computer Science by taking on meaningful projects, delving into new tools and frameworks, and staying updated with the latest industry trends. My journey is fueled by curiosity and a desire to master cutting-edge technologies that can create impactful solutions.
  
          Take a moment to explore the skills I’ve cultivated so far—skills that I continue to refine and enhance with every project and endeavor. I’m on a mission to not just build a career in technology but to contribute meaningfully to the field, making a difference through innovation and creativity.
        </AboutText>
        <Spacer />
  
        <h3>Technical Skills</h3>
        <SkillsContainer>
          <SkillItem>Java</SkillItem>
          <SkillItem>C#</SkillItem>
          <SkillItem>C</SkillItem>
          <SkillItem>Python</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>PHP</SkillItem>
          <SkillItem>Laravel</SkillItem>
          <SkillItem>ADA</SkillItem>
          <SkillItem>OOP Design Patterns</SkillItem>
          <SkillItem>Operating Systems</SkillItem>
        </SkillsContainer>
  
        <h3>Soft Skills</h3>
        <SkillsContainer>
          <SkillItem>Leadership</SkillItem>
          <SkillItem>Team Collaboration</SkillItem>
          <SkillItem>Critical Thinking</SkillItem>
          <SkillItem>Problem-Solving</SkillItem>
          <SkillItem>Adaptability</SkillItem>
          <SkillItem>Time Management</SkillItem>
          <SkillItem>Communication</SkillItem>
          <SkillItem>Project Management</SkillItem>
        </SkillsContainer>
      </AboutSection>
    );
  };
  

export default About;
