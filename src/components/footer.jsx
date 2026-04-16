import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const FooterEl = styled.footer`
  padding: 1.5rem clamp(1.5rem, 6vw, 5rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

const Copy = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const IconRow = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const IconLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

const CVBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.42rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 9999px;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.2s ease;
  background: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentDim};
  }
`;

const socials = [
  { href: 'https://github.com/khayrullo-isomiddinov',                        icon: <FaGithub />,    label: 'GitHub'    },
  { href: 'https://www.linkedin.com/in/khayrullo-isomiddinov/',               icon: <FaLinkedin />,  label: 'LinkedIn'  },
  { href: 'https://www.facebook.com/profile.php?id=100080260460705',          icon: <FaFacebook />,  label: 'Facebook'  },
  { href: 'https://instagram.com/khayrulloismdnv',                            icon: <FaInstagram />, label: 'Instagram' },
];

const Footer = () => (
  <FooterEl>
    <Copy>© {new Date().getFullYear()} Khayrullo Isomiddinov</Copy>

    <IconRow>
      {socials.map(({ href, icon, label }) => (
        <IconLink
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
        >
          {icon}
        </IconLink>
      ))}
    </IconRow>

    <CVBtn
      href="/cv.pdf"
      download="HarryResume.pdf"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      <FiDownload size={13} /> Download CV
    </CVBtn>
  </FooterEl>
);

export default Footer;
