import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  margin-top: 2rem; /* Adds spacing above the footer */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  padding: 2rem;
  background-color: #0a192f;
  color: #8892b0;
  gap: 1rem; /* Add spacing between items */
`;

const IconLinks = styled.div`
  margin-top: 1rem;

  a {
    color: #8892b0;
    margin: 0 0.5rem;
    font-size: 1.5rem;
    &:hover {
      color: #64ffda;
    }
  }
`;

const CVButton = styled.a`
  background-color: #64ffda;
  color: #0a192f;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #52e3c2;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CVButton href="/HarrysResume.pdf" download="HarrysResume.pdf">
        Download CV
      </CVButton>

      <p>© {new Date().getFullYear()} Khayrullo Isomiddinov</p>
      <IconLinks>
        <a href="https://github.com/khayrullo-isomiddinov" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/khayrullo-isomiddinov" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </IconLinks>
    </FooterContainer>
  );
};

export default Footer;
