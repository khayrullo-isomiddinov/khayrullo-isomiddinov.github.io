import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  margin-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.accent}40, transparent);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  opacity: 0.8;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`;

const CVButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent}10;
    transform: translateY(-1px);
  }
`;

const IconLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    opacity: 0.8;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <Copyright>
          © {new Date().getFullYear()} Khayrullo Isomiddinov
        </Copyright>
      </LeftSection>

      <RightSection>
        <CVButton
          href="/khayrullo-isomiddinov/HarryResume.pdf"
          download="HarryResume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiDownload size={14} />
          CV
        </CVButton>

        <IconLinks>
          <motion.a
            href="https://github.com/khayrullo-isomiddinov"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/khayrullo-isomiddinov"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
        </IconLinks>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
