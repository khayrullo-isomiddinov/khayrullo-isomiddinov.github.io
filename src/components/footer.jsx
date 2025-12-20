import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
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
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  opacity: 0.8;
`;

const IconLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.1rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    opacity: 0.8;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

const CVButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.45rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accent}15;
    transform: translateY(-1px);
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

      <CenterSection>
        <IconLinks>
          <motion.a href="https://github.com/khayrullo-isomiddinov" target="_blank" rel="noreferrer" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <FaGithub />
          </motion.a>

          <motion.a href="https://www.linkedin.com/in/khayrullo-isomiddinov/" target="_blank" rel="noreferrer" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <FaLinkedin />
          </motion.a>

          <motion.a href="https://www.facebook.com/profile.php?id=100080260460705" target="_blank" rel="noreferrer" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <FaFacebook />
          </motion.a>

          <motion.a href="https://instagram.com/khayrulloismdnv" target="_blank" rel="noreferrer" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
            <FaInstagram />
          </motion.a>
        </IconLinks>
      </CenterSection>

      <RightSection>
        <CVButton
          href="/CV.pdf"
          download="HarryResume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <FiDownload size={14} />
          Download CV
        </CVButton>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;
